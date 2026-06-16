# Product Canon

## Problem

Most survival content is either entertainment without transfer to real life or instruction without engagement. People may watch videos about emergency readiness, but under pressure they fail to prioritize: they overpack, forget water, choose valuable but useless items, misread risks, or act from panic. WildPathGame turns this gap into a playable learning loop.

## Target Audience

Primary customer: Russian-speaking adults aged 20-45 in urban environments who want practical readiness for power outages, evacuation, travel disruptions, or local emergencies, but do not want military-style training.

Secondary users:

- parents who want a family-friendly preparedness tool;
- outdoor beginners who want low-risk practice before field courses;
- educators and safety instructors who need interactive exercises.

Hypothesis: first buyers are not hardcore survivalists; they are anxious, practical urban users who want confidence and a structured start. Verification: landing test with payment intent and 15 problem interviews.

## Jobs-to-be-Done

- When I think about emergencies, I want to understand what matters first, so I can avoid panic and bad priorities.
- When I pack for evacuation, I want to practice tradeoffs, so I can avoid carrying useless weight.
- When I see survival advice online, I want to test myself in realistic situations, so I know whether I truly understood it.
- When I teach my family or group, I want a playable scenario, so the topic feels concrete and memorable.

## Personas

### Urban Preparedness Beginner

Name: Alex, 32. Lives in an apartment, has no field training, worries about outages and evacuation. Pays for simple practical clarity. Needs short sessions and non-extreme language.

### Practical Parent

Name: Marina, 38. Wants family readiness without fearmongering. Values safe explanations, checklists, and replayable scenarios.

### Outdoor Starter

Name: Denis, 25. Watches bushcraft content and wants interactive practice. Values realism and consequence-based feedback.

### Instructor Buyer

Name: Oleg, 44. Runs safety or outdoor workshops. Needs a demo tool for classes and may pay for group access later.

## Value Proposition

WildPathGame helps ordinary people practice emergency decisions through realistic survival puzzles where every object, action, and mistake is explained by real-world consequences.

## Positioning

For urban adults who want practical emergency readiness, WildPathGame is an interactive survival learning game that teaches prioritization through realistic scenes, unlike passive videos, generic checklists, or pure entertainment survival games.

## Competitive Differences

- Practical learning goal, not only atmosphere.
- Realistic hidden-object and inventory decisions.
- Consequence feedback linked to survival priorities.
- Short playable episodes suitable for non-gamers.
- Canonical safety boundaries: no dangerous claims without review.

Competitor categories: YouTube survival channels, checklist PDFs, mobile hidden-object games, survival sims, first-aid apps. WildPathGame sits between training and game.

## Product Principles

1. Every interaction must teach a decision.
2. Every item must explain the risk it covers.
3. Consequences must be specific, not punitive noise.
4. Realism beats spectacle when the two conflict.
5. Short scenes beat sprawling unfinished systems.
6. The player should feel capable, not shamed.
7. Technical success does not imply learning success.

## Non-Goals

- Open-world survival simulation.
- Weapon combat training.
- Medical diagnosis or field treatment certification.
- Claims that the game replaces professional training.
- User-generated survival advice without review.
- Multiplayer in MVP.
- Mobile native app in MVP.

## MVP Scope

The MVP is a browser-based six-episode practical survival mini-course:

1. Apartment evacuation pack.
2. First night in wet forest: fire and dry tinder.
3. Water source: filtering and boiling.
4. Shelter before rain: site selection and insulation.
5. Workshop injury: basic wound handling.
6. Contact with strangers: risk, trade, and de-escalation.

Each episode includes a visual scene, interactive objects, inventory constraints, wrong-but-plausible choices, consequence feedback, and a short practical debrief.

## Hard MVP Cut Line

Included:

- RU and EN localization for MVP; ES remains supported if translated content is complete.
- Save state in local browser storage.
- One paid pilot landing flow outside the game or as a simple payment-waitlist page.
- Manual content review before paid pilot.
- Basic analytics events for scene start, item pick, outcome, completion, and paid intent.

Excluded:

- Full account system unless needed for payments.
- Procedural generation.
- 3D scenes.
- Complex animation of every object.
- AI-generated advice in production.
- App store deployment.
- Large content library beyond six episodes.

## Product Definition of Done

A product increment is done only when:

- it is playable by a first-time user without developer guidance;
- required learning outcome is stated;
- each object or choice has consequence feedback;
- RU text is reviewed for clarity;
- visual layout passes desktop and mobile review;
- safety-sensitive claims are reviewed;
- analytics events exist for the funnel point;
- acceptance criteria in [Product Requirements](product-requirements.md) pass;
- stage contract exit criteria in [Stage Contracts](data/stage-contracts.json) pass.
