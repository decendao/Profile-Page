import { useState, useRef, ChangeEvent, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Image as ImageIcon, 
  Plus, 
  Minus, 
  UploadCloud, 
  Trash2 
} from 'lucide-react';

interface StrategyGalleryProps {
  lang: 'en' | 'zh';
}

interface GalleryItem {
  id: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  imageUrl: string;
}

const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: { en: 'MSTR Gamma Concentration', zh: 'MSTR 盘内 Gamma 墙压制分布图' },
    description: { en: 'In-play short gamma cluster thresholds and target hedging boundaries.', zh: '日内做市商 Short Gamma 集中极值点与关键对冲阈值阻力位。' },
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'g2',
    title: { en: 'Polymarket vs IV Arbitrage', zh: '跨预测市场赔率期望值套利模型' },
    description: { en: '5-minute resolution expected value drift and active alignment indexes.', zh: '5 分钟时间间隔下另类预测事件和期权隐含波动概率的对齐图。' },
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'g3',
    title: { en: 'Pre-market Automated Brief', zh: '盘前智能体生成的自动概率范围简报' },
    description: { en: 'Autonomous boundaries computed via raw historical distributions.', zh: '智能体从宏观流动性与期权希腊值倒推出的多分支博弈预期报告。' },
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80',
  },
];

export default function StrategyGallery({ lang }: StrategyGalleryProps) {
  const [galleryCollapsed, setGalleryCollapsed] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Persistence block
  const [galleryList, setGalleryList] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('marco_strategy_gallery');
      return saved ? JSON.parse(saved) : DEFAULT_GALLERY;
    } catch {
      return DEFAULT_GALLERY;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('marco_strategy_gallery', JSON.stringify(galleryList));
    } catch (e) {
      console.error('Error persisting gallery:', e);
    }
  }, [galleryList]);

  // Handle local dynamic image uploading (Base64 data representation)
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Url = reader.result as string;
        const newItem: GalleryItem = {
          id: `custom_${Date.now()}`,
          title: { 
            en: 'Uploaded Chart Analysis', 
            zh: '我的本地投研上传图表' 
          },
          description: { 
            en: 'Newly imported interactive research screenshot.', 
            zh: '最新载入的策略截图与盘面分析档案。' 
          },
          imageUrl: base64Url,
        };
        setGalleryList((prev) => [newItem, ...prev]);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeGalleryItem = (id: string) => {
    setGalleryList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <div className="border-2 border-brand-border bg-[#FBFBFA] rounded-none shadow-[6px_6px_0px_#0A0A0A] p-5 sm:p-6 space-y-4 text-left">
        <div className="flex items-center justify-between border-b border-brand-border/10 pb-3">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-4 h-4 text-brand-cyan" />
            <h2 className="font-mono text-xs font-black text-brand-border uppercase tracking-widest">
              {lang === 'en' ? 'STRATEGY VISUAL GALLERY' : '策略图解 & 投研看板 (Gallery)'}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setGalleryCollapsed(!galleryCollapsed)}
            className="flex items-center gap-1.5 px-2 py-0.5 border border-brand-border bg-white text-[9px] font-mono font-black uppercase text-brand-border/60 hover:bg-neutral-50 cursor-pointer select-none"
          >
            {galleryCollapsed ? (
              <>
                <span>{lang === 'en' ? 'EXPAND' : '展开'}</span>
                <Plus className="w-3 h-3 text-brand-green" />
              </>
            ) : (
              <>
                <span>{lang === 'en' ? 'COLLAPSE' : '隐藏'}</span>
                <Minus className="w-3 h-3 text-brand-magenta" />
              </>
            )}
          </button>
        </div>

        {/* Expandable Gallery Element */}
        <motion.div
          initial={false}
          animate={{ height: galleryCollapsed ? 0 : 'auto', opacity: galleryCollapsed ? 0 : 1 }}
          className="overflow-hidden space-y-4"
        >
          {/* Horizontal Slidable Row Container */}
          <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-brand-border/20 snap-x snap-mandatory pb-3 px-1">
            
            {/* Dynamic "+ Add New Image" Interactive Input Square */}
            <div className="snap-center shrink-0 w-[200px] h-[190px] border-2 border-dashed border-brand-border/30 hover:border-brand-cyan/60 bg-white hover:bg-neutral-50/50 transition-all flex flex-col items-center justify-center text-center p-4 relative cursor-pointer group">
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                title={lang === 'en' ? 'Upload new chart' : '上传新的投研图表'}
              />
              <UploadCloud className="w-8 h-8 text-brand-cyan/50 group-hover:text-brand-cyan transition-colors mb-2.5" />
              <span className="font-mono text-[10px] font-black text-brand-border group-hover:text-[#0A0A0A] uppercase tracking-wider block mb-1">
                {lang === 'en' ? '+ UPLOAD CHART' : '+ 上传新图表'}
              </span>
              <span className="text-[9px] text-brand-border/50 font-medium font-sans leading-normal">
                {lang === 'en' ? 'Supports JPEG/PNG images' : '支持本地任意分析截图'}
              </span>
            </div>

            {/* Slidable Existing Image Cards */}
            {galleryList.map((item) => (
              <div 
                key={item.id}
                className="snap-center shrink-0 w-[210px] bg-white border-2 border-brand-border p-2.5 flex flex-col justify-between h-[190px] relative group"
              >
                {/* Delete icon overlay for user-curated items */}
                <button
                  type="button"
                  onClick={() => removeGalleryItem(item.id)}
                  className="absolute top-1.5 right-1.5 p-1 bg-white border border-brand-border hover:bg-brand-magenta hover:text-white text-brand-border transition-colors opacity-0 group-hover:opacity-100 z-20 shadow-[1.5px_1.5px_0px_#0A0A0A]"
                  title="Delete Image"
                >
                  <Trash2 className="w-3 h-3" />
                </button>

                <div className="relative w-full h-[95px] overflow-hidden border border-brand-border/10 bg-neutral-100">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title[lang]} 
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-0.5 pt-2">
                  <h4 className="font-mono text-[10px] font-black uppercase text-brand-border truncate max-w-[190px]">
                    {item.title[lang]}
                  </h4>
                  <p className="text-[9px] text-[#0A0A0A]/60 font-semibold font-sans leading-snug line-clamp-2">
                    {item.description[lang]}
                  </p>
                </div>
              </div>
            ))}

          </div>
          
          <div className="flex items-center justify-between text-[9px] font-mono text-brand-border/40 px-1">
            <span>&larr; Swipe to Slide / 左右滑动浏览 &rarr;</span>
            <span>{galleryList.length} Items</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
