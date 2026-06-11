import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, BookOpen, ChevronRight } from 'lucide-react';

export default function EventModal({ event, onChoice, onClose }) {
  const [outcome, setOutcome] = useState(null);

  if (!event) return null;

  const typeStyles = {
    danger: { icon: '⚠️', color: 'text-danger', border: 'border-danger/40', bg: 'bg-danger/10', label: 'ОПАСНОСТЬ' },
    opportunity: { icon: '✨', color: 'text-accent', border: 'border-accent/40', bg: 'bg-accent/10', label: 'ВОЗМОЖНОСТЬ' },
    weather: { icon: '🌩️', color: 'text-blue-400', border: 'border-blue-400/40', bg: 'bg-blue-400/10', label: 'ПОГОДА' },
    encounter: { icon: '👤', color: 'text-purple-400', border: 'border-purple-400/40', bg: 'bg-purple-400/10', label: 'ВСТРЕЧА' },
    discovery: { icon: '🔍', color: 'text-green-400', border: 'border-green-400/40', bg: 'bg-green-400/10', label: 'НАХОДКА' }
  };
  const style = typeStyles[event.type] || typeStyles.opportunity;

  const handleChoice = (choice) => {
    setOutcome(choice);
  };

  const handleContinue = () => {
    onChoice(event, outcome);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <motion.div
          className={`relative w-full max-w-md tactical-panel border ${style.border} rounded-sm overflow-hidden`}
          initial={{ scale: 0.9, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: -20 }}
        >
          {/* Header */}
          <div className={`px-5 py-4 border-b border-border ${style.bg}`}>
            <div className="flex items-center gap-2">
              <span className="text-2xl animate-pulse-warning">{style.icon}</span>
              <div>
                <div className={`text-xs font-mono ${style.color} uppercase tracking-widest`}>{style.label}</div>
                <h2 className="font-heading text-lg font-bold text-foreground">{event.title}</h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 space-y-4">
            <p className="text-sm text-foreground/90 leading-relaxed">{event.description}</p>

            {!outcome ? (
              <div className="space-y-2">
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">— Ваши действия —</div>
                {event.choices?.map((choice, idx) => (
                  <button
                    key={choice.id}
                    onClick={() => handleChoice(choice)}
                    className="w-full text-left p-3 border border-border hover:border-accent/50 bg-muted/20 hover:bg-accent/10 rounded-sm transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-muted-foreground text-xs mt-0.5 group-hover:text-accent">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      <span className="text-sm text-foreground/90">{choice.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <>
                <div className="p-4 rounded-sm border border-border bg-muted/20">
                  <p className="text-sm text-foreground/90 leading-relaxed">{outcome.outcome_text}</p>
                </div>

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

                {event.knowledge_block && (
                  <div className="p-3 border border-border bg-muted/20 rounded-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={12} className="text-accent" />
                      <span className="text-xs font-mono text-accent uppercase tracking-widest">Знания выжившего</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{event.knowledge_block}</p>
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
    </AnimatePresence>
  );
}