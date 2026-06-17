# Technical Canon

## Selected Stack

Frontend: React 18, Vite, Tailwind CSS, Framer Motion, lucide-react.
State: React state and localStorage for MVP.
Data: static JavaScript data modules for episodes and localization.
Backend: none for local MVP.
Payments: external checkout or manual invoice for paid pilot.
Analytics: lightweight event tracking added only after validation design.

No alternate stack is approved before paid pilot.

## Architecture

The app is a single-page browser application:

- `src/pages/Game.jsx`: screen state and language state.
- `src/pages/StartScreen.jsx`: entry and new game.
- `src/pages/GameHub.jsx`: main play shell.
- `src/components/game/InteractiveEpisode.jsx`: scene interaction.
- `src/lib/interactiveEpisodes.js`: episode data.
- `src/lib/i18n.js`: UI localization.
- `src/lib/gameEngine.js`: save, stat, XP utilities.

## Content Data Integration

Episode data in `src/lib/interactiveEpisodes.js` is the development bridge between canonical content documents and playable screens.

Every playable episode should include taxonomy metadata:

- `locationFamily`: one family from `docs/survival-master-taxonomy.md`;
- `sceneTypes`: concrete scene types from that location family;
- `hazardFamilies`: one or more threat families from the taxonomy;
- `situationFamilies`: one or more situation families from the taxonomy;
- `sourceBasis`: source anchors used for safety claims;
- `reviewStatus`: current content review state.

The taxonomy documents are research and production-planning inputs. They do not override locked canon. If a new playable episode changes first-release scope, it still requires the normal change-request or ADR process.

## Frontend Modules

Episode module owns:

- scene image;
- hotspots;
- object inspection;
- inventory;
- evaluation;
- result modal.

Localization module owns:

- supported languages;
- UI strings;
- fallback behavior.

Game engine owns:

- save/load;
- stats;
- XP;
- skill unlocks.

## Backend Modules

No backend module is canonical for MVP. Adding backend storage requires ADR because it changes privacy, support, and deletion obligations.

## API Conventions

Before backend exists, API calls are not allowed for core gameplay. Base44 SDK must be disabled locally when app id is absent.

## Database Model

No database in MVP. Future account model must include users, purchases, progress, events, and deletion/export metadata.

## State Machines

Episode state:

`idle -> inspecting -> packed/unpacked -> evaluating -> success|failure -> debrief -> replay|next`

Stage state:

`planned -> active -> evidence_review -> go|hold|pivot|stop`

## Migrations

No database migrations in MVP. Local save versioning is required if save schema changes after beta.

## Authentication and Authorization

No required auth for free demo. Paid pilot can use manual access or external checkout links. Account auth requires ADR.

## Integrations

Approved before paid pilot:

- static hosting;
- optional payment provider;
- optional privacy-respecting analytics;
- manual email support.

## AI Gateway

No runtime AI gateway in MVP. AI-generated content may be used offline but must be human-reviewed.

## Observability

Minimum:

- console free of blocking app errors;
- build logs;
- validation script proof;
- future analytics event QA.

## Environments

- Local development: Vite on localhost.
- Preview: static hosted build.
- Pilot production: locked build with payment and support links.

## CI/CD

Minimum CI before paid pilot:

- install;
- build;
- documentation validation script;
- lint if lint warnings are made actionable.

## Rollback

Rollback unit is a git commit or tagged build. Paid pilot releases require a known previous build.

## Secrets

No secrets in repository. Any payment, analytics, or Base44 identifiers must be environment variables.

## Repository Conventions

- Fundamental docs live under `docs/`.
- Stage contracts live under `docs/data/`.
- New foundational decisions require ADR or change request.
- Generated validation outputs are allowed under `docs/data/`.
