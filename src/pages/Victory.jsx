import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/gameData';
import { deleteSave } from '@/lib/gameEngine';

export default function Victory({ player, onRestart }) {
  const handleRestart = () => {
    deleteSave();
    onRestart();
  };

  const daysSurvived = (player?.day || 1) - 1;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-success/3" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-success/8 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-sm text-center space-y-6"
      >
        <div>
          <div className="text-7xl mb-4">🏆</div>
          <div className="text-xs font-mono text-success uppercase tracking-[0.4em] mb-2">ПОБЕДА</div>
          <h1 className="font-display text-4xl font-bold text-foreground">{player?.name}</h1>
          <div className="text-sm font-mono text-muted-foreground mt-1">выжил {daysSurvived} дней</div>
        </div>

        <div className="tactical-panel border border-success/30 rounded-sm p-4">
          <p className="text-sm text-foreground/80 leading-relaxed">
            Ты доказал, что можешь выжить в мире без технологий.
            Огонь, вода, еда, укрытие — теперь это не просто слова.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="tactical-panel border border-success/30 rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-success">{daysSurvived}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">ДНЕЙ ВЫЖИТО</div>
          </div>
          <div className="tactical-panel border border-border rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-accent">{player?.unlockedSkills?.length || 0}/{SKILLS.length}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">НАВЫКОВ</div>
          </div>
          <div className="tactical-panel border border-border rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-accent">{player?.level || 1}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">УРОВЕНЬ</div>
          </div>
          <div className="tactical-panel border border-border rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-accent">{player?.xp || 0}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">ВСЕГО XP</div>
          </div>
        </div>

        {/* Unlocked skills preview */}
        {player?.unlockedSkills?.length > 0 && (
          <div className="tactical-panel border border-border rounded-sm p-4 text-left">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Освоенные навыки</div>
            <div className="flex flex-wrap gap-2">
              {player.unlockedSkills.map(sid => {
                const skill = SKILLS.find(s => s.skill_id === sid);
                if (!skill) return null;
                return (
                  <span key={sid} className="flex items-center gap-1 px-2 py-1 border border-success/30 bg-success/10 text-success text-xs font-mono rounded-sm">
                    {skill.icon} {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        <div className="space-y-2">
          <button
            onClick={handleRestart}
            className="w-full py-4 bg-success/80 text-white font-heading text-base font-bold uppercase tracking-widest rounded-sm hover:bg-success/60 transition-all"
          >
            ▶ Играть снова
          </button>
        </div>
      </motion.div>
    </div>
  );
}
