import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Cpu, Database, Network, TrendingUp, Plus, Minus, BookOpen } from 'lucide-react';
import { PROJECTS } from '../data/resumeData';

interface SelectedProjectsProps {
  lang: 'en' | 'zh';
}

export default function SelectedProjects({ lang }: SelectedProjectsProps) {
  // Track open/collapsed state of projects (by default, both collapsed to save massive vertical space)
  const [expanded, setExpanded] = useState<Record<number, boolean>>({
    0: false,
    1: false,
  });

  const toggleProject = (idx: number) => {
    setExpanded((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0:
        return <TrendingUp className="w-4 h-4 text-brand-green" />;
      case 1:
        return <Network className="w-4 h-4 text-brand-cyan" />;
      default:
        return <Database className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section id="projects" className="py-10 px-4 bg-brand-dark border-b border-brand-border scrolling-mt-14 animate-fade-in">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Title Block - Unified & Tightened */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-brand-border/10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-brand-border bg-white font-mono text-[9px] font-black text-brand-border uppercase tracking-widest shadow-[2px_2px_0px_#0a0a0a]">
              <Cpu className="w-3 h-3 text-brand-green" />
              <span>{lang === 'en' ? 'PORTFOLIO GATEWAY' : '衍生品与工具网关'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter text-brand-border uppercase italic">
              {lang === 'en' ? 'SELECTED FINTECH DEV' : '特色期权量化工具'}
            </h2>
            <p className="text-[11px] text-brand-border/60 font-medium">
              {lang === 'en' 
                ? 'Production-ready risk visualization engines & low-latency API wrappers.' 
                : '结合 100% 确定性 Black-Scholes 数学模型与低时延通道套利架构。'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setExpanded({ 0: true, 1: true })}
              className="px-2 py-1 border border-brand-border bg-white hover:bg-neutral-50 text-[10px] font-mono font-black text-brand-border/80 uppercase shadow-[2px_2px_0px_#0A0A0A] cursor-pointer"
            >
              [ {lang === 'en' ? 'EXPAND ALL' : '展开全部'} ]
            </button>
            <button
              onClick={() => setExpanded({ 0: false, 1: false })}
              className="px-2 py-1 border border-brand-border bg-white hover:bg-neutral-50 text-[10px] font-mono font-black text-brand-border/80 uppercase shadow-[2px_2px_0px_#0A0A0A] cursor-pointer"
            >
              [ {lang === 'en' ? 'COLLAPSE ALL' : '折叠全部'} ]
            </button>
          </div>
        </div>

        {/* Side-by-Side Grid Layout - Responsive 2-column or 1-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {PROJECTS.map((project, idx) => {
            const isOpen = expanded[idx];
            return (
              <div
                key={idx}
                className="bg-white border-2 border-brand-border rounded-none shadow-[4px_4px_0px_#0A0A0A] hover:shadow-[6px_6px_0px_#0A0A0A] transition-all relative overflow-hidden flex flex-col justify-between"
              >
                {/* Header Container */}
                <div className="p-4 sm:p-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 border border-brand-border bg-[#FAF9F5] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,0.05)]">
                        {getProjectIcon(idx)}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-mono text-sm font-black text-brand-border uppercase tracking-tight truncate">
                          {project.title[lang]}
                        </h3>
                        <p className="text-[9px] text-[#0A0A0A]/50 font-mono font-bold uppercase tracking-wider truncate">
                          {project.subtitle[lang]}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {project.playbookUrl && (
                        <a
                          href={project.playbookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 border border-brand-border bg-white text-brand-green hover:bg-brand-green hover:text-white transition-all shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.1)] shrink-0 flex items-center justify-center"
                          title="View Playbook Strategy"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 border border-brand-border bg-white text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.1)] shrink-0 flex items-center justify-center"
                          title="View Source Code"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      
                      {/* Collapse toggle icon */}
                      <button
                        onClick={() => toggleProject(idx)}
                        className="p-1 border border-brand-border bg-[#FBFBFA] hover:bg-neutral-100 transition-all shadow-[1.5px_1.5px_0px_rgba(0,0,0,0.15)] cursor-pointer flex items-center justify-center"
                      >
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 text-brand-magenta" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 text-brand-green" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Summary showing when closed to make it clean */}
                  {!isOpen && (
                    <p className="text-[11px] text-brand-border/75 font-medium font-sans leading-relaxed truncate">
                      {project.description[lang].split('.')[0]}.
                    </p>
                  )}

                  {/* Collapsible Detail Container using Framer Motion */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 space-y-4 border-t border-brand-border/10 mt-1">
                      {/* Full description */}
                      <p className="text-xs text-[#0a0a0a]/80 font-medium font-sans leading-relaxed text-justify">
                        {project.description[lang]}
                      </p>

                      {/* Explicit Playbook Button wrapper if URL is present */}
                      {project.playbookUrl && (
                        <div className="pt-1">
                          <a
                            href={project.playbookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[#0A0A0A] bg-[#0A0A0A] hover:bg-neutral-800 text-white font-mono text-[10px] font-black uppercase tracking-wider shadow-[3px_3px_0px_#22c55e] transition-all cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-brand-green" />
                            <span>{lang === 'en' ? 'LAUNCH PLAYBOOK BRIEF' : '启动 PLAYBOOK 决策手册'}</span>
                          </a>
                        </div>
                      )}

                      {/* Micro-Metrics Grid (Side-by-Side Cells) */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {project.metrics.map((metric, midx) => (
                          <div 
                            key={midx} 
                            className="p-2 border border-brand-border/20 bg-[#FAF9F5]/75 text-center"
                          >
                            <p className="text-[8px] font-mono font-black text-[#0A0A0A]/40 uppercase tracking-wider leading-none mb-0.5">
                              {metric.label[lang]}
                            </p>
                            <p className="text-xs font-mono font-black text-brand-border">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom tech-stack bar, always visible but slim */}
                <div className="bg-[#FAF9F5]/60 hover:bg-[#FAF9F5] transition-colors border-t border-brand-border/10 px-4 py-2 flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="px-1.5 py-0.5 border border-brand-border/10 bg-white text-[8.5px] font-mono text-brand-border/60 uppercase font-black tracking-tight"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[8px] font-mono font-black text-brand-border/30 px-1 py-0.5">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => toggleProject(idx)}
                    className="font-mono text-[9px] font-black text-brand-border hover:text-brand-cyan uppercase pb-0.5 border-b border-dashed border-brand-border"
                  >
                    {isOpen ? '[ SHIELD SPECS ]' : '[ ATTACH INFO ]'}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
