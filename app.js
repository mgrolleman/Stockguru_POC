(function(){

  var SECTIONS = [
    {
      title:"Money basics",
      sub:"What you actually own",
      questions:[
        {
          q:"When you buy a share of stock, what are you actually buying?",
          options:["A loan to the company","A small ownership stake in the company","A guaranteed dividend payment","A seat on the board"],
          correct:1,
          explain:"A share represents partial ownership of a company. As an owner, you're entitled to a slice of its profits and assets — though never a guaranteed one."
        },
        {
          q:"What's the main difference between a stock and a bond?",
          options:["Stocks are ownership, bonds are debt","Stocks are debt, bonds are ownership","They're the same thing","Bonds can only be bought by banks"],
          correct:0,
          explain:"Buying a stock makes you a part-owner. Buying a bond makes you a lender — the borrower owes you your money back, plus interest."
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
      advanced:[
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
        },
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
      advanced:[
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
        }
      ]
    },
    {
      title:"Building a portfolio",
      sub:"Risk, mix, discipline",
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
      advanced:[
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
        },
        {
          q:"What does \u201Ccorrelation\u201D between two assets describe?",
          options:["Which one has a higher price","How closely their price movements track each other","Which one pays a bigger dividend","Their combined market cap"],
          correct:1,
          explain:"Low or negative correlation is what makes diversification actually reduce risk — assets that don't move in lockstep smooth out the ride."
        }
      ]
    },
    {
      title:"Reading the numbers",
      sub:"The vocabulary of a quote",
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
      advanced:[
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
        },
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
      advanced:[
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
          q:"An ETF that tracks gold prices without holding physical metal is exposed to which extra risk versus owning gold directly?",
          options:["None, they're identical","Counterparty or fund-structure risk from how the ETF is built","It pays a mandatory dividend","It can't be traded on exchanges"],
          correct:1,
          explain:"Depending on structure, a gold ETF may rely on derivatives or unallocated holdings rather than physical bars — worth understanding upfront."
        }
      ]
    },
    {
      title:"Getting started",
      sub:"Platforms & tools",
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
      advanced:[
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
        },
        {
          q:"Why might an investor use more than one platform or tool — say, a broker plus TradingView?",
          options:["It's required by law","Charting/research tools and execution platforms often specialize — one for analysis, another for placing trades","To pay double the fees on purpose","Because no platform allows both buying and viewing charts"],
          correct:1,
          explain:"Many investors research and chart on one tool and execute trades on their broker or exchange of choice — the two jobs don't have to be in the same place."
        }
      ]
    }
  ];

  var GOALS = [
    { id:'what-is-stock', label:'What a stock actually is', unit:0 },
    { id:'market-moves', label:'Why prices move the way they do', unit:1 },
    { id:'build-portfolio', label:'How to build a diversified portfolio', unit:2 },
    { id:'analyze-stocks', label:'How to analyze a stock before buying', unit:3 },
    { id:'investment-types', label:'Which investment types exist?', unit:4 },
    { id:'getting-started', label:'How do I get started, and which platform should I use?', unit:5 },
    { id:'risk-levels', label:'What are low risk vs high risk investments, as a beginner or a professional?', unit:null, playdata:true },
    { id:'taxes', label:'How taxes work on investment gains', unit:null }
  ];

  var MAPPABLE_GOAL_COUNT = GOALS.filter(function(g){ return g.unit !== null; }).length;

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
      progress:{}
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
    if(!state.progress[i]) state.progress[i] = { beginnerDone:false, beginnerPct:0, advancedDone:false, advancedPct:0 };
    return state.progress[i];
  }

  var els = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    summary: document.getElementById('summary-screen'),
    welcomeScreen: document.getElementById('welcome-screen'),
    welcomeContinueBtn: document.getElementById('welcome-continue-btn'),
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
    generalFeedbackInput: document.getElementById('general-feedback-input'),
    generalFeedbackSubmit: document.getElementById('general-feedback-submit'),
    generalFeedbackThanks: document.getElementById('general-feedback-thanks'),
    lessonFeedbackBlock: document.getElementById('lesson-feedback'),
    lessonFeedbackInput: document.getElementById('lesson-feedback-input'),
    lessonFeedbackSubmit: document.getElementById('lesson-feedback-submit'),
    lessonFeedbackThanks: document.getElementById('lesson-feedback-thanks'),
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

  var session = null;

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

  els.navGoalsIcon.innerHTML = targetSVG();
  els.navLearnIcon.innerHTML = trendSVG(20);
  els.navPlaydataIcon.innerHTML = trendSVG(20);
  els.navFeedbackIcon.innerHTML = feedbackSVG();

  function isAdvancedLevel(){
    var total = SECTIONS.length;
    var doneCount = 0;
    for(var i=0;i<total;i++){
      if(getProgress(i).beginnerDone) doneCount++;
    }
    return doneCount === total;
  }

  function updateTopbar(){
    els.streak.textContent = state.streak + 'd';
    els.score.textContent = state.score;
    var advanced = isAdvancedLevel();
    els.levelVal.textContent = advanced ? 'Advanced' : 'Beginner';
    els.levelStat.classList.toggle('advanced', advanced);
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

  function updateHomeIntro(){
    var picked = state.goals || [];
    var rec = computeRecommendation();

    if(picked.length === 0){
      els.homeSub.textContent = 'Five-minute lessons on the fundamentals — work through each section at your own pace.';
      els.goalsNote.classList.add('hidden');
      return;
    }

    if(rec.recommendAll){
      els.homeSub.textContent = "You've picked a lot of goals — we'd recommend working through all the sections below.";
    } else if(rec.recommendedIndex !== null){
      els.homeSub.textContent = 'Based on what you picked, start with ' + SECTIONS[rec.recommendedIndex].title.toLowerCase() + ' below.';
    } else {
      els.homeSub.textContent = 'Five-minute lessons on the fundamentals — work through each section at your own pace.';
    }

    var unmapped = rec.pickedGoals.filter(function(g){ return g.unit === null && !g.playdata; });
    var playdataGoals = rec.pickedGoals.filter(function(g){ return g.playdata; });

    var notes = [];
    if(playdataGoals.length){
      notes.push("Curious about risk vs. return? Check the Play with data tab — it's under construction but on its way.");
    }
    if(unmapped.length){
      notes.push("These aren't covered by these lessons yet: " + unmapped.map(function(g){ return g.label.toLowerCase(); }).join(', ') + '.');
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
        '<span>'+goal.label+'</span>';
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
        '<span class="unit-number mono">section '+(uIndex+1)+'</span>'+
        '<span><span class="unit-title">'+section.title+'</span><br><span class="unit-sub">'+section.sub+'</span></span>';
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
        tag.textContent = 'Recommended for you';
        item.appendChild(tag);
      }

      var status = document.createElement('div');
      status.className = 'node-status' + (prog.beginnerDone ? ' done' : '');
      status.textContent = prog.beginnerDone ? (prog.beginnerPct + '% best score') : 'Not started yet';
      item.appendChild(status);

      var tierRow = document.createElement('div');
      tierRow.className = 'tier-row';

      var beginnerBtn = document.createElement('button');
      beginnerBtn.className = 'tier-btn' + (prog.beginnerDone ? ' done' : '');
      beginnerBtn.textContent = prog.beginnerDone ? 'Beginner \u2713' : 'Beginner';
      beginnerBtn.addEventListener('click', function(){ startLesson(uIndex, 'beginner'); });
      tierRow.appendChild(beginnerBtn);

      var advancedBtn = document.createElement('button');
      var advLocked = !prog.beginnerDone;
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

  function renderFeedbackTopics(){
    feedbackTopicsSelected = {};
    els.topicsList.innerHTML = '';
    GOALS.forEach(function(goal){
      var card = document.createElement('div');
      card.className = 'topic-card';
      card.innerHTML =
        '<span class="topic-tick"></span>'+
        '<span>'+goal.label+'</span>';
      card.addEventListener('click', function(){
        feedbackTopicsSelected[goal.id] = !feedbackTopicsSelected[goal.id];
        card.classList.toggle('selected', feedbackTopicsSelected[goal.id]);
        card.querySelector('.topic-tick').innerHTML = feedbackTopicsSelected[goal.id] ? checkSVG() : '';
      });
      els.topicsList.appendChild(card);
    });
  }

  var feedbackTopicsSelected = {};

  function resetGeneralFeedbackForm(){
    els.generalFeedbackInput.value = '';
    els.generalFeedbackThanks.classList.add('hidden');
    renderFeedbackTopics();
  }

  function saveFeedback(entry){
    if(!state.feedback) state.feedback = [];
    state.feedback.push(entry);
    saveState();
  }

  var SCREENS = ['welcomeScreen','experienceScreen','goalsScreen','home','quiz','summary','playdataScreen','feedbackScreen'];

  function renderWelcomeScreen(){
    if(state.onboarded){
      els.welcomeContinueBtn.textContent = 'Back to app';
      els.welcomeContinueBtn.onclick = function(){ navigateTo('home'); };
    } else {
      els.welcomeContinueBtn.textContent = 'Get started';
      els.welcomeContinueBtn.onclick = function(){ navigateTo('experience'); };
    }
  }

  function navigateTo(target){
    SCREENS.forEach(function(key){ els[key].classList.add('hidden'); });

    if(target === 'welcome'){
      els.welcomeScreen.classList.remove('hidden');
      renderWelcomeScreen();
    } else if(target === 'experience'){
      els.experienceScreen.classList.remove('hidden');
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
    } else if(target === 'feedback'){
      els.feedbackScreen.classList.remove('hidden');
      resetGeneralFeedbackForm();
    }

    var navTarget = (target === 'quiz' || target === 'summary') ? 'home' : target;
    [els.navGoals, els.navLearn, els.navPlaydata, els.navFeedback].forEach(function(btn){
      btn.classList.toggle('active', btn.dataset.target === navTarget);
    });

    els.bottomNav.classList.toggle('hidden', target === 'welcome' || target === 'experience');
  }

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
    if(!text && topics.length === 0) return;
    saveFeedback({ type:'general', topics:topics, text:text, date:todayStr() });
    els.generalFeedbackThanks.classList.remove('hidden');
    els.generalFeedbackInput.value = '';
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
    var questionSet = level === 'advanced' ? section.advanced : section.questions;
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

    els.eyebrow.textContent = section.title.toLowerCase() + ' \u00B7 ' + session.level + ' \u2014 question ' + (session.qIndex+1) + ' of ' + session.questionSet.length;
    els.questionText.textContent = q.q;
    els.optionsContainer.innerHTML = '';
    els.feedbackBox.className = 'feedback';
    els.continueBtn.textContent = 'Check';
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

    Array.prototype.forEach.call(els.optionsContainer.children, function(c, i){
      c.classList.add('disabled');
      if(i === q.correct) c.classList.add('correct');
      else if(i === selected) c.classList.add('incorrect');
    });

    var seg = els.progressTrack.children[session.qIndex];
    seg.classList.add(isCorrect ? 'fill' : 'wrong');

    els.feedbackBox.classList.add('show', isCorrect ? 'correct' : 'incorrect');
    els.feedbackHead.textContent = isCorrect ? 'Correct' : 'Not quite';
    els.feedbackText.textContent = q.explain;

    els.continueBtn.textContent = (session.qIndex < session.questionSet.length - 1) ? 'Continue' : 'See results';
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

    state.score += earnedScore;

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

    var prog = getProgress(session.unitIndex);
    var justUnlockedAdvanced = false;
    if(session.level === 'beginner'){
      if(!prog.beginnerDone) justUnlockedAdvanced = true;
      prog.beginnerDone = true;
      prog.beginnerPct = Math.max(prog.beginnerPct, pct);
    } else {
      prog.advancedDone = true;
      prog.advancedPct = Math.max(prog.advancedPct, pct);
    }

    saveState();
    updateTopbar();

    var section = SECTIONS[session.unitIndex];
    els.summaryUnit.textContent = section.title.toLowerCase() + ' \u00B7 ' + session.level;
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
    els.congratsBanner.classList.toggle('show', isGettingStarted);

    els.lessonFeedbackBlock.dataset.unitIndex = session.unitIndex;
    els.lessonFeedbackInput.value = '';
    els.lessonFeedbackThanks.classList.add('hidden');
    var unitLabel = section.title.toLowerCase();
    els.lessonFeedbackBlock.querySelector('.lesson-feedback-label').textContent =
      'What would you like to learn more about in ' + unitLabel + '?';

    navigateTo('summary');
  }

  els.exitBtn.addEventListener('click', function(){
    navigateTo('home');
  });

  els.backHomeBtn.addEventListener('click', function(){
    navigateTo('home');
  });

  state = loadState();
  updateTopbar();
  navigateTo(state.onboarded ? 'home' : 'welcome');

})();
