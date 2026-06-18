import { motion } from 'motion/react';
import { Terminal, ArrowUpRight, Cpu, Layers, TrendingUp, Sparkles, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 px-4 border-b border-brand-border bg-brand-dark">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-60" />
      
      <div className="max-w-4xl mx-auto space-y-8 relative py-8 text-center sm:text-left">
        
        {/* Profile Card Header */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-brand-border bg-white text-[11px] font-mono font-black tracking-widest text-[#0A0A0A] uppercase shadow-[2.5px_2.5px_0px_#0A0A0A]"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>QUANTITATIVE SYSTEMS & SOFTWARE ENGINEERING</span>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7.5xl font-black tracking-tighter text-brand-border leading-[0.88] uppercase italic">
              QUANT<br className="hidden sm:inline" /> SYSTEMS.
            </h1>
            <p className="text-brand-border text-base sm:text-lg max-w-2xl font-medium leading-relaxed mx-auto sm:mx-0">
              {PERSONAL_INFO.about}
            </p>
          </motion.div>
 
          {/* Quick Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl pt-1 mx-auto sm:mx-0"
          >
            <div className="p-4 border-2 border-brand-border bg-white rounded-none shadow-[4px_4px_0px_#0A0A0A] text-left">
              <div className="flex items-center gap-1 text-brand-green mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-[9px] font-mono font-black uppercase tracking-widest text-brand-border/60">EXPERIENCE</span>
              </div>
              <p className="text-2xl font-black font-mono text-brand-border leading-none">6+ YRS</p>
              <p className="text-[10px] text-brand-border/70 font-semibold mt-1">Quantitative Tech</p>
            </div>
            
            <div className="p-4 border-2 border-brand-border bg-white rounded-none shadow-[4px_4px_0px_#0A0A0A] text-left">
              <div className="flex items-center gap-1 text-brand-cyan mb-1">
                <Cpu className="w-4 h-4" />
                <span className="text-[9px] font-mono font-black uppercase tracking-widest text-brand-border/60">PRECISION</span>
              </div>
              <p className="text-2xl font-black font-mono text-brand-border leading-none">98.7%</p>
              <p className="text-[10px] text-brand-border/70 font-semibold mt-1">Pricing Accuracy</p>
            </div>
 
            <div className="p-4 border-2 border-brand-border bg-white rounded-none shadow-[4px_4px_0px_#0A0A0A] text-left">
              <div className="flex items-center gap-1 text-amber-600 mb-1">
                <Layers className="w-4 h-4" />
                <span className="text-[9px] font-mono font-black uppercase tracking-widest text-brand-border/60">ARCHITECTURE</span>
              </div>
              <p className="text-2xl font-black font-mono text-brand-border leading-none">ESNext</p>
              <p className="text-[10px] text-brand-border/70 font-semibold mt-1">TypeScript Core</p>
            </div>
          </motion.div>
  
          {/* Action Button Triggers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-4 pt-3"
          >
            <a
              href="#calculator"
              className="px-6 py-4 rounded-none bg-[#0A0A0A] hover:bg-[#202020] text-white font-mono font-black text-xs tracking-widest transition-all flex items-center justify-center gap-2.5 shadow-[4px_4px_0px_#10B981]"
            >
              <span>EVALUATE OPTIONS PRICER</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            
            <a
              href="https://github.com/decendao"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-none border-2 border-brand-border bg-white hover:bg-neutral-50 text-brand-border font-mono font-black text-xs tracking-widest transition-all flex items-center justify-center gap-2.5 shadow-[4px_4px_0px_#0A0A0A]"
            >
              <Terminal className="w-4 h-4 text-brand-cyan" />
              <span>EXPLORE REPOS</span>
              <ArrowUpRight className="w-4 h-4 text-gray-500" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
