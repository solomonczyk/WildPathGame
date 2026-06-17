# Survival Encyclopedia Content Map

Status: `DRAFT_RESEARCH_MAP`.
Owner: Taras.
Purpose: собрать большой контентный каркас для встраивания survival-энциклопедии в игру WildPathGame.

Этот документ не является медицинским, спасательным или юридическим руководством. Он задает структуру игровых и образовательных модулей. Все safety-sensitive темы перед релизом требуют проверки по официальным источникам и, где нужно, человеком с профильной квалификацией.

Source taxonomy: этот документ строится на [Survival Master Taxonomy](survival-master-taxonomy.md). Если появляется новая локация, угроза или тип ситуации, сначала добавить ее в master taxonomy, затем раскрывать здесь как игровые и образовательные модули.

## 1. Принцип энциклопедии

Игра может подавать материал через сцены, предметы, решения и последствия, но серьезность темы остается полной.

Каждый раздел должен отвечать:

- где происходит ситуация;
- какая угроза действует;
- что игрок замечает первым;
- какие решения доступны;
- какие решения кажутся логичными, но опасны;
- какие предметы помогают;
- какие предметы дают ложную уверенность;
- чем заканчивается правильный, неполный и опасный выбор;
- какой реальный принцип игрок должен вынести.

## 2. Источники и уровни доверия

Использовать в таком порядке:

1. Official: Ready.gov, CDC, NWS, NPS, US Forest Service, USCG, FAA, NTSB, OSHA, local emergency management.
2. Recognized safety organizations: Red Cross, AHA, recognized rescue/first-aid bodies.
3. Expert manuals and reviewed training materials.
4. Survivor stories: только как сценарные примеры, не как универсальные инструкции.
5. AI drafts: только для черновой структуризации, не как authority.

## 3. Основные игровые сущности

### 3.1 Location Module

Поля:

- `locationFamily`;
- `sceneType`;
- `environmentalSignals`;
- `safeZones`;
- `dangerZones`;
- `availableContainers`;
- `improvisedMaterials`;
- `movementConstraints`;
- `communicationState`;
- `rescueLikelihood`;
- `sourceBasis`.

### 3.2 Threat Module

Поля:

- `hazardFamily`;
- `onsetSpeed`;
- `visibleSignals`;
- `hiddenSignals`;
- `playerStateEffects`;
- `priorityActions`;
- `dangerousMistakes`;
- `itemInteractions`;
- `consequenceRules`;
- `reviewStatus`.

### 3.3 Situation Module

Поля:

- `title`;
- `locationFamily`;
- `hazardFamilies`;
- `timePressure`;
- `playerCondition`;
- `objective`;
- `essentialActions`;
- `usefulActions`;
- `trapActions`;
- `debriefPrinciple`;
- `survivorCaseInspiration`;
- `safetyBoundary`.

## 4. Локации

### 4.1 Город: квартира, подвал, улица

Core skills:

- evacuation packing;
- shelter-in-place;
- first aid access;
- communication backup;
- darkness and stairwell movement;
- social/resource pressure.

Typical situations:

- квартира: собрать рюкзак за 18 минут;
- подвал: выбрать место укрытия при обстреле/буре/радиационной или химической инструкции shelter-in-place;
- подъезд: темнота, лифт не работает, нужно спуститься безопасно;
- улица: толпа, шум, паника, ограниченные ресурсы;
- магазин: выбор между полезным, тяжелым и конфликтным.

Essential game principles:

- вода, документы, свет, аптечка, тепло, связь важнее “всего полезного”;
- лифт и стеклянные зоны могут стать ловушками;
- связь может исчезнуть, поэтому план и offline-информация важны;
- shelter-in-place и evacuation не взаимозаменяемы: нужно слушать официальные инструкции.

Game mechanics:

- timer;
- weight limit;
- critical kit checklist;
- signal/no signal state;
- route choice;
- official alert choice;
- panic meter.

Objects:

- water bottle;
- flashlight/headlamp;
- batteries/power bank;
- documents in waterproof bag;
- first aid kit;
- warm layer;
- tape/plastic sheeting for sealing only when shelter-in-place is instructed;
- radio;
- cash;
- whistle.

Trap choices:

- heavy sentimental items;
- fragile glass;
- elevator during outage/fire risk;
- overpacking food while missing water/documents;
- going outside during chemical/radiation shelter instruction;
- using ordinary tools as weapons.

