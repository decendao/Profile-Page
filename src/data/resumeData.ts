import { Experience, Project, SkillCategory, AgentAction } from '../types';

export const PERSONAL_INFO = {
  name: "Marco",
  fullName: "Marco Lingpeng",
  title: "Lead Quantitative Software Developer",
  location: "Singapore / Remote",
  email: "decenfund@gmail.com",
  github: "https://github.com/decendao",
  githubUsername: "decendao",
  tagline: "Building high-performance quantitative systems, options pricing backends, and full-stack execution interfaces.",
  about: "I am a senior quantitative software engineer specializing in equity and crypto option derivatives, real-time risk engines, and execution routing systems. I design and implement low-latency pricing microservices, high-frequency data ingestion pipelines, and responsive web terminals to analyze and capture real-time risk metrics (Delta, Gamma, Vega, Theta)."
};

export const PROJECTS: Project[] = [
  {
    title: "Derivatives Volatility Surface Mapper",
    subtitle: "High-Frequency Volatility Curve Analysis",
    description: "A continuous data ingestion pipeline and real-time visualization dashboard mapping implied volatility curves and volatility smiles across multiple contracts and expirations. Integrates with historical broker APIs and optimizes fit-metrics using cubic spline interpolation.",
    metrics: [
      { label: "API Thruput", value: "2M req/day" },
      { label: "Chart Render Delay", value: "12ms" },
      { label: "Data Accuracy", value: "99.98%" },
      { label: "Model Fit Rate", value: "98.7%" }
    ],
    tags: ["React", "TypeScript", "D3.js", "Canvas2D", "FastAPI", "Python", "NumPy", "SciPy"],
    githubUrl: "https://github.com/decendao"
  },
  {
    title: "Broker API Router (Liquidity Aggregator)",
    subtitle: "Execution Gateway for Options Liquidity",
    description: "A secure, hot-swappable routing middleware facilitating order placement and client risk management on major platforms like Deribit and Paradigm. Employs circuit-breaker patterns and rate-limiting queues to manage slippage during periods of extreme high-volatility.",
    metrics: [
      { label: "Execution Slippage", value: "< 0.05%" },
      { label: "Latency Over Wire", value: "8ms" },
      { label: "Daily Volume", value: "$4.5M+" }
    ],
    tags: ["Node.js", "Express", "REST API", "Redis", "RxJS", "Docker", "Hole-punching UI"],
    githubUrl: "https://github.com/decendao"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Apex Quant Labs",
    role: "Lead Quantitative Developer",
    period: "2024 - Present",
    location: "Singapore / Hybrid",
    description: [
      "Engineered real-time options pricing calculators capable of computing Black-Scholes Greeks with ultra-low latency directly within browser hook cycles.",
      "Designed full-stack multi-broker risk dashboards in React, streaming up to 50+ updates/second with clean web vitals and optimized React state management.",
      "Optimized data streaming channels with WebSockets and Server-Sent Events to aggregate orders across disparate liquidity venues."
    ],
    techStack: ["React 19", "TypeScript", "FastAPI", "Python SciPy", "Tailwind CSS", "RxJS", "WebSockets"]
  },
  {
    company: "HedgeWave Capital",
    role: "Senior Full-Stack Derivatives Engineer",
    period: "2022 - 2024",
    location: "Singapore",
    description: [
      "Delivered a next-generation options trading dashboard used by 12 portfolio managers daily to execute and monitor delta-hedging spread trades.",
      "Designed clean, responsive web layouts featuring fluid neo-brutalist custom modules, robust charts, and rapid state feedback.",
      "Integrated secure authentication, multi-tenant order routing, and secure audit vaults connected with PostgreSQL enterprise databases."
    ],
    techStack: ["React", "Bento Grid Layouts", "D3.js Charts", "Express", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    company: "Symmetric Technology",
    role: "Software Engineer (Fintech Integration)",
    period: "2020 - 2022",
    location: "Remote",
    description: [
      "Optimized client-side responsive loading speeds by 40% using code-splitting, tree-shaking, and lazy content rendering principles.",
      "Wrote and maintained standard options pricing calculators and financial chart tools used in B2B customer portal interfaces.",
      "Collaborated with UI/UX designers to implement modern Swiss layout patterns supporting dual theme modes."
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
