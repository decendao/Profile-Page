import { motion } from 'motion/react';
import { EXPERIENCES, SKILL_CATEGORIES } from '../data/resumeData';
import { Briefcase, MapPin, Calendar, Layers, Cpu, TrendingUp, HelpCircle } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

export default function HistoryTimeline() {
  
  // Custom helper to dynamically render Lucide Icons by name string
  const renderIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4 text-brand-green" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-brand-cyan" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <section id="career" className="py-16 px-4 bg-brand-dark border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-brand-border bg-white font-mono text-[10px] font-black text-brand-border uppercase tracking-widest shadow-[2px_2px_0px_#0a0a0a]">
            <Briefcase className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Profile Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-brand-border uppercase italic leading-none">
            Experience & Core Capabilities
          </h2>
          <p className="text-brand-border/80 text-sm font-medium leading-relaxed">
            Investigate deep-tier professional history modeling and technical proficiency maps across advanced fintech and frontend software engineering disciplines.
          </p>
        </div>

        {/* 2-Column Mesh Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Timeline Careers (Size 7 on 12) */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-mono text-xs font-black text-brand-border uppercase tracking-widest border-b-2 border-brand-border pb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green border border-brand-border" />
              PROFESSIONAL WORK HISTORY
            </h3>

            <div className="relative border-l-2 border-brand-border pl-6 space-y-8 ml-3">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline node dot */}
                  <div className="absolute -left-[32px] top-1 w-4.5 h-4.5 rounded-none bg-[#0A0A0A] border-2 border-brand-border group-hover:bg-[#047857] transition-all flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-none bg-white" />
                  </div>

                  <div className="space-y-3">
                    {/* Header line metadata */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <h4 className="text-base font-black text-brand-border hover:text-brand-green transition-all">
                          {exp.role}
                        </h4>
                        <p className="text-xs font-mono font-black text-brand-cyan uppercase tracking-wider">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-mono font-black uppercase text-brand-border">
                        <span className="flex items-center gap-1 border border-brand-border bg-[#FAF9F6] px-2 py-0.5 rounded-none shadow-[1.5px_1.5px_0px_#0A0A0A]">
                          <Calendar className="w-3 h-3 text-brand-green" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 border border-brand-border bg-[#FAF9F6] px-2 py-0.5 rounded-none shadow-[1.5px_1.5px_0px_#0A0A0A]">
                          <MapPin className="w-3 h-3 text-brand-cyan" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Paragraph list summaries */}
                    <ul className="space-y-1.5 pl-4 list-disc text-xs text-brand-border/80 font-medium leading-relaxed font-sans">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx} className="hover:text-brand-border transition-all">
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack badges list */}
                    <div className="flex flex-wrap gap-2 pt-1.5">
                      {exp.techStack.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2 py-0.5 bg-white border border-brand-border text-[9px] font-mono font-black text-brand-border uppercase shadow-[1.5px_1.5px_0px_#0a0a0a]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Skills Capabilities (Size 5 on 12) */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-mono text-xs font-black text-brand-border uppercase tracking-widest border-b-2 border-brand-border pb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan border border-brand-border" />
              CAPABILITY COEFFICIENT MAPS
            </h3>

            <div className="space-y-6">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="border-2 border-brand-border bg-white p-5 rounded-none shadow-[4px_4px_0px_#0A0A0A] space-y-4">
                  {/* Category Title */}
                  <div className="flex items-center gap-2 pb-2.5 border-b border-brand-border/60">
                    <div className="p-1 border border-brand-border bg-[#FAF9F6] rounded-none">
                      {renderIcon(cat.iconName)}
                    </div>
                    <h4 className="font-mono text-xs font-black uppercase text-brand-border">
                      {cat.title}
                    </h4>
                  </div>

                  {/* Skills lists */}
                  <div className="space-y-3.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-mono font-bold">
                          <span className="text-brand-border/90">{skill.name}</span>
                          <span className="text-brand-cyan font-black">{skill.score}%</span>
                        </div>
                        {/* Custom status track progress */}
                        <div className="h-2 w-full bg-[#EAEAE9] rounded-none border border-brand-border/20 overflow-hidden">
                          <div 
                            className="h-full bg-brand-green border-r border-[#0A0A0A] rounded-none"
                            style={{ width: `${skill.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

            {/* Quick Education Callout Box */}
            <div className="border-2 border-brand-border bg-white p-5 rounded-none shadow-[4px_4px_0px_#0a0a0a] space-y-2">
              <h4 className="font-mono text-[9px] uppercase text-brand-border/50 font-black tracking-widest">
                Academic Background / Qualifications
              </h4>
              <p className="text-sm font-black text-[#0A0A0A]">
                B.Sc. in Computer Science & Financial Engineering
              </p>
              <div className="flex justify-between text-xs text-brand-border/80 font-mono font-bold">
                <span>Nanyang Technological University</span>
                <span>Class of 2020</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