Source anchors:

- Ready.gov emergency kit and planning;
- CDC chemical shelter/evacuation;
- CDC radiation get inside/stay inside/stay tuned;
- OSHA shelter-in-place.

### 4.2 Обычный лес

Core skills:

- orientation;
- staying found;
- water planning;
- shelter from rain/wind;
- signalling;
- avoiding panic movement.

Typical situations:

- сбился с тропы в сумерках;
- промок и температура падает;
- телефон сел, карта не загружена;
- видишь ручей, но не знаешь, безопасна ли вода;
- нужно решить: идти дальше или остановиться и сигналить.

Essential game principles:

- остановиться и оценить лучше, чем метаться;
- навигация должна быть подготовлена до выхода;
- вода без treatment context не считается безопасной автоматически;
- сухой слой и защита от ветра важнее комфорта;
- сигналы должны быть заметны спасателям.

Game mechanics:

- orientation confidence;
- daylight timer;
- wetness/warmth meter;
- phone battery;
- map/compass availability;
- search radius if staying put.

Objects:

- map/compass/GPS;
- headlamp;
- whistle;
- rain shell;
- emergency blanket/tarp;
- water and treatment method;
- bright cloth/signal mirror;
- simple first aid.

Trap choices:

- углубляться в лес ради “короткого пути”;
- пить из сомнительного источника без контекста обработки;
- снимать яркую одежду ради “маскировки”;
- тратить батарею телефона на лишнее;
- строить сложное укрытие вместо простого сохранения тепла и сигнала.

Source anchors:

- NPS Ten Essentials;
- NPS Hike Smart;
- US Forest Service “If You Get Lost”.

### 4.3 Горы

Core skills:

- weather turnback decisions;
- altitude awareness;
- insulation and wind management;
- injury route choice;
- visibility and signalling.

Typical situations:

- погода меняется выше линии леса;
- усталость на подъеме, кислорода меньше;
- потеря тропы на камнях/снеге;
- травма голеностопа далеко от маршрута;
- гроза или сильный ветер.

Essential game principles:

- разворот до вершины может быть правильным решением;
- summit fever является игровой ловушкой;
- ветер и высота меняют безопасный темп;
- phone-only navigation опасна;
- травма превращает маршрут в задачу энергии, тепла и связи.

Game mechanics:

- altitude strain;
- storm clock;
- exposure/wind chill;
- route risk;
- descent decision;
- injury mobility.

Objects:

- insulation layer;
- rain/wind shell;
- headlamp;
- navigation set;
- trekking poles;
- emergency shelter;
- first aid;
- extra food/water.

Trap choices:

- продолжать “потому что почти дошел”;
- игнорировать прогноз вершины;
- cotton layer in cold/wet;
- идти одному без маршрута для контакта;
- экономить вес за счет света/тепла/воды.

Source anchors:

- NPS Hike Smart;
- NPS mountain/park safety pages;
- NWS severe weather and cold/heat guidance.

### 4.4 Океан, берег, лодка

Core skills:

- flotation first;
- cold water shock awareness;
- signalling;
- sun exposure and dehydration;
- staying with craft/debris when safer;
- ration discipline.

Typical situations:

- лодка потеряла ход;
- человек за бортом;
- холодная вода рядом с берегом;
- солнце, соль, жажда;
- береговые скалы, прилив, мокрые камни.

Essential game principles:

- life jacket работает только если надет;
- плавание не заменяет flotation;
- холодная вода быстро ухудшает дыхание и движение;
- морская вода не является питьевой водой;
- сигнал и видимость часто важнее активного движения.

Game mechanics:

- flotation state;
- cold-water timer;
- sun exposure;
- dehydration;
- signal visibility;
- tide/window timer.

Objects:

- USCG-approved life jacket/PFD;
- whistle;
- signal mirror/light;
- VHF/radio/phone in dry bag;
- water;
- sun protection;
- thermal layer;
- float plan.

Trap choices:

- снять life jacket в спокойную погоду;
- плыть к далекому берегу без учета течения;
- пить морскую воду;
- прыгать на мокрые приливные камни;
- тратить сигналы хаотично.

Source anchors:

- USCG life jacket guidance;
- NWS cold water safety;
- boating safety organizations for fit and float plan.

### 4.5 Джунгли

Core skills:

