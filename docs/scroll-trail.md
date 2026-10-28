# Scroll trail implementation and verification

## Changed files

- `src/components/ScrollTrail.jsx`: replaces ReadingProgress with one coordinated on-demand animation loop, responsive/reduced-motion modes, resize/content-height observers, restored-scroll synchronization, visibility handling and cleanup.
- `src/components/scrollTrailMotion.js`: frame-rate-independent follower model and named settings: accentColor, trailLength (6), followStrength (18), maxTrailDisplacement (32px), maxVisualDisplacement (4px).
- `src/App.jsx`: mounts ScrollTrail. Old ReadingProgress.jsx removed.
- `src/components/About.jsx`, `src/index.css`: clipped portrait wrapper, bounded follow-through, faint rail/head/tail and mobile edge indicator.
- `tests/scrollTrail.test.mjs`: progress limits, initial/restored positions, jumps/reversals, tail and portrait displacement bounds, complete settlement, and 30/60/120Hz consistency.
- DESIGN.md, .impeccable/design.json, surface brief: current motion behavior.

The existing GSAP library animates only headings, with 8px movement and a 450ms duration. Native IntersectionObserver starts section entrances once and disconnects; ScrollTrigger is no longer imported. The reading-progress infrastructure uses one demand loop. No smooth scrolling or cursor tracking is introduced. No 3D artwork or project screenshot exists; the static WMS remains stationary. The portrait is the only visual with follow-through. The rail has no glow and a 320px maximum height; mobile uses a 1px progress line.

## Latest verification: minimalist refinement

- ESLint, production build and the existing Node motion tests pass with the new settings.
- Chromium with an explicitly emulated fine pointer: slow increments, fast jumps and direction reversals animate six followers; the recorded active spread was about 31px, below the 32px cap. The recorded portrait offset was 2.64px, below its 4px cap. The model tests cover the strict bounds.
- After settling: all followers at zero opacity, head at 0.2 opacity, portrait at zero offset. Instrumented total requestAnimationFrame count stayed at 307 across the following 500ms and pending frames stayed at zero. This includes the GSAP heading tweens, whose previous ScrollTrigger idle loop was removed.
- Reduced motion: rail hidden, portrait transform cleared, headings fully visible, zero pending animation frames. Mobile touch emulation: top progress line updates; rail and portrait offsets are disabled.
- Native dashboard disclosure opens with keyboard Enter; engineering details open with Space. Touch input pans the preview without page overflow. All 27 sidebar submenu labels remain present and scrollbar tracks stay hidden.
- No JavaScript exceptions recorded in the final interaction run. This is browser instrumentation and deterministic model testing, not a real-device performance benchmark.

## Earlier implementation verification

The following observations apply to the earlier 8-follower / 64px / 12px configuration. The lifecycle is retained; they are historical checks, not measurements of the current visual settings.

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
