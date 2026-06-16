# UX and Design Canon

## Information Architecture

Primary app areas:

- Episode: playable scene.
- Learn: debrief and learning summaries.
- Base: progress and course state.
- Log: recent actions.

Marketing areas:

- Landing.
- Free demo.
- Paid early access.
- Support and disclaimer.

## Navigation

The game starts in the active episode. Navigation must not hide the next action. Tabs are allowed but should not compete with scene interaction.

## Responsive Rules

- Desktop: scene and side panel side-by-side.
- Tablet: scene first, panel below or beside depending width.
- Mobile: scene, mission, inspection, inventory, actions in one scrollable column.

## Supported Devices

MVP acceptance matrix:

- 1366x768 desktop Chrome.
- 1280x720 desktop Edge.
- 390x844 mobile viewport.
- 768x1024 tablet viewport.

## Accessibility

Minimum:

- readable contrast;
- focus states;
- accessible labels for scene objects;
- button text not clipped;
- no essential information only in color.

## Design Tokens

Current style:

- dark survival interface;
- accent amber for attention;
- red for primary danger/action;
- green for success;
- compact tactical panels.

Constraint: avoid decorative effects that obscure the scene. The visual image is the primary game surface.

## Components

Canonical components:

- language switcher;
- stat bar;
- scene image with hotspots;
- inspection card;
- inventory panel;
- result debrief modal;
- stage/progress card.

## Loading, Error, Empty, Offline States

- Loading: small centered spinner or skeleton, not a blank screen.
- Error: explain the failing action and give retry.
- Empty inventory: show "selected: 0" and mission.
- Offline: allow current loaded scene, block payment and sync.

## Keyboard and Safe Area

Keyboard support must allow tabbing through visible controls. Hotspot keyboard mode may use an object list if direct image tab order becomes too noisy.

Safe area: mobile bottom actions must not be hidden by browser bars.

## Operator Visual Review

Before release, a human reviewer checks:

- scene image is visible;
- clickable zones align with objects;
- text fits panels;
- mobile layout has no incoherent overlap;
- language switcher works.

Visual acceptance is separate from build success.
