import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PricerWidget from './components/PricerWidget';
import SelectedProjects from './components/SelectedProjects';
import HistoryTimeline from './components/HistoryTimeline';
import ContactForm from './components/ContactForm';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Network, FileText, BarChart2, Undo, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from './data/resumeData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'bio' | 'pricer'>('bio');

  // Monitor hash changes so we can set active view if someone clicks dynamic links like href="#calculator"
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#calculator' || hash === '#pricer') {
        setActiveTab('pricer');
        // Scroll to top when switching to pricer page
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setActiveTab('bio');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tab: 'bio' | 'pricer') => {
    setActiveTab(tab);
    if (tab === 'pricer') {
      window.location.hash = '#calculator';
    } else {
      // Clear hash or set to hero
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-border font-sans flex flex-col selection:bg-brand-green/30 selection:text-[#0A0A0A]">
      
      {/* Sticky Modular Header */}
      <Header />

      {/* Main Container Layout */}
      <main className="flex-1">

        {/* View Switcher Ribbon */}
        <div className="bg-brand-dark border-b-2 border-brand-border py-4 px-4 sticky top-[53px] z-40 backdrop-blur-sm shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* View Toggles */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handleTabChange('bio')}
                className={`px-4 py-2 border-2 border-brand-border font-mono text-[10px] font-black uppercase transition-all flex items-center gap-2 ${
                  activeTab === 'bio' 
                    ? 'bg-[#0A0A0A] text-white shadow-[1px_1px_0px_#10B981]' 
                    : 'bg-white text-brand-border/80 shadow-[3px_3px_0px_#0A0A0A] hover:bg-[#FAF9F6] active:translate-y-0.5'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-brand-cyan" />
                <span>/01_BIO_PORTFOLIO</span>
              </button>

              <button 
                onClick={() => handleTabChange('pricer')}
                className={`px-4 py-2 border-2 border-brand-border font-mono text-[10px] font-black uppercase transition-all flex items-center gap-2 ${
                  activeTab === 'pricer' 
                    ? 'bg-[#0A0A0A] text-white shadow-[1px_1px_0px_#10B981]' 
                    : 'bg-white text-brand-border/80 shadow-[3px_3px_0px_#0A0A0A] hover:bg-[#FAF9F6] active:translate-y-0.5'
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5 text-brand-green" />
                <span>/02_OPTIONS_VALUATION</span>
              </button>
            </div>

            {/* Helper Message */}
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono font-bold text-brand-border/60 uppercase">
              {activeTab === 'bio' ? (
                <>
                  <span>Currently viewing Lead Bio</span>
                  <ArrowRight className="w-3 h-3 text-brand-cyan" />
                </>
              ) : (
                <>
                  <span>Dedicated Black-Scholes Terminal</span>
                  <ArrowRight className="w-3 h-3 text-brand-green" />
                </>
              )}
            </div>

          </div>
        </div>

        {/* View Layout Switcher */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'bio' ? (
              <motion.div
                key="bio-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {/* Hero Showcase Intro Section (with Quant Core removed) */}
                <Hero />

                {/* Selected Fintech Projects */}
                <SelectedProjects />

                {/* Work Career Timeline without skills maps */}
                <HistoryTimeline />

                {/* Secure contact form */}
                <ContactForm />
              </motion.div>
            ) : (
              <motion.div
                key="pricer-view"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="py-6"
              >
                {/* Back Button Panel */}
                <div className="max-w-7xl mx-auto px-4 mb-2">
                  <button
                    onClick={() => handleTabChange('bio')}
                    className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-border bg-white text-[10px] font-mono font-black uppercase text-brand-border/80 hover:bg-[#FAF9F6] transition-all shadow-[2px_2px_0px_#0A0A0A]"
                  >
                    <Undo className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>← Return to professional resume bio</span>
                  </button>
                </div>

                {/* Dedicated Black-Scholes Greeks Calculator Page */}
                <PricerWidget />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </main>

      {/* Premium Minimalist Footer */}
      <footer className="border-t-2 border-brand-border bg-brand-dark py-10 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-brand-border font-black tracking-widest uppercase">MARCO PORTFOLIO</span>
            <span className="text-[9px] text-brand-border/50 font-mono font-black uppercase">| Quantitative Terminal</span>
          </div>

          <div className="flex items-center gap-4 text-brand-border/60 font-mono text-[9px] font-black uppercase">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brand-green" />
              SECURE INTEGRITY
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Network className="w-3.5 h-3.5 text-brand-cyan" />
              SYSTEMS ACTIVE
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
