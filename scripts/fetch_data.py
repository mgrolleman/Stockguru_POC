#!/usr/bin/env python3
"""Refresh data.json from Yahoo Finance (via yfinance).

Daily run. Per stock: price, 1yr/3yr max and min, % change vs last week, forward/trailing P/E,
net/operating margin, analyst rating and an outlook comment. If a value can't be fetched, the
previous value from data.json is kept, so the table never loses data.
Usage: python scripts/fetch_data.py [path/to/data.json]
"""
import json, os, sys, datetime, time
import yfinance as yf

PATH = sys.argv[1] if len(sys.argv) > 1 else 'data.json'
HIST_PATH = os.path.join(os.path.dirname(os.path.abspath(PATH)), 'history.json')
HIST = {}      # ticker -> {'s': first week-end date, 'v': weekly closes (3 years)}
FCY = set()    # financial currencies seen, so we can fetch their EUR rate
RATING = {'strong_buy': 'Strong Buy', 'buy': 'Buy', 'hold': 'Hold', 'underperform': 'Sell', 'sell': 'Sell', 'strong_sell': 'Sell'}
SYMBOL = {'BRK.B': 'BRK-B'}  # Yahoo spelling differences


def num(v):
    try:
        v = float(v)
        return v if v == v else None  # drop NaN
    except (TypeError, ValueError):
        return None


def rnd(v, n=2):
    return None if v is None else round(v, n)


def comment(growth, margin, fpe, rating, price, target):
    """Same rule set as the handover doc. growth = expected EPS growth in %, or None."""
    if growth is None:
        return None
    warn = 0
    warn += margin is not None and margin < 5
    warn += fpe is None or fpe > 40
    warn += rating in ('Hold', 'Sell')
    warn += bool(target and price and target < price)
    warn += growth < 0
    if warn >= 2:
        return ('Earnings expected to shrink', 'Winst naar verwachting lager') if growth < 0 else \
               ('Mixed: several warning signs', 'Gemengd: meerdere waarschuwingssignalen')
    upside = (target / price - 1) * 100 if target and price else None
    up = upside is not None and upside >= 10
    if growth >= 15:
        return ('Strong earnings growth expected', 'Sterke winstgroei verwacht')
    if growth >= 8:
        return ('Solid growth, upside to target', 'Solide groei, ruimte tot koersdoel') if up else \
               ('Solid growth, limited upside', 'Solide groei, beperkte ruimte')
    if growth >= 3:
        return ('Moderate growth, upside to target', 'Matige groei, ruimte tot koersdoel') if up else \
               ('Moderate growth, limited upside', 'Matige groei, beperkte ruimte')
    if growth >= 0:
        return ('Flat growth expected', 'Vlakke groei verwacht')
    return ('Earnings expected to shrink', 'Winst naar verwachting lager')


def refresh(row):
    sym = SYMBOL.get(row['t'], row['t'])
    if row.get('ccy') == 'USD' and '.' in sym:
        sym = sym.replace('.', '-')  # US class shares, e.g. BRK.B -> BRK-B
    tk = yf.Ticker(sym)
    h = tk.history(period='3y', interval='1d', auto_adjust=False)
    if h is None or len(h) < 20:
        raise RuntimeError('no price history')
    h = h.dropna(subset=['Close', 'High', 'Low'])
    price = float(h['Close'].iloc[-1])
    last = h.index[-1]
    y1 = h[h.index > last - datetime.timedelta(days=365)]
    row['p'] = rnd(price)
    try:
        wc = h['Close'].resample('W').last().ffill().dropna()
        HIST[row['t']] = {'s': str(wc.index[0].date()), 'v': [rnd(float(x), 2) for x in wc.values]}
    except Exception:
        pass
    row['m3'], row['n3'] = rnd(float(h['High'].max())), rnd(float(h['Low'].min()))
    row['m1'], row['n1'] = rnd(float(y1['High'].max())), rnd(float(y1['Low'].min()))
    # % vs last week's close = close of the last trading day on or before 7 days ago
    wk = h[h.index <= last - datetime.timedelta(days=7)]
    if len(wk):
        row['wk'] = rnd((price / float(wk['Close'].iloc[-1]) - 1) * 100, 1)

    try:
        info = tk.info or {}
    except Exception:
        info = {}
    rev = num(info.get('totalRevenue'))
    if rev:
        row['rev'] = rnd(rev / 1e9, 2)   # annual revenue, billions, in the financial currency below
        row['fcy'] = str(info.get('financialCurrency') or row.get('ccy') or 'USD')
        FCY.add(row['fcy'])
    fpe, tpe = num(info.get('forwardPE')), num(info.get('trailingPE'))
    if fpe is not None and fpe > 0: row['pe'] = rnd(fpe)
    if tpe is not None: row['pet'] = rnd(tpe) if tpe > 0 else None
    mg, om = num(info.get('profitMargins')), num(info.get('operatingMargins'))
    if mg is not None: row['mg'] = rnd(mg * 100, 1)
    if om is not None: row['om'] = rnd(om * 100, 1)
    rating = RATING.get(str(info.get('recommendationKey') or '').lower())
    if rating: row['r'] = rating
    feps, teps = num(info.get('forwardEps')), num(info.get('trailingEps'))
    growth = (feps / teps - 1) * 100 if feps is not None and teps and teps > 0 else None
    c = comment(growth, row.get('mg'), row.get('pe'), row.get('r'), price, num(info.get('targetMeanPrice')))
    if c: row['c'], row['cn'] = c
    return row


def fx(extra=()):
    out = {'EUR': 1}
    for ccy in sorted(({'USD', 'CHF'} | set(extra)) - {'EUR'}):
        sym = 'EUR%s=X' % ccy
        try:
            h = yf.Ticker(sym).history(period='5d')
            v = rnd(float(h['Close'].dropna().iloc[-1]), 4)
            if v and 0.3 < v < 3:  # sanity check: EUR is worth roughly 0.8-1.5 of these
                out[ccy] = v
        except Exception:
            pass
    return out


def main():
    data = json.load(open(PATH))
    try:
        HIST.update(json.load(open(HIST_PATH)).get('series', {}))  # keep old history for stocks that fail today
    except Exception:
        pass
    ok, failed = 0, []
    for row in data['stocks']:
        try:
            refresh(row)
            ok += 1
        except Exception as e:
            failed.append(row['t'])
            print('FAILED', row['t'], e, file=sys.stderr)
        time.sleep(0.2)
    rates = fx(FCY | {r.get('ccy') for r in data['stocks'] if r.get('ccy')})
    data['fx'] = {**data.get('fx', {}), **rates}
    print('updated %d of %d; failed: %s' % (ok, len(data['stocks']), ', '.join(failed) or '-'))
    if ok < len(data['stocks']) * 0.5:
        sys.exit('Too few stocks updated (%d) - keeping the previous data.json' % ok)
    data['asof'] = datetime.date.today().isoformat()
    json.dump(data, open(PATH, 'w'), ensure_ascii=False, indent=1)
    json.dump({'asof': data['asof'], 'series': HIST}, open(HIST_PATH, 'w'), separators=(',', ':'))


if __name__ == '__main__':
    main()
