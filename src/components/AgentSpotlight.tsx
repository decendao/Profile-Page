import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Github, Star, Terminal, Play, CheckCircle2, ShieldAlert, BadgeInfo, Code, Cpu } from 'lucide-react';
import { PROJECTS, MOCK_AGENT_ACTIONS } from '../data/resumeData';
import { AgentAction } from '../types';

export default function AgentSpotlight() {
  const [activeActions, setActiveActions] = useState<AgentAction[]>(MOCK_AGENT_ACTIONS);
  const [selectedTask, setSelectedTask] = useState<string>('risk');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the mock terminal to the bottom when logs change
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeActions]);

  // Tasks the recruiter can order the Option Agent to perform
  const tasksList = [
    {
      id: 'risk',
      title: 'Analyze Option Chain Risks',
      prompt: 'Scanner: Scan BTC active 15d options chain and locate strikes with extreme implied volatility discrepancies relative to theoretical pricing.',
      logs: [
        { name: "Chain-Analyzer", type: "info", message: "Fetching active orderbooks from Deribit WebSocket stream..." },
        { name: "IV-Modeler", type: "analysis", message: "Calculated ATM Call IV: 42.1%. Strike $69,000 shows high volatility skew." },
        { name: "Greeks-Sentry", type: "risk", message: "Gamma concentrated at ATM strikes exceeds normal variance limits (+15%)." },
        { name: "Option-Agent", type: "analysis", message: "Action proposed: Buy Strike $68,000 Put + Sell Strike $70,000 Call to establish risk reversal strategy." }
      ]
    },
    {
      id: 'hedge',
      title: 'Trigger Delta-Neutral Hedging',
      prompt: 'Hedger: Verify current spot portfolio net Delta exposure and execute fractional spot hedge if delta exceeds +/-0.05 limit.',
      logs: [
        { name: "Portfolio-Monitor", type: "info", message: "Aggregating option positions: 15 Long Calls (Delta=+0.65), 10 Short Puts (Delta=+0.35)." },
        { name: "Risk-Engine", type: "risk", message: "Computed total portfolio net Delta: +0.48. Equity exposure limit breached." },
        { name: "Spot-Trader", type: "trade", message: "Routing Spot sell collateral order. Shifting spot exposure to achieve net Delta 0.00." },
        { name: "Option-Agent", type: "info", message: "Hedge confirmed. Spot portfolio holds perfect Delta-Neutral compliance (+0.002)." }
      ]
    },
    {
      id: 'arbitrage',
      title: 'Arbitrage Volatility Smiles',
      prompt: 'Arb-Agent: Locate inter-expiration calendar spread mispricings between Deribit and Paradigm and execute execution hedge.',
      logs: [
        { name: "Smile-Scanner", type: "analysis", message: "Comparing 7-day vs 30-day implied volatility curves." },
        { name: "Model-Scribe", type: "info", message: "Spotting curve displacement: 7-day IV has spiked to 55% due to news, while 30-day remains steady at 40%." },
        { name: "Yield-Optimize", type: "trade", message: "Selling overpriced 7-day near-dated options & buying cheap 30-day far-dated options." },
        { name: "Option-Agent", type: "analysis", message: "Calendar spread filled successfully. Captured relative volatility value of +2.1 vols." }
      ]
    }
  ];

  const handleOrderExecution = (taskId: string) => {
    setSelectedTask(taskId);
    setIsSimulating(true);
    setActiveActions([]);

    const task = tasksList.find(t => t.id === taskId);
    if (!task) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < task.logs.length) {
        const log = task.logs[index];
        const now = new Date();
        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        
        setActiveActions(prev => [
          ...prev, 
          {
            timestamp: timeStr,
            agentName: log.name,
            type: log.type as any,
            message: log.message
          }
        ]);
        index++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1100);
  };

  const projectInfo = PROJECTS[0]; // Spotlight project

  return (
    <section id="spotlight" className="py-16 px-4 border-b border-brand-border bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block: Repo metadata and description */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-brand-border bg-white text-[10px] font-mono font-black tracking-widest text-brand-border uppercase shadow-[2px_2px_0px_#0a0a0a]">
                <Github className="w-3.5 h-3.5" />
                <span>Featured Open Source Repository</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-black tracking-tighter text-brand-border uppercase italic leading-none">
                {projectInfo.title}
              </h3>
              
              <p className="text-brand-border/85 text-sm font-sans font-medium leading-relaxed">
                {projectInfo.description}
              </p>

              {/* GitHub Star Badge Widget */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <a
                  href={projectInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-brand-border bg-white text-[11px] font-mono font-black text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all shadow-[4px_4px_0px_#0A0A0A]"
                >
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span>STAR REPO ON GITHUB</span>
                </a>
                
                <span className="text-xs text-brand-border/60 font-mono font-bold">
                  Target: <span className="text-brand-cyan underline">decendao/Option-Agent</span>
                </span>
              </div>
            </div>

            {/* Performance Metrics Bento */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {projectInfo.metrics.map((m, idx) => (
                <div key={idx} className="p-4 border-2 border-brand-border bg-white rounded-none shadow-[4px_4px_0px_#0A0A0A]">
                  <p className="text-[9px] font-mono text-brand-border/50 uppercase tracking-widest font-black leading-none mb-1">{m.label}</p>
                  <p className="text-xl font-black font-mono text-brand-border leading-none">{m.value}</p>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-brand-border/85 font-sans font-bold border-t border-brand-border/30 pt-3.5 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-brand-cyan" />
              <span>Orchestrates multiple, specialized agent sub-modules asynchronously with real-time telemetries.</span>
            </div>
          </div>

          {/* Right Block: Live terminal sandbox (size 7 on 12) */}
          <div className="lg:col-span-7 border-2 border-brand-border bg-white rounded-none shadow-[8px_8px_0px_#0A0A0A] flex flex-col justify-between overflow-hidden">
            
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b-2 border-brand-border bg-[#F1F1ED] font-mono text-xs text-brand-border">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-green" />
                <span className="font-black uppercase tracking-wider text-[11px]">Option-Agent CLI Console</span>
              </div>
              <div className="flex items-center gap-2">
                {isSimulating ? (
                  <span className="flex items-center gap-1.5 text-[#047857] text-[10px] font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping border border-brand-border" />
                    STREAMING LOGS...
                  </span>
                ) : (
                  <span className="text-brand-border/40 text-[10px] font-bold uppercase">CONSOLE IDLE</span>
                )}
              </div>
            </div>

            {/* Action Directives selectors */}
            <div className="p-3 bg-[#FAF9F6] border-b-2 border-brand-border grid grid-cols-1 sm:grid-cols-3 gap-3">
              {tasksList.map((t) => (
                <button
                  key={t.id}
                  disabled={isSimulating}
                  onClick={() => handleOrderExecution(t.id)}
                  className={`px-3 py-2.5 rounded-none border-2 font-mono text-[10px] tracking-wide transition-all text-left flex items-center justify-between cursor-pointer ${
                    selectedTask === t.id
                      ? 'border-brand-border bg-white text-brand-border shadow-[2px_2px_0px_#0A0A0A]'
                      : 'border-brand-border/30 bg-white text-brand-border/60 hover:text-brand-border hover:border-brand-border/80'
                  }`}
                >
                  <div className="overflow-hidden truncate pr-1">
                    <p className="font-black text-brand-border leading-tight">{t.title}</p>
                    <p className="text-[8px] text-brand-border/40 uppercase font-black tracking-wider">Trigger thread</p>
                  </div>
                  <Play className="w-3.5 h-3.5 text-brand-cyan shrink-0 ml-1.5" />
                </button>
              ))}
            </div>

            {/* Terminal Screen Body */}
            <div className="p-5 flex-1 h-[270px] overflow-y-auto bg-[#FCFCF9] font-mono text-[11px] leading-relaxed space-y-4">
              {activeActions.length === 0 && (
                <div className="h-full flex items-center justify-center text-brand-border/40">
                  <p className="text-center font-bold">Initializing simulation thread... Select a thread above to load terminal telemetry.</p>
                </div>
              )}
              {activeActions.map((action, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  key={idx}
                  className="flex items-start gap-2 text-brand-border select-none"
                >
                  <span className="text-brand-border/40 shrink-0 font-bold">{action.timestamp}</span>
                  
                  {/* Styled solid badges */}
                  {action.type === 'trade' && <span className="bg-[#047857] text-white px-1.5 py-0.5 text-[8px] font-black shrink-0 border border-brand-border uppercase">ORDER</span>}
                  {action.type === 'risk' && <span className="bg-red-600 text-white px-1.5 py-0.5 text-[8px] font-black shrink-0 border border-brand-border uppercase">ALERT</span>}
                  {action.type === 'analysis' && <span className="bg-brand-cyan text-white px-1.5 py-0.5 text-[8px] font-black shrink-0 border border-brand-border uppercase">MODEL</span>}
                  {action.type === 'info' && <span className="bg-brand-border text-white px-1.5 py-0.5 text-[8px] font-black shrink-0 border border-brand-border uppercase">SYSTEM</span>}
 
                  <div>
                    <span className="text-[#0A0A0A] font-black mr-1.5">&#60;{action.agentName}&#62;:</span>
                    <span className="font-medium text-brand-border/90">{action.message}</span>
                  </div>
                </motion.div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Simulated Live Prompts */}
            <div className="p-3.5 bg-[#FAF9F6] border-t-2 border-brand-border text-[10px] font-mono text-brand-border/80 flex items-center gap-2">
              <span className="text-brand-cyan uppercase tracking-widest font-black">Latest Order:</span>
              <span className="italic overflow-hidden truncate font-medium">
                {tasksList.find(t => t.id === selectedTask)?.prompt || 'No orders queued.'}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
