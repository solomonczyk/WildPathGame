import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, CheckCircle, XCircle, ChevronRight, Play } from 'lucide-react';
import { LESSONS } from '@/lib/lessonData';
import LessonModal from './LessonModal';

export default function QuestModal({ quest, onChoice, onClose }) {
  const [selected, setSelected] = useState(null);
  const [outcome, setOutcome] = useState(null);
  const [showLesson, setShowLesson] = useState(false);

  const relatedLesson = LESSONS.find(l => l.related_quest === quest?.quest_id);

  if (!quest) return null;

  const handleChoice = (choice) => {
    setSelected(choice);
    setOutcome(choice);
  };

  const handleContinue = () => {
    onChoice(quest, outcome);
    onClose();
  };

  const categoryIcons = {
    fire: '🔥', water: '💧', shelter: '🏕️',
    hunting: '🎯', medicine: '🩹', community: '🤝', main: '⚡'
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={!outcome ? onClose : undefined} />
        <motion.div
          className="relative w-full max-w-lg tactical-panel border border-border rounded-sm overflow-hidden"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/30">
            <div className="flex items-center gap-2">
              <span className="text-xl">{categoryIcons[quest.category] || '📋'}</span>
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">ЗАДАНИЕ</div>
                <h2 className="font-heading text-lg font-bold text-foreground leading-tight">{quest.title}</h2>
              </div>
            </div>
            {!outcome && (
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={18} />
              </button>
            )}
          </div>

          {/* Content */}
          <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
            {!outcome ? (
              <>
                <p className="text-sm text-foreground/90 leading-relaxed font-body">
                  {quest.description}
                </p>
                {relatedLesson && (
                  <button
                    onClick={() => setShowLesson(true)}
                    className="w-full flex items-center gap-3 p-3 border border-accent/40 bg-accent/10 hover:bg-accent/20 rounded-sm transition-all mb-1"
                  >
                    <Play size={14} className="text-accent shrink-0" />
                    <div className="text-left flex-1">
                      <div className="text-xs font-mono text-accent uppercase tracking-widest">Перед выбором — посмотри урок</div>
                      <div className="text-sm font-heading font-semibold text-foreground">{relatedLesson.title}</div>
                    </div>
                    <ChevronRight size={14} className="text-accent shrink-0" />
                  </button>
                )}

                <div className="space-y-2">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">— Выберите действие —</div>
                  {quest.choices?.map((choice, idx) => (
                    <button
                      key={choice.id}
                      onClick={() => handleChoice(choice)}
                      className="w-full text-left p-3 border border-border hover:border-accent/50 bg-muted/20 hover:bg-accent/10 rounded-sm transition-all duration-200 group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-muted-foreground text-xs mt-0.5 group-hover:text-accent transition-colors">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        <span className="text-sm text-foreground/90 group-hover:text-foreground transition-colors">
                          {choice.text}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Outcome */}
                <div className={`p-4 rounded-sm border ${outcome.is_correct ? 'border-success/30 bg-success/10' : 'border-danger/30 bg-danger/10'}`}>
                  <div className="flex items-start gap-2 mb-2">
                    {outcome.is_correct
                      ? <CheckCircle size={16} className="text-success mt-0.5 shrink-0" />
                      : <XCircle size={16} className="text-danger mt-0.5 shrink-0" />
                    }
                    <p className="text-sm text-foreground/90 leading-relaxed">{outcome.outcome_text}</p>
                  </div>
                </div>

                {/* Stat changes */}
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { label: '❤️', key: 'health_delta' },
                    { label: '🍖', key: 'hunger_delta' },
                    { label: '💧', key: 'thirst_delta' },
                    { label: '⚡', key: 'energy_delta' },
                    { label: '🌡️', key: 'warmth_delta' }
                  ].map(stat => {
                    const val = outcome[stat.key] || 0;
                    if (val === 0) return null;
                    return (
                      <div key={stat.key} className={`text-center p-2 rounded-sm border ${val > 0 ? 'border-success/30 bg-success/10 text-success' : 'border-danger/30 bg-danger/10 text-danger'}`}>
                        <div className="text-xs">{stat.label}</div>
                        <div className="text-xs font-mono font-bold">{val > 0 ? '+' : ''}{val}</div>
                      </div>
                    );
                  }).filter(Boolean)}
                </div>

                {outcome.skill_unlock && (
                  <div className="p-3 border border-accent/40 bg-accent/10 rounded-sm">
                    <div className="text-xs font-mono text-accent uppercase tracking-widest">🔓 Навык разблокирован</div>
                    <div className="text-sm font-heading font-semibold text-foreground mt-1">{outcome.skill_unlock}</div>
                  </div>
                )}

                {/* XP */}
                {outcome.xp_reward > 0 && (
                  <div className="text-xs font-mono text-muted-foreground">
                    +{outcome.xp_reward} XP получено
                  </div>
                )}

                {/* Knowledge block */}
                {quest.knowledge_block && (
                  <div className="p-4 border border-border bg-muted/20 rounded-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={13} className="text-accent" />
                      <span className="text-xs font-mono text-accent uppercase tracking-widest">Знания выжившего</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{quest.knowledge_block}</p>
                  </div>
                )}

                <button
                  onClick={handleContinue}
                  className="w-full flex items-center justify-center gap-2 p-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-sm hover:bg-primary/90 transition-colors"
                >
                  Продолжить <ChevronRight size={16} />
                </button>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>

      {showLesson && relatedLesson && (
        <LessonModal
          lesson={relatedLesson}
          onClose={() => setShowLesson(false)}
        />
      )}
    </AnimatePresence>
  );
}