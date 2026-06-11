// ===== LESSON DATA =====
// Each lesson has a sequence of slides:
// type = 'text' | 'compare' | 'image' | 'video'

export const LESSONS = [
  {
    lesson_id: "lesson_canned_food",
    title: "Как определить безопасную консервированную еду",
    subtitle: "Найденная консерва - спасение или яд?",
    category: "hunting",
    icon: "🥫",
    related_quest: "q_day0",
    related_skill: "food_berries",
    slides: [
      {
        type: "text",
        title: "Ты нашел консерву",
        text: "В постапокалиптическом мире консервы - золото. Но неправильная банка может убить быстрее голода. Ботулизм почти не имеет запаха и вкуса, поэтому сначала проверяй форму, швы, ржавчину и давление внутри."
      },
      {
        type: "compare",
        title: "Крышка: нормальная vs вздутая",
        good: {
          label: "✅ Безопасно",
          image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80",
          caption: "Крышка плоская или слегка вогнутая. При нажатии не пружинит. Банка держит вакуум."
        },
        bad: {
          label: "❌ Опасно - выброси",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
          caption: "Крышка выпуклая или пружинит. Внутри газ от бактерий. Такую банку нельзя пробовать."
        }
      },
      {
        type: "compare",
        title: "Корпус: целый vs ржавый",
        good: {
          label: "✅ Можно проверить",
          image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
          caption: "Нет сквозной ржавчины, дыр, глубоких вмятин на швах. После открытия запах нейтральный."
        },
        bad: {
          label: "❌ Выброси без раздумий",
          image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=400&q=80",
          caption: "Сквозная ржавчина, вздутие, трещины и глубокие вмятины означают нарушение герметичности."
        }
      },
      {
        type: "text",
        title: "Правило открытой консервы",
        text: "Открыл - сразу понюхай. Кислый, гнилостный или просто странный запах означает немедленно выбросить. Если жидкость брызнула под давлением, не ешь и вымой руки. Если сомневаешься - прокипяти содержимое минимум 10 минут."
      },
      {
        type: "video",
        title: "Как проверить консервы на пригодность",
        url: "https://www.youtube.com/embed/Jk5-LB-TKZA",
        duration: "5 мин",
        caption: "Практическая проверка банок в полевых условиях: форма, запах, герметичность и признаки порчи."
      }
    ],
    real_world: "Ботулотоксин - один из самых опасных биологических токсинов. При сомнениях банку лучше потерять, чем рисковать жизнью."
  },
  {
    lesson_id: "lesson_fire_wood",
    title: "Дрова для огня: сухие vs сырые",
    subtitle: "Правильный выбор древесины - половина успеха",
    category: "fire",
    icon: "🪵",
    related_quest: "q_fire1",
    related_skill: "fire_basic",
    slides: [
      {
        type: "text",
        title: "Почему дерево - это не просто дерево",
        text: "Главная ошибка новичка - брать первые попавшиеся ветки. Сырое дерево дымит, тушит огонь и забирает силы. Сухая древесина легкая, звонкая и ломается с хрустом."
      },
      {
        type: "compare",
        title: "Ветки: сухие vs сырые",
        good: {
          label: "✅ Подходит для огня",
          image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
          caption: "Сухая ветка серо-коричневая, легкая, ломается с хрустом. Под корой нет зеленого влажного слоя."
        },
        bad: {
          label: "❌ Не разжечь огонь",
          image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80",
          caption: "Сырая ветка гнется, тяжелая, под корой влажная. Она даст дым и погасит пламя."
        }
      },
      {
        type: "compare",
        title: "Твердое и мягкое дерево",
        good: {
          label: "✅ Твердое - для сверла",
          image: "https://images.unsplash.com/photo-1513836279014-a89f7d76ae86?w=400&q=80",
          caption: "Береза, дуб и похожие твердые породы дают нужное трение и горячую угольную пыль."
        },
        bad: {
          label: "✅ Мягкое - для доски",
          image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80",
          caption: "Ива, осина и тополь легче режутся и подходят для доски-огнива."
        }
      },
      {
        type: "text",
        title: "Трут - самое важное",
        text: "Трут ловит искру и раздувает ее в пламя. Подойдет сухая березовая кора, гриб-трутовик, сухая трава, пух камыша или одуванчика. Трут должен быть абсолютно сухим."
      },
      {
        type: "video",
        title: "Лук-дрель для добычи огня",
        url: "https://www.youtube.com/embed/aFP8JdlPuAo",
        duration: "12 мин",
        caption: "Как сделать лук-дрель из подручных материалов и раздуть уголек в пламя."
      },
      {
        type: "video",
        title: "Огонь без спичек",
        url: "https://www.youtube.com/embed/a7kBVJjbm_U",
        duration: "8 мин",
        caption: "Сравнение методов добычи огня без современных инструментов."
      }
    ],
    real_world: "В большинстве неудачных попыток развести огонь проблема не в технике, а во влажных материалах."
  },
  {
    lesson_id: "lesson_water_purify",
    title: "Очистка воды: фильтр и кипячение",
    subtitle: "Любая вода может стать безопасной",
    category: "water",
    icon: "💧",
    related_quest: "q_water1",
    related_skill: "water_purify",
    slides: [
      {
        type: "text",
        title: "Вода убивает быстрее жажды",
        text: "Грязная вода может содержать опасные бактерии и паразитов. В мире без врачей диарея и обезвоживание становятся смертельной угрозой. Фильтр убирает грязь, кипячение убивает большинство патогенов."
      },
      {
        type: "compare",
        title: "Источники: безопасные vs опасные",
        good: {
          label: "✅ Лучшие источники",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
          caption: "Родник, быстрая горная река, дождевая вода с чистой поверхности. Все равно кипятить."
        },
        bad: {
          label: "⚠️ Кипятить обязательно",
          image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
          caption: "Стоячий пруд, мутная вода, лужи и каналы. Нужны фильтр и кипячение."
        }
      },
      {
        type: "image",
        title: "Фильтр из бутылки",
        image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&q=80",
        caption: "Слои в перевернутой бутылке: ткань, мелкий гравий, уголь от костра, крупный песок, ткань. После фильтра воду обязательно кипятить."
      },
      {
        type: "video",
        title: "Самодельный фильтр и кипячение",
        url: "https://www.youtube.com/embed/iHnGHaHmNKo",
        duration: "10 мин",
        caption: "Пошаговое видео по сборке фильтра и безопасному хранению чистой воды."
      }
    ],
    real_world: "Кипячение - самый надежный способ обеззараживания воды в полевых условиях, если нет таблеток или заводского фильтра."
  },
  {
    lesson_id: "lesson_shelter",
    title: "Построй землянку и шалаш",
    subtitle: "Тепло без огня - это реально",
    category: "shelter",
    icon: "🏕️",
    related_quest: "q_shelter1",
    related_skill: "shelter_basic",
    slides: [
      {
        type: "text",
        title: "Укрытие важнее комфорта",
        text: "Холод забирает силы быстрее голода. Хорошее укрытие защищает от ветра, дождя и потери тепла через землю."
      },
      {
        type: "compare",
        title: "Место: сухое vs опасное",
        good: {
          label: "✅ Хорошее место",
          image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
          caption: "Возвышенность, защита от ветра, нет следов воды и сухие материалы рядом."
        },
        bad: {
          label: "❌ Опасное место",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
          caption: "Низина, русло ручья, склон с камнями, сухие мертвые деревья над головой."
        }
      },
      {
        type: "image",
        title: "Изоляция от земли",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80",
        caption: "Толстый слой лапника, листьев или сухой травы под телом сохраняет тепло лучше, чем большой костер рядом."
      },
      {
        type: "video",
        title: "Шалаш-берлога из листьев",
        url: "https://www.youtube.com/embed/2rjBp9MKQP4",
        duration: "15 мин",
        caption: "Выбор места, каркас, укладка листьев и изоляция пола."
      },
      {
        type: "video",
        title: "Землянка своими руками",
        url: "https://www.youtube.com/embed/C82r3VJbWo8",
        duration: "9 мин",
        caption: "Землянка теплее шалаша и лучше держит температуру в непогоду."
      }
    ],
    real_world: "Даже простое укрытие с толстым слоем сухой изоляции может поднять ощущаемую температуру на десятки градусов."
  },
  {
    lesson_id: "lesson_first_aid",
    title: "Первая помощь без аптечки",
    subtitle: "Рана в дикой природе - смертельная угроза",
    category: "medicine",
    icon: "🩹",
    related_quest: "q_med1",
    related_skill: "med_basic",
    slides: [
      {
        type: "text",
        title: "Инфекция убивает вернее ножа",
        text: "Без антибиотиков грязная рана может стать смертельной. Первые правила простые: промыть чистой водой, закрыть чистой повязкой, менять повязку и следить за воспалением."
      },
      {
        type: "compare",
        title: "Обработка раны",
        good: {
          label: "✅ Правильно",
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80",
          caption: "Промыть чистой водой, убрать грязь, наложить чистую повязку, менять каждый день."
        },
        bad: {
          label: "❌ Никогда не делай",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
          caption: "Прижигать огнем, мазать грязью или зашивать грязную рану - прямой путь к инфекции."
        }
      },
      {
        type: "image",
        title: "Подорожник",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
        caption: "Свежий лист подорожника можно размять до появления сока и приложить к небольшой ране как временную помощь."
      },
      {
        type: "video",
        title: "Первая помощь в полевых условиях",
        url: "https://www.youtube.com/embed/zLLsOmpHZQM",
        duration: "14 мин",
        caption: "Кровотечение, повязка, шина, ожог и базовая полевая гигиена."
      }
    ],
    real_world: "Гигиена и чистая вода часто важнее редких лекарств: они предотвращают проблему до того, как она станет смертельной."
  },
  {
    lesson_id: "lesson_edible_plants",
    title: "Съедобные и ядовитые растения",
    subtitle: "Лес - супермаркет, если знаешь код",
    category: "water",
    icon: "🌿",
    related_quest: "q_food1",
    related_skill: "food_berries",
    slides: [
      {
        type: "text",
        title: "Одна ошибка = смерть",
        text: "Некоторые ядовитые растения похожи на съедобные. Правило простое: если не уверен на 100% - не ешь. Начинай с растений, которые точно знаешь в своем регионе."
      },
      {
        type: "compare",
        title: "Ягоды: безопасные vs опасные",
        good: {
          label: "✅ Знай в лицо",
          image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&q=80",
          caption: "Черника, малина, земляника - изучи внешний вид до похода и проверяй листья, форму, место роста."
        },
        bad: {
          label: "❌ Смертельно опасно",
          image: "https://images.unsplash.com/photo-1502855418-d90c5f9e1ce4?w=400&q=80",
          caption: "Белые ягоды почти всегда подозрительны. Один неверный выбор может стоить жизни."
        }
      },
      {
        type: "compare",
        title: "Дикий чеснок vs ландыш",
        good: {
          label: "✅ Дикий чеснок",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
          caption: "Главный признак - сильный запах чеснока при растирании листа."
        },
        bad: {
          label: "❌ Ландыш",
          image: "https://images.unsplash.com/photo-1490750967868-88df5691cc95?w=400&q=80",
          caption: "Похож на дикий чеснок, но без запаха чеснока. Ядовит."
        }
      },
      {
        type: "video",
        title: "Съедобные растения средней полосы",
        url: "https://www.youtube.com/embed/2rjBp9MKQP4",
        duration: "18 мин",
        caption: "Крапива, одуванчик, подорожник, щавель, черника, малина и дикий лук."
      }
    ],
    real_world: "Выучи 10-15 надежно узнаваемых растений своего региона. Этого достаточно, чтобы не рисковать незнакомыми находками."
  },
  {
    lesson_id: "lesson_trap_snare",
    title: "Силки и ловушки для дичи",
    subtitle: "Пассивная охота работает пока ты спишь",
    category: "hunting",
    icon: "🪤",
    related_quest: "q_food1",
    related_skill: "hunt_trap",
    slides: [
      {
        type: "text",
        title: "Охота ногами vs охота головой",
        text: "Активная охота часто сжигает больше калорий, чем приносит. Силки работают без тебя, если поставить их на тропе и регулярно проверять."
      },
      {
        type: "image",
        title: "Правильный силок",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=80",
        caption: "Петля из проволоки или прочной веревки на звериной тропе. Размер, высота и крепление зависят от животного."
      },
      {
        type: "compare",
        title: "Место для силка",
        good: {
          label: "✅ Правильное место",
          image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80",
          caption: "Звериная тропа: примятая трава, следы, помет, узкий проход между кустами."
        },
        bad: {
          label: "❌ Неправильное место",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
          caption: "Открытое место без следов. Животное просто обойдет ловушку."
        }
      },
      {
        type: "video",
        title: "Как поставить силок",
        url: "https://www.youtube.com/embed/b5eCGJUUQbQ",
        duration: "13 мин",
        caption: "Выбор материала, узел, установка на тропе, маскировка запаха и проверка добычи."
      }
    ],
    real_world: "Пассивные ловушки были основой питания многих племен: они экономят силы и работают постоянно."
  }
];

export const LESSON_CATEGORIES = {
  fire: { name: "Огонь", icon: "🔥", color: "text-orange-400", bgColor: "bg-orange-400/10", borderColor: "border-orange-400/30" },
  water: { name: "Вода и еда", icon: "💧", color: "text-blue-400", bgColor: "bg-blue-400/10", borderColor: "border-blue-400/30" },
  shelter: { name: "Укрытие", icon: "🏕️", color: "text-yellow-400", bgColor: "bg-yellow-400/10", borderColor: "border-yellow-400/30" },
  hunting: { name: "Охота", icon: "🎯", color: "text-green-400", bgColor: "bg-green-400/10", borderColor: "border-green-400/30" },
  medicine: { name: "Медицина", icon: "🩹", color: "text-red-400", bgColor: "bg-red-400/10", borderColor: "border-red-400/30" },
  community: { name: "Группа", icon: "🤝", color: "text-purple-400", bgColor: "bg-purple-400/10", borderColor: "border-purple-400/30" }
};
