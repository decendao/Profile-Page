import { Experience, Project, SkillCategory, AgentAction } from '../types';

export const PERSONAL_INFO = {
  name: "Marco",
  fullName: "Marco Lingpeng",
  title: {
    en: "Forward Deployed Engineer (Financial AI Agents) & Quantamental Investor",
    zh: "金融投资Agent FDE前置工程师"
  },
  location: {
    en: "Singapore / Remote",
    zh: "新加坡 / 远程"
  },
  email: "decenfund@gmail.com",
  github: "https://github.com/decendao",
  githubUsername: "decendao",
  twitter: "https://x.com/marcostrategy",
  linkedin: "https://www.linkedin.com/in/web3marco",
  tagline: {
    en: "12 years of quantitative derivative portfolio management with live execution across major retail APIs. Specializing in autonomous financial workflows and production-grade Agent harnesses.",
    zh: "12年美股二级市场及衍生品实盘沉淀，专注将买方博弈策略与量化模型深度整合为生产级金融 AI 智能体。"
  },
  aboutMeTitle: {
    en: "About Me / Quantamental FDE Profile",
    zh: "关于我 / FDE 个人简介"
  },
  about: {
    en: "With 12 years of live US equity experience, I previously managed a $10M portfolio for a single-family office in New York, and generated 50%+ excess returns for fiduciary clients at MicroStrategy Capital Management from 2023 to 2025. Since opening my first US equity account as a freshman in 2012, I have put real capital on the line across every major retail and institutional brokerage evolution in the US—TD Ameritrade, Robinhood, Interactive Brokers (IBKR), and Alpaca API. Every milestone is etched into my muscle memory of market micro-structures.\n\nTo me, 'investing' is never about dogmatically dissecting static accounting metrics. It is about capturing global macroeconomic inflection points, exploiting geopolitical information anomalies, and harvesting non-linear derivative alpha. During the unprecedented market circuit breakers of March 2020, it was my dynamic Gamma hedging on out-of-the-money (OTM) Put option arrays that safely locked down our family office portfolio's maximum drawdown.\n\nThe moment GPT-3.5 broke out in late 2022, I knew the paradigm had permanently shifted. The traditional sell-side model—spending a week compiling a fifty-page report to dissect a single company's past financials—has been devalued to near-zero cost. High-entropy financial signal is no longer about text accumulation; it is about executable, reusable trading strategy software: Executable Playbooks.\n\nSince mid-2025, I have focused on fusing Autonomous AI Agents directly into my workflow. My core obsession of creating an automated options tracking and intelligence desk materialized as MarcoMoney. After 12 months of rapid learning, intensive testing, and iterations, I shipped our MVP in May. At marcomoney.app, I engineered a three-tier Agent loop—automated pre-market expected boundary brief, intraday IV Crush risk circuit breaker, and post-session strategy reconciliation—distilling 13 years of personal trading logic into a 24/7 cloud-redundant 'Quant Desk'.\n\nFor speculative and capital-managing Agents, my ultimate philosophy is clear: users hold zero loyalty to underlying foundation models (LLMs). They will swap models in a second for lower latency or higher intelligence. However, they hold a fanatical, near-religious retention for the Harness that secures their own investment memories, custom execution parameters, and tool routing protocols.\n\nAs a Forward Deployed Engineer (FDE) focusing on Financial AI Agents, my mission is to identify, extract, and distill highly reproducible investment strategies and quant models, converting them into modular, remixable financial infrastructures ready for global long-tail market adaptation.",
    zh: "12年美股二级市场投资组合管理经验，曾在纽约单一家办管理1000万美元投资组合，2023-2025期间在微策略资本管理为受托客户创造50%+超额回报。从2012年大一首个美股账户开始，我用真金白银踩过全美所有主流券商和交易终端的迭代周期——TD Ameritrade、Robinhood、IBKR、Alpaca API，每一段都是对市场底层架构的肌肉记忆。\n\n我理解的“投资”不是静态财务指标的死抠，而是全球宏观流动性拐点的捕获、地缘政治事件的预期差、以及衍生品市场的非线性Alpha。2020年美股连续熔断期间，正是靠深度虚值看跌期权组合的Gamma动态对冲，将家办组合的回撤锁死在安全线内。\n\n2022年底GPT-3.5爆发的那一刻，我意识到范式将永久改变。传统卖方模式——“花一周写几万字死磕一家公司的财务报告”——已经在AI时代贬值到接近零成本。真正有价值的内容不是文字堆砌，而是可执行、可复用的金融策略代码：Executable Playbooks。\n\n2025年中开始，我专注如何将AI Agents融入我的投研交易workflows。我的核心目标是打造一个美股盯盘智能体系统并命名为MarcoMoney。通过12个月的不断学习、测试和迭代，终于在5月份发布了MVP。在marcomoney.app里，我设计了三层Agent闭环——盘前预期波动范围自动简报、日内IV Crush风险断路器、收盘后复盘日志与策略迭代——用代码把自己13年的交易认知“蒸馏”成一个24/7云端冗余的“Quant Desk”。\n\n对于投资交易Agent，我的核心理解是：用户对底层大模型LLM没有忠诚度，谁便宜谁更聪明用户一秒钟就能切走；但用户对锁定了自己投资记忆、策略习惯和Tool路由协议的Harness，具备近乎偏执的粘性。\n\n作为金融投资Agent FDE（前置开发工程师），我的使命就是尽可能挖掘并蒸馏最可复制的投资经理投资框架和量化模型，变成让全球长尾用户可Remix、可二次魔改的金融基础设施。"
  }
};

