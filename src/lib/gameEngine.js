import { XP_PER_LEVEL } from './gameData';

const SAVE_KEY = 'survival_zero_save';

export function saveGame(player) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(player));
}

export function loadGame() {
  try {
    const data = localStorage.getItem(SAVE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function deleteSave() {
  localStorage.removeItem(SAVE_KEY);
}

export function hasSave() {
  return !!localStorage.getItem(SAVE_KEY);
}

export function clampStat(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

export function applyDeltas(player, deltas) {
  return {
    ...player,
    health: clampStat(player.health + (deltas.health_delta || 0)),
    hunger: clampStat(player.hunger + (deltas.hunger_delta || 0)),
    thirst: clampStat(player.thirst + (deltas.thirst_delta || 0)),
    energy: clampStat(player.energy + (deltas.energy_delta || 0)),
    warmth: clampStat(player.warmth + (deltas.warmth_delta || 0)),
  };
}

export function addXP(player, xp) {
  const newXP = player.xp + xp;
  const newLevel = Math.floor(newXP / XP_PER_LEVEL) + 1;
  return { ...player, xp: newXP, level: newLevel };
}

export function unlockSkill(player, skillId) {
  if (!skillId || player.unlockedSkills.includes(skillId)) return player;
  return { ...player, unlockedSkills: [...player.unlockedSkills, skillId] };
}

export function checkGameOver(player) {
  if (player.health <= 0) return { over: true, reason: "Твоё здоровье иссякло. Раны и болезни победили." };
  if (player.thirst <= 0) return { over: true, reason: "Ты погиб от жажды. Вода — первый приоритет выживания." };
  if (player.hunger <= 5 && player.energy <= 5) return { over: true, reason: "Истощение от голода и усталости победило твою волю к жизни." };
  if (player.warmth <= 0) return { over: true, reason: "Гипотермия. Твоё тело не выдержало холода." };
  return { over: false, reason: "" };
}

export function checkVictory(player) {
  return player.day > player.survivalGoal;
}

export function getDailyDecay(day) {
  const factor = Math.min(1 + day * 0.01, 1.5);
  return {
    hunger_delta: -(8 * factor),
    thirst_delta: -(10 * factor),
    energy_delta: -(6 * factor),
    warmth_delta: -(3 * factor),
  };
}

export function getAvailableQuests(player, allQuests) {
  return allQuests.filter(q =>
    q.day_available <= player.day &&
    !player.completedQuests.includes(q.quest_id)
  );
}

export function getRandomEvent(player, allEvents) {
  const available = allEvents.filter(e => e.min_day <= player.day);
  if (!available.length) return null;
  const rand = Math.random();
  if (rand > 0.45) return null;
  const idx = Math.floor(Math.random() * available.length);
  return available[idx];
}

export function getStatColor(value) {
  if (value > 60) return 'bg-success';
  if (value > 30) return 'bg-warning';
  return 'bg-danger';
}

export function getStatTextColor(value) {
  if (value > 60) return 'text-success';
  if (value > 30) return 'text-warning';
  return 'text-danger';
}

export function advanceDay(player) {
  const decay = getDailyDecay(player.day);
  let newPlayer = applyDeltas(player, decay);
  newPlayer = { ...newPlayer, day: player.day + 1 };

  // Natural health recovery if stats are decent
  if (newPlayer.hunger > 50 && newPlayer.thirst > 50 && newPlayer.energy > 40) {
    newPlayer.health = clampStat(newPlayer.health + 3);
  }

  const gameOverCheck = checkGameOver(newPlayer);
  if (gameOverCheck.over) {
    newPlayer = { ...newPlayer, gameOver: true, gameOverReason: gameOverCheck.reason };
  }

  return newPlayer;
}

export function getDayActions() {
  return [
    { id: "explore", label: "Исследовать", icon: "🔍", desc: "Обыскать руины", energy_cost: 15, effects: { hunger_delta: -5, thirst_delta: -5, energy_delta: -15 }, reward: "Шанс найти ресурсы" },
    { id: "forage", label: "Добывать еду", icon: "🌿", desc: "Собирать растения и ягоды", energy_cost: 10, effects: { hunger_delta: 15, thirst_delta: -5, energy_delta: -10 }, reward: "+Еда" },
    { id: "water", label: "Искать воду", icon: "💧", desc: "Найти и очистить воду", energy_cost: 10, effects: { hunger_delta: -5, thirst_delta: 20, energy_delta: -10 }, reward: "+Вода" },
    { id: "build", label: "Строить", icon: "🏗️", desc: "Улучшать укрытие", energy_cost: 20, effects: { hunger_delta: -8, thirst_delta: -8, energy_delta: -20, warmth_delta: 10 }, reward: "+Тепло" },
    { id: "rest", label: "Отдыхать", icon: "😴", desc: "Восстановить силы", energy_cost: 0, effects: { energy_delta: 30, health_delta: 5, warmth_delta: 5 }, reward: "+Энергия" },
    { id: "hunt", label: "Охотиться", icon: "🎯", desc: "Поставить силки и охотиться", energy_cost: 20, effects: { hunger_delta: 25, thirst_delta: -10, energy_delta: -20 }, reward: "+Много еды" }
  ];
}
