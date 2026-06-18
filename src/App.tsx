import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PricerWidget from './components/PricerWidget';
import SelectedProjects from './components/SelectedProjects';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Network, FileText, BarChart2, Undo, ArrowRight, Mail, Github } from 'lucide-react';
import { PERSONAL_INFO } from './data/resumeData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'bio' | 'pricer'>('bio');
  const [lang, setLang] = useState<'en' | 'zh'>(() => {
    const saved = localStorage.getItem('marco_portfolio_lang');
    return (saved === 'zh' || saved === 'en') ? saved : 'zh';
  });

  // Persist language settings
  const handleLangChange = (newLang: 'en' | 'zh') => {
    setLang(newLang);
    localStorage.setItem('marco_portfolio_lang', newLang);
  };

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
      <Header lang={lang} onLangChange={handleLangChange} />

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
                <span>{lang === 'en' ? '/01_BIO_PORTFOLIO' : '/01_履历暨能力宣告'}</span>
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
                <span>{lang === 'en' ? '/02_OPTIONS_VALUATION' : '/02_期权希腊字母终端'}</span>
              </button>
            </div>

            {/* Helper Message */}
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono font-bold text-brand-border/60 uppercase">
              {activeTab === 'bio' ? (
                <>
                  <span>{lang === 'en' ? 'Currently viewing Lead Bio' : '正在浏览主买方投研履历'}</span>
                  <ArrowRight className="w-3 h-3 text-brand-cyan" />
                </>
              ) : (
                <>
                  <span>{lang === 'en' ? 'Dedicated Black-Scholes Terminal' : '进入专属独立 Black-Scholes 计算控制台'}</span>
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
                <Hero lang={lang} />

                {/* Selected Fintech Projects */}
                <SelectedProjects lang={lang} />

                {/* Minimalist Connect Section */}
                <section className="py-12 bg-brand-dark px-4 border-b border-brand-border">
                  <div className="max-w-xl mx-auto border-2 border-brand-border bg-white p-6 rounded-none shadow-[4px_4px_0px_#0A0A0A] space-y-4">
                    <h3 className="font-mono text-xs font-black text-brand-border uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                      {lang === 'en' ? 'CONNECT WITH ME' : '与我联系 (Connect with me)'}
                    </h3>
                    <p className="text-xs text-brand-border/80 font-medium font-sans leading-relaxed">
                      {lang === 'en'
                        ? 'Interested in quantum options algorithms, AI agents, or buy-side solutions? Let’s trade ideas or explore collaborations.'
                        : '对期权算法、金融智能体或买方解决方案感兴趣？欢迎直连邮箱或关注 GitHub，共同探讨深度合作空间。'}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-1">
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="inline-flex items-center gap-2 text-xs font-mono font-black text-brand-border hover:text-brand-green transition-all"
                      >
                        <Mail className="w-4 h-4 text-brand-green" />
                        <span>{PERSONAL_INFO.email}</span>
                      </a>
                      <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-black text-brand-border hover:text-brand-cyan transition-all"
                      >
                        <Github className="w-4 h-4 text-brand-cyan" />
                        <span>github.com/{PERSONAL_INFO.githubUsername}</span>
                      </a>
                    </div>
                  </div>
                </section>
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
                    <span>{lang === 'en' ? '← Return to professional resume bio' : '← 返回 Marco 买方履历与宣告'}</span>
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
            <span className="text-[9px] text-brand-border/50 font-mono font-black uppercase">{lang === 'en' ? '| Quantitative Terminal' : '| 智能体对冲终端'}</span>
          </div>

          <div className="flex items-center gap-4 text-brand-border/60 font-mono text-[9px] font-black uppercase">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-brand-green" />
              {lang === 'en' ? 'SECURE INTEGRITY' : '安全合规验证'}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Network className="w-3.5 h-3.5 text-brand-cyan" />
              {lang === 'en' ? 'SYSTEMS ACTIVE' : '金融公海系统已部署'}
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
