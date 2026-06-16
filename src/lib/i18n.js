export const LANGUAGES = [
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' }
];

export const DEFAULT_LANGUAGE = 'ru';

export const UI_TEXT = {
  ru: {
    survivor: 'Выживший',
    level: 'Уровень',
    day: 'День',
    stats: {
      health: 'HP',
      hunger: 'Еда',
      thirst: 'Вода',
      energy: 'Силы',
      warmth: 'Тепло'
    },
    tabs: {
      episode: 'Эпизод',
      learn: 'Обучение',
      base: 'База',
      quests: 'Задания',
      log: 'Журнал'
    },
    start: {
      eyebrow: 'Практическая игра выживания',
      titleTop: 'WILDPATH',
      titleBottom: 'FIELD',
      subtitle: 'Учись через реальные ситуации, ошибки и последствия',
      newGame: 'Новая игра',
      continue: 'Продолжить',
      nameLabel: 'Позывной выжившего',
      namePlaceholder: 'Введи имя...',
      back: 'Назад',
      next: 'Далее',
      goalPrompt: 'Цель выживания',
      begin: 'Начать',
      footer: 'Головоломки · Практические навыки · Реальные решения'
    },
    goals: {
      week: { label: 'Первая неделя', desc: 'короткий режим' },
      month: { label: 'Месяц в пути', desc: 'стандартный режим' },
      hundred: { label: '100 дней', desc: 'долгая кампания' }
    },
    episode: {
      inventory: 'Рюкзак',
      scene: 'Сцена',
      mission: 'Задача',
      gathered: 'Критически важные',
      weight: 'Вес',
      inspect: 'Осмотреть',
      selected: 'Выбрано',
      take: 'Взять',
      remove: 'Убрать',
      leave: 'Оставить',
      close: 'Закрыть',
      open: 'Открыть',
      useFor: 'Для чего',
      risk: 'Риск',
      backpackImpact: 'Влияние на рюкзак',
      contents: 'Содержимое',
      emptySlot: 'Пустое место',
      locked: 'Уже в рюкзаке',
      evaluate: 'Выйти из квартиры',
      retry: 'Переиграть сцену',
      complete: 'Эпизод пройден',
      continue: 'Продолжить',
      expertNote: 'Практический вывод',
      consequences: 'Последствия',
      missing: 'Не хватает ключевых вещей',
      overWeight: 'Слишком тяжёлый рюкзак',
      ready: 'Набор выглядит жизнеспособным',
      alreadyDone: 'Эта сцена уже пройдена. Можно переиграть для тренировки.',
      timeLeft: '18 минут до выхода',
      leaveDisabled: 'Нужны ключевые вещи',
      essential: 'Важно',
      useful: 'Полезно',
      trap: 'Ловушка'
    }
  },
  en: {
    survivor: 'Survivor',
    level: 'Level',
    day: 'Day',
    stats: {
      health: 'HP',
      hunger: 'Food',
      thirst: 'Water',
      energy: 'Energy',
      warmth: 'Warmth'
    },
    tabs: {
      episode: 'Episode',
      learn: 'Learn',
      base: 'Base',
      quests: 'Quests',
      log: 'Log'
    },
    start: {
      eyebrow: 'Practical survival game',
      titleTop: 'WILDPATH',
      titleBottom: 'FIELD',
      subtitle: 'Learn through real situations, mistakes, and consequences',
      newGame: 'New game',
      continue: 'Continue',
      nameLabel: 'Survivor call sign',
      namePlaceholder: 'Enter your name...',
      back: 'Back',
      next: 'Next',
      goalPrompt: 'Survival goal',
      begin: 'Begin',
      footer: 'Puzzles · Practical skills · Real decisions'
    },
    goals: {
      week: { label: 'First week', desc: 'short mode' },
      month: { label: 'A month on the road', desc: 'standard mode' },
      hundred: { label: '100 days', desc: 'long campaign' }
    },
    episode: {
      inventory: 'Backpack',
      scene: 'Scene',
      mission: 'Mission',
      gathered: 'Critical items',
      weight: 'Weight',
      inspect: 'Inspect',
      selected: 'Selected',
      take: 'Take',
      remove: 'Remove',
      leave: 'Leave',
      close: 'Close',
      open: 'Open',
      useFor: 'Use for',
      risk: 'Risk',
      backpackImpact: 'Backpack impact',
      contents: 'Contents',
      emptySlot: 'Empty slot',
      locked: 'Already packed',
      evaluate: 'Leave the apartment',
      retry: 'Replay scene',
      complete: 'Episode complete',
      continue: 'Continue',
      expertNote: 'Practical takeaway',
      consequences: 'Consequences',
      missing: 'Key items are missing',
      overWeight: 'The pack is too heavy',
      ready: 'This kit can keep you moving',
      alreadyDone: 'This scene is complete. You can replay it for practice.',
      timeLeft: '18 minutes before leaving',
      leaveDisabled: 'Critical items required',
      essential: 'Essential',
      useful: 'Useful',
      trap: 'Trap'
    }
  },
  es: {
    survivor: 'Superviviente',
    level: 'Nivel',
    day: 'Día',
    stats: {
      health: 'HP',
      hunger: 'Comida',
      thirst: 'Agua',
      energy: 'Energía',
      warmth: 'Calor'
    },
    tabs: {
      episode: 'Episodio',
      learn: 'Aprender',
      base: 'Base',
      quests: 'Misiones',
      log: 'Registro'
    },
    start: {
      eyebrow: 'Juego práctico de supervivencia',
      titleTop: 'WILDPATH',
      titleBottom: 'FIELD',
      subtitle: 'Aprende con situaciones reales, errores y consecuencias',
      newGame: 'Nueva partida',
      continue: 'Continuar',
      nameLabel: 'Nombre del superviviente',
      namePlaceholder: 'Escribe tu nombre...',
      back: 'Atrás',
      next: 'Siguiente',
      goalPrompt: 'Objetivo de supervivencia',
      begin: 'Empezar',
      footer: 'Puzles · Habilidades prácticas · Decisiones reales'
    },
    goals: {
      week: { label: 'Primera semana', desc: 'modo corto' },
      month: { label: 'Un mes en ruta', desc: 'modo estándar' },
      hundred: { label: '100 días', desc: 'campaña larga' }
    },
    episode: {
      inventory: 'Mochila',
      scene: 'Escena',
      mission: 'Objetivo',
      gathered: 'Objetos críticos',
      weight: 'Peso',
      inspect: 'Inspeccionar',
      selected: 'Seleccionado',
      take: 'Tomar',
      remove: 'Quitar',
      leave: 'Dejar',
      close: 'Cerrar',
      open: 'Abrir',
      useFor: 'Sirve para',
      risk: 'Riesgo',
      backpackImpact: 'Impacto en mochila',
      contents: 'Contenido',
      emptySlot: 'Espacio vacío',
      locked: 'Ya está en la mochila',
      evaluate: 'Salir del apartamento',
      retry: 'Repetir escena',
      complete: 'Episodio completado',
      continue: 'Continuar',
      expertNote: 'Conclusión práctica',
      consequences: 'Consecuencias',
      missing: 'Faltan objetos clave',
      overWeight: 'La mochila pesa demasiado',
      ready: 'Este equipo te permite seguir moviéndote',
      alreadyDone: 'Esta escena ya está completada. Puedes repetirla para practicar.',
      timeLeft: '18 minutos para salir',
      leaveDisabled: 'Faltan objetos críticos',
      essential: 'Esencial',
      useful: 'Útil',
      trap: 'Trampa'
    }
  }
};

export function getLanguage(code) {
  return LANGUAGES.some(language => language.code === code) ? code : DEFAULT_LANGUAGE;
}

export function getUiText(language) {
  return UI_TEXT[getLanguage(language)];
}
