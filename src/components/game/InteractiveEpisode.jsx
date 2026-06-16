import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Backpack, Check, ChevronRight, Eye, RotateCcw, Weight, X } from 'lucide-react';
import { getEpisode } from '@/lib/interactiveEpisodes';
import { getUiText } from '@/lib/i18n';

function getObjectCopy(item, language) {
  return item.copy[language] || item.copy.ru;
}

function getEpisodeCopy(episode, language) {
  return episode.copy[language] || episode.copy.ru;
}

function SceneIllustration({ episode, language, packedIds, selectedId, onSelect }) {
  return (
    <div className="relative aspect-[1672/941] min-h-[260px] overflow-hidden rounded-sm border border-border bg-[#171512]">
      {episode.sceneImage ? (
        <img
          src={episode.sceneImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable="false"
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:48px_48px]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/25 pointer-events-none" />

      {episode.objects.map(item => {
        const packed = packedIds.includes(item.id);
        const active = selectedId === item.id;
        const copy = getObjectCopy(item, language);
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={`absolute rounded-sm border transition-all ${
              active
                ? 'border-accent bg-accent/20 shadow-[0_0_24px_rgba(245,166,35,0.5)]'
                : packed
                  ? 'border-success/40 bg-success/10'
                  : 'border-white/0 bg-white/0 hover:border-accent/70 hover:bg-accent/15'
            }`}
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              width: `${item.w}%`,
              height: `${item.h}%`
            }}
            aria-label={copy.name}
            title={copy.name}
          >
            {packed && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-success text-[10px] text-white">
                <Check size={12} />
              </span>
            )}
          </button>
        );
      })}

      <div className="absolute left-4 top-4 rounded-sm border border-accent/30 bg-black/60 px-3 py-2 backdrop-blur">
        <div className="text-[10px] font-mono uppercase tracking-widest text-accent">{getUiText(language).episode.timeLeft}</div>
      </div>
    </div>
  );
}

