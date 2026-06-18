---
name: Tactical Survival HUD
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d7c4ac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9f8e78'
  outline-variant: '#524533'
  surface-tint: '#ffba43'
  primary: '#ffd597'
  on-primary: '#432c00'
  primary-container: '#ffb000'
  on-primary-container: '#6a4700'
  inverse-primary: '#805600'
  secondary: '#78dc77'
  on-secondary: '#00390a'
  secondary-container: '#00761f'
  on-secondary-container: '#95fb92'
  tertiary: '#c1e0f0'
  on-tertiary: '#163440'
  tertiary-container: '#a6c4d3'
  on-tertiary-container: '#35525f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddaf'
  primary-fixed-dim: '#ffba43'
  on-primary-fixed: '#281800'
  on-primary-fixed-variant: '#614000'
  secondary-fixed: '#94f990'
  secondary-fixed-dim: '#78dc77'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005313'
  tertiary-fixed: '#c9e7f7'
  tertiary-fixed-dim: '#adcbda'
  on-tertiary-fixed: '#001f2a'
  on-tertiary-fixed-variant: '#2e4b57'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-mid: '#131313'
  surface-light: '#1b1b1b'
  danger-red: '#d32f2f'
  concrete: '#9e9e9e'
  steel: '#455a64'
  cold-blue: '#aabcc4'
typography:
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  status-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
  status-value:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1.2'
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
  microcopy:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  margin-screen: 12px
  padding-panel: 20px
  gutter-grid: 12px
  safe-top: 24px
  bottom-bar-height: 100px
---

## Brand & Style

The brand personality is **Serious, Practical, and Gritty**. This design system reflects an urban survival simulation where every decision is life-critical. The UI should evoke a sense of urgency and technical precision, functioning less like a game and more like a rugged, military-grade handheld device used for monitoring environmental hazards.

The chosen design style is **Corporate / Modern** mixed with **Tactical Minimalism**. It utilizes high information density, sharp edges, and a disciplined color palette to ensure readability in a "Cold Night" setting. Visual depth is achieved through layered tonal surfaces rather than decorative effects, maintaining a focus on "data over decoration." The interface feels professional, utilitarian, and urgent.

## Colors

The palette is rooted in a deep, nocturnal charcoal to represent the "Cold Night" setting. 

- **Primary (Amber/Orange):** Used for active hotspots, warnings, and "Useful" item categories. It is the primary call-to-action color.
- **Secondary (Tactical Green):** Reserved for "Essential" items, success states, and completed tasks.
- **Danger (Muted Red):** Specifically used for "Traps" or risky environmental decisions.
- **Neutral (Charcoal):** Three levels of charcoal (`#101010`, `#131313`, `#1b1b1b`) provide the structural foundation for surfaces and panels.
- **Environment Tones:** Concrete gray and muted steel are used for structural elements, while Cold Blue-Gray is applied to environmental light cues (windows, drafts).

## Typography

Typography is split into three functional roles to maximize technical legibility:

1.  **Display (Archivo Narrow):** Bold and uppercase headings for locations and primary headers. The condensed nature allows for high-impact titles without consuming excessive horizontal space on mobile.
2.  **Technical (JetBrains Mono):** Used for all data-driven elements including timers, warmth/strength meters, and technical labels. The monospaced nature ensures that fluctuating numbers do not cause layout shifts.
3.  **Content (Inter):** A neutral sans-serif for story descriptions, hints, and instructional text to ensure long-form readability.

## Layout & Spacing

This is a **mobile-first fixed grid** system optimized for one-handed tactical play. 

- **Margins:** A strict 12px margin is maintained from the screen edges for all floated panels.
- **Hierarchy:** The central area remains clear for environmental art and hotspots. Interaction is concentrated in the "Bottom Interaction Bar" (height approx. 100px) and overlay sheets.
- **Safe Areas:** A 24px top buffer is reserved for device notches/system status.
- **Density:** Item grids (e.g., equipment or inventory) utilize a 2-column layout with 12px gutters, prioritizing vertical scanning.

## Elevation & Depth

Hierarchy is communicated through **Tonal Layers** and backdrop effects rather than traditional drop shadows.

- **Background:** The base environment art (Level 0).
- **Surface 1 (#131313):** Standard UI panels and persistent interaction bars.
- **Surface 2 (#1b1b1b):** Elevated cards, active selections, and nested items.
- **Overlays:** When modals or bottom sheets are active, the scene background must use a dark dimming overlay (60% opacity black) to force focus. 
- **Outlines:** Use 1px solid borders in neutral-light or brand accents (Amber/Green/Red) to define element boundaries without adding shadow-based bulk.

## Shapes

The shape language is **Compact and Utilitarian**. 

Elements use a small **4px (Soft)** radius. This creates a "ruggedized" feel—modern enough for a clean UI but sharp enough to appear like industrial survival equipment. Circular shapes are reserved strictly for circular hotspots or character icons to provide a clear visual contrast against the rectangular grid of the HUD.

## Components

- **Buttons:** Rectangular with a 4px radius. Primary buttons use an Amber fill with black text. Secondary/Success buttons use Tactical Green. Danger/Trap buttons use Muted Red.
- **Status Meters:** Horizontal bars with a segmented look. The background is `#1b1b1b`, filled with functional colors (Amber for warmth, Green for health). Use `JetBrains Mono` for the percentage/value readout above the bar.
- **Item Cards:** Low-profile containers with a 1px border. They include a small category badge (e.g., "Important" in Green) in the top right corner.
- **Hotspots:** Circular indicators with 2px stroke. Amber for unvisited, Green for visited, and Red for hazards. Use thin leader lines (1px) to connect labels to specific environmental points.
- **Bottom Sheets:** Heavy dark panels that slide from the bottom. They feature a handle indicator at the top and 20px internal padding.
- **Badges:** Compact, uppercase text pills using `microcopy` typography. They act as the primary classification tool for gameplay-critical items.