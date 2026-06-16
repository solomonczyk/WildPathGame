import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, RotateCcw } from 'lucide-react';
import StatBar from '@/components/game/StatBar';
import InteractiveEpisode from '@/components/game/InteractiveEpisode';
import LanguageSwitcher from '@/components/game/LanguageSwitcher';
import { getUiText } from '@/lib/i18n';
import { addXP, applyDeltas, checkVictory, saveGame, unlockSkill } from '@/lib/gameEngine';

export default function GameHub({ player, setPlayer, onGameOver, onVictory, language, setLanguage }) {
  const [tab, setTab] = useState('episode');
  const [log, setLog] = useState([]);
  const text = getUiText(language);

  useEffect(() => {
    saveGame(player);
    if (player.gameOver) {
      onGameOver(player);
      return;
    }
    if (checkVictory(player)) {
      onVictory(player);
    }
  }, [player, onGameOver, onVictory]);

  const addLog = (msg, type = 'info') => {
    setLog(current => [{ msg, type, day: player.day, id: crypto.randomUUID() }, ...current].slice(0, 20));
  };

  const handleEpisodeComplete = (episode) => {
    const completedEpisodes = player.completedEpisodes || [];
    if (completedEpisodes.includes(episode.id)) return;

    let nextPlayer = applyDeltas(player, episode.reward.deltas || {});
    nextPlayer = addXP(nextPlayer, episode.reward.xp || 0);
    if (episode.reward.skill) {
      nextPlayer = unlockSkill(nextPlayer, episode.reward.skill);
    }
    nextPlayer = {
      ...nextPlayer,
      completedEpisodes: [...completedEpisodes, episode.id]
    };

    addLog(`Episode complete: ${episode.copy.en.title}`, 'success');
    setPlayer(nextPlayer);
  };

  const tabs = [
    { id: 'episode', label: text.tabs.episode, icon: '◎' },
    { id: 'learn', label: text.tabs.learn, icon: '▤' },
    { id: 'base', label: text.tabs.base, icon: '⌂' },
    { id: 'log', label: text.tabs.log, icon: '≡' }
  ];

  const logColor = {
    success: 'text-success',
    info: 'text-muted-foreground'
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="tactical-panel border-b border-border px-4 py-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="min-w-0">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{text.survivor}</div>
              <div className="truncate font-heading text-lg font-bold text-foreground">{player.name}</div>
            </div>
            <div className="h-9 w-px bg-border" />
            <div>
              <div className="text-xs font-mono text-muted-foreground uppercase">{text.level}</div>
              <div className="font-heading text-lg font-bold text-accent">{player.level}</div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <LanguageSwitcher language={language} onChange={setLanguage} compact />
            <div className="text-right">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{text.day}</div>
              <div className="font-heading text-2xl font-bold text-foreground leading-tight">
                {player.day}
                <span className="text-sm text-muted-foreground font-normal">/{player.survivalGoal}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2">
          <StatBar label={text.stats.health} icon="♥" value={player.health} />
          <StatBar label={text.stats.hunger} icon="🍖" value={player.hunger} />
          <StatBar label={text.stats.thirst} icon="💧" value={player.thirst} />
          <StatBar label={text.stats.energy} icon="⚡" value={player.energy} />
          <StatBar label={text.stats.warmth} icon="°" value={player.warmth} />
        </div>
      </header>

      <nav className="flex border-b border-border bg-muted/10">
        {tabs.map(item => (
          <button
            key={item.id}
            onClick={() => setTab(item.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-heading font-semibold uppercase tracking-wider transition-all border-b-2 ${
              tab === item.id ? 'border-accent text-accent' : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <span>{item.icon}</span>
            <span className="hidden sm:inline">{item.label}</span>
          </button>
        ))}
      </nav>

      <main className="flex-1 overflow-y-auto p-4">
        <AnimatePresence mode="wait">
          {tab === 'episode' && (
            <motion.div key="episode" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <InteractiveEpisode
                language={language}
                completed={(player.completedEpisodes || []).includes('apartment_evacuation')}
                onComplete={handleEpisodeComplete}
              />
            </motion.div>
          )}

          {tab === 'learn' && (
            <motion.div
              key="learn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mx-auto max-w-3xl tactical-panel rounded-sm border border-border p-5"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="text-accent" size={20} />
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">{text.tabs.learn}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {language === 'en'
                      ? 'The new lessons will open as practical scenes: inspect, choose, test, then read the short real-world takeaway.'
                      : language === 'uk'
                        ? 'Нові уроки відкриватимуться як практичні сцени: оглянь, обери, перевір, а потім прочитай короткий реальний висновок.'
                        : 'Новые уроки будут открываться как практические сцены: осмотри, выбери, проверь, затем прочитай короткий реальный вывод.'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'base' && (
            <motion.div
              key="base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mx-auto grid max-w-4xl gap-3 md:grid-cols-3"
            >
              {[
                ['XP', player.xp],
                [text.tabs.episode, (player.completedEpisodes || []).length],
                [text.level, player.level]
              ].map(([label, value]) => (
                <div key={label} className="tactical-panel rounded-sm border border-border p-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="mt-2 font-display text-4xl font-bold text-foreground">{value}</div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setTab('episode')}
                className="md:col-span-3 flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-4 font-heading font-bold text-primary-foreground hover:bg-primary/90"
              >
                {text.tabs.episode} <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

          {tab === 'log' && (
            <motion.div key="log" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-3xl space-y-2">
              {log.length === 0 ? (
                <div className="rounded-sm border border-border bg-muted/10 p-8 text-center text-sm text-muted-foreground">
                  {language === 'en'
                    ? 'The log is empty. Finish a scene to record progress.'
                    : language === 'uk'
                      ? 'Журнал порожній. Заверши сцену, щоб записати прогрес.'
                      : 'Журнал пуст. Заверши сцену, чтобы записать прогресс.'}
                </div>
              ) : (
                log.map(entry => (
                  <div key={entry.id} className="flex items-center gap-3 rounded-sm border border-border bg-muted/10 px-3 py-2">
                    <span className="text-xs font-mono text-muted-foreground">D.{entry.day}</span>
                    <span className={`text-sm ${logColor[entry.type] || logColor.info}`}>{entry.msg}</span>
                  </div>
                ))
              )}
              <button
                type="button"
                onClick={() => setLog([])}
                className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground"
              >
                <RotateCcw size={13} /> clear
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
