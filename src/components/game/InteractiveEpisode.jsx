import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Archive,
  Backpack,
  Battery,
  BatteryCharging,
  Bed,
  Check,
  ChevronRight,
  CookingPot,
  Droplet,
  FileText,
  Footprints,
  Image,
  Info,
  Package,
  RotateCcw,
  Sandwich,
  Shirt,
  ShieldAlert,
  Sparkles,
  Utensils,
  Weight,
  Wine,
  X,
  Zap
} from 'lucide-react';
import { getEpisode } from '@/lib/interactiveEpisodes';
import { getUiText } from '@/lib/i18n';

const ICONS = {
  archive: Archive,
  backpack: Backpack,
  battery: Battery,
  'battery-charging': BatteryCharging,
  bed: Bed,
  can: Utensils,
  'cooking-pot': CookingPot,
  cross: ShieldAlert,
  droplet: Droplet,
  'file-text': FileText,
  flashlight: Zap,
  footprints: Footprints,
  image: Image,
  knife: Utensils,
  package: Package,
  sandwich: Sandwich,
  shirt: Shirt,
  tape: Package,
  wine: Wine
};

const CATEGORY_STYLES = {
  essential: {
    badge: 'border-success/50 bg-success/15 text-success',
    border: 'border-success/40',
    glow: 'shadow-[0_0_24px_rgba(76,175,80,0.22)]',
    bar: 'bg-success'
  },
  useful: {
    badge: 'border-warning/50 bg-warning/15 text-warning',
    border: 'border-warning/40',
    glow: 'shadow-[0_0_24px_rgba(245,166,35,0.18)]',
    bar: 'bg-warning'
  },
  trap: {
    badge: 'border-danger/50 bg-danger/15 text-danger',
    border: 'border-danger/40',
    glow: 'shadow-[0_0_24px_rgba(233,69,96,0.18)]',
    bar: 'bg-danger'
  }
};

function getCopy(entity, language) {
  return entity.copy[language] || entity.copy.ru;
}

function Icon({ name, size = 18, className = '' }) {
  const Component = ICONS[name] || Package;
  return <Component size={size} className={className} />;
}

function CategoryBadge({ category, ui }) {
  return (
    <span className={`inline-flex items-center rounded-sm border px-2 py-1 text-[10px] font-mono uppercase tracking-widest ${CATEGORY_STYLES[category].badge}`}>
      {ui[category]}
    </span>
  );
}

