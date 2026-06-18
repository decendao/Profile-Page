import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { calculateGreeks, OPTION_STRATEGIES_TEMPLATES } from '../utils/pricing';
import { OptionParams, GreeksResult } from '../types';
import { Sliders, HelpCircle, ArrowRight, Sparkles, TrendingUp, RefreshCw, Layers } from 'lucide-react';

export default function PricerWidget() {
  // Option Parameters State
  const [params, setParams] = useState<OptionParams>({
    stockPrice: 100,
    strikePrice: 100,
    daysToExpiration: 30,
    volatility: 35,
    interestRate: 4.5,
    optionType: 'call'
  });

  // Greeks Calculation State
  const [greeks, setGreeks] = useState<GreeksResult>({
    price: 0,
    delta: 0,
    gamma: 0,
    vega: 0,
    theta: 0
  });

  // Explanatory note or selected strategy preset
  const [selectedPreset, setSelectedPreset] = useState<string>('Custom');

  // Trigger recalculation on parameter changes
  useEffect(() => {
    const updatedGreeks = calculateGreeks(params);
    setParams(prev => {
      // Check if value actually changed to prevent infinite loops (primitive comparison of fields)
      return prev;
    });
    setGreeks(updatedGreeks);
  }, [params]);

  const handleSliderChange = (key: keyof OptionParams, value: number) => {
    setSelectedPreset('Custom');
    setParams(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleOptionTypeToggle = (type: 'call' | 'put') => {
    setParams(prev => ({
      ...prev,
      optionType: type
    }));
  };

  const applyStrategyPreset = (strategyName: string, setup: { optionType: string; offsetStrike: number; label: string }) => {
    setSelectedPreset(strategyName);
    
    // Set parameters based on the strategy setup
    const newStockPrice = 100;
    const newStrike = Math.round(newStockPrice * (1 + setup.offsetStrike / 100));
    
    setParams({
      stockPrice: newStockPrice,
      strikePrice: newStrike,
      daysToExpiration: 30, 
      volatility: 35,
      interestRate: 4.5,
      optionType: setup.optionType as 'call' | 'put'
    });
  };

  // Helper colors based on sign
  const getDeltaColors = (delta: number) => {
    if (delta > 0) return { bar: 'bg-brand-green', text: 'text-brand-green' };
    if (delta < 0) return { bar: 'bg-red-400', text: 'text-red-400' };
    return { bar: 'bg-gray-400', text: 'text-gray-400' };
  };

  return (
    <section id="calculator" className="py-16 px-4 bg-brand-dark border-b border-brand-border scrolling-mt-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-brand-border bg-white font-mono text-[10px] font-black text-brand-border uppercase tracking-widest shadow-[2px_2px_0px_#0a0a0a]">
            <RefreshCw className="w-3.5 h-3.5 text-brand-cyan animate-spin duration-10000" />
            <span>Quantitative Valuation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-brand-border uppercase italic leading-none">
            Black-Scholes Options & Greeks Tool
          </h2>
          <p className="text-brand-border/80 text-sm font-medium leading-relaxed">
            Experience the underlying risk mechanics of option derivatives. Use the sliders or strategy templates below to see real-time updates of option premiums and sensitivity coefficients.
          </p>
        </div>

        {/* Strategy Presets Bar */}
        <div className="flex flex-wrap items-center gap-3 justify-center mb-10">
          <span className="text-xs font-mono font-black text-brand-border/50 uppercase tracking-widest mr-2">Preset Templates:</span>
          {OPTION_STRATEGIES_TEMPLATES.map((strat, idx) => (
            <button
              key={idx}
              onClick={() => applyStrategyPreset(strat.name, strat.strategySetup)}
              className={`px-3.5 py-1.5 border-2 text-[11px] font-mono font-black uppercase tracking-wider transition-all cursor-pointer ${
                selectedPreset === strat.name
                  ? 'border-brand-border bg-[#0A0A0A] text-white shadow-[2px_2px_0px_rgba(0,0,0,0.15)]'
                  : 'border-brand-border/30 bg-white text-brand-border/80 hover:border-brand-border hover:bg-neutral-50'
              }`}
            >
              {strat.name}
            </button>
          ))}
          <button
            onClick={() => {
              setSelectedPreset('Custom');
              setParams({
                stockPrice: 100,
                strikePrice: 100,
                daysToExpiration: 30,
                volatility: 35,
                interestRate: 4.5,
                optionType: 'call'
              });
            }}
            className={`px-3.5 py-1.5 border-2 text-[11px] font-mono font-black uppercase tracking-wider transition-all cursor-pointer ${
              selectedPreset === 'Custom'
                ? 'border-brand-border bg-[#FAF9F6] text-brand-border shadow-[2px_2px_0px_#0A0A0A]'
                : 'border-brand-border/30 bg-white text-brand-border/60 hover:text-brand-border'
            }`}
          >
            Reset to ATM
          </button>
        </div>

        {/* Core Control Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Sliders (Size 5 on 12) */}
          <div className="lg:col-span-5 border-2 border-brand-border bg-white p-6 rounded-none shadow-[6px_6px_0px_#0A0A0A] space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-2.5 border-b-2 border-brand-border/80">
                <span className="text-xs font-mono font-black text-brand-border flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-brand-cyan" />
                  VALUATION PARAMETERS
                </span>
                <span className="text-[9px] font-mono uppercase bg-[#FAF9F6] border border-brand-border px-2 py-0.5 font-bold text-brand-border">
                  PRESET: {selectedPreset.toUpperCase()}
                </span>
              </div>

              {/* Call / Put Toggle */}
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-black text-brand-border/50 uppercase tracking-widest">Option Directionality</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleOptionTypeToggle('call')}
                    className={`py-2.5 rounded-none font-mono text-xs font-black tracking-widest uppercase transition-all border-2 cursor-pointer ${
                      params.optionType === 'call'
                        ? 'bg-[#047857] text-white border-brand-border shadow-[2px_2px_0px_#0a0a0a]'
                        : 'bg-white border-brand-border/30 text-brand-border/60 hover:border-brand-border'
                    }`}
                  >
                    LONG CALL (Bullish)
                  </button>
                  <button
                    onClick={() => handleOptionTypeToggle('put')}
                    className={`py-2.5 rounded-none font-mono text-xs font-black tracking-widest uppercase transition-all border-2 cursor-pointer ${
                      params.optionType === 'put'
                        ? 'bg-red-600 text-white border-brand-border shadow-[2px_2px_0px_#0a0a0a]'
                        : 'bg-white border-brand-border/30 text-brand-border/60 hover:border-brand-border'
                    }`}
                  >
                    LONG PUT (Bearish)
                  </button>
                </div>
              </div>

              {/* Slider 1: Stock Price */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span className="text-brand-border/75">Stock Price (S)</span>
                  <span className="text-brand-border font-black">${params.stockPrice.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="200"
                  step="0.5"
                  value={params.stockPrice}
                  onChange={(e) => handleSliderChange('stockPrice', parseFloat(e.target.value))}
                  className="w-full accent-[#0A0A0A] cursor-pointer bg-[#EAEAE9] rounded-none h-2"
                />
                <div className="flex justify-between text-[9px] text-brand-border/40 font-mono font-black">
                  <span>$50.0</span>
                  <span>$125.0</span>
                  <span>$200.0</span>
                </div>
              </div>

              {/* Slider 2: Strike Price */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span className="text-brand-border/75">Option Strike (K)</span>
                  <span className="text-brand-border font-black">${params.strikePrice.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="200"
                  step="0.5"
                  value={params.strikePrice}
                  onChange={(e) => handleSliderChange('strikePrice', parseFloat(e.target.value))}
                  className="w-full accent-[#0A0A0A] cursor-pointer bg-[#EAEAE9] rounded-none h-2"
                />
                <div className="flex justify-between text-[9px] text-brand-border/40 font-mono font-black">
                  <span>$50.0</span>
                  <span>$125.0</span>
                  <span>$200.0</span>
                </div>
              </div>

              {/* Slider 3: Expiry (Days) */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span className="text-brand-border/75">Days to Expiration (T)</span>
                  <span className="text-brand-border font-black">{params.daysToExpiration} days</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="365"
                  step="1"
                  value={params.daysToExpiration}
                  onChange={(e) => handleSliderChange('daysToExpiration', parseInt(e.target.value))}
                  className="w-full accent-[#0A0A0A] cursor-pointer bg-[#EAEAE9] rounded-none h-2"
                />
                <div className="flex justify-between text-[9px] text-brand-border/40 font-mono font-black">
                  <span>1 day</span>
                  <span>180 days</span>
                  <span>365 days</span>
                </div>
              </div>

              {/* Slider 4: Implied Volatility (%) */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span className="text-brand-border/75">Implied Volatility (σ)</span>
                  <span className="text-brand-border font-black">{params.volatility}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="1"
                  value={params.volatility}
                  onChange={(e) => handleSliderChange('volatility', parseFloat(e.target.value))}
                  className="w-full accent-[#0A0A0A] cursor-pointer bg-[#EAEAE9] rounded-none h-2"
                />
                <div className="flex justify-between text-[9px] text-brand-border/40 font-mono font-black">
                  <span>5% (Low)</span>
                  <span>75%</span>
                  <span>150% (High)</span>
                </div>
              </div>

              {/* Slider 5: Interest Rate (%) */}
              <div className="space-y-2.5">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span className="text-brand-border/75">Risk-Free Interest Rate (r)</span>
                  <span className="text-brand-border font-black">{params.interestRate.toFixed(2)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="12"
                  step="0.05"
                  value={params.interestRate}
                  onChange={(e) => handleSliderChange('interestRate', parseFloat(e.target.value))}
                  className="w-full accent-[#0A0A0A] cursor-pointer bg-[#EAEAE9] rounded-none h-2"
                />
                <div className="flex justify-between text-[9px] text-brand-border/40 font-mono font-black">
                  <span>0.00%</span>
                  <span>6.00%</span>
                  <span>12.00%</span>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-brand-border/60 border-t-2 border-brand-border bg-[#FAF9F6] -mx-6 -mb-6 p-4.5 flex items-center gap-2 font-black uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
              <span>BSM analytics calculated inside React state hook flow.</span>
            </div>
          </div>

          {/* Right Block: Output & Greeks Metrics (Size 7 on 12) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Theoretical premium panel */}
            <div className="border-2 border-brand-border bg-white p-6 rounded-none shadow-[6px_6px_0px_#0A0A0A] relative overflow-hidden flex flex-col justify-center">
              <p className="text-[10px] font-mono font-black uppercase text-brand-border/50 tracking-widest mb-1">
                THEORETICAL OPTION VALUE (PREMIUM)
              </p>
              
              <div className="flex items-baseline gap-2.5">
                <span className="text-4xl sm:text-5xl font-black font-mono text-brand-border">
                  ${greeks.price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })}
                </span>
                <span className="text-xs font-mono font-black text-brand-green uppercase">
                  / Contract Share
                </span>
              </div>
              
              <p className="text-xs text-brand-border/80 mt-3 font-semibold leading-relaxed">
                {params.optionType === 'call' ? 'Call option' : 'Put option'} contracts with strike price of ${params.strikePrice} are currently valued at <span className="text-brand-border font-black underline decoration-brand-green decoration-2">${(greeks.price * 100).toFixed(2)}</span> total premium per standard 100-share bundle in risk-neutral pricing conditions.
              </p>
            </div>

            {/* Grid of details for Delta, Gamma, Vega, Theta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Delta Card */}
              <div className="border-2 border-brand-border bg-white p-5 rounded-none shadow-[4px_4px_0px_#0A0A0A] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-brand-border font-black">Delta (Δ)</span>
                  <span className="text-[9px] font-mono font-black uppercase bg-[#FAF9F6] border border-brand-border px-1.5 py-0.5 rounded-none text-brand-green">EQUITY HEDGE</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-2xl font-black font-mono text-[#0A0A0A] leading-none">
                    {greeks.delta.toFixed(4)}
                  </p>
                  <p className="text-[9px] font-mono text-brand-border/40 font-black uppercase">
                    CORRELATION
                  </p>
                </div>
                {/* Visual bar meter for Delta */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[9px] text-brand-border/50 font-mono font-bold">
                    <span>{params.optionType === 'call' ? 'OTM (0)' : 'ITM (-1)'}</span>
                    <span>{params.optionType === 'call' ? 'ITM (1)' : 'OTM (0)'}</span>
                  </div>
                  <div className="h-2.5 w-full bg-[#EAEAE9] rounded-none border border-brand-border/20 overflow-hidden relative">
                    <div 
                      className={`h-full ${getDeltaColors(greeks.delta).bar} rounded-none border-r border-[#0A0A0A]`}
                      style={{ 
                        width: `${Math.abs(greeks.delta) * 100}%`,
                        marginLeft: params.optionType === 'put' ? `${(1 + greeks.delta) * 100}%` : '0%'
                      }}
                    />
                  </div>
                </div>
                <p className="text-[11px] text-brand-border/80 font-medium leading-relaxed">
                  Measures expected option price adjustment for a $1 increase in spot. Suggests holding <span className={`font-black ${getDeltaColors(greeks.delta).text}`}>{Math.abs(greeks.delta * 100).toFixed(1)} shares</span> for delta-neutral equity hedging.
                </p>
              </div>

              {/* Gamma Card */}
              <div className="border-2 border-brand-border bg-white p-5 rounded-none shadow-[4px_4px_0px_#0A0A0A] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-brand-border font-black">Gamma (Γ)</span>
                  <span className="text-[9px] font-mono font-black uppercase bg-[#FAF9F6] border border-brand-border px-1.5 py-0.5 rounded-none text-brand-cyan">ACCELERATION</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-2xl font-black font-mono text-[#0A0A0A] leading-none">
                    {greeks.gamma.toFixed(5)}
                  </p>
                  <p className="text-[9px] font-mono text-brand-border/40 font-black uppercase">
                    RESPONSIVENESS
                  </p>
                </div>
                <p className="text-[11px] text-brand-border/80 font-medium leading-relaxed">
                  Rate of change in Delta per $1 adjustment in stock price. Peer gamma peaks when option strikes are At-The-Money (${params.stockPrice.toFixed(0)}) and decays toward zero near expiration.
                </p>
              </div>

              {/* Vega Card */}
              <div className="border-2 border-brand-border bg-white p-5 rounded-none shadow-[4px_4px_0px_#0A0A0A] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-brand-border font-black">Vega (ν)</span>
                  <span className="text-[9px] font-mono font-black uppercase bg-[#FAF9F6] border border-brand-border px-1.5 py-0.5 rounded-none text-brand-cyan">VOLATILITY</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-2xl font-black font-mono text-[#0A0A0A] leading-none">
                    +${greeks.vega.toFixed(4)}
                  </p>
                  <p className="text-[9px] font-mono text-brand-border/40 font-black uppercase">
                    PER +1% IV SHIFT
                  </p>
                </div>
                <p className="text-[11px] text-brand-border/80 font-medium leading-relaxed">
                  Measures sensitivity of option premium to a 1% change in Implied Volatility. If IV increases from {params.volatility}% to {(params.volatility + 1)}%, option premium increases by <span className="text-brand-cyan font-black">${greeks.vega.toFixed(4)}</span>.
                </p>
              </div>

              {/* Theta Card */}
              <div className="border-2 border-brand-border bg-white p-5 rounded-none shadow-[4px_4px_0px_#0A0A0A] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-brand-border font-black">Theta (θ)</span>
                  <span className="text-[9px] font-mono font-black uppercase bg-[#FAF9F6] border border-brand-border px-1.5 py-0.5 rounded-none text-red-600">TIME DECAY</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <p className="text-2xl font-black font-mono text-red-600 leading-none">
                    {greeks.theta.toFixed(4)}
                  </p>
                  <p className="text-[9px] font-mono text-brand-border/40 font-black uppercase">
                    DAILY BLOOD LOSS
                  </p>
                </div>
                <p className="text-[11px] text-brand-border/80 font-medium leading-relaxed">
                  Expected change in option price for a 1-day decrease in expiration. Premium bleeds by <span className="text-red-500 font-bold">${Math.abs(greeks.theta).toFixed(4)}</span> daily while spot and implied volatility remain constant.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
