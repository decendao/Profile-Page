import { motion } from 'motion/react';

interface PricerWidgetProps {
  lang: 'en' | 'zh';
}

export default function PricerWidget({ lang }: PricerWidgetProps) {
  return (
    <section id="calculator" className="py-12 px-4 bg-brand-dark border-b border-brand-border scrolling-mt-14 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Market Structure & Quantamental View Analysis Section */}
        <div className="space-y-8 text-left">
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-black text-brand-cyan uppercase tracking-widest flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-brand-cyan animate-pulse" />
              {lang === 'en' ? 'DEEPER DERIVATIVES RESEARCH & HIGHER MECHANICS' : '买方深水博弈 —— 二级筹码与另类期望对齐'}
            </h3>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-border uppercase">
              {lang === 'en' ? 'MY OPTION PHILOSOPHY' : '我对期权的理解'}
            </h2>
            <p className="text-xs text-brand-border/60 font-medium max-w-3xl font-sans">
              {lang === 'en'
                ? 'Deconstructing real-time pricing inefficiencies, dealer hedging thresholds, and cross-market expected value alignments.'
                : '通过二级市场期权流的非线性对冲行为，穿透做市商关键阈值，并对齐另类预测市场的期望对冲偏离。'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Gamma Game */}
            <div className="border-2 border-brand-border bg-[#FCFCFA] p-6 rounded-none shadow-[5px_5px_0px_#0A0A0A] space-y-4">
              <div className="flex items-center gap-2 border-b border-brand-border/10 pb-3">
                <span className="px-2 py-0.5 bg-[#0A0A0A] text-white font-mono text-[9px] font-black uppercase">
                  GEX GAME
                </span>
                <h4 className="font-black text-sm text-brand-border uppercase tracking-tight">
                  {lang === 'en' ? 'Modern US Equity Structures & Gamma dynamics (03:00 - 07:00)' : '解构现代美股结构 —— 极端“期权化”下的 Gamma 游戏（03:00 - 07:00）'}
                </h4>
              </div>
              
              <div className="text-xs text-brand-border/85 font-medium leading-relaxed font-sans space-y-4">
                <p>
                  {lang === 'en'
                    ? "Based on 13 years of buy-side trading depth, the modern US cash market is no longer a static valuation venue governed by the classical Efficient Market Hypothesis (EMH) found in standard textbooks. Today's market is dominated by two immense gravitational fields: Narrative Aggregation and systematic Optionization."
                    : "基于这 13 年的买方沉淀，我想和团队非常冷酷地拆解一下我眼中的现代美股市场结构。现在的美国二级市场，早就不是传统教科书里依靠有效市场假说（EMH）运行的静态估值场所了。今天的市场，由两个核心引力场支配：极致的“叙事抱团（Narrative Aggregation）”与结构性的“全面期权化（Optionization）”。"}
                </p>
                <p>
                  {lang === 'en'
                    ? "According to official OCC and Cboe data, options trading volume has shattered records to surpass 15.2 billion contracts. More startling is the demographic tilt: retail and high-frequency customer accounts now approach a near-record 46% of total transactions. In SPX, 0DTE (Zero Days to Expiration) contracts now represent 59% of total derivative volume. This implies that massive intraday stock velocity is no longer determined by EPS or typical multiple valuation metrics, but is instead violently driven and herd-stampeded by Wall Street market makers rehedging dynamically to maintain Delta neutrality."
                    : "根据 OCC（美国期权清算公司）与 Cboe 的官方数据，整个美股上市期权总交易量已经冲破了 152 亿张合约的历史极值。更可怕的是结构性改变：美股市场交易用户的占比发生了彻底倾斜，散户与高频衍生品机构的 customer 交易占比已逼近 46% 的历史高位；以 SPX 为例，0DTE（当天到期）期权交易量已经霸占了衍生品总量的 59%。这意味着，美股的日内巨幅动量，在很大程度上不再由传统的 EPS 或 P/E 倒数决定，而是被华尔街做市商（Market Makers）为了保持 Delta 中性而形成的盘内被迫对冲行为无情踩踏 and 裹挟出来的。"}
                </p>
                <p>
                  {lang === 'en'
                    ? "Taking highly volatile momentum equities such as TSLA or MSTR as examples: when massive pools of retail and system players flood specific out-of-the-money (OTM) call strikes, market makers keeping Delta neutral are forced to buy spot shares at geometric speed to hedge Short Gamma. This triggers a self-reinforcing upward feedback loop—the Gamma Squeeze. If an AI platform's understanding of financial content is limited to autogenerating news summaries and static financial statements, it is merely dumping raw noise onto users. True high-scarcity, actionable 'Signal' resides exactly inside these non-linear derivative positioning charts."
                    : "以 TSLA 或 MSTR（微策略）这种高贝塔标的为例：当海量散户和动量机构在特定行权价疯狂买入 OTM Call 时，做市商为了保持自身的 Delta 中性，必须在现货市场以几何级速度同步买入股票对冲 Short Gamma。这就触发了自我强化的正反馈漩涡——Gamma Squeeze（Gamma 逼空）。如果一个 AI 产品对金融内容的理解，还停留在给用户自动抓取新闻简报、自动写一段静态财务摘要，那就是在把无意义的“噪音（Noise）”堆砌给用户。真正具备战术稀缺性的“信号（Signal）”，恰恰隐藏在这些非线性的期权筹码分布里。"}
                </p>
              </div>

              {/* Three Indicators Sub-Grid */}
              <div className="bg-white border border-brand-border/30 p-4 space-y-3">
                <span className="text-[9px] font-mono font-black text-brand-cyan uppercase tracking-widest block">
                  {lang === 'en' ? 'DEALER HEDGING KEY INDICATORS:' : '我自己的日内盯盘和投研框架（三个核心指标维度）:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
                  <div className="space-y-1">
                    <span className="font-mono font-black text-[#0A0A0A] text-[10px] block">1. Gamma Wall (Gamma 墙)</span>
                    <p className="text-brand-border/75 leading-normal text-[11.5px] font-medium text-justify">
                      {lang === 'en' 
                        ? 'Extreme GEX strike concentration. It is the strongest intraday dealer hedging barrier; spot crossing it triggers non-linear volatility (Pin Risk turning into Run Risk).' 
                        : 'GEX（Gamma 敞口）在某一 Strike（行权价）上的极端聚集。这是做市商盘内对冲的最强阻力位。现货价格一旦刺穿 Gamma 墙，往往伴随着波动率的非线性非对称爆发（Pin Risk 转化为 Run Risk）。'}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono font-black text-[#0A0A0A] text-[10px] block">2. Zero Gamma Line</span>
                    <p className="text-brand-border/75 leading-normal text-[11.5px] font-medium text-justify">
                      {lang === 'en' 
                        ? 'The ultimate risk watershed. Above, dealers are Long Gamma (stabilizing with buy-low/sell-high). Below, they turn Short Gamma (trading with trend momentum, amplifying market corrections into panic-selling feed loops).' 
                        : '这是市场风险特征的绝对分水岭。在零 Gamma 线之上，做市商处于 Long Gamma 状态，其对冲动作是“高抛低吸”，扮演市场波动率的镇定剂；一旦现货跌破零 Gamma 线，做市商瞬间切换为 Short Gamma 状态，对冲动作变为“追涨杀跌”，任何微小的利空都会在盘中被做市商的对冲盘放大为恐慌性踩踏（Sell-off）。'}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono font-black text-[#0A0A0A] text-[10px] block">3. IV Crush 拦截机制</span>
                    <p className="text-brand-border/75 leading-normal text-[11.5px] font-medium text-justify">
                      {lang === 'en' 
                        ? 'On high-volatility, debt-leveraged assets like MSTR leading into catalysts, IV frequently spikes past the 95th percentile. Purchasing expensive flat premiums leads to devastating 80%+ decay once IV collapses post-event.' 
                        : '针对 MSTR 这种伴随比特币溢价的高波资产，在其发债、财报或重大地缘宏观催化剂前夜，期权的隐含波动率（IV）经常会被买到历史的 95th Percentile（95%分位数）以上。此时如果交易者盲目买入单向 Options，权利金资产极其昂贵，即便方向赌对，事件落地瞬间 IV 发生悬崖式崩塌（IV Crush），也会吃掉 80% 以上的期权合约价值。'}
                    </p>
                  </div>
                </div>
                <div className="pt-2.5 border-t border-brand-border/10 text-[10px] font-mono font-bold text-brand-border/75">
                  {lang === 'en'
                    ? "This is why high-value option analytics enjoy intense user reliance—high-complexity trading directly triggers raw human fears of capital loss."
                    : "这就是为什么我坚信高附加值的期权分析工具有着极强的强用户依赖属性——因为高认知、高复杂的期权交易，直接伴随着人性对真金白银资产受损的极致恐惧。"}
                </div>
              </div>
            </div>

            {/* Card 2: Cross Market EV Arbitrage */}
            <div className="border-2 border-brand-border bg-[#FCFCFA] p-6 rounded-none shadow-[5px_5px_0px_#0A0A0A] space-y-4">
              <div className="flex items-center gap-2 border-b border-brand-border/10 pb-3">
                <span className="px-2 py-0.5 bg-[#0A0A0A] text-white font-mono text-[9px] font-black uppercase">
                  EV ALIGNMENT
                </span>
                <h4 className="font-black text-sm text-brand-border uppercase tracking-tight">
                  {lang === 'en' ? 'Quantamental View & Cross-Market Expected Value Arbitrage (07:00 - 11:00)' : '定义现代量化观 —— 另类跨市场“期望值套利”（07:00 - 11:00）'}
                </h4>
              </div>

              <div className="text-xs text-brand-border/85 font-medium leading-relaxed font-sans space-y-4">
                <p>
                  {lang === 'en'
                    ? "This directly shapes my Quantamental View. Many legacy institutional and large tech quant teams are trapped in a dead end of 'Overfitting the Past'. They rely excessively on backtesting historical price bars or trailing factors to regress future moves. These static factor structures suffer from severe lag during macro liquidity shifts and black swan crises, easily leading to devastating drawdowns in liquidity traps."
                    : "这也直接推导出了我的“量化观（Quantamental View）”。现在很多老牌机构或中资大厂的量化团队，正在陷入一个“过度拟合过去”的死胡同。他们过度依赖历史的 K 线、财报因子跑多因子回归，去预测未来的走势。这种静态因子模型在遇到宏观地缘流动性剧变 and 突发黑天鹅时，天然具备严重的滞后性（Lagging），容易在流动性陷阱里遭遇毁灭性的回撤。"}
                </p>
                <p>
                  {lang === 'en'
                    ? "The quant trading I advocate revolves around: Cross-Market Expected Value Alignment."
                    : "我崇尚的量化，核心是：动态跨市场期望值对齐（Cross-Market Expected Value Alignment）。"}
                </p>
                <p>
                  {lang === 'en'
                    ? "A core strategy that we actively trade and refine in my live applications (marcomoney.app and other options engines): aligning real-time betting odds from alternative macro prediction venues (e.g. Polymarket, Kalshi) against implied probabilities derived from Wall Street options surfaces at high-frequency 5-minute granularities."
                    : "举一个我自己在 marcomoney.app 以及这次在 Alva 上交付的 options-risk-breaker 里面实际跑通并持续进化的底层策略：将 Polymarket/Kalshi 这种另类宏观预测市场的实时下注赔率概率，与美股指数/前月期权隐含波动率倒推出来的华尔街市场概率，进行 5 分钟颗粒度的高频数据流对齐。"}
                </p>
                <p>
                  {lang === 'en'
                    ? "Prediction platforms represent wild, nimble capital risking real money on upcoming economic prints (CPI, NFP, Fed pivot) unrestricted by rigid compliance mandates. Options lines, conversely, reflect cost barriers paid by traditional institutions protecting legacy spot equity portfolios. Since these liquidity pools and communities are fully segmented, implied event probabilities frequently drift by >5% to 10% on key catalyst eves."
                    : "预测市场反映的是全球最敏锐、不受传统合规羁绊的“野生聪明钱”对非农数据、CPI、美联储降息码数的实时真金白银期望下注；而美股期权链则反映了华尔街大型传统机构为了保护现货组合头寸而支付的真实风险对冲成本。由于两者的流动性池 and 交易群体是天然割裂的，在重大宏观催化剂落地前夜，两者的隐含事件概率经常会出现大于 5% 甚至大于 10% 的统计学偏离。"}
                </p>
                <p>
                  {lang === 'en'
                    ? "When my agents monitor this divergence, they instantly compute prevailing Expected Value mispricings, guiding multi-leg trades: acquiring contract fractions on prediction venues while establishing balancing out-of-the-money options legs on US equity boards to capture risk-neutral delta arbitrage. True quant trading is never about sitting in an isolated regression chamber; it is a permanent, automated information cleaning engine capturing structural inefficiencies across alternative and derivative spaces."
                    : "当我的 Agent 监测到这种偏离时，它能瞬间帮我计算出当前的 Expected Value（期望值）溢价，并指导我通过自动化通道一端买入预测市场的胜率合约，另一端在美股配置相应的 OTM 期权组合进行跨市场 delta 套利。真正的量化绝对不是躲在盒子里拟合历史 K 线，量化是一部长效运转的、去捕获跨品类衍生品与另类市场间定价失效（Pricing Inefficiency）的自动化信息清洗引擎。"}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
