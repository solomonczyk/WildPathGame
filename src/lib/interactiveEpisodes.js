export const EPISODES = [
  {
    id: 'apartment_evacuation',
    sceneImage: '/assets/scenes/apartment-evacuation.png',
    requiredItemIds: ['water_bottle', 'flashlight', 'first_aid', 'warm_jacket', 'documents', 'knife'],
    timeLimitSeconds: 18 * 60,
    weightLimit: 8,
    reward: {
      xp: 120,
      deltas: {
        thirst_delta: 12,
        energy_delta: -4,
        warmth_delta: 8
      },
      skill: 'evacuation_pack'
    },
    copy: {
      ru: {
        title: 'Квартира. 18 минут до выхода',
        location: '12 этаж, вечер, связь пропала',
        mission: 'Собери рюкзак для первой ночи. Места мало, времени почти нет.',
        story: 'За окном слышны сирены. Лера держит дверь, Никита спорит с собой, что брать. Вода в кране уже исчезла. Если выйти неподготовленным, первая ночь решит всё.',
        goal: 'Открой шкаф, холодильник, кладовку и полки. Найди ключевые предметы и не перегрузи рюкзак.',
        expertNote: 'В первые сутки важнее не “всё полезное”, а вода, тёплая одежда, свет, нож, простая аптечка и документы. Тяжёлый рюкзак быстро превращает эвакуацию в остановку.',
        success: 'Вы выходите до темноты. Рюкзак не идеален, но закрывает первые риски: жажду, холод, травму, темноту и потерю документов.',
        failure: 'Вы задержались и собрали набор с пробелами. На лестнице становится ясно: лишний вес и забытая вода опаснее, чем казалось дома.',
        characters: [
          { name: 'Лера', line: 'Сначала воду и тёплую одежду. Всё остальное — только если останется место.' },
          { name: 'Никита', line: 'Хочется взять половину квартиры. Но тащить это будем мы.' }
        ]
      },
      en: {
        title: 'Apartment. 18 minutes to leave',
        location: '12th floor, evening, no signal',
        mission: 'Pack for the first night. Space is tight, time is worse.',
        story: 'Sirens move through the street below. Lera holds the door while Nikita argues with himself over what matters. The tap is already dry. The first night will punish bad choices.',
        goal: 'Open the wardrobe, refrigerator, pantry, and shelves. Find the key items and keep the pack light enough to move.',
        expertNote: 'For the first day, water, warm clothes, light, a knife, basic first aid, and documents matter more than “everything useful.” A heavy pack can stop an evacuation.',
        success: 'You leave before dark. The pack is not perfect, but it covers the first risks: thirst, cold, injury, darkness, and lost identity.',
        failure: 'You lost time and packed around the essentials. On the stairs, extra weight and missing water feel far more dangerous than they did at home.',
        characters: [
          { name: 'Lera', line: 'Water and warm clothes first. Everything else only if there is room.' },
          { name: 'Nikita', line: 'I want to take half the apartment. But we are the ones carrying it.' }
        ]
      },
      es: {
        title: 'Apartamento. 18 minutos para salir',
        location: 'Piso 12, tarde, sin señal',
        mission: 'Prepara la mochila para la primera noche. Hay poco espacio y menos tiempo.',
        story: 'Afuera se oyen sirenas. Lera sostiene la puerta mientras Nikita duda sobre qué llevar. El grifo ya no tiene agua. La primera noche castigará una mala elección.',
        goal: 'Abre el armario, el refrigerador, la despensa y los estantes. Encuentra los objetos clave y no sobrecargues la mochila.',
        expertNote: 'En el primer día importan más el agua, la ropa de abrigo, la luz, un cuchillo, primeros auxilios básicos y documentos que “todo lo útil”. Una mochila pesada puede detener una evacuación.',
        success: 'Salen antes de que oscurezca. La mochila no es perfecta, pero cubre los primeros riesgos: sed, frío, heridas, oscuridad y pérdida de identidad.',
        failure: 'Perdiste tiempo y preparaste una mochila con huecos importantes. En las escaleras, el peso extra y el agua olvidada parecen mucho más peligrosos que en casa.',
        characters: [
          { name: 'Lera', line: 'Primero agua y ropa de abrigo. Lo demás solo si queda espacio.' },
          { name: 'Nikita', line: 'Quiero llevarme medio apartamento. Pero lo cargaremos nosotros.' }
        ]
      },
    },
    extraItems: [
      {
        id: 'raincoat',
        icon: 'shirt',
        category: 'useful',
        weight: 0.4,
        copy: {
          ru: {
            name: 'Дождевик',
            place: 'в шкафу',
            note: 'Дождевик защищает тёплый слой от намокания. Мокрая одежда быстро забирает тепло.',
            useFor: 'дождь, ветер, защита документов и одежды',
            risk: 'Полезен, но не заменяет тёплую куртку.'
          },
          en: {
            name: 'Raincoat',
            place: 'inside the wardrobe',
            note: 'A raincoat keeps warm layers dry. Wet clothing pulls heat away fast.',
            useFor: 'rain, wind, protecting documents and clothing',
            risk: 'Useful, but it does not replace a warm jacket.'
          },
          es: {
            name: 'Impermeable',
            place: 'dentro del armario',
            note: 'Un impermeable mantiene seca la ropa de abrigo. La ropa mojada roba calor rápido.',
            useFor: 'lluvia, viento, proteger documentos y ropa',
            risk: 'Útil, pero no reemplaza una chaqueta de abrigo.'
          }
        }
      },
      {
        id: 'work_gloves',
        icon: 'shirt',
        category: 'useful',
        weight: 0.2,
        copy: {
          ru: {
            name: 'Рабочие перчатки',
            place: 'в шкафу',
            note: 'Перчатки защищают руки от стекла, металла, холодных перил и грязи.',
            useFor: 'стекло, завалы, холод, перенос вещей',
            risk: 'Полезны, но не должны вытеснять аптечку или воду.'
          },
          en: {
            name: 'Work gloves',
            place: 'inside the wardrobe',
            note: 'Gloves protect hands from glass, metal, cold rails, and dirt.',
            useFor: 'glass, debris, cold, carrying gear',
            risk: 'Useful, but not above first aid or water.'
          },
          es: {
            name: 'Guantes de trabajo',
            place: 'dentro del armario',
            note: 'Los guantes protegen de vidrio, metal, barandillas frías y suciedad.',
            useFor: 'vidrio, escombros, frío, cargar equipo',
            risk: 'Útiles, pero no por encima de botiquín o agua.'
          }
        }
      },
      {
        id: 'cotton_hoodie',
        icon: 'shirt',
        category: 'trap',
        weight: 1,
        copy: {
          ru: {
            name: 'Хлопковая толстовка',
            place: 'в шкафу',
            note: 'Хлопок удобен дома, но при намокании долго сохнет и плохо держит тепло.',
            useFor: 'короткое ожидание в сухом помещении',
            risk: 'Во влажную погоду может усилить охлаждение.'
          },
          en: {
            name: 'Cotton hoodie',
            place: 'inside the wardrobe',
            note: 'Cotton is comfortable indoors, but dries slowly and insulates poorly when wet.',
            useFor: 'short waiting in a dry place',
            risk: 'In wet weather it can make you colder.'
          },
          es: {
            name: 'Sudadera de algodón',
            place: 'dentro del armario',
            note: 'El algodón es cómodo en casa, pero seca lento y abriga mal mojado.',
            useFor: 'espera corta en lugar seco',
            risk: 'Con humedad puede enfriarte más.'
          }
        }
      },
      {
        id: 'energy_bar',
        icon: 'sandwich',
        category: 'useful',
        weight: 0.15,
        copy: {
          ru: {
            name: 'Энергетический батончик',
            place: 'в холодильнике',
            note: 'Лёгкая еда даёт быстрые калории и почти не занимает место.',
            useFor: 'быстрая энергия, дорога, ожидание',
            risk: 'Не заменяет воду и не решает холод.'
          },
          en: {
            name: 'Energy bar',
            place: 'inside the refrigerator',
            note: 'Light food gives quick calories and takes almost no space.',
            useFor: 'quick energy, travel, waiting',
            risk: 'It does not replace water or warmth.'
          },
          es: {
            name: 'Barrita energética',
            place: 'dentro del refrigerador',
            note: 'Comida ligera con calorías rápidas y poco volumen.',
            useFor: 'energía rápida, camino, espera',
            risk: 'No reemplaza agua ni abrigo.'
          }
        }
      },
      {
        id: 'salt_pack',
        icon: 'package',
        category: 'useful',
        weight: 0.1,
        copy: {
          ru: {
            name: 'Пакет соли',
            place: 'в холодильнике',
            note: 'Соль помогает с едой и простейшим сохранением продуктов, но это не предмет первой линии.',
            useFor: 'еда, консервация, обмен',
            risk: 'Полезна позже, но не важнее воды.'
          },
          en: {
            name: 'Salt pack',
            place: 'inside the refrigerator',
            note: 'Salt helps with food and simple preservation, but it is not first-line gear.',
            useFor: 'food, preservation, barter',
            risk: 'Useful later, but not above water.'
          },
          es: {
            name: 'Paquete de sal',
            place: 'dentro del refrigerador',
            note: 'La sal ayuda con comida y conservación simple, pero no es prioridad inicial.',
            useFor: 'comida, conservación, intercambio',
            risk: 'Útil después, pero no por encima del agua.'
          }
        }
      },
      {
        id: 'soda_bottle',
        icon: 'wine',
        category: 'trap',
        weight: 1.2,
        copy: {
          ru: {
            name: 'Сладкая газировка',
            place: 'в холодильнике',
            note: 'Сладкий напиток кажется заменой воды, но жажду закрывает хуже и может усилить её позже.',
            useFor: 'быстрые калории, если другой жидкости нет',
            risk: 'Не равно воде и занимает тот же вес.'
          },
          en: {
            name: 'Sugary soda',
            place: 'inside the refrigerator',
            note: 'Soda looks like water, but handles thirst worse and can increase it later.',
            useFor: 'quick calories if no other liquid exists',
            risk: 'It is not water and costs similar weight.'
          },
          es: {
            name: 'Refresco azucarado',
            place: 'dentro del refrigerador',
            note: 'Parece agua, pero calma peor la sed y puede aumentarla después.',
            useFor: 'calorías rápidas si no hay otro líquido',
            risk: 'No es agua y pesa parecido.'
          }
        }
      },
      {
        id: 'trash_bags',
        icon: 'package',
        category: 'useful',
        weight: 0.2,
        copy: {
          ru: {
            name: 'Прочные мусорные пакеты',
            place: 'в кладовке',
            note: 'Пакеты можно использовать как защиту от дождя, упаковку вещей или временную гидроизоляцию.',
            useFor: 'дождь, упаковка, защита документов',
            risk: 'Полезны как дополнение, но не заменяют основные предметы.'
          },
          en: {
            name: 'Heavy trash bags',
            place: 'inside the pantry',
            note: 'Bags can work as rain protection, packing, or temporary waterproofing.',
            useFor: 'rain, packing, document protection',
            risk: 'Useful support, not a replacement for essentials.'
          },
          es: {
            name: 'Bolsas resistentes',
            place: 'dentro de la despensa',
            note: 'Sirven contra lluvia, para empacar o impermeabilizar temporalmente.',
            useFor: 'lluvia, embalaje, proteger documentos',
            risk: 'Apoyo útil, no reemplazo de lo esencial.'
          }
        }
      },
      {
        id: 'matches',
        icon: 'package',
        category: 'useful',
        weight: 0.05,
        copy: {
          ru: {
            name: 'Спички в коробке',
            place: 'в кладовке',
            note: 'Огонь может помочь с теплом и готовкой, если есть безопасное место и сухое топливо.',
            useFor: 'огонь, тепло, готовка',
            risk: 'Бесполезны мокрыми и опасны в закрытых помещениях.'
          },
          en: {
            name: 'Box of matches',
            place: 'inside the pantry',
            note: 'Fire can help with warmth and cooking if you have a safe place and dry fuel.',
            useFor: 'fire, warmth, cooking',
            risk: 'Useless when wet and dangerous indoors.'
          },
          es: {
            name: 'Caja de fósforos',
            place: 'dentro de la despensa',
            note: 'El fuego ayuda con calor y comida si hay lugar seguro y combustible seco.',
            useFor: 'fuego, calor, cocinar',
            risk: 'Inútiles mojados y peligrosos en interiores.'
          }
        }
      },
      {
        id: 'rope',
        icon: 'package',
        category: 'useful',
        weight: 0.7,
        copy: {
          ru: {
            name: 'Тонкая верёвка',
            place: 'в кладовке',
            note: 'Верёвка помогает закрепить вещи, сделать растяжку или простую связку.',
            useFor: 'крепление, ремонт, перенос',
            risk: 'Полезна, но вес заметен, если уже есть слишком много вещей.'
          },
          en: {
            name: 'Thin rope',
            place: 'inside the pantry',
            note: 'Rope helps fasten gear, make a line, or bundle items.',
            useFor: 'fastening, repair, carrying',
            risk: 'Useful, but the weight matters if the pack is already full.'
          },
          es: {
            name: 'Cuerda fina',
            place: 'dentro de la despensa',
            note: 'Ayuda a fijar equipo, hacer una línea o agrupar objetos.',
            useFor: 'sujetar, reparar, cargar',
            risk: 'Útil, pero pesa si la mochila ya está llena.'
          }
        }
      },
      {
        id: 'ceramic_mug',
        icon: 'wine',
        category: 'trap',
        weight: 0.5,
        copy: {
          ru: {
            name: 'Керамическая кружка',
            place: 'в кладовке',
            note: 'Кружка удобна дома, но хрупкая и мало что решает при быстрой эвакуации.',
            useFor: 'питьё в спокойном месте',
            risk: 'Может разбиться и занимает место лучше металлической чашки.'
          },
          en: {
            name: 'Ceramic mug',
            place: 'inside the pantry',
            note: 'A mug is convenient at home, but fragile and low value in fast evacuation.',
            useFor: 'drinking in a safe place',
            risk: 'It can break and is worse than a metal cup.'
          },
          es: {
            name: 'Taza de cerámica',
            place: 'dentro de la despensa',
            note: 'Cómoda en casa, pero frágil y de poco valor al evacuar rápido.',
            useFor: 'beber en lugar seguro',
            risk: 'Puede romperse y es peor que una taza metálica.'
          }
        }
      },
      {
        id: 'keys',
        icon: 'package',
        category: 'useful',
        weight: 0.1,
        copy: {
          ru: {
            name: 'Запасные ключи',
            place: 'на полке в прихожей',
            note: 'Ключи помогают вернуться, открыть подъезд или передать доступ близким.',
            useFor: 'доступ, возвращение, помощь семье',
            risk: 'Полезны, но не должны задерживать выход.'
          },
          en: {
            name: 'Spare keys',
            place: 'on the hallway shelf',
            note: 'Keys help return, open entrances, or share access with family.',
            useFor: 'access, return, helping family',
            risk: 'Useful, but should not delay leaving.'
          },
          es: {
            name: 'Llaves de repuesto',
            place: 'en el estante de entrada',
            note: 'Ayudan a volver, abrir entradas o dar acceso a familia.',
            useFor: 'acceso, regreso, ayudar familia',
            risk: 'Útiles, pero no deben retrasar la salida.'
          }
        }
      },
      {
        id: 'cash',
        icon: 'file-text',
        category: 'useful',
        weight: 0.05,
        copy: {
          ru: {
            name: 'Наличные',
            place: 'на полке в прихожей',
            note: 'Наличные работают, когда терминалы и связь недоступны.',
            useFor: 'транспорт, вода, еда, связь',
            risk: 'Нужны мелкими купюрами и отдельно от документов.'
          },
          en: {
            name: 'Cash',
            place: 'on the hallway shelf',
            note: 'Cash works when terminals and signal do not.',
            useFor: 'transport, water, food, communication',
            risk: 'Best in small bills and separate from documents.'
          },
          es: {
            name: 'Efectivo',
            place: 'en el estante de entrada',
            note: 'Funciona cuando no hay terminales ni señal.',
            useFor: 'transporte, agua, comida, comunicación',
            risk: 'Mejor en billetes pequeños y separado de documentos.'
          }
        }
      },
      {
        id: 'paper_map',
        icon: 'file-text',
        category: 'useful',
        weight: 0.1,
        copy: {
          ru: {
            name: 'Бумажная карта района',
            place: 'на полке в прихожей',
            note: 'Карта полезна, если телефон разрядится или сеть пропадёт.',
            useFor: 'маршрут, объезд, точки помощи',
            risk: 'Нужна только если карта актуальна и ты умеешь ей пользоваться.'
          },
          en: {
            name: 'Paper district map',
            place: 'on the hallway shelf',
            note: 'A map helps if the phone dies or the network fails.',
            useFor: 'routes, detours, aid points',
            risk: 'Useful only if current and readable to you.'
          },
          es: {
            name: 'Mapa de papel',
            place: 'en el estante de entrada',
            note: 'Ayuda si el teléfono se apaga o no hay red.',
            useFor: 'rutas, desvíos, puntos de ayuda',
            risk: 'Sirve solo si está actualizado y sabes usarlo.'
          }
        }
      },
      {
        id: 'old_tablet',
        icon: 'image',
        category: 'trap',
        weight: 0.9,
        copy: {
          ru: {
            name: 'Старый планшет',
            place: 'на полке в прихожей',
            note: 'Планшет кажется полезным экраном, но без заряда, связи и защиты быстро становится грузом.',
            useFor: 'карты или документы, если заранее подготовлен',
            risk: 'Хрупкий, требует зарядки и уступает телефону с пауэрбанком.'
          },
          en: {
            name: 'Old tablet',
            place: 'on the hallway shelf',
            note: 'A tablet looks useful, but without charge, signal, and protection it becomes weight.',
            useFor: 'maps or documents if prepared earlier',
            risk: 'Fragile, power-hungry, and worse than a phone with a power bank.'
          },
          es: {
            name: 'Tableta vieja',
            place: 'en el estante de entrada',
            note: 'Parece útil, pero sin carga, señal y protección se vuelve peso.',
            useFor: 'mapas o documentos si estaba preparada',
            risk: 'Frágil, consume batería y peor que teléfono con batería externa.'
          }
        }
      }
    ],
    containers: [
      {
        id: 'wardrobe',
        icon: 'shirt',
        x: 10,
        y: 17,
        w: 22,
        h: 44,
        copy: {
          ru: { name: 'Шкаф', hint: 'одежда и обувь' },
          en: { name: 'Wardrobe', hint: 'clothes and shoes' },
          es: { name: 'Armario', hint: 'ropa y zapatos' }
        },
        itemIds: ['warm_jacket', 'winter_hat', 'spare_shoes', 'raincoat', 'work_gloves', 'heavy_blanket', 'fancy_suit', 'cotton_hoodie']
      },
      {
        id: 'refrigerator',
        icon: 'droplet',
        x: 74,
        y: 29,
        w: 15,
        h: 33,
        copy: {
          ru: { name: 'Холодильник', hint: 'вода и еда' },
          en: { name: 'Refrigerator', hint: 'water and food' },
          es: { name: 'Refrigerador', hint: 'agua y comida' }
        },
        itemIds: ['water_bottle', 'canned_food', 'energy_bar', 'salt_pack', 'perishable_food', 'glass_bottle', 'soda_bottle']
      },
      {
        id: 'pantry',
        icon: 'package',
        x: 39,
        y: 36,
        w: 24,
        h: 27,
        copy: {
          ru: { name: 'Кладовка', hint: 'инструменты и запасы' },
          en: { name: 'Pantry', hint: 'tools and supplies' },
          es: { name: 'Despensa', hint: 'herramientas y reservas' }
        },
        itemIds: ['flashlight', 'batteries', 'knife', 'duct_tape', 'trash_bags', 'matches', 'rope', 'heavy_pot', 'ceramic_mug']
      },
      {
        id: 'shelf',
        icon: 'archive',
        x: 35,
        y: 67,
        w: 27,
        h: 18,
        copy: {
          ru: { name: 'Полка в прихожей', hint: 'документы и мелочи' },
          en: { name: 'Hallway shelf', hint: 'documents and small gear' },
          es: { name: 'Estante de entrada', hint: 'documentos y objetos pequeños' }
        },
        itemIds: ['documents', 'first_aid', 'powerbank', 'keys', 'cash', 'paper_map', 'photo_album', 'old_tablet']
      }
    ],
    items: [
      {
        id: 'water_bottle',
        icon: 'droplet',
        category: 'essential',
        weight: 2,
        copy: {
          ru: {
            name: '2 бутылки воды',
            place: 'в холодильнике',
            note: 'Вода — один из первых приоритетов при эвакуации. Она нужна для питья, лекарств, гигиены и задержек в пути.',
            useFor: 'питьё, лекарства, промывание ран, ожидание транспорта',
            risk: 'Весит заметно, но отказ от воды опаснее лишних двух килограммов.'
          },
          en: {
            name: '2 bottles of water',
            place: 'inside the refrigerator',
            note: 'Water is one of the first evacuation priorities. It supports drinking, medicine, hygiene, and route delays.',
            useFor: 'drinking, medicine, wound cleaning, waiting for transport',
            risk: 'It is heavy, but leaving without water is usually worse than carrying it.'
          },
          es: {
            name: '2 botellas de agua',
            place: 'dentro del refrigerador',
            note: 'El agua es una de las primeras prioridades al evacuar. Sirve para beber, tomar medicinas, higiene y retrasos en ruta.',
            useFor: 'beber, medicinas, limpiar heridas, esperar transporte',
            risk: 'Pesa, pero salir sin agua suele ser más peligroso que cargarla.'
          }
        }
      },
      {
        id: 'flashlight',
        icon: 'flashlight',
        category: 'essential',
        weight: 0.3,
        copy: {
          ru: {
            name: 'Тактический фонарик',
            place: 'в кладовке',
            note: 'Фонарик помогает безопасно двигаться по тёмным лестницам, зданиям без света и улицам после отключения электричества.',
            useFor: 'лестницы, сигнал, осмотр травм и препятствий',
            risk: 'Без запасных батареек может отказать уже в первую ночь.'
          },
          en: {
            name: 'Tactical flashlight',
            place: 'inside the pantry',
            note: 'A flashlight helps you move safely in dark stairwells, damaged buildings, and streets without power.',
            useFor: 'stairs, signaling, checking injuries and hazards',
            risk: 'Without spare batteries, it may fail during the first night.'
          },
          es: {
            name: 'Linterna táctica',
            place: 'dentro de la despensa',
            note: 'Una linterna ayuda a moverte con seguridad por escaleras oscuras, edificios dañados y calles sin electricidad.',
            useFor: 'escaleras, señales, revisar heridas y peligros',
            risk: 'Sin baterías de repuesto puede fallar durante la primera noche.'
          }
        }
      },
      {
        id: 'batteries',
        icon: 'battery',
        category: 'useful',
        weight: 0.1,
        copy: {
          ru: {
            name: 'Батарейки AA',
            place: 'в кладовке',
            note: 'Запасные батарейки превращают фонарик из одноразового решения в надёжный инструмент на ночь.',
            useFor: 'фонарик, радио, небольшие устройства',
            risk: 'Полезны только если подходят к выбранному устройству.'
          },
          en: {
            name: 'AA batteries',
            place: 'inside the pantry',
            note: 'Spare batteries turn a flashlight from a short-term tool into a reliable night resource.',
            useFor: 'flashlight, radio, small devices',
            risk: 'Useful only if they match the device you carry.'
          },
          es: {
            name: 'Baterías AA',
            place: 'dentro de la despensa',
            note: 'Las baterías de repuesto convierten una linterna en un recurso fiable para la noche.',
            useFor: 'linterna, radio, dispositivos pequeños',
            risk: 'Solo sirven si coinciden con el dispositivo que llevas.'
          }
        }
      },
      {
        id: 'first_aid',
        icon: 'cross',
        category: 'essential',
        weight: 0.8,
        copy: {
          ru: {
            name: 'Аптечка',
            place: 'на полке в прихожей',
            note: 'Аптечка спасает временем: остановить кровь, закрыть рану, снизить риск инфекции.',
            useFor: 'порезы, мозоли, перевязка, базовая помощь',
            risk: 'Если аптечка слишком большая, лучше взять компактный набор первой помощи.'
          },
          en: {
            name: 'First-aid kit',
            place: 'on the hallway shelf',
            note: 'A first-aid kit buys time: stop bleeding, cover wounds, and reduce infection risk.',
            useFor: 'cuts, blisters, bandaging, basic care',
            risk: 'If the kit is bulky, prefer a compact first-aid set.'
          },
          es: {
            name: 'Botiquín',
            place: 'en el estante de entrada',
            note: 'Un botiquín compra tiempo: detener sangre, cubrir heridas y reducir infección.',
            useFor: 'cortes, ampollas, vendajes, ayuda básica',
            risk: 'Si es muy grande, conviene un kit compacto.'
          }
        }
      },
      {
        id: 'warm_jacket',
        icon: 'shirt',
        category: 'essential',
        weight: 1.2,
        copy: {
          ru: {
            name: 'Тёплая куртка',
            place: 'в шкафу',
            note: 'Тёплая одежда защищает от переохлаждения, особенно если транспорт остановится или ночлег будет на улице.',
            useFor: 'ночь, ветер, ожидание, холодные подъезды',
            risk: 'Лучше один сухой тёплый слой, чем несколько тяжёлых вещей.'
          },
          en: {
            name: 'Warm jacket',
            place: 'inside the wardrobe',
            note: 'Warm clothing protects against hypothermia if transport stops or shelter is unavailable.',
            useFor: 'night, wind, waiting, cold stairwells',
            risk: 'One dry warm layer is better than several heavy garments.'
          },
          es: {
            name: 'Chaqueta de abrigo',
            place: 'dentro del armario',
            note: 'La ropa de abrigo protege de la hipotermia si el transporte se detiene o no hay refugio.',
            useFor: 'noche, viento, espera, escaleras frías',
            risk: 'Una capa seca y cálida vale más que varias prendas pesadas.'
          }
        }
      },
      {
        id: 'documents',
        icon: 'file-text',
        category: 'essential',
        weight: 0.2,
        copy: {
          ru: {
            name: 'Документы',
            place: 'на полке в прихожей',
            note: 'Документы помогают получить помощь, доказать личность, пройти контроль или восстановить связь с близкими.',
            useFor: 'личность, помощь, блокпосты, связь с семьёй',
            risk: 'Лучше держать в герметичном пакете, чтобы не намокли.'
          },
          en: {
            name: 'Documents',
            place: 'on the hallway shelf',
            note: 'Documents help you get aid, prove identity, pass checkpoints, or reconnect with family.',
            useFor: 'identity, aid, checkpoints, family contact',
            risk: 'Keep them in a sealed bag so they do not get wet.'
          },
          es: {
            name: 'Documentos',
            place: 'en el estante de entrada',
            note: 'Los documentos ayudan a recibir ayuda, probar identidad, pasar controles o contactar familia.',
            useFor: 'identidad, ayuda, controles, familia',
            risk: 'Guárdalos en una bolsa sellada para que no se mojen.'
          }
        }
      },
      {
        id: 'knife',
        icon: 'knife',
        category: 'essential',
        weight: 0.4,
        copy: {
          ru: {
            name: 'Нож / мультитул',
            place: 'в кладовке',
            note: 'Нож решает десятки мелких задач: открыть упаковку, разрезать ткань, подготовить еду или сделать простую починку.',
            useFor: 'ремонт, еда, повязки, упаковки',
            risk: 'Нужен как инструмент, а не как повод рисковать конфликтом.'
          },
          en: {
            name: 'Knife / multitool',
            place: 'inside the pantry',
            note: 'A knife solves many small tasks: open packaging, cut cloth, prepare food, or make simple repairs.',
            useFor: 'repairs, food, bandages, packaging',
            risk: 'Use it as a tool, not as a reason to escalate conflict.'
          },
          es: {
            name: 'Cuchillo / multiherramienta',
            place: 'dentro de la despensa',
            note: 'Un cuchillo resuelve muchas tareas: abrir envases, cortar tela, preparar comida o reparar algo simple.',
            useFor: 'reparaciones, comida, vendas, envases',
            risk: 'Es una herramienta, no una razón para escalar conflictos.'
          }
        }
      },
      {
        id: 'duct_tape',
        icon: 'tape',
        category: 'useful',
        weight: 0.2,
        copy: {
          ru: {
            name: 'Армированный скотч',
            place: 'в кладовке',
            note: 'Скотч помогает чинить рюкзак, герметизировать пакет, фиксировать ткань или временно укрепить снаряжение.',
            useFor: 'ремонт, герметизация, фиксация',
            risk: 'Полезен, но не важнее воды, тепла, света и аптечки.'
          },
          en: {
            name: 'Duct tape',
            place: 'inside the pantry',
            note: 'Tape can repair a bag, seal a packet, hold fabric, or temporarily reinforce gear.',
            useFor: 'repair, sealing, fastening',
            risk: 'Useful, but not above water, warmth, light, and first aid.'
          },
          es: {
            name: 'Cinta resistente',
            place: 'dentro de la despensa',
            note: 'La cinta puede reparar una mochila, sellar una bolsa, sujetar tela o reforzar equipo temporalmente.',
            useFor: 'reparar, sellar, sujetar',
            risk: 'Útil, pero no por encima de agua, calor, luz y botiquín.'
          }
        }
      },
      {
        id: 'powerbank',
        icon: 'battery-charging',
        category: 'useful',
        weight: 0.4,
        copy: {
          ru: {
            name: 'Пауэрбанк',
            place: 'на полке в прихожей',
            note: 'Пауэрбанк продлевает работу телефона: карты, связь, заметки, экстренные сообщения.',
            useFor: 'телефон, навигация, связь',
            risk: 'Полезен только если заряжен и есть кабель.'
          },
          en: {
            name: 'Power bank',
            place: 'on the hallway shelf',
            note: 'A power bank extends your phone: maps, contact, notes, and emergency messages.',
            useFor: 'phone, navigation, communication',
            risk: 'Useful only if charged and paired with a cable.'
          },
          es: {
            name: 'Batería externa',
            place: 'en el estante de entrada',
            note: 'Una batería externa alarga el uso del teléfono: mapas, contacto, notas y mensajes de emergencia.',
            useFor: 'teléfono, navegación, comunicación',
            risk: 'Solo sirve si está cargada y llevas cable.'
          }
        }
      },
      {
        id: 'canned_food',
        icon: 'can',
        category: 'useful',
        weight: 0.6,
        copy: {
          ru: {
            name: 'Консервы',
            place: 'в холодильнике',
            note: 'Консервы дают калории и хранятся дольше скоропортящихся продуктов.',
            useFor: 'еда на первые сутки, обмен, запас',
            risk: 'Не должны вытеснять воду и тёплую одежду.'
          },
          en: {
            name: 'Canned food',
            place: 'inside the refrigerator',
            note: 'Canned food provides calories and lasts longer than perishable food.',
            useFor: 'first-day food, barter, reserve',
            risk: 'It should not replace water and warm clothing.'
          },
          es: {
            name: 'Comida enlatada',
            place: 'dentro del refrigerador',
            note: 'La comida enlatada aporta calorías y dura más que los alimentos perecederos.',
            useFor: 'comida del primer día, intercambio, reserva',
            risk: 'No debe reemplazar agua ni ropa de abrigo.'
          }
        }
      },
      {
        id: 'winter_hat',
        icon: 'circle',
        category: 'useful',
        weight: 0.2,
        copy: {
          ru: {
            name: 'Тёплая шапка',
            place: 'в шкафу',
            note: 'Шапка почти не весит и помогает сохранить тепло ночью.',
            useFor: 'ночь, ветер, ожидание',
            risk: 'Полезна как дополнение, но куртка важнее.'
          },
          en: {
            name: 'Winter hat',
            place: 'inside the wardrobe',
            note: 'A hat is light and helps preserve warmth overnight.',
            useFor: 'night, wind, waiting',
            risk: 'Useful as an addition, but the jacket matters more.'
          },
          es: {
            name: 'Gorro de invierno',
            place: 'dentro del armario',
            note: 'Un gorro pesa poco y ayuda a conservar calor por la noche.',
            useFor: 'noche, viento, espera',
            risk: 'Útil como extra, pero la chaqueta importa más.'
          }
        }
      },
      {
        id: 'spare_shoes',
        icon: 'footprints',
        category: 'useful',
        weight: 1.1,
        copy: {
          ru: {
            name: 'Запасная обувь',
            place: 'в шкафу',
            note: 'Хорошая обувь важна, если придётся долго идти по стеклу, воде или лестницам.',
            useFor: 'долгий путь, грязь, стекло',
            risk: 'Если текущая обувь надёжная, запасная пара может быть лишним весом.'
          },
          en: {
            name: 'Spare shoes',
            place: 'inside the wardrobe',
            note: 'Good footwear matters if you need to walk through glass, water, or long stairways.',
            useFor: 'long walks, mud, glass',
            risk: 'If your current shoes are reliable, a spare pair may be extra weight.'
          },
          es: {
            name: 'Zapatos de repuesto',
            place: 'dentro del armario',
            note: 'Buen calzado importa si debes caminar por vidrio, agua o muchas escaleras.',
            useFor: 'caminatas largas, barro, vidrio',
            risk: 'Si tus zapatos actuales sirven, otro par puede ser peso extra.'
          }
        }
      },
      {
        id: 'heavy_blanket',
        icon: 'bed',
        category: 'trap',
        weight: 2.4,
        copy: {
          ru: {
            name: 'Тяжёлое одеяло',
            place: 'в шкафу',
            note: 'Одеяло кажется спасением от холода, но слишком быстро забивает рюкзак.',
            useFor: 'стационарный ночлег, укрытие',
            risk: 'Может заставить оставить воду, аптечку или документы.'
          },
          en: {
            name: 'Heavy blanket',
            place: 'inside the wardrobe',
            note: 'A blanket feels comforting, but it fills the pack too quickly.',
            useFor: 'fixed shelter, sleeping place',
            risk: 'It may force you to leave water, first aid, or documents.'
          },
          es: {
            name: 'Manta pesada',
            place: 'dentro del armario',
            note: 'Una manta parece útil contra el frío, pero llena la mochila demasiado rápido.',
            useFor: 'refugio fijo, dormir',
            risk: 'Puede obligarte a dejar agua, botiquín o documentos.'
          }
        }
      },
      {
        id: 'fancy_suit',
        icon: 'shirt',
        category: 'trap',
        weight: 1.5,
        copy: {
          ru: {
            name: 'Парадная одежда',
            place: 'в шкафу',
            note: 'Дорогая одежда не решает холод, воду, травмы и темноту.',
            useFor: 'почти не нужна в первые 24 часа',
            risk: 'Занимает место и отвлекает от реальных приоритетов.'
          },
          en: {
            name: 'Fancy suit',
            place: 'inside the wardrobe',
            note: 'Expensive clothing does not solve cold, water, injuries, or darkness.',
            useFor: 'rarely useful in the first 24 hours',
            risk: 'It takes space and distracts from real priorities.'
          },
          es: {
            name: 'Ropa elegante',
            place: 'dentro del armario',
            note: 'La ropa cara no resuelve frío, agua, heridas ni oscuridad.',
            useFor: 'casi nunca sirve en las primeras 24 horas',
            risk: 'Ocupa espacio y distrae de prioridades reales.'
          }
        }
      },
      {
        id: 'perishable_food',
        icon: 'sandwich',
        category: 'trap',
        weight: 1,
        copy: {
          ru: {
            name: 'Скоропортящаяся еда',
            place: 'в холодильнике',
            note: 'Еда может испортиться, протечь и занять место, которое нужно под воду.',
            useFor: 'только если съесть сразу',
            risk: 'Плохой выбор для рюкзака, если нет охлаждения и плана.'
          },
          en: {
            name: 'Perishable food',
            place: 'inside the refrigerator',
            note: 'Perishable food can spoil, leak, and take space needed for water.',
            useFor: 'only if eaten immediately',
            risk: 'Poor backpack choice without cooling and a clear plan.'
          },
          es: {
            name: 'Comida perecedera',
            place: 'dentro del refrigerador',
            note: 'La comida perecedera puede dañarse, gotear y ocupar espacio para agua.',
            useFor: 'solo si se come de inmediato',
            risk: 'Mala elección sin refrigeración ni plan claro.'
          }
        }
      },
      {
        id: 'glass_bottle',
        icon: 'wine',
        category: 'trap',
        weight: 1.4,
        copy: {
          ru: {
            name: 'Тяжёлая стеклянная бутылка',
            place: 'в холодильнике',
            note: 'Стекло тяжёлое и хрупкое. В падении оно может разбиться и порезать вещи или руки.',
            useFor: 'почти нет пользы в быстрой эвакуации',
            risk: 'Вес, шум и риск порезов.'
          },
          en: {
            name: 'Heavy glass bottle',
            place: 'inside the refrigerator',
            note: 'Glass is heavy and fragile. If dropped, it can cut your gear or hands.',
            useFor: 'little value during fast evacuation',
            risk: 'Weight, noise, and cut risk.'
          },
          es: {
            name: 'Botella de vidrio pesada',
            place: 'dentro del refrigerador',
            note: 'El vidrio pesa y se rompe. Si cae, puede cortar equipo o manos.',
            useFor: 'poco valor en una evacuación rápida',
            risk: 'Peso, ruido y riesgo de cortes.'
          }
        }
      },
      {
        id: 'heavy_pot',
        icon: 'cooking-pot',
        category: 'trap',
        weight: 3.5,
        copy: {
          ru: {
            name: 'Тяжёлая кастрюля',
            place: 'в кладовке',
            note: 'Кастрюля полезна в лагере, но в первые минуты эвакуации её вес опасен.',
            useFor: 'готовка в стационарном лагере',
            risk: 'Замедляет движение и может вытеснить действительно важные вещи.'
          },
          en: {
            name: 'Heavy pot',
            place: 'inside the pantry',
            note: 'A pot is useful in camp, but its weight is dangerous during the first evacuation minutes.',
            useFor: 'cooking at a fixed camp',
            risk: 'It slows movement and may push out critical items.'
          },
          es: {
            name: 'Olla pesada',
            place: 'dentro de la despensa',
            note: 'Una olla sirve en campamento, pero su peso es peligroso durante la primera evacuación.',
            useFor: 'cocinar en un campamento fijo',
            risk: 'Ralentiza y puede desplazar objetos críticos.'
          }
        }
      },
      {
        id: 'photo_album',
        icon: 'image',
        category: 'trap',
        weight: 2.4,
        copy: {
          ru: {
            name: 'Фотоальбом',
            place: 'на полке в прихожей',
            note: 'Эмоционально важная вещь, но не критична для первых 24 часов.',
            useFor: 'память и эмоции, не выживание',
            risk: 'Может заставить оставить воду, лекарства или тёплую одежду.'
          },
          en: {
            name: 'Photo album',
            place: 'on the hallway shelf',
            note: 'Emotionally important, but not critical for the first 24 hours.',
            useFor: 'memory and comfort, not survival',
            risk: 'It may force you to leave water, medicine, or warm clothing.'
          },
          es: {
            name: 'Álbum de fotos',
            place: 'en el estante de entrada',
            note: 'Emocionalmente importante, pero no crítico para las primeras 24 horas.',
            useFor: 'memoria y consuelo, no supervivencia',
            risk: 'Puede obligarte a dejar agua, medicinas o ropa de abrigo.'
          }
        }
      }
    ]
  }
];

export function getEpisode(id = 'apartment_evacuation') {
  const episode = EPISODES.find(candidate => candidate.id === id) || EPISODES[0];
  const extraItems = episode.extraItems || [];

  return {
    ...episode,
    items: [...episode.items, ...extraItems]
  };
}
