// ===== LESSON DATA =====
// type = 'text' | 'compare' | 'image' | 'video'

export const LESSONS = [
  {
    lesson_id: "lesson_canned_food",
    title: "Как определить безопасную консервированную еду",
    subtitle: "Найденная консерва: спасение или яд?",
    category: "hunting",
    icon: "🥫",
    related_quest: "q_day0",
    related_skill: "food_berries",
    slides: [
      {
        type: "text",
        title: "Ты нашел консерву",
        text: "В постапокалиптическом мире консервы могут спасти жизнь, но поврежденная банка опаснее голода. Перед едой проверь форму, швы, ржавчину, запах и давление внутри."
      },
      {
        type: "compare",
        title: "Крышка: нормальная или вздутая",
        good: {
          label: "Безопаснее",
          visual: "can-flat",
          caption: "Крышка плоская или слегка вогнутая. При нажатии не пружинит. Банка держит вакуум."
        },
        bad: {
          label: "Опасно",
          visual: "can-bulged",
          caption: "Крышка выпуклая или пружинит. Внутри мог образоваться газ от бактерий. Такую банку не пробуй."
        }
      },
      {
        type: "compare",
        title: "Корпус: целый или поврежденный",
        good: {
          label: "Можно проверять дальше",
          visual: "can-clean",
          caption: "Нет сквозной ржавчины, дыр, глубоких вмятин на швах. После открытия запах нейтральный."
        },
        bad: {
          label: "Выбросить",
          visual: "can-rust",
          caption: "Сквозная ржавчина, вздутие, трещины и глубокие вмятины означают нарушение герметичности."
        }
      },
      {
        type: "text",
        title: "Правило открытой консервы",
        text: "Открыл - сразу понюхай. Кислый, гнилостный или странный запах означает: выбросить. Если жидкость брызнула под давлением, не ешь и вымой руки. При сомнениях лучше потерять банку, чем рискнуть жизнью."
      },
      {
        type: "video",
        title: "Видео: чем опасны консервы",
        url: "https://www.youtube.com/embed/BcqvkM7VZTY",
        watchUrl: "https://www.youtube.com/watch?v=BcqvkM7VZTY",
        duration: "по теме",
        caption: "Разбор признаков опасных консервов и риска ботулизма."
      }
    ],
    real_world: "Ботулотоксин почти не имеет запаха и вкуса. Вздутые и поврежденные банки в условиях выживания нельзя считать безопасной едой."
  },
  {
    lesson_id: "lesson_fire_wood",
    title: "Дрова для огня: сухие против сырых",
    subtitle: "Правильная древесина - половина успеха",
    category: "fire",
    icon: "🪵",
    related_quest: "q_fire1",
    related_skill: "fire_basic",
    slides: [
      {
        type: "text",
        title: "Дерево - это не просто дерево",
        text: "Главная ошибка новичка - брать первые попавшиеся ветки. Сырое дерево дымит, тушит огонь и забирает силы. Сухая древесина легкая, звонкая и ломается с хрустом."
      },
      {
        type: "compare",
        title: "Ветки: сухие или сырые",
        good: {
          label: "Подходит для огня",
          visual: "dry-wood",
          caption: "Сухая ветка серо-коричневая, легкая, ломается с хрустом. Под корой нет зеленого влажного слоя."
        },
        bad: {
          label: "Плохое топливо",
          visual: "wet-wood",
          caption: "Сырая ветка гнется, тяжелая и влажная под корой. Она даст дым и будет гасить пламя."
        }
      },
      {
        type: "image",
        title: "Трут, растопка и топливо",
        visual: "fire-layers",
        caption: "Сначала трут ловит искру, затем тонкая растопка поднимает пламя, и только после этого кладут более толстые ветки."
      },
      {
        type: "text",
        title: "Трут - самое важное",
        text: "Подойдет сухая березовая кора, гриб-трутовик, сухая трава, пух камыша или одуванчика. Трут должен быть абсолютно сухим."
      },
      {
        type: "video",
        title: "Видео: костер в сыром лесу",
        url: "https://www.youtube.com/embed/UxMAhGyMPLU",
        watchUrl: "https://www.youtube.com/watch?v=UxMAhGyMPLU",
        duration: "по теме",
        caption: "Практика разведения костра, когда вокруг влажные материалы."
      }
    ],
    real_world: "В большинстве неудачных попыток развести огонь проблема не в технике, а во влажных материалах."
  },
  {
    lesson_id: "lesson_water_purify",
    title: "Очистка воды: фильтр и кипячение",
    subtitle: "Любую найденную воду нужно обеззаразить",
    category: "water",
    icon: "💧",
    related_quest: "q_water1",
    related_skill: "water_purify",
    slides: [
      {
        type: "text",
        title: "Грязная вода опасна",
        text: "Вода из природного источника может содержать бактерии, паразитов и химические загрязнения. Фильтр убирает грязь, а кипячение уничтожает большинство патогенов."
      },
      {
        type: "compare",
        title: "Источники воды",
        good: {
          label: "Лучший выбор",
          visual: "running-water",
          caption: "Родник, быстрая река или дождевая вода с чистой поверхности. Все равно фильтровать и кипятить."
        },
        bad: {
          label: "Высокий риск",
          visual: "stagnant-water",
          caption: "Стоячий пруд, мутная лужа, вода рядом с мусором или трупами животных. Нужна двойная осторожность."
        }
      },
      {
        type: "image",
        title: "Фильтр из бутылки",
        visual: "water-filter",
        caption: "Слои в перевернутой бутылке: ткань, уголь, песок, мелкий гравий. После фильтра воду обязательно кипятят."
      },
      {
        type: "video",
        title: "Видео: фильтр из бутылки",
        url: "https://www.youtube.com/embed/RHucDrNRhtY",
        watchUrl: "https://www.youtube.com/watch?v=RHucDrNRhtY",
        duration: "по теме",
        caption: "Полевой фильтр из пластиковой бутылки, песка, угля и ваты."
      }
    ],
    real_world: "Кипячение - самый надежный способ обеззараживания воды в полевых условиях, если нет таблеток или заводского фильтра."
  },
  {
    lesson_id: "lesson_shelter",
    title: "Построй шалаш и защиту от холода",
    subtitle: "Укрытие часто важнее еды",
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
        title: "Место для лагеря",
        good: {
          label: "Хорошее место",
          visual: "safe-camp",
          caption: "Возвышенность, защита от ветра, сухая земля, нет следов потоков воды и опасных деревьев над головой."
        },
        bad: {
          label: "Опасное место",
          visual: "bad-camp",
          caption: "Низина, русло ручья, склон с камнями или мертвые деревья сверху. Ночью такое место может стать ловушкой."
        }
      },
      {
        type: "image",
        title: "Изоляция от земли",
        visual: "ground-insulation",
        caption: "Толстый слой лапника, листьев или сухой травы под телом сохраняет тепло лучше, чем большой костер рядом."
      },
      {
        type: "video",
        title: "Видео: быстрый шалаш в лесу",
        url: "https://www.youtube.com/embed/dbNfXDsc5y4",
        watchUrl: "https://www.youtube.com/watch?v=dbNfXDsc5y4",
        duration: "по теме",
        caption: "Пример простого лесного укрытия из подручных материалов."
      }
    ],
    real_world: "Даже простое укрытие с толстым слоем сухой изоляции может серьезно снизить риск переохлаждения."
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
        title: "Инфекция опаснее пореза",
        text: "Без антибиотиков грязная рана может стать смертельной. Первые правила простые: промыть чистой водой, закрыть чистой повязкой, менять повязку и следить за воспалением."
      },
      {
        type: "compare",
        title: "Обработка раны",
        good: {
          label: "Правильно",
          visual: "clean-wound",
          caption: "Промыть чистой водой, убрать грязь, наложить чистую повязку, менять каждый день."
        },
        bad: {
          label: "Нельзя",
          visual: "dirty-wound",
          caption: "Прижигать огнем, мазать грязью или закрывать рану грязной тканью - прямой путь к инфекции."
        }
      },
      {
        type: "image",
        title: "Подорожник как временная помощь",
        visual: "plantain",
        caption: "Свежий чистый лист подорожника можно размять до появления сока и приложить к небольшой ране как временную меру."
      },
      {
        type: "video",
        title: "Видео: первая помощь при кровотечении",
        url: "https://www.youtube.com/embed/crcIiNoQ5Aw",
        watchUrl: "https://www.youtube.com/watch?v=crcIiNoQ5Aw",
        duration: "по теме",
        caption: "Базовые действия при кровотечении и травме до получения медицинской помощи."
      }
    ],
    real_world: "Гигиена и чистая вода часто важнее редких лекарств: они предотвращают проблему до того, как она станет смертельной."
  },
  {
    lesson_id: "lesson_edible_plants",
    title: "Съедобные и ядовитые растения",
    subtitle: "Если не уверен на 100% - не ешь",
    category: "water",
    icon: "🌿",
    related_quest: "q_food1",
    related_skill: "food_berries",
    slides: [
      {
        type: "text",
        title: "Одна ошибка может стоить жизни",
        text: "Некоторые ядовитые растения похожи на съедобные. Начинай только с растений, которые точно знаешь в своем регионе."
      },
      {
        type: "compare",
        title: "Ягоды",
        good: {
          label: "Узнаваемые",
          visual: "safe-berries",
          caption: "Черника, малина, земляника: изучай листья, форму ягод, место роста и сезон."
        },
        bad: {
          label: "Подозрительные",
          visual: "poison-berries",
          caption: "Белые или незнакомые ягоды, одиночные яркие плоды, странный запах. Не пробуй на вкус."
        }
      },
      {
        type: "compare",
        title: "Дикий чеснок и ландыш",
        good: {
          label: "Дикий чеснок",
          visual: "wild-garlic",
          caption: "Главный признак - сильный запах чеснока при растирании листа."
        },
        bad: {
          label: "Ландыш",
          visual: "lily-valley",
          caption: "Похож листьями, но не пахнет чесноком и ядовит. В сомнении - не трогай."
        }
      },
      {
        type: "video",
        title: "Видео: ядовитые растения средней полосы",
        url: "https://www.youtube.com/embed/WGsa6AVfFL0",
        watchUrl: "https://www.youtube.com/watch?v=WGsa6AVfFL0",
        duration: "по теме",
        caption: "Как не перепутать опасные растения и грибы со съедобными двойниками."
      }
    ],
    real_world: "Выучи 10-15 надежно узнаваемых растений своего региона. Этого достаточно, чтобы не рисковать незнакомыми находками."
  },
  {
    lesson_id: "lesson_trap_snare",
    title: "Силки и ловушки для мелкой дичи",
    subtitle: "Пассивная охота работает, пока ты спишь",
    category: "hunting",
    icon: "🪤",
    related_quest: "q_food1",
    related_skill: "hunt_trap",
    slides: [
      {
        type: "text",
        title: "Охота головой, а не ногами",
        text: "Активная охота часто сжигает больше калорий, чем приносит. Силки работают без тебя, если поставить их на тропе и регулярно проверять."
      },
      {
        type: "image",
        title: "Правильный силок",
        visual: "snare",
        caption: "Петля из проволоки или прочной веревки ставится на звериной тропе. Размер, высота и крепление зависят от животного."
      },
      {
        type: "compare",
        title: "Место для силка",
        good: {
          label: "Правильное место",
          visual: "animal-track",
          caption: "Звериная тропа: примятая трава, следы, помет, узкий проход между кустами."
        },
        bad: {
          label: "Пустое место",
          visual: "empty-field",
          caption: "Открытый участок без следов. Животное просто обойдет ловушку."
        }
      },
      {
        type: "video",
        title: "Видео: петли и ловушки для выживания",
        url: "https://www.youtube.com/embed/UGsV-7Pbtv8",
        watchUrl: "https://www.youtube.com/watch?v=UGsV-7Pbtv8",
        duration: "по теме",
        caption: "Обзор базовых принципов ловушек, их плюсов и ограничений."
      }
    ],
    real_world: "Пассивные ловушки экономят силы и работают постоянно, но требуют знаний, регулярной проверки и соблюдения местных законов."
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
