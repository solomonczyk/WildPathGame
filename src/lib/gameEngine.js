import { XP_PER_LEVEL } from './gameData';

const SAVE_KEY = 'wildpath_save';
const LEGACY_SAVE_KEY = 'survival_zero_save';

export function saveGame(player) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(player));
}

export function loadGame() {
  try {
    const data = localStorage.getItem(SAVE_KEY) || localStorage.getItem(LEGACY_SAVE_KEY);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function deleteSave() {
  localStorage.removeItem(SAVE_KEY);
  localStorage.removeItem(LEGACY_SAVE_KEY);
}

export function hasSave() {
  return !!(localStorage.getItem(SAVE_KEY) || localStorage.getItem(LEGACY_SAVE_KEY));
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
    warmth: clampStat(player.warmth + (deltas.warmth_delta || 0))
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

export function checkVictory(player) {
  return player.day > player.survivalGoal;
}

export function getStatColor(value) {
  if (value > 60) return 'bg-success';
  if (value > 30) return 'bg-warning';
  return 'bg-danger';
}
