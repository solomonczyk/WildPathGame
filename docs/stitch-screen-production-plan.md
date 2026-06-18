# План работы со Stitch для экранов ситуаций

Status: `DRAFT_PRODUCTION_PLAN`.
Owner: Taras.
Purpose: описать повторяемый процесс создания экранов в Stitch для каждой игровой ситуации WildPathGame.

Этот документ не меняет продуктовый канон. Он описывает рабочий порядок: как готовить бриф, какие экраны генерировать в Stitch, какие итерации делать, как проверять результат и как передавать дизайн в реализацию.

## 1. Цель процесса

Stitch используется как быстрый дизайн-слой для экранов ситуации: сначала формируется визуальная версия игрового сценария, затем она переносится в React как интерактивный экран.

Для каждой ситуации нужно получить не один красивый экран, а полный набор состояний:

- выбор эпизода;
- главный экран ситуации;
- экран контейнера или зоны поиска;
- карточка предмета;
- состояние рюкзака;
- итоговый разбор;
- журнал или экран прогресса, если ситуация влияет на курс.

Главная цель: игрок должен сразу понимать, где он находится, что нужно сделать, какие предметы доступны, что уже в рюкзаке, почему выбор правильный или опасный.

## 2. Общие правила перед началом работы со Stitch

Перед созданием экранов для новой ситуации нужно подготовить пакет входных данных.

Обязательные входные данные:

- название ситуации;
- location family из `scenario-domain-canon.md`;
- hazard family из `scenario-domain-canon.md`;
- краткий сюжет;
- цель игрока;
- лимит времени;
- лимит веса или другой ресурсный лимит;
- список контейнеров или зон взаимодействия;
- список предметов: essential, useful, trap;
- правила последствий;
- учебный вывод;
- источник или статус источников для safety-sensitive тем.

Без этих данных Stitch не должен использоваться для финального экрана. Иначе дизайн начнет диктовать механику, а не поддерживать ее.

## 3. Единый порядок взаимодействия со Stitch

Для каждой ситуации процесс идет по одинаковым шагам.

1. Сформировать короткий episode brief.
2. Сгенерировать главный экран ситуации.
3. Сгенерировать экраны контейнеров или зон поиска.
4. Сгенерировать карточку предмета.
5. Сгенерировать состояние рюкзака.
6. Сгенерировать итоговый экран результата.
7. Сгенерировать экран журнала или прогресса, если нужен.
8. Провести визуальную проверку.
9. Перенести решения в код.
10. Сохранить артефакты и заметки по итерациям.

Каждый шаг должен иметь сохраненный результат: `screen.png`, `code.html`, короткую заметку о том, что принято, что отклонено и что нужно перенести в приложение.

## 4. Структура папок для артефактов Stitch

Рекомендуемая структура:

```text
design-imports/
  stitch_<project_or_batch_name>/
    episode_01_apartment_evacuation/
      00_brief.md
      01_episode_selection/
        screen.png
        code.html
        notes.md
      02_main_scene/
        screen.png
        code.html
        notes.md
      03_container_wardrobe/
        screen.png
        code.html
        notes.md
      04_container_refrigerator/
        screen.png
        code.html
        notes.md
      05_container_pantry/
        screen.png
        code.html
        notes.md
      06_item_detail/
        screen.png
        code.html
        notes.md
      07_backpack_state/
        screen.png
        code.html
        notes.md
      08_result_debrief/
        screen.png
        code.html
        notes.md
      09_journal_progress/
        screen.png
        code.html
        notes.md
```

Существующий импорт уже содержит близкие экраны:

- `episode_1_main_scene`;
- `episode_1_main_scene_refined`;
- `refrigerator_container_view`;
- `pantry_container_refined`;
- `pantry_container_backpack_panel`;
- `wardrobe_container_item_detail`;
- `item_detail_bottom_sheet`;
- `item_detail_tactical_flashlight`;
- `episode_1_results`;
- `episode_selection`;
- `survivor_journal`.

Эти экраны можно использовать как стартовый эталон для первой ситуации и как референс для следующих.

## 5. Базовый промпт для Stitch

Каждая новая генерация должна начинаться с единого системного запроса в духе:

