import { LANGUAGES } from '@/lib/i18n';

export default function LanguageSwitcher({ language, onChange, compact = false }) {
  return (
    <div className={`inline-flex items-center border border-border bg-black/20 rounded-sm overflow-hidden ${compact ? 'scale-95 origin-right' : ''}`}>
      {LANGUAGES.map(item => (
        <button
          key={item.code}
          type="button"
          onClick={() => onChange(item.code)}
          className={`px-2.5 py-1.5 text-[11px] font-mono transition-colors ${
            language === item.code
              ? 'bg-accent text-accent-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
          }`}
          title={item.name}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
