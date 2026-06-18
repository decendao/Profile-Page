import { Experience, Project, SkillCategory, AgentAction } from '../types';

export const PERSONAL_INFO = {
  name: "Marco",
  fullName: "Marco Lingpeng",
  title: {
    en: "Quantamental Investor & AI-Native Agent Architect",
    zh: "期权化买方投资人 & 金融 AI 架构师"
  },
  location: {
    en: "Singapore / Remote",
    zh: "新加坡 / 远程"
  },
  email: "decenfund@gmail.com",
  github: "https://github.com/decendao",
  githubUsername: "decendao",
  tagline: {
    en: "Quantamental Investor & AI-Native Agent Architect with 13 years of buy-side trading expertise and end-to-end financial Agent delivery.",
    zh: "13年二级市场买方实盘功底，具备端到端金融 Agent 生产级架构交付力的 Builder。"
  },
  aboutMeTitle: {
    en: "About Me / Profile Summary",
    zh: "关于我 / 个人简介"
  },
  about: {
    en: "I am Marco Lingpeng, a Quantamental Investor and AI-Native Agent Architect with 13 years of buy-side trading expertise and end-to-end financial Agent delivery capabilities.\n\nSince entering live US equity markets in 2012, I have experienced every milestone in brokerage and trading terminal technology firsthand at a pixel level. My major investment breakthrough occurred while managing a $30M proprietary portfolio for a family office. I completely abandoned the traditional, static accounting-ledger-style sell-side approach. Instead, I transitioned fully to a buy-side framework driven by macro liquidity, high-frequency alternative event signals, and dynamic Alpha arbitrage and tail-risk hedging utilizing options structures.\n\nDuring the extreme panic and consecutive circuit breakers of the March 2020 liquidity black swan, my precise intraday monitoring of option chain Greek anomalies enabled me to deploy dynamic Gamma hedging via deep Out-of-the-Money (OTM) Puts, locking our portfolio's maximum drawdown securely within safe limits.\n\nAs the AGI revolution drives the technology and financial landscapes into what Andrej Karpathy defines as 'Software 3.0', I see clearly that human cognitive bandwidth faces a physical limit (the 'Single-Prompt Ceiling'). Static legacy strategies are rapidly decaying. The future of finance belongs to those who merge deep buy-side game-theoretic expertise with production-grade AI infrastructure—the Option & Quantitative Prompt Architects.",
    zh: "我是凌鹏，一个拥有 13 年二级市场买方功底、且具备端到端金融 Agent 交付力的 Builder。\n\n从 2012 年切入美股实盘交易至今，我肉身像素级经历了全球二级市场底层券商与交易终端的全部技术迭代。我的投资跃迁发生在家办自营盘管理 3000 万美元 资金期间：我彻底放弃了死抠静态财务报表的古典卖方清朝账本模式，全面转向以宏观流动性、高频另类事件驱动，以及利用期权（Options）结构进行动态阿尔法（Alpha）套利与尾部风控的买方体系。\n\n在 2020 年 3 月美股极端恐慌连续熔断的流动性黑天鹅中，我凭借盘中对期权链 Greeks 异常偏离的精准监控，通过远期深度虚值看跌期权（OTM Puts）进行 Gamma 动态对冲，将资产组合的整体回撤死死锁在绝对的安全线内。\n\n当 AGI 爆发将整个科技与金融生态推入 Andrej Karpathy 所定义的 'Software 3.0' 时代，我清晰地意识到：人脑的信息吞吐量存在物理天花板（Single-Prompt Ceiling）。传统的静态策略正在失效，未来的金融终局，属于能够将买方博弈内功融入生产级 AI 基建的 Prompt Architect（期权/量化智能体架构师）。"
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
    en: "Remix friction scales with surface area, not capability.",
    zh: "Remix 摩擦随表面积增长，不随能力增长。"
  },
  title: {
    en: "The Pitch / My Ultimate Declaration",
    zh: "💡 我的终极宣告 (The Pitch)"
  },
  content: {
    en: "In today's retail public markets, flow and attention are superficial, transient, and lack long-term retention. Those who are truly hungry and fanatically willing to pay for Agent-driven analytics are emerging funds and proprietary trading teams locked out of $40,000/yr Bloomberg Terminals, alongside AI-native traders isolated inside localized code islands.\n\nEverything I build is aimed at democratizing elite Wall Street risk-management and arbitrage practices into plug-and-play, one-click 'Financial Agent Harnesses.' My mission is to bridge professional buy-side insight with elite AIME scaling, carving out a self-sustaining AI alpha engine on the global financial oceans.",
    zh: "在今天的二级市场，散户的流量繁荣是虚假的，没有生存级粘性。而真正饥渴、愿意为了 Agent 基建偏执买单的，是那些买不起一年 4 万美金彭博终端的 Emerging Funds（小型对冲基金、自营团队），以及在本地用工具陷入黑盒代码孤岛的 AI 原生交易员。\n\n我所做的一切，就是将华尔街高不可攀的衍生品风控与套利特权，重构为开箱即用、一键 Remix 即可继承的 \"Financial Agent Harness\"（可执行内容基建）。我致力于连接买方思维与 AIME 算力，在全球金融公海上杀出真正的 AI 造血中心。"
  }
};

export const PROJECTS: Project[] = [
  {
    title: {
      en: "Derivatives Volatility Surface Mapper",
      zh: "衍生品波动率曲面映射器"
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
    githubUrl: "https://github.com/decendao"
  },
  {
    title: {
      en: "Broker API Router (Liquidity Aggregator)",
      zh: "底层券商交易执行路由 (流动性聚合)"
    },
    subtitle: {
      en: "Execution Gateway for Options Liquidity",
      zh: "期权衍生品流动性执行网关"
    },
    description: {
      en: "A secure, hot-swappable routing middleware facilitating order placement and client risk management on major platforms like Deribit and Paradigm. Employs circuit-breaker patterns and rate-limiting queues to manage slippage during periods of extreme high-volatility.",
      zh: "低延迟的多底层券商交易执行网关，支持 Deribit、Paradigm 接口。利用滑动窗口断路器与智能排队等算法机制，在极端隐波崩溃期间显著降低对冲滑点。"
    },
    metrics: [
      { label: { en: "Execution Slippage", zh: "交易滑点" }, value: "< 0.05%" },
      { label: { en: "Latency Over Wire", zh: "物理线延迟" }, value: "8ms" },
      { label: { en: "Daily Volume", zh: "日均执行额" }, value: "$4.5M+" },
      { label: { en: "Fail Safe", zh: "故障容错" }, value: "99.999%" }
    ],
    tags: ["Node.js", "Express", "REST API", "Redis", "RxJS", "Docker"],
    githubUrl: "https://github.com/decendao"
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
