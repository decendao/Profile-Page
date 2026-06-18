import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Check, Copy, RefreshCw, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'zh';
}

export default function EmailModal({ isOpen, onClose, lang }: EmailModalProps) {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  const handlePresetMsg = (text: string) => {
    setFormData(prev => ({
      ...prev,
      message: text,
      subject: lang === 'en' ? 'Inquiry from Portfolio' : '来自量化对冲终端的联络探讨'
    }));
  };

  const presetMessages = [
    {
      label: lang === 'en' ? 'Full-Time Position' : '全职岗位沟通',
      text: lang === 'en'
        ? "Hi Marco, we love your quantitative options terminal and buy-side background. We'd like to schedule an technical call."
        : "凌鹏您好，我们对您的期权量化对冲交易工具及 13 年买方自营经验非常感兴趣，希望约时间进行一次技术深度交流。"
    },
    {
      label: lang === 'en' ? 'Consulting Advisory' : '投研顾问合作',
      text: lang === 'en'
        ? "Hi Marco, we require advisory support on options curves modeling or Financial Agent layout optimization."
        : "凌鹏您好，我们对您提到的 Gamma 风险穿透及金融 Agent 生产级架构感兴趣，希望邀请您作为我们团队的技术/期权顾问。"
    }
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-xs"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-lg bg-white border-2 border-brand-border rounded-none shadow-[6px_6px_0px_#0A0A0A] p-6 space-y-6 overflow-hidden z-10"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b-2 border-brand-border pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-green" />
                <h4 className="font-mono text-xs font-black tracking-widest text-brand-border uppercase">
                  {lang === 'en' ? 'TRANSMIT SECURE PACKET' : '发送端到端合作探讨报文'}
                </h4>
              </div>
              <button
                onClick={onClose}
                className="p-1 border border-brand-border bg-[#FAF9F6] text-brand-border hover:bg-[#0A0A0A] hover:text-white transition-all shadow-[1.5px_1.5px_0px_#0A0A0A]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Layout */}
            {success ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="inline-flex w-12 h-12 border-2 border-brand-border bg-brand-green/10 text-brand-green items-center justify-center shadow-[2px_2px_0px_#0A0A0A]">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-black text-brand-border uppercase tracking-tight">
                    {lang === 'en' ? 'PAYLOAD DISPATCHED SUCCESSFULLY' : '邮件载荷已安全发送'}
                  </h5>
                  <p className="text-xs text-brand-border/70 max-w-sm mx-auto mt-1 font-semibold leading-relaxed">
                    {lang === 'en'
                      ? 'Thank you! Your inquiry packet has been received. Expect a response within 1 trading day.'
                      : '合作意向已打包装箱并写入发件队列，凌鹏会在 1 个交易日内为您处理回复。'}
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Fast Action Email Copy Box */}
                <div className="flex items-center justify-between bg-neutral-50 border border-brand-border/30 p-2 text-xs font-mono">
                  <span className="text-brand-border/60">
                    {lang === 'en' ? 'Direct Address:' : '直接发至邮箱:'}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-black text-brand-border">{PERSONAL_INFO.email}</span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="p-1 border border-brand-border bg-white text-brand-border hover:bg-neutral-100 transition-all shadow-[1px_1px_0px_#0a0a0a] flex items-center gap-1 text-[10px] uppercase font-black"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-brand-green" />
                          <span>COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-brand-cyan" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono font-black text-brand-border/60 uppercase tracking-widest block">
                      {lang === 'en' ? 'Your Name *' : '称呼/姓名 *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David"
                      className="w-full bg-[#FAF9F6] border border-brand-border/40 focus:border-brand-border outline-none text-xs text-brand-border px-3 py-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono font-black text-brand-border/60 uppercase tracking-widest block">
                      {lang === 'en' ? 'Email *' : '联络邮箱 *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="recruiter@capital.com"
                      className="w-full bg-[#FAF9F6] border border-brand-border/40 focus:border-brand-border outline-none text-xs text-brand-border px-3 py-2 font-mono"
                    />
                  </div>
                </div>

                {/* Quick select buttons */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[9px] font-mono font-black text-brand-border/60 uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand-green" />
                    {lang === 'en' ? 'Fast Templates:' : '一键填充意向便笺:'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {presetMessages.map((msg, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handlePresetMsg(msg.text)}
                        className="px-2 py-0.5 text-[10px] font-mono border border-brand-border/20 bg-[#FAF9F6] text-brand-border/80 hover:bg-white hover:border-brand-border hover:text-brand-border transition-all cursor-pointer"
                      >
                        +{msg.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-mono font-black text-brand-border/60 uppercase tracking-widest block">
                    {lang === 'en' ? 'Proposal message *' : '描述载荷与诉求 *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'en' ? 'Write details or click a fast template above...' : '在此处书写合作细节，或在上边一键加载快捷预设便签...'}
                    className="w-full bg-[#FAF9F6] border border-brand-border/40 focus:border-brand-border outline-none text-xs text-brand-border p-3 resize-none leading-relaxed"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#0A0A0A] text-white border border-brand-border font-mono font-black text-xs tracking-widest uppercase hover:bg-neutral-800 transition-all shadow-[3.5px_3.5px_0px_#10B981] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-brand-green" />
                      <span>{lang === 'en' ? 'DISPATCHING PACKET...' : '端到端隔离发送中...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-brand-cyan" />
                      <span>{lang === 'en' ? 'TRANSMIT PACKET' : '安全传送意向'}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