- humidity and infection prevention;
- insect bite prevention;
- water safety;
- navigation through dense vegetation;
- avoiding overexertion;
- signalling in low visibility.

Typical situations:

- потеря маршрута в плотной растительности;
- высокая влажность, натирание, порезы;
- насекомые и открытая кожа;
- ручьи и мутная вода;
- после авиакатастрофы или аварии нет связи.

Essential game principles:

- маленькие раны во влажной среде становятся серьезнее;
- insect protection is prevention, not comfort;
- реки/ручьи могут помочь ориентации, но не всегда безопасны как маршрут;
- чрезмерная активность в жаре и влажности ускоряет усталость;
- чистота ран и защита кожи становятся core survival.

Game mechanics:

- humidity fatigue;
- infection risk;
- bite exposure;
- water treatment;
- visibility/signal penalty;
- route confidence.

Objects:

- long sleeves/pants;
- insect repellent;
- clean dressing;
- water treatment;
- knife/tool as utility only;
- bright signal cloth;
- waterproof bag;
- headlamp.

Trap choices:

- идти напролом до истощения;
- игнорировать маленькие порезы;
- пить без treatment context;
- раздеваться из-за жары, открывая кожу;
- использовать непроверенные “народные” репелленты.

Source anchors:

- CDC mosquito bite prevention;
- CDC wound care after disasters;
- NPS/USFS lost orientation principles.

### 4.6 Пустыня и резкая жара

Core skills:

- heat avoidance;
- hydration and electrolytes;
- shade priority;
- travel timing;
- turnback discipline;
- rescue visibility.

Typical situations:

- машина сломалась в жаркой зоне;
- поход начат слишком поздно;
- воды меньше половины;
- солнце и отсутствие тени;
- тепловое истощение у спутника.

Essential game principles:

- в пик жары движение может быть худшим решением;
- тень и снижение нагрузки являются активным действием;
- water planning must start before thirst;
- turnaround point is a survival decision;
- rescue teams may be delayed or limited by heat.

Game mechanics:

- heat load;
- hydration;
- shade quality;
- exertion;
- vehicle shelter vs walking decision;
- rescue visibility.

Objects:

- water reserve;
- electrolyte/salty snack context;
- light loose clothing;
- hat/sunglasses/sunscreen;
- reflective signal;
- charged phone/radio;
- map/route note.

Trap choices:

- идти днем “пока видно”;
- ration water too aggressively while overheating;
- dark heavy clothing;
- leaving vehicle without plan;
- relying on rescue as immediate.

Source anchors:

- NWS heat safety;
- CDC heat guidance;
- NPS Death Valley/Grand Canyon heat safety.

### 4.7 Снег и резкий холод

Core skills:

- insulation;
- staying dry;
- wind protection;
- hypothermia/frostbite recognition;
- vehicle winter survival;
- controlled movement.

Typical situations:

- машина застряла в снегу;
- метель скрывает направление;
- мокрые ботинки/перчатки;
- мороз и ветер;
- ждать помощи ночью.

Essential game principles:

- wet + wind + time is dangerous;
- dry layers and core warmth first;
- frostbite and hypothermia need early action and medical attention;
- avoid sweating through layers;
- vehicle can be shelter, but ventilation/exhaust hazards must be considered in implementation with official review.

Game mechanics:

- warmth;
- wetness;
- wind exposure;
- energy conservation;
- frostbite warning;
- visibility/whiteout.

Objects:

- layered clothing;
- hat/gloves/socks;
- emergency blanket/sleeping bag;
- shovel;
- light/signal;
- water/food;
- charged communication;
- winter vehicle kit.

Trap choices:

- cotton clothing;
- walking into whiteout;
- overheating and sweating;
- rubbing frostbitten skin;
- using unsafe heat sources indoors/vehicle without reviewed guidance.

Source anchors:

- NWS winter/cold safety;
- CDC hypothermia and frostbite;
- Red Cross winter storm guidance.

### 4.8 Самолет и крушение

Core skills:

- pre-crash briefing attention;
- fast evacuation;
- leaving carry-ons;
- post-crash survival kit;
- signalling;
- injury triage awareness.

Typical situations:

- emergency landing;
- smoke/cabin evacuation;
- remote crash site;
- injured passenger and limited supplies;
- weather exposure after crash.

Essential game principles:

- listen to safety briefing and know exits;
- evacuation speed beats belongings;
- smoke/fire changes route decisions;
- after evacuation, distance, signalling, shelter and first aid become priorities;
- aviation survival content must avoid pretending the player can control crash mechanics.

Game mechanics:

- evacuation timer;
- smoke visibility;
- exit choice;
- carry-on temptation;
- group triage;
- post-crash shelter/signal.

Objects:

- shoes kept on/accessible;
- coat if immediately accessible without delaying;
- flashlight;
- first aid;
- signal panel/light;
- water;
- survival kit where appropriate.

Trap choices:

- retrieving luggage;
- filming instead of moving;
- blocking aisle;
- opening unsafe exit without context;
- wandering away from wreck/debris without plan.

Source anchors:

- FAA survival training;
- NTSB evacuation studies;
- airline passenger safety briefings.

### 4.9 Дорога и машина

Core skills:

- vehicle emergency kit;
- route choice;
- staying visible;
- communication backup;
- heat/cold vehicle decisions;
- injury prevention around traffic.

Typical situations:

- машина сломалась ночью;
- нет связи на трассе;
- жара, дети/питомцы, закрытая машина;
- снег и ожидание помощи;
- нужно решить: идти пешком или оставаться.

Essential game principles:

- road survival often starts before departure: fuel, route, kit, contact plan;
- vehicle can be shelter or trap depending on heat/cold/traffic;
- visibility to other drivers and rescuers matters;
- walking along roads has its own risks;
- weather changes the correct decision.

Game mechanics:

- vehicle condition;
- fuel/heat/AC constraint;
- traffic exposure;
- signal visibility;
- phone battery;
- distance-to-help uncertainty.

Objects:

- hazard triangle/reflectors;
- flashlight;
- water;
- blanket/warm clothing;
- phone charger/power bank;
- first aid;
- map;
- basic tools;
- food.

Trap choices:

- leave car without telling anyone;
- stand in traffic lane;
- drain phone battery;
- ignore heat risk inside vehicle;
- overtrust GPS with no offline backup.

Source anchors:

- Ready.gov kit/plan;
- NWS heat/cold/winter;
- local road safety guidance before release.

### 4.10 Промышленная зона

Core skills:

- chemical cloud decision;
- shelter vs evacuate based on authority instruction;
- wind/route awareness;
- sealing a room;
- communication monitoring;
- contamination avoidance.

Typical situations:

- железнодорожный или заводской выброс;
- запах/дым и официальное alert-сообщение;
- нужно выбрать комнату shelter-in-place;
- нужно эвакуироваться по указанию;
- связь перегружена.

Essential game principles:

- chemical emergencies are authority-led: do not improvise heroic action;
- shelter-in-place can be safer than leaving, but only when instructed;
- evacuation can be safer when instructed;
- wind and proximity matter, but player should not replace official guidance;
- sealing, staying informed, and avoiding exposure are core.

Game mechanics:

- alert interpretation;
- indoor room choice;
- seal quality;
- outside exposure;
- official update timer;
- panic/rumor pressure.

Objects:

- radio/phone alerts;
- plastic sheeting/tape;
- towels/cloth as improvised sealing only with review;
- water/meds;
- documents;
- go-bag if evacuation ordered.

Trap choices:

- going outside to “check”;
- driving into cloud/path;
- using wet cloth as guaranteed protection;
- ignoring official instruction;
- spreading unverified rumor.

Source anchors:

- CDC chemical shelter-in-place;
- CDC chemical evacuation;
- OSHA shelter-in-place;
- HHS CHEMM public guidance.

## 5. Угрозы

### 5.1 Холод

Use in:

- город/подвал;
- лес;
- горы;
- снег;
- берег/вода;
- road vehicle.

Core lessons:

- stay dry;
- block wind;
- warm the core;
- reduce sweat;
- seek medical help for hypothermia/frostbite signs.

Game states:

- warmth;
- wetness;
- wind exposure;
- dexterity;
- confusion/fatigue.

Dangerous misconceptions:

- rubbing frostbite;
- alcohol for warmth;
- cotton as reliable insulation;
- “I can push through one more hour.”

### 5.2 Жара

Use in:

- город;
- дорога/машина;
- пустыня;
- горы/desert elevation;
- jungle humidity.

Core lessons:

- stay cool;
- hydrate before thirst;
- reduce exertion;
- use shade;
- heat illness can affect thinking.

Game states:

- heat load;
- hydration;
- shade;
- exertion;
- confusion.