export const CORE_EXPERTISE = [
  {
    id: 1,
    title: {
      en: "Extreme 'Optionized' Intraday Gamma Risk Penetration",
      zh: "极端“期权化”下的日内 Gamma 风险穿透"
    },
    description: {
      en: "A massive portion of modern intraday price action in US equities is driven by forced hedging flows from Wall Street Market Makers striving to maintain Delta neutrality. My research and trading framework centers on these underlying derivatives flows: precisely tracking Gamma Wall extremes, capturing intraday trend reversals at the Zero Gamma Line, and utilizing algorithms to preempt premium-crushing IV Crush events ahead of geopolitical shocks or earnings releases.",
      zh: "现代美股的日内巨大动量，在很大程度上被华尔街做市商（Market Makers）为了保持 Delta 中性而形成的被迫对冲盘所挟持。我的投研框架围绕衍生品底层筹码展开：精准监控 Gamma Wall（Gamma 墙） 极值、捕捉 Zero Gamma Line（零 Gamma 线） 盘内多空机制反切、并在突发地缘/财报催化剂前夜通过算法拦截 IV Crush（隐波崩塌） 权利金踏空。"
    },
    tags: ["Gamma Wall", "Zero Gamma", "IV Crush", "Delta Neutrality"]
  },
  {
    id: 2,
    title: {
      en: "Cross-Market EV Alignment",
      zh: "跨市场期望值套利 (Cross-Market EV Alignment)"
    },
    description: {
      en: "Quantitative trading is not about over-fitting historical price charts in a black box; it is about exploiting real-time pricing inefficiencies across derivative assets and alternative oracle venues. I successfully developed and implemented a dynamic expected value (EV) arbitrage model that aligns live betting odds from prediction markets (Polymarket, Kalshi) with market probability distributions derived from Wall Street options implied volatility, operating at a 5-minute granularity.",
      zh: "我崇尚的量化绝对不是死盒子里过度拟合历史 K 线，而是捕获跨品类衍生品与另类市场间的定价失效（Pricing Inefficiency）。我成功跑通了将 Polymarket/Kalshi 等另类预测市场的实时下注赔率，与华尔街期权隐波倒推 Market Probability 进行 5 分钟颗粒度对齐的动态期望值套利模型。"
    },
    tags: ["Polymarket / Kalshi", "Probability Mapping", "Arbitrage", "EV Model"]
  },
  {
    id: 3,
    title: {
      en: "Financial Agent Production-Grade Harness Engineering",
      zh: "Financial Agent 生产级架构交付 (Harness Engineering)"
    },
    description: {
      en: "The critical flaw of Large Language Models in finance is numerical hallucination combined with API rate-limit instability. When architecting Agents, I strictly adhere to 'Less is More' and minimizing surface area friction:\n- P0 Mathematical Isolation: Keep general narratives in natural language but delegate core computations to 100% hardened, deterministic code to eliminate math hallucinations.\n- P1 Dependency-Injected Soft Inheritance: Allow customized, long-tail execution templates to inherit core engine rules dynamically via an env_config.json abstraction layer, enabling live hot-patching of the master logic while facilitating organic scaling of localized instances.",
      zh: "大模型在金融领域的最大死穴是数字随机性幻觉与 API 限频崩溃。在架构 Agent 时，我坚持 “Less is More”与“控制表面积摩擦” 的机制设计：\n- P0 级数理闭环：叙事归自然语言，算力归 100% 硬编码代码，解决计算幻觉。\n- P1 级依赖注入软继承：让长尾 Remix 剧本通过 env_config.json 变量外壳软继承母体逻辑，实现母体热修复进化，子体无限繁殖。"
    },
    tags: ["Deterministic Code", "Dependency Injection", "Remix Abstraction", "Hot Fixing"]
  }
];

