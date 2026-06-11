import { motion } from 'framer-motion';
import { deleteSave } from '@/lib/gameEngine';

export default function GameOver({ player, onRestart }) {
  const handleRestart = () => {
    deleteSave();
    onRestart();
  };

  const unlockedCount = player?.unlockedSkills?.length || 0;
  const daysSurvived = (player?.day || 1) - 1;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 scanline">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-danger/3" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-sm text-center space-y-6"
      >
        <div>
          <div className="text-7xl mb-4 animate-pulse-warning">💀</div>
          <div className="text-xs font-mono text-danger uppercase tracking-[0.4em] mb-2">GAME OVER</div>
          <h1 className="font-display text-4xl font-bold text-foreground">{player?.name || 'Выживший'}</h1>
          <div className="text-sm font-mono text-muted-foreground mt-1">пал на {daysSurvived}-й день</div>
        </div>

        <div className="tactical-panel border border-danger/30 rounded-sm p-4 text-left">
          <div className="text-xs font-mono text-danger uppercase tracking-widest mb-2">Причина гибели</div>
          <p className="text-sm text-foreground/80 leading-relaxed">{player?.gameOverReason}</p>
        </div>

        {/* Stats summary */}
        <div className="grid grid-cols-2 gap-3">
          <div className="tactical-panel border border-border rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-accent">{daysSurvived}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">ДНЕЙ ВЫЖИТО</div>
          </div>
          <div className="tactical-panel border border-border rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-accent">{unlockedCount}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">НАВЫКОВ</div>
          </div>
          <div className="tactical-panel border border-border rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-accent">{player?.level || 1}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">УРОВЕНЬ</div>
          </div>
          <div className="tactical-panel border border-border rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-accent">{player?.completedQuests?.length || 0}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">ЗАДАНИЙ</div>
          </div>
        </div>

        {/* Survival tip */}
        <div className="p-4 border border-border bg-muted/20 rounded-sm text-left">
          <div className="text-xs font-mono text-accent uppercase tracking-widest mb-2">📚 Совет для следующего раза</div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {player?.gameOverReason?.includes('жажд')
              ? 'Всегда ищи воду первым делом. Человек погибает от жажды за 3 дня. Приоритет: найти источник → очистить → кипятить.'
              : player?.gameOverReason?.includes('холод') || player?.gameOverReason?.includes('Гипотерм')
              ? 'Укрытие важнее еды. Изоляция от земли спасает жизнь. Маленький тесный шалаш теплее большого.'
              : player?.gameOverReason?.includes('голод') || player?.gameOverReason?.includes('Истощ')
              ? 'Расставляй силки с первого дня — они работают пока ты спишь. Собирай только знакомые растения.'
              : 'Следи за всеми шкалами равномерно. Ни одна не должна упасть до нуля.'
            }
          </p>
        </div>

        <div className="space-y-2">
          <button
            onClick={handleRestart}
            className="w-full py-4 bg-danger text-primary-foreground font-heading text-base font-bold uppercase tracking-widest rounded-sm hover:bg-danger/80 transition-all"
          >
            ▶ Новая попытка
          </button>
        </div>
      </motion.div>
    </div>
  );
}