function ResultPanel({ success, messages, copy, ui, onRetry, onContinue }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        className="relative w-full max-w-2xl tactical-panel rounded-sm border border-border p-5"
        initial={{ y: 20, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 20, scale: 0.96 }}
      >
        <div className={`mb-4 inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-sm font-heading font-bold ${
          success ? 'border-success/40 bg-success/10 text-success' : 'border-warning/40 bg-warning/10 text-warning'
        }`}>
          {success ? ui.complete : ui.consequences}
        </div>
        <h2 className="font-display text-3xl font-bold text-foreground">{copy.title}</h2>
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
        <div className="mt-4 rounded-sm border border-accent/25 bg-accent/10 p-4">
          <div className="text-xs font-mono uppercase tracking-widest text-accent">{ui.expertNote}</div>
          <p className="mt-2 text-sm leading-relaxed text-foreground/85">{copy.expertNote}</p>
        </div>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button onClick={onRetry} className="flex flex-1 items-center justify-center gap-2 rounded-sm border border-border px-4 py-3 font-heading text-sm font-semibold text-muted-foreground hover:border-foreground/30 hover:text-foreground">
            <RotateCcw size={16} /> {ui.retry}
          </button>
          <button onClick={onContinue} className="flex flex-[1.4] items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 font-heading text-sm font-bold text-primary-foreground hover:bg-primary/90">
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
  const copy = getEpisodeCopy(episode, language);
  const [packedIds, setPackedIds] = useState([]);
  const [selectedId, setSelectedId] = useState(episode.objects[0]?.id);
  const [result, setResult] = useState(null);

  const selected = episode.objects.find(item => item.id === selectedId) || episode.objects[0];
  const selectedCopy = selected ? getObjectCopy(selected, language) : null;
  const packedItems = episode.objects.filter(item => packedIds.includes(item.id));
  const packedWeight = useMemo(
    () => packedItems.reduce((total, item) => total + item.weight, 0),
    [packedItems]
  );
  const requiredPacked = episode.requiredItemIds.filter(id => packedIds.includes(id)).length;

  const togglePacked = itemId => {
    setPackedIds(current => (
      current.includes(itemId)
        ? current.filter(id => id !== itemId)
        : [...current, itemId]
    ));
  };

  const evaluate = () => {
    const missing = episode.requiredItemIds.filter(id => !packedIds.includes(id));
    const overWeight = packedWeight > episode.weightLimit;
    const success = missing.length === 0 && !overWeight;
    const messages = [];

    if (missing.length > 0) {
      messages.push(`${ui.missing}: ${missing.map(id => getObjectCopy(episode.objects.find(item => item.id === id), language).name).join(', ')}`);
    }
    if (overWeight) {
      messages.push(`${ui.overWeight}: ${packedWeight.toFixed(1)} / ${episode.weightLimit} кг`);
    }
    if (success) {
      messages.push(ui.ready);
    }

    setResult({ success, messages });
    if (success) {
      onComplete(episode);
    }
  };

  const reset = () => {
    setPackedIds([]);
    setSelectedId(episode.objects[0]?.id);
    setResult(null);
  };

  return (
    <div className="space-y-4">
      {completed && (
        <div className="rounded-sm border border-success/30 bg-success/10 px-4 py-3 text-sm text-success">
          {ui.alreadyDone}
        </div>
      )}

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
        <section className="space-y-3">
          <div className="tactical-panel rounded-sm border border-border p-4">
            <div className="text-xs font-mono uppercase tracking-widest text-accent">{ui.scene}</div>
            <div className="mt-1 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="font-display text-3xl font-bold text-foreground">{copy.title}</h1>
                <p className="text-sm text-muted-foreground">{copy.location}</p>
              </div>
              <div className="rounded-sm border border-border bg-black/20 px-3 py-2 text-xs font-mono text-muted-foreground">
                {ui.gathered}: {requiredPacked}/{episode.requiredItemIds.length}
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{copy.story}</p>
          </div>

          <SceneIllustration
            episode={episode}
            language={language}
            packedIds={packedIds}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        </section>

        <aside className="space-y-3">
          <div className="tactical-panel rounded-sm border border-border p-4">
            <div className="text-xs font-mono uppercase tracking-widest text-accent">{ui.mission}</div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{copy.mission}</p>
            <p className="mt-2 text-xs leading-relaxed text-warning">{copy.goal}</p>
          </div>

          {selected && (
            <div className="tactical-panel rounded-sm border border-border p-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <Eye size={14} /> {ui.inspect}
              </div>
              <h2 className="mt-2 font-heading text-xl font-bold text-foreground">{selectedCopy.name}</h2>
              <p className="mt-1 text-xs text-muted-foreground">{selectedCopy.place}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{selectedCopy.note}</p>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-xs font-mono text-muted-foreground">{selected.weight} кг</span>
                <button
                  type="button"
                  onClick={() => togglePacked(selected.id)}
                  className={`rounded-sm px-4 py-2 font-heading text-sm font-bold transition-colors ${
                    packedIds.includes(selected.id)
                      ? 'border border-success/40 bg-success/10 text-success hover:bg-success/15'
                      : 'bg-accent text-accent-foreground hover:bg-accent/90'
                  }`}
                >
                  {packedIds.includes(selected.id) ? ui.remove : ui.take}
                </button>
              </div>
            </div>
          )}

          <div className="tactical-panel rounded-sm border border-border p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
                <Backpack size={14} /> {ui.inventory}
              </div>
              <div className={`flex items-center gap-1 text-xs font-mono ${packedWeight > episode.weightLimit ? 'text-danger' : 'text-muted-foreground'}`}>
                <Weight size={13} /> {packedWeight.toFixed(1)} / {episode.weightLimit} кг
              </div>
            </div>
            {packedItems.length === 0 ? (
              <div className="rounded-sm border border-dashed border-border px-3 py-5 text-center text-sm text-muted-foreground">
                {ui.selected}: 0
              </div>
            ) : (
              <div className="space-y-2">
                {packedItems.map(item => {
                  const itemCopy = getObjectCopy(item, language);
                  return (
                    <button
                      key={item.id}
                      onClick={() => togglePacked(item.id)}
                      className="flex w-full items-center justify-between gap-3 rounded-sm border border-border bg-muted/15 px-3 py-2 text-left hover:border-danger/40"
                    >
                      <span className="text-sm text-foreground/85">{itemCopy.name}</span>
                      <X size={14} className="text-muted-foreground" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="grid grid-cols-[0.8fr_1.2fr] gap-2">
            <button onClick={reset} className="rounded-sm border border-border px-3 py-3 font-heading text-sm font-semibold text-muted-foreground hover:text-foreground">
              {ui.retry}
            </button>
            <button onClick={evaluate} className="rounded-sm bg-primary px-3 py-3 font-heading text-sm font-bold text-primary-foreground hover:bg-primary/90">
              {ui.evaluate}
            </button>
          </div>
        </aside>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {copy.characters.map(character => (
          <div key={character.name} className="rounded-sm border border-border bg-muted/10 p-3">
            <div className="text-xs font-mono uppercase tracking-widest text-accent">{character.name}</div>
            <p className="mt-1 text-sm leading-relaxed text-foreground/80">{character.line}</p>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {result && (
          <ResultPanel
            success={result.success}
            messages={result.messages}
            copy={copy}
            ui={ui}
            onRetry={reset}
            onContinue={() => setResult(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
