import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Cpu, 
  Layers, 
  ChevronRight, 
  Terminal, 
  ArrowUpRight, 
  Quote, 
  ShieldCheck, 
  Zap, 
  Flame,
  Plus,
  Minus
} from 'lucide-react';
import { PERSONAL_INFO, CORE_EXPERTISE, THE_PITCH } from '../data/resumeData';

interface HeroProps {
  lang: 'en' | 'zh';
}

export default function Hero({ lang }: HeroProps) {
  // Helper to split paragraph returns dynamically
  const bioParagraphs = PERSONAL_INFO.about[lang].split('\n\n');

  // Interactive accordion state for core capabilities matrix
  const [expanded, setExpanded] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false,
  });

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Define relevant icons for capability boxes
  const getExpertiseIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Flame className="w-5 h-5 text-brand-green" />;
      case 2:
        return <Zap className="w-5 h-5 text-brand-cyan" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-brand-border" />;
    }
  };

  return (
    <section className="relative py-16 px-4 bg-brand-dark border-b-2 border-brand-border overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-60" />
      
      <div className="max-w-7xl mx-auto space-y-12 relative text-left">
        
        {/* Main Grid: Responsive column structure to reduce wide horizontal space emptiness */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (col-span-7 on desktop, full width on mobile) for Biography & Profile Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 border border-brand-border bg-white font-mono text-[9px] font-black uppercase tracking-widest text-[#0A0A0A] shadow-[2px_2px_0px_#0A0A0A]"
              >
                <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                <span>{PERSONAL_INFO.fullName.toUpperCase()}</span>
                <span>&bull;</span>
                <span>{lang === 'en' ? 'PORTFOLIO LOG' : '买方智能体系统'}</span>
              </motion.div>
              
              {/* Large display headline */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-brand-border leading-[0.95] uppercase italic">
                  {lang === 'en' ? 'PORTFOLIO MANAGER x INVESTMENT AGENT FDE.' : '投资经理 X 投资智能体 FDE'}
                </h1>
                
                {/* Biography paragraphs with clean text-justify and balanced sizes */}
                <div className="space-y-4 text-brand-border text-sm sm:text-base font-medium leading-relaxed max-w-3xl">
                  {bioParagraphs.map((para, pIdx) => (
                    <p key={pIdx} className="indent-0 text-justify">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Core Highlights Row */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
              >
                <div className="p-4 border-2 border-brand-border bg-white rounded-none shadow-[4px_4px_0px_#0A0A0A]">
                  <div className="flex items-center gap-1.5 text-brand-green mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[9px] font-mono font-black uppercase tracking-widest text-brand-border/60">
                      {lang === 'en' ? 'EXPERIENCE' : '交易年限'}
                    </span>
                  </div>
                  <p className="text-lg font-mono font-black tracking-tight text-brand-border">13 YRS</p>
                  <p className="text-[10px] text-brand-border/70 font-semibold mt-0.5">
                    {lang === 'en' ? 'Live US Equities Track' : '美股/衍生品买方沉淀'}
                  </p>
                </div>
                
                <div className="p-4 border-2 border-brand-border bg-white rounded-none shadow-[4px_4px_0px_#0A0A0A]">
                  <div className="flex items-center gap-1.5 text-brand-cyan mb-1">
                    <Cpu className="w-4 h-4" />
                    <span className="text-[9px] font-mono font-black uppercase tracking-widest text-brand-border/60">
                      {lang === 'en' ? 'PRECISION' : '波动率计算'}
                    </span>
                  </div>
                  <p className="text-lg font-mono font-black tracking-tight text-brand-border">100% Deterministic</p>
                  <p className="text-[10px] text-brand-border/70 font-semibold mt-0.5">
                    {lang === 'en' ? 'Black-Scholes Greeks' : 'P0 级硬编码免幻觉'}
                  </p>
                </div>
     
                <div className="p-4 border-2 border-brand-border bg-white rounded-none shadow-[4px_4px_0px_#0A0A0A]">
                  <div className="flex items-center gap-1.5 text-amber-600 mb-1">
                    <Layers className="w-4 h-4" />
                    <span className="text-[9px] font-mono font-black uppercase tracking-widest text-brand-border/60">
                      {lang === 'en' ? 'ARCHITECTURE' : '智能体系统'}
                    </span>
                  </div>
                  <p className="text-lg font-mono font-black tracking-tight text-brand-border">REMIX INTEGRATION</p>
                  <p className="text-[10px] text-brand-border/70 font-semibold mt-0.5">
                    {lang === 'en' ? 'Software 3.0 Ready' : '一键软继承热修复部署'}
                  </p>
                </div>
              </motion.div>

              {/* Action Trigger Rows */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
              >
                <a
                  href="#calculator"
                  className="px-6 py-4 rounded-none border-2 border-brand-border bg-[#0A0A0A] hover:bg-neutral-800 text-white font-mono font-black text-xs tracking-widest transition-all flex items-center justify-center gap-2.5 shadow-[4px_4px_0px_rgba(0,0,0,0.15)]"
                >
                  <span>{lang === 'en' ? 'MY OPTIONS PHILOSOPHY' : '我对期权的理解'}</span>
                  <ChevronRight className="w-4 h-4 text-brand-green" />
                </a>
                
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-none border-2 border-brand-border bg-white hover:bg-neutral-50 text-brand-border font-mono font-black text-xs tracking-widest transition-all flex items-center justify-center gap-2.5 shadow-[4px_4px_0px_#0A0A0A]"
                >
                  <Terminal className="w-4 h-4 text-brand-cyan" />
                  <span>{lang === 'en' ? 'EXPLORE REPOS' : '探索 GITHUB 架构'}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column (col-span-5 on desktop) containing Core Capability block */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-20">

            {/* Core Capabilities Matrix Card */}
            <div className="p-5 sm:p-6 border-2 border-brand-border bg-[#FBFBFA] rounded-none shadow-[6px_6px_0px_#0A0A0A] space-y-5">
              
              <div className="space-y-1.5 pb-3 border-b border-brand-border/10">
                <div className="flex items-center justify-between">
                  <h2 className="font-mono text-xs font-black text-brand-border uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-brand-cyan animate-pulse" />
                    {lang === 'en' ? 'CORE CAPABILITIES MATRIX' : '核心能力研究矩阵 (Core Expertise)'}
                  </h2>
                </div>
                <p className="text-[11px] text-brand-border/60 font-medium leading-normal">
                  {lang === 'en' 
                    ? 'Synthesizing professional buy-side derivatives pricing with production-grade AI agent systems.' 
                    : '将深刻的二级市场衍生品跟单与量化对冲逻辑，深度注入到生产级 AI 前端交互与中间件层。'}
                </p>
              </div>

              {/* Accordion / Collapsible Interactive Lists */}
              <div className="space-y-3">
                {CORE_EXPERTISE.map((expertise) => {
                  const id = expertise.id;
                  const isOpen = expanded[id];
                  return (
                    <div 
                      key={id}
                      className="border-2 border-brand-border bg-white transition-all overflow-hidden"
                    >
                      {/* Accordion Button Trigger Header */}
                      <button
                        onClick={() => toggleExpand(id)}
                        type="button"
                        className="w-full p-3.5 flex items-center justify-between gap-3 text-left font-mono hover:bg-neutral-50/80 transition-all font-black text-xs uppercase text-brand-border border-b border-brand-border/10 select-none cursor-pointer group"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="px-1 border border-brand-border/20 bg-neutral-50 text-brand-border/40 text-[9px] shrink-0 font-black">
                            0{id}
                          </span>
                          <span className="tracking-tight hover:text-brand-magenta transition-colors truncate text-[11px] sm:text-xs">
                            {expertise.title[lang]}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="hidden sm:inline text-[9px] text-brand-border/40 font-bold">
                            {isOpen ? '[ COLLAPSE ]' : '[ EXPAND ]'}
                          </span>
                          {isOpen ? (
                            <Minus className="w-3.5 h-3.5 text-brand-magenta shrink-0" />
                          ) : (
                            <Plus className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                          )}
                        </div>
                      </button>

                      {/* Expandable description body with smooth height transitions */}
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 space-y-3">
                          <div className="flex gap-2.5 items-start">
                            <div className="p-1.5 border border-brand-border bg-neutral-50 flex items-center justify-center shrink-0 w-8 h-8">
                              {getExpertiseIcon(id)}
                            </div>
                            <p className="text-xs text-brand-border/80 font-medium font-sans leading-relaxed whitespace-pre-wrap text-justify">
                              {expertise.description[lang]}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-brand-border/10">
                            {expertise.tags.map((tag, tagIdx) => (
                              <span 
                                key={tagIdx} 
                                className="px-1.5 py-0.5 bg-neutral-50 border border-brand-border/20 font-mono text-[9px] font-bold text-brand-border/50 uppercase tracking-tight"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

        {/* 2. The Pitch Ultimate Declaration Card */}
        <div className="relative pt-6 border-t-2 border-brand-border/10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 border-2 border-brand-border bg-[#FCFCFA] rounded-none shadow-[6px_6px_0px_#0a0a0a] space-y-6 relative overflow-hidden"
          >
            {/* Aesthetic Quote Accent */}
            <Quote className="absolute right-6 top-6 w-16 h-16 text-neutral-100 pointer-events-none" />

            <div className="space-y-1">
              <span className="font-mono text-[10px] font-black text-brand-cyan uppercase tracking-widest block">
                {lang === 'en' ? 'MY AGENT PHILOSOPHY' : '💡 我的Agent哲学'}
              </span>
              <p className="font-mono text-sm sm:text-[15px] font-black italic text-brand-border uppercase tracking-tight max-w-2xl leading-snug">
                "{THE_PITCH.quote[lang]}"
              </p>
            </div>

            <p className="text-xs text-brand-border/80 font-medium font-sans leading-relaxed max-w-3xl whitespace-pre-wrap border-t border-brand-border/10 pt-4">
              {THE_PITCH.content[lang]}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-[10px] text-brand-border/60 bg-[#F1F1ED]/50 px-4 py-2.5 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8">
              <span className="text-brand-green flex items-center gap-1.5 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse border border-brand-border" />
                {lang === 'en' ? 'HARNESS ACTIVE IN DEPLOYMENT' : 'AIME 算力与执行基建上线监测中'}
              </span>
              <span className="font-mono font-black text-[#0A0A0A]">
                {lang === 'en' ? 'GLOBAL FINANCIAL SEAS' : '二级公海造血系统安全运转'}
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
