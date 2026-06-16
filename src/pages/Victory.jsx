import { motion } from 'framer-motion';
import { deleteSave } from '@/lib/gameEngine';

export default function Victory({ player, onRestart }) {
  const handleRestart = () => {
    deleteSave();
    onRestart();
  };

  const daysSurvived = (player?.day || 1) - 1;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm text-center space-y-6"
      >
        <div>
          <div className="text-xs font-mono text-success uppercase tracking-[0.35em] mb-2">Victory</div>
          <h1 className="font-display text-4xl font-bold text-foreground">{player?.name}</h1>
          <div className="text-sm font-mono text-muted-foreground mt-1">
            Completed {daysSurvived} days
          </div>
        </div>

        <div className="tactical-panel border border-success/30 rounded-sm p-4">
          <p className="text-sm text-foreground/80 leading-relaxed">
            You completed the current survival goal. The next product stage should add more episodes before this becomes a full course ending.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="tactical-panel border border-success/30 rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-success">{daysSurvived}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">Days</div>
          </div>
          <div className="tactical-panel border border-border rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-accent">{player?.xp || 0}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">XP</div>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="w-full py-4 bg-success/80 text-white font-heading text-base font-bold uppercase tracking-widest rounded-sm hover:bg-success/60 transition-all"
        >
          Play again
        </button>
      </motion.div>
    </div>
  );
}
