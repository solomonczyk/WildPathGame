import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight } from 'lucide-react';
import StatBar from '@/components/game/StatBar';
import QuestModal from '@/components/game/QuestModal';
import EventModal from '@/components/game/EventModal';
import SkillTree from '@/components/game/SkillTree';
import LessonModal from '@/components/game/LessonModal';
import LessonsTab from '@/components/game/LessonsTab';
import { QUESTS, GAME_EVENTS, SKILL_CATEGORIES, SKILLS } from '@/lib/gameData';
import {
  saveGame, advanceDay, applyDeltas, addXP, unlockSkill,
  getAvailableQuests, getRandomEvent, getDayActions, checkVictory
} from '@/lib/gameEngine';

export default function GameHub({ player, setPlayer, onGameOver, onVictory }) {
  const [activeQuest, setActiveQuest] = useState(null);
  const [activeEvent, setActiveEvent] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [showSkillTree, setShowSkillTree] = useState(false);
  const [actionUsed, setActionUsed] = useState(false);
  const [log, setLog] = useState([]);
  const [tab, setTab] = useState('learn'); // 'learn' | 'base' | 'quests' | 'log'

  useEffect(() => {
    saveGame(player);
    if (player.gameOver) { onGameOver(player); return; }
    if (checkVictory(player)) { onVictory(player); return; }
  }, [player]);

  const addLog = useCallback((msg, type = 'info') => {
    setLog(prev => [{ msg, type, day: player.day, id: Date.now() }, ...prev].slice(0, 30));
  }, [player.day]);

  const availableQuests = getAvailableQuests(player, QUESTS);

  const handleDayAction = (action) => {
    if (actionUsed) return;
    setActionUsed(true);

    let newPlayer = applyDeltas(player, action.effects);
    addLog(`${action.icon} ${action.label}: ${action.reward}`, 'action');

    setPlayer(newPlayer);

    // Roll for random event after action
    const event = getRandomEvent(newPlayer, GAME_EVENTS);
    if (event) {
      setTimeout(() => setActiveEvent(event), 600);
    }
  };

  const handleNextDay = () => {
    let newPlayer = advanceDay(player);
    addLog(`📅 День ${newPlayer.day - 1} пройден. Начинается день ${newPlayer.day}...`, 'day');
    setActionUsed(false);

    // Daily event chance
    const event = getRandomEvent(newPlayer, GAME_EVENTS);
    if (event) {
      setTimeout(() => setActiveEvent(event), 800);
    }

    setPlayer(newPlayer);
  };

  const handleQuestChoice = (quest, choice) => {
    let newPlayer = applyDeltas(player, choice);
    newPlayer = addXP(newPlayer, choice.xp_reward || 0);
    if (choice.skill_unlock) newPlayer = unlockSkill(newPlayer, choice.skill_unlock);
    if (quest.skill_unlock) newPlayer = unlockSkill(newPlayer, quest.skill_unlock);
    newPlayer = {
      ...newPlayer,
      completedQuests: [...newPlayer.completedQuests, quest.quest_id]
    };
    addLog(`✅ Задание выполнено: ${quest.title}`, 'success');
    setPlayer(newPlayer);
  };

  const handleEventChoice = (event, choice) => {
    let newPlayer = applyDeltas(player, choice);
    newPlayer = addXP(newPlayer, 30);
    addLog(`${event.type === 'danger' ? '⚠️' : '✨'} ${event.title}: ${choice.outcome_text.slice(0, 60)}...`, choice.health_delta < 0 ? 'danger' : 'info');
    setPlayer(newPlayer);
  };

  const handleLessonComplete = (lesson) => {
    const completedLessons = player.completedLessons || [];
    if (!completedLessons.includes(lesson.lesson_id)) {
      const newPlayer = addXP({ ...player, completedLessons: [...completedLessons, lesson.lesson_id] }, 50);
      addLog(`📚 Урок пройден: ${lesson.title} (+50 XP)`, 'success');
      setPlayer(newPlayer);
    }
  };

  const survivalProgress = Math.min(100, (player.day / player.survivalGoal) * 100);
  const xpToNextLevel = 200;
  const currentLevelXP = player.xp % xpToNextLevel;

  const logTypeColors = {
    'action': 'text-accent',
    'success': 'text-success',
    'danger': 'text-danger',
    'day': 'text-blue-400',
    'info': 'text-muted-foreground'
  };

  return (
    <>
      {showSkillTree && (
        <SkillTree unlockedSkills={player.unlockedSkills} onClose={() => setShowSkillTree(false)} />
      )}

      <div className="min-h-screen bg-background flex flex-col">
        {/* Top HUD */}
        <div className="tactical-panel border-b border-border px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Выживший</div>
                <div className="font-heading font-bold text-foreground text-lg leading-tight">{player.name}</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase">Уровень</div>
                <div className="font-heading font-bold text-accent text-lg leading-tight">{player.level}</div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">День</div>
              <div className="font-heading font-bold text-foreground text-2xl leading-tight">
                {player.day}
                <span className="text-sm text-muted-foreground font-normal">/{player.survivalGoal}</span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-5 gap-2">
            <StatBar label="HP" icon="❤️" value={player.health} />
            <StatBar label="ЕДА" icon="🍖" value={player.hunger} />
            <StatBar label="ВОДА" icon="💧" value={player.thirst} />
            <StatBar label="СИЛЫ" icon="⚡" value={player.energy} />
            <StatBar label="ТЕПЛО" icon="🌡️" value={player.warmth} />
          </div>

          {/* Survival progress */}
          <div className="mt-3 space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-muted-foreground">ПРОГРЕСС ВЫЖИВАНИЯ</span>
              <span className="text-xs font-mono text-accent">{Math.round(survivalProgress)}%</span>
            </div>
            <div className="stat-bar h-1.5">
              <div className="h-full bg-accent transition-all duration-700" style={{ width: `${survivalProgress}%` }} />
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-border bg-muted/10">
          {[
            { id: 'learn', label: 'Обучение', icon: '📚' },
            { id: 'base', label: 'База', icon: '🏕️' },
            { id: 'quests', label: `Задания (${availableQuests.length})`, icon: '📋' },
            { id: 'log', label: 'Журнал', icon: '📓' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-heading font-semibold uppercase tracking-wider transition-all border-b-2 ${
                tab === t.id ? 'border-accent text-accent' : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>{t.icon}</span>
              <span className="hidden sm:inline">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-4">
          <AnimatePresence mode="wait">
            {tab === 'learn' && (
              <motion.div key="learn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <LessonsTab player={player} onOpenLesson={setActiveLesson} />
              </motion.div>
            )}

            {tab === 'base' && (
              <motion.div key="base" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                {/* Quick skills overview */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {Object.entries(SKILL_CATEGORIES).map(([key, cat]) => {
                    const count = SKILLS.filter(s => s.category === key && player.unlockedSkills.includes(s.skill_id)).length;
                    const total = SKILLS.filter(s => s.category === key).length;
                    return (
                      <button
                        key={key}
                        onClick={() => setShowSkillTree(true)}
                        className={`p-3 rounded-sm border ${count > 0 ? cat.borderColor + ' ' + cat.bgColor : 'border-border bg-muted/10'} text-center transition-all hover:scale-105`}
                      >
                        <div className="text-xl mb-1">{cat.icon}</div>
                        <div className="text-xs font-mono text-muted-foreground">{count}/{total}</div>
                      </button>
                    );
                  })}
                </div>

                {/* Day actions */}
                <div className="tactical-panel border border-border rounded-sm p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Действие дня</div>
                    {actionUsed && <span className="text-xs font-mono text-success">✓ Выполнено</span>}
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {getDayActions().map(action => (
                      <button
                        key={action.id}
                        onClick={() => handleDayAction(action)}
                        disabled={actionUsed || player.energy < action.energy_cost}
                        className={`p-3 border rounded-sm text-left transition-all group ${
                          actionUsed || player.energy < action.energy_cost
                            ? 'border-border/30 opacity-40 cursor-not-allowed'
                            : 'border-border hover:border-accent/50 hover:bg-accent/5'
                        }`}
                      >
                        <div className="text-xl mb-1">{action.icon}</div>
                        <div className="text-xs font-heading font-semibold text-foreground">{action.label}</div>
                        <div className="text-xs font-mono text-muted-foreground">{action.desc}</div>
                        {action.energy_cost > 0 && (
                          <div className="text-xs font-mono text-warning mt-1">⚡ -{action.energy_cost}</div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Skills button */}
                <button
                  onClick={() => setShowSkillTree(true)}
                  className="w-full flex items-center justify-between p-4 tactical-panel border border-border rounded-sm hover:border-accent/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen size={18} className="text-accent" />
                    <div className="text-left">
                      <div className="font-heading font-semibold text-foreground">Дерево навыков</div>
                      <div className="text-xs font-mono text-muted-foreground">
                        {player.unlockedSkills.length} из {SKILLS.length} навыков разблокировано
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground" />
                </button>

                {/* Advance day */}
                <button
                  onClick={handleNextDay}
                  className="w-full py-4 bg-primary/90 hover:bg-primary text-primary-foreground font-heading text-base font-bold tracking-widest uppercase rounded-sm transition-all hover:glow-danger flex items-center justify-center gap-2"
                >
                  <span>Следующий день</span>
                  <ChevronRight size={18} />
                </button>

                {/* XP bar */}
                <div className="tactical-panel border border-border rounded-sm p-3 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-muted-foreground">ОПЫТ</span>
                    <span className="text-xs font-mono text-accent">{currentLevelXP}/{xpToNextLevel} XP</span>
                  </div>
                  <div className="stat-bar h-2">
                    <div className="h-full bg-accent/70 transition-all duration-700" style={{ width: `${(currentLevelXP / xpToNextLevel) * 100}%` }} />
                  </div>
                </div>
              </motion.div>
            )}

            {tab === 'quests' && (
              <motion.div key="quests" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
                {availableQuests.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <div className="text-4xl mb-3">📋</div>
                    <div className="font-heading text-lg">Нет доступных заданий</div>
                    <div className="text-xs font-mono mt-1">Новые задания появятся с днями выживания</div>
                  </div>
                ) : (
                  availableQuests.sort((a, b) => a.order - b.order).map(quest => {
                    const catIcons = { fire: '🔥', water: '💧', shelter: '🏕️', hunting: '🎯', medicine: '🩹', community: '🤝', main: '⚡' };
                    return (
                      <motion.button
                        key={quest.quest_id}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => setActiveQuest(quest)}
                        className={`w-full text-left p-4 tactical-panel border rounded-sm transition-all ${quest.category === 'main' ? 'border-danger/40 hover:border-danger/70' : 'border-border hover:border-accent/40'}`}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{catIcons[quest.category] || '📋'}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div className="font-heading font-semibold text-foreground text-sm leading-tight">{quest.title}</div>
                              <ChevronRight size={14} className="text-muted-foreground shrink-0 mt-0.5" />
                            </div>
                            <div className="text-xs text-muted-foreground mt-1 line-clamp-2">{quest.description.slice(0, 80)}...</div>
                            <div className="flex items-center gap-3 mt-2">
                              <span className="text-xs font-mono text-accent">+{quest.xp_reward || 100} XP</span>
                              {quest.skill_unlock && <span className="text-xs font-mono text-success">🔓 Навык</span>}
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    );
                  })
                )}

                {player.completedQuests.length > 0 && (
                  <div className="pt-2">
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                      Выполненные ({player.completedQuests.length})
                    </div>
                    {QUESTS.filter(q => player.completedQuests.includes(q.quest_id)).map(quest => (
                      <div key={quest.quest_id} className="flex items-center gap-2 p-3 opacity-50 border-b border-border/30">
                        <span className="text-success text-sm">✓</span>
                        <span className="text-xs font-mono text-muted-foreground">{quest.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {tab === 'log' && (
              <motion.div key="log" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-1">
                {log.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground text-sm font-mono">
                    Журнал пуст. Начни действовать.
                  </div>
                ) : (
                  log.map(entry => (
                    <div key={entry.id} className="flex items-start gap-2 py-2 border-b border-border/20">
                      <span className="text-xs font-mono text-muted-foreground/50 shrink-0">Д.{entry.day}</span>
                      <span className={`text-xs font-mono ${logTypeColors[entry.type] || 'text-muted-foreground'}`}>{entry.msg}</span>
                    </div>
                  ))
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Quest Modal */}
      {activeQuest && (
        <QuestModal
          quest={activeQuest}
          onChoice={handleQuestChoice}
          onClose={() => setActiveQuest(null)}
        />
      )}

      {/* Event Modal */}
      {activeEvent && (
        <EventModal
          event={activeEvent}
          onChoice={handleEventChoice}
          onClose={() => setActiveEvent(null)}
        />
      )}

      {/* Lesson Modal */}
      {activeLesson && (
        <LessonModal
          lesson={activeLesson}
          onClose={() => setActiveLesson(null)}
          onComplete={handleLessonComplete}
        />
      )}
    </>
  );
}
