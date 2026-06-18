import Header from './components/Header';
import Hero from './components/Hero';
import PricerWidget from './components/PricerWidget';
import AgentSpotlight from './components/AgentSpotlight';
import HistoryTimeline from './components/HistoryTimeline';
import ContactForm from './components/ContactForm';
import { motion } from 'motion/react';
import { Terminal, Shield, Sparkles, Network } from 'lucide-react';
import { PERSONAL_INFO } from './data/resumeData';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-border font-sans flex flex-col selection:bg-brand-green/30 selection:text-[#0A0A0A]">
      
      {/* Sticky Modular Header */}
      <Header />

      {/* Main Container Layout */}
      <main className="flex-1">
        
        {/* Hero Showcase Intro Section */}
        <Hero />

        {/* Dynamic Nav Anchor Pills */}
        <div className="bg-brand-dark/95 border-b-2 border-brand-border py-4 px-4 overflow-x-auto sticky top-[53px] z-40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start gap-4 text-xs font-mono">
            <span className="text-brand-border/50 font-black uppercase tracking-widest hidden sm:inline">QUICK ANCHORS:</span>
            <a 
              href="#calculator" 
              className="px-3.5 py-1.5 border-2 border-brand-border bg-white text-brand-border/80 text-[10px] font-mono font-black uppercase shadow-[2px_2px_0px_#0A0A0A] hover:bg-[#FAF9F6] active:translate-y-0.5 active:shadow-[1px_1px_0px_#0A0A0A] transition-all"
            >
              /01_GREEKS_CALCULATOR
            </a>
            <a 
              href="#spotlight" 
              className="px-3.5 py-1.5 border-2 border-brand-border bg-white text-brand-border/80 text-[10px] font-mono font-black uppercase shadow-[2px_2px_0px_#0A0A0A] hover:bg-[#FAF9F6] active:translate-y-0.5 active:shadow-[1px_1px_0px_#0A0A0A] transition-all"
            >
              /02_AGENT_SPOTLIGHT
            </a>
            <a 
              href="#career" 
              className="px-3.5 py-1.5 border-2 border-brand-border bg-white text-brand-border/80 text-[10px] font-mono font-black uppercase shadow-[2px_2px_0px_#0A0A0A] hover:bg-[#FAF9F6] active:translate-y-0.5 active:shadow-[1px_1px_0px_#0A0A0A] transition-all"
            >
              /03_RESUME_CREDENTIALS
            </a>
            <a 
              href="#contact" 
              className="px-3.5 py-1.5 border-2 border-brand-border bg-white text-brand-border/80 text-[10px] font-mono font-black uppercase shadow-[2px_2px_0px_#0A0A0A] hover:bg-[#FAF9F6] active:translate-y-0.5 active:shadow-[1px_1px_0px_#0A0A0A] transition-all"
            >
              /04_CONTACT_INBOX
            </a>
          </div>
        </div>

        {/* 1. Black Scholes Greeks Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <PricerWidget />
        </motion.div>

        {/* 2. Agent Spotlight Dashboard Sandbox */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <AgentSpotlight />
        </motion.div>

        {/* 3. Education Skills & Work Career Core */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <HistoryTimeline />
        </motion.div>

        {/* 4. Secure contact forum setup */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ContactForm />
        </motion.div>

      </main>

      {/* Premium Minimalist Footer */}
      <footer className="border-t-2 border-brand-border bg-brand-dark py-10 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-brand-border font-black tracking-widest uppercase">MARCO PORTFOLIO</span>
            <span className="text-[9px] text-brand-border/50 font-mono font-black uppercase">| Option Agent Panel</span>
          </div>

          <div className="flex items-center gap-4 text-brand-border/60 font-mono text-[9px] font-black uppercase">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brand-green" />
              SECURE INTEGRITY
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Network className="w-3.5 h-3.5 text-brand-cyan" />
              NODES ONLINE
            </span>
          </div>

          <p className="text-[9px] text-brand-border/50 font-mono font-black uppercase">
            &copy; 2026 Marco Lingpeng. Deployed via Vercel. Standard MIT license applies.
          </p>
        </div>
      </footer>

    </div>
  );
}
