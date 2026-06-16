import { useEffect, useMemo, useState } from 'react';
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

const ITEM_ACTION_HINTS = {
  water_bottle: {
    ru: 'Пей небольшими порциями, оставь часть на лекарства и ожидание.',
    en: 'Drink in small portions and keep some for medicine or delays.',
    es: 'Bebe en porciones pequeñas y reserva algo para medicinas o retrasos.'
  },
  flashlight: {
    ru: 'Проверь включение до выхода и держи под рукой, не в глубине рюкзака.',
    en: 'Test it before leaving and keep it reachable, not buried in the pack.',
    es: 'Pruébala antes de salir y llévala a mano, no al fondo de la mochila.'
  },
  batteries: {
    ru: 'Упакуй отдельно от металла и проверь, подходят ли к фонарику.',
    en: 'Pack them away from metal and check that they fit the flashlight.',
    es: 'Guárdalas lejos de metal y comprueba que sirven para la linterna.'
  },
  knife: {
    ru: 'Используй для упаковки, ремонта, вскрытия тары и мелких работ, не как оружие.',
    en: 'Use it for packing, repairs, opening containers, and small tasks, not as a weapon.',
    es: 'Úsalo para empacar, reparar, abrir envases y tareas pequeñas, no como arma.'
  },
  first_aid: {
    ru: 'Положи сверху: при порезе или падении доступ важнее аккуратной упаковки.',
    en: 'Pack it near the top: after a cut or fall, access matters more than neat packing.',
    es: 'Déjalo arriba: tras un corte o caída, el acceso importa más que el orden.'
  },
  warm_jacket: {
    ru: 'Надень сразу, а не клади глубоко: тепло нужно до первой остановки.',
    en: 'Wear it now instead of burying it: warmth matters before the first stop.',
    es: 'Póntela ya en vez de enterrarla: el abrigo importa antes de la primera parada.'
  },
  documents: {
    ru: 'Держи в сухом пакете и отдельно от наличных, чтобы не потерять всё сразу.',
    en: 'Keep them in a dry bag and separate from cash so one loss does not take everything.',
    es: 'Guárdalos secos y separados del efectivo para no perder todo de golpe.'
  },
  duct_tape: {
    ru: 'Намотай немного на карту или бутылку, чтобы не нести весь рулон.',
    en: 'Wrap a short length around a card or bottle instead of carrying the full roll.',
    es: 'Enrolla un tramo en una tarjeta o botella en vez de llevar todo el rollo.'
  },
  powerbank: {
    ru: 'Сразу подключи телефон или выключи лишнее, чтобы сохранить связь.',
    en: 'Charge the phone early or shut down extras to preserve communication.',
    es: 'Carga el teléfono pronto o apaga lo extra para conservar comunicación.'
  },
  canned_food: {
    ru: 'Бери только если есть место после воды, тепла, света и аптечки.',
    en: 'Take it only after water, warmth, light, and first aid are covered.',
    es: 'Tómala solo después de cubrir agua, abrigo, luz y botiquín.'
  }
};

function getCopy(entity, language) {
  return entity.copy[language] || entity.copy.ru;
}

function getActionHint(item, language, ui) {
  const hint = ITEM_ACTION_HINTS[item.id];
  return hint?.[language] || hint?.ru || ui.itemActionDefault;
}

function getUseSituations(copy) {
  return copy.useFor
    .split(',')
    .map(value => value.trim())
    .filter(Boolean)
    .slice(0, 4);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}

function formatTimeCost(seconds) {
  return `-${formatTime(seconds)}`;
}

