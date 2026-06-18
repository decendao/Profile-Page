import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Send, Sparkles, CheckSquare, MessageSquare, PhoneCall, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    roleType: 'Full-time Quant',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Quick prompt templates recruiters can trigger to prepopulate message field
  const presetPrompts = [
    {
      label: "Interview Invite",
      text: "Hi Marco, we love your open-source Option-Agent-Dashboard-React setup. We would love to schedule a technical chat to discuss opportunities on our quantitative trading desk."
    },
    {
      label: "Consulting Gig",
      text: "Hi Marco, we require advisory support on building custom options pricing curves and risk dashboard layouts in React/TypeScript. Let's arrange a brief introductory call."
    },
    {
      label: "General Chat",
      text: "Hey Marco, I'm building derivatives pipelines too. Love your minimalist Swiss slate design; let's connect and trade ideas!"
    }
  ];

  const handleApplyPreset = (text: string) => {
    setFormData(prev => ({
      ...prev,
      message: text
    }));
  };

  const handleInputChange = (key: string, val: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: val
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Reset form variables
      setFormData({
        name: '',
        company: '',
        email: '',
        roleType: 'Full-time Quant',
        message: ''
      });
      
      // Clear success feedback banner after 5.5 seconds
      setTimeout(() => setSuccess(false), 5500);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-brand-dark border-b border-brand-border">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Personal Coordinates Details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-brand-border bg-white font-mono text-[10px] font-black text-brand-border uppercase tracking-widest shadow-[2px_2px_0px_#0a0a0a]">
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Secure Communications</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-black tracking-tighter text-brand-border uppercase italic leading-none">
                Initiate Contact
              </h3>
              
              <p className="text-brand-border/80 text-sm font-sans font-medium leading-relaxed">
                Have an inquiry about integrating quantitative options modeling, complex React setups, or autonomous AI agent networks? Send an encapsulated inbox message directly, or reach out via email.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-4">
              <div className="p-4 border-2 border-brand-border bg-white rounded-none flex items-center gap-4 shadow-[3px_3px_0px_#0A0A0A]">
                <div className="p-2 border border-brand-border bg-[#FAF9F6] text-[#047857]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-brand-border/50 uppercase tracking-widest font-black leading-none mb-1">Direct Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-black font-mono text-brand-border hover:text-brand-cyan hover:underline transition-all">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="p-4 border-2 border-brand-border bg-white rounded-none flex items-center gap-4 shadow-[3px_3px_0px_#0A0A0A]">
                <div className="p-2 border border-brand-border bg-[#FAF9F6] text-brand-cyan">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-brand-border/50 uppercase tracking-widest font-black leading-none mb-1">GitHub Space</p>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-sm font-black font-mono text-brand-border hover:text-brand-cyan hover:underline transition-all">
                    github.com/{PERSONAL_INFO.githubUsername}
                  </a>
                </div>
              </div>
            </div>

            <div className="text-[10px] text-brand-border/60 font-mono font-bold uppercase leading-relaxed">
              *All inbound requests are parsed by autonomous agents and integrated into active calendars. Expect rapid responses within 1 trading day.
            </div>
          </div>

          {/* Right Block: Inquiry Form Panel */}
          <div className="lg:col-span-7 border-2 border-brand-border bg-white p-6 rounded-none shadow-[6px_6px_0px_#0A0A0A] relative">
            
            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 z-10 bg-white/95 flex flex-col items-center justify-center p-6 text-center space-y-4 border-2 border-brand-border"
              >
                <div className="w-12 h-12 border-2 border-brand-border bg-[#EAEAE9] flex items-center justify-center text-[#047857] shadow-[2px_2px_0px_#0A0A0A]">
                  <CheckSquare className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-lg font-black text-brand-border uppercase italic">Inquiry Forwarded</h4>
                  <p className="text-xs text-brand-border/80 max-w-sm mx-auto font-sans font-semibold">
                    Thank you! Your message payload has been validated and queued for review. Marco will get in touch with you shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="px-4 py-1.5 border border-brand-border bg-[#FAF9F6] text-[10px] font-mono font-black uppercase text-brand-border hover:bg-neutral-50 cursor-pointer shadow-[2px_2px_0px_#0A0A0A]"
                >
                  Close Feedback Window
                </button>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 flex flex-col">
                  <label className="text-[9px] font-mono font-black text-brand-border/60 uppercase tracking-widest">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Elon Musk"
                    className="w-full bg-[#FAF9F6] border-2 border-brand-border/30 focus:border-brand-border outline-none text-xs text-brand-border px-3.5 py-2.5 rounded-none font-sans font-semibold tracking-wide"
                  />
                </div>
                <div className="space-y-1.5 flex flex-col">
                  <label className="text-[9px] font-mono font-black text-brand-border/60 uppercase tracking-widest">Firm / Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Apex Trading"
                    className="w-full bg-[#FAF9F6] border-2 border-brand-border/30 focus:border-brand-border outline-none text-xs text-brand-border px-3.5 py-2.5 rounded-none font-sans font-semibold tracking-wide"
                  />
                </div>
              </div>

              {/* Row 2: Email and Intent Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 flex flex-col">
                  <label className="text-[9px] font-mono font-black text-brand-border/60 uppercase tracking-widest">Contact Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="recruiter@capital.com"
                    className="w-full bg-[#FAF9F6] border-2 border-brand-border/30 focus:border-brand-border outline-none text-xs text-brand-border px-3.5 py-2.5 rounded-none font-mono font-semibold"
                  />
                </div>
                <div className="space-y-1.5 flex flex-col">
                  <label className="text-[9px] font-mono font-black text-brand-border/60 uppercase tracking-widest">Inquiry Category</label>
                  <select
                    value={formData.roleType}
                    onChange={(e) => handleInputChange('roleType', e.target.value)}
                    className="w-full bg-[#FAF9F6] border-2 border-brand-border/30 focus:border-brand-border outline-none text-xs text-brand-border px-3 py-2.5 rounded-none font-mono font-semibold"
                  >
                    <option value="Full-time Quant">Full-Time Quant Tech</option>
                    <option value="Advisory Consulting">Advisory Consulting</option>
                    <option value="Contract Build">Frontend Build Contract</option>
                    <option value="Networking Chat">General Networking Chat</option>
                  </select>
                </div>
              </div>

              {/* Prompt Presets Ribbon */}
              <div className="space-y-2 pt-0.5">
                <div className="flex items-center gap-1.5 text-brand-border/60 font-mono">
                  <MessageSquare className="w-3.5 h-3.5 text-brand-green" />
                  <span className="text-[9px] font-mono font-black uppercase tracking-widest">Templates (Click to fill):</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {presetPrompts.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleApplyPreset(preset.text)}
                      className="px-2.5 py-1 text-[10px] font-mono border-2 border-brand-border/20 bg-white text-brand-border/80 hover:text-brand-border hover:border-brand-border hover:bg-[#FAF9F6] rounded-none transition-all cursor-pointer"
                    >
                      +{preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Payload text */}
              <div className="space-y-1.5 pt-1 flex flex-col">
                <label className="text-[9px] font-mono font-black text-brand-border/60 uppercase tracking-widest">Message payload *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Draft your proposal here or select a template above..."
                  className="w-full bg-[#FAF9F6] border-2 border-brand-border/30 focus:border-brand-border outline-none text-xs text-brand-border p-3.5 rounded-none font-sans font-semibold leading-relaxed resize-none"
                />
              </div>

              {/* Action submission button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#0A0A0A] hover:bg-[#202020] text-white border-2 border-brand-border font-mono font-black text-xs tracking-widest uppercase transition-all shadow-[4px_4px_0px_#10B981] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>DELIVERING SECURE PACKET...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT DISPATCH PACKET</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
