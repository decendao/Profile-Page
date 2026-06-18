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
  role: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
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
