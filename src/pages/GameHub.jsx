import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, ChevronRight, Home, List, RotateCcw, Target } from 'lucide-react';
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

  const addLog = entry => {
    setLog(current => [{ day: player.day, id: crypto.randomUUID(), ...entry }, ...current].slice(0, 20));
  };

  const handleEpisodeComplete = (episode, result) => {
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

    addLog({
      type: 'success',
      title: episode.copy[language]?.title || episode.copy.en.title,
      score: result?.score,
      taken: result?.takenItems?.length || 0,
      risky: result?.riskyItems?.length || 0
    });
    setPlayer(nextPlayer);
  };

  const tabs = [
    { id: 'episode', label: text.tabs.episode, Icon: Target },
    { id: 'learn', label: text.tabs.learn, Icon: BookOpen },
    { id: 'base', label: text.tabs.base, Icon: Home },
    { id: 'log', label: text.tabs.log, Icon: List }
  ];

  const learnCopy = {
    ru: 'Новые уроки будут открываться как практические сцены: осмотри, выбери, проверь, затем прочитай короткий реальный вывод.',
    en: 'New lessons open as practical scenes: inspect, choose, test, then read the short real-world takeaway.',
    es: 'Las nuevas lecciones se abren como escenas prácticas: inspecciona, elige, prueba y lee una conclusión breve.'
  };

  const emptyLogCopy = {
    ru: 'Журнал пуст. Заверши сцену, чтобы записать прогресс.',
    en: 'The log is empty. Finish a scene to record progress.',
    es: 'El registro está vacío. Completa una escena para guardar el progreso.'
  };

  const logColor = {
    success: 'text-success',
    info: 'text-muted-foreground'
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="tactical-panel border-b border-border px-3 py-3 sm:px-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="min-w-0">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{text.survivor}</div>
              <div className="truncate text-lg font-bold text-foreground">{player.name}</div>
            </div>
            <div className="h-9 w-px bg-border" />
            <div>
              <div className="text-[10px] font-mono uppercase text-muted-foreground">{text.level}</div>
              <div className="text-lg font-bold text-warning">{player.level}</div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <LanguageSwitcher language={language} onChange={setLanguage} compact />
            <div className="text-right">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{text.day}</div>
              <div className="text-2xl font-bold leading-tight text-foreground">
                {player.day}
                <span className="text-sm font-normal text-muted-foreground">/{player.survivalGoal}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-2">
          <StatBar label={text.stats.health} value={player.health} />
          <StatBar label={text.stats.hunger} value={player.hunger} />
          <StatBar label={text.stats.thirst} value={player.thirst} />
          <StatBar label={text.stats.energy} value={player.energy} />
          <StatBar label={text.stats.warmth} value={player.warmth} />
        </div>
      </header>

      <nav className="flex border-b border-border bg-muted/10">
        {tabs.map(item => {
          const TabIcon = item.Icon;
          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`flex flex-1 items-center justify-center gap-1.5 border-b-2 py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
                tab === item.id ? 'border-warning text-warning' : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <TabIcon size={15} />
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <main className="flex-1 overflow-y-auto p-3 sm:p-4">
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
              className="mx-auto max-w-3xl rounded-sm border border-border bg-[#131313] p-5"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="text-warning" size={20} />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{text.tabs.learn}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{learnCopy[language] || learnCopy.ru}</p>
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
                <div key={label} className="rounded-sm border border-border bg-[#131313] p-4">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="mt-2 text-4xl font-bold text-foreground">{value}</div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setTab('episode')}
                className="flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-4 font-bold text-primary-foreground hover:bg-primary/90 md:col-span-3"
              >
                {text.tabs.episode} <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

          {tab === 'log' && (
            <motion.div key="log" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mx-auto max-w-3xl space-y-2">
              {log.length === 0 ? (
                <div className="rounded-sm border border-border bg-muted/10 p-8 text-center text-sm text-muted-foreground">
                  {emptyLogCopy[language] || emptyLogCopy.ru}
                </div>
              ) : (
                log.map(entry => (
                  <div key={entry.id} className="rounded-sm border border-border bg-muted/10 px-3 py-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-mono text-muted-foreground">D.{entry.day}</span>
                      {entry.score !== undefined && (
                        <span className={`text-xs font-mono ${logColor[entry.type] || logColor.info}`}>{entry.score}/100</span>
                      )}
                    </div>
                    <div className={`mt-1 text-sm font-semibold ${logColor[entry.type] || logColor.info}`}>{entry.title || entry.msg}</div>
                    {entry.taken !== undefined && (
                      <div className="mt-2 text-xs text-muted-foreground">
                        {language === 'en'
                          ? `${entry.taken} items packed, ${entry.risky} risky choices.`
                          : language === 'es'
                            ? `${entry.taken} objetos en la mochila, ${entry.risky} elecciones riesgosas.`
                            : `${entry.taken} предметов в рюкзаке, рискованных выборов: ${entry.risky}.`}
                      </div>
                    )}
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
