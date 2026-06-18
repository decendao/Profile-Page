import { Experience, Project, SkillCategory, AgentAction } from '../types';

export const PERSONAL_INFO = {
  name: "Marco",
  fullName: "Marco Lingpeng",
  title: "Lead Quantitative Developer & AI Agent Architect",
  location: "Singapore / Remote",
  email: "decenfund@gmail.com",
  github: "https://github.com/decendao",
  githubUsername: "decendao",
  tagline: "Bridging quantitative derivatives trading with state-of-the-art LLM-agent architectures.",
  about: "I am a quantitative software engineer specializing in equity/crypto option derivatives, low-latency execution interfaces, and autonomous agent systems. As the creator of Option-Agent-Dashboard-React, I develop reliable frontends and multi-agent systems designed to model markets, evaluate real-time Risk Greeks (Delta, Gamma, Theta, Vega), and automate risk-neutral hedging strategies using state-of-the-art LLM capabilities."
};

export const PROJECTS: Project[] = [
  {
    title: "Option-Agent-Dashboard-React",
    subtitle: "Orchestrated Multi-Agent Option Trading system",
    description: "An advanced responsive web platform designed to co-ordinate autonomous AI trading agents. The platform models real-time option chains, computes Black-Scholes Greeks, simulates option strategies, and tracks live-streaming agent logical prompts and actions.",
    metrics: [
      { label: "Stars", value: "98+" },
      { label: "Greeks Computed / sec", value: "24,000+" },
      { label: "Agent latency", value: "110ms" },
      { label: "Risk Reduction", value: "-34%" }
    ],
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts", "Google Gemini SDK", "WebSockets"],
    githubUrl: "https://github.com/decendao/Option-Agent-Dashboard-React",
    demoUrl: "#calculator"
  },
  {
    title: "Derivatives Volatility Surface Mapper",
    subtitle: "High-Frequency Volatility Curve Analysis",
    description: "A continuous data ingestion pipeline and real-time visualization dashboard mapping implied volatility curves and smile smiles across multiple expirations. Integrates with historical broker APIs and optimizes fit-metrics using cubic spline interpolation.",
    metrics: [
      { label: "API Thruput", value: "2M req/day" },
      { label: "Chart Render Delay", value: "12ms" },
      { label: "Data Accuracy", value: "99.98%" }
    ],
    tags: ["D3.js", "Canvas2D", "FastAPI", "Python", "NumPy", "SciPy"],
    githubUrl: "https://github.com/decendao"
  },
  {
    title: "Broker API Router (Liquidity Aggregator)",
    subtitle: "Execution Gateway for Crypto Options",
    description: "A secure, hot-swappable routing middleware facilitating order placement and risk management on Deribit and Paradigm platforms. Employs circuit-breaker patterns to manage API rate limits and execution slippage during high-volatility events.",
    metrics: [
      { label: "Execution Slippage", value: "< 0.05%" },
      { label: "Latency Over Wire", value: "8ms" },
      { label: "Daily Volume", value: "$4.5M+" }
    ],
    tags: ["Node.js", "Express", "REST", "Redis", "RxJS", "Docker"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Apex Quant Labs",
    role: "Lead Quantitative Developer / AI Engineer",
    period: "2024 - Present",
    location: "Singapore / Hybrid",
    description: [
      "Architected and deployed an autonomous agentic system for multi-broker crypto options execution, linking the Gemini API with active market books.",
      "Engineered full-stack real-time React dashboards demonstrating multi-dimensional risks, rendering 50+ updates/second using highlyoptimized hook setups.",
      "Built customized, responsive pricing engines computing Black-Scholes Greeks on customer browsers directly to drastically reduce server overhead."
    ],
    techStack: ["React 19", "TypeScript", "Google GenAI SDK", "Tailwind CSS", "RxJS", "FastAPI", "WebSockets"]
  },
  {
    company: "HedgeWave Capital",
    role: "Senior Full-Stack Derivatives Engineer",
    period: "2022 - 2024",
    location: "Singapore",
    description: [
      "Delivered a next-generation options trading layout used by 12 portfolio managers daily in executing option spread trades.",
      "Designed clean, responsive web pages featuring bento-grid modules, custom theme patterns, and fluid Framer Motion transitions.",
      "Integrated secure authentication, order routing, and audit vaults connected with enterprise databases."
    ],
    techStack: ["React", "Bento Grid", "D3.js", "Express", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    company: "Symmetric Technology",
    role: "Software Engineer (Fintech Integration)",
    period: "2020 - 2022",
    location: "Remote",
    description: [
      "Optimized client-side responsive loading speeds by 40% using code-splitting, tree-shaking, and lazy image generation principles.",
      "Wrote and maintained standard options pricing calculators and financial chart tools used in customer portal interfaces.",
      "Collaborated with UI/UX designers to implement Swiss minimal design styles supporting dual modes."
    ],
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
      { name: "Volatility Surface fitting", score: 90 },
      { name: "Delta-Hedging strategies", score: 88 },
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
    title: "Agentic Engineering & API Integrations",
    iconName: "Cpu",
    skills: [
      { name: "Google Gemini AI Integration", score: 94 },
      { name: "Multi-Agent Orchestration", score: 90 },
      { name: "WebSocket Streaming & SSE", score: 92 },
      { name: "Node.js & Express Backends", score: 86 },
      { name: "FastAPI / Python scientific stack", score: 85 }
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