```text
Create a dark tactical survival-training game interface for WildPathGame.
The UI must feel utilitarian, urgent, realistic, and readable.
Use a compact 2D browser game layout, not a marketing landing page.
The primary visual surface is the scene image. UI panels must support gameplay and never hide the main action.

Style:
- dark charcoal background;
- emergency orange for active objectives and timers;
- tactical green for correct or packed essentials;
- red only for danger, traps, and failure;
- compact panels with 4px radius;
- no decorative blobs, no soft marketing gradients, no oversized hero layout;
- readable Russian text length;
- mobile-safe layout at 390px width.

Screen must include realistic game controls and state, not generic marketing copy.
```

После этого добавляется конкретный экранный запрос.

## 6. Экран 1: выбор эпизода

Purpose: показать игроку доступные ситуации и прогресс курса.

Когда создавать:

- перед первым эпизодом;
- при добавлении новой ситуации;
- при изменении структуры курса.

Что передать в Stitch:

- название курса;
- список эпизодов;
- статус каждого эпизода: locked, available, complete;
- короткий learning outcome;
- длительность или сложность;
- язык интерфейса.

Промпт:

```text
Design the episode selection screen for WildPathGame.
Show a compact survival course list with six playable episodes.
The first episode is available, later episodes are locked or draft.
Each episode card must show: episode number, situation title, hazard type, learning skill, status, and short progress marker.
Keep the interface dense, dark, tactical, and mobile-safe.
Do not create a landing page. This is an in-game course selection screen.
```

Проверка:

- игрок понимает, какой эпизод нажать;
- заблокированные эпизоды не выглядят как ошибка;
- статус прохождения виден без чтения длинного текста;
- на мобильном нет горизонтального скролла.

## 7. Экран 2: главный экран ситуации

Purpose: основная игровая сцена, где игрок видит ситуацию, цель, таймер, ресурсы и интерактивные зоны.

Что передать в Stitch:

- scene title;
- location;
- immediate threat;
- time limit;
- objective;
- available containers/zones;
- required item count;
- current backpack count and weight;
- characters or short dialogue if needed.

Промпт:

```text
Design the main playable scene for episode: [EPISODE_TITLE].
Situation: [SHORT_STORY].
Objective: [PLAYER_OBJECTIVE].
Time limit: [TIME_LIMIT].
Interactive zones: [ZONES].
Required essentials: [REQUIRED_ITEMS_COUNT].

The scene image is the main surface. Add visible but subtle circular hotspots for each zone.
Show timer, mission, critical kit progress, current backpack weight, and bottom action area.
The UI must support gameplay: opening zones, inspecting items, packing items, and leaving the scene.
Create desktop and mobile-safe composition.
```

Проверка:

- сцена видна первой, а не спрятана под панелями;
- hotspots читаются, но не превращают экран в новогоднюю гирлянду;
- цель и таймер видны;
- кнопка выхода не выглядит активной, если essentials не собраны;
- русский текст помещается.

## 8. Экран 3: контейнер или зона поиска

Purpose: показать предметы внутри шкафа, холодильника, кладовки, машины, аптечки, рюкзака или другой зоны.

Что передать в Stitch:

- container name;
- список предметов внутри;
- packed/unpacked state;
- вес предметов;
- категория предметов;
- действие inspect/take/leave;
- короткая подсказка зоны.

Промпт:

```text
Design a container view for [CONTAINER_NAME] in WildPathGame.
This is inside episode [EPISODE_TITLE].
Show items as compact rows or tiles with icon, name, weight, category, and inspect action.
Some items are essential, some useful, some traps.
Show current backpack weight and selected item count.
Include a clear back action to return to the main scene.
Keep the layout tactical, readable, and usable on mobile.
```

Проверка:

- предметы легко сравнивать;
- essential/useful/trap не раскрываются как ответ слишком грубо до осмотра;
- есть понятный возврат к сцене;
- состояние packed видно;
- контейнер не выглядит как отдельный магазин или инвентарь RPG.

## 9. Экран 4: карточка предмета

Purpose: объяснить, зачем нужен предмет, когда он помогает и чем опасен.

Что передать в Stitch:

- item name;
- item category;
- weight;
- where found;
- value;
- helps when;
- use now;
- risk/limitation;
- current backpack impact.

Промпт:

```text
Design an item detail bottom sheet for WildPathGame.
Item: [ITEM_NAME].
Category: [ESSENTIAL_USEFUL_TRAP].
Weight: [WEIGHT].
Found in: [PLACE].

The sheet must answer four learning questions:
1. What value does it provide?
2. When does it help?
3. What should the player do with it now?
4. What is the risk or limitation?

Include actions: take, leave, close.
Show backpack impact and time cost.
Keep the sheet compact, serious, and readable in Russian.
```

