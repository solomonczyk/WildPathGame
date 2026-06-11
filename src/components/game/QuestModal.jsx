import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, CheckCircle, XCircle, ChevronRight, Play } from 'lucide-react';
import { LESSONS } from '@/lib/lessonData';
import { SURVIVOR_COUPLE, getQuestScene } from '@/lib/questScenes';
import LessonModal from './LessonModal';

const categoryIcons = {
  fire: '🔥',
  water: '💧',
  shelter: '🏕️',
  hunting: '🎯',
  medicine: '🩹',
  community: '🤝',
  main: '⚡'
};

const visualStyles = {
  'city-window': 'from-slate-950 via-zinc-900 to-orange-950',
  'wet-forest': 'from-emerald-950 via-slate-950 to-stone-900',
  'water-creek': 'from-cyan-950 via-slate-900 to-blue-950',
  'shelter-ridge': 'from-yellow-950 via-stone-950 to-slate-950',
  'berries-path': 'from-green-950 via-lime-950 to-stone-950',
  'camp-threat': 'from-red-950 via-slate-950 to-zinc-950',
  'first-aid': 'from-red-950 via-stone-950 to-slate-950',
  'new-allies': 'from-violet-950 via-slate-950 to-amber-950'
};

function CharacterBadge({ id }) {
  const person = SURVIVOR_COUPLE[id];
  return (
    <div className={`w-9 h-9 rounded-full border ${person.border} ${person.bg} flex items-center justify-center shrink-0 shadow-lg`}>
      <span className={`font-display font-bold ${person.color}`}>{person.avatar}</span>
    </div>
  );
}

function DialogueLine({ line }) {
  const person = SURVIVOR_COUPLE[line.speaker];
  const isNikita = line.speaker === 'nikita';

  return (
    <div className={`flex gap-2 ${isNikita ? 'flex-row-reverse text-right' : ''}`}>
      <CharacterBadge id={line.speaker} />
      <div className={`max-w-[82%] rounded-sm border ${person.border} ${person.bg} px-3 py-2`}>
        <div className={`text-[11px] font-mono uppercase tracking-widest ${person.color}`}>{person.name}</div>
        <p className="text-sm leading-relaxed text-foreground/90">{line.text}</p>
      </div>
    </div>
  );
}

