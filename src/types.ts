export interface OptionParams {
  stockPrice: number;
  strikePrice: number;
  daysToExpiration: number;
  volatility: number; // in percentage (e.g., 30 for 30%)
  interestRate: number; // in percentage (e.g., 4.5 for 4.5%)
  optionType: 'call' | 'put';
}

export interface GreeksResult {
  price: number;
  delta: number;
  gamma: number;
  vega: number; // represented as 1% IV change impact
  theta: number; // represented as daily decay rate
}

export interface Experience {
  company: string;
  role: { en: string; zh: string };
  period: string;
  location: { en: string; zh: string };
  description: { en: string[]; zh: string[] };
  techStack: string[];
}

export interface Project {
  title: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  description: { en: string; zh: string };
  metrics: { label: { en: string; zh: string }; value: string }[];
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  playbookUrl?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; score: number }[]; // score out of 100
}

export interface AgentAction {
  timestamp: string;
  type: 'info' | 'trade' | 'risk' | 'analysis';
  message: string;
  agentName: string;
}
