import { motion } from 'motion/react';
import { Terminal, ArrowUpRight, Cpu, Layers, TrendingUp, Sparkles, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 px-4 border-b border-brand-border bg-brand-dark">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-60" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
        
        {/* Left Hand: Identity and Callout */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-brand-border bg-white text-[11px] font-mono font-black tracking-widest text-[#0A0A0A] uppercase shadow-[2.5px_2.5px_0px_#0A0A0A]"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>AGENTIC DERIVATIVES & SYSTEMS DESIGN</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7.5xl font-black tracking-tighter text-brand-border leading-[0.88] uppercase italic">
              OPTION<br />AGENTS.
            </h1>
            <p className="text-brand-border text-base sm:text-lg max-w-xl font-medium leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
          </motion.div>

          {/* Quick Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4 max-w-lg pt-1"
          >
            <div className="p-4 border-2 border-brand-border bg-white rounded-none shadow-[4px_4px_0px_#0A0A0A]">
              <div className="flex items-center gap-1 text-brand-green mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-[9px] font-mono font-black uppercase tracking-widest text-brand-border/60">SYSTEMS</span>
              </div>
              <p className="text-2xl font-black font-mono text-brand-border leading-none">6+ YRS</p>
              <p className="text-[10px] text-brand-border/70 font-semibold mt-1">Quantitative Tech</p>
            </div>
            
            <div className="p-4 border-2 border-brand-border bg-white rounded-none shadow-[4px_4px_0px_#0A0A0A]">
              <div className="flex items-center gap-1 text-brand-cyan mb-1">
                <Cpu className="w-4 h-4" />
                <span className="text-[9px] font-mono font-black uppercase tracking-widest text-brand-border/60">ACCURACY</span>
              </div>
              <p className="text-2xl font-black font-mono text-brand-border leading-none">94% FIT</p>
              <p className="text-[10px] text-brand-border/70 font-semibold mt-1">Pricing Model</p>
            </div>

            <div className="p-4 border-2 border-brand-border bg-white rounded-none shadow-[4px_4px_0px_#0A0A0A]">
              <div className="flex items-center gap-1 text-amber-600 mb-1">
                <Layers className="w-4 h-4" />
                <span className="text-[9px] font-mono font-black uppercase tracking-widest text-brand-border/60">ENGINE</span>
              </div>
              <p className="text-2xl font-black font-mono text-brand-border leading-none">V19.0</p>
              <p className="text-[10px] text-brand-border/70 font-semibold mt-1">TypeScript Core</p>
            </div>
          </motion.div>

          {/* Action Button Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3"
          >
            <a
              href="#calculator"
              className="px-6 py-4 rounded-none bg-[#0A0A0A] hover:bg-[#202020] text-white font-mono font-black text-xs tracking-widest transition-all flex items-center justify-center gap-2.5 shadow-[4px_4px_0px_#10B981]"
            >
              <span>RUN GREEKS SIMULATOR</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            
            <a
              href="https://github.com/decendao/Option-Agent-Dashboard-React"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-none border-2 border-brand-border bg-white hover:bg-neutral-50 text-brand-border font-mono font-black text-xs tracking-widest transition-all flex items-center justify-center gap-2.5 shadow-[4px_4px_0px_#0A0A0A]"
            >
              <Terminal className="w-4 h-4 text-brand-cyan" />
              <span>EXPLORE DASHBOARD REPO</span>
              <ArrowUpRight className="w-4 h-4 text-gray-500" />
            </a>
          </motion.div>
        </div>

        {/* Right Hand: Visual Interactive Dashboard Code & Payoff Simulation */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full border-2 border-brand-border bg-white rounded-none shadow-[8px_8px_0px_#0A0A0A] overflow-hidden font-mono text-xs"
          >
            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b-2 border-brand-border bg-[#F1F1ED]">
              <div className="flex gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500 border border-brand-border inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 border border-brand-border inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-500 border border-brand-border inline-block" />
              </div>
              <span className="text-[10px] text-brand-border font-black">option_agent_orchestrator.ts</span>
              <div className="w-8" />
            </div>

            {/* Code Body - Highly readable paper styling */}
            <div className="p-5 space-y-3.5 overflow-x-auto text-[11px] leading-relaxed text-[#1E293B] bg-[#FCFCF9]">
              <div>
                <span className="text-indigo-600 font-bold">import</span> {'{ GoogleGenAI }'} <span className="text-indigo-600 font-bold">from</span> <span className="text-emerald-700">"@google/genai"</span>;
              </div>
              <div>
                <span className="text-indigo-600 font-bold">import</span> {'{ calculateGreeks }'} <span className="text-indigo-600 font-bold">from</span> <span className="text-emerald-700">"./utils/pricing"</span>;
              </div>
              
              <div className="pt-1.5 text-gray-500 italic">
                // Initialize Black-Scholes-Merton options pricer
              </div>
              <div>
                <span className="text-pink-600 font-bold">const</span> <span className="text-blue-700">envParams</span> = {'{'}
                <div className="pl-4">
                  underlying: <span className="text-emerald-700">"BTC-USD"</span>,
                  spotPrice: <span className="text-emerald-700 font-semibold">68452.40</span>,
                  strikePrice: <span className="text-emerald-700 font-semibold">70000.00</span>,
                  daysToExpiration: <span className="text-emerald-700 font-semibold">30</span>
                </div>
                {'};'}
              </div>

              <div>
                <span className="text-indigo-600 font-bold">async function</span> <span className="text-amber-700 font-bold">hedgeDelta</span>() {'{'}
                <div className="pl-4 space-y-1">
                  <div>
                    <span className="text-pink-600 font-bold">const</span> Greeks = <span className="text-amber-700 font-bold">calculateGreeks</span>(envParams);
                  </div>
                  <div>
                    <span className="text-indigo-600 font-bold">if</span> (Math.<span className="text-amber-700">abs</span>(Greeks.delta) &gt; <span className="text-emerald-700 font-semibold">0.05</span>) {'{'}
                  </div>
                  <div className="pl-4 text-emerald-700 font-semibold">
                    await Agent.executeSpotHedge(Greeks.delta);
                  </div>
                  <div>{'}'}</div>
                </div>
                {'}'}
              </div>

              <div className="border-t-2 border-brand-border pt-3.5 flex items-center justify-between text-[10px] text-brand-border/60 bg-[#F1F1ED]/50 -mx-5 -mb-5 px-5 py-2.5">
                <span className="text-[#047857] flex items-center gap-1.5 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse border border-brand-border" />
                  ORCHESTRATOR ONLINE
                </span>
                <span className="font-bold">SYSTEM BUILD COMPLETED</span>
              </div>
            </div>
          </motion.div>
          
          {/* Super cool overlay tag */}
          <div className="absolute -bottom-4 right-4 bg-[#0A0A0A] border-2 border-brand-border px-3.5 py-2 rounded-none flex items-center gap-2 shadow-[2px_2px_0px_rgba(0,0,0,0.15)]">
            <Layers className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="font-mono text-[10px] text-white font-black tracking-widest uppercase">OPTION ENGINE V19.0.1</span>
          </div>
        </div>

      </div>
    </section>
  );
}
