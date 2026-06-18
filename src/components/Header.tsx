import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, ExternalLink, Calendar, MapPin, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export default function Header() {
  const [copied, setCopied] = useState(false);
  const [btcPrice, setBtcPrice] = useState(68452.40);
  const [ethPrice, setEthPrice] = useState(3512.90);
  const [greeksState, setGreeksState] = useState({ delta: 0.52, gamma: 0.012 });
  const [currentTime, setCurrentTime] = useState('');

  // Update timezone-based clock
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Singapore',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(new Date());
      setCurrentTime(formatted);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Soft random tick animations for market tickers
  useEffect(() => {
    const interval = setInterval(() => {
      setBtcPrice(prev => prev + (Math.random() - 0.49) * 12.0);
      setEthPrice(prev => prev + (Math.random() - 0.49) * 3.0);
      setGreeksState(prev => {
        const nextDelta = prev.delta + (Math.random() - 0.5) * 0.004;
        const nextGamma = prev.gamma + (Math.random() - 0.5) * 0.0001;
        return {
          delta: Math.min(Math.max(nextDelta, 0.45), 0.58),
          gamma: Math.min(Math.max(nextGamma, 0.010), 0.014)
        };
      });
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-dark/90 backdrop-blur-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Name and Title Identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-brand-border flex items-center justify-center font-mono font-bold text-white text-lg rounded-none shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
            M
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-mono text-base font-black tracking-tight text-brand-border leading-none">
                {PERSONAL_INFO.name.toUpperCase()}
              </h1>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[10px] font-mono text-brand-green font-bold uppercase tracking-widest hidden sm:inline">
                Agent Live
              </span>
            </div>
            <p className="text-[11px] text-brand-border/70 font-semibold uppercase tracking-wider">
              {PERSONAL_INFO.title}
            </p>
          </div>
        </div>

        {/* Live Market Simulation Ribbon */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] font-mono border-x border-brand-border px-6 py-1 text-brand-border/80">
          <div className="flex items-center gap-1.5">
            <span className="text-brand-border/50 font-bold uppercase">BTC/S:</span>
            <span className="text-brand-border font-black">${btcPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-brand-border/50 font-bold uppercase">ETH/S:</span>
            <span className="text-brand-border font-black">${ethPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-brand-border/50 font-bold uppercase">SYS_Δ:</span>
            <span className="text-brand-green font-black">+{greeksState.delta.toFixed(3)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-brand-border/50 font-bold uppercase">SYS_Γ:</span>
            <span className="text-brand-cyan font-black">{greeksState.gamma.toFixed(4)}</span>
          </div>
        </div>

        {/* Action Widgets, Clock, Contact Links */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Timeszone Widget */}
          <div className="flex items-center gap-1.5 text-brand-border font-mono text-[11px] bg-brand-card border border-brand-border px-2.5 py-1 rounded-none shadow-[2px_2px_0px_#0a0a0a]">
            <Calendar className="w-3.5 h-3.5 text-brand-cyan" />
            <span className="text-brand-border/60 font-bold">SGT:</span>
            <span className="text-brand-border font-black">{currentTime || '08:00:00'}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Github Button */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-none border border-brand-border bg-brand-card hover:bg-brand-border hover:text-white transition-all text-brand-border shadow-[2px_2px_0px_#0a0a0a]"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-none border border-brand-border bg-brand-card hover:bg-brand-border hover:text-white text-[11px] font-mono text-brand-border transition-all shadow-[2px_2px_0px_#0a0a0a]"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-brand-green animate-bounce" />
                  <span className="text-brand-green font-black">COPIED</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                  <span className="font-bold">{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
