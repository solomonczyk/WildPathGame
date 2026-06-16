# Scenario and Domain Canon

Status: `LOCKED_FOR_FIRST_RELEASE` after approval by project owner.
Owner: Taras.
Change rule: before first release this document may only change through a recorded change request or ADR.

## Purpose

WildPathGame must prepare players for many kinds of isolation, disaster, and environmental pressure without becoming an unbounded collection of random survival tips. This canon defines the controlled content system for locations, hazards, skills, items, and episode generation.

The product does not promise guaranteed survival. It teaches practical prioritization, recognition of danger, and safer decision patterns under pressure.

## Core Principle

Every playable situation is built from five layers:

1. Location.
2. Hazard.
3. Player state.
4. Available items and improvised materials.
5. Objective and consequence.

The game must not create a separate bespoke location for every possible day or mode. Long modes are assembled from reusable canonical location types, hazard modules, item interactions, and consequence rules.

## Canonical Location Families

The approved location families for the first content library are:

| Family | Example scenes | Primary skills |
|---|---|---|
| Urban shelter | apartment, stairwell, basement, shop, street | evacuation, shelter-in-place, communication, first aid |
| Road and vehicle | road, blocked car, fuel stop, bridge | route choice, signalling, load discipline, injury prevention |
| Temperate forest | forest path, clearing, riverbank, abandoned hut | orientation, water, shelter, warmth, signalling |
| Mountains | trail, ridge, slope, cold night shelter | exposure management, injury response, visibility, descent decisions |
| Ocean and coast | beach, small boat, pier, tidal rocks | sun exposure, water discipline, signalling, flotation awareness |
| Jungle | wet forest, river crossing, dense vegetation | humidity, insects, navigation, infection prevention |
| Desert and heat zone | open road, dry settlement, exposed plain | heat avoidance, hydration, shade, pacing |
| Snow and extreme cold | snowfield, broken shelter, frozen road | insulation, wind protection, frostbite awareness, energy conservation |
| Aircraft incident | cabin, crash site, remote debris field | immediate exit, fire risk, triage, signalling |
| Industrial and toxic zone | factory edge, rail spill, chemical cloud path | shelter-in-place, air sealing, evacuation timing, authority signals |
| Radiation emergency zone | street after alert, interior shelter, contaminated entry | time-distance-shielding, decontamination awareness, official instruction discipline |

Adding a new location family before first release requires change request approval.

## Canonical Hazard Families

The approved hazard families are:

| Hazard | Game purpose | Safety boundary |
|---|---|---|
| Cold exposure | Teach insulation, wind protection, dry layers, and movement pacing | No medical treatment claims beyond first-aid awareness |
| Extreme heat | Teach shade, hydration, reduced exertion, and heat illness recognition | Must align with official heat safety guidance |
| Dehydration | Teach water prioritization, rationing tradeoffs, and unsafe substitutes | No advice to drink unsafe water without treatment context |
| Injury | Teach stabilization priorities and when movement becomes risky | No replacement for professional medical care |
| Darkness | Teach light, batteries, route risk, and signal use | No weaponized framing |
| Lost orientation | Teach stopping, mapping, marking, and signalling | Avoid overconfident navigation advice |
| Storm and severe weather | Teach shelter choice, exposure, and timing | Must respect local official instructions |
| Fire and smoke | Teach distance, evacuation, air quality, and door/route choices | No unsafe firefighting instructions |
| Chemical cloud | Teach shelter-in-place, room choice, sealing, and official instructions | Must use official public-health or emergency-management sources |
| Radiation | Teach get inside, stay inside, stay tuned, shielding, and basic contamination awareness | Must use official public-health or emergency-management sources |
| Isolation and panic | Teach decision slowing, prioritization, and avoiding impulsive load choices | No mental-health treatment claims |

Adding a new hazard family before first release requires change request approval.

## Episode Template

Every new episode must define:

- location family;
- hazard family;
- specific scenario title;
- time pressure;
- player state changes;
- available containers or interaction points;
- item list with weight and role;
- essential actions;
- plausible traps;
- consequence rules;
- debrief lessons;
- source basis;
- review status.

An episode cannot enter release candidate status without item-level explanations and a debrief that tells the player what principle transferred to real life.

## Item and Improvised Material Rules

Each item must answer four questions in compact form:

1. What value does it provide?
2. In what situation does it help?
3. What can the player do with it now?
4. What is the risk, limitation, or false confidence?

Improvised items are allowed only when their use is plausible for an ordinary person under stress. The game should prefer common household, vehicle, travel, or workplace materials over specialist gear unless the scenario justifies specialist gear.

## Source Hierarchy

Survival claims must use this authority order:

1. Official emergency, public-health, weather, aviation, maritime, or civil-defense sources.
2. Recognized first-aid or safety organizations.
3. Field manuals or expert-reviewed training materials.
4. Survivor accounts used as narrative inspiration, not final authority.
5. AI-generated drafts used only as drafting support, never as authority.

Radiation, chemical, medical, heat illness, cold injury, aviation evacuation, and maritime safety content require official-source review before release.

## Canonical Source Anchors

The following source anchors are approved as starting points for safety-sensitive content review. They do not replace episode-level source notes; each playable episode still needs a source basis record.

| Domain | Primary source anchor | Canonical use |
|---|---|---|
| General disaster readiness | `https://www.ready.gov/` | planning, kits, family readiness, local-alert discipline |
| Emergency kit basics | `https://www.ready.gov/kit` | baseline preparedness items and several-day self-reliance framing |
| Radiation emergency | `https://www.cdc.gov/radiation-emergencies/response/index.html` | get inside, stay inside, stay tuned; sheltering and official-instruction discipline |
| Radiation shelter location | `https://www.cdc.gov/radiation-emergencies/response/get-inside.html` | basement or middle-of-building logic, distance from exterior walls and roof |
| Chemical emergency shelter-in-place | `https://www.cdc.gov/chemical-emergencies/response/shelter-in-place.html` | choosing a sealable safe room, staying informed, following local officials |
| Chemical emergency evacuation | `https://www.cdc.gov/chemical-emergencies/response/evacuation.html` | when evacuation is instructed instead of sheltering |
| Extreme heat | `https://www.weather.gov/safety/heat` | heat safety, exposure reduction, hydration and cooling guidance |
| Extreme cold | `https://www.weather.gov/safety/cold` | hypothermia, frostbite, wind exposure and cold-weather risk framing |
| Cold water | `https://www.weather.gov/safety/coldwater` | sudden cold-water exposure and false sense of security near water |

If a required domain is not covered by these anchors, the episode brief must name an equivalent official source before content can move beyond `draft`.

## Source Basis Record

Every safety-sensitive episode must keep a source basis record with:

- source title;
- source URL or document identifier;
- issuing organization;
- date accessed;
- claims supported by the source;
- claims intentionally excluded because they are too technical, local, medical, or context-dependent;
- reviewer name or role;
- review status.

Survivor accounts may be listed as narrative references, but they cannot be the only source for an instruction.

## Disaster-Sensitive Domains

The following domains are safety-sensitive and require explicit review notes before release:

- radiation emergency;
- chemical cloud or toxic spill;
- severe heat;
- severe cold;
- aircraft incident;
- ocean or boating incident;
- injury, bleeding, burns, poisoning, hypothermia, heat illness;
- fire, smoke, or structural collapse.

If review is missing, the content can exist as draft data but cannot be presented as approved educational content.

## Mode Scaling

The start modes are not promises of unique handcrafted locations:

| Mode | Canonical interpretation |
|---|---|
| Week | authored introductory route with high polish and clear learning arc |
| Month | extended route using authored episodes plus controlled variation |
| 100 days | long-form survival practice assembled from reviewed scenario modules |

The 100-day mode must not be implemented by writing 100 unrelated scenes. It must use scenario modules, state changes, and reviewed reusable content.

## First Release Content Boundary

Before first release, the canonical playable scope remains focused on the first paid-ready micro-course. Broader domains such as mountains, ocean, jungle, aircraft incidents, radiation, chemical threats, severe heat, and severe cold are approved as future domain families, but not automatically in MVP scope.

Implementing any of those domains as playable first-release content requires:

- approved episode brief;
- reviewed source basis;
- item and consequence matrix;
- safety-sensitive review if applicable;
- change request if it changes the MVP cut line.

## Review Status Values

Content records may use these statuses:

- `draft`: written but not reviewed;
- `source_checked`: reviewed against sources;
- `domain_reviewed`: reviewed by relevant human reviewer;
- `localized`: language checked;
- `approved`: accepted for build;
- `locked`: cannot change before first release except through change request or ADR.

No safety-sensitive episode may skip from `draft` to `approved`.

## Prohibited Content Behavior

- Presenting myths as advice because they are dramatic.
- Treating survivor anecdotes as universal rules.
- Giving chemical, radiation, medical, maritime, or aviation instructions without official-source basis.
- Teaching illegal, violent, or weaponized use of ordinary tools.
- Making every object useful to reward collection.
- Expanding the content library before the first six episodes meet quality, safety, and learning gates.

## Canon Lock

This document is part of the canonical documentation package. After owner acceptance, it is locked until first release. Future changes require:

- a change request recorded in `docs/data/decision-log.json`, or
- an ADR recorded in `docs/data/decision-log.json` when the change affects architecture, data structure, or irreversible product design.