export const THE_PITCH = {
  quote: {
    en: "An Agent is not a chatbot with RAG, but a 100% autonomous trading brain with ironclad risk-management protocols.",
    zh: "智能体绝非套了 RAG 的对话框，而是 100% 自动驾驶的交易主脑与风控铁律。"
  },
  title: {
    en: "My Agent Philosophy",
    zh: "💡 我的Agent哲学"
  },
  content: {
    en: "In today's retail public markets, flow and attention are superficial, transient, and lack long-term retention. Those who are truly hungry and fanatically willing to pay for Agent-driven analytics are emerging funds and proprietary trading teams locked out of $40,000/yr Bloomberg Terminals, alongside AI-native traders isolated inside localized code islands.\n\nEverything I build is aimed at democratizing elite Wall Street risk-management and arbitrage practices into plug-and-play, one-click 'Financial Agent Harnesses.' My mission is to bridge professional buy-side insight with elite AIME scaling, carving out a self-sustaining AI alpha engine on the global financial oceans.",
    zh: "一个真正能够替代人类进行实盘交易的 Agent，绝不是一个套了 RAG 的对话框，而是一个全自动驾驶的交易主脑——它必须拥有 100% 确定性的执行边界、秒级流式另类数据的清洗雷达，以及对抗极端隐波践踏的非线性风控硬编码断路器。\n\n作为Agent开发/架构师，是为这群具备“自动驾驶”野心的 AI 原生交易员与新兴量化团队，交付一套生产线级别的 Financial Agent Harness（智能体流式运行底座与中台外壳）。"
  }
};

