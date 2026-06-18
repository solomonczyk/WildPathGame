# Stitch Production Spec: Episode 02 Cold Night Shelter

Status: `READY_FOR_STITCH_PRODUCTION`
Owner: Taras
Target tool: Stitch
Purpose: generate the complete visual mockup batch for the second playable WildPathGame location.
Related plan: [Stitch Screen Production Plan](stitch-screen-production-plan.md#15-план-по-episode-02-холодная-ночь)

## 0. Instruction For Stitch

Create production-ready UI mockups for WildPathGame Episode 02. The output must be a set of concrete game screens, not a mood board, landing page, concept poster, or generic app design.

The first episode already exists and uses a dark tactical survival interface with clickable scene hotspots, item cards, backpack state, timer, weight limit, and result/debrief states. Episode 02 must look like the same product and the next screen in the same game.

Use Russian UI copy as the primary visible language for the mockups. The final game is multilingual, so every text block must be designed as localization-safe: no text baked into the scene image, no fixed-width labels that only fit Russian, and no layout that depends on one exact phrase length.

## 1. Required Stitch Output Folders

Create these screens as separate Stitch outputs:

```text
episode_2_main_shelter_scene
episode_2_clothing_insulation_container
episode_2_waiting_position_choice
episode_2_supply_shelf_container
episode_2_risky_heat_detail
episode_2_item_detail_dry_layer
episode_2_item_detail_windbreaker
episode_2_item_detail_water
episode_2_item_detail_energy_bar
episode_2_item_detail_cotton_hoodie_trap
episode_2_warmth_status_backpack_panel
episode_2_result_success
episode_2_result_missing_dry_layer
episode_2_result_risky_heat
```

After export, use this folder structure:

```text
design-imports/
  stitch_episode_02_cold_night_shelter/
    00_stitch_spec.md
    01_main_shelter_scene/
    02_clothing_insulation_container/
    03_waiting_position_choice/
    04_supply_shelf_container/
    05_risky_heat_detail/
    06_item_detail_variants/
    07_warmth_status_backpack_panel/
    08_result_states/
```

## 2. Episode Definition

Episode name on screen:

```text
Подъезд. Холодная ночь
```

Long title for episode selection:

```text
Подъезд или временное укрытие: холодная ночь
```

Player situation:

```text
После выхода из квартиры транспорт остановился. Связь слабая. До утра нужно переждать в холодном подъезде или временном укрытии.
```

Mission text:

```text
Выбери сухие слои, защиту от ветра, место ожидания и небольшой запас энергии.
```

Learning principle:

```text
Тепло держится за счет сухости, защиты от ветра, изоляции от холодной поверхности и экономии сил.
```

Primary skill:

```text
Тепло и защита от холода
```

Gameplay objective:

The player must prepare for a cold night by selecting the right waiting spot and packing key items. The screen must make the player compare warmth, dryness, wind exposure, energy, and weight.

## 3. Safety Boundaries

Do not show any of the following as correct or attractive choices:

- open flame;
- campfire;
- candle as a solution;
- unsafe indoor heater;
- instructions for making heat indoors;
- weapons;
- combat framing;
- gore;
- medical treatment claims;
- guarantee of survival.

The risky heat option may be represented only as a warning state. It must look like a bad decision, not a cool tool.

## 4. Visual Style

Use the same design language as Episode 01:

- dark charcoal base: `#101010`, `#131313`, `#1b1b1b`;
- cold environment colors: blue-gray, concrete gray, muted steel;
- warning accent: amber/orange;
- success accent: tactical green;
- danger accent: muted red;
- panels: compact, rectangular, small radius around 4px;
- typography: condensed tactical display for headings, mono style for timers/status labels;
- realistic scene art, not cartoon;
- mobile-first density, with no marketing hero layout.

Localization-safe UI rules:

- all visible text must be editable UI text, not part of the background art;
- hotspot labels must fit 1-3 words and allow wrapping to two lines;
- buttons must support longer English/Spanish text without clipping;
- item cards must allow title wrapping to two lines and microcopy wrapping to three lines;
- result panels must support 15-25% longer text than the Russian copy;
- do not place essential information only inside icons or color;
- leave at least 16 px extra horizontal breathing room inside text containers;
- avoid tiny text below 11 px on mobile;
- do not use narrow badges that break if translated.

Scene mood:

- cold, quiet, practical;
- serious but not horror;
- ordinary urban shelter, not bunker fantasy.

## 5. Canvas And Responsive Targets

Create each screen in two target frames:

```text
Mobile: 390 x 844
Desktop reference: 1440 x 900
```

Mobile is the primary target. Desktop can widen the scene and place the backpack/status panel on the right, but must preserve the same objects and state.

For mobile, reserve:

- top safe area: 0-24 px;
- bottom interaction bar: 744-844 px;
- main scene visible area: at least 390 x 360 px.

Do not cover the central scene with large UI panels.

## 6. Main Scene Layout

Screen:

```text
episode_2_main_shelter_scene
```

Mobile frame: `390 x 844`.

Layout:

| Area | Position | Size | Content |
|---|---:|---:|---|
| Header/status strip | x 0, y 0 | 390 x 64 | episode label, timer, warmth mini-status |
| Mission panel | x 12, y 76 | 366 x 96 | title, location, mission |
| Scene image | x 12, y 184 | 366 x 350 | stairwell/shelter with hotspots |
| Critical progress row | x 12, y 546 | 366 x 54 | dry layer, wind, energy, safe spot |
| Character hint cards | x 12, y 612 | 366 x 118 | two compact advice cards |
| Bottom backpack bar | x 0, y 744 | 390 x 100 | weight, packed count, continue/evaluate button |

Desktop frame: `1440 x 900`.

Layout:

| Area | Position | Size | Content |
|---|---:|---:|---|
| Header/status strip | x 0, y 0 | 1440 x 72 | player status, timer, episode label |
| Left mission column | x 32, y 96 | 300 x 260 | title, location, mission, story |
| Main scene | x 356, y 96 | 720 x 560 | stairwell/shelter with hotspots |
| Right backpack panel | x 1100, y 96 | 308 x 560 | items, weight, warmth status |
| Bottom debrief/action strip | x 356, y 680 | 720 x 120 | progress, character hint, evaluate |

Header content:

```text
ЭПИЗОД 02
ХОЛОДНАЯ НОЧЬ
До рассвета: 6 ч
Тепло: 38%
Силы: 62%
```

Mission panel content:

```text
Подъезд. Холодная ночь
Подъезд, 01:20, слабая связь
Продержись до утра: выбери сухой слой, защиту от ветра, место ожидания и немного энергии.
```

Story text:

```text
На улице ветер и мокрый снег. В подъезде холодно, но здесь есть сухой угол, вещи из рюкзака и несколько спорных вариантов. Ошибка не выглядит страшной сразу, но к утру забирает силы.
```

Character hint cards:

```text
Лера: Сухое важнее мягкого. Мокрая вещь быстро забирает тепло.
Никита: Хочется ходить туда-сюда, но силы тоже заканчиваются.
```

## 7. Main Scene Art Direction

The scene image must show an ordinary cold urban shelter/stairwell. Required objects and positions in the mobile scene image:

| Object / zone | Approx position in scene image | Visual details | Gameplay purpose |
|---|---:|---|---|
| Dry waiting corner | x 24-150, y 215-330 | cardboard pad, bench edge, interior wall, no visible wet floor | safe spot hotspot |
| Clothing/insulation pile | x 40-165, y 95-205 | hook or bag with hat, socks, folded dry layer, windbreaker | item container hotspot |
| Supply shelf/backpack | x 225-350, y 105-230 | small shelf, backpack, bottle, bar, flashlight, power bank | supply container hotspot |
| Risky draft/heat zone | x 230-360, y 235-340 | exterior door gap, wet floor, cold blue light, questionable heater/candle silhouette crossed/warning | trap hotspot |
| Cold exterior signal | right edge | blue light through door/window, snow/wet marks | communicates cold/wind |
| Interior wall / pipes | left or back wall | concrete, pipes, old radiator not glowing | urban realism |

Hotspot style:

- circular or bracket highlight;
- amber outline for unopened zones;
- green check state after solved;
- red warning outline for risk zone;
- small icon plus short label.

Hotspot labels on main scene:

```text
Сухой угол
Слои и утепление
Полка с запасами
Рискованный обогрев
```

Do not put large labels directly over important objects. Labels must sit near hotspots with leader lines or compact badges.

## 8. Main Scene Stitch Prompt

Copy this prompt into Stitch for the main screen:

```text
Create a production UI mockup for WildPathGame Episode 02, screen name episode_2_main_shelter_scene.

Mobile frame 390x844 first, plus desktop reference 1440x900. This is a playable hidden-object survival game screen, not a landing page.

Use Russian UI text. Match Episode 01 style: dark charcoal tactical UI, compact panels, amber active accents, green success accents, muted red danger accents, realistic gritty 2D scene art, mobile-first layout.

Scene: cold urban stairwell or temporary shelter at night. Concrete walls, metal railings, pipes, weak amber emergency light, cold blue light from an exterior door or broken window, wet floor near the draft, dry interior corner, clothing pile, small supply shelf, backpack. No people.

Mobile layout:
- Header/status strip at top: "ЭПИЗОД 02", "ХОЛОДНАЯ НОЧЬ", "До рассвета: 6 ч", "Тепло: 38%", "Силы: 62%".
- Mission panel below: title "Подъезд. Холодная ночь", location "Подъезд, 01:20, слабая связь", mission "Продержись до утра: выбери сухой слой, защиту от ветра, место ожидания и немного энергии."
- Main scene image from y 184 to y 534 with four visible hotspots.
- Critical progress row: "Сухой слой 0/1", "Ветер 0/1", "Энергия 0/1", "Место 0/1".
- Two small character hint cards.
- Bottom backpack bar with weight "0.0 / 6.0 кг", packed count, and disabled button "Нужны ключевые решения".

Hotspots in the scene:
1. Left lower dry corner: label "Сухой угол", cardboard pad and bench by interior wall.
2. Left upper clothing pile: label "Слои и утепление", hook or bag with dry layer, hat, socks, windbreaker.
3. Right upper supply shelf: label "Полка с запасами", backpack, water bottle, energy bar, flashlight, power bank.
4. Right lower risk zone: label "Рискованный обогрев", drafty exterior door, wet floor, questionable heat object shown as warning only.

Do not show flames, fire instructions, weapons, gore, cozy camping, or bunker fantasy. The screen must be readable at 390px width and must not hide the scene behind large panels.
```

## 9. Clothing And Insulation Container

Screen:

```text
episode_2_clothing_insulation_container
```

Mobile layout:

| Area | Position | Size | Content |
|---|---:|---:|---|
| Top sheet handle/header | x 0, y 210 | 390 x 68 | back arrow, container name |
| Container image strip | x 12, y 290 | 366 x 96 | cropped clothing pile |
| Item grid | x 12, y 400 | 366 x 278 | 2 columns, 8 item cards |
| Bottom action/status | x 0, y 744 | 390 x 100 | current weight and selected count |

Header copy:

```text
Слои и утепление
Выбери то, что держит тепло сухим и защищает от ветра.
```

Item cards:

| Card | Label | Category | Weight | Microcopy |
|---|---|---|---:|---|
| 1 | Сухой термослой | Важно | 0.4 кг | Сухой слой ближе к телу |
| 2 | Теплая шапка | Важно | 0.2 кг | Мало весит, помогает ночью |
| 3 | Сухие носки | Важно | 0.15 кг | Мокрые ноги быстро мерзнут |
| 4 | Ветровка | Важно | 0.5 кг | Режет ветер, не заменяет тепло |
| 5 | Аварийное одеяло | Полезно | 0.1 кг | Барьер, но не магия |
| 6 | Картонная подкладка | Полезно | 0.3 кг | Изоляция от пола |
| 7 | Хлопковая толстовка | Ловушка | 0.9 кг | Плоха, если отсыреет |
| 8 | Мокрый плед | Ловушка | 1.8 кг | Тяжелый и холодный |

Visual requirements:

- essential cards have green accent;
- useful cards have amber accent;
- trap cards have red accent;
- each card includes icon, weight, short risk/value;
- selected state must be visible on at least three cards: dry layer, hat, windbreaker.

Stitch prompt:

```text
Create screen episode_2_clothing_insulation_container for WildPathGame.

It is a mobile-first bottom-sheet/container screen over the cold stairwell scene. Use Russian UI copy. Dark tactical UI, same style as Episode 01.

Header: "Слои и утепление". Subtitle: "Выбери то, что держит тепло сухим и защищает от ветра."

Show a cropped image strip of a clothing pile on hooks/bag in the stairwell. Below it show a 2-column grid of 8 item cards:
1. Сухой термослой, Важно, 0.4 кг, "Сухой слой ближе к телу"
2. Теплая шапка, Важно, 0.2 кг, "Мало весит, помогает ночью"
3. Сухие носки, Важно, 0.15 кг, "Мокрые ноги быстро мерзнут"
4. Ветровка, Важно, 0.5 кг, "Режет ветер, не заменяет тепло"
5. Аварийное одеяло, Полезно, 0.1 кг, "Барьер, но не магия"
6. Картонная подкладка, Полезно, 0.3 кг, "Изоляция от пола"
7. Хлопковая толстовка, Ловушка, 0.9 кг, "Плоха, если отсыреет"
8. Мокрый плед, Ловушка, 1.8 кг, "Тяжелый и холодный"

Show green accent for important, amber for useful, red for trap. Show selected state on dry layer, warm hat, and windbreaker. Bottom bar shows "Вес: 1.1 / 6.0 кг" and a button "К рюкзаку".
```

## 10. Waiting Position Choice

Screen:

```text
episode_2_waiting_position_choice
```

Purpose:

The player chooses where to wait. This is not an item container. It is a scene decision screen.

Mobile layout:

| Area | Position | Size | Content |
|---|---:|---:|---|
| Header | x 12, y 72 | 366 x 82 | title and instruction |
| Mini scene map | x 12, y 170 | 366 x 350 | same shelter from above/front |
| Choice cards | x 12, y 534 | 366 x 198 | 4 stacked choices |
| Bottom state bar | x 0, y 744 | 390 x 100 | warmth/dryness effect |

Header copy:

```text
Где ждать до утра?
Место влияет на ветер, сырость и потерю сил.
```

Choice cards:

| Choice | Category | Effect |
|---|---|---|
| Сухой угол у внутренней стены | Важно | меньше ветра, меньше потерь тепла |
| Картон под ноги и рюкзак | Полезно | меньше контакт с холодным полом |
| У двери на сквозняке | Ловушка | ветер забирает тепло |
| У мокрого окна | Ловушка | сырость и холод усиливаются |

Map labels:

```text
Внутренняя стена
Сквозняк
Мокрая зона
Картон
```

Stitch prompt:

```text
Create screen episode_2_waiting_position_choice for WildPathGame.

Use Russian UI. This is a choice screen for where to wait through a cold night in a stairwell. It must look like part of the same playable episode, not like an article.

Header: "Где ждать до утра?" Subtitle: "Место влияет на ветер, сырость и потерю сил."

Show a compact mini scene/map of the same shelter. Mark four areas: "Внутренняя стена", "Сквозняк", "Мокрая зона", "Картон". The safe area is a dry corner at the interior wall. Risk areas are the exterior door draft and wet window/floor.

Below the map show four choice cards:
- Сухой угол у внутренней стены, Важно, "меньше ветра, меньше потерь тепла"
- Картон под ноги и рюкзак, Полезно, "меньше контакт с холодным полом"
- У двери на сквозняке, Ловушка, "ветер забирает тепло"
- У мокрого окна, Ловушка, "сырость и холод усиливаются"

Bottom state bar: "Тепло +18", "Сухость +12", "Силы -3". Use green for selected safe choice and red outlines for trap zones.

Design all labels and cards so they can later be localized to English and Spanish without changing the component structure.
```

## 11. Supply Shelf Container

Screen:

```text
episode_2_supply_shelf_container
```

Mobile layout:

| Area | Position | Size | Content |
|---|---:|---:|---|
| Header | x 0, y 210 | 390 x 68 | container title |
| Shelf visual strip | x 12, y 290 | 366 x 96 | shelf/backpack crop |
| Item list | x 12, y 400 | 366 x 278 | 7 cards |
| Bottom action/status | x 0, y 744 | 390 x 100 | weight and packed count |

Header copy:

```text
Полка с запасами
Холод не отменяет воду и энергию. Но лишний вес мешает двигаться.
```

Items:

| Card | Label | Category | Weight | Microcopy |
|---|---|---|---:|---|
| 1 | Бутылка воды | Важно | 1.0 кг | Питье и лекарства |
| 2 | Энергетический батончик | Важно | 0.15 кг | Калории без лишнего веса |
| 3 | Налобный фонарь | Полезно | 0.25 кг | Свет без занятых рук |
| 4 | Пауэрбанк | Полезно | 0.4 кг | Связь и карта |
| 5 | Маленькое радио | Полезно | 0.35 кг | Новости и инструкции |
| 6 | Стопка консервов | Ловушка | 2.4 кг | Слишком тяжело сейчас |
| 7 | Стеклянная бутылка | Ловушка | 1.2 кг | Хрупкая и тяжелая |

Stitch prompt:

```text
Create screen episode_2_supply_shelf_container for WildPathGame.

Use Russian UI. Show a container screen for a small shelf/backpack area in a cold urban shelter. It must match Episode 01 container style: dark tactical panel, compact item cards, weight, category badges, selected states.

Header: "Полка с запасами". Subtitle: "Холод не отменяет воду и энергию. Но лишний вес мешает двигаться."

Show a shelf visual strip with backpack, water bottle, energy bar, flashlight, power bank, small radio, and heavier low-priority items.

Cards:
1. Бутылка воды, Важно, 1.0 кг, "Питье и лекарства"
2. Энергетический батончик, Важно, 0.15 кг, "Калории без лишнего веса"
3. Налобный фонарь, Полезно, 0.25 кг, "Свет без занятых рук"
4. Пауэрбанк, Полезно, 0.4 кг, "Связь и карта"
5. Маленькое радио, Полезно, 0.35 кг, "Новости и инструкции"
6. Стопка консервов, Ловушка, 2.4 кг, "Слишком тяжело сейчас"
7. Стеклянная бутылка, Ловушка, 1.2 кг, "Хрупкая и тяжелая"

Bottom bar: "Вес: 2.1 / 6.0 кг", "Ключевые: 5/6", button "Готово".
```

## 12. Risky Heat Detail

Screen:

```text
episode_2_risky_heat_detail
```

Purpose:

Show a risky selected object as a warning detail panel. The player must understand why it is a bad choice. Do not make the object visually heroic.

Mobile layout:

| Area | Position | Size | Content |
|---|---:|---:|---|
| Dimmed scene | x 0, y 0 | 390 x 844 | main scene blurred/dimmed |
| Warning sheet | x 12, y 244 | 366 x 430 | risk detail |
| Bottom buttons | x 24, y 606 | 342 x 112 | leave / remove |

Warning card copy:

```text
Рискованный обогрев
Кажется, что это быстро даст тепло, но в помещении такой выбор может создать новый риск: дым, пожар, плохой воздух или потерю времени.
```

Fields:

```text
Ценность: кратковременное ощущение тепла
Риск: может сделать ситуацию опаснее
Что сделать: выбрать сухие слои, защиту от ветра и безопасное место ожидания
```

Buttons:

```text
Не брать
Вернуться к выбору
```

Stitch prompt:

```text
Create screen episode_2_risky_heat_detail for WildPathGame.

This is a warning detail sheet after the player taps "Рискованный обогрев". Dim the cold stairwell scene behind the panel. The selected object must look questionable and unsafe, not exciting.

Main title: "Рискованный обогрев"
Body: "Кажется, что это быстро даст тепло, но в помещении такой выбор может создать новый риск: дым, пожар, плохой воздух или потерю времени."

Show three fields:
- "Ценность: кратковременное ощущение тепла"
- "Риск: может сделать ситуацию опаснее"
- "Что сделать: выбрать сухие слои, защиту от ветра и безопасное место ожидания"

Buttons: "Не брать" and "Вернуться к выбору".

Use muted red danger accent. Do not show flames, instructions, diagrams, or a functioning heater. This is a trap detail screen.
```

## 13. Item Detail Variants

All item detail screens use the same bottom sheet pattern. Required layout:

| Area | Position | Size | Content |
|---|---:|---:|---|
| Dimmed scene/container | x 0, y 0 | 390 x 844 | background |
| Bottom sheet | x 0, y 328 | 390 x 516 | item detail |
| Header row | x 20, y 352 | 350 x 64 | item icon, name, category |
| Stats row | x 20, y 430 | 350 x 56 | weight, warmth, dryness/wind |
| Explanation | x 20, y 502 | 350 x 146 | value/use/risk |
| Buttons | x 20, y 736 | 350 x 84 | take / leave |

Fields every item must show:

```text
Вес
Ценность
Поможет когда
Что сделать
Риск
```

Required variants and exact copy:

### 13.1 Dry Layer

Screen:

```text
episode_2_item_detail_dry_layer
```

Copy:

```text
Сухой термослой
Категория: Важно
Вес: 0.4 кг
Ценность: держит тепло ближе к телу
Поможет когда: одежда сверху холодная или сырая
Что сделать: надеть первым сухим слоем
Риск: не защищает от ветра без внешнего слоя
```

### 13.2 Windbreaker

Screen:

```text
episode_2_item_detail_windbreaker
```

Copy:

```text
Ветровка
Категория: Важно
Вес: 0.5 кг
Ценность: снижает потерю тепла от ветра
Поможет когда: у двери, окна или на сквозняке
Что сделать: надеть поверх теплого сухого слоя
Риск: почти не греет сама по себе
```

### 13.3 Water

Screen:

```text
episode_2_item_detail_water
```

Copy:

```text
Бутылка воды
Категория: Важно
Вес: 1.0 кг
Ценность: питье, лекарства, ожидание
Поможет когда: ночь затягивается или приходится идти дальше
Что сделать: держать доступной, не убирать глубоко
Риск: вес заметен, но без воды запас прочности ниже
```

### 13.4 Energy Bar

Screen:

```text
episode_2_item_detail_energy_bar
```

Copy:

```text
Энергетический батончик
Категория: Важно
Вес: 0.15 кг
Ценность: быстрые калории без лишнего веса
Поможет когда: силы падают от холода и ожидания
Что сделать: оставить на ночное ожидание или утренний выход
Риск: не заменяет воду и теплую одежду
```

### 13.5 Cotton Hoodie Trap

Screen:

```text
episode_2_item_detail_cotton_hoodie_trap
```

Copy:

```text
Хлопковая толстовка
Категория: Ловушка
Вес: 0.9 кг
Ценность: комфорт в сухом помещении
Поможет когда: короткое ожидание без сырости
Что сделать: брать только если ключевые вещи уже закрыты
Риск: отсыревший хлопок плохо держит тепло
```

Stitch prompt for item detail batch:

```text
Create item detail bottom sheet variants for WildPathGame Episode 02.

Use the same component layout for five variants: dry layer, windbreaker, water, energy bar, cotton hoodie trap. Mobile frame 390x844. Dark dimmed background. Bottom sheet from y 328 to bottom. Header with icon, item name, category badge. Stats row with weight and warmth/dryness/wind relevance. Explanation fields: "Ценность", "Поможет когда", "Что сделать", "Риск". Buttons: "Взять" and "Оставить".

Use exact Russian copy from the spec. Essential items use green accent. Trap item uses muted red accent. Keep text readable and compact at 390px width.

Do not bake any text into illustrations. All text must be editable UI text for later RU/EN/ES localization.
```

## 14. Warmth Status Backpack Panel

Screen:

```text
episode_2_warmth_status_backpack_panel
```

This can be shown as a standalone mobile screen and as the desktop right panel.

Mobile layout:

| Area | Position | Size | Content |
|---|---:|---:|---|
| Header | x 12, y 72 | 366 x 64 | backpack title |
| Status meters | x 12, y 152 | 366 x 160 | warmth, dryness, wind, energy |
| Packed list | x 12, y 328 | 366 x 260 | selected items |
| Risk warning | x 12, y 604 | 366 x 80 | risky choices |
| Bottom action | x 0, y 744 | 390 x 100 | evaluate button |

Visible state:

```text
Рюкзак и тепло
Вес: 3.2 / 6.0 кг
Тепло: 76%
Сухость: 80%
Ветер: защита есть
Силы: 58%
Рискованные: 0
```

Packed list:

```text
Сухой термослой
Теплая шапка
Сухие носки
Ветровка
Бутылка воды
Энергетический батончик
```

Button:

```text
Ждать до утра
```

Stitch prompt:

```text
Create screen episode_2_warmth_status_backpack_panel for WildPathGame.

This is the backpack/status panel for the cold night episode. Use Russian UI. Dark tactical panel style.

Show:
- title "Рюкзак и тепло"
- weight "3.2 / 6.0 кг"
- meters: "Тепло: 76%", "Сухость: 80%", "Ветер: защита есть", "Силы: 58%"
- risky count "Рискованные: 0"
- packed list: Сухой термослой, Теплая шапка, Сухие носки, Ветровка, Бутылка воды, Энергетический батончик
- final button "Ждать до утра"

The panel should clearly teach that the correct kit is not the heaviest kit. It should be dense, readable, and consistent with Episode 01 backpack UI.
```

## 15. Result Screens

All result screens use the same modal/sheet structure:

| Area | Position | Size | Content |
|---|---:|---:|---|
| Dimmed scene | x 0, y 0 | 390 x 844 | main scene dimmed |
| Result panel | x 12, y 96 | 366 x 650 | outcome, score, taken/missed/risky, debrief |
| Buttons | x 24, y 678 | 342 x 120 | replay / continue |

Common fields:

```text
Исход
Оценка
Что сработало
Что осталось риском
Практический вывод
```

### 15.1 Success Result

Screen:

```text
episode_2_result_success
```

Copy:

```text
Исход: Ночь под контролем
Оценка: 92/100
Что сработало: сухой слой, ветровка, вода, энергия, сухой угол.
Что осталось риском: связь слабая, утром нужно проверить маршрут.
Практический вывод: тепло держится за счет сухости, защиты от ветра, изоляции от пола и экономии сил.
```

### 15.2 Missing Dry Layer Result

Screen:

```text
episode_2_result_missing_dry_layer
```

Copy:

```text
Исход: Холод забирает силы
Оценка: 58/100
Что сработало: место выбрано неплохо, часть вещей полезна.
Что осталось риском: нет сухого базового слоя или сухих носков.
Практический вывод: комфортная вещь не равна теплой, если она влажная или не защищает тело от потери тепла.
```

### 15.3 Risky Heat Result

Screen:

```text
episode_2_result_risky_heat
```

Copy:

```text
Исход: Ложное тепло
Оценка: 46/100
Что сработало: часть теплых вещей взята.
Что осталось риском: выбран рискованный обогрев, который может создать новую опасность.
Практический вывод: быстрые решения для тепла не должны добавлять пожар, дым, плохой воздух или потерю времени.
```

Result Stitch prompt:

```text
Create three result/debrief screens for WildPathGame Episode 02: success, missing dry layer, risky heat.

Use a dimmed cold stairwell scene in the background and a compact tactical result panel. Use Russian UI copy exactly from the spec.

Each result must show: "Исход", "Оценка", "Что сработало", "Что осталось риском", "Практический вывод". Include two buttons: "Переиграть сцену" and "Продолжить".

Success uses green accents. Missing dry layer uses amber warning accents. Risky heat uses muted red danger accents. Do not claim guaranteed survival. Do not give medical treatment instructions.
```

## 16. Complete One-Paste Prompt For Stitch

Use this when asking Stitch to generate the whole Episode 02 batch:

```text
Create a complete production mockup batch for WildPathGame Episode 02.

This is for Stitch. Generate concrete game UI screens, not a mood board, not a landing page, and not a generic app concept. The mockups will be imported into a React game later.

Game: WildPathGame, a practical survival learning game. Match Episode 01 style: dark charcoal tactical UI, realistic gritty 2D scene art, compact mobile-first panels, amber active accents, tactical green success accents, muted red danger accents, small-radius rectangular controls, hidden-object hotspots, item cards, backpack status, timer, result/debrief.

Primary language on UI for this Stitch batch: Russian. Final product languages: Russian, English, Spanish. All text must be editable UI text and layout must tolerate English/Spanish localization without clipping.

Episode title: "Подъезд. Холодная ночь"
Situation: After leaving the apartment, transport has stopped. Signal is weak. The player must wait through a cold night in an urban stairwell or temporary shelter.
Mission: "Выбери сухие слои, защиту от ветра, место ожидания и небольшой запас энергии."
Learning principle: warmth comes from dryness, wind protection, insulation from cold surfaces, and conserving energy.

Create mobile 390x844 as the primary frame and desktop 1440x900 as reference.

Required screens:
1. episode_2_main_shelter_scene
2. episode_2_clothing_insulation_container
3. episode_2_waiting_position_choice
4. episode_2_supply_shelf_container
5. episode_2_risky_heat_detail
6. item detail variants for dry layer, windbreaker, water, energy bar, cotton hoodie trap
7. episode_2_warmth_status_backpack_panel
8. result screens: success, missing dry layer, risky heat

Main scene layout for mobile:
- top header/status strip;
- mission panel;
- large scene image from about y 184 to y 534;
- critical progress row;
- two character hint cards;
- bottom backpack/action bar.

Main scene art:
Cold urban stairwell or temporary shelter at night. Concrete walls, metal railings, pipes, weak amber emergency light, cold blue light from outside, wet floor near draft, dry interior corner, clothing pile, supply shelf, backpack. No people.

Main scene hotspots:
1. "Сухой угол" at lower left, dry corner with cardboard and bench.
2. "Слои и утепление" at upper left, clothing pile with dry layer, hat, socks, windbreaker.
3. "Полка с запасами" at upper right, shelf/backpack with water, energy bar, light, power bank.
4. "Рискованный обогрев" at lower right, draft/wet/unsafe heat warning zone.

Main screen visible text:
"ЭПИЗОД 02"
"ХОЛОДНАЯ НОЧЬ"
"До рассвета: 6 ч"
"Тепло: 38%"
"Силы: 62%"
"Подъезд. Холодная ночь"
"Подъезд, 01:20, слабая связь"
"Продержись до утра: выбери сухой слой, защиту от ветра, место ожидания и немного энергии."
"Сухой слой 0/1"
"Ветер 0/1"
"Энергия 0/1"
"Место 0/1"
"Вес: 0.0 / 6.0 кг"
"Нужны ключевые решения"

Container items:
Clothing screen cards:
- Сухой термослой, Важно, 0.4 кг, "Сухой слой ближе к телу"
- Теплая шапка, Важно, 0.2 кг, "Мало весит, помогает ночью"
- Сухие носки, Важно, 0.15 кг, "Мокрые ноги быстро мерзнут"
- Ветровка, Важно, 0.5 кг, "Режет ветер, не заменяет тепло"
- Аварийное одеяло, Полезно, 0.1 кг, "Барьер, но не магия"
- Картонная подкладка, Полезно, 0.3 кг, "Изоляция от пола"
- Хлопковая толстовка, Ловушка, 0.9 кг, "Плоха, если отсыреет"
- Мокрый плед, Ловушка, 1.8 кг, "Тяжелый и холодный"

Waiting position choices:
- Сухой угол у внутренней стены, Важно, "меньше ветра, меньше потерь тепла"
- Картон под ноги и рюкзак, Полезно, "меньше контакт с холодным полом"
- У двери на сквозняке, Ловушка, "ветер забирает тепло"
- У мокрого окна, Ловушка, "сырость и холод усиливаются"

Supply screen cards:
- Бутылка воды, Важно, 1.0 кг, "Питье и лекарства"
- Энергетический батончик, Важно, 0.15 кг, "Калории без лишнего веса"
- Налобный фонарь, Полезно, 0.25 кг, "Свет без занятых рук"
- Пауэрбанк, Полезно, 0.4 кг, "Связь и карта"
- Маленькое радио, Полезно, 0.35 кг, "Новости и инструкции"
- Стопка консервов, Ловушка, 2.4 кг, "Слишком тяжело сейчас"
- Стеклянная бутылка, Ловушка, 1.2 кг, "Хрупкая и тяжелая"

Risky heat warning:
Title: "Рискованный обогрев"
Body: "Кажется, что это быстро даст тепло, но в помещении такой выбор может создать новый риск: дым, пожар, плохой воздух или потерю времени."
Buttons: "Не брать", "Вернуться к выбору"

Backpack/status panel:
"Рюкзак и тепло"
"Вес: 3.2 / 6.0 кг"
"Тепло: 76%"
"Сухость: 80%"
"Ветер: защита есть"
"Силы: 58%"
"Рискованные: 0"
Packed list: Сухой термослой, Теплая шапка, Сухие носки, Ветровка, Бутылка воды, Энергетический батончик
Button: "Ждать до утра"

Result states:
Success:
"Исход: Ночь под контролем"
"Оценка: 92/100"
"Что сработало: сухой слой, ветровка, вода, энергия, сухой угол."
"Что осталось риском: связь слабая, утром нужно проверить маршрут."
"Практический вывод: тепло держится за счет сухости, защиты от ветра, изоляции от пола и экономии сил."

Missing dry layer:
"Исход: Холод забирает силы"
"Оценка: 58/100"
"Что сработало: место выбрано неплохо, часть вещей полезна."
"Что осталось риском: нет сухого базового слоя или сухих носков."
"Практический вывод: комфортная вещь не равна теплой, если она влажная или не защищает тело от потери тепла."

Risky heat:
"Исход: Ложное тепло"
"Оценка: 46/100"
"Что сработало: часть теплых вещей взята."
"Что осталось риском: выбран рискованный обогрев, который может создать новую опасность."
"Практический вывод: быстрые решения для тепла не должны добавлять пожар, дым, плохой воздух или потерю времени."

Safety boundaries:
No flames as a correct solution. No step-by-step fire or heater instructions. No weapons. No gore. No military bunker fantasy. No survival guarantee. No medical treatment claims.

All screens must remain readable at 390px mobile width.
```

## 17. Acceptance Checklist For Stitch Output

Accept the Stitch batch only if all items are true:

- every required screen exists;
- mobile frame is 390 x 844 or directly adaptable to it;
- desktop reference exists for the main screen or the layout clearly scales;
- main scene has the four required hotspots in the requested areas;
- all visible copy is Russian;
- item cards include category, weight, and short teaching text;
- trap items are visually distinct from useful and essential items;
- risky heat is shown as a warning, not a reward;
- result screens include success, missing dry layer, and risky heat states;
- no screen uses a landing-page hero layout;
- no unsafe fire/heater instruction appears;
- the visual style matches Episode 01 closely enough to be integrated into the same React component family.