Dangerous misconceptions:

- rationing water while overheating;
- hiking at peak heat;
- leaving children/pets in vehicles;
- ignoring early heat exhaustion.

### 5.3 Обезвоживание

Use in:

- apartment evacuation;
- road;
- desert;
- forest;
- ocean;
- jungle.

Core lessons:

- water is priority;
- unsafe water needs treatment context;
- sugar/alcohol/saltwater are traps depending context;
- activity and heat increase need.

Game states:

- thirst;
- water inventory;
- water safety;
- treatment available;
- delay risk.

Dangerous misconceptions:

- seawater as emergency drinking water;
- “clear stream = safe”;
- soda equals water;
- waiting until thirst.

### 5.4 Травма

Use in:

- urban stairwell;
- road crash;
- mountains;
- forest;
- aircraft;
- industrial zone.

Core lessons:

- scene safety first;
- stop life-threatening bleeding with direct pressure/tourniquet training context;
- clean minor wounds when possible;
- injury changes movement plan;
- medical claims require review.

Game states:

- mobility;
- bleeding severity;
- infection risk;
- pain/fatigue;
- route safety.

Dangerous misconceptions:

- ignoring small wounds in dirty/wet environments;
- moving fast after injury;
- using dirty materials;
- treating first aid kit as magic cure.

### 5.5 Темнота

Use in:

- apartment/stairwell;
- forest;
- mountain;
- road;
- post-crash.

Core lessons:

- light needs batteries;
- darkness increases injury and navigation error;
- preserve phone battery;
- visible signal beats silent movement.

Game states:

- visibility;
- battery;
- route confidence;
- injury chance.

Dangerous misconceptions:

- phone flashlight as only light;
- moving quickly in dark stairs/rocks;
- no spare batteries;
- entering unknown structures.

### 5.6 Потеря ориентации

Use in:

- forest;
- mountains;
- jungle;
- snow/whiteout;
- city blackout.

Core lessons:

- stop, think, observe, plan;
- signal and stay visible when lost;
- carry navigation before needing it;
- panic movement expands search area.

Game states:

- route confidence;
- daylight;
- signal visibility;
- rescue probability;
- panic.

Dangerous misconceptions:

- following random tracks;
- downhill always leads to people;
- river always safe to follow;
- walking faster fixes being lost.

### 5.7 Дикие погодные условия

Use in:

- city;
- forest;
- mountains;
- ocean;
- desert;
- snow.

Core lessons:

- weather is a primary actor, not background;
- shelter choice matters;
- official alerts override curiosity;
- route plans must change.

Game states:

- storm timer;
- visibility;
- wind;
- precipitation;
- shelter integrity.

Dangerous misconceptions:

- “just a little storm”;
- standing near trees/water during severe weather;
- continuing exposed routes;
- underpacking rain/cold gear.

### 5.8 Химическое облако

Use in:

- industrial zone;
- city street;
- road/rail accident.

Core lessons:

- follow official instruction: shelter or evacuate;
- do not go outside to investigate;
- seal room when shelter-in-place is instructed;
- stay informed.

Game states:

- official instruction;
- room seal;
- outside exposure;
- communication reliability;
- panic rumor pressure.

Dangerous misconceptions:

- wet cloth guarantees safety;
- driving through visible plume;
- opening windows to “check smell”;
- crowd-following without alert verification.

### 5.9 Радиация

Use in:

- city;
- basement/interior shelter;
- contaminated entry;
- road after alert.

Core lessons:

- get inside, stay inside, stay tuned;
- distance, shielding, time matter;
- remove outer clothing/decontamination awareness with official guidance;
- do not leave shelter until instructed unless immediate life threat.

Game states:

- shelter depth;
- exterior wall distance;
- official updates;
- contamination risk;
- family-location panic.

Dangerous misconceptions:

- driving away through unknown plume/fallout;
- sheltering in a car as adequate;
- going outside to collect someone;
- iodine/medicine myths without official instruction.

### 5.10 Отсутствие связи

Use in:

- all locations.

Core lessons:

- plans must exist before outage;
- offline maps, paper notes, rendezvous points;
- battery discipline;
- radio/alerts where possible;
- do not rely on one channel.

Game states:

- signal strength;
- battery;
- message queue;
- radio availability;
- family plan confidence.

Dangerous misconceptions:

