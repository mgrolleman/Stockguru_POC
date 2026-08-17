(function(){

  var SECTIONS = [
    {
      title:"Finance basics",
      sub:"What you actually own",
      learnMore:"Imagine buying a single share of a company you believe in. That purchase makes you a tiny owner — not a lender, not a customer, an actual owner. If the company thrives, profits can come back to you as dividends, and the value of your slice can grow. If it struggles, your slice can shrink in value, and if it goes under, owners are the last to get anything back, well behind lenders and bondholders. That's the trade at the heart of investing: as an owner you take on more risk than a lender does, but you also get to share directly in the upside with no ceiling on how well things can go. Every time you check a stock price, you're seeing what the market currently thinks your slice of that business is worth — a number that shifts constantly as new information arrives, but one that doesn't erase your ownership. Understanding that distinction — owner versus lender — is the single most useful mental model for everything else you'll learn about investing.",
      questions:[
        {
          q:"When you buy a share of stock, what are you actually buying?",
          options:["A loan to the company","A small ownership stake in the company","A guaranteed dividend payment","A seat on the board"],
          correct:1,
          explain:"A share represents partial ownership of a company. As an owner, you're entitled to a slice of its profits and assets — though never a guaranteed one."
        },
        {
          q:"If a stock you own goes up in price, what does that mean for you?",
          options:["The extra money is automatically transferred to your bank account","Your shares are now worth more on paper — you only actually make money once you sell them again on a platform","The company sends you a cash bonus","Nothing, until the company makes an announcement"],
          correct:1,
          explain:"A rising price only means your shares are worth more on paper — that's called an \u201Cunrealized\u201D gain. You only actually make money once you sell your shares again on a platform; only then does it become real, realized profit."
        },
        {
          q:"What is a dividend?",
          options:["A fee charged to trade stocks","A portion of company profit paid to shareholders","The price you pay for a share","A tax on stock market gains"],
          correct:1,
          explain:"Not every company pays one — many reinvest profits into growth instead. When they do, it's cash paid straight to shareholders, usually every quarter."
        },
        {
          q:"What is the stock market, in plain terms?",
          options:["A single building where stocks are printed","A government agency that sets stock prices","A marketplace where investors buy and sell shares","A savings account for company profits"],
          correct:2,
          explain:"It's a network of exchanges — like the NYSE or Nasdaq — where buyers and sellers agree on a price for shares, all day, every trading day."
        },
        {
          q:"If a company's stock price drops, what happens to your shares?",
          options:["They're automatically converted to cash","You still own the same number of shares, just worth less","The company takes them back","You owe the company money"],
          correct:1,
          explain:"Ownership doesn't change with price. You still hold the same shares — their market value has just fallen, on paper, until you sell."
        }
      ],
      intermediate:[
        {
          q:"If a company goes bankrupt, where do common shareholders rank in getting paid back?",
          options:["First, before all creditors","After bondholders and other creditors are paid","At the same time as employees' wages","Shareholders are guaranteed a fixed payout"],
          correct:1,
          explain:"Common shareholders sit last in line — bondholders and other creditors get paid first, part of why stocks carry more risk than bonds."
        },
        {
          q:"What does it mean if a company issues \u201Cpreferred stock\u201D?",
          options:["A class of shares with typically fixed dividends and priority over common stock, but usually no voting rights","A stock only insiders can buy","A guaranteed loan","A stock that can't lose value"],
          correct:0,
          explain:"Preferred shares sit between bonds and common stock — steadier income and priority in a payout, but usually you give up a vote."
        }
      ],
      advanced:[
        {
          q:"A stock buyback (share repurchase) typically does what to existing shareholders?",
          options:["Dilutes their ownership","Reduces the number of shares outstanding, increasing each remaining share's proportional ownership","Forces them to sell","Has no effect on ownership"],
          correct:1,
          explain:"By retiring shares, a company shrinks the share count — so each remaining share represents a slightly bigger slice of the company."
        }
      ]
    },
    {
      title:"How markets move",
      sub:"Price, sentiment, scale",
      learnMore:"Prices don't move because of some fixed formula — they move because millions of buyers and sellers are constantly re-negotiating what a company is worth, in real time, based on new information, expectations, and mood. A run of optimism and rising prices is called a bull market; a sustained slide is a bear market. Somewhere between the two sits ordinary daily noise: volatility, the natural up-and-down wobble of any actively traded asset. None of this is meaningless randomness — it reflects genuine disagreement about the future. A stock's price today already contains everyone's best guess about tomorrow's earnings, so news only moves the price when it changes that guess. That's why even \u201Cgood\u201D news can send a price down, if it wasn't quite as good as everyone secretly expected. Zoom out far enough, across an index like the S&P 500 tracking hundreds of companies at once, and the day-to-day noise smooths into a longer story — one that has, historically, tended to trend upward over long stretches of time, even though no single day is ever guaranteed.",
      questions:[
        {
          q:"What's a \u201Cbull market\u201D?",
          options:["A period of falling prices","A period of rising prices and optimism","A market only for commodities","A single day of high trading volume"],
          correct:1,
          explain:"Bull markets are sustained upswings, usually tied to growth and confidence. A bear market is its counterpart — a sustained downturn."
        },
        {
          q:"What mainly determines a stock's price at any moment?",
          options:["The company's founding date","What buyers are willing to pay and sellers willing to accept","A fixed number set by the exchange","The average price over the last decade"],
          correct:1,
          explain:"Prices move on supply and demand, moment to moment — shaped by earnings, news, and shifting expectations about the future."
        },
        {
          q:"What does \u201Cvolatility\u201D mean in investing?",
          options:["How often a company changes its name","How much a price swings up and down over time","The total value of a company","How many shares are available to buy"],
          correct:1,
          explain:"A volatile stock swings sharply in price; a stable one moves gradually. Higher volatility usually means higher risk — and higher potential reward."
        },
        {
          q:"What is a stock market index, like the S&P 500?",
          options:["A single company's stock","A basket tracking the performance of many stocks together","A type of bond","A government-set price ceiling"],
          correct:1,
          explain:"An index bundles many stocks — the S&P 500 tracks roughly 500 large U.S. companies — to give a snapshot of \u201Cthe market,\u201D not just one stock."
        },
        {
          q:"A company's \u201Cmarket cap\u201D is calculated as:",
          options:["Revenue minus expenses","Share price \u00D7 total number of shares","Total employees \u00D7 average salary","Annual profit \u00F7 dividend yield"],
          correct:1,
          explain:"Market capitalization is the value the market assigns a company — a $50 share price with 2 billion shares outstanding is a $100 billion market cap."
        }
      ],
      intermediate:[
        {
          q:"What's a \u201Ccorrection\u201D in market terminology?",
          options:["A 10%+ drop from a recent high","Any single down day","A change in a company's earnings report","An adjustment to a stock's ticker symbol"],
          correct:0,
          explain:"A correction is a decline of roughly 10% or more from a recent peak — smaller and more common than a full bear market."
        },
        {
          q:"What does \u201Cliquidity\u201D mean for a stock?",
          options:["How much debt the company carries","How easily you can buy or sell it without moving the price much","The company's cash reserves","The dividend payout ratio"],
          correct:1,
          explain:"A liquid stock trades often with many buyers and sellers, so you can enter or exit without big price swings from your own trade."
        },
        {
          q:"Why can a stock keep falling even after strong earnings?",
          options:["Earnings never affect price","The results still missed what the market had already priced in as expectations","It's illegal to fall after good earnings","The exchange fixes the price for a day"],
          correct:1,
          explain:"Prices react to results versus expectations, not results in isolation — even \u201Cgood\u201D earnings can miss a high bar and send a stock down."
        },
        {
          q:"When a central bank raises interest rates to fight inflation, what does that typically do to stock prices?",
          options:["Stock prices usually rise, since higher rates mean businesses earn more","Stock prices often fall, since borrowing gets pricier and future profits are worth less today","Stock prices are completely unaffected by interest rates","Interest rates only affect bond prices, never stocks"],
          correct:1,
          explain:"Higher rates raise borrowing costs for companies and consumers, and make future profits worth less in today's money — both tend to weigh on stock valuations, which is why markets often react negatively to rate hikes."
        }
      ],
      advanced:[
        {
          q:"What does the Consumer Confidence Index measure, and why do investors watch it?",
          options:["How confident central bankers are in their own policies","How optimistic households feel about the economy and their own finances — a signal for future spending","The stock market's overall trading volume","How many new companies are listed on an exchange"],
          correct:1,
          explain:"It's a survey-based gauge of household optimism. Since consumer spending drives a large share of economic activity, a rising index often hints at stronger future spending — and a falling one can be an early warning sign."
        },
        {
          q:"In the Eurozone, which institution sets the main interest rate that ripples through European borrowing costs?",
          options:["The European Central Bank (ECB)","The national government of each country individually","The London Stock Exchange","Individual commercial banks, independently of each other"],
          correct:0,
          explain:"The ECB sets the benchmark interest rate for the euro area. Its decisions influence everything from mortgage rates to how expensive it is for companies to borrow and invest."
        },
        {
          q:"In the 2008 financial crisis, a wave of mortgage defaults badly damaged major banks. What generally happens to stock prices during this kind of systemic crisis?",
          options:["Prices spike upward on the uncertainty","Prices tend to fall sharply, as fear and forced selling spread across markets","Prices stay completely flat, since crises don't affect stocks","Only bank stocks are affected; every other sector is untouched"],
          correct:1,
          explain:"2008 saw broad, sharp declines — not just in bank stocks. Fear and forced selling tend to spread across nearly every sector during a systemic financial crisis, not just the one at the center of it."
        },
        {
          q:"If a country unexpectedly reports much higher unemployment than economists forecast, what's the typical initial reaction in the stock market?",
          options:["Prices usually rise, since fewer people working saves companies money","Prices often fall, since it signals a weakening economy and lower future spending","Stock prices are never affected by employment data","It only affects the currency, never stocks"],
          correct:1,
          explain:"Weak employment data suggests the economy may be slowing, which can mean lower consumer spending and weaker company earnings ahead — a combination markets typically price in quickly, and negatively."
        }
      ]
    },
    {
      title:"Reading the numbers",
      sub:"The vocabulary of a quote",
      learnMore:"Every stock quote hides a small vocabulary that turns a raw price into something you can actually reason about. A P/E ratio tells you how many dollars investors are paying for each dollar of a company's current profit — a rough shorthand for whether a stock looks expensive or cheap relative to its earnings. EPS breaks total profit down to a per-share basis, so you can compare a giant company to a tiny one on equal footing. Dividend yield reframes a company's payout as a percentage of its share price, so a $2 dividend means something different on a $20 stock than on a $200 one. None of these numbers hands you a verdict on their own — a low P/E might be a bargain, or it might be the market quietly pricing in real trouble ahead. They're tools for asking better questions, not answers in themselves. And when you're ready to act on what you've found, the type of order matters too: a market order trades speed for certainty of price, while a limit order lets you name your price and wait.",
      questions:[
        {
          q:"What does a stock's P/E (price-to-earnings) ratio tell you?",
          options:["How many shares are traded per day","How much investors are paying for each dollar of the company's profit","The company's total debt","The dividend paid per share"],
          correct:1,
          explain:"A P/E of 20 means investors are paying $20 for every $1 of annual earnings — a rough gauge of whether a stock looks expensive relative to its profits."
        },
        {
          q:"What is EPS (earnings per share)?",
          options:["A company's total profit divided by its number of outstanding shares","The price you pay for one share","The exchange fee per trade","A company's total revenue"],
          correct:0,
          explain:"EPS translates total profit into a per-share figure, making it easier to compare profitability across companies of very different sizes."
        },
        {
          q:"What's the difference between a market order and a limit order?",
          options:["Market orders execute immediately at the current price; limit orders only execute at a price you set","They're two names for the same thing","Limit orders are only for selling","Market orders can only be placed once a day"],
          correct:0,
          explain:"A market order prioritizes speed — you get the current price. A limit order prioritizes price — it only fills at the level you specify."
        },
        {
          q:"Why does compound interest matter so much for long-term investors?",
          options:["It doesn't — it's only relevant to savings accounts","Returns earn returns on top of returns, so growth accelerates over time","It guarantees a fixed rate every year","It only applies to bonds"],
          correct:1,
          explain:"Reinvested gains generate their own gains. Over decades, that compounding effect often drives more wealth than the amount originally invested."
        },
        {
          q:"What does dividend yield measure?",
          options:["A stock's annual dividend payment as a percentage of its share price","The number of dividends paid per year","The total dollar amount a company pays in dividends","The tax rate on dividend income"],
          correct:0,
          explain:"A $2 annual dividend on a $50 stock is a 4% yield — it lets you compare dividend income across stocks regardless of their price."
        }
      ],
      intermediate:[
        {
          q:"A stock with a very low P/E compared to its industry could mean:",
          options:["It's always a bargain","It might be undervalued — or the market may be pricing in real problems ahead","It has no earnings","It pays no tax"],
          correct:1,
          explain:"A cheap-looking P/E can be a genuine opportunity or a warning sign — it takes more digging to tell which."
        },
        {
          q:"What does \u201CP/B\u201D (price-to-book) ratio compare?",
          options:["Share price to the company's net asset value on its books","Share price to its brand value","Share price to its stock ticker length","Share price to CEO salary"],
          correct:0,
          explain:"P/B compares market price to accounting book value — useful for asset-heavy businesses like banks or real estate."
        }
      ],
      advanced:[
        {
          q:"Why might two analysts disagree sharply on a stock's \u201Cfair value\u201D?",
          options:["One of them made a math error by definition","Valuation depends on assumptions about future growth and risk, which reasonably differ","Fair value is a fixed number set by regulators","Only one analyst is allowed to be right"],
          correct:1,
          explain:"Valuation isn't a single formula — it's built on assumptions about the future, so reasonable analysts can land on different numbers."
        }
      ]
    },
    {
      title:"Investment types",
      sub:"Stocks, ETFs, metals, crypto, bonds",
      learnMore:"Not all investments play the same role. Company stocks hand you ownership and a claim on future growth, with no ceiling and no floor. Government bonds do the opposite: you're lending money for a fixed return, trading upside for predictability. ETFs sit in between as a wrapper — a single tradeable basket that can hold dozens or thousands of underlying stocks or bonds at once, so you get instant diversification without buying each piece yourself. Gold and silver behave differently again: they don't pay you anything and don't grow a business, but many investors hold them as a hedge, a store of value when everything else feels uncertain. Cryptocurrency is the newest and most distinct of the group — it isn't a claim on any company's profits or backed by any government, so its value rests entirely on supply, demand, and belief in the technology behind it. None of these is simply \u201Cbetter\u201D than another; they behave differently in different conditions, which is exactly why mixing them, deliberately, is itself a strategy.",
      questions:[
        {
          q:"What is the main difference between owning a company stock and owning a government bond?",
          options:["A stock is ownership with variable returns; a bond is a loan with a set interest payment","They are the same, just different names","Bonds can only be purchased by governments","Stocks are always safer than bonds"],
          correct:0,
          explain:"Stocks make you a part-owner riding the company's ups and downs. Bonds make you a lender, typically for a fixed interest rate over a set term."
        },
        {
          q:"What is an ETF (exchange-traded fund)?",
          options:["A single company's stock","A basket of many assets — like stocks or bonds — that trades on an exchange like a single stock","A type of savings account","A cryptocurrency"],
          correct:1,
          explain:"An ETF bundles many holdings into one tradeable security, giving instant diversification without buying each underlying asset separately."
        },
        {
          q:"What role do gold and silver typically play in a portfolio?",
          options:["High-growth assets expected to multiply quickly","A store of value some investors use to hedge against inflation or uncertainty","A type of company stock","A guaranteed fixed income"],
          correct:1,
          explain:"Precious metals don't produce earnings or interest — they're usually held as a hedge, and their price is driven by supply, demand, and sentiment."
        },
        {
          q:"What makes cryptocurrency different from a traditional stock?",
          options:["It represents no ownership in a company and isn't backed by company earnings or government-issued currency","It always pays a dividend","It's regulated identically to stocks worldwide","It has no price volatility"],
          correct:0,
          explain:"Crypto isn't a claim on a company's profits — its value comes from supply, demand, and belief in the underlying network, a fundamentally different asset class."
        },
        {
          q:"Which of these is generally considered the most conservative, income-focused investment type?",
          options:["Cryptocurrency","Government bonds","Individual growth stocks","Precious metals"],
          correct:1,
          explain:"Government bonds, especially from stable economies, are typically viewed as lower-risk — steady, predictable interest rather than high growth potential."
        }
      ],
      intermediate:[
        {
          q:"Why might an investor hold both stocks and bonds together?",
          options:["Bonds and stocks often behave differently in downturns, so mixing them can smooth overall portfolio swings","It's required by every broker","Bonds always outperform stocks","There's no reason, they're identical"],
          correct:0,
          explain:"Bonds have historically cushioned some stock downturns, which is why a mixed strategy is common for balancing growth and stability."
        },
        {
          q:"What's a key structural risk specific to many crypto assets that traditional stocks don't share?",
          options:["Exchange or wallet security and custody risk, alongside limited regulatory protection","They can never be sold","They are only available on weekdays","They pay corporate taxes"],
          correct:0,
          explain:"Beyond price swings, crypto adds risks around exchange hacks, lost keys, and thinner regulatory safety nets compared to listed securities."
        },
        {
          q:"Roughly how many stocks, ETFs, and cryptocurrencies exist worldwide today?",
          options:["About 60,000 stocks, 15,000 ETFs, and over 10,000 cryptocurrencies","About 10,000 stocks, 60,000 ETFs, and 500 cryptocurrencies","About 500 stocks, 5,000 ETFs, and 60,000 cryptocurrencies","About 1,000 stocks, 1,000 ETFs, and 1,000 cryptocurrencies"],
          correct:0,
          explain:"There are roughly 60,000 publicly listed companies worldwide, about 15,000 ETFs, and — as covered with Bitcoin above — well over 10,000 different cryptocurrencies. That's a lot of choice, which is exactly why diversification and knowing what you're buying matters."
        }
      ],
      advanced:[
        {
          q:"An ETF that tracks gold prices without holding physical metal is exposed to which extra risk versus owning gold directly?",
          options:["None, they're identical","Counterparty or fund-structure risk from how the ETF is built","It pays a mandatory dividend","It can't be traded on exchanges"],
          correct:1,
          explain:"Depending on structure, a gold ETF may rely on derivatives or unallocated holdings rather than physical bars — worth understanding upfront."
        }
      ]
    },
    {
      title:"Building a portfolio",
      sub:"Risk, mix, discipline",
      learnMore:"No single stock pick, however good it feels, should carry your entire financial future — that's the simple insight behind diversification. Spread your money across many holdings, and one bad outcome stops being catastrophic. Pair that with an honest read on risk and return: taking on more risk is how you earn the possibility of more return, never a guarantee of it. From there, the real decisions aren't about picking the \u201Cbest\u201D stock — they're about allocation: how much goes into stocks versus bonds versus cash, since that mix tends to matter more for your results than which individual company you chose. Two simple habits do a lot of the heavy lifting here. Dollar-cost averaging — investing a fixed amount on a regular schedule — means you naturally buy more when prices are cheap and less when they're expensive, without needing to predict anything. And rebalancing — periodically nudging your mix back to your original target — quietly forces you to trim what's grown too large and top up what's lagged, a disciplined way of buying low and selling high without ever trying to time the market.",
      questions:[
        {
          q:"Why do investors diversify across many stocks instead of buying just one?",
          options:["It's required by law","To spread out risk, so one bad performer doesn't sink the whole portfolio","It guarantees higher returns","Brokers charge less for multiple stocks"],
          correct:1,
          explain:"If one holding drops sharply, a diversified portfolio absorbs the hit better than a concentrated one — one of the few genuine free lunches in investing."
        },
        {
          q:"What's the general relationship between risk and expected return?",
          options:["Higher risk usually comes with higher potential return","Higher risk always means lower return","Risk and return are unrelated","Lower risk always beats higher risk over time"],
          correct:0,
          explain:"It's a trade-off, not a guarantee — riskier assets need to offer more potential upside to compensate investors for the extra uncertainty."
        },
        {
          q:"What is an index fund?",
          options:["A fund that tries to beat the market by picking winning stocks","A fund that buys and holds all — or most — stocks in an index","A savings bond issued by the government","A fund only available to institutional investors"],
          correct:1,
          explain:"Instead of guessing which stocks will win, an index fund owns the whole basket — low cost, broad diversification, and a common starting point."
        },
        {
          q:"What is dollar-cost averaging?",
          options:["Buying a fixed dollar amount of an investment at regular intervals, regardless of price","Only buying when the price hits its lowest point","Converting your portfolio to cash once a year","Averaging the price of every stock in the S&P 500"],
          correct:0,
          explain:"By investing the same amount regularly, you buy more shares when prices are low and fewer when they're high — smoothing out the effect of timing."
        },
        {
          q:"What does \u201Casset allocation\u201D mean?",
          options:["The specific stocks you own","How you split your money across categories like stocks, bonds, and cash","The fees your broker charges","The order in which you sell your holdings"],
          correct:1,
          explain:"Allocation is the big-picture mix — stocks vs. bonds vs. cash — and it's usually a bigger driver of long-term results than which stocks you pick."
        }
      ],
      intermediate:[
        {
          q:"What's \u201Crebalancing\u201D a portfolio?",
          options:["Selling everything and starting over","Periodically adjusting holdings back to your target allocation","Only buying more of your winners","A tax filing requirement"],
          correct:1,
          explain:"As some holdings grow faster than others, your mix drifts. Rebalancing trims the winners and tops up laggards to restore your intended risk level."
        },
        {
          q:"What's the main risk of over-diversifying?",
          options:["It's illegal past a certain number of holdings","Returns can start to resemble the average market, diluting your best picks' impact","It automatically increases fees to zero","There's no such thing as over-diversifying"],
          correct:1,
          explain:"Spread too thin, a portfolio can start to just track the broad market — not necessarily bad, but your winners have less room to move the needle."
        }
      ],
      advanced:[
        {
          q:"What does \u201Ccorrelation\u201D between two assets describe?",
          options:["Which one has a higher price","How closely their price movements track each other","Which one pays a bigger dividend","Their combined market cap"],
          correct:1,
          explain:"Low or negative correlation is what makes diversification actually reduce risk — assets that don't move in lockstep smooth out the ride."
        }
      ]
    },
    {
      title:"Getting started",
      sub:"Platforms & tools",
      learnMore:"The gap between wanting to invest and actually doing it is usually smaller than it feels. Opening an account on a European platform — Bitvavo and Kraken are two well-known names — typically takes a verified ID, a linked bank account, and a few minutes of your time; the identity check (KYC) is a routine legal requirement everywhere, not a red flag specific to any one platform. From there, a small transaction fee applies whenever you actually buy or sell, so it's worth a quick glance at a platform's fee page before committing, since those small percentages add up over many trades or many years. Plenty of investors also lean on separate tools purely for research: TradingView for charting price movements, Yahoo Finance for free quotes, news, and company fundamentals — neither requires you to trade through them, they're just for looking. Put those pieces together — a verified account, an understanding of fees, and a place to do your homework — and you have everything you actually need to place your first trade.",
      questions:[
        {
          q:"What do you typically need to open an account on a European trading or crypto platform?",
          options:["A registered business and a lawyer","A verified ID, a bank account to fund it, and a few minutes to sign up","A minimum of ten thousand euros","A referral from an existing professional trader"],
          correct:1,
          explain:"Most platforms — like Bitvavo or Kraken — just need identity verification and a linked bank account. Sign-up itself is usually free and takes minutes."
        },
        {
          q:"Why do platforms require identity verification (KYC)?",
          options:["To sell your data to advertisers","It's a legal requirement to prevent fraud and money laundering","Just to make sign-up harder","Only crypto platforms require it, not stock brokers"],
          correct:1,
          explain:"\u201CKnow Your Customer\u201D checks are a regulatory requirement across both stock brokers and crypto exchanges — a routine step, not a red flag."
        },
        {
          q:"What are transaction (trading) fees?",
          options:["A one-time signup cost only","A small cost charged per trade, often a percentage of the amount or a flat fee","A tax paid directly to the government","A fee only advanced traders pay"],
          correct:1,
          explain:"Nearly every platform charges something per trade — usually a small percentage or flat fee — worth checking a platform's fee schedule before you start."
        },
        {
          q:"What is TradingView commonly used for?",
          options:["Buying groceries online","Charting and analyzing price movements across stocks, crypto, and other markets","Filing taxes","Verifying your identity for a broker"],
          correct:1,
          explain:"TradingView is a widely used charting tool — many investors use it to study price trends even if they execute trades on a separate platform."
        },
        {
          q:"What is Yahoo Finance typically used for?",
          options:["Sending international bank transfers","Free access to stock quotes, financial news, and company fundamentals","Verifying crypto wallet addresses","Placing high-frequency trades"],
          correct:1,
          explain:"Yahoo Finance is a popular free source for quotes, news, and basic company financials — a common starting point for research."
        }
      ],
      intermediate:[
        {
          q:"What's a practical reason to compare fee structures across platforms before choosing one?",
          options:["Fees are identical everywhere so it doesn't matter","Small percentage fees compound over many trades and can meaningfully affect long-term returns","Only professional traders pay fees","Fees are refunded after a year"],
          correct:1,
          explain:"A seemingly small fee difference per trade adds up significantly if you trade often or invest over decades — worth a few minutes of comparison upfront."
        },
        {
          q:"What's a \u201Climit order\u201D useful for when starting out on a new platform?",
          options:["Guaranteeing the lowest possible price always","Controlling exactly the price you're willing to buy or sell at, rather than accepting whatever the market offers","Avoiding all fees","Bypassing identity verification"],
          correct:1,
          explain:"For a new trader still getting comfortable with a platform, a limit order adds a safety net — you won't get filled at a price you didn't intend."
        }
      ],
      advanced:[
        {
          q:"Why might an investor use more than one platform or tool — say, a broker plus TradingView?",
          options:["It's required by law","Charting/research tools and execution platforms often specialize — one for analysis, another for placing trades","To pay double the fees on purpose","Because no platform allows both buying and viewing charts"],
          correct:1,
          explain:"Many investors research and chart on one tool and execute trades on their broker or exchange of choice — the two jobs don't have to be in the same place."
        }
      ]
    }
  ];

  var ALLWORLD_DATA = [
    {label:"Aug 2021", value:100.0},{label:"Sep 2021", value:99.5},{label:"Oct 2021", value:101.0},
    {label:"Nov 2021", value:103.0},{label:"Dec 2021", value:104.0},
    {label:"Jan 2022", value:101.0},{label:"Feb 2022", value:98.0},{label:"Mar 2022", value:97.0},
    {label:"Apr 2022", value:95.0},{label:"May 2022", value:90.0},{label:"Jun 2022", value:85.0},
    {label:"Jul 2022", value:86.0},{label:"Aug 2022", value:89.0},{label:"Sep 2022", value:83.0},
    {label:"Oct 2022", value:81.0},{label:"Nov 2022", value:87.0},{label:"Dec 2022", value:86.0},
    {label:"Jan 2023", value:89.0},{label:"Feb 2023", value:91.0},{label:"Mar 2023", value:90.0},
    {label:"Apr 2023", value:92.0},{label:"May 2023", value:91.0},{label:"Jun 2023", value:96.0},
    {label:"Jul 2023", value:99.0},{label:"Aug 2023", value:97.0},{label:"Sep 2023", value:95.0},
    {label:"Oct 2023", value:92.0},{label:"Nov 2023", value:97.0},{label:"Dec 2023", value:102.0},
    {label:"Jan 2024", value:104.0},{label:"Feb 2024", value:108.0},{label:"Mar 2024", value:111.0},
    {label:"Apr 2024", value:108.0},{label:"May 2024", value:111.0},{label:"Jun 2024", value:113.0},
    {label:"Jul 2024", value:115.0},{label:"Aug 2024", value:114.0},{label:"Sep 2024", value:117.0},
    {label:"Oct 2024", value:119.0},{label:"Nov 2024", value:121.0},{label:"Dec 2024", value:123.0},
    {label:"Jan 2025", value:122.0},{label:"Feb 2025", value:124.0},{label:"Mar 2025", value:118.0},
    {label:"Apr 2025", value:112.0},{label:"May 2025", value:120.0},{label:"Jun 2025", value:124.0},
    {label:"Jul 2025", value:129.0},{label:"Aug 2025", value:132.0},{label:"Sep 2025", value:136.0},
    {label:"Oct 2025", value:139.0},{label:"Nov 2025", value:140.0},{label:"Dec 2025", value:142.0},
    {label:"Jan 2026", value:144.0},{label:"Feb 2026", value:143.0},{label:"Mar 2026", value:139.0},
    {label:"Apr 2026", value:145.0},{label:"May 2026", value:153.0},{label:"Jun 2026", value:154.0},
    {label:"Jul 2026", value:156.0}
  ];

  var GOLD_DATA = [
    {label:"Aug 2021", value:1780},{label:"Sep 2021", value:1750},{label:"Oct 2021", value:1783},
    {label:"Nov 2021", value:1800},{label:"Dec 2021", value:1828},
    {label:"Jan 2022", value:1817},{label:"Feb 2022", value:1900},{label:"Mar 2022", value:1945},
    {label:"Apr 2022", value:1920},{label:"May 2022", value:1850},{label:"Jun 2022", value:1820},
    {label:"Jul 2022", value:1765},{label:"Aug 2022", value:1750},{label:"Sep 2022", value:1660},
    {label:"Oct 2022", value:1656},{label:"Nov 2022", value:1750},{label:"Dec 2022", value:1824},
    {label:"Jan 2023", value:1928},{label:"Feb 2023", value:1830},{label:"Mar 2023", value:1969},
    {label:"Apr 2023", value:1990},{label:"May 2023", value:1960},{label:"Jun 2023", value:1919},
    {label:"Jul 2023", value:1950},{label:"Aug 2023", value:1940},{label:"Sep 2023", value:1866},
    {label:"Oct 2023", value:1997},{label:"Nov 2023", value:2036},{label:"Dec 2023", value:2063},
    {label:"Jan 2024", value:2050},{label:"Feb 2024", value:2044},{label:"Mar 2024", value:2214},
    {label:"Apr 2024", value:2286},{label:"May 2024", value:2327},{label:"Jun 2024", value:2327},
    {label:"Jul 2024", value:2426},{label:"Aug 2024", value:2503},{label:"Sep 2024", value:2635},
    {label:"Oct 2024", value:2743},{label:"Nov 2024", value:2643},{label:"Dec 2024", value:2625},
    {label:"Jan 2025", value:2798},{label:"Feb 2025", value:2860},{label:"Mar 2025", value:2983},
    {label:"Apr 2025", value:3300},{label:"May 2025", value:3300},{label:"Jun 2025", value:3300},
    {label:"Jul 2025", value:3350},{label:"Aug 2025", value:3450},{label:"Sep 2025", value:3850},
    {label:"Oct 2025", value:4379},{label:"Nov 2025", value:4300},{label:"Dec 2025", value:4250},
    {label:"Jan 2026", value:5414},{label:"Feb 2026", value:5100},{label:"Mar 2026", value:4900},
    {label:"Apr 2026", value:4700},{label:"May 2026", value:4500},{label:"Jun 2026", value:4300},
    {label:"Jul 2026", value:4200}
  ];

  var BITCOIN_DATA = [
    {label:"Aug 2021", value:47000},{label:"Sep 2021", value:43800},{label:"Oct 2021", value:61300},
    {label:"Nov 2021", value:57000},{label:"Dec 2021", value:46266},
    {label:"Jan 2022", value:38500},{label:"Feb 2022", value:43200},{label:"Mar 2022", value:45500},
    {label:"Apr 2022", value:37700},{label:"May 2022", value:31800},{label:"Jun 2022", value:19900},
    {label:"Jul 2022", value:23300},{label:"Aug 2022", value:20000},{label:"Sep 2022", value:19400},
    {label:"Oct 2022", value:20500},{label:"Nov 2022", value:17200},{label:"Dec 2022", value:16536},
    {label:"Jan 2023", value:23300},{label:"Feb 2023", value:23100},{label:"Mar 2023", value:28400},
    {label:"Apr 2023", value:29200},{label:"May 2023", value:27200},{label:"Jun 2023", value:30500},
    {label:"Jul 2023", value:29200},{label:"Aug 2023", value:25900},{label:"Sep 2023", value:26900},
    {label:"Oct 2023", value:34500},{label:"Nov 2023", value:37700},{label:"Dec 2023", value:42233},
    {label:"Jan 2024", value:43000},{label:"Feb 2024", value:61100},{label:"Mar 2024", value:71300},
    {label:"Apr 2024", value:60600},{label:"May 2024", value:67500},{label:"Jun 2024", value:60700},
    {label:"Jul 2024", value:64700},{label:"Aug 2024", value:59000},{label:"Sep 2024", value:63300},
    {label:"Oct 2024", value:70200},{label:"Nov 2024", value:96500},{label:"Dec 2024", value:93400},
    {label:"Jan 2025", value:102400},{label:"Feb 2025", value:84400},{label:"Mar 2025", value:82500},
    {label:"Apr 2025", value:94200},{label:"May 2025", value:104600},{label:"Jun 2025", value:107100},
    {label:"Jul 2025", value:116000},{label:"Aug 2025", value:110000},{label:"Sep 2025", value:114000},
    {label:"Oct 2025", value:120000},{label:"Nov 2025", value:95000},{label:"Dec 2025", value:87000},
    {label:"Jan 2026", value:93000},{label:"Feb 2026", value:98000},{label:"Mar 2026", value:89000},
    {label:"Apr 2026", value:96000},{label:"May 2026", value:105000},{label:"Jun 2026", value:112000},
    {label:"Jul 2026", value:108000}
  ];

  var NFLX_DATA = [
    {label:"Aug 2021", value:57.0},{label:"Sep 2021", value:61.0},{label:"Oct 2021", value:66.0},
    {label:"Nov 2021", value:69.0},{label:"Dec 2021", value:60.0},
    {label:"Jan 2022", value:43.0},{label:"Feb 2022", value:39.0},{label:"Mar 2022", value:36.6},
    {label:"Apr 2022", value:21.8},{label:"May 2022", value:19.7},{label:"Jun 2022", value:17.4},
    {label:"Jul 2022", value:22.4},{label:"Aug 2022", value:23.5},{label:"Sep 2022", value:23.5},
    {label:"Oct 2022", value:29.1},{label:"Nov 2022", value:30.5},{label:"Dec 2022", value:29.4},
    {label:"Jan 2023", value:35.3},{label:"Feb 2023", value:33.7},{label:"Mar 2023", value:34.5},
    {label:"Apr 2023", value:33.0},{label:"May 2023", value:37.5},{label:"Jun 2023", value:44.0},
    {label:"Jul 2023", value:43.7},{label:"Aug 2023", value:41.2},{label:"Sep 2023", value:37.7},
    {label:"Oct 2023", value:41.2},{label:"Nov 2023", value:47.3},{label:"Dec 2023", value:48.6},
    {label:"Jan 2024", value:56.4},{label:"Feb 2024", value:58.2},{label:"Mar 2024", value:62.8},
    {label:"Apr 2024", value:56.1},{label:"May 2024", value:64.1},{label:"Jun 2024", value:68.7},
    {label:"Jul 2024", value:64.8},{label:"Aug 2024", value:67.6},{label:"Sep 2024", value:71.3},
    {label:"Oct 2024", value:75.6},{label:"Nov 2024", value:89.1},{label:"Dec 2024", value:89.1},
    {label:"Jan 2025", value:97.7},{label:"Feb 2025", value:100.5},{label:"Mar 2025", value:96.2},
    {label:"Apr 2025", value:104.6},{label:"May 2025", value:117.7},{label:"Jun 2025", value:133.9},
    {label:"Jul 2025", value:125.0},{label:"Aug 2025", value:122.0},{label:"Sep 2025", value:118.0},
    {label:"Oct 2025", value:112.0},{label:"Nov 2025", value:108.0},{label:"Dec 2025", value:103.0},
    {label:"Jan 2026", value:100.0},{label:"Feb 2026", value:98.0},{label:"Mar 2026", value:92.0},
    {label:"Apr 2026", value:88.0},{label:"May 2026", value:82.0},{label:"Jun 2026", value:78.0},
    {label:"Jul 2026", value:71.0}
  ];

  var AAPL_DATA = [
    {label:"Aug 2021", value:150.0},{label:"Sep 2021", value:154.7},{label:"Oct 2021", value:156.73},
    {label:"Nov 2021", value:160.76},{label:"Dec 2021", value:164.62},{label:"Jan 2022", value:170.8},
    {label:"Feb 2022", value:175.0},{label:"Mar 2022", value:165.73},{label:"Apr 2022", value:156.86},
    {label:"May 2022", value:145.0},{label:"Jun 2022", value:136.9},{label:"Jul 2022", value:130.73},
    {label:"Aug 2022", value:125.0},{label:"Sep 2022", value:129.71},{label:"Oct 2022", value:135.72},
    {label:"Nov 2022", value:142.84},{label:"Dec 2022", value:147.75},{label:"Jan 2023", value:153.9},
    {label:"Feb 2023", value:161.89},{label:"Mar 2023", value:168.62},{label:"Apr 2023", value:175.0},
    {label:"May 2023", value:176.26},{label:"Jun 2023", value:179.77},{label:"Jul 2023", value:183.8},
    {label:"Aug 2023", value:183.37},{label:"Sep 2023", value:188.11},{label:"Oct 2023", value:191.25},
    {label:"Nov 2023", value:192.36},{label:"Dec 2023", value:195.0},{label:"Jan 2024", value:192.08},
    {label:"Feb 2024", value:193.87},{label:"Mar 2024", value:191.15},{label:"Apr 2024", value:188.02},
    {label:"May 2024", value:185.86},{label:"Jun 2024", value:187.69},{label:"Jul 2024", value:186.83},
    {label:"Aug 2024", value:185.0},{label:"Sep 2024", value:193.14},{label:"Oct 2024", value:200.23},
    {label:"Nov 2024", value:206.17},{label:"Dec 2024", value:214.77},{label:"Jan 2025", value:219.27},
    {label:"Feb 2025", value:225.0},{label:"Mar 2025", value:226.13},{label:"Apr 2025", value:228.68},
    {label:"May 2025", value:229.18},{label:"Jun 2025", value:231.24},{label:"Jul 2025", value:231.07},
    {label:"Aug 2025", value:230.0},{label:"Sep 2025", value:225.31},{label:"Oct 2025", value:216.41},
    {label:"Nov 2025", value:210.12},{label:"Dec 2025", value:204.42},{label:"Jan 2026", value:197.63},
    {label:"Feb 2026", value:195.0},{label:"Mar 2026", value:201.15},{label:"Apr 2026", value:207.2},
    {label:"May 2026", value:214.84},{label:"Jun 2026", value:225.0},{label:"Jul 2026", value:230.0},
  ];

  var MSFT_DATA = [
    {label:"Aug 2021", value:300.0},{label:"Sep 2021", value:306.87},{label:"Oct 2021", value:311.14},
    {label:"Nov 2021", value:316.2},{label:"Dec 2021", value:320.32},{label:"Jan 2022", value:325.72},
    {label:"Feb 2022", value:335.0},{label:"Mar 2022", value:306.64},{label:"Apr 2022", value:274.15},
    {label:"May 2022", value:240.0},{label:"Jun 2022", value:233.97},{label:"Jul 2022", value:225.11},
    {label:"Aug 2022", value:220.0},{label:"Sep 2022", value:235.09},{label:"Oct 2022", value:246.13},
    {label:"Nov 2022", value:259.74},{label:"Dec 2022", value:277.57},{label:"Jan 2023", value:291.11},
    {label:"Feb 2023", value:304.17},{label:"Mar 2023", value:318.58},{label:"Apr 2023", value:330.0},
    {label:"May 2023", value:338.5},{label:"Jun 2023", value:345.07},{label:"Jul 2023", value:346.47},
    {label:"Aug 2023", value:348.17},{label:"Sep 2023", value:354.27},{label:"Oct 2023", value:359.68},
    {label:"Nov 2023", value:364.64},{label:"Dec 2023", value:375.0},{label:"Jan 2024", value:383.58},
    {label:"Feb 2024", value:389.49},{label:"Mar 2024", value:389.23},{label:"Apr 2024", value:394.58},
    {label:"May 2024", value:396.89},{label:"Jun 2024", value:405.42},{label:"Jul 2024", value:407.31},
    {label:"Aug 2024", value:410.0},{label:"Sep 2024", value:410.08},{label:"Oct 2024", value:411.15},
    {label:"Nov 2024", value:416.2},{label:"Dec 2024", value:416.86},{label:"Jan 2025", value:421.81},
    {label:"Feb 2025", value:425.0},{label:"Mar 2025", value:431.75},{label:"Apr 2025", value:431.06},
    {label:"May 2025", value:430.0},{label:"Jun 2025", value:439.15},{label:"Jul 2025", value:439.69},
    {label:"Aug 2025", value:440.0},{label:"Sep 2025", value:440.45},{label:"Oct 2025", value:442.6},
    {label:"Nov 2025", value:446.82},{label:"Dec 2025", value:457.33},{label:"Jan 2026", value:467.05},
    {label:"Feb 2026", value:470.0},{label:"Mar 2026", value:472.83},{label:"Apr 2026", value:471.83},
    {label:"May 2026", value:476.97},{label:"Jun 2026", value:485.0},{label:"Jul 2026", value:500.0},
  ];

  var NVDA_DATA = [
    {label:"Aug 2021", value:25.0},{label:"Sep 2021", value:26.49},{label:"Oct 2021", value:27.52},
    {label:"Nov 2021", value:28.93},{label:"Dec 2021", value:30.16},{label:"Jan 2022", value:30.71},
    {label:"Feb 2022", value:32.0},{label:"Mar 2022", value:27.15},{label:"Apr 2022", value:22.16},
    {label:"May 2022", value:17.0},{label:"Jun 2022", value:16.18},{label:"Jul 2022", value:15.25},
    {label:"Aug 2022", value:14.5},{label:"Sep 2022", value:15.99},{label:"Oct 2022", value:17.24},
    {label:"Nov 2022", value:18.71},{label:"Dec 2022", value:20.17},{label:"Jan 2023", value:21.89},
    {label:"Feb 2023", value:23.45},{label:"Mar 2023", value:24.59},{label:"Apr 2023", value:26.0},
    {label:"May 2023", value:28.88},{label:"Jun 2023", value:31.5},{label:"Jul 2023", value:34.84},
    {label:"Aug 2023", value:37.97},{label:"Sep 2023", value:40.42},{label:"Oct 2023", value:43.43},
    {label:"Nov 2023", value:46.34},{label:"Dec 2023", value:49.0},{label:"Jan 2024", value:61.96},
    {label:"Feb 2024", value:76.17},{label:"Mar 2024", value:89.69},{label:"Apr 2024", value:103.83},
    {label:"May 2024", value:117.06},{label:"Jun 2024", value:130.0},{label:"Jul 2024", value:132.33},
    {label:"Aug 2024", value:138.0},{label:"Sep 2024", value:138.55},{label:"Oct 2024", value:138.34},
    {label:"Nov 2024", value:142.01},{label:"Dec 2024", value:144.28},{label:"Jan 2025", value:145.84},
    {label:"Feb 2025", value:145.0},{label:"Mar 2025", value:150.11},{label:"Apr 2025", value:154.56},
    {label:"May 2025", value:162.94},{label:"Jun 2025", value:170.44},{label:"Jul 2025", value:173.45},
    {label:"Aug 2025", value:180.0},{label:"Sep 2025", value:175.77},{label:"Oct 2025", value:169.79},
    {label:"Nov 2025", value:167.67},{label:"Dec 2025", value:164.5},{label:"Jan 2026", value:158.26},
    {label:"Feb 2026", value:155.0},{label:"Mar 2026", value:158.65},{label:"Apr 2026", value:162.65},
    {label:"May 2026", value:165.35},{label:"Jun 2026", value:170.0},{label:"Jul 2026", value:178.0},
  ];

  var TSLA_DATA = [
    {label:"Aug 2021", value:81.7},{label:"Sep 2021", value:91.59},{label:"Oct 2021", value:100.07},
    {label:"Nov 2021", value:108.21},{label:"Dec 2021", value:117.67},{label:"Jan 2022", value:127.56},
    {label:"Feb 2022", value:136.0},{label:"Mar 2022", value:124.73},{label:"Apr 2022", value:114.36},
    {label:"May 2022", value:105.0},{label:"Jun 2022", value:90.44},{label:"Jul 2022", value:74.4},
    {label:"Aug 2022", value:58.0},{label:"Sep 2022", value:74.38},{label:"Oct 2022", value:90.97},
    {label:"Nov 2022", value:106.46},{label:"Dec 2022", value:122.55},{label:"Jan 2023", value:139.11},
    {label:"Feb 2023", value:156.57},{label:"Mar 2023", value:172.09},{label:"Apr 2023", value:190.0},
    {label:"May 2023", value:195.87},{label:"Jun 2023", value:201.59},{label:"Jul 2023", value:210.94},
    {label:"Aug 2023", value:217.1},{label:"Sep 2023", value:227.56},{label:"Oct 2023", value:236.28},
    {label:"Nov 2023", value:239.6},{label:"Dec 2023", value:248.0},{label:"Jan 2024", value:246.62},
    {label:"Feb 2024", value:248.74},{label:"Mar 2024", value:247.09},{label:"Apr 2024", value:245.88},
    {label:"May 2024", value:250.4},{label:"Jun 2024", value:250.52},{label:"Jul 2024", value:250.09},
    {label:"Aug 2024", value:250.0},{label:"Sep 2024", value:253.46},{label:"Oct 2024", value:256.18},
    {label:"Nov 2024", value:254.46},{label:"Dec 2024", value:253.81},{label:"Jan 2025", value:256.45},
    {label:"Feb 2025", value:260.0},{label:"Mar 2025", value:272.81},{label:"Apr 2025", value:286.16},
    {label:"May 2025", value:301.45},{label:"Jun 2025", value:315.45},{label:"Jul 2025", value:331.72},
    {label:"Aug 2025", value:340.0},{label:"Sep 2025", value:373.68},{label:"Oct 2025", value:411.85},
    {label:"Nov 2025", value:448.91},{label:"Dec 2025", value:489.88},{label:"Jan 2026", value:471.64},
    {label:"Feb 2026", value:444.16},{label:"Mar 2026", value:418.83},{label:"Apr 2026", value:400.0},
    {label:"May 2026", value:379.51},{label:"Jun 2026", value:360.0},{label:"Jul 2026", value:342.27},
  ];

  var ASML_DATA = [
    {label:"Aug 2021", value:720.0},{label:"Sep 2021", value:740.22},{label:"Oct 2021", value:758.36},
    {label:"Nov 2021", value:777.53},{label:"Dec 2021", value:811.37},{label:"Jan 2022", value:829.57},
    {label:"Feb 2022", value:850.0},{label:"Mar 2022", value:773.59},{label:"Apr 2022", value:687.28},
    {label:"May 2022", value:600.0},{label:"Jun 2022", value:537.23},{label:"Jul 2022", value:490.01},
    {label:"Aug 2022", value:430.0},{label:"Sep 2022", value:461.34},{label:"Oct 2022", value:492.72},
    {label:"Nov 2022", value:522.04},{label:"Dec 2022", value:549.74},{label:"Jan 2023", value:567.88},
    {label:"Feb 2023", value:594.99},{label:"Mar 2023", value:618.04},{label:"Apr 2023", value:650.0},
    {label:"May 2023", value:679.56},{label:"Jun 2023", value:703.76},{label:"Jul 2023", value:736.94},
    {label:"Aug 2023", value:780.85},{label:"Sep 2023", value:804.56},{label:"Oct 2023", value:842.57},
    {label:"Nov 2023", value:870.4},{label:"Dec 2023", value:900.0},{label:"Jan 2024", value:904.51},
    {label:"Feb 2024", value:922.05},{label:"Mar 2024", value:934.94},{label:"Apr 2024", value:934.44},
    {label:"May 2024", value:941.09},{label:"Jun 2024", value:934.36},{label:"Jul 2024", value:937.37},
    {label:"Aug 2024", value:950.0},{label:"Sep 2024", value:918.98},{label:"Oct 2024", value:873.46},
    {label:"Nov 2024", value:829.1},{label:"Dec 2024", value:790.14},{label:"Jan 2025", value:736.68},
    {label:"Feb 2025", value:700.0},{label:"Mar 2025", value:726.53},{label:"Apr 2025", value:750.84},
    {label:"May 2025", value:782.27},{label:"Jun 2025", value:796.9},{label:"Jul 2025", value:832.91},
    {label:"Aug 2025", value:850.0},{label:"Sep 2025", value:907.04},{label:"Oct 2025", value:970.45},
    {label:"Nov 2025", value:1045.62},{label:"Dec 2025", value:1119.23},{label:"Jan 2026", value:1176.86},
    {label:"Feb 2026", value:1250.0},{label:"Mar 2026", value:1213.36},{label:"Apr 2026", value:1206.01},
    {label:"May 2026", value:1170.49},{label:"Jun 2026", value:1150.0},{label:"Jul 2026", value:1100.0},
  ];

  var GOOGL_DATA = [
    {label:"Aug 2021", value:132.5},{label:"Sep 2021", value:134.9},{label:"Oct 2021", value:137.24},
    {label:"Nov 2021", value:138.76},{label:"Dec 2021", value:141.13},{label:"Jan 2022", value:143.15},
    {label:"Feb 2022", value:145.0},{label:"Mar 2022", value:131.41},{label:"Apr 2022", value:114.77},
    {label:"May 2022", value:100.0},{label:"Jun 2022", value:96.52},{label:"Jul 2022", value:91.65},
    {label:"Aug 2022", value:88.0},{label:"Sep 2022", value:93.01},{label:"Oct 2022", value:98.79},
    {label:"Nov 2022", value:103.39},{label:"Dec 2022", value:108.31},{label:"Jan 2023", value:114.61},
    {label:"Feb 2023", value:118.41},{label:"Mar 2023", value:124.05},{label:"Apr 2023", value:130.0},
    {label:"May 2023", value:132.89},{label:"Jun 2023", value:134.97},{label:"Jul 2023", value:133.57},
    {label:"Aug 2023", value:133.94},{label:"Sep 2023", value:134.92},{label:"Oct 2023", value:138.32},
    {label:"Nov 2023", value:140.48},{label:"Dec 2023", value:140.0},{label:"Jan 2024", value:142.59},
    {label:"Feb 2024", value:142.71},{label:"Mar 2024", value:142.63},{label:"Apr 2024", value:145.64},
    {label:"May 2024", value:147.32},{label:"Jun 2024", value:148.45},{label:"Jul 2024", value:151.04},
    {label:"Aug 2024", value:150.0},{label:"Sep 2024", value:154.76},{label:"Oct 2024", value:156.69},
    {label:"Nov 2024", value:162.94},{label:"Dec 2024", value:166.06},{label:"Jan 2025", value:171.22},
    {label:"Feb 2025", value:175.0},{label:"Mar 2025", value:180.29},{label:"Apr 2025", value:181.0},
    {label:"May 2025", value:182.88},{label:"Jun 2025", value:185.41},{label:"Jul 2025", value:190.43},
    {label:"Aug 2025", value:195.0},{label:"Sep 2025", value:214.6},{label:"Oct 2025", value:236.61},
    {label:"Nov 2025", value:258.87},{label:"Dec 2025", value:277.01},{label:"Jan 2026", value:299.46},
    {label:"Feb 2026", value:320.0},{label:"Mar 2026", value:323.08},{label:"Apr 2026", value:328.93},
    {label:"May 2026", value:337.85},{label:"Jun 2026", value:340.0},{label:"Jul 2026", value:353.47},
  ];

  var AMZN_DATA = [
    {label:"Aug 2021", value:170.0},{label:"Sep 2021", value:170.63},{label:"Oct 2021", value:167.35},
    {label:"Nov 2021", value:166.69},{label:"Dec 2021", value:165.33},{label:"Jan 2022", value:163.11},
    {label:"Feb 2022", value:165.0},{label:"Mar 2022", value:147.66},{label:"Apr 2022", value:129.21},
    {label:"May 2022", value:110.0},{label:"Jun 2022", value:100.73},{label:"Jul 2022", value:92.95},
    {label:"Aug 2022", value:84.0},{label:"Sep 2022", value:91.74},{label:"Oct 2022", value:99.13},
    {label:"Nov 2022", value:105.5},{label:"Dec 2022", value:112.55},{label:"Jan 2023", value:122.25},
    {label:"Feb 2023", value:131.13},{label:"Mar 2023", value:138.26},{label:"Apr 2023", value:145.0},
    {label:"May 2023", value:146.84},{label:"Jun 2023", value:147.16},{label:"Jul 2023", value:146.04},
    {label:"Aug 2023", value:145.71},{label:"Sep 2023", value:146.51},{label:"Oct 2023", value:149.43},
    {label:"Nov 2023", value:150.82},{label:"Dec 2023", value:150.0},{label:"Jan 2024", value:151.98},
    {label:"Feb 2024", value:153.44},{label:"Mar 2024", value:151.87},{label:"Apr 2024", value:151.54},
    {label:"May 2024", value:151.12},{label:"Jun 2024", value:153.82},{label:"Jul 2024", value:155.89},
    {label:"Aug 2024", value:155.0},{label:"Sep 2024", value:159.63},{label:"Oct 2024", value:165.3},
    {label:"Nov 2024", value:168.69},{label:"Dec 2024", value:176.21},{label:"Jan 2025", value:182.26},
    {label:"Feb 2025", value:185.0},{label:"Mar 2025", value:193.11},{label:"Apr 2025", value:199.37},
    {label:"May 2025", value:205.82},{label:"Jun 2025", value:207.57},{label:"Jul 2025", value:215.04},
    {label:"Aug 2025", value:220.0},{label:"Sep 2025", value:224.89},{label:"Oct 2025", value:233.68},
    {label:"Nov 2025", value:240.32},{label:"Dec 2025", value:246.99},{label:"Jan 2026", value:252.98},
    {label:"Feb 2026", value:255.0},{label:"Mar 2026", value:257.24},{label:"Apr 2026", value:263.62},
    {label:"May 2026", value:264.21},{label:"Jun 2026", value:270.0},{label:"Jul 2026", value:274.48},
  ];

  var META_DATA = [
    {label:"Aug 2021", value:355.0},{label:"Sep 2021", value:354.1},{label:"Oct 2021", value:351.39},
    {label:"Nov 2021", value:342.46},{label:"Dec 2021", value:340.99},{label:"Jan 2022", value:335.15},
    {label:"Feb 2022", value:330.0},{label:"Mar 2022", value:258.73},{label:"Apr 2022", value:190.94},
    {label:"May 2022", value:120.0},{label:"Jun 2022", value:109.25},{label:"Jul 2022", value:98.47},
    {label:"Aug 2022", value:90.0},{label:"Sep 2022", value:117.84},{label:"Oct 2022", value:146.3},
    {label:"Nov 2022", value:177.14},{label:"Dec 2022", value:207.91},{label:"Jan 2023", value:234.12},
    {label:"Feb 2023", value:263.64},{label:"Mar 2023", value:291.15},{label:"Apr 2023", value:320.0},
    {label:"May 2023", value:327.64},{label:"Jun 2023", value:329.77},{label:"Jul 2023", value:336.03},
    {label:"Aug 2023", value:334.2},{label:"Sep 2023", value:342.33},{label:"Oct 2023", value:341.56},
    {label:"Nov 2023", value:349.78},{label:"Dec 2023", value:350.0},{label:"Jan 2024", value:364.1},
    {label:"Feb 2024", value:377.63},{label:"Mar 2024", value:395.56},{label:"Apr 2024", value:415.71},
    {label:"May 2024", value:429.61},{label:"Jun 2024", value:447.84},{label:"Jul 2024", value:464.06},
    {label:"Aug 2024", value:480.0},{label:"Sep 2024", value:495.24},{label:"Oct 2024", value:513.58},
    {label:"Nov 2024", value:526.88},{label:"Dec 2024", value:547.91},{label:"Jan 2025", value:556.96},
    {label:"Feb 2025", value:580.0},{label:"Mar 2025", value:591.22},{label:"Apr 2025", value:593.71},
    {label:"May 2025", value:600.13},{label:"Jun 2025", value:606.22},{label:"Jul 2025", value:610.72},
    {label:"Aug 2025", value:610.0},{label:"Sep 2025", value:614.57},{label:"Oct 2025", value:615.57},
    {label:"Nov 2025", value:628.67},{label:"Dec 2025", value:633.29},{label:"Jan 2026", value:638.63},
    {label:"Feb 2026", value:650.0},{label:"Mar 2026", value:645.57},{label:"Apr 2026", value:636.2},
    {label:"May 2026", value:619.96},{label:"Jun 2026", value:610.0},{label:"Jul 2026", value:592.0},
  ];

  var NKE_DATA = [
    {label:"Aug 2021", value:155.0},{label:"Sep 2021", value:155.92},{label:"Oct 2021", value:157.59},
    {label:"Nov 2021", value:159.24},{label:"Dec 2021", value:160.45},{label:"Jan 2022", value:161.2},
    {label:"Feb 2022", value:165.0},{label:"Mar 2022", value:144.71},{label:"Apr 2022", value:126.25},
    {label:"May 2022", value:105.0},{label:"Jun 2022", value:99.77},{label:"Jul 2022", value:94.82},
    {label:"Aug 2022", value:88.0},{label:"Sep 2022", value:92.27},{label:"Oct 2022", value:95.66},
    {label:"Nov 2022", value:99.94},{label:"Dec 2022", value:102.67},{label:"Jan 2023", value:106.73},
    {label:"Feb 2023", value:111.15},{label:"Mar 2023", value:115.79},{label:"Apr 2023", value:120.0},
    {label:"May 2023", value:118.58},{label:"Jun 2023", value:116.37},{label:"Jul 2023", value:114.27},
    {label:"Aug 2023", value:111.64},{label:"Sep 2023", value:110.13},{label:"Oct 2023", value:109.6},
    {label:"Nov 2023", value:108.08},{label:"Dec 2023", value:105.0},{label:"Jan 2024", value:102.89},
    {label:"Feb 2024", value:101.01},{label:"Mar 2024", value:100.55},{label:"Apr 2024", value:99.99},
    {label:"May 2024", value:98.34},{label:"Jun 2024", value:98.07},{label:"Jul 2024", value:97.14},
    {label:"Aug 2024", value:95.0},{label:"Sep 2024", value:92.06},{label:"Oct 2024", value:87.92},
    {label:"Nov 2024", value:84.16},{label:"Dec 2024", value:80.29},{label:"Jan 2025", value:77.17},
    {label:"Feb 2025", value:75.0},{label:"Mar 2025", value:74.12},{label:"Apr 2025", value:73.95},
    {label:"May 2025", value:72.03},{label:"Jun 2025", value:71.28},{label:"Jul 2025", value:70.87},
    {label:"Aug 2025", value:70.0},{label:"Sep 2025", value:71.45},{label:"Oct 2025", value:74.08},
    {label:"Nov 2025", value:76.03},{label:"Dec 2025", value:77.52},{label:"Jan 2026", value:80.06},
    {label:"Feb 2026", value:82.0},{label:"Mar 2026", value:80.0},{label:"Apr 2026", value:80.01},
    {label:"May 2026", value:79.54},{label:"Jun 2026", value:78.0},{label:"Jul 2026", value:80.0},
  ];

  var ETH_DATA = [
    {label:"Aug 2021", value:3200.0},{label:"Sep 2021", value:3696.61},{label:"Oct 2021", value:4237.7},
    {label:"Nov 2021", value:4800.0},{label:"Dec 2021", value:4165.97},{label:"Jan 2022", value:3626.63},
    {label:"Feb 2022", value:3012.44},{label:"Mar 2022", value:2377.99},{label:"Apr 2022", value:1780.46},
    {label:"May 2022", value:1200.0},{label:"Jun 2022", value:1143.2},{label:"Jul 2022", value:1070.15},
    {label:"Aug 2022", value:1000.0},{label:"Sep 2022", value:1158.67},{label:"Oct 2022", value:1310.34},
    {label:"Nov 2022", value:1473.46},{label:"Dec 2022", value:1616.76},{label:"Jan 2023", value:1778.85},
    {label:"Feb 2023", value:1934.26},{label:"Mar 2023", value:2074.25},{label:"Apr 2023", value:2200.0},
    {label:"May 2023", value:2413.16},{label:"Jun 2023", value:2607.44},{label:"Jul 2023", value:2827.14},
    {label:"Aug 2023", value:3018.13},{label:"Sep 2023", value:3241.45},{label:"Oct 2023", value:3442.73},
    {label:"Nov 2023", value:3620.34},{label:"Dec 2023", value:3800.0},{label:"Jan 2024", value:3702.57},
    {label:"Feb 2024", value:3615.95},{label:"Mar 2024", value:3570.63},{label:"Apr 2024", value:3521.12},
    {label:"May 2024", value:3437.16},{label:"Jun 2024", value:3366.56},{label:"Jul 2024", value:3264.64},
    {label:"Aug 2024", value:3200.0},{label:"Sep 2024", value:3100.24},{label:"Oct 2024", value:3034.04},
    {label:"Nov 2024", value:2966.92},{label:"Dec 2024", value:2903.94},{label:"Jan 2025", value:2855.18},
    {label:"Feb 2025", value:2800.0},{label:"Mar 2025", value:3307.33},{label:"Apr 2025", value:3831.45},
    {label:"May 2025", value:4409.1},{label:"Jun 2025", value:4950.0},{label:"Jul 2025", value:4284.5},
    {label:"Aug 2025", value:3545.28},{label:"Sep 2025", value:2868.83},{label:"Oct 2025", value:2200.0},
    {label:"Nov 2025", value:2114.75},{label:"Dec 2025", value:2021.81},{label:"Jan 2026", value:1921.78},
    {label:"Feb 2026", value:1850.0},{label:"Mar 2026", value:1858.78},{label:"Apr 2026", value:1892.11},
    {label:"May 2026", value:1900.08},{label:"Jun 2026", value:1900.0},{label:"Jul 2026", value:1908.76},
  ];

  var SOL_DATA = [
    {label:"Aug 2021", value:72.0},{label:"Sep 2021", value:108.53},{label:"Oct 2021", value:145.64},
    {label:"Nov 2021", value:180.0},{label:"Dec 2021", value:153.51},{label:"Jan 2022", value:125.04},
    {label:"Feb 2022", value:96.31},{label:"Mar 2022", value:69.31},{label:"Apr 2022", value:42.56},
    {label:"May 2022", value:15.0},{label:"Jun 2022", value:12.78},{label:"Jul 2022", value:10.5},
    {label:"Aug 2022", value:8.0},{label:"Sep 2022", value:19.46},{label:"Oct 2022", value:31.16},
    {label:"Nov 2022", value:42.66},{label:"Dec 2022", value:54.24},{label:"Jan 2023", value:65.19},
    {label:"Feb 2023", value:76.28},{label:"Mar 2023", value:87.94},{label:"Apr 2023", value:100.0},
    {label:"May 2023", value:113.65},{label:"Jun 2023", value:128.7},{label:"Jul 2023", value:144.93},
    {label:"Aug 2023", value:159.58},{label:"Sep 2023", value:173.3},{label:"Oct 2023", value:188.92},
    {label:"Nov 2023", value:202.51},{label:"Dec 2023", value:220.0},{label:"Jan 2024", value:211.9},
    {label:"Feb 2024", value:200.41},{label:"Mar 2024", value:192.24},{label:"Apr 2024", value:184.58},
    {label:"May 2024", value:173.96},{label:"Jun 2024", value:167.01},{label:"Jul 2024", value:157.07},
    {label:"Aug 2024", value:150.0},{label:"Sep 2024", value:177.33},{label:"Oct 2024", value:202.6},
    {label:"Nov 2024", value:230.43},{label:"Dec 2024", value:260.0},{label:"Jan 2025", value:238.27},
    {label:"Feb 2025", value:218.25},{label:"Mar 2025", value:200.51},{label:"Apr 2025", value:180.0},
    {label:"May 2025", value:166.99},{label:"Jun 2025", value:155.74},{label:"Jul 2025", value:144.02},
    {label:"Aug 2025", value:130.0},{label:"Sep 2025", value:119.26},{label:"Oct 2025", value:108.51},
    {label:"Nov 2025", value:98.12},{label:"Dec 2025", value:90.0},{label:"Jan 2026", value:87.42},
    {label:"Feb 2026", value:85.77},{label:"Mar 2026", value:82.23},{label:"Apr 2026", value:79.74},
    {label:"May 2026", value:77.4},{label:"Jun 2026", value:74.0},{label:"Jul 2026", value:75.8},
  ];

  var SILVER_DATA = [
    {label:"Aug 2021", value:23.5},{label:"Sep 2021", value:23.17},{label:"Oct 2021", value:22.85},
    {label:"Nov 2021", value:22.59},{label:"Dec 2021", value:21.84},{label:"Jan 2022", value:21.16},
    {label:"Feb 2022", value:21.0},{label:"Mar 2022", value:20.16},{label:"Apr 2022", value:19.4},
    {label:"May 2022", value:19.0},{label:"Jun 2022", value:20.72},{label:"Jul 2022", value:22.35},
    {label:"Aug 2022", value:23.9},{label:"Sep 2022", value:23.87},{label:"Oct 2022", value:24.21},
    {label:"Nov 2022", value:24.49},{label:"Dec 2022", value:24.34},{label:"Jan 2023", value:24.6},
    {label:"Feb 2023", value:24.88},{label:"Mar 2023", value:24.7},{label:"Apr 2023", value:25.0},
    {label:"May 2023", value:25.7},{label:"Jun 2023", value:26.41},{label:"Jul 2023", value:26.45},
    {label:"Aug 2023", value:26.65},{label:"Sep 2023", value:27.19},{label:"Oct 2023", value:27.97},
    {label:"Nov 2023", value:28.81},{label:"Dec 2023", value:29.0},{label:"Jan 2024", value:28.55},
    {label:"Feb 2024", value:28.37},{label:"Mar 2024", value:27.64},{label:"Apr 2024", value:27.51},
    {label:"May 2024", value:27.22},{label:"Jun 2024", value:26.53},{label:"Jul 2024", value:26.45},
    {label:"Aug 2024", value:26.0},{label:"Sep 2024", value:27.24},{label:"Oct 2024", value:28.19},
    {label:"Nov 2024", value:28.83},{label:"Dec 2024", value:30.27},{label:"Jan 2025", value:31.36},
    {label:"Feb 2025", value:32.0},{label:"Mar 2025", value:32.87},{label:"Apr 2025", value:33.87},
    {label:"May 2025", value:34.82},{label:"Jun 2025", value:35.91},{label:"Jul 2025", value:36.81},
    {label:"Aug 2025", value:38.0},{label:"Sep 2025", value:59.41},{label:"Oct 2025", value:80.78},
    {label:"Nov 2025", value:100.32},{label:"Dec 2025", value:121.58},{label:"Jan 2026", value:107.01},
    {label:"Feb 2026", value:90.0},{label:"Mar 2026", value:84.03},{label:"Apr 2026", value:78.27},
    {label:"May 2026", value:71.97},{label:"Jun 2026", value:65.0},{label:"Jul 2026", value:64.96},
  ];

  var NASDAQ100_DATA = [
    {label:"Aug 2021", value:370.0},{label:"Sep 2021", value:373.56},{label:"Oct 2021", value:380.24},
    {label:"Nov 2021", value:387.91},{label:"Dec 2021", value:387.18},{label:"Jan 2022", value:394.1},
    {label:"Feb 2022", value:395.0},{label:"Mar 2022", value:355.34},{label:"Apr 2022", value:315.02},
    {label:"May 2022", value:275.0},{label:"Jun 2022", value:269.57},{label:"Jul 2022", value:266.32},
    {label:"Aug 2022", value:260.0},{label:"Sep 2022", value:268.44},{label:"Oct 2022", value:281.65},
    {label:"Nov 2022", value:293.25},{label:"Dec 2022", value:298.58},{label:"Jan 2023", value:312.23},
    {label:"Feb 2023", value:319.1},{label:"Mar 2023", value:329.24},{label:"Apr 2023", value:340.0},
    {label:"May 2023", value:348.46},{label:"Jun 2023", value:354.42},{label:"Jul 2023", value:357.93},
    {label:"Aug 2023", value:370.91},{label:"Sep 2023", value:374.96},{label:"Oct 2023", value:380.94},
    {label:"Nov 2023", value:393.35},{label:"Dec 2023", value:400.0},{label:"Jan 2024", value:408.36},
    {label:"Feb 2024", value:423.16},{label:"Mar 2024", value:433.78},{label:"Apr 2024", value:439.47},
    {label:"May 2024", value:444.22},{label:"Jun 2024", value:462.2},{label:"Jul 2024", value:466.25},
    {label:"Aug 2024", value:480.0},{label:"Sep 2024", value:487.67},{label:"Oct 2024", value:491.21},
    {label:"Nov 2024", value:498.8},{label:"Dec 2024", value:504.3},{label:"Jan 2025", value:509.02},
    {label:"Feb 2025", value:510.0},{label:"Mar 2025", value:513.22},{label:"Apr 2025", value:520.39},
    {label:"May 2025", value:516.58},{label:"Jun 2025", value:517.97},{label:"Jul 2025", value:526.49},
    {label:"Aug 2025", value:530.0},{label:"Sep 2025", value:537.38},{label:"Oct 2025", value:549.79},
    {label:"Nov 2025", value:559.52},{label:"Dec 2025", value:570.2},{label:"Jan 2026", value:579.02},
    {label:"Feb 2026", value:590.0},{label:"Mar 2026", value:588.6},{label:"Apr 2026", value:579.33},
    {label:"May 2026", value:577.58},{label:"Jun 2026", value:570.0},{label:"Jul 2026", value:580.0},
  ];


  var SPX_DATA = [
    {label:"Aug 2021", value:4454.21},
    {label:"Sep 2021", value:4445.54},
    {label:"Oct 2021", value:4460.71},
    {label:"Nov 2021", value:4667.39},
    {label:"Dec 2021", value:4674.77},
    {label:"Jan 2022", value:4573.82},
    {label:"Feb 2022", value:4435.98},
    {label:"Mar 2022", value:4391.27},
    {label:"Apr 2022", value:4391.30},
    {label:"May 2022", value:4040.36},
    {label:"Jun 2022", value:3898.95},
    {label:"Jul 2022", value:3911.73},
    {label:"Aug 2022", value:4158.56},
    {label:"Sep 2022", value:3850.52},
    {label:"Oct 2022", value:3726.05},
    {label:"Nov 2022", value:3917.49},
    {label:"Dec 2022", value:3912.38},
    {label:"Jan 2023", value:3960.66},
    {label:"Feb 2023", value:4079.68},
    {label:"Mar 2023", value:3968.56},
    {label:"Apr 2023", value:4121.47},
    {label:"May 2023", value:4146.17},
    {label:"Jun 2023", value:4345.37},
    {label:"Jul 2023", value:4508.08},
    {label:"Aug 2023", value:4426.24},
    {label:"Sep 2023", value:4409.10},
    {label:"Oct 2023", value:4258.98},
    {label:"Nov 2023", value:4460.06},
    {label:"Dec 2023", value:4685.05},
    {label:"Jan 2024", value:4804.49},
    {label:"Feb 2024", value:5011.96},
    {label:"Mar 2024", value:5170.57},
    {label:"Apr 2024", value:5095.46},
    {label:"May 2024", value:5235.23},
    {label:"Jun 2024", value:5415.14},
    {label:"Jul 2024", value:5542.89},
    {label:"Aug 2024", value:5502.17},
    {label:"Sep 2024", value:5626.12},
    {label:"Oct 2024", value:5792.32},
    {label:"Nov 2024", value:5929.92},
    {label:"Dec 2024", value:6010.91},
    {label:"Jan 2025", value:5979.52},
    {label:"Feb 2025", value:6038.69},
    {label:"Mar 2025", value:5683.98},
    {label:"Apr 2025", value:5369.50},
    {label:"May 2025", value:5810.92},
    {label:"Jun 2025", value:6029.95},
    {label:"Jul 2025", value:6296.50},
    {label:"Aug 2025", value:6408.95},
    {label:"Sep 2025", value:6584.02},
    {label:"Oct 2025", value:6735.69},
    {label:"Nov 2025", value:6740.89},
    {label:"Dec 2025", value:6853.03},
    {label:"Jan 2026", value:6929.12},
    {label:"Feb 2026", value:6893.81},
    {label:"Mar 2026", value:6654.42},
    {label:"Apr 2026", value:6957.01},
    {label:"May 2026", value:7412.55},
    {label:"Jun 2026", value:7450.03},
    {label:"Jul 2026", value:7513.50}
  ];

  var SECTIONS_NL = [
    {
      learnMore:"Stel je voor dat je één aandeel koopt van een bedrijf waar je in gelooft. Die aankoop maakt je een kleine eigenaar — geen geldschieter, geen klant, maar een echte eigenaar. Als het bedrijf floreert, kan winst naar jou terugvloeien als dividend, en kan de waarde van jouw deel groeien. Als het moeilijk gaat, kan jouw deel in waarde dalen, en als het bedrijf omvalt, staan eigenaren achteraan om iets terug te krijgen, ver achter geldschieters en obligatiehouders. Dat is de kern van beleggen: als eigenaar neem je meer risico dan een geldschieter, maar je deelt ook rechtstreeks mee in de opwaartse kant, zonder plafond aan hoe goed het kan gaan. Elke keer dat je een aandelenkoers checkt, zie je wat de markt op dat moment denkt dat jouw deel van dat bedrijf waard is — een getal dat voortdurend verschuift zodra nieuwe informatie binnenkomt, maar dat je eigendom niet wegneemt. Dat onderscheid begrijpen — eigenaar versus geldschieter — is het nuttigste mentale model voor alles wat je verder over beleggen zult leren.",
      questions:[
        { q:"Wat koop je eigenlijk als je een aandeel koopt?", options:["Een lening aan het bedrijf","Een klein eigendomsbelang in het bedrijf","Een gegarandeerde dividenduitkering","Een zetel in de raad van bestuur"], correct:1, explain:"Een aandeel vertegenwoordigt gedeeltelijk eigendom van een bedrijf. Als eigenaar heb je recht op een deel van de winst en bezittingen — al is dat nooit gegarandeerd." },
        { q:"Als een aandeel dat je bezit in prijs stijgt, wat betekent dat voor jou?", options:["Het extra geld wordt automatisch op je bankrekening gestort","Je aandelen zijn nu meer waard op papier — je verdient pas echt geld zodra je ze weer verkoopt op een platform","Het bedrijf stuurt je een bonusbetaling","Niets, totdat het bedrijf een aankondiging doet"], correct:1, explain:"Een stijgende prijs betekent alleen dat je aandelen op papier meer waard zijn — dat heet een 'ongerealiseerde' winst. Je verdient pas echt geld zodra je je aandelen weer verkoopt op een platform; pas dan wordt het een werkelijke, gerealiseerde winst." },
        { q:"Wat is een dividend?", options:["Kosten voor het handelen in aandelen","Een deel van de bedrijfswinst dat wordt uitgekeerd aan aandeelhouders","De prijs die je betaalt voor een aandeel","Een belasting op beurswinsten"], correct:1, explain:"Niet elk bedrijf keert dividend uit — veel bedrijven investeren winst juist terug in groei. Als ze het wel doen, is het contant geld dat rechtstreeks naar aandeelhouders gaat, meestal elk kwartaal." },
        { q:"Wat is de aandelenmarkt, in gewone taal?", options:["Eén gebouw waar aandelen worden gedrukt","Een overheidsinstantie die aandelenprijzen vaststelt","Een marktplaats waar beleggers aandelen kopen en verkopen","Een spaarrekening voor bedrijfswinsten"], correct:2, explain:"Het is een netwerk van beurzen — zoals de NYSE of Nasdaq — waar kopers en verkopers de hele handelsdag door een prijs voor aandelen overeenkomen." },
        { q:"Als de aandelenkoers van een bedrijf daalt, wat gebeurt er dan met jouw aandelen?", options:["Ze worden automatisch omgezet in contant geld","Je bezit nog steeds hetzelfde aantal aandelen, alleen minder waard","Het bedrijf neemt ze terug","Je bent het bedrijf geld verschuldigd"], correct:1, explain:"Eigendom verandert niet met de prijs. Je houdt nog steeds dezelfde aandelen — hun marktwaarde is alleen gedaald, op papier, totdat je verkoopt." }
      ],
      intermediate:[
        { q:"Als een bedrijf failliet gaat, waar staan gewone aandeelhouders dan in de rij om terugbetaald te worden?", options:["Als eerste, vóór alle schuldeisers","Nadat obligatiehouders en andere schuldeisers zijn betaald","Tegelijk met de lonen van werknemers","Aandeelhouders krijgen een gegarandeerde vaste uitkering"], correct:1, explain:"Gewone aandeelhouders staan achteraan in de rij — obligatiehouders en andere schuldeisers worden eerst betaald, mede daarom zijn aandelen risicovoller dan obligaties." },
        { q:"Wat betekent het als een bedrijf 'preferente aandelen' uitgeeft?", options:["Een soort aandeel met doorgaans een vast dividend en voorrang boven gewone aandelen, maar meestal zonder stemrecht","Een aandeel dat alleen insiders mogen kopen","Een gegarandeerde lening","Een aandeel dat nooit in waarde kan dalen"], correct:0, explain:"Preferente aandelen zitten tussen obligaties en gewone aandelen in — stabieler inkomen en voorrang bij een uitkering, maar meestal lever je stemrecht in." }
      ],
      advanced:[
        { q:"Wat doet een aandeleninkoop (share buyback) doorgaans voor bestaande aandeelhouders?", options:["Verwatert hun eigendom","Vermindert het aantal uitstaande aandelen, waardoor elk overgebleven aandeel een groter relatief belang vertegenwoordigt","Dwingt hen te verkopen","Heeft geen effect op eigendom"], correct:1, explain:"Door aandelen in te trekken, verkleint een bedrijf het aantal uitstaande aandelen — zo vertegenwoordigt elk overgebleven aandeel een iets groter deel van het bedrijf." }
      ]
    },
    {
      learnMore:"Prijzen bewegen niet volgens een vaste formule — ze bewegen omdat miljoenen kopers en verkopers voortdurend, in realtime, opnieuw onderhandelen over wat een bedrijf waard is, op basis van nieuwe informatie, verwachtingen en stemming. Een periode van optimisme en stijgende prijzen heet een bullmarkt; een aanhoudende daling een bearmarkt. Ergens daartussenin zit de gewone dagelijkse ruis: volatiliteit, de natuurlijke op-en-neer beweging van elk actief verhandeld bezit. Niets hiervan is betekenisloos toeval — het weerspiegelt echte onenigheid over de toekomst. De prijs van een aandeel bevat vandaag al ieders beste inschatting van de winst van morgen, dus nieuws beweegt de prijs alleen als het die inschatting verandert. Daarom kan zelfs 'goed' nieuws een prijs laten dalen, als het net niet zo goed was als iedereen stiekem had verwacht. Zoom ver genoeg uit, over een index als de S&P 500 die honderden bedrijven tegelijk volgt, en de dagelijkse ruis vervlakt tot een langer verhaal — een verhaal dat historisch gezien over lange periodes de neiging heeft opwaarts te bewegen, ook al is geen enkele dag ooit gegarandeerd.",
      questions:[
        { q:"Wat is een 'bullmarkt'?", options:["Een periode van dalende prijzen","Een periode van stijgende prijzen en optimisme","Een markt die alleen voor grondstoffen is","Eén dag met een hoog handelsvolume"], correct:1, explain:"Bullmarkten zijn aanhoudende opwaartse bewegingen, meestal gekoppeld aan groei en vertrouwen. Een bearmarkt is het tegenovergestelde — een aanhoudende neergang." },
        { q:"Wat bepaalt vooral de prijs van een aandeel op elk moment?", options:["De oprichtingsdatum van het bedrijf","Wat kopers bereid zijn te betalen en verkopers bereid zijn te accepteren","Een vast getal dat door de beurs wordt bepaald","De gemiddelde prijs van het afgelopen decennium"], correct:1, explain:"Prijzen bewegen op basis van vraag en aanbod, van moment tot moment — gevormd door winstcijfers, nieuws en veranderende verwachtingen over de toekomst." },
        { q:"Wat betekent 'volatiliteit' bij beleggen?", options:["Hoe vaak een bedrijf van naam verandert","Hoeveel een prijs op en neer beweegt over tijd","De totale waarde van een bedrijf","Hoeveel aandelen er beschikbaar zijn om te kopen"], correct:1, explain:"Een volatiel aandeel schommelt sterk in prijs; een stabiel aandeel beweegt geleidelijk. Hogere volatiliteit betekent meestal hoger risico — en hoger potentieel rendement." },
        { q:"Wat is een aandelenindex, zoals de S&P 500?", options:["Het aandeel van één bedrijf","Een mandje dat de prestaties van veel aandelen samen volgt","Een soort obligatie","Een door de overheid vastgesteld prijsplafond"], correct:1, explain:"Een index bundelt veel aandelen — de S&P 500 volgt ongeveer 500 grote Amerikaanse bedrijven — om een beeld te geven van 'de markt', niet van één aandeel." },
        { q:"De 'marktkapitalisatie' van een bedrijf wordt berekend als:", options:["Omzet min kosten","Aandelenkoers × totaal aantal aandelen","Totaal aantal werknemers × gemiddeld salaris","Jaarwinst ÷ dividendrendement"], correct:1, explain:"Marktkapitalisatie is de waarde die de markt aan een bedrijf toekent — een aandelenkoers van $50 met 2 miljard uitstaande aandelen betekent een marktkapitalisatie van $100 miljard." }
      ],
      intermediate:[
        { q:"Wat is een 'correctie' in markttermen?", options:["Een daling van 10% of meer ten opzichte van een recente piek","Eén enkele dag met een daling","Een wijziging in het winstrapport van een bedrijf","Een aanpassing van het tickersymbool van een aandeel"], correct:0, explain:"Een correctie is een daling van ongeveer 10% of meer ten opzichte van een recente piek — kleiner en vaker voorkomend dan een volledige bearmarkt." },
        { q:"Wat betekent 'liquiditeit' voor een aandeel?", options:["Hoeveel schuld het bedrijf heeft","Hoe makkelijk je het kunt kopen of verkopen zonder de prijs sterk te beïnvloeden","De kasreserves van het bedrijf","De dividenduitkeringsratio"], correct:1, explain:"Een liquide aandeel wordt vaak verhandeld met veel kopers en verkopers, zodat je kunt in- of uitstappen zonder grote prijsschommelingen door je eigen transactie." },
        { q:"Waarom kan een aandeel blijven dalen, zelfs na sterke winstcijfers?", options:["Winstcijfers hebben nooit invloed op de prijs","De resultaten voldeden nog steeds niet aan de verwachtingen die de markt al had ingeprijsd","Het is illegaal om te dalen na goede winstcijfers","De beurs zet de prijs een dag vast"], correct:1, explain:"Prijzen reageren op resultaten ten opzichte van verwachtingen, niet op resultaten op zichzelf — zelfs 'goede' winstcijfers kunnen een hoge lat missen en een aandeel laten dalen." },
        { q:"Wanneer een centrale bank de rente verhoogt om inflatie te bestrijden, wat doet dat doorgaans met aandelenkoersen?", options:["Aandelenkoersen stijgen meestal, omdat bedrijven meer verdienen bij hogere rente","Aandelenkoersen dalen vaak, omdat lenen duurder wordt en toekomstige winsten vandaag minder waard zijn","Aandelenkoersen worden totaal niet beïnvloed door rentetarieven","Rentetarieven hebben alleen invloed op obligatiekoersen, nooit op aandelen"], correct:1, explain:"Hogere rentetarieven verhogen de leenkosten voor bedrijven en consumenten, en maken toekomstige winsten in huidig geld minder waard — beide drukken doorgaans op aandelenwaarderingen, daarom reageren markten vaak negatief op renteverhogingen." }
      ],
      advanced:[
        { q:"Wat meet de Consumentenvertrouwensindex, en waarom houden beleggers deze in de gaten?", options:["Hoe zeker centrale bankiers zijn over hun eigen beleid","Hoe optimistisch huishoudens zijn over de economie en hun eigen financiën — een signaal voor toekomstige bestedingen","Het totale handelsvolume op de aandelenmarkt","Hoeveel nieuwe bedrijven een beursnotering krijgen"], correct:1, explain:"Het is een op enquêtes gebaseerde graadmeter voor het optimisme van huishoudens. Omdat consumentenbestedingen een groot deel van de economische activiteit aandrijven, wijst een stijgende index vaak op sterkere toekomstige bestedingen — en een dalende index kan een vroege waarschuwing zijn." },
        { q:"In de eurozone, welke instelling bepaalt de belangrijkste rente die doorwerkt in de Europese leenkosten?", options:["De Europese Centrale Bank (ECB)","De nationale regering van elk land afzonderlijk","De London Stock Exchange","Individuele commerciële banken, onafhankelijk van elkaar"], correct:0, explain:"De ECB bepaalt de basisrente voor de eurozone. Haar beslissingen beïnvloeden alles, van hypotheekrentes tot hoe duur het is voor bedrijven om te lenen en te investeren." },
        { q:"Tijdens de financiële crisis van 2008 raakte een golf van hypotheekwanbetalingen grote banken zwaar. Wat gebeurt er over het algemeen met aandelenkoersen tijdens zo'n systeemcrisis?", options:["Prijzen schieten omhoog door de onzekerheid","Prijzen dalen doorgaans sterk, doordat angst en gedwongen verkopen zich over de markten verspreiden","Prijzen blijven volledig stabiel, want crises hebben geen invloed op aandelen","Alleen bankaandelen worden geraakt; alle andere sectoren blijven ongemoeid"], correct:1, explain:"2008 kende brede, scherpe dalingen — niet alleen bij bankaandelen. Angst en gedwongen verkopen verspreiden zich doorgaans over bijna elke sector tijdens een systeemcrisis, niet alleen de sector waar het begon." },
        { q:"Als een land onverwacht een veel hogere werkloosheid rapporteert dan economen hadden voorspeld, wat is dan doorgaans de eerste reactie op de aandelenmarkt?", options:["Prijzen stijgen meestal, omdat minder mensen aan het werk bedrijven geld bespaart","Prijzen dalen vaak, omdat het een verzwakkende economie en lagere toekomstige bestedingen signaleert","Aandelenkoersen worden nooit beïnvloed door werkgelegenheidscijfers","Het heeft alleen invloed op de munt, nooit op aandelen"], correct:1, explain:"Zwakke werkgelegenheidscijfers wijzen op een mogelijk vertragende economie, wat kan betekenen dat consumenten minder besteden en bedrijven minder winst maken — een combinatie die markten doorgaans snel, en negatief, inprijzen." }
      ]
    },
    {
      learnMore:"Elke aandelenkoers verbergt een klein vocabulaire dat een kale prijs omzet in iets waar je daadwerkelijk over kunt redeneren. Een K/W-verhouding vertelt je hoeveel dollar beleggers betalen voor elke dollar aan huidige winst van een bedrijf — een grove vuistregel voor of een aandeel duur of goedkoop oogt ten opzichte van de winst. WPA splitst de totale winst op naar een bedrag per aandeel, zodat je een reuzenbedrijf op gelijke voet kunt vergelijken met een klein bedrijf. Dividendrendement herformuleert de uitkering van een bedrijf als percentage van de aandelenkoers, zodat een dividend van $2 iets anders betekent bij een aandeel van $20 dan bij een aandeel van $200. Geen van deze getallen geeft je op zichzelf een oordeel — een lage K/W kan een koopje zijn, of de markt kan stilletjes echte problemen inprijzen. Het zijn hulpmiddelen om betere vragen te stellen, geen antwoorden op zich. En als je klaar bent om te handelen op basis van wat je hebt gevonden, maakt het type order ook uit: een marktorder ruilt snelheid in voor prijszekerheid, terwijl een limietorder je laat wachten tot jouw prijs.",
      questions:[
        { q:"Wat vertelt de K/W-verhouding (koers-winstverhouding, P/E) van een aandeel je?", options:["Hoeveel aandelen er dagelijks worden verhandeld","Hoeveel beleggers betalen voor elke dollar winst van het bedrijf","De totale schuld van het bedrijf","Het dividend per aandeel"], correct:1, explain:"Een K/W van 20 betekent dat beleggers $20 betalen voor elke $1 aan jaarlijkse winst — een grove maatstaf voor of een aandeel duur of goedkoop lijkt ten opzichte van de winst." },
        { q:"Wat is WPA (winst per aandeel, EPS)?", options:["De totale winst van een bedrijf gedeeld door het aantal uitstaande aandelen","De prijs die je betaalt voor één aandeel","De transactiekosten per handeling","De totale omzet van een bedrijf"], correct:0, explain:"WPA vertaalt de totale winst naar een bedrag per aandeel, waardoor het makkelijker wordt om de winstgevendheid van sterk verschillende bedrijven te vergelijken." },
        { q:"Wat is het verschil tussen een marktorder en een limietorder?", options:["Marktorders worden direct uitgevoerd tegen de huidige prijs; limietorders worden alleen uitgevoerd tegen een prijs die jij instelt","Het zijn twee namen voor hetzelfde","Limietorders zijn alleen voor verkopen","Marktorders kunnen maar één keer per dag geplaatst worden"], correct:0, explain:"Een marktorder geeft voorrang aan snelheid — je krijgt de huidige prijs. Een limietorder geeft voorrang aan prijs — deze wordt alleen uitgevoerd op het niveau dat jij aangeeft." },
        { q:"Waarom is rente-op-rente (compound interest) zo belangrijk voor langetermijnbeleggers?", options:["Dat is niet zo — het is alleen relevant voor spaarrekeningen","Rendementen leveren weer rendement op, waardoor groei versnelt over tijd","Het garandeert elk jaar een vast rendement","Het geldt alleen voor obligaties"], correct:1, explain:"Herbelegde winsten leveren zelf weer winst op. Over decennia gezien drijft dat rente-op-rente-effect vaak meer vermogen aan dan het oorspronkelijk geïnvesteerde bedrag." },
        { q:"Wat meet het dividendrendement?", options:["De jaarlijkse dividenduitkering van een aandeel als percentage van de aandelenkoers","Het aantal keren dat dividend per jaar wordt uitgekeerd","Het totale bedrag dat een bedrijf aan dividend uitkeert","Het belastingtarief op dividendinkomsten"], correct:0, explain:"Een jaarlijks dividend van $2 op een aandeel van $50 is een rendement van 4% — zo kun je dividendinkomsten vergelijken tussen aandelen, ongeacht hun prijs." }
      ],
      intermediate:[
        { q:"Een aandeel met een erg lage K/W-verhouding vergeleken met de sector kan betekenen dat:", options:["Het altijd een koopje is","Het ondergewaardeerd kan zijn — of dat de markt echte problemen inprijst","Het geen winst heeft","Het geen belasting betaalt"], correct:1, explain:"Een goedkoop ogende K/W kan een echte kans zijn of juist een waarschuwingssignaal — er is meer onderzoek nodig om het verschil te zien." },
        { q:"Wat vergelijkt de K/B-verhouding (koers-boekwaarde, P/B)?", options:["De aandelenkoers met de netto boekwaarde van het bedrijf","De aandelenkoers met de merkwaarde","De aandelenkoers met de lengte van het tickersymbool","De aandelenkoers met het salaris van de CEO"], correct:0, explain:"K/B vergelijkt de marktprijs met de boekhoudkundige boekwaarde — nuttig voor kapitaalintensieve bedrijven zoals banken of vastgoed." }
      ],
      advanced:[
        { q:"Waarom kunnen twee analisten sterk van mening verschillen over de 'reële waarde' van een aandeel?", options:["Een van beiden heeft per definitie een rekenfout gemaakt","Waardering hangt af van aannames over toekomstige groei en risico, die redelijkerwijs kunnen verschillen","Reële waarde is een vast getal dat door toezichthouders wordt bepaald","Er mag maar één analist gelijk hebben"], correct:1, explain:"Waardering is geen enkele formule — het is gebaseerd op aannames over de toekomst, dus kunnen redelijke analisten tot verschillende getallen komen." }
      ]
    },
    {
      learnMore:"Niet alle beleggingen spelen dezelfde rol. Bedrijfsaandelen geven je eigendom en een aanspraak op toekomstige groei, zonder plafond en zonder bodem. Staatsobligaties doen het tegenovergestelde: je leent geld voor een vast rendement, en ruilt opwaarts potentieel in voor voorspelbaarheid. ETF's zitten er als wrapper tussenin — één verhandelbare mand die tientallen of duizenden onderliggende aandelen of obligaties tegelijk kan bevatten, zodat je direct spreiding krijgt zonder elk onderdeel apart te kopen. Goud en zilver gedragen zich weer anders: ze keren niets uit en laten geen bedrijf groeien, maar veel beleggers houden ze aan als afdekking, een waardeopslag wanneer al het andere onzeker aanvoelt. Cryptovaluta is de nieuwste en meest afwijkende van de groep — het is geen aanspraak op de winst van een bedrijf en wordt niet gedekt door een overheid, dus de waarde steunt volledig op vraag, aanbod en vertrouwen in de onderliggende technologie. Geen van deze is simpelweg 'beter' dan de andere; ze gedragen zich verschillend onder verschillende omstandigheden, en precies daarom is het bewust mengen ervan zelf al een strategie.",
      questions:[
        { q:"Wat is het belangrijkste verschil tussen het bezitten van een bedrijfsaandeel en een staatsobligatie?", options:["Een aandeel is eigendom met variabel rendement; een obligatie is een lening met een vaste rentebetaling","Het is hetzelfde, alleen anders genoemd","Obligaties kunnen alleen door overheden worden gekocht","Aandelen zijn altijd veiliger dan obligaties"], correct:0, explain:"Aandelen maken je mede-eigenaar, met alle ups en downs van het bedrijf. Obligaties maken je een geldschieter, meestal tegen een vaste rente voor een vaste looptijd." },
        { q:"Wat is een ETF (exchange-traded fund)?", options:["Het aandeel van één bedrijf","Een mandje van veel bezittingen — zoals aandelen of obligaties — dat op de beurs verhandeld wordt als één aandeel","Een soort spaarrekening","Een cryptovaluta"], correct:1, explain:"Een ETF bundelt veel bezittingen in één verhandelbaar product, waardoor je direct spreiding krijgt zonder elk onderliggend bezit apart te hoeven kopen." },
        { q:"Welke rol spelen goud en zilver doorgaans in een portefeuille?", options:["Snelgroeiende bezittingen die naar verwachting snel vermenigvuldigen","Een waardeopslag die sommige beleggers gebruiken als afdekking tegen inflatie of onzekerheid","Een soort bedrijfsaandeel","Een gegarandeerd vast inkomen"], correct:1, explain:"Edelmetalen leveren geen winst of rente op — ze worden meestal aangehouden als afdekking, en hun prijs wordt gedreven door vraag, aanbod en sentiment." },
        { q:"Wat maakt cryptovaluta anders dan een traditioneel aandeel?", options:["Het vertegenwoordigt geen eigendom in een bedrijf en wordt niet gedekt door bedrijfswinsten of door de overheid uitgegeven geld","Het keert altijd dividend uit","Het wordt wereldwijd op dezelfde manier gereguleerd als aandelen","Het heeft geen prijsvolatiliteit"], correct:0, explain:"Crypto is geen aanspraak op de winst van een bedrijf — de waarde komt voort uit vraag, aanbod en vertrouwen in de onderliggende technologie, een fundamenteel andere beleggingscategorie." },
        { q:"Welke van deze wordt over het algemeen gezien als de meest conservatieve, inkomensgerichte beleggingsvorm?", options:["Cryptovaluta","Staatsobligaties","Individuele groeiaandelen","Edelmetalen"], correct:1, explain:"Staatsobligaties, vooral van stabiele economieën, worden doorgaans gezien als minder risicovol — stabiele, voorspelbare rente in plaats van hoog groeipotentieel." }
      ],
      intermediate:[
        { q:"Waarom zou een belegger zowel aandelen als obligaties samen aanhouden?", options:["Obligaties en aandelen gedragen zich vaak verschillend tijdens neergangen, waardoor het combineren ervan de schommelingen van de hele portefeuille kan dempen","Het is verplicht bij elke broker","Obligaties presteren altijd beter dan aandelen","Er is geen reden, ze zijn identiek"], correct:0, explain:"Obligaties hebben historisch gezien sommige aandelendalingen gedempt, daarom is een gemengde strategie gebruikelijk om groei en stabiliteit in balans te houden." },
        { q:"Wat is een belangrijk structureel risico dat specifiek is voor veel cryptobezittingen, maar niet voor traditionele aandelen?", options:["Risico's rond de beveiliging van beurzen of wallets en bewaring, naast beperkte wettelijke bescherming","Ze kunnen nooit verkocht worden","Ze zijn alleen op werkdagen beschikbaar","Ze betalen vennootschapsbelasting"], correct:0, explain:"Naast prijsschommelingen brengt crypto extra risico's met zich mee rond hacks van beurzen, verloren sleutels, en dunnere wettelijke vangnetten vergeleken met beursgenoteerde effecten." },
        { q:"Hoeveel aandelen, ETF's en cryptovaluta's bestaan er wereldwijd, ongeveer?", options:["Ongeveer 60.000 aandelen, 15.000 ETF's en meer dan 10.000 cryptovaluta's","Ongeveer 10.000 aandelen, 60.000 ETF's en 500 cryptovaluta's","Ongeveer 500 aandelen, 5.000 ETF's en 60.000 cryptovaluta's","Ongeveer 1.000 aandelen, 1.000 ETF's en 1.000 cryptovaluta's"], correct:0, explain:"Er zijn wereldwijd ongeveer 60.000 beursgenoteerde bedrijven, zo'n 15.000 ETF's, en — zoals ook bij Bitcoin hierboven aan bod kwam — ruim 10.000 verschillende cryptovaluta's. Dat is veel keuze, en precies daarom is spreiding en weten wat je koopt zo belangrijk." }
      ],
      advanced:[
        { q:"Een ETF die de goudprijs volgt zonder fysiek goud aan te houden, loopt welk extra risico ten opzichte van het direct bezitten van goud?", options:["Geen, ze zijn identiek","Tegenpartij- of fondsstructuurrisico, afhankelijk van hoe de ETF is opgebouwd","Het keert een verplicht dividend uit","Het kan niet op de beurs worden verhandeld"], correct:1, explain:"Afhankelijk van de structuur kan een goud-ETF steunen op derivaten of niet-toegewezen bezittingen in plaats van fysieke baren — het is goed om dat vooraf te begrijpen." }
      ]
    },
    {
      learnMore:"Geen enkele aandelenkeuze, hoe goed die ook aanvoelt, zou je hele financiële toekomst moeten dragen — dat is het simpele inzicht achter spreiding. Verdeel je geld over veel bezittingen, en één tegenvaller wordt geen ramp meer. Combineer dat met een eerlijke blik op risico en rendement: meer risico nemen is hoe je de mogelijkheid van meer rendement verdient, nooit een garantie ervoor. Vanaf daar gaan de echte beslissingen niet over het kiezen van het 'beste' aandeel — ze gaan over allocatie: hoeveel gaat er naar aandelen versus obligaties versus cash, want die mix bepaalt meestal meer van je resultaat dan welk specifiek bedrijf je koos. Twee simpele gewoontes doen hier het meeste werk. Dollar-cost averaging — een vast bedrag op regelmatige momenten beleggen — betekent dat je automatisch meer koopt wanneer prijzen laag zijn en minder wanneer ze hoog zijn, zonder dat je iets hoeft te voorspellen. En herbalanceren — je mix periodiek weer richting je oorspronkelijke doel duwen — dwingt je stilletjes om winnaars die te groot zijn geworden te snoeien en achterblijvers aan te vullen, een gedisciplineerde manier om laag te kopen en hoog te verkopen zonder ooit te proberen de markt te timen.",
      questions:[
        { q:"Waarom spreiden beleggers over veel aandelen in plaats van er maar één te kopen?", options:["Het is wettelijk verplicht","Om risico te spreiden, zodat één slecht presterend aandeel niet de hele portefeuille schaadt","Het garandeert hogere rendementen","Brokers rekenen minder kosten voor meerdere aandelen"], correct:1, explain:"Als één bezitting sterk daalt, absorbeert een gespreide portefeuille de klap beter dan een geconcentreerde — een van de weinige echte gratis lunches in beleggen." },
        { q:"Wat is de algemene relatie tussen risico en verwacht rendement?", options:["Hoger risico gaat meestal gepaard met hoger potentieel rendement","Hoger risico betekent altijd lager rendement","Risico en rendement staan los van elkaar","Lager risico verslaat altijd hoger risico over tijd"], correct:0, explain:"Het is een afweging, geen garantie — risicovollere bezittingen moeten meer potentiële opbrengst bieden om beleggers te compenseren voor de extra onzekerheid." },
        { q:"Wat is een indexfonds?", options:["Een fonds dat de markt probeert te verslaan door winnende aandelen te kiezen","Een fonds dat alle — of de meeste — aandelen in een index koopt en aanhoudt","Een spaarobligatie uitgegeven door de overheid","Een fonds dat alleen beschikbaar is voor institutionele beleggers"], correct:1, explain:"In plaats van te gokken welke aandelen zullen winnen, bezit een indexfonds gewoon de hele mand — lage kosten, brede spreiding, en een veelgebruikt startpunt." },
        { q:"Wat is dollar-cost averaging (periodiek beleggen)?", options:["Een vast bedrag beleggen op regelmatige tijdstippen, ongeacht de prijs","Alleen kopen wanneer de prijs het laagste punt bereikt","Je portefeuille één keer per jaar omzetten in contant geld","De prijs van elk aandeel in de S&P 500 middelen"], correct:0, explain:"Door regelmatig hetzelfde bedrag te beleggen, koop je automatisch meer aandelen wanneer prijzen laag zijn en minder wanneer ze hoog zijn — zo vlak je het effect van timing uit." },
        { q:"Wat betekent 'asset allocatie'?", options:["De specifieke aandelen die je bezit","Hoe je je geld verdeelt over categorieën zoals aandelen, obligaties en cash","De kosten die je broker rekent","De volgorde waarin je je bezittingen verkoopt"], correct:1, explain:"Allocatie is de grote lijn van je mix — aandelen versus obligaties versus cash — en dat bepaalt meestal meer van je resultaat op lange termijn dan welke specifieke aandelen je kiest." }
      ],
      intermediate:[
        { q:"Wat is 'herbalanceren' van een portefeuille?", options:["Alles verkopen en opnieuw beginnen","Periodiek je bezittingen weer aanpassen naar je doelverdeling","Alleen meer van je winnaars kopen","Een belastingaangifte-verplichting"], correct:1, explain:"Omdat sommige bezittingen sneller groeien dan andere, raakt je mix uit balans. Herbalanceren snoeit de winnaars en vult de achterblijvers aan om je beoogde risiconiveau te herstellen." },
        { q:"Wat is het belangrijkste risico van te veel spreiden?", options:["Het is illegaal boven een bepaald aantal bezittingen","Rendementen kunnen op het marktgemiddelde gaan lijken, waardoor de impact van je beste keuzes verwatert","Het verlaagt kosten automatisch tot nul","Te veel spreiden bestaat niet"], correct:1, explain:"Te dun gespreid kan een portefeuille de brede markt gaan volgen — niet per se slecht, maar je winnaars hebben minder ruimte om het verschil te maken." }
      ],
      advanced:[
        { q:"Wat beschrijft 'correlatie' tussen twee bezittingen?", options:["Welke van de twee een hogere prijs heeft","Hoe nauw hun prijsbewegingen elkaar volgen","Welke van de twee een groter dividend uitkeert","Hun gecombineerde marktkapitalisatie"], correct:1, explain:"Lage of negatieve correlatie is wat spreiding daadwerkelijk risicoverlagend maakt — bezittingen die niet gelijk bewegen, dempen de schommelingen." }
      ]
    },
    {
      learnMore:"De kloof tussen willen beleggen en het daadwerkelijk doen is meestal kleiner dan het aanvoelt. Een account openen bij een Europees platform — Bitvavo en Kraken zijn twee bekende namen — kost doorgaans een geverifieerde ID, een gekoppelde bankrekening, en een paar minuten van je tijd; de identiteitscontrole (KYC) is overal een standaard wettelijke verplichting, geen waarschuwingssignaal specifiek voor één platform. Vanaf daar geldt een kleine transactiekost telkens wanneer je daadwerkelijk koopt of verkoopt, dus is het de moeite waard om even naar de kostenpagina van een platform te kijken voordat je begint, aangezien die kleine percentages oplopen over veel transacties of veel jaren. Veel beleggers leunen ook op aparte tools puur voor onderzoek: TradingView om prijsbewegingen in kaart te brengen, Yahoo Finance voor gratis koersen, nieuws en bedrijfscijfers — geen van beide vereist dat je erdoorheen handelt, ze zijn er alleen om te bekijken. Zet die onderdelen samen — een geverifieerd account, begrip van kosten, en een plek om onderzoek te doen — en je hebt alles wat je daadwerkelijk nodig hebt om je eerste transactie te plaatsen.",
      questions:[
        { q:"Wat heb je doorgaans nodig om een account te openen bij een Europees handels- of cryptoplatform?", options:["Een geregistreerd bedrijf en een advocaat","Een geverifieerde ID, een bankrekening om te storten, en een paar minuten om je aan te melden","Een minimum van tienduizend euro","Een aanbeveling van een bestaande professionele handelaar"], correct:1, explain:"De meeste platforms — zoals Bitvavo of Kraken — hebben alleen identiteitsverificatie en een gekoppelde bankrekening nodig. Aanmelden zelf is meestal gratis en kost een paar minuten." },
        { q:"Waarom vereisen platforms identiteitsverificatie (KYC)?", options:["Om je gegevens aan adverteerders te verkopen","Het is een wettelijke verplichting om fraude en witwassen te voorkomen","Alleen om het aanmelden lastiger te maken","Alleen cryptoplatforms vereisen dit, effectenbrokers niet"], correct:1, explain:"'Know Your Customer'-controles zijn een wettelijke verplichting bij zowel effectenbrokers als cryptobeurzen — een standaardstap, geen waarschuwingssignaal." },
        { q:"Wat zijn transactiekosten (handelskosten)?", options:["Alleen een eenmalige aanmeldkosten","Een kleine kost per transactie, vaak een percentage van het bedrag of een vast tarief","Een belasting die rechtstreeks aan de overheid wordt betaald","Kosten die alleen gevorderde handelaren betalen"], correct:1, explain:"Bijna elk platform rekent iets per transactie — meestal een klein percentage of een vast tarief — het is de moeite waard om het kostenoverzicht van een platform te checken voordat je begint." },
        { q:"Waarvoor wordt TradingView gewoonlijk gebruikt?", options:["Online boodschappen doen","Het in kaart brengen en analyseren van prijsbewegingen van aandelen, crypto en andere markten","Belastingaangifte doen","Je identiteit verifiëren bij een broker"], correct:1, explain:"TradingView is een veelgebruikte tool om grafieken te bekijken — veel beleggers gebruiken het om prijstrends te bestuderen, ook als ze via een ander platform handelen." },
        { q:"Waarvoor wordt Yahoo Finance doorgaans gebruikt?", options:["Het versturen van internationale bankoverschrijvingen","Gratis toegang tot aandelenkoersen, financieel nieuws en bedrijfscijfers","Het verifiëren van crypto-walletadressen","Het plaatsen van hoogfrequente transacties"], correct:1, explain:"Yahoo Finance is een populaire gratis bron voor koersen, nieuws en basale bedrijfscijfers — een veelgebruikt startpunt voor onderzoek." }
      ],
      intermediate:[
        { q:"Wat is een praktische reden om kostenstructuren tussen platforms te vergelijken voordat je er één kiest?", options:["Kosten zijn overal identiek, dus het maakt niet uit","Kleine percentagekosten stapelen zich op over veel transacties en kunnen je rendement op lange termijn merkbaar beïnvloeden","Alleen professionele handelaren betalen kosten","Kosten worden na een jaar terugbetaald"], correct:1, explain:"Een schijnbaar klein kostenverschil per transactie telt flink op als je vaak handelt of decennialang belegt — een paar minuten vergelijken vooraf is de moeite waard." },
        { q:"Waar is een 'limietorder' nuttig voor als je net begint op een nieuw platform?", options:["Altijd de laagst mogelijke prijs garanderen","Precies de prijs bepalen waartegen je wilt kopen of verkopen, in plaats van te accepteren wat de markt biedt","Alle kosten vermijden","Identiteitsverificatie omzeilen"], correct:1, explain:"Voor een beginnende handelaar die nog went aan een platform, biedt een limietorder een vangnet — je krijgt nooit een prijs die je niet had bedoeld." }
      ],
      advanced:[
        { q:"Waarom zou een belegger meer dan één platform of tool gebruiken — bijvoorbeeld een broker plus TradingView?", options:["Het is wettelijk verplicht","Grafiek-/onderzoekstools en uitvoeringsplatforms specialiseren zich vaak — de één voor analyse, de ander voor het plaatsen van transacties","Om expres dubbele kosten te betalen","Omdat geen enkel platform zowel kopen als grafieken bekijken toestaat"], correct:1, explain:"Veel beleggers doen onderzoek en bekijken grafieken op één tool, en voeren transacties uit via hun broker of beurs naar keuze — die twee taken hoeven niet op dezelfde plek te gebeuren." }
      ]
    }
  ];

  var GOALS = [
    { id:'what-is-stock', label:'Finance: what a stock actually is', unit:0 },
    { id:'market-moves', label:'Markets: why prices move the way they do', unit:1 },
    { id:'analyze-stocks', label:'Numbers: how to analyze a stock before buying', unit:2 },
    { id:'investment-types', label:'Investment: which investment types exist', unit:3 },
    { id:'build-portfolio', label:'Portfolio: how to diversify your investment', unit:4 },
    { id:'getting-started', label:'Start: which platform to use and how', unit:5 },
    { id:'playdata', label:'Play: how would my money have grown if I had invested it', unit:null, playdata:true }
  ];

  var MAPPABLE_GOAL_COUNT = GOALS.filter(function(g){ return g.unit !== null; }).length;

  // Paste your deployed Google Apps Script Web App URL here to centralize feedback
  // (leave blank to keep feedback local-only, same as before).
  // e.g. "https://script.google.com/macros/s/AKfycbx.../exec"
  var FEEDBACK_ENDPOINT_URL = "https://script.google.com/macros/s/AKfycbw1JwyZGuaK5f4rb5GCC9aV40yvRc504cxWFDa57Azva6PZLhB81nrv6hQKRsotvXdrRA/exec";

  // ---------- i18n ----------
  // Note: the per-section "learn more" narratives (section.learnMore) stay
  // English-only for now. Quiz questions/options/explanations are fully
  // bilingual via SECTIONS_NL below. Everything else below is fully
  // translated chrome.
  var STRINGS = {
    en: {
      'topbar.level': 'level:',
      'topbar.streak': 'streak:',
      'topbar.score': 'score:',

      'welcome.kicker': 'Welcome to',
      'welcome.mission': "Our mission is to kickstart new investors and take those who already know the basics further — so everyone can invest with real confidence.",
      'welcome.tagline': "The best app that combines an educational quiz and playing with real data — covering stocks, index funds, and crypto!",
      'welcome.getStarted': 'Get started',
      'welcome.introduction': 'Introduction',
      'welcome.proceed': 'Proceed',
      'welcome.disclaimer': "Stockguru does not provide financial advice. It's built for education only.",

      'experience.title': "What's your experience?",
      'experience.question': 'Have you ever bought a stock or cryptocurrency on a platform before?',
      'experience.yes': 'Yes, I have',
      'experience.no': 'Not yet',
      'experience.howTitle': 'How Stockguru works',
      'experience.how1': 'Every section has <strong>three quiz levels</strong> — Beginner, Intermediate, and Advanced (Advanced is still coming) — each a bit harder than the last.',
      'experience.how2': 'Each section also has an <strong>optional summary</strong> you can read, or just listen to, if you want the fuller story behind it.',
      'experience.how3': 'You <strong>earn points</strong> as you go, and once every Beginner section is done, <strong>Intermediate unlocks</strong> — and next, <strong>Advanced</strong>.',
      'experience.how4': 'Play with data has two goals: see how different investment types actually moved over the <strong>last years</strong>, and try your own <strong>what-if scenario</strong> to see what return you might have earned.',
      'experience.didYouKnowTitle': 'Did you know?',
      'experience.stat1': 'of new investors surveyed said it was simply unclear how to start on a platform.',
      'experience.stat2': 'said it was unclear how to come to an investment strategy — and when to buy or sell.',
      'experience.stat3': 'said a mixed investment strategy, spread across types, was unfamiliar to them.',
      'experience.continue': 'Get started and set your goals!',
      'experience.backToApp': 'Back to app',

      'goals.title': 'What brings you here?',
      'goals.subtitle': 'Pick anything that fits — it just helps us point you to the right sections first.',
      'goals.continue': 'Continue',

      'home.title': 'Learn to invest',
      'home.defaultSub': 'Five-minute lessons on the fundamentals — work through each section at your own pace.',
      'home.recommendAll': "For your set goals, it's recommended to look at all the sections below.",
      'home.recommendSome': "For your set goals, it's recommended to at least look at {list}.",
      'home.sectionWord': 'section',
      'home.sectionsWord': 'sections',
      'home.and': 'and',
      'home.notStarted': 'Not started yet',
      'home.bestScore': '{pct}% best score',
      'home.recommendedTag': 'Recommended for you',
      'home.comingSoon': 'Coming soon',
      'home.seeAlsoPlaydata': 'See this in action with real numbers on the Play with data tab.',
      'home.playdataNote': 'You can also use the Play with data tab to see what would have actually happened with real data, and how much return you could have earned!',

      'quiz.check': 'Check',
      'quiz.continue': 'Continue',
      'quiz.seeResults': 'See results',
      'quiz.correct': 'Correct',
      'quiz.notQuite': 'Not quite',
      'quiz.eyebrow': '{section} \u00B7 {level} \u2014 question {n} of {total}',
      'quiz.showSummary': 'Read/listen to summary first',
      'quiz.hideSummary': 'Hide summary',

      'summary.dailyClose': 'Daily close',
      'summary.correct': 'correct',
      'summary.scoreEarned': 'score earned',
      'summary.streak': 'streak',
      'summary.learnMoreQuestion': 'Want the fuller story behind this section?',
      'summary.learnMoreBtn': 'Learn more',
      'summary.hideBtn': 'Hide',
      'summary.listenBtn': 'Listen',
      'summary.stopBtn': 'Stop',
      'summary.feedbackPrompt': 'What would you like to learn more about in {section}?',
      'summary.feedbackPlaceholder': 'e.g. more on how dividends get taxed',
      'summary.sendFeedback': 'Send feedback',
      'summary.feedbackThanks': 'Thanks — saved for the next update.',
      'summary.backToPath': 'Back to path',
      'summary.congratsAll': "Congratulations — you've completed every beginner section. You're ready to get going!",
      'summary.congratsSection': "Congratulations — you're ready to get going!",

      'playdata.title': 'Play with data',
      'playdata.subtabExamples': 'Examples',
      'playdata.subtabScenario': 'Scenario',
      'playdata.intro': 'A few real examples to get a feel for how different investment types have actually moved over the last years.',
      'playdata.riskOrderNote': 'These examples are ordered roughly from lower risk — broad and diversified — to higher risk, ending with a single stock and a single cryptocurrency.',
      'playdata.allworldTitle': 'All World ETF — last 5 years, monthly (indexed to 100)',
      'playdata.allworldIntro': 'The All World ETF is a fund that invests in thousands of stocks worldwide at once, spread across dozens of countries.',
      'playdata.allworldInsight': 'You can see steady growth over the last 5 years, with a clear dip in 2022 as interest rates rose and inflation fears spread.',
      'playdata.allworldCaption': 'Illustrative monthly figures, indexed to 100 at the start. Not real-time data.',
      'playdata.spxTitle': 'S&P 500 — last 5 years, monthly',
      'playdata.spxIntro': 'The S&P 500 is an index of 500 large U.S. companies, often used as a benchmark for the American stock market.',
      'playdata.spxInsight': 'You can see strong growth, largely driven by tech stocks, with a clear dip in 2022 when interest rates rose sharply.',
      'playdata.spxCaption': 'Illustrative monthly averages, not real-time data.',
      'playdata.goldTitle': 'Gold — last 5 years, monthly (USD/oz)',
      'playdata.goldIntro': 'Gold is a precious metal many investors use as a hedge against inflation and uncertainty, rather than for growth.',
      'playdata.goldInsight': 'You can see a strong rise, especially from 2024 onward, as uncertainty and high inflation pushed investors toward safe havens.',
      'playdata.goldCaption': 'Illustrative monthly figures, not real-time data.',
      'playdata.btcTitle': 'Bitcoin — last 5 years, monthly (USD)',
      'playdata.btcIntro': "Bitcoin is a cryptocurrency with no underlying company or government, whose value rests entirely on supply, demand, and belief. It's the best-known cryptocurrency by far — but there are over 10,000 different cryptocurrencies out there.",
      'playdata.btcInsight': 'You can see huge swings — sharp peaks like late 2024, but also steep drops, like the 2022 "crypto winter".',
      'playdata.btcCaption': 'Illustrative monthly figures, not real-time data.',
      'playdata.nflxTitle': 'Netflix — last 5 years, monthly (individual stock)',
      'playdata.nflxIntro': "Netflix is a single company's stock, not a spread-out fund like the examples above — so its price moves entirely on its own story.",
      'playdata.nflxInsight': 'You can see it climb hard — but also crash over 70% in 2022 after a shock subscriber loss, before rallying over 600% to a new high, then dropping again. A single well-known stock can swing far harder than a diversified fund.',
      'playdata.nflxCaveat': 'This is just one example of a well-known stock — chosen to show that even famous, popular companies can also drop hard, not only rise.',
      'playdata.nflxCaption': "Illustrative monthly figures, adjusted for Netflix's November 2025 stock split. Not real-time data.",
      'playdata.crossLinkTypes': 'Want to understand the difference between ETFs, stocks, gold, and crypto in more depth? Check the "Investment types" section in the quiz.',
      'playdata.crossLinkMarkets': "Curious why prices move the way they do? That's covered in the \"How markets move\" section.",
      'playdata.crossLinkDCA': "Want to know more about DCA? It's explained in the \"Building a portfolio\" section of the quiz.",
      'playdata.whatifNewTitle': "New: what if scenario's",
      'playdata.whatifNewIntro': 'Beyond the historical charts above, try your own hypothetical investment below and see what it could be worth today.',
      'playdata.questionsHeading': 'These are the questions you can answer:',
      'playdata.whatifQuestion': 'What if I bought an ETF, stock, gold or crypto? What if I bought once at a specific moment? What if I bought a fixed amount per month? What would be the gain or loss today?',
      'playdata.assetLabel': 'Asset',
      'playdata.assetAllworld': 'ETF (All World)',
      'playdata.assetStock': 'Stock market (S&P 500)',
      'playdata.assetGold': 'Gold (metals)',
      'playdata.assetCrypto': 'Crypto (Bitcoin)',
      'playdata.assetNflx': 'Individual stock (Netflix)',
      'playdata.assetAapl': 'Individual stock (Apple)',
      'playdata.assetMsft': 'Individual stock (Microsoft)',
      'playdata.assetNvda': 'Individual stock (Nvidia)',
      'playdata.assetTsla': 'Individual stock (Tesla)',
      'playdata.assetAsml': 'Individual stock (ASML)',
      'playdata.assetGoogl': 'Individual stock (Alphabet/Google)',
      'playdata.assetAmzn': 'Individual stock (Amazon)',
      'playdata.assetMeta': 'Individual stock (Meta)',
      'playdata.assetNke': 'Individual stock (Nike)',
      'playdata.assetNasdaq100': 'ETF (Nasdaq-100)',
      'playdata.assetSilver': 'Silver (metals)',
      'playdata.assetEth': 'Crypto (Ethereum)',
      'playdata.assetSol': 'Crypto (Solana)',
      'playdata.groupEtfs': 'ETFs',
      'playdata.groupMetals': 'Metals',
      'playdata.groupCrypto': 'Crypto',
      'playdata.groupStocks': 'Individual stocks',
      'playdata.dataScopeNote': 'This tool includes the 10 largest individual stocks, the 3 largest cryptocurrencies, and the 3 largest ETFs, alongside gold and silver.',
      'playdata.dataSourceNote': 'Figures are refreshed daily and sourced from reputable open sources such as Yahoo Finance.',
      'playdata.compareLabel': 'Compare with',
      'playdata.compareNone': 'None',
      'playdata.amountLumpLabel': 'Amount invested (€)',
      'playdata.amountDcaLabel': 'Amount per month (€)',
      'playdata.chartIndexedNote': 'Both lines indexed to 100 at the start, so they can be compared directly.',
      'playdata.compareLine': 'Compared to {asset}: €{finalValue} ({dir} {pct}%)',
      'playdata.diversifiedTitle': 'If you had split it evenly across all 5 examples instead:',
      'playdata.strategyLabel': 'Strategy',
      'playdata.strategyLump': 'Buy once',
      'playdata.strategyDca': 'Buy monthly (DCA)',
      'playdata.step1': 'Step 1: choose an investment type',
      'playdata.step2': 'Step 2: choose when you bought, and when you sold (default: today)',
      'playdata.step3': 'Step 3: choose a buying strategy',
      'playdata.step4': 'Step 4: view the return you could have earned',
      'playdata.assumptions': '"Buy once" assumes a single lump-sum purchase made on your chosen buy date, held until your chosen sell date. "Buy monthly (DCA)" means dollar-cost averaging — investing your chosen amount every month across that same period instead of all at once, something many beginner investors do (as covered in the quiz), since it smooths out the effect of timing.',
      'playdata.caption': 'Based on the same illustrative monthly figures shown above. Not financial advice.',
      'playdata.buyLabel': 'Bought in',
      'playdata.sellLabel': 'Sold in (default: today)',
      'playdata.tradeInvalidRange': 'The sell month must be the same as or after the buy month.',
      'playdata.showExplanation': 'Show explanation',
      'playdata.hideExplanation': 'Hide explanation',
      'playdata.resultLumpAmount': '\u20AC{amount} invested in {asset} in {buyMonth}, held until {sellMonth}, would be worth \u20AC{finalValue} today ({dir} {pct}%).',
      'playdata.resultDcaAmount': 'Investing \u20AC{amount} per month into {asset} from {buyMonth} to {sellMonth} would be worth \u20AC{finalValue} today ({dir} {pct}%).',
      'playdata.up': 'up',
      'playdata.down': 'down',

      'feedback.title': 'Feedback',
      'feedback.subtitle': 'Tell us what to add, fix, or explain better — every note helps shape the next section.',
      'feedback.weHearYou': 'We hear you!',
      'feedback.summarySubtext': 'This is the feedback collected so far, and where the app will be improved in future releases.',
      'feedback.dummyNote': 'Illustrative example for now — real numbers will appear here as feedback comes in.',
      'feedback.rateTitle': 'How would you rate the app?',
      'feedback.topicsTitle': 'Which topics would you like to learn more about?',
      'feedback.anythingElse': 'Anything else?',
      'feedback.placeholder': "What should Stockguru cover next, or what's not working?",
      'feedback.send': 'Send feedback',
      'feedback.thanks': 'Thanks — your feedback is saved.',
      'feedback.disclaimerConfigured': 'Your feedback is saved on this device, and shared with the Stockguru team so we can improve the app.',
      'feedback.disclaimerLocal': "Feedback stays on this device for now — there's no server behind this proof of concept yet.",
      'feedback.avgRating': 'Average rating: <strong>{avg} \u2605</strong> ({n} rating{plural})',

      'nav.goals': 'Set goals',
      'nav.learn': 'Learn by quiz',
      'nav.playdata': 'Play with data',
      'nav.feedback': 'Feedback'
    },
    nl: {
      'topbar.level': 'niveau:',
      'topbar.streak': 'reeks:',
      'topbar.score': 'score:',

      'welcome.kicker': 'Welkom bij',
      'welcome.mission': 'Onze missie is om nieuwe beleggers op weg te helpen en mensen die de basis al kennen verder te brengen — zodat iedereen met vertrouwen kan beleggen.',
      'welcome.tagline': 'De beste app die een educatieve quiz en spelen met echte data combineert — met aandelen, indexfondsen en crypto!',
      'welcome.getStarted': 'Aan de slag',
      'welcome.introduction': 'Introductie',
      'welcome.proceed': 'Doorgaan',
      'welcome.disclaimer': 'Stockguru geeft geen financieel advies. De app is uitsluitend bedoeld voor educatie.',

      'experience.title': 'Wat is jouw ervaring?',
      'experience.question': 'Heb je ooit eerder een aandeel of cryptovaluta gekocht via een platform?',
      'experience.yes': 'Ja, dat heb ik',
      'experience.no': 'Nog niet',
      'experience.howTitle': 'Hoe Stockguru werkt',
      'experience.how1': 'Elke sectie heeft <strong>drie quizniveaus</strong> — Beginner, Intermediate en Advanced (Advanced volgt nog) — elk net iets moeilijker dan de vorige.',
      'experience.how2': 'Elke sectie heeft ook een <strong>optionele samenvatting</strong> die je kunt lezen, of gewoon beluisteren, als je het hele verhaal wilt horen.',
      'experience.how3': 'Je <strong>verdient punten</strong> terwijl je leert, en zodra alle Beginner-secties zijn afgerond, <strong>ontgrendel je Intermediate</strong> — en daarna <strong>Advanced</strong>.',
      'experience.how4': 'Play with data heeft twee doelen: zie hoe verschillende soorten investeringen zich de <strong>afgelopen jaren</strong> daadwerkelijk hebben ontwikkeld, en probeer je eigen <strong>what-if scenario</strong> om te zien welk rendement je had kunnen behalen.',
      'experience.didYouKnowTitle': 'Wist je dat?',
      'experience.stat1': 'van de ondervraagde nieuwe beleggers aangaf dat het simpelweg onduidelijk was hoe te beginnen op een platform.',
      'experience.stat2': 'aangaf dat het onduidelijk was hoe tot een beleggingsstrategie te komen — en wanneer te kopen of verkopen.',
      'experience.stat3': 'aangaf dat een gemengde beleggingsstrategie, verspreid over verschillende soorten, onbekend was.',
      'experience.continue': 'Aan de slag en stel je doelen in!',
      'experience.backToApp': 'Terug naar de app',

      'goals.title': 'Wat brengt je hier?',
      'goals.subtitle': 'Kies wat op jou van toepassing is — dat helpt ons je naar de juiste secties te wijzen.',
      'goals.continue': 'Doorgaan',

      'home.title': 'Leer beleggen',
      'home.defaultSub': 'Lessen van vijf minuten over de basis — werk elke sectie op je eigen tempo door.',
      'home.recommendAll': 'Op basis van jouw doelen wordt aangeraden om alle onderstaande secties te bekijken.',
      'home.recommendSome': 'Op basis van jouw doelen wordt aangeraden om in ieder geval {list} te bekijken.',
      'home.sectionWord': 'sectie',
      'home.sectionsWord': 'secties',
      'home.and': 'en',
      'home.notStarted': 'Nog niet gestart',
      'home.bestScore': '{pct}% beste score',
      'home.recommendedTag': 'Aanbevolen voor jou',
      'home.comingSoon': 'Binnenkort beschikbaar',
      'home.seeAlsoPlaydata': 'Bekijk dit in de praktijk met echte cijfers op het tabblad Play with data.',
      'home.playdataNote': 'Je kunt ook op het tabblad Play with data met echte data bekijken wat er in de praktijk zou zijn gebeurd, en hoeveel rendement je had kunnen behalen!',

      'quiz.check': 'Controleer',
      'quiz.continue': 'Doorgaan',
      'quiz.seeResults': 'Bekijk resultaten',
      'quiz.correct': 'Correct',
      'quiz.notQuite': 'Niet helemaal',
      'quiz.eyebrow': '{section} \u00B7 {level} \u2014 vraag {n} van {total}',
      'quiz.showSummary': 'Lees/luister eerst de samenvatting',
      'quiz.hideSummary': 'Verberg samenvatting',

      'summary.dailyClose': 'Dagafsluiting',
      'summary.correct': 'correct',
      'summary.scoreEarned': 'score behaald',
      'summary.streak': 'reeks',
      'summary.learnMoreQuestion': 'Wil je het hele verhaal achter deze sectie?',
      'summary.learnMoreBtn': 'Meer lezen',
      'summary.hideBtn': 'Verbergen',
      'summary.listenBtn': 'Beluisteren',
      'summary.stopBtn': 'Stop',
      'summary.feedbackPrompt': 'Waarover zou je hier meer willen leren in {section}?',
      'summary.feedbackPlaceholder': 'bijv. meer over hoe dividend wordt belast',
      'summary.sendFeedback': 'Feedback versturen',
      'summary.feedbackThanks': 'Bedankt — opgeslagen voor de volgende update.',
      'summary.backToPath': 'Terug naar quiz overzicht',
      'summary.congratsAll': 'Gefeliciteerd — je hebt alle beginner-secties afgerond. Je bent klaar om te beginnen!',
      'summary.congratsSection': 'Gefeliciteerd — je bent klaar om te beginnen!',

      'playdata.title': 'Speel met data',
      'playdata.subtabExamples': 'Voorbeelden',
      'playdata.subtabScenario': 'Scenario',
      'playdata.intro': 'Een paar echte voorbeelden om een gevoel te krijgen van hoe verschillende soorten investeringen zich de afgelopen jaren daadwerkelijk hebben ontwikkeld.',
      'playdata.riskOrderNote': 'Deze voorbeelden zijn ongeveer gerangschikt van laag risico — breed gespreid — tot hoger risico, eindigend met een individueel aandeel en een individuele cryptovaluta.',
      'playdata.allworldTitle': 'All World ETF — afgelopen 5 jaar, maandelijks (geïndexeerd op 100)',
      'playdata.allworldIntro': 'De All World ETF is een fonds dat wereldwijd in duizenden aandelen tegelijk belegt, verspreid over tientallen landen.',
      'playdata.allworldInsight': 'Je ziet een gestage groei over de afgelopen 5 jaar, met een duidelijke dip in 2022 door stijgende rente en zorgen over inflatie.',
      'playdata.allworldCaption': 'Illustratieve maandcijfers, geïndexeerd op 100 aan het begin. Geen realtime data.',
      'playdata.spxTitle': 'S&P 500 — afgelopen 5 jaar, maandelijks',
      'playdata.spxIntro': 'De S&P 500 is een index van 500 grote Amerikaanse bedrijven, vaak gebruikt als graadmeter voor de Amerikaanse aandelenmarkt.',
      'playdata.spxInsight': 'Je ziet sterke groei, grotendeels gedreven door technologiebedrijven, met een duidelijke dip in 2022 toen de rente snel omhoogging.',
      'playdata.spxCaption': 'Illustratieve maandgemiddelden, geen realtime data.',
      'playdata.goldTitle': 'Goud — afgelopen 5 jaar, maandelijks (USD/oz)',
      'playdata.goldIntro': 'Goud is een edelmetaal dat veel beleggers gebruiken als bescherming tegen inflatie en onzekerheid, niet als groeibelegging.',
      'playdata.goldInsight': 'Je ziet een sterke stijging, vooral vanaf 2024, toen onzekerheid en hoge inflatie beleggers naar veilige havens dreven.',
      'playdata.goldCaption': 'Illustratieve maandcijfers, geen realtime data.',
      'playdata.btcTitle': 'Bitcoin — afgelopen 5 jaar, maandelijks (USD)',
      'playdata.btcIntro': 'Bitcoin is een cryptovaluta zonder onderliggend bedrijf of overheid, waarvan de waarde volledig steunt op vraag, aanbod en vertrouwen. Het is verreweg de bekendste cryptovaluta — maar er bestaan meer dan 10.000 verschillende cryptovaluta\'s.',
      'playdata.btcInsight': "Je ziet enorme schommelingen — scherpe pieken zoals eind 2024, maar ook stevige dalingen, zoals de 'cryptowinter' van 2022.",
      'playdata.btcCaption': 'Illustratieve maandcijfers, geen realtime data.',
      'playdata.nflxTitle': 'Netflix — afgelopen 5 jaar, maandelijks (individueel aandeel)',
      'playdata.nflxIntro': 'Netflix is het aandeel van één bedrijf, geen gespreid fonds zoals de voorbeelden hierboven — de prijs beweegt dus volledig op basis van het eigen verhaal van dat bedrijf.',
      'playdata.nflxInsight': 'Je ziet het aandeel hard stijgen — maar in 2022 ook meer dan 70% instorten na een schokkend verlies van abonnees, om vervolgens meer dan 600% te herstellen naar een nieuwe piek, en daarna weer te dalen. Eén bekend aandeel kan veel harder schommelen dan een gespreid fonds.',
      'playdata.nflxCaveat': 'Dit is slechts één voorbeeld van een bekend aandeel — gekozen om te laten zien dat ook beroemde, populaire bedrijven hard kunnen dalen, niet alleen stijgen.',
      'playdata.nflxCaption': 'Illustratieve maandcijfers, gecorrigeerd voor de aandelensplitsing van Netflix in november 2025. Geen realtime data.',
      'playdata.crossLinkTypes': "Wil je het verschil tussen ETF's, aandelen, goud en crypto beter begrijpen? Bekijk de sectie 'Soorten investeringen' in de quiz.",
      'playdata.crossLinkMarkets': "Benieuwd waarom koersen bewegen zoals ze doen? Dat wordt behandeld in de sectie 'Hoe markten bewegen'.",
      'playdata.crossLinkDCA': "Meer weten over DCA? Dat wordt uitgelegd in de sectie 'Een portefeuille opbouwen' van de quiz.",
      'playdata.whatifNewTitle': "Nieuw: what-if scenario's",
      'playdata.whatifNewIntro': 'Naast de historische grafieken hierboven kun je hieronder je eigen hypothetische investering uitproberen en zien wat die vandaag waard zou zijn.',
      'playdata.questionsHeading': 'Deze vragen kun je beantwoorden:',
      'playdata.whatifQuestion': 'Wat als ik een ETF, aandeel, goud of crypto had gekocht? Wat als ik eenmalig had gekocht op een specifiek moment? Wat als ik elke maand een vast bedrag had ingelegd? Wat zou de winst of het verlies vandaag zijn?',
      'playdata.assetLabel': 'Beleggingstype',
      'playdata.assetAllworld': 'ETF (All World)',
      'playdata.assetStock': 'Aandelenmarkt (S&P 500)',
      'playdata.assetGold': 'Goud (metalen)',
      'playdata.assetCrypto': 'Crypto (Bitcoin)',
      'playdata.assetNflx': 'Individueel aandeel (Netflix)',
      'playdata.assetAapl': 'Individueel aandeel (Apple)',
      'playdata.assetMsft': 'Individueel aandeel (Microsoft)',
      'playdata.assetNvda': 'Individueel aandeel (Nvidia)',
      'playdata.assetTsla': 'Individueel aandeel (Tesla)',
      'playdata.assetAsml': 'Individueel aandeel (ASML)',
      'playdata.assetGoogl': 'Individueel aandeel (Alphabet/Google)',
      'playdata.assetAmzn': 'Individueel aandeel (Amazon)',
      'playdata.assetMeta': 'Individueel aandeel (Meta)',
      'playdata.assetNke': 'Individueel aandeel (Nike)',
      'playdata.assetNasdaq100': 'ETF (Nasdaq-100)',
      'playdata.assetSilver': 'Zilver (metalen)',
      'playdata.assetEth': 'Crypto (Ethereum)',
      'playdata.assetSol': 'Crypto (Solana)',
      'playdata.groupEtfs': "ETF's",
      'playdata.groupMetals': 'Metalen',
      'playdata.groupCrypto': 'Crypto',
      'playdata.groupStocks': 'Individuele aandelen',
      'playdata.dataScopeNote': "Deze tool bevat de 10 grootste individuele aandelen, de 3 grootste cryptovaluta's, en de 3 grootste ETF's, naast goud en zilver.",
      'playdata.dataSourceNote': 'Cijfers worden dagelijks ververst en komen van betrouwbare open bronnen zoals Yahoo Finance.',
      'playdata.compareLabel': 'Vergelijk met',
      'playdata.compareNone': 'Geen',
      'playdata.amountLumpLabel': 'Geïnvesteerd bedrag (€)',
      'playdata.amountDcaLabel': 'Bedrag per maand (€)',
      'playdata.chartIndexedNote': 'Beide lijnen zijn geïndexeerd op 100 aan het begin, zodat ze direct te vergelijken zijn.',
      'playdata.compareLine': 'Vergeleken met {asset}: €{finalValue} ({pct}% {dir})',
      'playdata.diversifiedTitle': 'Als je het in plaats daarvan gelijk had verdeeld over alle 5 voorbeelden:',
      'playdata.strategyLabel': 'Strategie',
      'playdata.strategyLump': 'Eenmalig kopen',
      'playdata.strategyDca': 'Maandelijks kopen (DCA)',
      'playdata.step1': 'Stap 1: kies een belegging type',
      'playdata.step2': 'Stap 2: kies wanneer je kocht, en wanneer je verkocht (standaard: vandaag)',
      'playdata.step3': 'Stap 3: kies een koopstrategie',
      'playdata.step4': 'Stap 4: bekijk het rendement dat je had kunnen behalen',
      'playdata.assumptions': '"Eenmalig kopen" gaat uit van een eenmalige investering op je gekozen koopdatum, aangehouden tot je gekozen verkoopdatum. "Maandelijks kopen (DCA)" betekent dollar-cost averaging — elke maand jouw gekozen bedrag beleggen over diezelfde periode in plaats van alles ineens, iets wat veel beginnende beleggers doen (zoals behandeld in de quiz), omdat het het effect van timing uitvlakt.',
      'playdata.caption': 'Gebaseerd op dezelfde illustratieve maandcijfers als hierboven. Geen financieel advies.',
      'playdata.buyLabel': 'Gekocht in',
      'playdata.sellLabel': 'Verkocht in (standaard: vandaag)',
      'playdata.tradeInvalidRange': 'De verkoopmaand moet gelijk aan of na de koopmaand liggen.',
      'playdata.showExplanation': 'Toon uitleg',
      'playdata.hideExplanation': 'Verberg uitleg',
      'playdata.resultLumpAmount': '€{amount} belegd in {asset} in {buyMonth}, aangehouden tot {sellMonth}, zou vandaag €{finalValue} waard zijn ({pct}% {dir}).',
      'playdata.resultDcaAmount': '€{amount} per maand beleggen in {asset} van {buyMonth} tot {sellMonth} zou vandaag €{finalValue} waard zijn ({pct}% {dir}).',
      'playdata.up': 'hoger',
      'playdata.down': 'lager',

      'feedback.title': 'Feedback',
      'feedback.subtitle': 'Vertel ons wat we kunnen toevoegen, verbeteren of beter uitleggen — elke opmerking helpt de volgende sectie vorm te geven.',
      'feedback.weHearYou': 'We horen je!',
      'feedback.summarySubtext': 'Dit is de tot nu toe verzamelde feedback, en hier wordt de app in toekomstige versies op verbeterd.',
      'feedback.dummyNote': 'Voorlopig een illustratief voorbeeld — echte cijfers verschijnen hier zodra er feedback binnenkomt.',
      'feedback.rateTitle': 'Hoe zou je de app beoordelen?',
      'feedback.topicsTitle': 'Over welke onderwerpen zou je meer willen leren?',
      'feedback.anythingElse': 'Nog iets anders?',
      'feedback.placeholder': 'Wat moet Stockguru hierna behandelen, of wat werkt niet goed?',
      'feedback.send': 'Feedback versturen',
      'feedback.thanks': 'Bedankt — je feedback is opgeslagen.',
      'feedback.disclaimerConfigured': 'Je feedback wordt op dit apparaat opgeslagen, en gedeeld met het Stockguru-team zodat we de app kunnen verbeteren.',
      'feedback.disclaimerLocal': 'Feedback blijft voorlopig op dit apparaat — er zit nog geen server achter dit proof of concept.',
      'feedback.avgRating': 'Gemiddelde beoordeling: <strong>{avg} \u2605</strong> ({n} beoordeling{plural})',

      'nav.goals': 'Doelen instellen',
      'nav.learn': 'Leer via quiz',
      'nav.playdata': 'Speel met data',
      'nav.feedback': 'Feedback'
    }
  };

  var SECTION_I18N_NL = [
    { title:'Financiële basis', sub:'Wat je eigenlijk bezit' },
    { title:'Hoe markten bewegen', sub:'Prijs, sentiment, schaal' },
    { title:'De cijfers lezen', sub:'De taal van een koers' },
    { title:'Soorten investeringen', sub:"Aandelen, ETF's, metalen, crypto, obligaties" },
    { title:'Een portefeuille opbouwen', sub:'Risico, mix, discipline' },
    { title:'Aan de slag', sub:'Platforms & hulpmiddelen' }
  ];

  var GOAL_I18N_NL = {
    'what-is-stock': 'Financiën: wat een aandeel eigenlijk is',
    'market-moves': 'Markten: waarom prijzen bewegen zoals ze doen',
    'analyze-stocks': 'Cijfers: hoe je een aandeel analyseert voordat je koopt',
    'investment-types': 'Investeren: welke soorten investeringen bestaan er',
    'build-portfolio': 'Portefeuille: hoe je je beleggingen spreidt',
    'getting-started': 'Start: welk platform te gebruiken en hoe',
    'playdata': 'Spelen: hoeveel zou mijn geld gegroeid zijn als ik had geïnvesteerd'
  };

  var WHATIF_ASSET_LABELS_NL = {
    allworld: 'de All World ETF',
    spx: 'de S&P 500',
    gold: 'goud',
    btc: 'Bitcoin',
    nflx: 'Netflix'
  };

  function t(key, vars){
    var lang = (state && state.lang) || 'en';
    var str = (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key;
    if(vars){
      Object.keys(vars).forEach(function(k){
        str = str.split('{'+k+'}').join(vars[k]);
      });
    }
    return str;
  }

  function sectionTitle(i){
    if(state.lang === 'nl' && SECTION_I18N_NL[i]) return SECTION_I18N_NL[i].title;
    return SECTIONS[i].title;
  }

  function sectionSub(i){
    if(state.lang === 'nl' && SECTION_I18N_NL[i]) return SECTION_I18N_NL[i].sub;
    return SECTIONS[i].sub;
  }

  function goalLabel(goal){
    if(state.lang === 'nl' && GOAL_I18N_NL[goal.id]) return GOAL_I18N_NL[goal.id];
    return goal.label;
  }

  function applyTranslations(){
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    document.querySelectorAll('[data-i18n-label]').forEach(function(el){
      el.label = t(el.getAttribute('data-i18n-label'));
    });
    document.documentElement.lang = state.lang;
  }
  // ---------- end i18n ----------

  var STORAGE_KEY = "stockguru_state_v1";
  var state = null;

  function defaultState(){
    return {
      score:0,
      streak:0,
      lastActiveDay:null,
      goals:[],
      onboarded:false,
      priorExperience:null,
      feedback:[],
      progress:{},
      lang:'en',
      theme:'dark'
    };
  }

  function loadState(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      if(raw){
        var parsed = JSON.parse(raw);
        var d = defaultState();
        for(var k in d){ if(!(k in parsed)) parsed[k] = d[k]; }
        return parsed;
      }
    }catch(e){}
    return defaultState();
  }

  function saveState(){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){}
  }

  function todayStr(){
    return new Date().toISOString().slice(0,10);
  }

  function daysBetween(a,b){
    var d1 = new Date(a), d2 = new Date(b);
    return Math.round((d2-d1)/86400000);
  }

  function getProgress(i){
    if(!state.progress[i]) state.progress[i] = { beginnerDone:false, beginnerPct:0, intermediateDone:false, intermediatePct:0, advancedDone:false, advancedPct:0 };
    return state.progress[i];
  }

  var els = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    summary: document.getElementById('summary-screen'),
    welcomeScreen: document.getElementById('welcome-screen'),
    welcomeContinueBtn: document.getElementById('welcome-continue-btn'),
    welcomeIntroBtn: document.getElementById('welcome-intro-btn'),
    brandBtn: document.getElementById('brand-btn'),
    experienceScreen: document.getElementById('experience-screen'),
    experienceContinueBtn: document.getElementById('experience-continue-btn'),
    goalsScreen: document.getElementById('goals-screen'),
    goalsList: document.getElementById('goals-list'),
    goalsContinueBtn: document.getElementById('goals-continue-btn'),
    homeSub: document.getElementById('home-sub'),
    goalsNote: document.getElementById('goals-note'),
    units: document.getElementById('units-container'),
    playdataScreen: document.getElementById('playdata-screen'),
    feedbackScreen: document.getElementById('feedback-screen'),
    topicsList: document.getElementById('topics-list'),
    feedbackStarRow: document.getElementById('feedback-star-row'),
    feedbackDisclaimer: document.getElementById('feedback-disclaimer'),
    feedbackSummaryCard: document.getElementById('feedback-summary-card'),
    feedbackSummaryBars: document.getElementById('feedback-summary-bars'),
    feedbackSummaryStars: document.getElementById('feedback-summary-stars'),
    feedbackSummaryDummyNote: document.getElementById('feedback-summary-dummy-note'),
    generalFeedbackInput: document.getElementById('general-feedback-input'),
    generalFeedbackSubmit: document.getElementById('general-feedback-submit'),
    generalFeedbackThanks: document.getElementById('general-feedback-thanks'),
    lessonFeedbackBlock: document.getElementById('lesson-feedback'),
    lessonFeedbackInput: document.getElementById('lesson-feedback-input'),
    lessonFeedbackSubmit: document.getElementById('lesson-feedback-submit'),
    lessonFeedbackThanks: document.getElementById('lesson-feedback-thanks'),
    learnMoreBtn: document.getElementById('learn-more-btn'),
    learnMoreText: document.getElementById('learn-more-text'),
    speakBtn: document.getElementById('speak-btn'),
    bottomNav: document.getElementById('bottom-nav'),
    navGoals: document.getElementById('nav-goals'),
    navLearn: document.getElementById('nav-learn'),
    navPlaydata: document.getElementById('nav-playdata'),
    navFeedback: document.getElementById('nav-feedback'),
    navGoalsIcon: document.getElementById('nav-goals-icon'),
    navLearnIcon: document.getElementById('nav-learn-icon'),
    navPlaydataIcon: document.getElementById('nav-playdata-icon'),
    navFeedbackIcon: document.getElementById('nav-feedback-icon'),
    exitBtn: document.getElementById('exit-btn'),
    progressTrack: document.getElementById('progress-track'),
    eyebrow: document.getElementById('quiz-eyebrow'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    feedbackBox: document.getElementById('feedback-box'),
    feedbackHead: document.getElementById('feedback-head'),
    feedbackText: document.getElementById('feedback-text'),
    continueBtn: document.getElementById('continue-btn'),
    summaryUnit: document.getElementById('summary-unit'),
    congratsBanner: document.getElementById('congrats-banner'),
    closeStrip: document.getElementById('close-strip'),
    sumCorrect: document.getElementById('sum-correct'),
    sumXp: document.getElementById('sum-xp'),
    sumStreak: document.getElementById('sum-streak'),
    backHomeBtn: document.getElementById('back-home-btn'),
    levelStat: document.getElementById('level-stat'),
    levelVal: document.getElementById('level-val'),
    streak: document.getElementById('streak-val'),
    score: document.getElementById('score-val')
  };

  function safeStub(){
    var stub = {};
    var noop = function(){};
    stub.addEventListener = noop;
    stub.removeEventListener = noop;
    stub.appendChild = noop;
    stub.remove = noop;
    stub.classList = { add:noop, remove:noop, toggle:noop, contains:function(){ return false; } };
    stub.style = {};
    stub.dataset = {};
    stub.querySelector = function(){ return null; };
    stub.querySelectorAll = function(){ return []; };
    stub.getBoundingClientRect = function(){ return { left:0, width:0 }; };
    var backing = { textContent:'', innerHTML:'', value:'', disabled:false, placeholder:'', className:'' };
    ['textContent','innerHTML','value','disabled','placeholder','className'].forEach(function(prop){
      Object.defineProperty(stub, prop, {
        get:function(){ return backing[prop]; },
        set:function(v){ backing[prop] = v; }
      });
    });
    return stub;
  }

  Object.keys(els).forEach(function(key){
    if(!els[key]) els[key] = safeStub();
  });

  var session = null;

  function starSVG(filled){
    return filled
      ? '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 14.9l-5.2 2.9 1-5.9L1.5 7.7l5.9-.8z"/></svg>'
      : '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 14.9l-5.2 2.9 1-5.9L1.5 7.7l5.9-.8z"/></svg>';
  }

  function checkSVG(){
    return '<svg width="22" height="22" viewBox="0 0 22 22" fill="none">'+
      '<path d="M4 11.5L9 16.5L18 6.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'+
      '</svg>';
  }

  function lockSVG(){
    return '<svg width="12" height="13" viewBox="0 0 20 22" fill="none">'+
      '<rect x="2" y="9" width="16" height="11" rx="2" stroke="currentColor" stroke-width="2"/>'+
      '<path d="M5 9V6a5 5 0 0110 0v3" stroke="currentColor" stroke-width="2" fill="none"/>'+
      '</svg>';
  }

  function trendSVG(size){
    size = size || 20;
    return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 20 20" fill="none">'+
      '<polyline points="2,15 7,8 11,12 18,3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>'+
      '<circle cx="18" cy="3" r="1.6" fill="currentColor"/>'+
      '</svg>';
  }

  function targetSVG(){
    return '<svg width="20" height="20" viewBox="0 0 20 20" fill="none">'+
      '<circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.6"/>'+
      '<circle cx="10" cy="10" r="4.5" stroke="currentColor" stroke-width="1.6"/>'+
      '<circle cx="10" cy="10" r="1.4" fill="currentColor"/>'+
      '</svg>';
  }

  function feedbackSVG(){
    return '<svg width="20" height="20" viewBox="0 0 20 20" fill="none">'+
      '<path d="M3 4h14a1 1 0 011 1v8a1 1 0 01-1 1H8l-4 3v-3H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linejoin="round"/>'+
      '</svg>';
  }

  if(els.navGoalsIcon) els.navGoalsIcon.innerHTML = targetSVG();
  if(els.navLearnIcon) els.navLearnIcon.innerHTML = trendSVG(20);
  if(els.navPlaydataIcon) els.navPlaydataIcon.innerHTML = trendSVG(20);
  if(els.navFeedbackIcon) els.navFeedbackIcon.innerHTML = feedbackSVG();

  function computeUserLevel(){
    var total = SECTIONS.length;
    var allBeginnerDone = true;
    var allIntermediateDone = true;
    for(var i=0;i<total;i++){
      var p = getProgress(i);
      if(!p.beginnerDone) allBeginnerDone = false;
      if(!p.intermediateDone) allIntermediateDone = false;
    }
    if(!allBeginnerDone) return 'beginner';
    if(!allIntermediateDone) return 'Intermediate';
    return 'Advanced';
  }

  function isAllBeginnerDone(){
    for(var i=0;i<SECTIONS.length;i++){
      if(!getProgress(i).beginnerDone) return false;
    }
    return true;
  }

  function updateTopbar(){
    els.streak.textContent = state.streak + 'd';
    els.score.textContent = state.score;
    var level = computeUserLevel();
    els.levelVal.textContent = level;
    els.levelStat.classList.remove('intermediate','advanced');
    if(level === 'Intermediate') els.levelStat.classList.add('intermediate');
    if(level === 'Advanced') els.levelStat.classList.add('advanced');
  }

  function computeRecommendation(){
    var pickedGoals = (state.goals || []).map(function(id){
      return GOALS.filter(function(g){ return g.id === id; })[0];
    }).filter(Boolean);

    var matchedSections = pickedGoals.filter(function(g){ return g.unit !== null; });
    var uniqueSections = [];
    matchedSections.forEach(function(g){ if(uniqueSections.indexOf(g.unit) === -1) uniqueSections.push(g.unit); });

    var recommendAll = uniqueSections.length >= (Math.floor(MAPPABLE_GOAL_COUNT/2) + 1);

    var recommendedIndex = null;
    if(!recommendAll){
      for(var i=0;i<uniqueSections.length;i++){
        if(!getProgress(uniqueSections[i]).beginnerDone){ recommendedIndex = uniqueSections[i]; break; }
      }
    }

    return { pickedGoals:pickedGoals, uniqueSections:uniqueSections, recommendAll:recommendAll, recommendedIndex:recommendedIndex };
  }

  function formatNumberList(nums){
    if(nums.length === 1) return t('home.sectionWord') + ' ' + nums[0];
    var last = nums[nums.length-1];
    var rest = nums.slice(0, -1);
    return t('home.sectionsWord') + ' ' + rest.join(', ') + ' ' + t('home.and') + ' ' + last;
  }

  function updateHomeIntro(){
    var picked = state.goals || [];
    var rec = computeRecommendation();

    if(picked.length === 0){
      els.homeSub.textContent = t('home.defaultSub');
      els.goalsNote.classList.add('hidden');
      return;
    }

    if(rec.recommendAll){
      els.homeSub.textContent = t('home.recommendAll');
    } else if(rec.uniqueSections.length){
      var nums = rec.uniqueSections.map(function(i){ return i+1; }).sort(function(a,b){ return a-b; });
      els.homeSub.textContent = t('home.recommendSome', {list: formatNumberList(nums)});
    } else {
      els.homeSub.textContent = t('home.defaultSub');
    }

    var unmapped = rec.pickedGoals.filter(function(g){ return g.unit === null && !g.playdata; });
    var playdataGoals = rec.pickedGoals.filter(function(g){ return g.playdata; });

    var notes = [];
    if(playdataGoals.length){
      notes.push(t('home.playdataNote'));
    }
    if(unmapped.length){
      notes.push("These aren't covered by these lessons yet: " + unmapped.map(function(g){ return goalLabel(g).toLowerCase(); }).join(', ') + '.');
    }

    if(notes.length){
      els.goalsNote.classList.remove('hidden');
      els.goalsNote.innerHTML = notes.map(function(n){ return '<p>'+n+'</p>'; }).join('');
    } else {
      els.goalsNote.classList.add('hidden');
    }
  }

  function renderGoals(){
    var selected = {};
    (state.goals || []).forEach(function(id){ selected[id] = true; });

    els.goalsList.innerHTML = '';
    GOALS.forEach(function(goal){
      var card = document.createElement('div');
      card.className = 'goal-card' + (selected[goal.id] ? ' selected' : '');
      card.innerHTML =
        '<span class="goal-check">'+(selected[goal.id] ? checkSVG() : '')+'</span>'+
        '<span>'+goalLabel(goal)+'</span>';
      card.addEventListener('click', function(){
        selected[goal.id] = !selected[goal.id];
        card.classList.toggle('selected', selected[goal.id]);
        card.querySelector('.goal-check').innerHTML = selected[goal.id] ? checkSVG() : '';
        var anySelected = Object.keys(selected).some(function(k){ return selected[k]; });
        els.goalsContinueBtn.disabled = !anySelected;
      });
      els.goalsList.appendChild(card);
    });

    els.goalsContinueBtn.disabled = !Object.keys(selected).some(function(k){ return selected[k]; });

    els.goalsContinueBtn.onclick = function(){
      state.goals = Object.keys(selected).filter(function(k){ return selected[k]; });
      state.onboarded = true;
      saveState();
      navigateTo('home');
    };
  }

  function renderHome(){
    els.units.innerHTML = '';
    var rec = computeRecommendation();

    SECTIONS.forEach(function(section, uIndex){
      var block = document.createElement('div');
      block.className = 'unit-block';

      var label = document.createElement('div');
      label.className = 'unit-label';
      label.innerHTML =
        '<span class="unit-number mono">'+t('home.sectionWord')+' '+(uIndex+1)+'</span>'+
        '<span><span class="unit-title">'+sectionTitle(uIndex)+'</span><br><span class="unit-sub">'+sectionSub(uIndex)+'</span></span>';
      block.appendChild(label);

      var prog = getProgress(uIndex);
      var isRecommended = !rec.recommendAll && rec.recommendedIndex === uIndex;

      var item = document.createElement('div');
      item.className = 'path-item';

      var node = document.createElement('div');
      node.className = 'node ' + (prog.beginnerDone ? 'done' : (isRecommended ? 'recommended' : ''));
      node.innerHTML = trendSVG(30);
      item.appendChild(node);

      if(isRecommended){
        var tag = document.createElement('div');
        tag.className = 'recommended-tag';
        tag.textContent = t('home.recommendedTag');
        item.appendChild(tag);
      }

      var status = document.createElement('div');
      status.className = 'node-status' + (prog.beginnerDone ? ' done' : '');
      status.textContent = prog.beginnerDone ? t('home.bestScore', {pct:prog.beginnerPct}) : t('home.notStarted');
      item.appendChild(status);

      if([1,3,4].indexOf(uIndex) !== -1){
        var seeAlso = document.createElement('div');
        seeAlso.className = 'see-also-note';
        seeAlso.textContent = t('home.seeAlsoPlaydata');
        item.appendChild(seeAlso);
      }

      var tierRow = document.createElement('div');
      tierRow.className = 'tier-row';

      var beginnerBtn = document.createElement('button');
      beginnerBtn.className = 'tier-btn' + (prog.beginnerDone ? ' done' : '');
      beginnerBtn.textContent = prog.beginnerDone ? 'Beginner \u2713' : 'Beginner';
      beginnerBtn.addEventListener('click', function(){ startLesson(uIndex, 'beginner'); });
      tierRow.appendChild(beginnerBtn);

      var intermediateBtn = document.createElement('button');
      var intLocked = !prog.beginnerDone;
      intermediateBtn.className = 'tier-btn' + (intLocked ? ' locked' : (prog.intermediateDone ? ' done' : ''));
      intermediateBtn.innerHTML = intLocked ? (lockSVG() + '<span>Intermediate</span>') : (prog.intermediateDone ? 'Intermediate \u2713' : 'Intermediate');
      if(intLocked){
        intermediateBtn.disabled = true;
      } else {
        intermediateBtn.addEventListener('click', function(){ startLesson(uIndex, 'intermediate'); });
      }
      tierRow.appendChild(intermediateBtn);

      var advancedBtn = document.createElement('button');
      var advLocked = !prog.intermediateDone;
      advancedBtn.className = 'tier-btn' + (advLocked ? ' locked' : (prog.advancedDone ? ' done' : ''));
      advancedBtn.innerHTML = advLocked ? (lockSVG() + '<span>Advanced</span>') : (prog.advancedDone ? 'Advanced \u2713' : 'Advanced');
      if(advLocked){
        advancedBtn.disabled = true;
      } else {
        advancedBtn.addEventListener('click', function(){ startLesson(uIndex, 'advanced'); });
      }
      tierRow.appendChild(advancedBtn);

      item.appendChild(tierRow);
      block.appendChild(item);
      els.units.appendChild(block);
    });
  }

  function yearSegments(data){
    var segs = [];
    var currentYear = null;
    data.forEach(function(d,i){
      var year = d.label.split(' ')[1];
      if(year !== currentYear){
        segs.push({year:year, first:i, last:i});
        currentYear = year;
      } else {
        segs[segs.length-1].last = i;
      }
    });
    return segs;
  }

  function buildChartSVG(data, lineColor, fillColor, heightOverride){
    var w = 460, h = heightOverride || 210, padL = 46, padR = 8, padT = 14, padB = 40;
    var values = data.map(function(d){ return d.value; });
    var min = Math.min.apply(null, values);
    var max = Math.max.apply(null, values);
    var plotW = w - padL - padR;
    var plotH = h - padT - padB;

    function px(i){ return padL + (i/(data.length-1)) * plotW; }
    function py(v){ return padT + plotH - ((v-min)/(max-min)) * plotH; }

    var linePoints = data.map(function(d,i){ return px(i)+','+py(d.value); }).join(' ');
    var areaPoints = linePoints + ' ' + px(data.length-1)+','+(padT+plotH) + ' ' + px(0)+','+(padT+plotH);

    var segs = yearSegments(data);
    var yearLabels = segs.map(function(seg){
      var mid = (seg.first + seg.last) / 2;
      var startVal = data[seg.first].value;
      var endVal = data[seg.last].value;
      var pct = ((endVal/startVal) - 1) * 100;
      var sign = pct >= 0 ? '+' : '';
      var color = pct >= 0 ? '#1F7A5C' : '#B5473B';
      var x = px(mid);
      return (
        '<text x="'+x+'" y="'+(h-20)+'" font-size="10" fill="#4B564E" font-family="IBM Plex Sans, sans-serif" text-anchor="middle">'+seg.year+'</text>' +
        '<text x="'+x+'" y="'+(h-6)+'" font-size="9.5" font-weight="600" fill="'+color+'" font-family="IBM Plex Mono, monospace" text-anchor="middle">'+sign+pct.toFixed(1)+'%</text>'
      );
    }).join('');

    return (
      '<svg viewBox="0 0 '+w+' '+h+'" width="100%" style="display:block;">' +
      '<line x1="'+padL+'" y1="'+(padT+plotH)+'" x2="'+(w-padR)+'" y2="'+(padT+plotH)+'" stroke="#C7CCC2" stroke-width="1"/>' +
      '<polygon points="'+areaPoints+'" fill="'+fillColor+'" opacity="0.7"/>' +
      '<polyline points="'+linePoints+'" fill="none" stroke="'+lineColor+'" stroke-width="2"/>' +
      '<text x="'+padL+'" y="'+(padT+7)+'" font-size="10" fill="#4B564E" font-family="IBM Plex Mono, monospace">'+Math.round(max).toLocaleString()+'</text>' +
      '<text x="'+padL+'" y="'+(padT+plotH-2)+'" font-size="10" fill="#4B564E" font-family="IBM Plex Mono, monospace">'+Math.round(min).toLocaleString()+'</text>' +
      yearLabels +
      '</svg>'
    );
  }

  function buildComparisonChartSVG(dataA, colorA, dataB, colorB, heightOverride){
    var w = 460, h = heightOverride || 210, padL = 46, padR = 8, padT = 14, padB = 40;
    var allValues = dataA.map(function(d){ return d.value; }).concat(dataB.map(function(d){ return d.value; }));
    var min = Math.min.apply(null, allValues);
    var max = Math.max.apply(null, allValues);
    var plotW = w - padL - padR;
    var plotH = h - padT - padB;

    function buildLine(data){
      return data.map(function(d,i){
        var px = padL + (i/(data.length-1)) * plotW;
        var py = padT + plotH - ((d.value-min)/((max-min) || 1)) * plotH;
        return px+','+py;
      }).join(' ');
    }

    var lineA = buildLine(dataA);
    var lineB = buildLine(dataB);

    return (
      '<svg viewBox="0 0 '+w+' '+h+'" width="100%" style="display:block;">' +
      '<line x1="'+padL+'" y1="'+(padT+plotH)+'" x2="'+(w-padR)+'" y2="'+(padT+plotH)+'" stroke="#C7CCC2" stroke-width="1"/>' +
      '<polyline points="'+lineB+'" fill="none" stroke="'+colorB+'" stroke-width="2" opacity="0.85"/>' +
      '<polyline points="'+lineA+'" fill="none" stroke="'+colorA+'" stroke-width="2.5"/>' +
      '<text x="'+padL+'" y="'+(padT+7)+'" font-size="10" fill="#4B564E" font-family="IBM Plex Mono, monospace">'+Math.round(max).toLocaleString()+'</text>' +
      '<text x="'+padL+'" y="'+(padT+plotH-2)+'" font-size="10" fill="#4B564E" font-family="IBM Plex Mono, monospace">'+Math.round(min).toLocaleString()+'</text>' +
      '<text x="'+padL+'" y="'+(h-4)+'" font-size="10" fill="#4B564E" font-family="IBM Plex Sans, sans-serif">'+dataA[0].label+'</text>' +
      '<text x="'+(w-padR)+'" y="'+(h-4)+'" font-size="10" fill="#4B564E" font-family="IBM Plex Sans, sans-serif" text-anchor="end">'+dataA[dataA.length-1].label+'</text>' +
      '</svg>'
    );
  }

  function attachChartInteraction(containerId, dataGetter, dotColor){
    var container = document.getElementById(containerId);
    if(!container) return;
    var svg = container.querySelector('svg');
    if(!svg) return;

    var w = 460, h = 210, padL = 46, padR = 8, padT = 14, padB = 40;
    var viewBoxAttr = svg.getAttribute && svg.getAttribute('viewBox');
    if(viewBoxAttr){
      var vbParts = viewBoxAttr.split(' ');
      if(vbParts.length === 4){
        w = parseFloat(vbParts[2]) || w;
        h = parseFloat(vbParts[3]) || h;
      }
    }
    var plotW = w - padL - padR;
    var plotH = h - padT - padB;

    var tooltip = container.querySelector('.chart-tooltip');
    if(!tooltip){
      tooltip = document.createElement('div');
      tooltip.className = 'chart-tooltip hidden';
      container.appendChild(tooltip);
    }

    var ns = 'http://www.w3.org/2000/svg';
    var guide = svg.querySelector('.hover-guide');
    if(!guide){
      guide = document.createElementNS(ns, 'line');
      guide.setAttribute('class', 'hover-guide');
      guide.setAttribute('y1', padT);
      guide.setAttribute('y2', padT + plotH);
      guide.setAttribute('stroke', '#9BA39A');
      guide.setAttribute('stroke-width', '1');
      guide.setAttribute('stroke-dasharray', '3,3');
      guide.style.display = 'none';
      svg.appendChild(guide);
    }
    var dot = svg.querySelector('.hover-dot');
    if(!dot){
      dot = document.createElementNS(ns, 'circle');
      dot.setAttribute('class', 'hover-dot');
      dot.setAttribute('r', 4.5);
      dot.setAttribute('fill', dotColor || '#16241F');
      dot.setAttribute('stroke', '#fff');
      dot.setAttribute('stroke-width', '1.5');
      dot.style.display = 'none';
      svg.appendChild(dot);
    }

    function handleMove(clientX){
      var data = dataGetter();
      if(!data || !data.length) return;
      var rect = svg.getBoundingClientRect();
      if(!rect.width) return;
      var scale = w / rect.width;
      var xInViewbox = (clientX - rect.left) * scale;
      var relX = xInViewbox - padL;
      var frac = relX / plotW;
      var idx = Math.round(frac * (data.length - 1));
      if(idx < 0) idx = 0;
      if(idx > data.length - 1) idx = data.length - 1;

      var d = data[idx];
      var values = data.map(function(dd){ return dd.value; });
      var min = Math.min.apply(null, values), max = Math.max.apply(null, values);
      var px = padL + (idx/(data.length-1)) * plotW;
      var py = padT + plotH - ((d.value-min)/(max-min || 1)) * plotH;

      guide.setAttribute('x1', px);
      guide.setAttribute('x2', px);
      guide.style.display = 'block';
      dot.setAttribute('cx', px);
      dot.setAttribute('cy', py);
      dot.style.display = 'block';

      tooltip.textContent = d.label + ': ' + Math.round(d.value).toLocaleString();
      tooltip.classList.remove('hidden');
      var pctLeft = (px / w) * 100;
      tooltip.style.left = Math.min(Math.max(pctLeft, 14), 86) + '%';
    }

    function handleLeave(){
      tooltip.classList.add('hidden');
      guide.style.display = 'none';
      dot.style.display = 'none';
    }

    if(!svg.dataset.hoverBound){
      svg.addEventListener('mousemove', function(e){ handleMove(e.clientX); });
      svg.addEventListener('mouseleave', handleLeave);
      svg.addEventListener('touchstart', function(e){ if(e.touches[0]) handleMove(e.touches[0].clientX); }, {passive:true});
      svg.addEventListener('touchmove', function(e){ if(e.touches[0]){ handleMove(e.touches[0].clientX); e.preventDefault(); } }, {passive:false});
      svg.addEventListener('touchend', handleLeave);
      svg.dataset.hoverBound = '1';
    }
  }

  function renderChartInto(containerId, data, lineColor, fillColor){
    var el = document.getElementById(containerId);
    if(!el || el.dataset.rendered) return;
    el.innerHTML = buildChartSVG(data, lineColor, fillColor);
    el.dataset.rendered = '1';
    attachChartInteraction(containerId, function(){ return data; }, lineColor);
  }

  var currentWhatifSlice = null;

  var CHART_COLORS = {
    light: {
      allworld: { color:'#3A6EA5', fill:'#DCE7F2' },
      spx:      { color:'#1F7A5C', fill:'#DCEBE3' },
      nasdaq100:{ color:'#7C3AED', fill:'#EDE4FB' },
      gold:     { color:'#B8862F', fill:'#F2E6CC' },
      silver:   { color:'#8A97A6', fill:'#E7EAED' },
      nflx:     { color:'#C7681F', fill:'#F5E3D3' },
      btc:      { color:'#B5473B', fill:'#F5DEDA' },
      eth:      { color:'#6366F1', fill:'#E3E3FB' },
      sol:      { color:'#0F9A8E', fill:'#DAF0EE' },
      aapl:     { color:'#6B7280', fill:'#E7E8EA' },
      msft:     { color:'#2563AA', fill:'#DCE6F2' },
      nvda:     { color:'#16A34A', fill:'#DDF2E4' },
      tsla:     { color:'#DC2626', fill:'#FBDEDE' },
      asml:     { color:'#0D9488', fill:'#DBEFED' },
      googl:    { color:'#F59E0B', fill:'#FDEFD2' },
      amzn:     { color:'#EA580C', fill:'#FCE3D4' },
      meta:     { color:'#4F46E5', fill:'#E1DFFA' },
      nke:      { color:'#DB2777', fill:'#FADCE9' }
    },
    dark: {
      allworld: { color:'#D4C5FA', fill:'#241C40' },
      spx:      { color:'#B9A0F5', fill:'#241C40' },
      nasdaq100:{ color:'#8B5CF6', fill:'#241C40' },
      gold:     { color:'#8B5CF6', fill:'#241C40' },
      silver:   { color:'#C4B5FD', fill:'#241C40' },
      nflx:     { color:'#6D3FD1', fill:'#241C40' },
      btc:      { color:'#4C2A9E', fill:'#241C40' },
      eth:      { color:'#D8B4FE', fill:'#241C40' },
      sol:      { color:'#A855F7', fill:'#241C40' },
      aapl:     { color:'#C9B8F0', fill:'#241C40' },
      msft:     { color:'#A78BFA', fill:'#241C40' },
      nvda:     { color:'#9B6FE0', fill:'#241C40' },
      tsla:     { color:'#7C4FD1', fill:'#241C40' },
      asml:     { color:'#9D7BEF', fill:'#241C40' },
      googl:    { color:'#B084F0', fill:'#241C40' },
      amzn:     { color:'#8563DB', fill:'#241C40' },
      meta:     { color:'#5C2FB8', fill:'#241C40' },
      nke:      { color:'#BE6FE0', fill:'#241C40' }
    }
  };

  function chartColor(key){
    var theme = (state && state.theme === 'dark') ? 'dark' : 'light';
    return CHART_COLORS[theme][key] || CHART_COLORS.light[key];
  }

  function switchPlaydataSubtab(subtab){
    var examplesEl = document.getElementById('playdata-examples');
    var scenarioEl = document.getElementById('playdata-scenario');
    var examplesBtn = document.getElementById('subtab-examples');
    var scenarioBtn = document.getElementById('subtab-scenario');
    if(!examplesEl || !scenarioEl) return;
    examplesEl.classList.toggle('hidden', subtab !== 'examples');
    scenarioEl.classList.toggle('hidden', subtab !== 'scenario');
    if(examplesBtn) examplesBtn.classList.toggle('active', subtab === 'examples');
    if(scenarioBtn) scenarioBtn.classList.toggle('active', subtab === 'scenario');
  }

  var subtabExamplesBtn = document.getElementById('subtab-examples');
  var subtabScenarioBtn = document.getElementById('subtab-scenario');
  if(subtabExamplesBtn) subtabExamplesBtn.addEventListener('click', function(){ switchPlaydataSubtab('examples'); });
  if(subtabScenarioBtn) subtabScenarioBtn.addEventListener('click', function(){ switchPlaydataSubtab('scenario'); });

  function renderSPXChart(){
    var c;
    c = chartColor('spx'); renderChartInto('spx-chart', SPX_DATA, c.color, c.fill);
    c = chartColor('allworld'); renderChartInto('allworld-chart', ALLWORLD_DATA, c.color, c.fill);
    c = chartColor('gold'); renderChartInto('gold-chart', GOLD_DATA, c.color, c.fill);
    c = chartColor('btc'); renderChartInto('btc-chart', BITCOIN_DATA, c.color, c.fill);
    c = chartColor('nflx'); renderChartInto('netflix-chart', NFLX_DATA, c.color, c.fill);
    populateMonthYearSelects();
    updateWhatIf();
  }

  var WHATIF_ASSETS = {
    allworld: { key:'allworld', data: ALLWORLD_DATA, label:'the All World ETF' },
    spx: { key:'spx', data: SPX_DATA, label:'the S&P 500' },
    nasdaq100: { key:'nasdaq100', data: NASDAQ100_DATA, label:'the Nasdaq-100' },
    gold: { key:'gold', data: GOLD_DATA, label:'gold' },
    silver: { key:'silver', data: SILVER_DATA, label:'silver' },
    btc: { key:'btc', data: BITCOIN_DATA, label:'Bitcoin' },
    eth: { key:'eth', data: ETH_DATA, label:'Ethereum' },
    sol: { key:'sol', data: SOL_DATA, label:'Solana' },
    nflx: { key:'nflx', data: NFLX_DATA, label:'Netflix' },
    aapl: { key:'aapl', data: AAPL_DATA, label:'Apple' },
    msft: { key:'msft', data: MSFT_DATA, label:'Microsoft' },
    nvda: { key:'nvda', data: NVDA_DATA, label:'Nvidia' },
    tsla: { key:'tsla', data: TSLA_DATA, label:'Tesla' },
    asml: { key:'asml', data: ASML_DATA, label:'ASML' },
    googl: { key:'googl', data: GOOGL_DATA, label:'Alphabet (Google)' },
    amzn: { key:'amzn', data: AMZN_DATA, label:'Amazon' },
    meta: { key:'meta', data: META_DATA, label:'Meta' },
    nke: { key:'nke', data: NKE_DATA, label:'Nike' }
  };

  function whatifAssetLabel(asset){
    if(state.lang === 'nl' && WHATIF_ASSET_LABELS_NL[asset.key]) return WHATIF_ASSET_LABELS_NL[asset.key];
    return asset.label;
  }

  function formatEuro(value){
    var rounded = Math.round(value);
    try{
      return rounded.toLocaleString(state.lang === 'nl' ? 'nl-NL' : 'en-US');
    }catch(e){
      return String(rounded);
    }
  }

  function computeReturn(assetData, buyIdx, sellIdx, strategy, amount){
    var slice = assetData.slice(buyIdx, sellIdx + 1);
    var totalInvested, finalValue;
    if(strategy === 'lump'){
      var shares = amount / slice[0].value;
      finalValue = shares * slice[slice.length-1].value;
      totalInvested = amount;
    } else {
      var totalShares = 0;
      slice.forEach(function(d){ totalShares += amount / d.value; });
      totalInvested = amount * slice.length;
      finalValue = totalShares * slice[slice.length-1].value;
    }
    var pct = ((finalValue/totalInvested) - 1) * 100;
    return { finalValue: finalValue, totalInvested: totalInvested, pct: pct, slice: slice };
  }

  function updateWhatIf(){
    var assetEl = document.getElementById('whatif-asset');
    var compareEl = document.getElementById('whatif-compare');
    var strategyEl = document.getElementById('whatif-strategy');
    var amountEl = document.getElementById('whatif-amount');
    var chartEl = document.getElementById('whatif-chart');
    var chartNoteEl = document.getElementById('whatif-chart-note');
    var resultEl = document.getElementById('whatif-result');
    var diversifiedEl = document.getElementById('whatif-diversified');
    var buyM = document.getElementById('trade-buy-month-select');
    var buyY = document.getElementById('trade-buy-year-select');
    var sellM = document.getElementById('trade-sell-month-select');
    var sellY = document.getElementById('trade-sell-year-select');
    if(!assetEl || !strategyEl || !chartEl || !resultEl || !buyM || !buyY || !sellM || !sellY || !amountEl) return;
    if(!buyM.value || !buyY.value || !sellM.value || !sellY.value) return;

    var asset = WHATIF_ASSETS[assetEl.value] || WHATIF_ASSETS.allworld;
    var assetC = chartColor(asset.key);
    var strategy = strategyEl.value;
    var assetLabel = whatifAssetLabel(asset);
    var amount = parseFloat(amountEl.value);
    if(!amount || amount <= 0) amount = 1000;

    var buyIdx = monthYearToIndex(parseInt(buyM.value,10), parseInt(buyY.value,10));
    var sellIdx = monthYearToIndex(parseInt(sellM.value,10), parseInt(sellY.value,10));

    if(sellIdx < buyIdx){
      resultEl.className = 'trade-result-highlight neg';
      resultEl.innerHTML = '<div class="trade-result-desc">' + t('playdata.tradeInvalidRange') + '</div>';
      if(diversifiedEl) diversifiedEl.innerHTML = '';
      if(chartNoteEl) chartNoteEl.classList.add('hidden');
      return;
    }

    var buyLabel = asset.data[buyIdx].label;
    var sellLabel = asset.data[sellIdx].label;

    var primary = computeReturn(asset.data, buyIdx, sellIdx, strategy, amount);
    currentWhatifSlice = primary.slice;

    var compareKey = compareEl ? compareEl.value : 'none';
    var compareAsset = (compareKey && compareKey !== 'none' && compareKey !== assetEl.value) ? (WHATIF_ASSETS[compareKey] || null) : null;
    var compareResult = compareAsset ? computeReturn(compareAsset.data, buyIdx, sellIdx, strategy, amount) : null;

    if(compareAsset && compareResult){
      var compareC = chartColor(compareAsset.key);
      var indexedA = primary.slice.map(function(d){ return { label: d.label, value: (d.value/primary.slice[0].value)*100 }; });
      var indexedB = compareResult.slice.map(function(d){ return { label: d.label, value: (d.value/compareResult.slice[0].value)*100 }; });
      chartEl.innerHTML = buildComparisonChartSVG(indexedA, assetC.color, indexedB, compareC.color, 340);
      attachChartInteraction('whatif-chart', function(){ return indexedA; }, assetC.color);
      if(chartNoteEl) chartNoteEl.classList.remove('hidden');
    } else {
      chartEl.innerHTML = buildChartSVG(primary.slice, assetC.color, assetC.fill, 340);
      attachChartInteraction('whatif-chart', function(){ return currentWhatifSlice; }, assetC.color);
      if(chartNoteEl) chartNoteEl.classList.add('hidden');
    }

    var templateKey = strategy === 'lump' ? 'playdata.resultLumpAmount' : 'playdata.resultDcaAmount';
    var resultText = t(templateKey, {
      amount: formatEuro(amount),
      asset: assetLabel, buyMonth: buyLabel, sellMonth: sellLabel,
      finalValue: formatEuro(primary.finalValue),
      dir: primary.pct >= 0 ? t('playdata.up') : t('playdata.down'),
      pct: Math.abs(primary.pct).toFixed(1)
    });

    var pctClass = primary.pct >= 0 ? '' : ' neg';
    var pctSign = primary.pct >= 0 ? '+' : '-';
    var html;

    if(compareResult){
      var comparePctSign = compareResult.pct >= 0 ? '+' : '-';
      html =
        '<div class="trade-result-split">' +
          '<div class="trade-result-col">' +
            '<div class="trade-result-col-label">' + assetLabel + '</div>' +
            '<div class="trade-result-pct' + (primary.pct < 0 ? ' neg' : '') + '">' + pctSign + Math.abs(primary.pct).toFixed(1) + '%</div>' +
          '</div>' +
          '<div class="trade-result-col">' +
            '<div class="trade-result-col-label">' + whatifAssetLabel(compareAsset) + '</div>' +
            '<div class="trade-result-pct' + (compareResult.pct < 0 ? ' neg' : '') + '">' + comparePctSign + Math.abs(compareResult.pct).toFixed(1) + '%</div>' +
          '</div>' +
        '</div>' +
        '<div class="trade-result-desc">' + resultText + '</div>';
      var compareLine = t('playdata.compareLine', {
        asset: whatifAssetLabel(compareAsset),
        finalValue: formatEuro(compareResult.finalValue),
        dir: compareResult.pct >= 0 ? t('playdata.up') : t('playdata.down'),
        pct: Math.abs(compareResult.pct).toFixed(1)
      });
      html += '<div class="whatif-compare-line">' + compareLine + '</div>';
    } else {
      html =
        '<div class="trade-result-pct">' + pctSign + Math.abs(primary.pct).toFixed(1) + '%</div>' +
        '<div class="trade-result-desc">' + resultText + '</div>';
    }

    resultEl.className = 'trade-result-highlight' + pctClass;
    resultEl.innerHTML = html;

    if(diversifiedEl){
      var keys = ['allworld','spx','gold','nflx','btc'];
      var splitAmount = amount / keys.length;
      var totalFinal = 0, totalInvested = 0;
      keys.forEach(function(k){
        var r = computeReturn(WHATIF_ASSETS[k].data, buyIdx, sellIdx, strategy, splitAmount);
        totalFinal += r.finalValue;
        totalInvested += r.totalInvested;
      });
      var diversifiedPct = ((totalFinal/totalInvested) - 1) * 100;
      var dSign = diversifiedPct >= 0 ? '+' : '-';
      diversifiedEl.innerHTML =
        '<div class="feedback-section-label">' + t('playdata.diversifiedTitle') + '</div>' +
        '<div class="whatif-diversified-value">\u20AC' + formatEuro(totalFinal) + ' (' + dSign + Math.abs(diversifiedPct).toFixed(1) + '%)</div>';
    }
  }

  var whatifStrategySelect = document.getElementById('whatif-strategy');
  if(whatifStrategySelect){
    whatifStrategySelect.addEventListener('change', function(){
      var labelEl = document.getElementById('whatif-amount-label');
      if(labelEl) labelEl.textContent = t(whatifStrategySelect.value === 'dca' ? 'playdata.amountDcaLabel' : 'playdata.amountLumpLabel');
    });
  }

  ['whatif-asset','whatif-compare','whatif-strategy','whatif-amount','trade-buy-month-select','trade-buy-year-select','trade-sell-month-select','trade-sell-year-select'].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.addEventListener('change', updateWhatIf);
  });

  function renderFeedbackTopics(){
    feedbackTopicsSelected = {};
    els.topicsList.innerHTML = '';
    GOALS.forEach(function(goal){
      var card = document.createElement('div');
      card.className = 'topic-card';
      card.innerHTML =
        '<span class="topic-tick"></span>'+
        '<span>'+goalLabel(goal)+'</span>';
      card.addEventListener('click', function(){
        feedbackTopicsSelected[goal.id] = !feedbackTopicsSelected[goal.id];
        card.classList.toggle('selected', feedbackTopicsSelected[goal.id]);
        card.querySelector('.topic-tick').innerHTML = feedbackTopicsSelected[goal.id] ? checkSVG() : '';
      });
      els.topicsList.appendChild(card);
    });
  }

  var feedbackTopicsSelected = {};
  var selectedStars = 0;

  function renderStars(){
    els.feedbackStarRow.innerHTML = '';
    for(var i=1; i<=5; i++){
      (function(n){
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'star-btn' + (n <= selectedStars ? ' filled' : '');
        btn.innerHTML = starSVG(n <= selectedStars);
        btn.addEventListener('click', function(){
          selectedStars = n;
          renderStars();
        });
        els.feedbackStarRow.appendChild(btn);
      })(i);
    }
  }

  function resetGeneralFeedbackForm(){
    els.generalFeedbackInput.value = '';
    els.generalFeedbackThanks.classList.add('hidden');
    selectedStars = 0;
    renderStars();
    renderFeedbackTopics();
    els.feedbackDisclaimer.textContent = FEEDBACK_ENDPOINT_URL
      ? t('feedback.disclaimerConfigured')
      : t('feedback.disclaimerLocal');
    loadFeedbackSummary();
  }

  function saveFeedback(entry){
    if(!state.feedback) state.feedback = [];
    state.feedback.push(entry);
    saveState();
    submitFeedbackRemote(entry);
  }

  function submitFeedbackRemote(entry){
    if(!FEEDBACK_ENDPOINT_URL) return;
    try{
      fetch(FEEDBACK_ENDPOINT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(entry)
      }).catch(function(){});
    }catch(e){}
  }

  var summaryCallbackCounter = 0;

  var DUMMY_FEEDBACK_SUMMARY = {
    topics: [
      { id:'what-is-stock', label:'Finance: what a stock actually is', value:15 },
      { id:'market-moves', label:'Markets: why prices move the way they do', value:22 },
      { id:'analyze-stocks', label:'Numbers: how to analyze a stock before buying', value:41 },
      { id:'investment-types', label:'Investment: which investment types exist', value:28 },
      { id:'build-portfolio', label:'Portfolio: how to diversify your investment', value:34 },
      { id:'getting-started', label:'Start: which platform to use and how', value:46 },
      { id:'playdata', label:'Play: how would my money have grown if I had invested it', value:52 }
    ],
    avgStars: 4.2,
    totalRatings: 37,
    isDummy: true
  };

  function loadFeedbackSummary(){
    if(!FEEDBACK_ENDPOINT_URL){
      renderFeedbackSummary(DUMMY_FEEDBACK_SUMMARY);
      return;
    }
    renderFeedbackSummary(DUMMY_FEEDBACK_SUMMARY);
    summaryCallbackCounter++;
    var cbName = 'stockguruFeedbackSummary_' + summaryCallbackCounter;
    var script = document.createElement('script');
    var cleaned = false;
    function cleanup(){
      if(cleaned) return;
      cleaned = true;
      delete window[cbName];
      if(script.parentNode) script.parentNode.removeChild(script);
    }
    window[cbName] = function(data){
      if(data && data.topics && data.topics.length){
        data.topics.forEach(function(t){ t.value = t.count; });
        renderFeedbackSummary(data);
      } else {
        renderFeedbackSummary(DUMMY_FEEDBACK_SUMMARY);
      }
      cleanup();
    };
    script.onerror = function(){ renderFeedbackSummary(DUMMY_FEEDBACK_SUMMARY); cleanup(); };
    script.src = FEEDBACK_ENDPOINT_URL + '?action=summary&callback=' + cbName;
    document.head.appendChild(script);
    setTimeout(function(){
      if(!cleaned){ renderFeedbackSummary(DUMMY_FEEDBACK_SUMMARY); cleanup(); }
    }, 6000);
  }

  function orderTopicsBySection(topics){
    var order = GOALS.map(function(g){ return g.id; });
    return topics.slice().sort(function(a, b){
      var ia = order.indexOf(a.id);
      var ib = order.indexOf(b.id);
      if(ia === -1) ia = order.length;
      if(ib === -1) ib = order.length;
      return ia - ib;
    });
  }

  function renderFeedbackSummary(data){
    if(!data || !data.topics || !data.topics.length){
      renderFeedbackSummary(DUMMY_FEEDBACK_SUMMARY);
      return;
    }
    var isDummy = !!data.isDummy;
    var orderedTopics = orderTopicsBySection(data.topics);
    var totalVal = orderedTopics.reduce(function(sum, t){ return sum + t.value; }, 0);
    var maxVal = Math.max.apply(null, orderedTopics.map(function(t){ return t.value; }));

    var pctMap = {};
    if(totalVal){
      var raw = orderedTopics.map(function(t){
        var exact = (t.value/totalVal)*100;
        return { id:t.id, floor:Math.floor(exact), remainder: exact - Math.floor(exact) };
      });
      var flooredSum = raw.reduce(function(s,r){ return s + r.floor; }, 0);
      var deficit = 100 - flooredSum;
      raw.sort(function(a,b){ return b.remainder - a.remainder; });
      for(var i=0; i<raw.length; i++){
        pctMap[raw[i].id] = raw[i].floor + (i < deficit ? 1 : 0);
      }
    }

    els.feedbackSummaryBars.innerHTML = orderedTopics.map(function(t){
      var widthPct = maxVal ? Math.round((t.value/maxVal)*100) : 0;
      var countLabel = (pctMap[t.id] || 0) + '%';
      var goal = GOALS.filter(function(g){ return g.id === t.id; })[0];
      var label = goal ? goalLabel(goal) : t.label;
      return (
        '<div class="summary-bar-row">' +
        '<div class="summary-bar-label">'+label+'</div>' +
        '<div class="summary-bar-track"><div class="summary-bar-fill" style="width:'+widthPct+'%"></div></div>' +
        '<div class="summary-bar-count">'+countLabel+'</div>' +
        '</div>'
      );
    }).join('');

    if(data.avgStars && data.totalRatings){
      els.feedbackSummaryStars.innerHTML = t('feedback.avgRating', {
        avg: data.avgStars.toFixed(1),
        n: data.totalRatings,
        plural: data.totalRatings===1 ? '' : (state.lang==='nl' ? 'en' : 's')
      });
      els.feedbackSummaryStars.classList.remove('hidden');
    } else {
      els.feedbackSummaryStars.classList.add('hidden');
    }

    els.feedbackSummaryDummyNote.classList.toggle('hidden', !isDummy);
    els.feedbackSummaryCard.classList.remove('hidden');
  }

  var SCREENS = ['welcomeScreen','experienceScreen','goalsScreen','home','quiz','summary','playdataScreen','feedbackScreen'];

  function renderWelcomeScreen(){
    els.welcomeIntroBtn.classList.remove('hidden');
    els.welcomeIntroBtn.textContent = t('welcome.introduction');
    els.welcomeIntroBtn.onclick = function(){ navigateTo('experience'); };
    if(state.onboarded){
      els.welcomeContinueBtn.textContent = t('welcome.proceed');
      els.welcomeContinueBtn.onclick = function(){ navigateTo('home'); };
    } else {
      els.welcomeContinueBtn.textContent = t('welcome.getStarted');
      els.welcomeContinueBtn.onclick = function(){ navigateTo('experience'); };
    }
  }

  function renderExperienceScreen(){
    chosenExperience = state.priorExperience;
    Array.prototype.forEach.call(document.querySelectorAll('.experience-btn'), function(b){
      b.classList.toggle('selected', b.dataset.value === chosenExperience);
    });
    els.experienceContinueBtn.disabled = false;
    els.experienceContinueBtn.textContent = t('experience.continue');
  }

  var currentScreenTarget = null;

  function navigateTo(target){
    currentScreenTarget = target;
    if(target !== 'summary') stopSpeaking();
    SCREENS.forEach(function(key){ els[key].classList.add('hidden'); });

    if(target === 'welcome'){
      els.welcomeScreen.classList.remove('hidden');
      renderWelcomeScreen();
    } else if(target === 'experience'){
      els.experienceScreen.classList.remove('hidden');
      renderExperienceScreen();
    } else if(target === 'goals'){
      els.goalsScreen.classList.remove('hidden');
      renderGoals();
    } else if(target === 'home'){
      els.home.classList.remove('hidden');
      updateHomeIntro();
      renderHome();
    } else if(target === 'quiz'){
      els.quiz.classList.remove('hidden');
    } else if(target === 'summary'){
      els.summary.classList.remove('hidden');
    } else if(target === 'playdata'){
      els.playdataScreen.classList.remove('hidden');
      renderSPXChart();
      switchPlaydataSubtab('examples');
    } else if(target === 'feedback'){
      els.feedbackScreen.classList.remove('hidden');
      resetGeneralFeedbackForm();
    }

    var navTarget = (target === 'quiz' || target === 'summary') ? 'home' : target;
    [els.navGoals, els.navLearn, els.navPlaydata, els.navFeedback].forEach(function(btn){
      btn.classList.toggle('active', btn.dataset.target === navTarget);
    });

    els.bottomNav.classList.toggle('hidden', target === 'welcome' || target === 'experience');

    window.scrollTo(0, 0);
  }

  function switchLanguage(lang){
    if(state.lang === lang) return;
    state.lang = lang;
    saveState();
    applyTranslations();
    [document.getElementById('lang-en'), document.getElementById('lang-nl')].forEach(function(btn){
      if(btn) btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    if(currentScreenTarget) navigateTo(currentScreenTarget);
  }

  function applyThemeClass(){
    document.body.classList.toggle('theme-dark', state.theme === 'dark');
  }

  function resetAllCharts(){
    ['spx-chart','allworld-chart','gold-chart','btc-chart','netflix-chart'].forEach(function(id){
      var el = document.getElementById(id);
      if(el) delete el.dataset.rendered;
    });
  }

  function switchTheme(theme){
    if(state.theme === theme) return;
    state.theme = theme;
    saveState();
    applyThemeClass();
    [document.getElementById('theme-light'), document.getElementById('theme-dark')].forEach(function(btn){
      if(btn) btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    resetAllCharts();
    if(currentScreenTarget === 'playdata') renderSPXChart();
  }

  [document.getElementById('theme-light'), document.getElementById('theme-dark')].forEach(function(btn){
    if(btn) btn.addEventListener('click', function(){ switchTheme(btn.dataset.theme); });
  });

  [document.getElementById('lang-en'), document.getElementById('lang-nl')].forEach(function(btn){
    if(btn) btn.addEventListener('click', function(){ switchLanguage(btn.dataset.lang); });
  });

  els.brandBtn.addEventListener('click', function(){
    navigateTo('welcome');
  });

  var chosenExperience = null;
  Array.prototype.forEach.call(document.querySelectorAll('.experience-btn'), function(btn){
    btn.addEventListener('click', function(){
      chosenExperience = btn.dataset.value;
      Array.prototype.forEach.call(document.querySelectorAll('.experience-btn'), function(b){
        b.classList.toggle('selected', b === btn);
      });
      els.experienceContinueBtn.disabled = false;
    });
  });

  els.experienceContinueBtn.addEventListener('click', function(){
    state.priorExperience = chosenExperience;
    saveState();
    navigateTo('goals');
  });

  els.generalFeedbackSubmit.addEventListener('click', function(){
    var text = els.generalFeedbackInput.value.trim();
    var topics = Object.keys(feedbackTopicsSelected).filter(function(k){ return feedbackTopicsSelected[k]; });
    if(!text && topics.length === 0 && selectedStars === 0) return;
    saveFeedback({ type:'general', topics:topics, text:text, stars: selectedStars || null, date:todayStr() });
    els.generalFeedbackThanks.classList.remove('hidden');
    els.generalFeedbackInput.value = '';
    selectedStars = 0;
    renderStars();
    renderFeedbackTopics();
  });

  els.lessonFeedbackSubmit.addEventListener('click', function(){
    var text = els.lessonFeedbackInput.value.trim();
    if(!text) return;
    saveFeedback({ type:'lesson', unit: els.lessonFeedbackBlock.dataset.unitIndex, text:text, date:todayStr() });
    els.lessonFeedbackThanks.classList.remove('hidden');
    els.lessonFeedbackInput.value = '';
  });

  [els.navGoals, els.navLearn, els.navPlaydata, els.navFeedback].forEach(function(btn){
    btn.addEventListener('click', function(){
      navigateTo(btn.dataset.target);
    });
  });

  function startLesson(unitIndex, level){
    var section = SECTIONS[unitIndex];
    var sourceSection = (state.lang === 'nl' && SECTIONS_NL[unitIndex]) ? SECTIONS_NL[unitIndex] : section;
    var questionSet = level === 'intermediate' ? sourceSection.intermediate : (level === 'advanced' ? sourceSection.advanced : sourceSection.questions);
    session = {
      unitIndex: unitIndex,
      level: level,
      qIndex: 0,
      answers: [],
      answered: false,
      questionSet: questionSet
    };
    navigateTo('quiz');
    buildProgressTrack(questionSet.length);
    renderQuestion();
  }

  function buildProgressTrack(count){
    els.progressTrack.innerHTML = '';
    for(var i=0;i<count;i++){
      var seg = document.createElement('div');
      seg.className = 'progress-seg';
      seg.dataset.index = i;
      els.progressTrack.appendChild(seg);
    }
  }

  function renderQuestion(){
    var section = SECTIONS[session.unitIndex];
    var q = session.questionSet[session.qIndex];
    session.answered = false;

    var introBox = document.getElementById('quiz-intro-box');
    var introBlock = document.getElementById('quiz-intro-block');
    var introToggle = document.getElementById('quiz-intro-toggle');
    if(introBox){
      if(session.qIndex === 0){
        introBox.classList.remove('hidden');
        if(introBlock) introBlock.classList.add('hidden');
        if(introToggle) introToggle.textContent = t('quiz.showSummary');
        var introTextEl = document.getElementById('quiz-intro-text');
        if(introTextEl){
          var introSource = (state.lang === 'nl' && SECTIONS_NL[session.unitIndex] && SECTIONS_NL[session.unitIndex].learnMore) ? SECTIONS_NL[session.unitIndex] : section;
          introTextEl.textContent = introSource.learnMore || '';
        }
      } else {
        introBox.classList.add('hidden');
      }
    }

    els.eyebrow.textContent = t('quiz.eyebrow', {
      section: sectionTitle(session.unitIndex).toLowerCase(),
      level: session.level,
      n: session.qIndex+1,
      total: session.questionSet.length
    });
    els.questionText.textContent = q.q;
    els.optionsContainer.innerHTML = '';
    els.feedbackBox.className = 'feedback';
    els.continueBtn.textContent = t('quiz.check');
    els.continueBtn.disabled = true;
    els.continueBtn.classList.remove('go');

    q.options.forEach(function(opt, i){
      var btn = document.createElement('button');
      btn.className = 'option';
      btn.textContent = opt;
      btn.addEventListener('click', function(){
        if(session.answered) return;
        Array.prototype.forEach.call(els.optionsContainer.children, function(c){ c.style.borderColor = ''; });
        btn.style.borderColor = 'var(--ink)';
        els.continueBtn.disabled = false;
        els.optionsContainer.dataset.selected = i;
      });
      els.optionsContainer.appendChild(btn);
    });

    els.continueBtn.onclick = function(){
      if(!session.answered){
        var sel = parseInt(els.optionsContainer.dataset.selected, 10);
        if(isNaN(sel)) return;
        checkAnswer(sel, q);
      } else {
        advance();
      }
    };
  }

  function checkAnswer(selected, q){
    session.answered = true;
    var isCorrect = selected === q.correct;
    session.answers.push(isCorrect);

    if(isCorrect){
      state.score += 10;
      saveState();
      updateTopbar();
    }

    Array.prototype.forEach.call(els.optionsContainer.children, function(c, i){
      c.classList.add('disabled');
      if(i === q.correct) c.classList.add('correct');
      else if(i === selected) c.classList.add('incorrect');
    });

    var seg = els.progressTrack.children[session.qIndex];
    seg.classList.add(isCorrect ? 'fill' : 'wrong');

    els.feedbackBox.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    els.feedbackHead.textContent = isCorrect ? t('quiz.correct') : t('quiz.notQuite');
    els.feedbackText.textContent = q.explain;

    els.continueBtn.textContent = (session.qIndex < session.questionSet.length - 1) ? t('quiz.continue') : t('quiz.seeResults');
    els.continueBtn.classList.add('go');
    els.continueBtn.disabled = false;
  }

  function advance(){
    if(session.qIndex < session.questionSet.length - 1){
      session.qIndex++;
      renderQuestion();
    } else {
      finishLesson();
    }
  }

  function finishLesson(){
    var correctCount = session.answers.filter(Boolean).length;
    var total = session.answers.length;
    var earnedScore = correctCount * 10;
    var pct = Math.round((correctCount/total)*100);

    var today = todayStr();
    if(state.lastActiveDay === null){
      state.streak = 1;
    } else {
      var diff = daysBetween(state.lastActiveDay, today);
      if(diff === 0){
        // already active today
      } else if(diff === 1){
        state.streak += 1;
      } else {
        state.streak = 1;
      }
    }
    state.lastActiveDay = today;

    var wasAllBeginnerDoneBefore = isAllBeginnerDone();

    var prog = getProgress(session.unitIndex);
    if(session.level === 'beginner'){
      prog.beginnerDone = true;
      prog.beginnerPct = Math.max(prog.beginnerPct, pct);
    } else if(session.level === 'intermediate'){
      prog.intermediateDone = true;
      prog.intermediatePct = Math.max(prog.intermediatePct, pct);
    } else if(session.level === 'advanced'){
      prog.advancedDone = true;
      prog.advancedPct = Math.max(prog.advancedPct, pct);
    }

    var isAllBeginnerDoneNow = isAllBeginnerDone();
    var justCompletedAllBeginner = isAllBeginnerDoneNow && !wasAllBeginnerDoneBefore;

    saveState();
    updateTopbar();

    var section = SECTIONS[session.unitIndex];
    els.summaryUnit.textContent = sectionTitle(session.unitIndex).toLowerCase() + ' \u00B7 ' + session.level;
    els.closeStrip.innerHTML = '';
    session.answers.forEach(function(ok){
      var bar = document.createElement('div');
      bar.className = 'close-bar ' + (ok ? 'win' : 'loss');
      bar.style.height = (ok ? (34 + Math.random()*24) : (18 + Math.random()*16)) + 'px';
      els.closeStrip.appendChild(bar);
    });
    els.sumCorrect.textContent = correctCount + '/' + total;
    els.sumXp.textContent = '+' + earnedScore;
    els.sumStreak.textContent = state.streak + 'd';

    var isGettingStarted = session.unitIndex === 5 && session.level === 'beginner';
    if(justCompletedAllBeginner){
      els.congratsBanner.textContent = t('summary.congratsAll');
      els.congratsBanner.classList.add('show');
    } else if(isGettingStarted){
      els.congratsBanner.textContent = t('summary.congratsSection');
      els.congratsBanner.classList.add('show');
    } else {
      els.congratsBanner.classList.remove('show');
    }

    els.lessonFeedbackBlock.dataset.unitIndex = session.unitIndex;
    els.lessonFeedbackInput.value = '';
    els.lessonFeedbackThanks.classList.add('hidden');
    var unitLabel = sectionTitle(session.unitIndex).toLowerCase();
    document.getElementById('lesson-feedback-label').textContent = t('summary.feedbackPrompt', {section: unitLabel});

    stopSpeaking();
    var learnMoreSource = (state.lang === 'nl' && SECTIONS_NL[session.unitIndex] && SECTIONS_NL[session.unitIndex].learnMore) ? SECTIONS_NL[session.unitIndex] : section;
    els.learnMoreText.textContent = learnMoreSource.learnMore || '';
    els.learnMoreText.classList.add('hidden');
    els.learnMoreBtn.textContent = t('summary.learnMoreBtn');
    els.speakBtn.textContent = t('summary.listenBtn');

    navigateTo('summary');
  }

  function pickFriendlyVoice(){
    if(!('speechSynthesis' in window)) return null;
    var voices = window.speechSynthesis.getVoices();
    if(!voices || !voices.length) return null;
    var langPrefix = state.lang === 'nl' ? 'nl' : 'en';
    var friendly = voices.find(function(v){
      return new RegExp('^'+langPrefix, 'i').test(v.lang) && /samantha|victoria|female|aria|zira|jenny|xander|fenna/i.test(v.name);
    });
    return friendly
      || voices.find(function(v){ return new RegExp('^'+langPrefix, 'i').test(v.lang); })
      || (state.lang === 'nl' ? voices.find(function(v){ return /en/i.test(v.lang); }) : null)
      || voices[0];
  }

  function stopSpeaking(){
    if('speechSynthesis' in window){
      window.speechSynthesis.cancel();
    }
  }

  if(!('speechSynthesis' in window)){
    els.speakBtn.classList.add('hidden');
  }

  els.learnMoreBtn.addEventListener('click', function(){
    var isHidden = els.learnMoreText.classList.contains('hidden');
    els.learnMoreText.classList.toggle('hidden', !isHidden);
    els.learnMoreBtn.textContent = isHidden ? t('summary.hideBtn') : t('summary.learnMoreBtn');
  });

  function speakToggle(button, getText){
    if(!('speechSynthesis' in window)) return;
    if(window.speechSynthesis.speaking){
      stopSpeaking();
      button.textContent = t('summary.listenBtn');
      return;
    }
    var text = getText();
    if(!text) return;
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = state.lang === 'nl' ? 'nl-NL' : 'en-US';
    utterance.pitch = 1.15;
    utterance.rate = 1.03;
    var voice = pickFriendlyVoice();
    if(voice) utterance.voice = voice;
    utterance.onend = function(){ button.textContent = t('summary.listenBtn'); };
    utterance.onerror = function(){ button.textContent = t('summary.listenBtn'); };
    window.speechSynthesis.speak(utterance);
    button.textContent = t('summary.stopBtn');
  }

  els.speakBtn.addEventListener('click', function(){
    speakToggle(els.speakBtn, function(){ return els.learnMoreText.textContent; });
  });

  var MONTH_NAMES = {
    en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
    nl: ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december']
  };

  function populateMonthYearSelects(){
    var names = MONTH_NAMES[state.lang] || MONTH_NAMES.en;
    var monthSelects = [
      { el: document.getElementById('trade-buy-month-select'), defaultVal: 8 },
      { el: document.getElementById('trade-sell-month-select'), defaultVal: 7 }
    ];
    monthSelects.forEach(function(cfg){
      if(!cfg.el) return;
      var prevVal = cfg.el.value || String(cfg.defaultVal);
      cfg.el.innerHTML = names.map(function(name, i){
        return '<option value="'+(i+1)+'">'+name+'</option>';
      }).join('');
      cfg.el.value = prevVal;
    });

    var yearSelects = [
      { el: document.getElementById('trade-buy-year-select'), defaultVal: 2021 },
      { el: document.getElementById('trade-sell-year-select'), defaultVal: 2026 }
    ];
    yearSelects.forEach(function(cfg){
      if(!cfg.el || cfg.el.options.length) return;
      var years = [2021,2022,2023,2024,2025,2026];
      cfg.el.innerHTML = years.map(function(y){ return '<option value="'+y+'">'+y+'</option>'; }).join('');
      cfg.el.value = cfg.defaultVal;
    });
  }

  function monthYearToIndex(month, year){
    var idx = (year - 2021) * 12 + (month - 8);
    if(idx < 0) idx = 0;
    if(idx > 59) idx = 59;
    return idx;
  }

  var scenarioInfoToggle = document.getElementById('scenario-info-toggle');
  if(scenarioInfoToggle){
    scenarioInfoToggle.addEventListener('click', function(){
      var block = document.getElementById('scenario-info-block');
      if(!block) return;
      var isHidden = block.classList.contains('hidden');
      block.classList.toggle('hidden', !isHidden);
      scenarioInfoToggle.textContent = isHidden ? t('playdata.hideExplanation') : t('playdata.showExplanation');
    });
  }

  var quizIntroToggle = document.getElementById('quiz-intro-toggle');
  if(quizIntroToggle){
    quizIntroToggle.addEventListener('click', function(){
      var block = document.getElementById('quiz-intro-block');
      if(!block) return;
      var isHidden = block.classList.contains('hidden');
      block.classList.toggle('hidden', !isHidden);
      quizIntroToggle.textContent = isHidden ? t('quiz.hideSummary') : t('quiz.showSummary');
    });
  }

  var quizIntroSpeakBtn = document.getElementById('quiz-intro-speak-btn');
  if(quizIntroSpeakBtn){
    quizIntroSpeakBtn.addEventListener('click', function(){
      speakToggle(quizIntroSpeakBtn, function(){
        var el = document.getElementById('quiz-intro-text');
        return el ? el.textContent : '';
      });
    });
  }


  els.exitBtn.addEventListener('click', function(){
    stopSpeaking();
    navigateTo('home');
  });

  els.backHomeBtn.addEventListener('click', function(){
    stopSpeaking();
    navigateTo('home');
  });

  try{
    state = loadState();
    applyTranslations();
    var initialLangBtn = document.getElementById('lang-' + state.lang);
    if(initialLangBtn){
      [document.getElementById('lang-en'), document.getElementById('lang-nl')].forEach(function(btn){
        if(btn) btn.classList.toggle('active', btn === initialLangBtn);
      });
    }
    applyThemeClass();
    var initialThemeBtn = document.getElementById('theme-' + state.theme);
    if(initialThemeBtn){
      [document.getElementById('theme-light'), document.getElementById('theme-dark')].forEach(function(btn){
        if(btn) btn.classList.toggle('active', btn === initialThemeBtn);
      });
    }
    updateTopbar();
  }catch(e){
    if(!state) state = defaultState();
  }

  try{
    navigateTo('welcome');
  }catch(e){}

})();
