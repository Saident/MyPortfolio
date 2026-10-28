# Scroll trail implementation and verification

## Changed files

- `src/components/ScrollTrail.jsx`: replaces ReadingProgress with one coordinated on-demand animation loop, responsive/reduced-motion modes, resize/content-height observers, restored-scroll synchronization, visibility handling and cleanup.
- `src/components/scrollTrailMotion.js`: frame-rate-independent follower model and named settings: accentColor, trailLength (default 8; use 6–10), followStrength, maxTrailDisplacement (64px), maxVisualDisplacement (12px).
- `src/App.jsx`: mounts ScrollTrail. Old ReadingProgress.jsx removed.
- `src/components/About.jsx`, `src/index.css`: clipped portrait wrapper, bounded follow-through, faint rail/head/tail and mobile edge indicator.
- `tests/scrollTrail.test.mjs`: progress limits, initial/restored positions, jumps/reversals, tail and portrait displacement bounds, complete settlement, and 30/60/120Hz consistency.
- DESIGN.md, .impeccable/design.json, surface brief: current motion behavior.

Existing GSAP entrance animations remain intact. The previous reading-progress requestAnimationFrame infrastructure is replaced rather than adding a competing progress loop or animation library. No smooth scrolling or cursor tracking is introduced. No 3D artwork or project screenshot exists; live WMS remains stationary. The portrait is the only visual with follow-through.

## Verified locally

- Node test suite, ESLint, production build, whitespace checks passed.
- Chromium scroll checks: slow increments, fast jumps, rapid reversals, anchor navigation, contact-hash reload/restoration, changing document height via WMS details expansion.
- Instrumented requestAnimationFrame scheduling: trail settled to zero spread/opacity with zero pending frames; schedule count stayed at 191 across the subsequent 400ms idle observation. Fast/reversal spread did not exceed 64px in recorded checks. Portrait movement was bounded; one observed offset was -8.39px.
- Simulated document visibility change cancelled the pending frame; resume synchronized to the current scroll position. This tests the visibility handler, not physical OS background throttling.
- 360, 768, 1024, 1440px checks: no horizontal overflow. At 1440px the rail right edge was 1417px and content right edge 1352.5px, outside the reading area. 1024x320 uses the compact progress fallback.
- Reduced-motion switch hides decoration, clears portrait transform and leaves zero pending trail frames.
- Touch emulation scrolls natively, updates the thin progress line, and the menu remains operable. Decoration is excluded from pointer hit testing.
- Zero layout-shift entries observed during the tested scroll interval, not a full-page CLS benchmark.
- A simulated non-scrollable document hides the indicator. With ResizeObserver and IntersectionObserver unavailable, heading and navigation still render without exceptions.
- No browser JavaScript exceptions recorded in these checks.

No Lighthouse scores, real-device performance, cross-browser certification, deployment or full screen-reader test is claimed. Browser automation helpers are temporary scripts in /tmp; the deterministic motion tests are in the repository.