Проверка:

- карточка учит, а не просто описывает предмет;
- риск виден для trap и useful items;
- take/leave имеют ясную визуальную иерархию;
- bottom sheet не перекрывает полностью контекст на мобильном;
- длинные русские слова не ломают кнопку.

## 10. Экран 5: рюкзак и состояние набора

Purpose: показать, что игрок уже взял, сколько весит рюкзак и что можно убрать.

Что передать в Stitch:

- selected items;
- weight limit;
- current weight;
- required progress;
- overweight state;
- remove action;
- empty state.

Промпт:

```text
Design the backpack panel for WildPathGame.
Show selected items, current total weight, weight limit, critical item progress, and remove actions.
Create two states: empty backpack and partially filled backpack.
If overweight, the weight indicator must turn danger red and explain the consequence briefly.
On mobile, this should work as a bottom bar plus expandable bottom sheet.
```

Проверка:

- игрок понимает, что уже взято;
- вес считывается за секунду;
- remove action не выглядит как delete-save;
- empty state не выглядит как ошибка;
- мобильная панель не закрывает критичные действия.

## 11. Экран 6: итоговый разбор

Purpose: показать успех или провал, объяснить последствия и закрепить учебный принцип.

Что передать в Stitch:

- success/failure;
- score;
- taken items;
- missed essentials;
- risky items;
- decision notes;
- expert note;
- retry/continue actions.

Промпт:

```text
Design the result and debrief screen for WildPathGame episode [EPISODE_TITLE].
The player has [SUCCESS_OR_FAILURE].
Show score, outcome title, consequence summary, taken items, missed essentials, risky choices, and expert takeaway.
The tone must be educational, not shaming.
Include retry and continue actions.
Use green for success, orange for warnings, red only for dangerous consequences.
```

Проверка:

- игрок понимает, что именно было не так;
- есть практический вывод;
- retry и continue не конфликтуют;
- missed essentials и risky choices различаются;
- экран не превращается в сухой отчет.

## 12. Экран 7: журнал выжившего / прогресс

Purpose: показать накопленный прогресс, уроки и историю решений.

Что передать в Stitch:

- completed episodes;
- unlocked skills;
- last result;
- short lesson summary;
- next recommended episode;
- empty state.

Промпт:

```text
Design the survivor journal screen for WildPathGame.
Show completed episodes, unlocked practical skills, recent outcomes, and short learning notes.
This is an in-game progress screen, not a profile page.
Keep it compact, tactical, and useful for returning players.
Include an empty state for a new player.
```

Проверка:

- журнал помогает вернуться в игру;
- прогресс виден без геймификационного шума;
- уроки сформулированы коротко;
- нет ложного ощущения сертификации или гарантии выживания.

## 13. MVP-ситуации и экраны

MVP должен двигаться от простых решений к более сложным. Для каждой ситуации нужен одинаковый набор экранов, но с разными контейнерами, предметами и последствиями.

| Episode | Situation | Primary skill | Main screens in Stitch |
|---|---|---|---|
| 01 | Квартира: 18 минут до выхода | evacuation packing | episode selection, main apartment scene, wardrobe, refrigerator, pantry, shelf, item detail, backpack, result, journal |
| 02 | Подъезд или временное укрытие: холодная ночь | warmth and exposure basics | main shelter scene, clothing/insulation zone, heat-risk choices, item detail, warmth status, result |
| 03 | Дорога: вода и ожидание помощи | water discipline | roadside scene, car/container, water choices, unsafe substitute detail, backpack/resource panel, result |
| 04 | Лесная опушка: укрытие до утра | shelter and exposure | forest clearing scene, material zones, shelter choice panel, item detail, energy/warmth panel, result |
| 05 | Лестница или дорога: легкая травма | injury management | injury scene, first-aid container, movement choice panel, item detail, consequence result |
| 06 | Магазин или улица: люди и ограниченные ресурсы | human risk and cooperation | social-risk scene, negotiation/resource choices, inventory tradeoff, result, course summary |

Safety-sensitive эпизоды не должны идти в финальную Stitch-итерацию без источников и review status.

## 14. Подробный план по Episode 01

Episode 01 уже имеет импортированные Stitch-экраны. Его нужно использовать как пилотный эталон.

### 14.1 Episode selection

Использовать текущий импорт `episode_selection`.

Что проверить:

- первый эпизод доступен;
- будущие эпизоды видны как locked/draft;
- карточка Episode 01 ведет в игру;
- стиль совпадает со стартовым экраном приложения.

### 14.2 Main apartment scene

Использовать `episode_1_main_scene_refined` как основной референс, а `episode_1_main_scene` как предыдущую итерацию.

Что запросить при следующей итерации:

```text
Refine the apartment evacuation main scene.
Make hotspots align with wardrobe, refrigerator, pantry, and hallway shelf.
Keep the scene readable at 390px mobile width.
Add mission, timer, critical kit progress, and backpack weight without hiding the apartment image.
```

### 14.3 Wardrobe container

Использовать `wardrobe_container_item_detail` как референс для зоны шкафа и карточки одежды.

Нужные состояния:

- список одежды;
- warm jacket как essential;
- raincoat и gloves как useful;
- cotton hoodie, heavy blanket, fancy suit как trap или lower-priority;
- карточка предмета с риском.

### 14.4 Refrigerator container

Использовать `refrigerator_container_view`.

Нужные состояния:

- water bottle как essential;
- energy bar, salt, canned food как useful;
- soda, perishable food, glass bottle как trap или risky;
- вес и риск должны быть видны до упаковки.

### 14.5 Pantry container

Использовать `pantry_container_refined` и `pantry_container_backpack_panel`.

Нужные состояния:

- first aid и knife как essential;
- trash bags, matches, rope, duct tape как useful;
- heavy pot как trap;
- рюкзак должен показывать влияние выбора на вес.

### 14.6 Item detail

Использовать `item_detail_bottom_sheet` и `item_detail_tactical_flashlight`.

Сделать отдельные варианты для:

- flashlight;
- batteries;
- water bottle;
- first aid;
- warm jacket;
- documents;
- knife;
- один trap item.

### 14.7 Result screen

Использовать `episode_1_results`.

Нужные варианты:

- success: все essentials собраны, вес в лимите, время осталось;
- missing essential: нет воды, аптечки или документов;
- overweight: essentials есть, но рюкзак перегружен;
- time expired: игрок слишком долго осматривал предметы;
- risky loadout: взяты trap items.

## 15. План по Episode 02: холодная ночь

Цель Stitch-итераций: показать, что тепло зависит от сухих слоев, защиты от ветра, энергии и выбора места ожидания.

Full Stitch production brief: [Stitch Brief: Episode 02 Cold Night Shelter](stitch-episode-02-cold-night-brief.md).

Экраны:

- main shelter scene;
- clothing/insulation container;
- risky heat source detail;
- warmth status backpack panel;
- result debrief.

Ключевой промпт:

```text
Design a WildPathGame episode about surviving a cold night in a temporary urban shelter.
The player must choose insulation, dry layers, safe waiting position, and avoid risky false solutions.
Show warmth, energy, and time pressure.
Do not show unsafe fire instructions.
Keep the interface practical and educational.
```

Проверка:

- нет романтизации огня;
- игрок видит разницу между warmth и comfort;
- риск мокрой одежды или ветра объяснен;
- результат учит принципу dry layer + wind protection + energy conservation.

## 16. План по Episode 03: вода на дороге

Цель Stitch-итераций: показать приоритет воды, опасность заменителей и tradeoff веса.

Экраны:

- roadside main scene;
- car trunk/container;
- water source choice;
- item detail для воды, сладкого напитка, фильтра/таблеток при наличии;
- resource panel;
- result debrief.

Ключевой промпт:

```text
Design a WildPathGame roadside episode focused on water discipline.
The player is waiting or moving after disruption and must choose what liquid and supplies to carry.
Show hydration risk, weight tradeoff, and unsafe substitutes.
Do not imply unsafe water is safe without treatment context.
```

Проверка:

- вода не выглядит как просто еще один предмет;
- заменители воды объяснены осторожно;
- нет опасных советов по питью сомнительных источников;
- итог объясняет приоритет hydration + treatment context.

## 17. План по Episode 04: укрытие на лесной опушке

Цель Stitch-итераций: показать выбор места, защиту от ветра/дождя и минимальное укрытие.

Экраны:

- forest clearing main scene;
- material zones;
- shelter option detail;
- energy/warmth panel;
- result debrief.

Ключевой промпт:

```text
Design a WildPathGame forest-edge shelter episode.
The player must choose a safer waiting spot and materials for basic exposure protection.
Show wind, rain, darkness, energy, and warmth constraints.
Avoid bushcraft fantasy; keep choices plausible for an ordinary stressed person.
```

