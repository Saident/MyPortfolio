# Minimal portfolio refinement

## Audit and scope

Inspected the published homepage in Chromium at 1440px and 360px and the current
local homepage and WMS case study before editing. The public site and local
working tree were reviewed separately; the local baseline is used for comparisons.

Verified weaknesses: desktop hero type reached 86.4px and delayed selected work;
much supporting copy was 14px; project category, highlights, badges and multiple
actions competed with the preview. About repeated the role and education in an
additional panel. The dense source dashboard occupied substantial mobile space.
Case-study heading sizes and repeated framing added length without more evidence.

Kept React/Vite, GSAP, routing, all verified profile/skill/project information,
section anchors, résumé and contact methods. Only WMS is published. Contribution
remains “Full-stack development.” WMS source was not modified, connected to, or
booted for this refinement. No dependencies were added or upgraded. The previously
removed AP sculpture remains absent.

## Design changes

- 1160px content grid; 17px desktop / 16px mobile reading text; 66ch measure;
  14px metadata; shared heading scale capped at 60px. Manrope for the portfolio;
  original WMS Jakarta confined to the embedded source interface.
- Shorter hero; one primary case-study action; three relevant homepage technology
  names as plain metadata. Removed duplicate profile panels and decorative labels.
- Kept the complete source-based dashboard with fictional data and inactive
  controls. A native disclosure is open on the desktop homepage and closed on
  mobile and in the case study. Every sidebar menu remains available inside it.
- Case study retains the partial-transfer example, verified workflows and full
  technical explanations. Engineering details are native disclosures with concise
  mechanism headings; closing copy no longer repeats a large promotional headline.
- Headings alone move 8px over 450ms. Native visibility observation replaces
  ScrollTrigger; existing GSAP performs the entrance tweens. Six faint scroll
  followers have no glow, a 32px spread cap and 4px portrait offset cap.

## Before and after

Computed local measurements, default disclosure state, 1000px viewport height:

| Measurement | Before | After |
| --- | ---: | ---: |
| Desktop content width at 1440px | 1280px | 1160px |
| Desktop homepage title | 86.4px | 60px |
| Desktop section title | 57.6px | 36px |
| Main supporting body copy | 14px | 16–17px |
| Selected work start at 1440px | 858px | 534px |
| Homepage height at 1440px | 4381px | 3060px |
| Homepage height at 360px | 5291px | 2817px |
| Case-study height at 1440px | 5775px | 3829px |
| Case-study height at 360px | 8384px | 5895px |

Page-height reductions include collapsed disclosures. All dashboard and
engineering content remains available. These are layout measurements, not
loading-speed, Lighthouse, or real-device performance scores.

Before/after captures are in `.impeccable/review/minimal-before-*` and
`minimal-after-*`; public audit captures use `minimal-public-*`. The screenshots
are review artifacts, not public portfolio assets or WMS screenshots.

## Changed implementation files

- `src/index.css`: shared type, grid, spacing, responsive layouts and quiet motion.
- `src/components/{Hero,Navbar,Projects,About,Skills,Contact}.jsx`: simpler hierarchy,
  concise copy and removal of repetitive visual structures.
- `src/components/ProjectPreview.jsx`: reusable native dashboard disclosure.
- `src/pages/ProjectCaseStudy.jsx`: compact reading hierarchy and technical details.
- `src/components/ScrollReveal.jsx`: heading-only GSAP entrance with once-only
  IntersectionObserver, including cleanup and reduced-motion support.
- `src/components/{ScrollTrail.jsx,scrollTrailMotion.js}` and
  `tests/scrollTrail.test.mjs`: reduced visual settings and configurable test length.
- `src/components/wms/{WmsPreview.jsx,wms-preview.css}`: optional outer caption,
  compact wording and consistent source font; dashboard structure/data unchanged.
- `src/data/portfolio.js`: shorter verified project summary.
- `src/App.jsx`: resolve initial anchor destinations after React has mounted, so
  case-study links to homepage sections actually scroll to their destination.
- Design/product documentation and the WMS embedding notes reflect these changes.

## Checks performed

- `npm run lint`, `npm run build`, `node --test tests/scrollTrail.test.mjs`.
- Chromium layouts at 360, 768, 1024 and 1440px: no page horizontal overflow.
  Enlarged root text at 200% checked at 360, 768 and 1440px, without overflow.
  This is a text-resize check, not a complete browser-zoom or screen-reader audit.
- Keyboard focus outlines; Enter/Space disclosure operation; mobile menu opens,
  closes with Escape, and restores toggle focus. The source dashboard has no
  links/buttons/inputs/selects; all 27 submenu entries are retained.
- Touch emulation pans the source preview; native scrolling and hidden scrollbars
  remain intact. Mobile progress updates without decorative portrait displacement.
- Case-study direct navigation and refresh, section anchors, and a résumé fetch
  returning HTTP 200 / application/pdf. Existing contact/social URLs are preserved;
  no email was sent and external social accounts were not authenticated.
- Final anchor confirmation at 1440px and 360px: the case-study Contact action
  brings the email into view; Selected Work returns to its section; direct About
  links and refreshes retain the intended header offset. No JavaScript exceptions.
- Clipboard success read back the expected public email; a forced permission
  rejection showed the existing recovery message.
- Normal-motion slow scroll, fast jumps, reversals and settlement. After settling,
  instrumented requestAnimationFrame scheduling stopped, with zero pending frames.
  Reduced motion hid the trail, cleared offsets and left headings fully visible.
- No JavaScript exceptions in the final interaction check.
- With both visibility/resize observers unavailable, headings and content still
  render normally without exceptions. Main portfolio text and action colors were
  calculated above 4.5:1 contrast against their actual surfaces.

## Boundaries

No deployment, Lighthouse score, real-device benchmark or cross-browser
certification is claimed. WMS remains a source-based recreation; no authenticated
live comparison is implied. Specific module authorship, business outcome metrics,
approved public demo/source URLs, and real sanitized screenshots remain unverified
and have not been added to public copy.
