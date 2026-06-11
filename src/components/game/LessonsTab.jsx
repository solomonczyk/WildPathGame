import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, CheckCircle, Lock } from 'lucide-react';
import { LESSONS, LESSON_CATEGORIES } from '@/lib/lessonData';

export default function LessonsTab({ player, onOpenLesson }) {
  const [filterCat, setFilterCat] = useState('all');

  const completedLessons = player.completedLessons || [];

  const filtered = filterCat === 'all'
    ? LESSONS
    : LESSONS.filter(l => l.category === filterCat);

  const totalCompleted = completedLessons.length;
  const totalLessons = LESSONS.length;
  const progress = Math.round((totalCompleted / totalLessons) * 100);

  return (
    <div className="space-y-4">
      {/* Progress header */}
      <div className="tactical-panel border border-accent/30 bg-accent/5 rounded-sm p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <BookOpen size={16} className="text-accent" />
            <span className="font-heading font-bold text-foreground text-sm">Академия выживания</span>
          </div>
          <span className="text-xs font-mono text-accent">{totalCompleted}/{totalLessons} уроков</span>
        </div>
        <div className="stat-bar h-2 mb-2">
          <div className="h-full bg-accent transition-all duration-700" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs text-muted-foreground">
          Обучение — основа выживания. Каждый урок даёт реальные знания и навыки.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex gap-1.5 overflow-x-auto pb-1">
        <button
          onClick={() => setFilterCat('all')}
          className={`px-3 py-1.5 rounded-sm text-xs font-heading font-semibold whitespace-nowrap border transition-all ${
            filterCat === 'all' ? 'border-accent text-accent bg-accent/10' : 'border-border text-muted-foreground hover:text-foreground'
          }`}
        >
          Все ({LESSONS.length})
        </button>
        {Object.entries(LESSON_CATEGORIES).map(([key, cat]) => {
          const count = LESSONS.filter(l => l.category === key).length;
          if (count === 0) return null;
          return (
            <button
              key={key}
              onClick={() => setFilterCat(key)}
              className={`px-3 py-1.5 rounded-sm text-xs font-heading font-semibold whitespace-nowrap border transition-all ${
                filterCat === key ? `${cat.borderColor} ${cat.color} ${cat.bgColor}` : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          );
        })}
      </div>

      {/* Lessons list */}
      <div className="space-y-2">
        {filtered.map((lesson, i) => {
          const cat = LESSON_CATEGORIES[lesson.category];
          const done = completedLessons.includes(lesson.lesson_id);

          return (
            <motion.button
              key={lesson.lesson_id}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => onOpenLesson(lesson)}
              className={`w-full text-left p-4 tactical-panel border rounded-sm transition-all ${
                done ? 'border-success/30 bg-success/5' : `${cat.borderColor} hover:${cat.bgColor}`
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 text-xl ${cat.bgColor} border ${cat.borderColor}`}>
                  {lesson.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-heading font-semibold text-foreground text-sm leading-tight">{lesson.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{lesson.subtitle}</div>
                    </div>
                    {done
                      ? <CheckCircle size={16} className="text-success shrink-0 mt-0.5" />
                      : <Play size={14} className={`${cat.color} shrink-0 mt-0.5`} />
                    }
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <span className={`text-xs font-mono ${cat.color}`}>{cat.icon} {cat.name}</span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {lesson.slides?.length || 0} слайдов
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      📹 {lesson.slides?.filter(s => s.type === 'video').length || 0} видео
                    </span>
                    {done && <span className="text-xs font-mono text-success">✓ Изучено</span>}
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}