Проверка:

- сцена не выглядит как hardcore wilderness simulator;
- действия правдоподобны для новичка;
- укрытие связано с exposure, а не с декоративным крафтом;
- результат объясняет выбор места и защиту от ветра/воды.

## 18. План по Episode 05: легкая травма

Цель Stitch-итераций: показать, что травма меняет скорость, выбор маршрута и приоритет аптечки.

Экраны:

- injury situation scene;
- first-aid container;
- movement choice panel;
- item detail for first aid items;
- consequence result.

Ключевой промпт:

```text
Design a WildPathGame episode about a minor injury during evacuation.
The player must prioritize basic first aid access, reduce movement risk, and avoid choices that worsen the situation.
Do not give medical treatment claims beyond first-aid awareness.
The interface must show injury impact on time, energy, and route safety.
```

Проверка:

- нет медицинских обещаний;
- аптечка объясняется как risk reduction, не лечение всего;
- движение и вес связаны с последствиями;
- результат не звучит как диагноз.

## 19. План по Episode 06: люди и ограниченные ресурсы

Цель Stitch-итераций: показать социальный риск без оружейной или агрессивной рамки.

Экраны:

- street/shop social-risk scene;
- resource choice panel;
- cooperation/tradeoff detail;
- backpack/resource state;
- final course summary.

Ключевой промпт:

```text
Design a WildPathGame social-risk episode in an urban street or small shop after disruption.
The player must make calm, non-violent choices around limited resources, visibility, and cooperation.
Avoid weaponized framing.
Show practical tradeoffs: noise, attention, fairness, carrying capacity, and leaving safely.
```

Проверка:

- нет поощрения конфликта;
- ordinary tools не выглядят как оружие;
- интерфейс поддерживает спокойный выбор;
- итог учит de-escalation, visibility, load discipline, cooperation.

## 20. Итерационный цикл в Stitch

Для каждого экрана обычно нужно три прохода.

Pass 1: structure.

- цель: получить компоновку;
- допускается временный черновой текст;
- проверяется, все ли нужные блоки есть.

Pass 2: gameplay state.

- цель: добавить реальные item states, timer, weight, progress, actions;
- временный черновой текст запрещен;
- проверяется, можно ли перенести экран в React.

Pass 3: polish and responsive.

- цель: привести к канону, проверить mobile-safe layout;
- убрать декоративный шум;
- проверить русский текст;
- сохранить финальные `screen.png` и `code.html`.

## 21. Что переносить из Stitch в код

Переносить:

- структуру экрана;
- визуальную иерархию;
- расположение hotspots;
- названия состояний;
- размеры панелей;
- поведение bottom sheet;
- цветовые состояния success/warning/danger;
- empty/locked/overweight states.

Не переносить автоматически:

- непроверенные survival claims;
- случайные тексты из генерации;
- декоративные элементы, которых нет в UX canon;
- сложную CSS-анимацию без игровой пользы;
- любые советы по медицине, химии, радиации, огню или воде без review.

## 22. Definition of Done для Stitch-экрана

Экран считается готовым к реализации, если:

- есть `screen.png`;
- есть `code.html` или достаточно точный layout reference;
- есть `notes.md` с принятыми решениями;
- экран соответствует `ux-design-canon.md`;
- состояние экрана соответствует episode data;
- все кнопки и панели имеют понятное назначение;
- mobile width 390px не ломает текст;
- нет небезопасных или непроверенных инструкций;
- владелец продукта принял экран как рабочий reference.

## 23. Передача в разработку

Перед переносом в React для каждой ситуации нужно создать короткую implementation note:

```text
Episode:
Accepted Stitch folders:
Screens to implement:
Reusable components:
New data required:
Texts that must come from i18n:
Safety review blockers:
Visual risks:
Acceptance checks:
```

После реализации обязательны:

- build check;
- lint check;
- desktop visual check;
- mobile 390px visual check;
- прохождение start -> scene -> inspect -> pack -> evaluate -> debrief.

## 24. Ближайшие действия

1. Привести существующий Stitch-импорт Episode 01 к рекомендуемой структуре папок.
2. Создать `00_brief.md` для Episode 01.
3. Зафиксировать, какие из текущих Stitch-экранов принимаются как reference.
4. Сгенерировать недостающие состояния результата Episode 01.
5. После Episode 01 повторить процесс для Episode 02, но начинать только с утвержденного brief и safety boundaries.
