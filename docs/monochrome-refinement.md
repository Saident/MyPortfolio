# White editorial and kinetic typography refinement

## Final direction

White portfolio backgrounds, black typography and neutral-gray details. The user
explicitly excluded the displayed WMS project from monochrome; its original colors,
layout, dummy data and inactive controls remain unchanged. Blade belongs under
Frontend; WSL is added to the existing Data & workflow tools list.

## Verified baseline

Inspected the live homepage and WMS case study in Chromium at 1440px and 360px,
including all sections, and captured the equivalent local baseline before edits.
Both matched: Manrope, cyan actions, 16–17px reading text, a 1160px grid, a static
WMS preview, six scroll followers, and no canvas or 3D scene. The slogan was a
60px desktop h1 while Averil's name was a 16px introductory line. Project and
case-study content were already concise and structured, so their order and facts
were retained.

The typography source assessment and mechanical scan agreed on keeping the two
existing font roles. The detector flagged some real 16/18/20/40px roles absent
from the machine-readable design ramp; these roles are now documented with the
new identity scale rather than suppressed.

## Implementation

- `src/index.css`: white/black/gray tokens, 44–96px signature name, a responsive
  asymmetric hero, padded text masks, neutral focus/selection/progress styling,
  thin navigation underlines, and a project-title underline transition.
- `src/components/Hero.jsx`: one semantic name heading split into two word lines;
  verified professional role, existing statement and description, both actions.
  GSAP runs a brief 32px / 780ms line sequence with 120ms stagger; mobile uses
  24px / 650ms. Supporting text fades from 0.85 opacity, preserving readable contrast.
- `src/components/ScrollReveal.jsx` and `typographyMotion.js`: reusable heading
  masks at 16px / 600ms (10px on phones). Native once-only visibility observation,
  shared timing, hidden-document settlement, cleanup and reduced-motion fallback.
- `src/components/Projects.jsx`: project title links to the actual case study;
  hover/focus underline adds feedback without shifting text.
- `src/components/Skills.jsx`: Blade moved from Backend to Frontend; WSL added.
- `index.html`: white browser theme and a static factual identity, project summary
  and contact fallback that React replaces on startup. JavaScript failure does
  not leave an empty root.
- `DESIGN.md`, `PRODUCT.md`, `.impeccable/design.json`, and the surface brief:
  current typography, motion and the explicit WMS color exception.

No framework, route, package manifest, lockfile, WMS source repository, dashboard
component, fictional records, résumé or contact data changed. No dependency or 3D
scene was added. No publication or deployment was performed.

## Before and after

| Local measurement, 1440px wide | Before | After |
| --- | --- | --- |
| Portfolio background | Charcoal | White |
| Primary action | Cyan | Black with white text |
| Name | 16px secondary line | 96px primary heading |
| Selected Work start | 534px | 462px |
| Embedded WMS | Original colors | Original colors preserved |

Screenshots live in `.impeccable/review/mono-live-*`, `mono-before-*`, and
`mono-after-*`. These are review captures; they are not screenshots substituted
for the source-based project preview.

## Validation

- Production build, ESLint, existing Node scroll-trail tests and whitespace checks.
- Home and case-study layouts at 360, 768, 1024 and 1440px: no horizontal overflow
  or overflowing text masks. Root text at 200% also stayed within the layout at
  360, 768 and 1440px. This is not a full cross-browser zoom certification.
- Runtime color inspection found only neutral colors outside the WMS shell;
  source chart series remain orange and indigo. All 27 submenu items remain, with
  no active application controls and hidden scrollbars.
- Keyboard project-title navigation, visible focus/underline, dashboard and
  engineering disclosures, mobile menu/Escape, and real touch-event preview panning.
- Case-study Contact action lands at the visible email. Clipboard reads back the
  correct public email. Résumé fetch returns HTTP 200 and application/pdf.
- Normal hero movement was observed; temporary styles cleared after completion.
  After scroll jumps/reversals settled, pending animation frames reached zero and
  the schedule count stayed at 410 across a 400ms idle interval. Six followers
  faded to zero while the head rested at 0.2 opacity.
- Reduced motion hides the trail and removes heading transforms. Disabling
  JavaScript leaves the static name, project summary and email link available.
- No JavaScript exceptions in the completed interaction run.
- The accessibility tree exposes one “Averil Primayuda” heading. A simulated
  hidden-document event finishes an active entrance and clears its styles;
  reduced motion settles to zero pending animation frames. This exercises the
  visibility handler, not physical operating-system background throttling.
- Main text contrasts are 18.88:1 (primary), 7.00:1 (secondary) and 4.95:1 (quiet)
  on white. Supporting text remains above 4.5:1 during the brief opacity entrance.

The observed initial-layout shift sum in one local warm-load motion run was
approximately 0.00025. This is a narrow browser observation, not a Lighthouse
score or a field CLS benchmark. No real-device or cross-browser performance
claim is made. Vite reports 313.09kB JavaScript (101.70kB gzip), 37.83kB CSS
(8.81kB gzip), and 2.35kB HTML (1.09kB gzip). The local baseline was 311.61kB
JavaScript and 35.84kB CSS; existing font, image and résumé assets are unchanged.