function BackpackPanel({ packedItems, packedWeight, episode, language, ui, onRemove }) {
  const ratio = Math.min(100, (packedWeight / episode.weightLimit) * 100);
  const overweight = packedWeight > episode.weightLimit;

  return (
    <section className="border-t border-border bg-[#101010]/95 px-4 py-3">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground">
            <Backpack size={15} className="text-warning" />
            {ui.inventory}
          </div>
          <div className={`flex items-center gap-1 text-xs font-mono ${overweight ? 'text-danger' : 'text-muted-foreground'}`}>
            <Weight size={14} />
            {packedWeight.toFixed(1)} / {episode.weightLimit.toFixed(1)} kg
          </div>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-sm bg-muted/40">
          <div className={`h-full ${overweight ? 'bg-danger' : 'bg-success'}`} style={{ width: `${ratio}%` }} />
        </div>

        <div className="mt-3 grid gap-2">
          {packedItems.length === 0 ? (
            <div className="rounded-sm border border-dashed border-border px-3 py-3 text-center text-xs text-muted-foreground">
              {ui.emptySlot}
            </div>
          ) : (
            packedItems.map(item => {
              const itemCopy = getCopy(item, language);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="flex items-center justify-between gap-3 rounded-sm border border-border bg-muted/10 px-3 py-2 text-left"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <Icon name={item.icon} size={14} className="shrink-0 text-muted-foreground" />
                    <span className="truncate text-sm text-foreground/85">{itemCopy.name}</span>
                  </span>
                  <X size={14} className="shrink-0 text-muted-foreground" />
                </button>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

function CriticalChecklist({ episode, packedIds, language, ui }) {
  const requiredItems = episode.requiredItemIds
    .map(id => episode.items.find(item => item.id === id))
    .filter(Boolean);

  return (
    <section className="rounded-sm border border-border bg-[#131313] p-3">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="text-[10px] font-mono uppercase tracking-widest text-warning">{ui.criticalKit}</div>
        <div className="text-xs font-mono text-muted-foreground">
          {requiredItems.filter(item => packedIds.includes(item.id)).length}/{requiredItems.length}
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {requiredItems.map(item => {
          const itemCopy = getCopy(item, language);
          const packed = packedIds.includes(item.id);
          return (
            <div
              key={item.id}
              className={`flex min-w-[132px] items-center gap-2 rounded-sm border px-2 py-2 ${
                packed ? 'border-success/40 bg-success/10 text-success' : 'border-border bg-muted/10 text-muted-foreground'
              }`}
            >
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border ${packed ? 'border-success bg-success text-black' : 'border-border'}`}>
                {packed ? <Check size={13} /> : <Icon name={item.icon} size={13} />}
              </span>
              <span className="truncate text-xs font-semibold">{itemCopy.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SceneView({ episode, language, packedIds, activeContainerId, onOpenContainer, ui }) {
  return (
    <section className="relative overflow-hidden rounded-sm border border-border bg-[#111]">
      <div className="relative aspect-[9/13] min-h-[520px] sm:aspect-[16/11] sm:min-h-[460px]">
        <img
          src={episode.sceneImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.72)_100%)]" />
        <div className="absolute left-3 top-3 rounded-sm border border-warning/40 bg-black/70 px-3 py-2 backdrop-blur">
          <div className="text-[10px] font-mono uppercase tracking-widest text-warning">{ui.timeLeft}</div>
        </div>

        {episode.containers.map(container => {
          const containerCopy = getCopy(container, language);
          const itemCount = container.itemIds.filter(id => packedIds.includes(id)).length;
          const requiredCount = container.itemIds.filter(id => episode.requiredItemIds.includes(id)).length;
          const requiredPacked = container.itemIds.filter(id => episode.requiredItemIds.includes(id) && packedIds.includes(id)).length;
          const isActive = activeContainerId === container.id;

          return (
            <button
              key={container.id}
              type="button"
              data-testid={`container-${container.id}`}
              onClick={() => onOpenContainer(container.id)}
              className={`absolute flex items-center justify-center rounded-full border-2 bg-black/45 p-2 text-success backdrop-blur transition-all ${
                isActive
                  ? 'border-warning text-warning shadow-[0_0_28px_rgba(245,166,35,0.45)]'
                  : 'border-success/70 shadow-[0_0_18px_rgba(76,175,80,0.35)] hover:border-warning hover:text-warning'
              }`}
              style={{
                left: `${container.x + container.w / 2}%`,
                top: `${container.y + container.h / 2}%`,
                transform: 'translate(-50%, -50%)'
              }}
              aria-label={`${ui.open}: ${containerCopy.name}`}
              title={containerCopy.name}
            >
              <Icon name={container.icon} size={18} />
              <span className="pointer-events-none absolute left-1/2 top-10 hidden -translate-x-1/2 whitespace-nowrap rounded-sm border border-border bg-black/75 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-foreground sm:block">
                {containerCopy.name}
                {requiredCount > 0 && <span className="ml-1 text-success">{requiredPacked}/{requiredCount}</span>}
              </span>
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-success px-1 text-[10px] font-bold text-black">
                  {itemCount}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ContainerView({ container, items, packedIds, language, ui, onBack, onSelectItem }) {
  const copy = getCopy(container, language);
  const packedInContainer = items.filter(item => packedIds.includes(item.id)).length;

  return (
    <motion.section
      className="fixed inset-0 z-40 overflow-y-auto bg-[#0e0e0e]"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
    >
      <div className="mx-auto flex min-h-full max-w-md flex-col border-x border-border bg-[#121212]">
        <header className="sticky top-0 z-10 border-b border-border bg-[#101010]/95 px-4 py-3 backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                <Icon name={container.icon} size={14} />
                {ui.contents}
              </div>
              <h2 className="mt-1 text-2xl font-bold text-foreground">{copy.name}</h2>
              <p className="text-sm text-muted-foreground">{copy.hint}</p>
            </div>
            <div className="ml-auto mr-2 rounded-sm border border-border bg-black/25 px-2 py-1 text-right">
              <div className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">{ui.foundHere}</div>
              <div className="text-sm font-mono text-foreground">{packedInContainer}/{items.length}</div>
            </div>
            <button
              type="button"
              onClick={onBack}
              className="rounded-sm border border-border p-2 text-muted-foreground hover:text-foreground"
              aria-label={`${ui.close}: ${copy.name}`}
            >
              <X size={18} />
            </button>
          </div>
        </header>

        <div className="flex-1 space-y-3 p-4 pb-28">
          {items.map(item => {
            const itemCopy = getCopy(item, language);
            const packed = packedIds.includes(item.id);
            const style = CATEGORY_STYLES[item.category];

            return (
              <button
                key={item.id}
                type="button"
                data-testid={`item-${item.id}`}
                onClick={() => onSelectItem(item.id)}
                className={`w-full rounded-sm border bg-[#191918] p-3 text-left transition-all ${style.border} ${packed ? 'opacity-70' : 'hover:bg-[#20201f]'} ${style.glow}`}
              >
                <div className="flex gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-border bg-black/30">
                    <Icon name={item.icon} size={24} className="text-foreground/80" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold leading-tight text-foreground">{itemCopy.name}</h3>
                      {packed && <Check size={16} className="shrink-0 text-success" />}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{itemCopy.place}</p>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <CategoryBadge category={item.category} ui={ui} />
                      <span className="text-xs font-mono text-muted-foreground">{item.weight.toFixed(1)} kg</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function ItemDetailSheet({ item, packedWeight, packed, episode, language, ui, onClose, onTake, onLeave }) {
  const copy = getCopy(item, language);
  const nextWeight = packed ? packedWeight : packedWeight + item.weight;
  const impact = Math.min(100, (nextWeight / episode.weightLimit) * 100);
  const style = CATEGORY_STYLES[item.category];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/55 p-0 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className="absolute inset-0 cursor-default" onClick={onClose} aria-label={ui.close} />
      <motion.article
        className="relative w-full max-w-md rounded-t-lg border-t border-border bg-[#121212]/95 p-4 shadow-2xl backdrop-blur sm:rounded-lg sm:border"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 280, damping: 32 }}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <CategoryBadge category={item.category} ui={ui} />
            <h2 className="mt-2 text-3xl font-bold leading-none text-foreground">{copy.name}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label={`${ui.close}: ${copy.name}`} className="rounded-sm p-2 text-muted-foreground hover:bg-muted/20 hover:text-foreground">
            <X size={22} />
          </button>
        </div>

        <div className={`mt-4 flex h-44 items-center justify-center overflow-hidden rounded-sm border bg-[#1b1b1b] ${style.border}`}>
          <Icon name={item.icon} size={74} className="text-foreground/80" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 border-b border-border pb-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{ui.weight}</div>
            <div className="mt-1 text-2xl font-bold text-foreground">{item.weight.toFixed(1)} kg</div>
          </div>
          <div>
            <div className="text-right text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{ui.backpackImpact}</div>
            <div className="mt-2 flex items-center justify-end gap-2">
              <div className="h-1.5 w-24 overflow-hidden rounded-sm bg-muted/40">
                <div className={`h-full ${nextWeight > episode.weightLimit ? 'bg-danger' : style.bar}`} style={{ width: `${impact}%` }} />
              </div>
              <span className="text-xs font-mono text-foreground">{nextWeight.toFixed(1)} / {episode.weightLimit.toFixed(1)}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex gap-3">
            <Info size={18} className="mt-1 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-relaxed text-foreground/82">{copy.note}</p>
          </div>
          <div className="rounded-sm border border-border bg-muted/10 p-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{ui.useFor}</div>
            <p className="mt-1 text-sm leading-relaxed text-foreground/80">{copy.useFor}</p>
          </div>
          <div className={`rounded-sm border p-3 ${item.category === 'trap' ? 'border-danger/35 bg-danger/10' : 'border-warning/35 bg-warning/10'}`}>
            <div className={`flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest ${item.category === 'trap' ? 'text-danger' : 'text-warning'}`}>
              <ShieldAlert size={15} /> {ui.risk}
            </div>
            <p className={`mt-1 text-sm leading-relaxed ${item.category === 'trap' ? 'text-danger/90' : 'text-warning/90'}`}>{copy.risk}</p>
          </div>
        </div>

        <div className="mt-5 grid gap-2">
          <button
            type="button"
            data-testid={`take-${item.id}`}
            onClick={() => {
              onTake(item.id);
              onClose();
            }}
            className={`flex w-full items-center justify-center gap-2 rounded-sm border px-4 py-4 text-lg font-bold uppercase tracking-wide transition-all ${packed ? 'border-success/50 bg-success/15 text-success' : 'border-foreground/45 bg-[#1b1b1b] text-foreground hover:border-success hover:text-success'}`}
          >
            {packed ? <Check size={20} /> : <Sparkles size={20} />}
            {packed ? ui.locked : ui.take}
          </button>
          <button
            type="button"
            data-testid={`leave-${item.id}`}
            onClick={() => onLeave(item.id)}
            className="w-full rounded-sm border border-border px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:bg-muted/15 hover:text-foreground"
          >
            {ui.leave}
          </button>
        </div>
      </motion.article>
    </motion.div>
  );
}

function ResultPanel({ result, copy, ui, language, onRetry, onContinue }) {
  const { success, messages, takenItems, missedItems, riskyItems, score } = result;

  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      <motion.div
        className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-sm border border-border bg-[#121212] p-5"
        initial={{ y: 24, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 24, scale: 0.96 }}
      >
        <div className={`mb-4 inline-flex rounded-sm border px-3 py-2 text-xs font-mono uppercase tracking-widest ${success ? 'border-success/40 bg-success/10 text-success' : 'border-warning/40 bg-warning/10 text-warning'}`}>
          {success ? ui.complete : ui.consequences}
        </div>
        <h2 className="text-2xl font-bold text-foreground">{copy.title}</h2>
        <div className="mt-3 rounded-sm border border-border bg-muted/10 p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{ui.score}</span>
            <span className={success ? 'text-success' : 'text-warning'}>{score}/100</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-sm bg-muted/40">
            <div className={success ? 'h-full bg-success' : 'h-full bg-warning'} style={{ width: `${score}%` }} />
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground/85">{success ? copy.success : copy.failure}</p>
        {messages.length > 0 && (
          <div className="mt-4 space-y-2">
            {messages.map(message => (
              <div key={message} className="rounded-sm border border-warning/25 bg-warning/10 px-3 py-2 text-sm text-warning">
                {message}
              </div>
            ))}
          </div>
        )}
        <div className="mt-4 grid gap-3">
          <div className="rounded-sm border border-success/25 bg-success/10 p-3">
            <div className="text-xs font-mono uppercase tracking-widest text-success">{ui.taken}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {takenItems.map(item => (
                <span key={item.id} className="rounded-sm border border-success/30 bg-black/20 px-2 py-1 text-xs text-foreground/85">
                  {getCopy(item, language).name}
                </span>
              ))}
            </div>
          </div>

          {missedItems.length > 0 && (
            <div className="rounded-sm border border-warning/25 bg-warning/10 p-3">
              <div className="text-xs font-mono uppercase tracking-widest text-warning">{ui.missed}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {missedItems.map(item => (
                  <span key={item.id} className="rounded-sm border border-warning/30 bg-black/20 px-2 py-1 text-xs text-foreground/85">
                    {getCopy(item, language).name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className={`rounded-sm border p-3 ${riskyItems.length > 0 ? 'border-danger/25 bg-danger/10' : 'border-success/25 bg-success/10'}`}>
            <div className={`text-xs font-mono uppercase tracking-widest ${riskyItems.length > 0 ? 'text-danger' : 'text-success'}`}>
              {riskyItems.length > 0 ? ui.riskyTaken : ui.noRiskyItems}
            </div>
            {riskyItems.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {riskyItems.map(item => (
                  <span key={item.id} className="rounded-sm border border-danger/30 bg-black/20 px-2 py-1 text-xs text-foreground/85">
                    {getCopy(item, language).name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 rounded-sm border border-success/25 bg-success/10 p-4">
          <div className="text-xs font-mono uppercase tracking-widest text-success">{ui.expertNote}</div>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">{copy.expertNote}</p>
        </div>
        <div className="mt-5 grid gap-2">
          <button onClick={onRetry} className="flex items-center justify-center gap-2 rounded-sm border border-border px-4 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground">
            <RotateCcw size={16} /> {ui.retry}
          </button>
          <button onClick={onContinue} className="flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90">
            {ui.continue} <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function InteractiveEpisode({ language, completed, onComplete }) {
  const episode = getEpisode();
  const ui = getUiText(language).episode;
  const copy = getCopy(episode, language);
  const [packedIds, setPackedIds] = useState([]);
  const [activeContainerId, setActiveContainerId] = useState(null);
  const [detailItemId, setDetailItemId] = useState(null);
  const [result, setResult] = useState(null);

  const itemsById = useMemo(() => Object.fromEntries(episode.items.map(item => [item.id, item])), [episode.items]);
  const packedItems = episode.items.filter(item => packedIds.includes(item.id));
  const packedWeight = useMemo(() => packedItems.reduce((total, item) => total + item.weight, 0), [packedItems]);
  const requiredPacked = episode.requiredItemIds.filter(id => packedIds.includes(id)).length;
  const activeContainer = episode.containers.find(container => container.id === activeContainerId);
  const activeItems = activeContainer ? activeContainer.itemIds.map(id => itemsById[id]).filter(Boolean) : [];
  const detailItem = detailItemId ? itemsById[detailItemId] : null;
  const canLeave = requiredPacked === episode.requiredItemIds.length && packedWeight <= episode.weightLimit;

  const takeItem = itemId => {
    setPackedIds(current => (current.includes(itemId) ? current : [...current, itemId]));
  };

  const removeItem = itemId => {
    setPackedIds(current => current.filter(id => id !== itemId));
  };

  const leaveItem = itemId => {
    removeItem(itemId);
    setDetailItemId(null);
  };

  const evaluate = () => {
    const missing = episode.requiredItemIds.filter(id => !packedIds.includes(id));
    const overWeight = packedWeight > episode.weightLimit;
    const success = missing.length === 0 && !overWeight;
    const takenItems = episode.items.filter(item => packedIds.includes(item.id));
    const missedItems = missing.map(id => itemsById[id]).filter(Boolean);
    const riskyItems = takenItems.filter(item => item.category === 'trap');
    const overloadPenalty = overWeight ? Math.ceil((packedWeight - episode.weightLimit) * 8) : 0;
    const score = Math.max(0, Math.min(100, 100 - missedItems.length * 14 - riskyItems.length * 8 - overloadPenalty));
    const messages = [];

    if (missing.length > 0) {
      messages.push(`${ui.missing}: ${missing.map(id => getCopy(itemsById[id], language).name).join(', ')}`);
    }
    if (overWeight) {
      messages.push(`${ui.overWeight}: ${packedWeight.toFixed(1)} / ${episode.weightLimit.toFixed(1)} kg`);
    }
    if (success) {
      messages.push(ui.ready);
    }

    setResult({ success, messages, takenItems, missedItems, riskyItems, score });
    if (success) {
      onComplete(episode, { success, messages, takenItems, missedItems, riskyItems, score });
    }
  };

  const reset = () => {
    setPackedIds([]);
    setActiveContainerId(null);
    setDetailItemId(null);
    setResult(null);
  };

  return (
    <div className="mx-auto max-w-md pb-28 sm:max-w-5xl sm:pb-4">
      {completed && (
        <div className="mb-3 rounded-sm border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
          {ui.alreadyDone}
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
        <section className="space-y-3">
          <div className="rounded-sm border border-border bg-[#131313] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-warning">{ui.scene}</div>
                <h1 className="mt-1 text-2xl font-bold leading-tight text-foreground sm:text-3xl">{copy.title}</h1>
                <p className="mt-1 text-sm text-muted-foreground">{copy.location}</p>
              </div>
              <div className="rounded-sm border border-border bg-black/25 px-3 py-2 text-right text-xs font-mono text-muted-foreground">
                {requiredPacked}/{episode.requiredItemIds.length}
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{copy.story}</p>
            <p className="mt-2 text-xs leading-relaxed text-warning">{copy.goal}</p>
          </div>

          <SceneView
            episode={episode}
            language={language}
            packedIds={packedIds}
            activeContainerId={activeContainerId}
            onOpenContainer={setActiveContainerId}
            ui={ui}
          />

          <CriticalChecklist episode={episode} packedIds={packedIds} language={language} ui={ui} />

          <div className="grid gap-2 sm:grid-cols-2">
            {copy.characters.map(character => (
              <div key={character.name} className="rounded-sm border border-border bg-muted/10 p-3">
                <div className="text-[10px] font-mono uppercase tracking-widest text-warning">{character.name}</div>
                <p className="mt-1 text-sm leading-relaxed text-foreground/80">{character.line}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="hidden space-y-3 lg:block">
          <div className="rounded-sm border border-border bg-[#131313] p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-warning">{ui.mission}</div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{copy.mission}</p>
          </div>
          <div className="rounded-sm border border-border bg-[#131313] p-4">
            <BackpackPanel packedItems={packedItems} packedWeight={packedWeight} episode={episode} language={language} ui={ui} onRemove={removeItem} />
          </div>
          <div className="grid gap-2">
            <button onClick={reset} className="rounded-sm border border-border px-3 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground">
              {ui.retry}
            </button>
            <button
              data-testid="evaluate-episode-desktop"
              onClick={evaluate}
              className={`rounded-sm px-3 py-3 text-sm font-bold ${canLeave ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border border-danger/40 bg-danger/10 text-danger'}`}
            >
              {canLeave ? ui.evaluate : ui.leaveDisabled}
            </button>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 lg:hidden">
        <BackpackPanel packedItems={packedItems} packedWeight={packedWeight} episode={episode} language={language} ui={ui} onRemove={removeItem} />
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-2 border-t border-border bg-[#101010] p-3">
          <button onClick={reset} className="rounded-sm border border-border px-3 py-3 text-sm font-semibold text-muted-foreground">
            {ui.retry}
          </button>
          <button
            data-testid="evaluate-episode-mobile"
            onClick={evaluate}
            className={`rounded-sm px-3 py-3 text-sm font-bold ${canLeave ? 'bg-primary text-primary-foreground' : 'border border-danger/40 bg-danger/10 text-danger'}`}
          >
            {canLeave ? ui.evaluate : ui.leaveDisabled}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {activeContainer && (
          <ContainerView
            container={activeContainer}
            items={activeItems}
            packedIds={packedIds}
            language={language}
            ui={ui}
            onBack={() => setActiveContainerId(null)}
            onSelectItem={setDetailItemId}
          />
        )}
        {detailItem && (
          <ItemDetailSheet
            item={detailItem}
            packedWeight={packedWeight}
            packed={packedIds.includes(detailItem.id)}
            episode={episode}
            language={language}
            ui={ui}
            onClose={() => setDetailItemId(null)}
            onTake={takeItem}
            onLeave={leaveItem}
          />
        )}
        {result && (
          <ResultPanel
            result={result}
            copy={copy}
            ui={ui}
            language={language}
            onRetry={reset}
            onContinue={() => setResult(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
