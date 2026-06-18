import { motion } from 'motion/react';
import { Github, ExternalLink, Cpu, Database, Network, TrendingUp } from 'lucide-react';
import { PROJECTS } from '../data/resumeData';

interface SelectedProjectsProps {
  lang: 'en' | 'zh';
}

export default function SelectedProjects({ lang }: SelectedProjectsProps) {
  // Map icons for display variety based on project titles/tags
  const getProjectIcon = (index: number) => {
    switch (index) {
      case 0:
        return <TrendingUp className="w-5 h-5 text-brand-green" />;
      case 1:
        return <Network className="w-5 h-5 text-brand-cyan" />;
      default:
        return <Database className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-brand-dark border-b border-brand-border scrolling-mt-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-brand-border bg-white font-mono text-[10px] font-black text-brand-border uppercase tracking-widest shadow-[2px_2px_0px_#0a0a0a]">
            <Cpu className="w-3.5 h-3.5 text-brand-green" />
            <span>{lang === 'en' ? 'FINTECH PORTFOLIO & WORK' : '衍生品与工具网关 (Portfolio)'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-brand-border uppercase italic leading-none">
            {lang === 'en' ? 'Selected Engineering Projects' : '特色金融量化项目'}
          </h2>
          <p className="text-brand-border/80 text-sm font-medium leading-relaxed">
            {lang === 'en' 
              ? 'A showcase of production-ready systems, risk visualization engines, and low-latency API integrations built to bridge complex financial mathematical models with responsive, high-performance interfaces.'
              : '以下是历年来部分特色衍生品监控与接口路由工程，结合了高精度 Black-Scholes 数学模型与低时延 WebSocket 传输。'}
          </p>
        </div>

        {/* Bento Grid Layout of Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 bg-white border-2 border-brand-border rounded-none shadow-[6px_6px_0px_#0A0A0A] flex flex-col justify-between hover:shadow-[8px_8px_0px_#0A0A0A] transition-all relative overflow-hidden group"
            >
              {/* Highlight background lines */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E0F2FE]/40 rounded-full blur-2xl pointer-events-none group-hover:bg-[#DCFCE7]/40 transition-colors duration-300" />
              
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 border border-brand-border bg-[#F5F5F3] flex items-center justify-center rounded-none shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
                      {getProjectIcon(idx)}
                    </div>
                    <div>
                      <h3 className="font-mono text-base font-black text-brand-border uppercase tracking-tight">
                        {project.title[lang]}
                      </h3>
                      <p className="text-[10px] text-brand-border/60 font-mono font-bold uppercase tracking-wider">
                        {project.subtitle[lang]}
                      </p>
                    </div>
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 border border-brand-border bg-white text-brand-border hover:bg-[#0A0A0A] hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,0.15)]"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-brand-border/80 font-medium leading-relaxed mb-6">
                  {project.description[lang]}
                </p>

                {/* Key Metrics Bento Cells */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {project.metrics.map((metric, midx) => (
                    <div 
                      key={midx} 
                      className="p-3 border border-brand-border/20 bg-[#FAF9F5] text-center"
                    >
                      <p className="text-[9px] font-mono font-black text-brand-border/40 uppercase tracking-widest leading-none mb-1">
                        {metric.label[lang]}
                      </p>
                      <p className="text-sm font-mono font-black text-brand-border">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action row */}
              <div className="pt-4 border-t border-brand-border/10 flex flex-wrap gap-1.5 items-center">
                {project.tags.map((tag, tidx) => (
                  <span
                    key={tidx}
                    className="px-2 py-0.5 border border-brand-border/20 bg-brand-border/5 text-[10px] font-mono text-brand-border/70 uppercase font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
