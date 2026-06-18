import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, ExternalLink, Calendar, MapPin, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeaderProps {
  lang: 'en' | 'zh';
  onLangChange: (lang: 'en' | 'zh') => void;
}

export default function Header({ lang, onLangChange }: HeaderProps) {
  const [copied, setCopied] = useState(false);
  const [prices, setPrices] = useState({
    spy: 543.15,
    qqq: 479.80,
    vix: 14.12
  });
  const [currentTime, setCurrentTime] = useState('');

  // Fetch real-time prices from SGT yfinance API proxy
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch('/api/prices');
        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.spy === 'number') {
            setPrices({
              spy: data.spy,
              qqq: data.qqq,
              vix: data.vix
            });
          }
        }
      } catch (err) {
        console.error('Failed to fetch real-time market prices:', err);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 15000); // Polling every 15 seconds
    return () => clearInterval(interval);
  }, []);

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

  // Soft micro-fluctuations on the client side to keep tickers dynamic
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => ({
        spy: prev.spy + (Math.random() - 0.49) * 0.15,
        qqq: prev.qqq + (Math.random() - 0.49) * 0.12,
        vix: Math.max(5.0, prev.vix + (Math.random() - 0.5) * 0.04)
      }));
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
                Systems Active
              </span>
            </div>
            <p className="text-[11px] text-brand-border/70 font-semibold uppercase tracking-wider">
              {PERSONAL_INFO.title[lang]}
            </p>
          </div>
        </div>

        {/* Live Market Simulation Ribbon - SPY QQQ VIX Real-time info */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] font-mono border-x border-brand-border px-6 py-1 text-brand-border/80">
          <div className="flex items-center gap-1.5">
            <span className="text-brand-border/50 font-bold uppercase">SPY:</span>
            <span className="text-brand-border font-black">${prices.spy.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-brand-border/50 font-bold uppercase">QQQ:</span>
            <span className="text-brand-border font-black">${prices.qqq.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-brand-border/50 font-bold uppercase">VIX (σ):</span>
            <span className="text-brand-cyan font-black">{prices.vix.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%</span>
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

          {/* Bilingual Adaptive Switch */}
          <div className="flex border-2 border-brand-border bg-white rounded-none p-0.5 shadow-[2px_2px_0px_#0a0a0a]">
            <button
              onClick={() => onLangChange('zh')}
              className={`px-2 py-0.5 font-mono text-[10px] font-black tracking-widest uppercase transition-all ${
                lang === 'zh' ? 'bg-[#0A0A0A] text-white' : 'hover:bg-neutral-100 text-brand-border'
              }`}
            >
              中
            </button>
            <button
              onClick={() => onLangChange('en')}
              className={`px-2 py-0.5 font-mono text-[10px] font-black tracking-widest uppercase transition-all ${
                lang === 'en' ? 'bg-[#0A0A0A] text-white' : 'hover:bg-neutral-100 text-brand-border'
              }`}
            >
              EN
            </button>
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