- phone as only map/light/payment;
- draining battery in panic;
- waiting for perfect information;
- no written addresses/contacts.

### 5.11 Паника, плохие решения, усталость

Use in:

- all locations.

Core lessons:

- slow the first decision;
- prioritize: body needs, immediate danger, information, movement;
- fatigue makes obvious traps attractive;
- group pressure can worsen choices.

Game states:

- panic;
- fatigue;
- decision time;
- group conflict;
- false confidence.

Dangerous misconceptions:

- action is always better than pause;
- carrying more means safer;
- following crowd equals safe;
- one dramatic move saves everything.

## 6. Survivor Case Library

Stories are scenario inspiration only. They should not become step-by-step player advice without source review.

### 6.1 Juliane Koepcke / Juliane Diller

Situation:

- aircraft breakup over the Peruvian Amazon in 1971;
- sole survivor;
- injured, alone, jungle environment.

Survival pattern:

- prior knowledge of rainforest helped;
- moved toward/along waterway to increase chance of finding people;
- survived until found by locals after days in jungle.

Game use:

- aircraft crash -> jungle module;
- injury + orientation + waterway decision;
- lesson: prior knowledge and terrain reading matter, but crash survival is not controllable.

Safety boundary:

- do not teach “always follow rivers” as universal rule;
- treat as narrative case, not instruction.

### 6.2 Steven Callahan

Situation:

- sailboat sank in Atlantic;
- 76 days adrift in life raft.

Survival pattern:

- used raft, solar still/desalination equipment, fishing, rationing, repair discipline;
- maintained routines under isolation.

Game use:

- ocean raft episode;
- water production/resource maintenance mechanic;
- signal, ration, repair, mental endurance.

Safety boundary:

- do not imply improvisation can replace proper marine safety equipment;
- life jacket, float plan, signalling and emergency equipment remain primary.

### 6.3 Aron Ralston

Situation:

- solo canyoneering accident;
- arm pinned by boulder for days;
- no one knew route plan.

Survival pattern:

- extreme self-rescue after prolonged entrapment;
- story highlights route notification, communication, solo-risk and water.

Game use:

- canyon/mountain injury episode;
- lesson: leave a plan, carry communication, avoid solo unknown route without backup.

Safety boundary:

- do not gamify self-amputation;
- use the case to teach prevention, signalling and trip-plan discipline.

### 6.4 Sierra Nevada lost hiker case

Situation:

- hiker missing for weeks in snowy mountain conditions;
- survived by finding shelter and using prior outdoor knowledge.

Survival pattern:

- shelter discovery and experience mattered;
- snow/mountain conditions made rescue and movement difficult.

Game use:

- snow/mountain episode;
- shelter vs movement decision;
- foraging should be treated as advanced/unsafe unless reviewed.

Safety boundary:

- do not teach wild foraging casually;
- focus on preparation, shelter, signalling, warmth and route plan.

### 6.5 Desert heat rescue cases

Situation:

- hikers in national parks underestimate heat;
- rescue can be delayed or dangerous for rescuers.

Survival pattern:

- starting early, carrying enough water, turning back and avoiding peak heat are prevention lessons.

Game use:

- desert route planning episode;
- half-water turnback mechanic;
- rescue-delay consequence.

Safety boundary:

- avoid heroic “push through” narrative;
- teach not going as a valid survival decision.

## 7. Cross-Location Game Systems

### 7.1 Priority Stack

Use a visible decision stack:

1. Immediate danger.
2. Air/shelter instruction if chemical/radiation/smoke.
3. Injury and bleeding.
4. Water and heat/cold exposure.
5. Navigation and communication.
6. Food and comfort.
7. Sentimental/optional items.

### 7.2 State Variables

Recommended variables:

- `health`;
- `thirst`;
- `warmth`;
- `heatLoad`;
- `energy`;
- `panic`;
- `orientation`;
- `signal`;
- `wetness`;
- `injury`;
- `packWeight`;
- `timeRemaining`;
- `officialInstruction`.

### 7.3 Item Roles

Each item must be one of:

- essential;
- useful;
- context-dependent;
- trap;
- unsafe-without-review.

### 7.4 Consequence Types

- missing essential;
- wrong priority;
- overweight;
- time lost;
- exposure worsened;
- injury worsened;
- signal lost;
- panic escalation;
- official instruction ignored;
- safe but incomplete.

## 8. Content Backlog By Module

### High Priority

