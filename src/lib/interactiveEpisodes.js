export const EPISODES = [
  {
    id: 'apartment_evacuation',
    sceneImage: '/assets/scenes/apartment-evacuation.png',
    requiredItemIds: ['water_bottle', 'knife', 'flashlight', 'first_aid', 'warm_layer', 'documents'],
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
        goal: 'Найди ключевые предметы и не перегрузи рюкзак.',
        expertNote: 'В первые сутки важнее не “всё полезное”, а вода, тёплая одежда, свет, нож, простая аптечка и документы. Тяжёлый рюкзак быстро превращает эвакуацию в остановку.',
        success: 'Вы выходите до темноты. Рюкзак не идеален, но в нём есть то, что закрывает первые риски: жажду, холод, травму и потерю документов.',
        failure: 'Вы задержались и собрали набор с пробелами. На лестнице становится ясно: лишний вес и забытая вода опаснее, чем казалось дома.',
        characters: [
          { name: 'Лера', line: 'Сначала воду и тёплую одежду. Всё остальное — если останется место.' },
          { name: 'Никита', line: 'Хочется взять половину квартиры. Но тащить это будем мы.' }
        ]
      },
      en: {
        title: 'Apartment. 18 minutes to leave',
        location: '12th floor, evening, no signal',
        mission: 'Pack for the first night. Space is tight, time is worse.',
        story: 'Sirens move through the street below. Lera holds the door while Nikita argues with himself over what matters. The tap is already dry. The first night will punish bad choices.',
        goal: 'Find the key items and keep the pack light enough to move.',
        expertNote: 'For the first day, water, warm clothes, light, a knife, basic first aid, and documents matter more than “everything useful.” A heavy pack can stop an evacuation.',
        success: 'You leave before dark. The pack is not perfect, but it covers the first risks: thirst, cold, injury, and lost identity.',
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
        goal: 'Encuentra los objetos clave y no sobrecargues la mochila.',
        expertNote: 'En el primer día importan más el agua, la ropa de abrigo, la luz, un cuchillo, primeros auxilios básicos y documentos que “todo lo útil”. Una mochila pesada puede detener una evacuación.',
        success: 'Salen antes de que oscurezca. La mochila no es perfecta, pero cubre los primeros riesgos: sed, frío, heridas y pérdida de identidad.',
        failure: 'Perdiste tiempo y preparaste una mochila con huecos importantes. En las escaleras, el peso extra y el agua olvidada parecen mucho más peligrosos que en casa.',
        characters: [
          { name: 'Lera', line: 'Primero agua y ropa de abrigo. Lo demás solo si queda espacio.' },
          { name: 'Nikita', line: 'Quiero llevarme medio apartamento. Pero lo cargaremos nosotros.' }
        ]
      }
    },
    objects: [
      {
        id: 'water_bottle',
        x: 33,
        y: 48,
        w: 22,
        h: 27,
        weight: 2,
        essential: true,
        copy: {
          ru: { name: '2 бутылки воды', place: 'на столе рядом с рюкзаком', note: 'Вода нужна раньше еды: обезвоживание быстро снижает мышление, силы и способность идти. Даже пара бутылок может дать несколько спокойных часов, чтобы выбраться из опасной зоны.' },
          en: { name: '2 bottles of water', place: 'on the table near the backpack', note: 'Water matters before food: dehydration quickly weakens thinking, strength, and walking pace. Even a few bottles can buy several safer hours to leave the danger area.' },
          es: { name: '2 botellas de agua', place: 'en la mesa junto a la mochila', note: 'El agua importa antes que la comida: la deshidratación reduce rápido la claridad mental, la fuerza y el ritmo al caminar. Unas botellas pueden darte varias horas para salir de la zona peligrosa.' }
        }
      },
      {
        id: 'knife',
        x: 80,
        y: 75,
        w: 13,
        h: 18,
        weight: 0.4,
        essential: true,
        copy: {
          ru: { name: 'Нож', place: 'на столешнице справа', note: 'Нож — универсальный инструмент: разрезать ткань на повязку, открыть упаковку, подготовить еду, сделать колышек или простую щепу. Он не “оружие”, а способ решать десятки мелких задач без траты сил.' },
          en: { name: 'Knife', place: 'on the counter to the right', note: 'A knife is a universal tool: cut cloth for a bandage, open packaging, prepare food, make a peg, or shave kindling. It is less a weapon than a way to solve many small problems without wasting energy.' },
          es: { name: 'Cuchillo', place: 'en la encimera derecha', note: 'Un cuchillo es una herramienta universal: cortar tela para una venda, abrir envases, preparar comida o hacer astillas. No es solo un arma; ahorra energía en muchas tareas pequeñas.' }
        }
      },
      {
        id: 'first_aid',
        x: 36,
        y: 81,
        w: 17,
        h: 16,
        weight: 0.8,
        essential: true,
        copy: {
          ru: { name: 'Аптечка', place: 'на переднем краю стола', note: 'Аптечка спасает не магией, а временем: остановить кровь, закрыть рану, снизить риск инфекции. В эвакуации маленький порез может сорвать движение, если его не обработать сразу.' },
          en: { name: 'First-aid kit', place: 'at the front edge of the table', note: 'A first-aid kit saves you by buying time: stop bleeding, cover a wound, reduce infection risk. During evacuation, a small cut can stop movement if it is ignored.' },
          es: { name: 'Botiquín', place: 'en el borde delantero de la mesa', note: 'Un botiquín salva tiempo: detener sangre, cubrir una herida y reducir infección. Durante una evacuación, un corte pequeño puede detenerte si no se atiende.' }
        }
      },
      {
        id: 'warm_layer',
        x: 17,
        y: 73,
        w: 26,
        h: 19,
        weight: 1.2,
        essential: true,
        copy: {
          ru: { name: 'Тёплая одежда', place: 'сложена перед рюкзаком', note: 'Тёплая одежда защищает запас энергии. Когда тело мёрзнет, оно тратит силы на обогрев, руки хуже работают, решения становятся хуже. Сухой тёплый слой может быть важнее лишней еды.' },
          en: { name: 'Warm clothes', place: 'folded in front of the backpack', note: 'Warm clothes protect your energy reserve. When the body gets cold, it burns strength for heat, hands work worse, and decisions get worse. A dry warm layer can matter more than extra food.' },
          es: { name: 'Ropa de abrigo', place: 'doblada frente a la mochila', note: 'La ropa de abrigo protege tu reserva de energía. Cuando el cuerpo se enfría, gasta fuerzas en calentarse, las manos fallan y decides peor. Una capa seca puede valer más que comida extra.' }
        }
      },
      {
        id: 'documents',
        x: 56,
        y: 74,
        w: 21,
        h: 19,
        weight: 0.2,
        essential: true,
        copy: {
          ru: { name: 'Документы', place: 'на столе под блокнотом', note: 'Документы не греют и не кормят, но помогают получить помощь, доказать личность, пройти блокпост или восстановить связь с близкими. В кризисе доступ к людям и службам тоже ресурс.' },
          en: { name: 'Documents', place: 'on the table under the notebook', note: 'Documents do not warm or feed you, but they help you get aid, prove identity, pass checkpoints, or reconnect with family. In a crisis, access to people and services is a resource.' },
          es: { name: 'Documentos', place: 'en la mesa bajo la libreta', note: 'Los documentos no abrigan ni alimentan, pero ayudan a recibir ayuda, probar identidad, pasar controles o contactar familia. En una crisis, el acceso a personas y servicios también es un recurso.' }
        }
      },
      {
        id: 'flashlight',
        x: 46,
        y: 70,
        w: 19,
        h: 12,
        weight: 0.5,
        essential: true,
        copy: {
          ru: { name: 'Фонарик', place: 'на столе между водой и документами', note: 'Фонарик снижает риск травм: тёмные лестницы, стекло, провода и ямы опаснее, когда ты торопишься. Свет помогает двигаться тише, быстрее и не тратить батарею телефона.' },
          en: { name: 'Flashlight', place: 'on the table between water and documents', note: 'A flashlight reduces injury risk: dark stairs, glass, wires, and holes are worse when you hurry. Light lets you move quieter, faster, and without draining your phone.' },
          es: { name: 'Linterna', place: 'en la mesa entre el agua y los documentos', note: 'Una linterna reduce lesiones: escaleras oscuras, vidrios, cables y agujeros son peores con prisa. La luz permite moverte mejor sin gastar la batería del teléfono.' }
        }
      },
      {
        id: 'powerbank',
        x: 53,
        y: 84,
        w: 12,
        h: 11,
        weight: 0.4,
        useful: true,
        copy: {
          ru: { name: 'Пауэрбанк', place: 'рядом с документами', note: 'Пауэрбанк не спасает сам по себе, но продлевает работу телефона: карты, фонарь, заметки, связь, экстренные сообщения. Это полезно, если он лёгкий и уже заряжен.' },
          en: { name: 'Power bank', place: 'near the documents', note: 'A power bank does not save you alone, but it extends your phone: maps, light, notes, contact, emergency messages. Useful if it is light and already charged.' },
          es: { name: 'Batería externa', place: 'junto a los documentos', note: 'Una batería externa no salva por sí sola, pero alarga el teléfono: mapas, luz, notas, contacto y mensajes de emergencia. Es útil si pesa poco y está cargada.' }
        }
      },
      {
        id: 'heavy_pot',
        x: 87,
        y: 55,
        w: 12,
        h: 33,
        weight: 3.5,
        trap: true,
        copy: {
          ru: { name: 'Тяжёлая кастрюля', place: 'на плите', note: 'Кастрюля полезна в лагере, но в первые минуты эвакуации её вес опасен: ты быстрее устанешь, замедлишься и можешь бросить действительно важные вещи.' },
          en: { name: 'Heavy pot', place: 'on the stove', note: 'A pot is useful in camp, but during the first evacuation minutes its weight is dangerous: you tire faster, slow down, and may drop truly important items.' },
          es: { name: 'Olla pesada', place: 'en la estufa', note: 'Una olla sirve en un campamento, pero al evacuar su peso es peligroso: te cansas antes, avanzas más lento y quizá abandones cosas realmente importantes.' }
        }
      },
      {
        id: 'laptop',
        x: 51,
        y: 48,
        w: 14,
        h: 13,
        weight: 2.6,
        trap: true,
        copy: {
          ru: { name: 'Ноутбук', place: 'на журнальном столике', note: 'Ноутбук дорогой, но в этой ситуации цена не равна пользе. Он добавляет вес и хрупкость, а первую ночь не решает: воду, тепло, свет, рану и документы.' },
          en: { name: 'Laptop', place: 'on the coffee table', note: 'A laptop is expensive, but price is not the same as survival value. It adds weight and fragility while solving none of tonight’s basics: water, warmth, light, wounds, and documents.' },
          es: { name: 'Portátil', place: 'sobre la mesa baja', note: 'Un portátil es caro, pero precio no significa valor de supervivencia. Añade peso y fragilidad, y no resuelve lo básico de esta noche: agua, calor, luz, heridas y documentos.' }
        }
      }
    ]
  }
];

export function getEpisode(id = 'apartment_evacuation') {
  return EPISODES.find(episode => episode.id === id) || EPISODES[0];
}
