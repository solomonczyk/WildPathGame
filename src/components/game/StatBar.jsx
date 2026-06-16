import { getStatColor } from '@/lib/gameEngine';

export default function StatBar({ label, icon = null, value, max = 100, showValue = true }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const colorClass = getStatColor(value);

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="flex min-w-0 items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground sm:text-xs">
          {icon && <span>{icon}</span>}
          <span>{label}</span>
        </span>
        {showValue && (
          <span className="text-xs font-mono text-muted-foreground">{Math.round(value)}</span>
        )}
      </div>
      <div className="stat-bar">
        <div
          className={`stat-bar-fill ${colorClass} transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
