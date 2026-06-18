---
name: Wild Path Game
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c8c6c5'
  primary: '#c8c6c5'
  on-primary: '#313030'
  primary-container: '#121212'
  on-primary-container: '#7e7d7d'
  inverse-primary: '#5f5e5e'
  secondary: '#ffb5a0'
  on-secondary: '#5f1500'
  secondary-container: '#d73b00'
  on-secondary-container: '#fffbff'
  tertiary: '#78dc77'
  on-tertiary: '#00390a'
  tertiary-container: '#001702'
  on-tertiary-container: '#2a9035'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#862200'
  tertiary-fixed: '#94f990'
  tertiary-fixed-dim: '#78dc77'
  on-tertiary-fixed: '#002204'
  on-tertiary-fixed-variant: '#005313'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  stat-lg:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 24px
  stat-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-padding: 24px
---

## Brand & Style

The design system is engineered for a high-stakes, realistic survival training environment. The brand personality is **utilitarian, urgent, and cinematic**, evoking the feeling of a tactical field interface used under extreme pressure. It prioritizes clarity over decoration, ensuring that players can make split-second decisions during evacuation scenarios.

The visual style is a blend of **Modern Tactical** and **Minimalist Dark Mode**. It utilizes a "Flashlight Focus" philosophy: the UI remains largely suppressed in deep charcoals to preserve the player's night vision and immersion, while critical information pierces the darkness with high-intensity emergency accents. The interface should feel like a piece of ruggedized survival equipment—functional, durable, and devoid of unnecessary flourish.

## Colors

The palette is strictly functional, designed to maintain a tense, grounded atmosphere. 

- **Foundational Grays:** The background uses `#121212` to provide a near-black canvas, while `#1B1B1B` is used for containers and elevated surfaces to create subtle depth without breaking the dark aesthetic.
- **Emergency Orange (#FF5722):** Reserved for active objectives, warnings, and elements requiring immediate player attention.
- **Tactical Green (#4CAF50):** Indicates successful actions, safe zones, and priority inventory items.
- **Danger Red (#D32F2F):** Used exclusively for critical threats, traps, and depleted health/resources.
- **Typography:** We avoid pure white (#FFFFFF) to reduce eye strain in dark environments, opting instead for **Off-white (#E0E0E0)** for primary content and **Muted Gray (#888888)** for non-essential technical data.

## Typography

The typography system uses a dual-font approach to balance readability with a technical simulator aesthetic.

- **Inter** is the primary typeface for all narrative content, instructions, and menu items. Its high x-height ensures legibility across English, Russian, and Spanish, even during high-motion gameplay.
- **JetBrains Mono** is utilized for "Technical Overlays"—timers, coordinates, inventory counts, and equipment stats. This monospaced font reinforces the feeling of a digital survival tool and ensures that numeric values do not jitter as they change.
- **Scale:** Headlines are kept compact to save screen real estate for the game world. Labels often use uppercase styling with increased letter spacing to mimic military-grade labeling.

## Layout & Spacing

This design system employs a **Fluid Grid** with a tight 4px baseline unit, emphasizing density and information efficiency.

- **Grid:** A 12-column system is used for desktop menus, while mobile layouts shift to a single-column stack with persistent bottom-anchored actions.
- **Safe Zones:** Given the "flashlight focus" aesthetic, the layout prioritizes the center of the screen for the game world, pushing UI elements to the periphery (corners and edges) to maximize immersion.
- **Reflow:** Containers must be flexible to accommodate the variable lengths of Russian and Spanish text strings. Avoid fixed-width buttons; use minimum widths with flexible padding to ensure labels never clip.

## Elevation & Depth

To maintain a grounded, tactical feel, this design system avoids soft, floating shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Depth is communicated through color. The further "back" an element is, the darker it is. Active modals use a slightly lighter gray than the background to appear closer to the user.
- **Borders:** UI elements are defined by 1px solid borders (`#2A2A2A`). For active or "focused" elements, the border color shifts to the primary accent (Orange or Green).
- **Glows:** Minimalist hotspots and interactive world objects use a "Subtle Pulse" glow rather than a shadow. This glow uses the accent color with a high blur (12px-20px) and low opacity (20%) to simulate light reflecting off a surface in the dark.

## Shapes

The shape language is **rugged and geometric**. We avoid "bubbly" or overly rounded corners. All primary containers and buttons use a small 4px (0.25rem) radius to feel "machined" rather than "molded." This slight rounding prevents the UI from feeling too harsh while maintaining a professional, tactical silhouette. 

Interactive hotspots are the only exception, utilizing perfect circles to distinguish "world interactions" from "system UI."

## Components

- **Tactile Buttons:** Solid backgrounds (`#1B1B1B`) with 1px borders. On hover/active states, the border glows Emergency Orange. Text is always centered and set in Bold Inter.
- **Status Chips:** Compact, rectangular tags with JetBrains Mono text. Used for "Equipped," "Damaged," or "High Priority."
- **Inventory Bottom Sheets (Mobile):** Slide up from the base of the screen. They use a semi-opaque background (`rgba(18, 18, 18, 0.95)`) to maintain context with the game world behind them.
- **Input Fields:** Recessed appearance with a darker background than the container. Monospaced text for data entry.
- **Hotspots:** Small, circular icons with a 2px stroke and a faint, breathing outer glow.
- **Progress Bars:** Flat, no-radius bars. Use Tactical Green for health/success and Emergency Orange for timers or oxygen levels.