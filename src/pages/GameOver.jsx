import { motion } from 'framer-motion';
import { deleteSave } from '@/lib/gameEngine';

export default function GameOver({ player, onRestart }) {
  const handleRestart = () => {
    deleteSave();
    onRestart();
  };

  const daysSurvived = (player?.day || 1) - 1;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 scanline">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm text-center space-y-6"
      >
        <div>
          <div className="text-xs font-mono text-danger uppercase tracking-[0.35em] mb-2">Game over</div>
          <h1 className="font-display text-4xl font-bold text-foreground">{player?.name || 'Survivor'}</h1>
          <div className="text-sm font-mono text-muted-foreground mt-1">
            Survived {daysSurvived} days
          </div>
        </div>

        <div className="tactical-panel border border-danger/30 rounded-sm p-4 text-left">
          <div className="text-xs font-mono text-danger uppercase tracking-widest mb-2">Reason</div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {player?.gameOverReason || 'The route failed. Replay the scenario and adjust priorities.'}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="tactical-panel border border-border rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-accent">{daysSurvived}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">Days</div>
          </div>
          <div className="tactical-panel border border-border rounded-sm p-3 text-center">
            <div className="font-display text-3xl font-bold text-accent">{player?.completedEpisodes?.length || 0}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">Episodes</div>
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="w-full py-4 bg-danger text-primary-foreground font-heading text-base font-bold uppercase tracking-widest rounded-sm hover:bg-danger/80 transition-all"
        >
          New attempt
        </button>
      </motion.div>
    </div>
  );
}