export const PROJECTS: Project[] = [
  {
    title: {
      en: "Gamme Squeeze Tracker",
      zh: "Gamme Squeeze Tracker"
    },
    subtitle: {
      en: "High-Frequency Volatility Curve Analysis",
      zh: "高频隐含波动率微笑曲线分析"
    },
    description: {
      en: "A continuous data ingestion pipeline and real-time visualization dashboard mapping implied volatility curves and volatility smiles across multiple contracts and expirations. Integrates with historical broker APIs and optimizes fit-metrics using cubic spline interpolation.",
      zh: "实时隐含波动率（IV）曲线和波动率微笑曲线映射系统，支持多行合约与到期日。通过对高频行情进行三次样条插值，精确计算各 Strike 波动率偏斜与套利概率点。"
    },
    metrics: [
      { label: { en: "API Thruput", zh: "接口吞吐" }, value: "2M req/day" },
      { label: { en: "Chart Delay", zh: "图表延迟" }, value: "12ms" },
      { label: { en: "Accuracy", zh: "计算精度" }, value: "99.98%" },
      { label: { en: "Fit Rate", zh: "曲面拟合率" }, value: "98.7%" }
    ],
    tags: ["React", "TypeScript", "D3.js", "Canvas2D", "FastAPI", "Python SciPy"],
    githubUrl: "https://github.com/decendao",
    playbookUrl: "https://alva.ai/u/decenfund/playbooks/options-risk-breaker"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Apex Quant Labs",
    role: {
      en: "Lead Quantitative Developer",
      zh: "领头量化开发工程师 (Lead Quant Developer)"
    },
    period: "2024 - Present",
    location: {
      en: "Singapore / Hybrid",
      zh: "新加坡 / 混合办公"
    },
    description: {
      en: [
        "Engineered real-time options pricing calculators capable of computing Black-Scholes Greeks with ultra-low latency directly within browser hook cycles.",
        "Designed full-stack multi-broker risk dashboards in React, streaming up to 50+ updates/second with clean web vitals and optimized React state management.",
        "Optimized data streaming channels with WebSockets and Server-Sent Events to aggregate orders across disparate liquidity venues."
      ],
      zh: [
        "开发极速期权定价评估引擎，在浏览器主渲染循环中支持 100% 确定性的 Black-Scholes Greeks 计算与校验。",
        "搭建资深交易风险监控控制台，通过 WebSockets 实时聚合流媒体，吞吐超 50次/秒 的高多维风险散布点信息。",
        "负责智能下单执行路由与网络适配层优化，最大限度缩短对冲链路物理时延。"
      ]
    },
    techStack: ["React 19", "TypeScript", "FastAPI", "Python SciPy", "Tailwind CSS", "RxJS", "WebSockets"]
  },
  {
    company: "HedgeWave Capital",
    role: {
      en: "Senior Full-Stack Derivatives Engineer",
      zh: "资深衍生品开发工程师"
    },
    period: "2022 - 2024",
    location: {
      en: "Singapore",
      zh: "新加坡"
    },
    description: {
      en: [
        "Delivered a next-generation options trading dashboard used by 12 portfolio managers daily to execute and monitor delta-hedging spread trades.",
        "Designed clean, responsive web layouts featuring fluid neo-brutalist custom modules, robust charts, and rapid state feedback.",
        "Integrated secure authentication, multi-tenant order routing, and secure audit vaults connected with PostgreSQL enterprise databases."
      ],
      zh: [
        "独立交付新一代期权交易决策控制板，支持全功能 Delta 以及零 Gamma 水平自动追溯与对冲策略落地。",
        "基于 D3 深度自制流动性热力、高频波动率偏斜，并提供即时状态重拟合渲染反馈。",
        "整合多物理多机构的交易认证接口，负责多租户行情数据的物理加密归档审计。"
      ]
    },
    techStack: ["React", "Bento Grid Layouts", "D3.js Charts", "Express", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    company: "Symmetric Technology",
    role: {
      en: "Software Engineer (Fintech Integration)",
      zh: "全栈开发 (金融科技系统化方向)"
    },
    period: "2020 - 2022",
    location: {
      en: "Remote",
      zh: "远程"
    },
    description: {
      en: [
        "Optimized client-side responsive loading speeds by 40% using code-splitting, tree-shaking, and lazy content rendering principles.",
        "Wrote and maintained standard options pricing calculators and financial chart tools used in B2B customer portal interfaces.",
        "Collaborated with UI/UX designers to implement modern Swiss layout patterns supporting dual theme modes."
      ],
      zh: [
        "负责在 B2B 精简门户层进行代码拆分分块加载（Code Split），在带宽受限场景下减少 40% 的首字节等待时长。",
        "沉淀基础期权计算函数包，复用至多个分布式交易端接口中的 Greeks 缓存计算单元内。",
        "配合美术设计，运用简约复古与瑞士风格相结合的网格结构实现高对比度国际自适应展示。"
      ]
    },
    techStack: ["JavaScript", "HTML5/CSS3", "Tailwind CSS", "SASS", "Vite", "Jest"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Quantitative Systems & Derivatives",
    iconName: "TrendingUp",
    skills: [
      { name: "Options Valuation & Greeks", score: 98 },
      { name: "Black-Scholes-Merton Modeling", score: 95 },
      { name: "Volatility Surface Fitting", score: 90 },
      { name: "Delta-Hedging Strategies", score: 88 },
      { name: "Risk Management Matrix", score: 92 }
    ]
  },
  {
    title: "Technical Stack (Frontend)",
    iconName: "Layers",
    skills: [
      { name: "React 19 / Hooks / Context", score: 98 },
      { name: "TypeScript & ESNext", score: 96 },
      { name: "Tailwind CSS v4 & Styling", score: 95 },
      { name: "Framer Motion Animations", score: 92 },
      { name: "Recharts / D3 Asset Rendering", score: 88 }
    ]
  },
  {
    title: "Backend & Systems Integration",
    iconName: "Cpu",
    skills: [
      { name: "High-Performance REST APIs", score: 93 },
      { name: "WebSocket Streaming & SSE", score: 92 },
      { name: "Node.js & Express Frameworks", score: 88 },
      { name: "FastAPI / Python Scientific Stack", score: 85 },
      { name: "Redis Caching & Concurrency", score: 82 }
    ]
  }
];

export const MOCK_AGENT_ACTIONS: AgentAction[] = [
  {
    timestamp: "20:15:32",
    agentName: "Vol-Scanner-Agent",
    type: "analysis",
    message: "Scanning option chain strikes. Implied Volatility (IV) skew at 28.4% strike shows cheap premium for Put options."
  },
  {
    timestamp: "20:16:04",
    agentName: "BSM-Pricing-Agent",
    type: "info",
    message: "Recalculating Greeks: Stock=$100, Strike=$105 (Call), Expiry=30d. Delta is 0.412. Elasticity index looks favorable."
  },
  {
    timestamp: "20:17:11",
    agentName: "Exec-Hedge-Agent",
    type: "trade",
    message: "Triggered Auto hedging. Bought Spot collateral to transition portfolio Delta from net -0.32 to perfect delta-neutral (0.0)."
  },
  {
    timestamp: "20:17:45",
    agentName: "Risk-Sentry-Pool",
    type: "risk",
    message: "Portfolio gamma alert within safe limits. Expected portfolio Theta capture rate: +$420 / calendar day."
  }
];
