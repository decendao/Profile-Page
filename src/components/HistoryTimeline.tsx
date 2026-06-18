import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/resumeData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function HistoryTimeline() {
  return (
    <section id="career" className="py-16 px-4 bg-brand-dark border-b border-brand-border scrolling-mt-14">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-brand-border bg-white font-mono text-[10px] font-black text-brand-border uppercase tracking-widest shadow-[2px_2px_0px_#0a0a0a]">
            <Briefcase className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Profile Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-brand-border uppercase italic leading-none">
            Professional Experience & Bio
          </h2>
          <p className="text-brand-border/80 text-sm font-medium leading-relaxed">
            A comprehensive history of engineering robust option models, real-time risk trackers, and scalable B2B finance terminals.
          </p>
        </div>

        {/* Single Column Layout */}
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-8">
            <h3 className="font-mono text-xs font-black text-brand-border uppercase tracking-widest border-b-2 border-brand-border pb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green border border-brand-border" />
              PROFESSIONAL WORK HISTORY
            </h3>
 
            <div className="relative border-l-2 border-brand-border pl-6 space-y-8 ml-3">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline node dot */}
                  <div className="absolute -left-[32px] top-1 w-4.5 h-4.5 rounded-none bg-[#0A0A0A] border-2 border-brand-border group-hover:bg-brand-green transition-all flex items-center justify-center">
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
                      <div className="flex items-center gap-2 text-[9px] font-mono font-black uppercase text-brand-border flex-wrap">
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
 
          {/* Academic Background Row */}
          <div className="pt-6 border-t-2 border-brand-border/20">
            <div className="border-2 border-brand-border bg-white p-5 rounded-none shadow-[4px_4px_0px_#0a0a0a] space-y-2 max-w-2xl">
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
