import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CircleDot, Gem, Play, RotateCcw, Sprout, TentTree } from 'lucide-react';
import { INITIAL_PLAYER } from '@/lib/gameData';
import { hasSave } from '@/lib/gameEngine';
import { getUiText } from '@/lib/i18n';
import LanguageSwitcher from '@/components/game/LanguageSwitcher';

export default function StartScreen({ onStart, onContinue, language, setLanguage }) {
  const [step, setStep] = useState('menu');
  const [playerName, setPlayerName] = useState('');
  const [survivalGoal, setSurvivalGoal] = useState(30);
  const savedGame = hasSave();
  const text = getUiText(language);

  const handleStartNew = () => {
    if (!playerName.trim()) return;
    setStep('goals');
  };

  const handleConfirmStart = () => {
    const player = { ...INITIAL_PLAYER, name: playerName.trim(), survivalGoal, started: true };
    onStart(player);
  };

  const goals = [
    { days: 7, label: text.goals.week.label, Icon: Sprout, desc: text.goals.week.desc, color: 'border-success/40 hover:border-success/70 text-success' },
    { days: 30, label: text.goals.month.label, Icon: TentTree, desc: text.goals.month.desc, color: 'border-accent/40 hover:border-accent/70 text-accent' },
    { days: 100, label: text.goals.hundred.label, Icon: Gem, desc: text.goals.hundred.desc, color: 'border-danger/40 hover:border-danger/70 text-danger' }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden scanline px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-48 w-full bg-gradient-to-b from-sky-950/45 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-stone-950 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.035) 1px, transparent 0)',
            backgroundSize: '38px 38px'
          }}
        />
      </div>

      <div className="absolute right-4 top-4 z-20">
        <LanguageSwitcher language={language} onChange={setLanguage} />
      </div>

      <div className="relative z-10 w-full max-w-md text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-xs font-mono text-muted-foreground tracking-[0.32em] uppercase mb-3">
            {text.start.eyebrow}
          </div>
          <h1 className="font-display text-6xl sm:text-7xl font-bold text-foreground tracking-tight leading-none">
            {text.start.titleTop}
            <span className="block text-danger animate-glow-pulse">{text.start.titleBottom}</span>
          </h1>
          <div className="mt-3 text-sm font-mono text-muted-foreground tracking-wider">
            {text.start.subtitle}
          </div>
        </motion.div>

        {step === 'menu' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <button
              onClick={() => setStep('new_game')}
              className="flex w-full items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-heading text-lg font-bold tracking-widest uppercase rounded-sm hover:bg-danger/90 transition-all duration-300 hover:glow-danger"
            >
              <Play size={18} fill="currentColor" />
              {text.start.newGame}
            </button>
            {savedGame && (
              <button
                onClick={onContinue}
                className="flex w-full items-center justify-center gap-2 py-3 border border-accent/50 text-accent font-heading text-base font-semibold tracking-wider uppercase rounded-sm hover:bg-accent/10 transition-all"
              >
                <RotateCcw size={17} />
                {text.start.continue}
              </button>
            )}
            <div className="pt-4 text-xs font-mono text-muted-foreground/55">
              {text.start.footer}
            </div>
          </motion.div>
        )}

        {step === 'new_game' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="tactical-panel border border-border rounded-sm p-5 text-left">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                {text.start.nameLabel}
              </div>
              <input
                type="text"
                value={playerName}
                onChange={event => setPlayerName(event.target.value)}
                onKeyDown={event => event.key === 'Enter' && handleStartNew()}
                placeholder={text.start.namePlaceholder}
                maxLength={20}
                className="w-full bg-transparent border-b border-border pb-2 text-foreground font-heading text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/40"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStep('menu')}
                className="flex flex-1 items-center justify-center gap-2 py-3 border border-border text-muted-foreground font-heading text-sm rounded-sm hover:border-foreground/30 transition-colors"
              >
                <ArrowLeft size={16} />
                {text.start.back}
              </button>
              <button
                onClick={handleStartNew}
                disabled={!playerName.trim()}
                className="flex flex-[2] items-center justify-center gap-2 py-3 bg-primary disabled:opacity-30 text-primary-foreground font-heading text-sm font-bold rounded-sm hover:bg-danger/90 transition-all"
              >
                {text.start.next}
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}

        {step === 'goals' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="text-sm font-heading text-muted-foreground mb-2">
              {text.start.goalPrompt}, <span className="text-foreground">{playerName}</span>:
            </div>
            <div className="space-y-2">
              {goals.map(goal => (
                (() => {
                  const GoalIcon = goal.Icon;

                  return (
                    <button
                      key={goal.days}
                      onClick={() => setSurvivalGoal(goal.days)}
                      className={`w-full flex items-center gap-4 p-4 border rounded-sm transition-all ${
                        survivalGoal === goal.days ? `${goal.color} bg-current/10` : 'border-border text-foreground/60 hover:border-border/80'
                      }`}
                    >
                      <GoalIcon size={24} className="shrink-0" />
                      <div className="text-left">
                        <div className={`font-heading font-bold text-base ${survivalGoal === goal.days ? '' : 'text-foreground'}`}>
                          {goal.label}
                        </div>
                        <div className="text-xs font-mono text-muted-foreground">
                          {goal.desc} · {goal.days}
                        </div>
                      </div>
                      {survivalGoal === goal.days && <CircleDot size={18} className="ml-auto shrink-0" />}
                    </button>
                  );
                })()
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStep('new_game')}
                className="flex flex-1 items-center justify-center gap-2 py-3 border border-border text-muted-foreground font-heading text-sm rounded-sm hover:border-foreground/30 transition-colors"
              >
                <ArrowLeft size={16} />
                {text.start.back}
              </button>
              <button
                onClick={handleConfirmStart}
                className="flex flex-[2] items-center justify-center gap-2 py-3 bg-danger text-primary-foreground font-heading text-sm font-bold rounded-sm hover:bg-danger/90 transition-all"
              >
                {text.start.begin}
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        className="absolute bottom-6 px-4 text-center text-xs font-mono text-muted-foreground/35"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {text.start.footer}
      </motion.div>
    </div>
  );
}
