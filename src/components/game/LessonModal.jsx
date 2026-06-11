import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ChevronRight, ChevronLeft, CheckCircle, Globe } from 'lucide-react';
import { LESSON_CATEGORIES } from '@/lib/lessonData';

function SlideText({ slide }) {
  return (
    <div className="p-5">
      <h3 className="font-heading font-bold text-foreground text-lg mb-3">{slide.title}</h3>
      <p className="text-sm text-foreground/90 leading-relaxed">{slide.text}</p>
    </div>
  );
}

function SlideCompare({ slide, cat }) {
  return (
    <div className="p-5">
      <h3 className="font-heading font-bold text-foreground text-base mb-4">{slide.title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {[
          { data: slide.good, borderClass: 'border-success/40', bgClass: 'bg-success/5', labelClass: 'text-success bg-success/10 border-success/30' },
          { data: slide.bad, borderClass: 'border-danger/40', bgClass: 'bg-danger/5', labelClass: 'text-danger bg-danger/10 border-danger/30' }
        ].map(({ data, borderClass, bgClass, labelClass }) => (
          <div key={data.label} className={`rounded-sm border ${borderClass} ${bgClass} overflow-hidden`}>
            <img
              src={data.image}
              alt={data.label}
              className="w-full h-32 object-cover"
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div className="p-3">
              <span className={`inline-block text-xs font-mono font-bold px-2 py-0.5 rounded border ${labelClass} mb-2`}>
                {data.label}
              </span>
              <p className="text-xs text-foreground/80 leading-relaxed">{data.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideImage({ slide }) {
  return (
    <div className="p-5">
      <h3 className="font-heading font-bold text-foreground text-base mb-3">{slide.title}</h3>
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full rounded-sm border border-border object-cover mb-3"
        style={{ maxHeight: '220px' }}
        onError={e => { e.target.style.display = 'none'; }}
      />
      <p className="text-sm text-foreground/80 leading-relaxed">{slide.caption}</p>
    </div>
  );
}

function SlideVideo({ slide }) {
  return (
    <div className="p-5">
      <h3 className="font-heading font-bold text-foreground text-base mb-1">{slide.title}</h3>
      <p className="text-xs text-muted-foreground mb-3">{slide.caption}</p>
      <div className="relative w-full rounded-sm overflow-hidden border border-border" style={{ paddingBottom: '56.25%' }}>
        <iframe
          key={slide.url}
          src={`${slide.url}?rel=0&modestbranding=1`}
          title={slide.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="mt-2 flex items-center gap-2 text-xs font-mono text-muted-foreground">
        <Play size={11} />
        {slide.duration}
      </div>
    </div>
  );
}

export default function LessonModal({ lesson, onClose, onComplete }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!lesson) return null;

  const cat = LESSON_CATEGORIES[lesson.category] || LESSON_CATEGORIES.fire;
  const slides = lesson.slides || [];
  const isLast = currentSlide === slides.length - 1;
  const slide = slides[currentSlide];

  const handleComplete = () => {
    onComplete && onComplete(lesson);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative w-full max-w-xl tactical-panel border border-border rounded-sm overflow-hidden flex flex-col"
          style={{ maxHeight: '95vh' }}
          initial={{ scale: 0.93, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.93, y: 30 }}
        >
          {/* Header */}
          <div className={`flex items-center justify-between px-4 py-3 border-b border-border ${cat.bgColor} shrink-0`}>
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-2xl shrink-0">{lesson.icon}</span>
              <div className="min-w-0">
                <div className={`text-xs font-mono uppercase tracking-widest ${cat.color}`}>
                  {cat.icon} {cat.name.toUpperCase()} · УРОК
                </div>
                <h2 className="font-heading text-sm font-bold text-foreground leading-tight truncate">{lesson.title}</h2>
              </div>
            </div>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors p-1 shrink-0">
              <X size={18} />
            </button>
          </div>

          {/* Slide progress dots */}
          <div className="flex gap-1.5 px-4 py-2 bg-muted/10 border-b border-border/40 shrink-0">
            {slides.map((s, i) => {
              const icons = { text: '📝', compare: '⚖️', image: '🖼️', video: '▶️' };
              return (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`flex items-center justify-center w-7 h-7 rounded-sm text-xs border transition-all ${
                    i === currentSlide
                      ? `${cat.borderColor} ${cat.bgColor} ${cat.color} font-bold`
                      : i < currentSlide
                        ? 'border-success/30 bg-success/10 text-success'
                        : 'border-border text-muted-foreground hover:border-border/80'
                  }`}
                  title={s.title}
                >
                  {i < currentSlide ? '✓' : icons[s.type] || (i + 1)}
                </button>
              );
            })}
          </div>

          {/* Slide content */}
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {slide.type === 'text' && <SlideText slide={slide} cat={cat} />}
                {slide.type === 'compare' && <SlideCompare slide={slide} cat={cat} />}
                {slide.type === 'image' && <SlideImage slide={slide} cat={cat} />}
                {slide.type === 'video' && <SlideVideo slide={slide} cat={cat} />}
              </motion.div>
            </AnimatePresence>

            {/* Real world fact on last slide */}
            {isLast && lesson.real_world && (
              <div className="mx-5 mb-5 p-3 border border-accent/30 bg-accent/5 rounded-sm">
                <div className="flex items-center gap-2 mb-1.5">
                  <Globe size={13} className="text-accent shrink-0" />
                  <span className="text-xs font-mono text-accent uppercase tracking-widest">Реальный факт</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{lesson.real_world}</p>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-2 px-4 py-3 border-t border-border bg-muted/10 shrink-0">
            <button
              onClick={() => setCurrentSlide(s => s - 1)}
              disabled={currentSlide === 0}
              className="flex items-center gap-1 px-3 py-2 border border-border text-sm font-heading text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all disabled:opacity-30 disabled:cursor-not-allowed rounded-sm"
            >
              <ChevronLeft size={14} /> Назад
            </button>
            <div className="flex-1 flex items-center justify-center">
              <span className="text-xs font-mono text-muted-foreground">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
            {!isLast ? (
              <button
                onClick={() => setCurrentSlide(s => s + 1)}
                className={`flex items-center gap-1 px-4 py-2 border ${cat.borderColor} ${cat.bgColor} ${cat.color} text-sm font-heading font-semibold rounded-sm hover:opacity-90 transition-all`}
              >
                Далее <ChevronRight size={14} />
              </button>
            ) : (
              <button
                onClick={handleComplete}
                className="flex items-center gap-1.5 px-4 py-2 bg-success/80 hover:bg-success text-white text-sm font-heading font-bold rounded-sm transition-all"
              >
                <CheckCircle size={14} /> Готово!
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}