function ComicScene({ scene }) {
  return (
    <div className={`relative overflow-hidden rounded-sm border border-border bg-gradient-to-br ${visualStyles[scene.visual] || visualStyles['city-window']} min-h-[230px]`}>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_25%_20%,white_0,transparent_22%),linear-gradient(135deg,currentColor_1px,transparent_1px)] bg-[length:auto,18px_18px]" />
      <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent">{scene.time}</div>
          <h3 className="font-display text-xl font-bold text-foreground mt-1">{scene.panelTitle}</h3>
          <div className="text-xs text-muted-foreground mt-1">{scene.location}</div>
        </div>
        <div className="hidden sm:flex -space-x-2">
          <CharacterBadge id="lena" />
          <CharacterBadge id="nikita" />
        </div>
      </div>

      <div className="absolute left-4 right-4 bottom-4 grid grid-cols-3 gap-2">
        {scene.panelDetails.map(detail => (
          <div key={detail} className="border border-white/15 bg-black/35 backdrop-blur-sm rounded-sm px-2 py-2 text-[11px] text-foreground/80">
            {detail}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatChanges({ outcome }) {
  const stats = [
    { label: '❤️', key: 'health_delta' },
    { label: '🍖', key: 'hunger_delta' },
    { label: '💧', key: 'thirst_delta' },
    { label: '⚡', key: 'energy_delta' },
    { label: '🌡️', key: 'warmth_delta' }
  ];

  const changed = stats
    .map(stat => ({ ...stat, value: outcome[stat.key] || 0 }))
    .filter(stat => stat.value !== 0);

  if (!changed.length) return null;

  return (
    <div className="grid grid-cols-5 gap-2">
      {changed.map(stat => (
        <div
          key={stat.key}
          className={`text-center p-2 rounded-sm border ${stat.value > 0 ? 'border-success/30 bg-success/10 text-success' : 'border-danger/30 bg-danger/10 text-danger'}`}
        >
          <div className="text-xs">{stat.label}</div>
          <div className="text-xs font-mono font-bold">{stat.value > 0 ? '+' : ''}{stat.value}</div>
        </div>
      ))}
    </div>
  );
}

export default function QuestModal({ quest, onChoice, onClose }) {
  const [outcome, setOutcome] = useState(null);
  const [showLesson, setShowLesson] = useState(false);

  if (!quest) return null;

  const scene = getQuestScene(quest.quest_id);
  const relatedLesson = LESSONS.find(l => l.related_quest === quest.quest_id);
  const outcomeDialogue = outcome ? scene.outcome?.[outcome.id] || [] : [];

  const handleChoice = (choice) => {
    setOutcome(choice);
  };

  const handleContinue = () => {
    onChoice(quest, outcome);
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
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={!outcome ? onClose : undefined} />
        <motion.div
          className="relative w-full max-w-3xl tactical-panel border border-border rounded-sm overflow-hidden"
          initial={{ scale: 0.93, y: 24 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.93, y: 24 }}
        >
          <div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b border-border bg-muted/30">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-2xl">{categoryIcons[quest.category] || '📋'}</span>
              <div className="min-w-0">
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Сцена выбора</div>
                <h2 className="font-heading text-lg font-bold text-foreground leading-tight truncate">{quest.title}</h2>
              </div>
            </div>
            {!outcome && (
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                <X size={18} />
              </button>
            )}
          </div>

          <div className="p-4 sm:p-5 max-h-[78vh] overflow-y-auto">
            {!outcome ? (
              <div className="grid lg:grid-cols-[1fr_0.95fr] gap-4">
                <div className="space-y-3">
                  <ComicScene scene={scene} />
                  <div className="p-3 rounded-sm border border-border bg-muted/15">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Обстановка</div>
                    <p className="text-sm leading-relaxed text-foreground/85">{scene.narration}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground mt-2">{scene.mood}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    {scene.dialogue.map((line, index) => (
                      <DialogueLine key={`${line.speaker}-${index}`} line={line} />
                    ))}
                  </div>

                  {relatedLesson && (
                    <button
                      onClick={() => setShowLesson(true)}
                      className="w-full flex items-center gap-3 p-3 border border-accent/40 bg-accent/10 hover:bg-accent/20 rounded-sm transition-all"
                    >
                      <Play size={14} className="text-accent shrink-0" />
                      <div className="text-left flex-1">
                        <div className="text-xs font-mono text-accent uppercase tracking-widest">Перед решением можно изучить</div>
                        <div className="text-sm font-heading font-semibold text-foreground">{relatedLesson.title}</div>
                      </div>
                      <ChevronRight size={14} className="text-accent shrink-0" />
                    </button>
                  )}

                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{scene.prompt}</div>
                    </div>
                    <div className="text-xs text-warning/90 border border-warning/20 bg-warning/5 rounded-sm px-3 py-2">{scene.stakes}</div>
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
                </div>
              </div>
            ) : (
              <div className="grid lg:grid-cols-[0.9fr_1fr] gap-4">
                <div className="space-y-3">
                  <ComicScene scene={{ ...scene, panelTitle: outcome.is_correct ? 'Решение сработало' : 'Ошибка стала уроком' }} />
                  <div className={`p-4 rounded-sm border ${outcome.is_correct ? 'border-success/30 bg-success/10' : 'border-danger/30 bg-danger/10'}`}>
                    <div className="flex items-start gap-2">
                      {outcome.is_correct
                        ? <CheckCircle size={16} className="text-success mt-0.5 shrink-0" />
                        : <XCircle size={16} className="text-danger mt-0.5 shrink-0" />
                      }
                      <p className="text-sm text-foreground/90 leading-relaxed">{outcome.outcome_text}</p>
                    </div>
                  </div>
                  <StatChanges outcome={outcome} />
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    {outcomeDialogue.map((line, index) => (
                      <DialogueLine key={`${line.speaker}-outcome-${index}`} line={line} />
                    ))}
                  </div>

                  {outcome.skill_unlock && (
                    <div className="p-3 border border-accent/40 bg-accent/10 rounded-sm">
                      <div className="text-xs font-mono text-accent uppercase tracking-widest">Навык разблокирован</div>
                      <div className="text-sm font-heading font-semibold text-foreground mt-1">{outcome.skill_unlock}</div>
                    </div>
                  )}

                  {outcome.xp_reward > 0 && (
                    <div className="text-xs font-mono text-muted-foreground">
                      +{outcome.xp_reward} XP получено
                    </div>
                  )}

                  {quest.knowledge_block && (
                    <div className="p-4 border border-border bg-muted/20 rounded-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen size={13} className="text-accent" />
                        <span className="text-xs font-mono text-accent uppercase tracking-widest">Вывод Леры</span>
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
                </div>
              </div>
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