- urban evacuation kit;
- shelter-in-place vs evacuation;
- darkness and stairwell movement;
- road vehicle kit;
- heat and water planning;
- cold and wetness;
- lost orientation;
- first-aid access and wound awareness;
- communication outage.

### Medium Priority

- mountain weather and turnback;
- forest overnight exposure;
- ocean/boat life jacket and signalling;
- snow vehicle survival;
- panic/group decision pressure.

### Requires Special Review

- chemical cloud;
- radiation emergency;
- aircraft crash evacuation;
- severe injury/bleeding;
- hypothermia/frostbite;
- heat stroke;
- water treatment and unsafe water;
- jungle disease/insects;
- industrial contamination.

## 9. Implementation Notes

Before turning any section into gameplay:

- create `sourceBasis`;
- assign `reviewStatus`;
- write item matrix;
- write consequence matrix;
- decide whether it is playable, journal-only, or locked until review;
- avoid presenting safety-sensitive advice as approved if still draft.

Recommended content statuses:

- `research_map`;
- `scenario_brief`;
- `source_checked`;
- `domain_reviewed`;
- `localized`;
- `playable_draft`;
- `approved_for_release`.

## 10. Source Anchors

Official and authoritative starting points:

- Ready.gov emergency kit: `https://www.ready.gov/kit`
- Ready.gov planning: `https://www.ready.gov/plan`
- NPS Ten Essentials: `https://www.nps.gov/articles/10essentials.htm`
- NPS Hike Smart: `https://www.nps.gov/articles/hiking-safety.htm`
- US Forest Service if lost: `https://www.fs.usda.gov/visit/know-before-you-go/if-you-get-lost`
- NWS heat safety: `https://www.weather.gov/safety/heat`
- NWS winter safety: `https://www.weather.gov/safety/winter-before`
- NWS extreme cold: `https://www.weather.gov/dlh/extremecold`
- CDC heat: `https://www.cdc.gov/heat-health/about/index.html`
- CDC extreme heat protection: `https://www.cdc.gov/climate-health/php/resources/protect-yourself-from-the-dangers-of-extreme-heat.html`
- CDC hypothermia/frostbite: `https://www.cdc.gov/winter-weather/prevention/index.html`
- CDC mosquito prevention: `https://www.cdc.gov/mosquitoes/prevention/index.html`
- CDC emergency wound care: `https://www.cdc.gov/natural-disasters/communication-resources/emergency-wound-care-after-a-natural-disaster-factsheet.html`
- Red Cross severe bleeding: `https://www.redcross.org/take-a-class/resources/learn-first-aid/bleeding-life-threatening-external`
- CDC chemical shelter-in-place: `https://www.cdc.gov/chemical-emergencies/response/shelter-in-place.html`
- CDC chemical evacuation: `https://www.cdc.gov/chemical-emergencies/response/evacuation.html`
- CDC radiation emergency: `https://www.cdc.gov/radiation-emergencies/features/be-ready.html`
- CDC radiation stay tuned: `https://www.cdc.gov/radiation-emergencies/response/stay-tuned.html`
- OSHA shelter-in-place: `https://www.osha.gov/etools/evacuation-plans-procedures/eap/shelter-in-place`
- USCG life jackets: `https://uscgboating.org/recreational-boaters/life-jacket-wear-wearing-your-life-jacket.php`
- FAA survival training: `https://www.faa.gov/pilots/training/airman_education/survival_training`
- NTSB evacuation study: `https://www.ntsb.gov/safety/safety-studies/Documents/SS0001.pdf`

Narrative case references:

- Juliane Diller / Koepcke, Guardian interview: `https://www.theguardian.com/lifeandstyle/article/2024/aug/06/a-bolt-of-lightning-struck-my-plane-and-i-plunged-3000m-into-a-rainforest`
- Steven Callahan, People interview/article: `https://people.com/steve-callahan-survives-76-days-on-a-raft-in-the-atlantic-ocean-exclusive-11784615`
- Aron Ralston overview and primary memoir references: `https://en.wikipedia.org/wiki/Aron_Ralston`
- Recent Sierra Nevada hiker survival report: `https://www.nbcbayarea.com/news/local/tiffany-slaton-rescued-hiker-sierra/3870984/`
- Desert heat rescue reporting: `https://www.chron.com/life/wildlife/article/big-bend-heat-stroke-warning-22229882.php`
