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
  Flame 
} from 'lucide-react';
import { PERSONAL_INFO, CORE_EXPERTISE, THE_PITCH } from '../data/resumeData';

interface HeroProps {
  lang: 'en' | 'zh';
}

export default function Hero({ lang }: HeroProps) {
  // Helper to split paragraph returns dynamically
  const bioParagraphs = PERSONAL_INFO.about[lang].split('\n\n');

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
      
      <div className="max-w-4xl mx-auto space-y-12 relative text-left">
        
        {/* Profile Card Header */}
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
              {lang === 'en' ? 'PORTFOLIO MANAGER x INVESTMENT AGENT FDE.' : '投资经理X投资Agent FDE'}
            </h1>
            
            {/* Split Paragraph Bio rendering */}
            <div className="space-y-4 text-brand-border text-sm sm:text-base font-medium leading-relaxed max-w-3xl">
              {bioParagraphs.map((para, pIdx) => (
                <p key={pIdx} className="indent-0">
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl pt-2"
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
              <span>{lang === 'en' ? 'EVALUATE OPTIONS PRICER' : '设计评估期权计算器'}</span>
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

        {/* 1. Core Expertise Matrix Section */}
        <div className="pt-8 border-t-2 border-brand-border/10 space-y-6">
          <div className="space-y-1.5 col-span-3">
            <h2 className="font-mono text-xs font-black text-brand-border uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-cyan" />
              {lang === 'en' ? 'CORE CAPABILITIES MATRIX' : '核心能力研究矩阵 (Core Expertise)'}
            </h2>
            <p className="text-xs text-brand-border/60 font-medium">
              {lang === 'en' 
                ? 'Synthesizing derivatives pricing with production-grade AI infrastructure solutions.' 
                : '将深刻的买方深水博弈投研，深度整合进生产级 AI 软硬件与执行基建。'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_EXPERTISE.map((expertise) => (
              <div 
                key={expertise.id}
                className="p-5 border-2 border-brand-border bg-white rounded-none shadow-[4px_4px_0px_#0a0a0a] flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 border border-brand-border bg-neutral-50 flex items-center justify-center">
                      {getExpertiseIcon(expertise.id)}
                    </div>
                    <span className="font-mono text-[10px] font-black text-brand-border/40">
                      0{expertise.id} // SEC
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-black text-brand-border uppercase leading-tight tracking-tight">
                    {expertise.title[lang]}
                  </h3>
                  
                  {/* Dynamic split paragraphs inside the boxes */}
                  <p className="text-xs text-brand-border/80 font-medium font-sans leading-relaxed whitespace-pre-wrap">
                    {expertise.description[lang]}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brand-border/10 mt-4">
                  {expertise.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-1.5 py-0.5 bg-neutral-50 border border-brand-border/20 font-mono text-[9px] font-bold text-brand-border/50 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
                {lang === 'en' ? 'THE ULTIMATE PITCH' : '💡 凌鹏的终极宣告 (The Pitch)'}
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
