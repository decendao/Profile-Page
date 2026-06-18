import { OptionParams, GreeksResult } from '../types';

// Standard normal cumulative distribution function (Abramowitz & Stegun approximation)
function cdfNormal(x: number): number {
  const b1 =  0.319381530;
  const b2 = -0.356563782;
  const b3 =  1.781477937;
  const b4 = -1.821255978;
  const b5 =  1.330274429;
  const p  =  0.2316419;
  const c  =  0.39894228;

  if (x >= 0.0) {
    const t = 1.0 / (1.0 + p * x);
    return (1.0 - c * Math.exp(-x * x / 2.0) * t *
      (t * (t * (t * (t * b5 + b4) + b3) + b2) + b1));
  } else {
    const t = 1.0 / (1.0 - p * x);
    return (c * Math.exp(-x * x / 2.0) * t *
      (t * (t * (t * (t * b5 + b4) + b3) + b2) + b1));
  }
}

// Probability density function of standard normal
function pdfNormal(x: number): number {
  return Math.exp(-x * x / 2.0) / Math.sqrt(2.0 * Math.PI);
}

/**
 * Calculates theoretical european option price and Greeks (Delta, Gamma, Vega, Theta)
 * using the Black-Scholes-Merton analytical model.
 */
export function calculateGreeks(params: OptionParams): GreeksResult {
  const S = params.stockPrice;
  const K = params.strikePrice;
  const T = params.daysToExpiration / 365.0; // convert to years
  const r = params.interestRate / 100.0;     // convert to decimal percentage
  const v = params.volatility / 100.0;       // convert to decimal percentage
  const isCall = params.optionType === 'call';

  // Boundary condition check: time to expiration is zero
  if (T <= 0.0001) {
    const intrinsicValue = isCall ? Math.max(0, S - K) : Math.max(0, K - S);
    return {
      price: intrinsicValue,
      delta: isCall ? (S >= K ? 1.0 : 0.0) : (S <= K ? -1.0 : 0.0),
      gamma: 0.0,
      vega: 0.0,
      theta: 0.0
    };
  }

  // Handle case where volatility is exceptionally small to prevent division by zero
  const adjVolatility = Math.max(v, 0.0001);

  const d1 = (Math.log(S / K) + (r + (adjVolatility * adjVolatility) / 2.0) * T) / (adjVolatility * Math.sqrt(T));
  const d2 = d1 - adjVolatility * Math.sqrt(T);

  const n_d1 = cdfNormal(d1);
  const n_d2 = cdfNormal(d2);
  const pdf_d1 = pdfNormal(d1);

  // Price Calculation
  let price = 0;
  if (isCall) {
    price = S * n_d1 - K * Math.exp(-r * T) * n_d2;
  } else {
    price = K * Math.exp(-r * T) * cdfNormal(-d2) - S * cdfNormal(-d1);
  }

  // Prevent negative rounding errors
  price = Math.max(price, 0);

  // Delta Calculation
  const delta = isCall ? n_d1 : n_d1 - 1.0;

  // Gamma Calculation (independent of call/put)
  const gamma = pdf_d1 / (S * adjVolatility * Math.sqrt(T));

  // Vega Calculation (independent of call/put)
  // Vega represents change in option price per 1% change in implied volatility
  const vega = (S * Math.sqrt(T) * pdf_d1) / 100.0;

  // Theta Calculation
  // Standard formulas yield annual decay rates. We divide by 365 to get premium decay per calendar day.
  const firstTerm = -(S * pdf_d1 * adjVolatility) / (2.0 * Math.sqrt(T));
  const rK_e_rT = r * K * Math.exp(-r * T);

  let thetaYear = 0;
  if (isCall) {
    thetaYear = firstTerm - rK_e_rT * n_d2;
  } else {
    thetaYear = firstTerm + rK_e_rT * cdfNormal(-d2);
  }
  const theta = thetaYear / 365.0;

  return {
    price,
    delta,
    gamma,
    vega,
    theta
  };
}

/**
 * Standard templates for options trading strategy setups
 */
export const OPTION_STRATEGIES_TEMPLATES = [
  {
    name: "Covered Call",
    description: "Hold stock shares and sell a matching Call option for steady premium income.",
    badge: "Income",
    strategySetup: { optionType: "call", offsetStrike: 5, label: "Buy Stock shares + Sell +5% Strike Call" }
  },
  {
    name: "Bull Call Spread",
    description: "Buy close-to-money Call and sell higher-strike Call of same expiry to offset premium.",
    badge: "Bullish",
    strategySetup: { optionType: "call", offsetStrike: 10, label: "Buy ATM Call + Sell +10% Strike Call" }
  },
  {
    name: "Bear Put Spread",
    description: "Buy close-to-money Put and sell lower-strike Put to profit from downward moves with lower cost.",
    badge: "Bearish",
    strategySetup: { optionType: "put", offsetStrike: -10, label: "Buy ATM Put + Sell -10% Strike Put" }
  },
  {
    name: "Long Volatility Strangle",
    description: "Buy out-of-the-money Call & Put. Profit from high directional breakouts in either direction.",
    badge: "Volatility",
    strategySetup: { optionType: "call", offsetStrike: 15, label: "Buy -15% Put + Buy +15% Call" }
  }
];