function hashSeed(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createSeededRandom(seed) {
  let state = seed || 1;
  return () => {
    state = Math.imul(1664525, state) + 1013904223;
    return (state >>> 0) / 4294967296;
  };
}

function shuffleWithSeed(items, seedValue) {
  const shuffled = [...items];
  const random = createSeededRandom(hashSeed(String(seedValue)));

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}

function getOutcome({ success, timeExpired, overWeight, missedItems, riskyItems, ui }) {
  if (success) {
    return {
      title: ui.outcomeReady,
      tone: 'success',
      summary: ui.outcomeReadySummary
    };
  }

  if (timeExpired) {
    return {
      title: ui.outcomeLate,
      tone: 'danger',
      summary: ui.outcomeLateSummary
    };
  }

  if (overWeight) {
    return {
      title: ui.outcomeOverloaded,
      tone: 'danger',
      summary: ui.outcomeOverloadedSummary
    };
  }

  if (missedItems.length > 0) {
    return {
      title: ui.outcomeIncomplete,
      tone: 'warning',
      summary: ui.outcomeIncompleteSummary
    };
  }

  if (riskyItems.length > 0) {
    return {
      title: ui.outcomeRisky,
      tone: 'warning',
      summary: ui.outcomeRiskySummary
    };
  }

  return {
    title: ui.outcomeSurvived,
    tone: 'warning',
    summary: ui.outcomeSurvivedSummary
  };
}

function buildDecisionNotes({ episode, packedIds, missedItems, riskyItems, packedWeight, timeRemaining, language, ui }) {
  const notes = [];
  const hasItem = itemId => packedIds.includes(itemId);
  const missedIds = new Set(missedItems.map(item => item.id));

  if (hasItem('water_bottle')) {
    notes.push({ tone: 'success', text: ui.lessonWaterTaken });
  } else if (missedIds.has('water_bottle')) {
    notes.push({ tone: 'danger', text: ui.lessonWaterMissed });
  }

  if (hasItem('warm_jacket')) {
    notes.push({ tone: 'success', text: ui.lessonWarmthTaken });
  } else if (missedIds.has('warm_jacket')) {
    notes.push({ tone: 'danger', text: ui.lessonWarmthMissed });
  }

  if (hasItem('flashlight') && hasItem('batteries')) {
    notes.push({ tone: 'success', text: ui.lessonLightReady });
  } else if (hasItem('flashlight') && !hasItem('batteries')) {
    notes.push({ tone: 'warning', text: ui.lessonLightNoBatteries });
  } else if (missedIds.has('flashlight')) {
    notes.push({ tone: 'danger', text: ui.lessonLightMissed });
  }

  if (hasItem('first_aid')) {
    notes.push({ tone: 'success', text: ui.lessonFirstAidTaken });
  } else if (missedIds.has('first_aid')) {
    notes.push({ tone: 'danger', text: ui.lessonFirstAidMissed });
  }

  if (hasItem('documents')) {
    notes.push({ tone: 'success', text: ui.lessonDocumentsTaken });
  } else if (missedIds.has('documents')) {
    notes.push({ tone: 'danger', text: ui.lessonDocumentsMissed });
  }

  if (packedWeight > episode.weightLimit) {
    notes.push({ tone: 'danger', text: ui.lessonOverweight });
  }

  if (timeRemaining <= 120) {
    notes.push({ tone: 'warning', text: ui.lessonLowTime });
  }

  riskyItems.slice(0, 3).forEach(item => {
    notes.push({
      tone: 'danger',
      text: `${getCopy(item, language).name}: ${getCopy(item, language).risk}`
    });
  });

  if (notes.length === 0) {
    notes.push({ tone: 'success', text: ui.lessonCleanRun });
  }

  return notes;
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

function MobileBackpackBar({ packedItems, packedWeight, episode, language, ui, onOpen }) {
  const ratio = Math.min(100, (packedWeight / episode.weightLimit) * 100);
  const overweight = packedWeight > episode.weightLimit;
  const previewItems = packedItems.slice(0, 2);

  return (
    <section className="border-t border-border bg-[#101010]/95 px-3 py-3 backdrop-blur">
      <button type="button" onClick={onOpen} className="w-full text-left" aria-label={ui.openBackpack}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground">
            <Backpack size={15} className="text-warning" />
            <span>{ui.inventory}</span>
            <span className="rounded-sm border border-border bg-muted/10 px-1.5 py-0.5 text-[10px] text-muted-foreground">
              {packedItems.length}
            </span>
          </div>
          <div className={`flex items-center gap-1 text-xs font-mono ${overweight ? 'text-danger' : 'text-muted-foreground'}`}>
            <Weight size={14} />
            {packedWeight.toFixed(1)} / {episode.weightLimit.toFixed(1)} kg
          </div>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-sm bg-muted/40">
          <div className={`h-full ${overweight ? 'bg-danger' : 'bg-success'}`} style={{ width: `${ratio}%` }} />
        </div>
        <div className="mt-2 flex min-h-7 gap-2 overflow-hidden">
          {previewItems.length === 0 ? (
            <span className="rounded-sm border border-dashed border-border px-2 py-1 text-xs text-muted-foreground">{ui.emptySlot}</span>
          ) : (
            previewItems.map(item => (
              <span key={item.id} className="flex min-w-0 max-w-[45%] items-center gap-1 rounded-sm border border-border bg-muted/10 px-2 py-1 text-xs text-foreground/80">
                <Icon name={item.icon} size={12} className="shrink-0 text-muted-foreground" />
                <span className="truncate">{getCopy(item, language).name}</span>
              </span>
            ))
          )}
          {packedItems.length > previewItems.length && (
            <span className="rounded-sm border border-border bg-muted/10 px-2 py-1 text-xs text-muted-foreground">
              +{packedItems.length - previewItems.length}
            </span>
          )}
        </div>
      </button>
    </section>
  );
}

function MobileBackpackSheet({ packedItems, packedWeight, episode, language, ui, onRemove, onClose }) {
  return (
    <motion.div className="fixed inset-0 z-50 flex items-end justify-center bg-black/55" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <button className="absolute inset-0 cursor-default" onClick={onClose} aria-label={ui.close} />
      <motion.article
        className="relative max-h-[78vh] w-full max-w-md overflow-y-auto rounded-t-lg border-t border-border bg-[#101010] shadow-2xl"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 280, damping: 32 }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-[#101010]/95 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-warning">
            <Backpack size={15} />
            {ui.inventory}
          </div>
          <button type="button" onClick={onClose} className="rounded-sm border border-border p-2 text-muted-foreground hover:text-foreground" aria-label={ui.close}>
            <X size={16} />
          </button>
        </div>
        <BackpackPanel packedItems={packedItems} packedWeight={packedWeight} episode={episode} language={language} ui={ui} onRemove={onRemove} />
      </motion.article>
    </motion.div>
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

function SceneView({ episode, language, packedIds, activeContainerId, onOpenContainer, ui, timeRemaining }) {
  const timeRatio = Math.max(0, Math.min(100, (timeRemaining / episode.timeLimitSeconds) * 100));
  const isUrgent = timeRemaining <= 120;
  const isWarning = timeRemaining <= 300;
  const timerColor = isUrgent ? 'text-danger' : isWarning ? 'text-warning' : 'text-foreground';
  const timerBar = isUrgent ? 'bg-danger' : isWarning ? 'bg-warning' : 'bg-success';

  return (
    <section data-testid="scene-view" className="relative w-full max-w-full min-w-0 overflow-hidden rounded-sm border border-border bg-[#111]">
      <div className="relative w-full max-w-full min-w-0 aspect-[1672/941] md:min-h-[420px]">
        <img
          src={episode.sceneImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable="false"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.72)_100%)]" />
        <div className={`absolute left-3 top-3 min-w-32 rounded-sm border bg-black/75 px-3 py-2 backdrop-blur ${isUrgent ? 'border-danger/50' : 'border-warning/40'}`}>
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{ui.timeLeft}</div>
          <div data-testid="episode-timer" className={`mt-1 text-xl font-bold leading-none ${timerColor}`}>
            {formatTime(timeRemaining)}
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-sm bg-muted/40">
            <div className={`h-full ${timerBar}`} style={{ width: `${timeRatio}%` }} />
          </div>
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
              {!isActive && (
                <span className="pointer-events-none absolute -bottom-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-sm border border-border bg-black/70 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground sm:block">
                  {formatTimeCost(episode.actionTimeCosts.openContainer)}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ContainerView({ container, items, packedIds, language, ui, actionTimeCosts, onBack, onSelectItem }) {
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
            const packedStyle = packed
              ? 'border-success/40 bg-success/10'
              : 'border-border bg-[#191918] hover:border-foreground/35 hover:bg-[#20201f]';

            return (
              <button
                key={item.id}
                type="button"
                data-testid={`item-${item.id}`}
                onClick={() => onSelectItem(item.id)}
                className={`w-full rounded-sm border p-3 text-left transition-all ${packedStyle}`}
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
                      <span className="rounded-sm border border-border bg-black/20 px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {ui.inspect} {formatTimeCost(actionTimeCosts.inspectItem)}
                      </span>
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
  const useSituations = getUseSituations(copy);
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
          <div className="rounded-sm border border-border bg-muted/10 p-3">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              <Info size={14} /> {ui.itemValue}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/82">{copy.note}</p>
          </div>
          <div className="grid gap-3 rounded-sm border border-border bg-muted/10 p-3">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{ui.itemHelpsWhen}</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {useSituations.map(situation => (
                  <span key={situation} className="rounded-sm border border-border bg-black/20 px-2 py-1 text-xs text-foreground/82">
                    {situation}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-border pt-3">
              <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{ui.itemUseNow}</div>
              <p className="mt-1 text-sm leading-relaxed text-foreground/82">{getActionHint(item, language, ui)}</p>
            </div>
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
            {packed ? ui.locked : `${ui.take} ${formatTimeCost(episode.actionTimeCosts.packItem)}`}
          </button>
          <button
            type="button"
            data-testid={`leave-${item.id}`}
            onClick={() => onLeave(item.id)}
            className="w-full rounded-sm border border-border px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:bg-muted/15 hover:text-foreground"
          >
            {ui.leave} {formatTimeCost(episode.actionTimeCosts.leaveItem)}
          </button>
        </div>
      </motion.article>
    </motion.div>
  );
}

function ResultPanel({ result, copy, ui, language, onRetry, onContinue }) {
  const { success, messages, takenItems, missedItems, riskyItems, decisionNotes, outcome, score } = result;
  const outcomeStyle = {
    success: 'border-success/40 bg-success/10 text-success',
    warning: 'border-warning/40 bg-warning/10 text-warning',
    danger: 'border-danger/40 bg-danger/10 text-danger'
  }[outcome.tone];

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
        <div className={`mt-4 rounded-sm border p-3 ${outcomeStyle}`}>
          <div className="text-xs font-mono uppercase tracking-widest">{ui.outcome}</div>
          <div className="mt-1 text-lg font-bold text-foreground">{outcome.title}</div>
          <p className="mt-1 text-sm leading-relaxed text-foreground/82">{outcome.summary}</p>
        </div>
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
        <div className="mt-4 rounded-sm border border-border bg-muted/10 p-3">
          <div className="text-xs font-mono uppercase tracking-widest text-warning">{ui.decisionReview}</div>
          <div className="mt-3 grid gap-2">
            {decisionNotes.map((note, index) => {
              const noteStyle = {
                success: 'border-success/25 bg-success/10 text-success',
                warning: 'border-warning/25 bg-warning/10 text-warning',
                danger: 'border-danger/25 bg-danger/10 text-danger'
              }[note.tone];

              return (
                <div key={`${note.text}-${index}`} className={`rounded-sm border px-3 py-2 text-sm leading-relaxed ${noteStyle}`}>
                  {note.text}
                </div>
              );
            })}
          </div>
        </div>
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
  const [backpackOpen, setBackpackOpen] = useState(false);
  const [result, setResult] = useState(null);
  const [runSeed, setRunSeed] = useState(() => Date.now());
  const [timeRemaining, setTimeRemaining] = useState(episode.timeLimitSeconds);

  const itemsById = useMemo(() => Object.fromEntries(episode.items.map(item => [item.id, item])), [episode.items]);
  const packedItems = episode.items.filter(item => packedIds.includes(item.id));
  const packedWeight = useMemo(() => packedItems.reduce((total, item) => total + item.weight, 0), [packedItems]);
  const requiredPacked = episode.requiredItemIds.filter(id => packedIds.includes(id)).length;
  const activeContainer = episode.containers.find(container => container.id === activeContainerId);
  const activeItems = useMemo(() => {
    if (!activeContainer) {
      return [];
    }

    const containerItems = activeContainer.itemIds.map(id => itemsById[id]).filter(Boolean);
    return shuffleWithSeed(containerItems, `${runSeed}-${activeContainer.id}`);
  }, [activeContainer, itemsById, runSeed]);
  const detailItem = detailItemId ? itemsById[detailItemId] : null;
  const canLeave = requiredPacked === episode.requiredItemIds.length && packedWeight <= episode.weightLimit && timeRemaining > 0;

  useEffect(() => {
    if (result || timeRemaining <= 0) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setTimeRemaining(current => Math.max(0, current - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [result, timeRemaining]);

  const spendTime = seconds => {
    setTimeRemaining(current => Math.max(0, current - seconds));
  };

  const openContainer = containerId => {
    if (activeContainerId !== containerId) {
      spendTime(episode.actionTimeCosts.openContainer);
    }
    setActiveContainerId(containerId);
  };

  const inspectItem = itemId => {
    spendTime(episode.actionTimeCosts.inspectItem);
    setDetailItemId(itemId);
  };

  const takeItem = itemId => {
    if (!packedIds.includes(itemId)) {
      spendTime(episode.actionTimeCosts.packItem);
    }
    setPackedIds(current => (current.includes(itemId) ? current : [...current, itemId]));
  };

  const removeItem = itemId => {
    spendTime(episode.actionTimeCosts.removeItem);
    setPackedIds(current => current.filter(id => id !== itemId));
  };

  const leaveItem = itemId => {
    spendTime(episode.actionTimeCosts.leaveItem);
    setPackedIds(current => current.filter(id => id !== itemId));
    setDetailItemId(null);
  };

  const evaluate = (reason = 'manual') => {
    const timeExpired = reason === 'timeout' || timeRemaining <= 0;
    const missing = episode.requiredItemIds.filter(id => !packedIds.includes(id));
    const overWeight = packedWeight > episode.weightLimit;
    const success = missing.length === 0 && !overWeight && !timeExpired;
    const takenItems = episode.items.filter(item => packedIds.includes(item.id));
    const missedItems = missing.map(id => itemsById[id]).filter(Boolean);
    const riskyItems = takenItems.filter(item => item.category === 'trap');
    const overloadPenalty = overWeight ? Math.ceil((packedWeight - episode.weightLimit) * 8) : 0;
    const timePenalty = timeExpired ? 25 : 0;
    const score = Math.max(0, Math.min(100, 100 - missedItems.length * 14 - riskyItems.length * 8 - overloadPenalty - timePenalty));
    const outcome = getOutcome({ success, timeExpired, overWeight, missedItems, riskyItems, ui });
    const decisionNotes = buildDecisionNotes({ episode, packedIds, missedItems, riskyItems, packedWeight, timeRemaining, language, ui });
    const messages = [];

    if (timeExpired) {
      messages.push(ui.timeExpired);
    }
    if (missing.length > 0) {
      messages.push(`${ui.missing}: ${missing.map(id => getCopy(itemsById[id], language).name).join(', ')}`);
    }
    if (overWeight) {
      messages.push(`${ui.overWeight}: ${packedWeight.toFixed(1)} / ${episode.weightLimit.toFixed(1)} kg`);
    }
    if (success) {
      messages.push(ui.ready);
    }

    setResult({ success, messages, takenItems, missedItems, riskyItems, decisionNotes, outcome, score });
    if (success) {
      onComplete(episode, { success, messages, takenItems, missedItems, riskyItems, decisionNotes, outcome, score });
    }
  };

  useEffect(() => {
    if (!result && timeRemaining === 0) {
      evaluate('timeout');
    }
  }, [result, timeRemaining]);

  const reset = () => {
    setPackedIds([]);
    setActiveContainerId(null);
    setDetailItemId(null);
    setBackpackOpen(false);
    setResult(null);
    setRunSeed(Date.now());
    setTimeRemaining(episode.timeLimitSeconds);
  };

  return (
    <div className="mx-auto max-w-md pb-40 md:max-w-6xl md:pb-4">
      {completed && (
        <div className="mb-3 rounded-sm border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
          {ui.alreadyDone}
        </div>
      )}

      <div className="grid min-w-0 gap-4 md:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px]">
        <section className="min-w-0 space-y-3">
          <div className="rounded-sm border border-border bg-[#131313] p-3 sm:p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-warning">{ui.scene}</div>
                <h1 className="mt-1 text-xl font-bold leading-tight text-foreground sm:text-3xl">{copy.title}</h1>
                <p className="mt-1 text-sm text-muted-foreground">{copy.location}</p>
              </div>
              <div className="rounded-sm border border-border bg-black/25 px-3 py-2 text-right text-xs font-mono text-muted-foreground">
                {requiredPacked}/{episode.requiredItemIds.length}
              </div>
            </div>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/80 md:line-clamp-none">{copy.story}</p>
            <p className="mt-2 text-xs leading-relaxed text-warning">{copy.goal}</p>
          </div>

          <SceneView
            episode={episode}
            language={language}
            packedIds={packedIds}
            activeContainerId={activeContainerId}
            onOpenContainer={openContainer}
            ui={ui}
            timeRemaining={timeRemaining}
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

        <aside className="hidden space-y-3 md:block">
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
              onClick={() => evaluate()}
              className={`rounded-sm px-3 py-3 text-sm font-bold ${canLeave ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border border-danger/40 bg-danger/10 text-danger'}`}
            >
              {canLeave ? ui.evaluate : ui.leaveDisabled}
            </button>
          </div>
        </aside>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 md:hidden">
        <MobileBackpackBar
          packedItems={packedItems}
          packedWeight={packedWeight}
          episode={episode}
          language={language}
          ui={ui}
          onOpen={() => setBackpackOpen(true)}
        />
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-2 border-t border-border bg-[#101010] p-3">
          <button onClick={reset} className="rounded-sm border border-border px-3 py-3 text-sm font-semibold text-muted-foreground">
            {ui.retry}
          </button>
          <button
            data-testid="evaluate-episode-mobile"
            onClick={() => evaluate()}
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
            actionTimeCosts={episode.actionTimeCosts}
            onBack={() => setActiveContainerId(null)}
            onSelectItem={inspectItem}
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
        {backpackOpen && (
          <MobileBackpackSheet
            packedItems={packedItems}
            packedWeight={packedWeight}
            episode={episode}
            language={language}
            ui={ui}
            onRemove={removeItem}
            onClose={() => setBackpackOpen(false)}
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
