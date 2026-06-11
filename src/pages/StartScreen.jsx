import { useState } from 'react';
import { motion } from 'framer-motion';
import { INITIAL_PLAYER } from '@/lib/gameData';
import { hasSave } from '@/lib/gameEngine';

export default function StartScreen({ onStart, onContinue }) {
  const [step, setStep] = useState('menu'); // 'menu' | 'new_game' | 'goals'
  const [playerName, setPlayerName] = useState('');
  const [survivalGoal, setSurvivalGoal] = useState(30);
  const savedGame = hasSave();

  const handleStartNew = () => {
    if (!playerName.trim()) return;
    setStep('goals');
  };

  const handleConfirmStart = () => {
    const player = { ...INITIAL_PLAYER, name: playerName.trim(), survivalGoal, started: true };
    onStart(player);
  };

  const goals = [
    { days: 7, label: "Неделя выживания", icon: "🌱", desc: "Для начинающих", color: "border-success/40 hover:border-success/70 text-success" },
    { days: 30, label: "Месяц в руинах", icon: "🏕️", desc: "Стандартный режим", color: "border-accent/40 hover:border-accent/70 text-accent" },
    { days: 100, label: "100 дней", icon: "💀", desc: "Для опытных", color: "border-danger/40 hover:border-danger/70 text-danger" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden scanline">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-danger/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-md px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="text-xs font-mono text-muted-foreground tracking-[0.4em] uppercase mb-3">◈ СИМУЛЯТОР ВЫЖИВАНИЯ ◈</div>
          <h1 className="font-display text-6xl sm:text-7xl font-bold text-foreground tracking-tight leading-none">
            SURVIVAL
            <span className="block text-danger animate-glow-pulse">ZERO</span>
          </h1>
          <div className="mt-3 text-sm font-mono text-muted-foreground tracking-widest">
            МИР ПОСЛЕ КОНЦА
          </div>
        </motion.div>

        {step === 'menu' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-3"
          >
            <button
              onClick={() => setStep('new_game')}
              className="w-full py-4 bg-primary text-primary-foreground font-heading text-lg font-bold tracking-widest uppercase rounded-sm hover:bg-danger/90 transition-all duration-300 hover:glow-danger"
            >
              ▶ Новая игра
            </button>
            {savedGame && (
              <button
                onClick={onContinue}
                className="w-full py-3 border border-accent/50 text-accent font-heading text-base font-semibold tracking-wider uppercase rounded-sm hover:bg-accent/10 transition-all"
              >
                ↺ Продолжить
              </button>
            )}
            <div className="pt-4 text-xs font-mono text-muted-foreground/50 space-y-1">
              <div>Научись выживать по-настоящему</div>
              <div>Огонь · Вода · Укрытие · Охота · Медицина · Община</div>
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
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Позывной выжившего</div>
              <input
                type="text"
                value={playerName}
                onChange={e => setPlayerName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleStartNew()}
                placeholder="Введи своё имя..."
                maxLength={20}
                className="w-full bg-transparent border-b border-border pb-2 text-foreground font-heading text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/40"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStep('menu')}
                className="flex-1 py-3 border border-border text-muted-foreground font-heading text-sm rounded-sm hover:border-foreground/30 transition-colors"
              >
                ← Назад
              </button>
              <button
                onClick={handleStartNew}
                disabled={!playerName.trim()}
                className="flex-[2] py-3 bg-primary disabled:opacity-30 text-primary-foreground font-heading text-sm font-bold rounded-sm hover:bg-danger/90 transition-all"
              >
                Далее →
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
            <div className="text-sm font-heading text-muted-foreground mb-2">Цель выживания, <span className="text-foreground">{playerName}</span>:</div>
            <div className="space-y-2">
              {goals.map(g => (
                <button
                  key={g.days}
                  onClick={() => setSurvivalGoal(g.days)}
                  className={`w-full flex items-center gap-4 p-4 border rounded-sm transition-all ${
                    survivalGoal === g.days ? `${g.color} bg-current/10` : 'border-border text-foreground/60 hover:border-border/80'
                  }`}
                  style={survivalGoal === g.days ? {} : {}}
                >
                  <span className="text-2xl">{g.icon}</span>
                  <div className="text-left">
                    <div className={`font-heading font-bold text-base ${survivalGoal === g.days ? '' : 'text-foreground'}`}>{g.label}</div>
                    <div className="text-xs font-mono text-muted-foreground">{g.desc} · {g.days} дней</div>
                  </div>
                  {survivalGoal === g.days && <span className="ml-auto text-lg">◉</span>}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStep('new_game')} className="flex-1 py-3 border border-border text-muted-foreground font-heading text-sm rounded-sm hover:border-foreground/30 transition-colors">
                ← Назад
              </button>
              <button onClick={handleConfirmStart} className="flex-[2] py-3 bg-danger text-primary-foreground font-heading text-sm font-bold rounded-sm hover:bg-danger/90 transition-all">
                ⚡ Начать выживание
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom flavor text */}
      <motion.div
        className="absolute bottom-6 text-xs font-mono text-muted-foreground/30 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Реальные навыки · Симуляция последствий · Обучение через игру
      </motion.div>
    </div>
  );
}
