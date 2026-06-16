# Product Requirements

## User Stories

- As a beginner, I want to search a realistic apartment, so I learn where essential evacuation items are found.
- As a player, I want every item to explain its survival value, so I understand why it matters.
- As a learner, I want mistakes to show consequences, so I remember tradeoffs.
- As a returning user, I want saved progress, so I can continue the course.
- As a non-English user, I want localized UI, so I can learn in my language.
- As a cautious buyer, I want a free playable demo, so I can judge value before paying.

## Functional Requirements

FR-001: The game shall present episodes as interactive visual scenes.
FR-002: The game shall support object selection, inspection, packing, removal, and outcome evaluation.
FR-003: Each object shall include location, weight, and survival explanation.
FR-004: Each episode shall define required, useful, and trap items.
FR-005: The system shall evaluate missing essentials and overweight inventory.
FR-006: The result screen shall show success or failure and a practical debrief.
FR-007: Progress shall be saved locally for MVP.
FR-008: The UI shall support RU and EN for MVP; ES is allowed when complete.
FR-009: The product shall track funnel events before paid validation.
FR-010: Content shall support safety review before paid pilot.

## Non-Functional Requirements

- Browser support: latest Chrome, Edge, Firefox, Safari.
- Mobile support: 390px width minimum.
- Load target: first scene interactive within 3 seconds on broadband.
- Accessibility: keyboard-visible focus, text contrast, non-color-only cues.
- Reliability: no blocking console errors in local demo.
- Privacy: no external tracking before consent in production.

## User Journeys

### Free Demo

Landing or start screen -> start game -> inspect apartment -> pack items -> evaluate -> debrief -> payment or waitlist prompt.

### Paid Course

Purchase -> access course -> complete six episodes -> receive summary and checklist -> feedback request.

### Instructor Pilot

Demo call -> paid pilot -> group access -> workshop feedback -> renewal or case study.

## Failure and Recovery Flows

- Missing essential: show exact missing category and teach why it matters.
- Overweight pack: show weight cost and suggest removing trap items.
- Confusing scene: hint highlights containers or required categories.
- Lost progress: local reset option and clear replay path.
- Unsupported language: fallback to English.
- Payment issue: manual support contact during pilot.

## Accessibility

- All clickable objects require accessible labels.
- Visual hints must not rely only on color.
- Buttons must be reachable by keyboard after object-list mode is added.
- Mobile hit areas should be at least 40px where possible.

## Localization

Localization must cover UI, object names, object explanations, outcome text, learning debrief, marketing copy, and disclaimers. Machine translation is draft-only.

## Offline Behaviour

MVP supports already-loaded episode play after page load. Full offline mode is out of MVP.

## Privacy

Before accounts, progress is local. Any analytics added for validation must avoid sensitive personal data and be disclosed.

## Analytics

Required events:

- scene_started;
- object_inspected;
- object_packed;
- object_removed;
- episode_failed;
- episode_completed;
- debrief_viewed;
- paid_intent_clicked.

## Support

Support during pilot is manual email or direct message. Support issues feed into the risk and change request process.

## Deletion and Export

Before accounts, deletion is local save reset. If accounts are added, deletion and export become blocking requirements before production.
