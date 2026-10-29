---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: ["src/index.css", "src/components/ProjectPreview.jsx", "src/components/wms/WmsPreview.jsx", "src/pages/ProjectCaseStudy.jsx"]
---
# Portfolio surface
Mode: Experience. User-directed amendment: remove AP artwork and replace the WMS screenshot with frontend code from ~/wms-mcc.
## Direction contract
THESIS: Let working software provide the visual evidence.
OWN-WORLD: White editorial Manrope portfolio with black type and neutral-gray details. The full-width hero inverts to black with white text and actions, separating the introduction from Selected Work. Navigation stays white. Retain the original WMS colors inside its static preview, as explicitly requested.
STORY: Meet Averil, explore the WMS case study, understand capabilities, contact him.
FIRST VIEWPORT: Averil Primayuda is the two-line typographic centerpiece, with his verified role, existing statement and both actions. Selected work starts within the first desktop screen. No decorative replacement object.
FORM: Readable 16–18px copy, 1160px maximum grid, flat text groups, and one primary project action. The original Blade dashboard composition is recreated in static React with fictional fixtures and inactive controls. Native disclosures expose the dense dashboard and complete engineering explanations on demand. Do not change the source WMS repository.
FINISH: Verify desktop/mobile layout, keyboard and touch access, copy feedback, reduced motion, links, native scrolling, and idle animation settlement. Preserve source provenance and implementation boundaries.

Hero background amendment: four low-contrast gray contour curves echo the gutter thread at the dark hero's right and bottom edges, fading away from the text. They draw once over 1.2 seconds in the existing entrance timeline. Phones show two static curves; reduced motion uses the static artwork. Keep the SVG clipped, non-interactive and behind the copy. No new canvas, dependency, continuous motion, or patterns in the white reading sections.

Motion amendment: the name rises through masks by 24px over 700ms with 100ms line staggering; phones use 16px. Supporting text and actions overlap the name entrance, completing within one second. Skip the sequence for hash/restored arrivals or when the matching HTML shell is already painted. Section headings keep their once-only 16px / 600ms masked reveal (10px mobile). Static defaults, reduced-motion paths and hidden-tab settlement keep content readable. The homepage replaces the six-follower rail with one scroll-drawn charcoal SVG thread through the right gutter, bending at section joins and finishing beside Contact. It stays outside the content, measures disclosure/viewport changes, and shares the existing idle-stopping loop. Case studies retain the six-follower rail and its 32px spread. Phones/coarse pointers show a thin top progress line; reduced motion hides the decoration. The portrait keeps its existing 4px bound and WMS stays stationary. No ScrollTrigger frame loop or new animation dependency.

Startup amendment: the HTML fallback mirrors the current navigation, hero and reading sections through shared CSS. Preload Manrope; reserve the desktop dashboard footprint and keep it collapsed on mobile. Select the existing case study's static template before module loading on direct arrivals. Preserve pre-load disclosure/menu state and retain usable static links. Do not add a loading screen or delay content until animation/fonts finish.

Mobile navigation amendment: morph three SVG strokes into an X, roll Menu/Close letters through a clipped fixed-width label with a shallow fold and 16ms stagger, and reveal the dropdown below a fixed-height bar. Use 280ms opening / 220ms closing CSS transitions, reversible on rapid taps. Expose the complete button action to assistive technology, with decorative letters hidden. Keep the panel mounted but inert/hidden when closed; preserve Escape, link navigation, outside dismissal and desktop reset. Bound its height to the available viewport and use immediate reduced-motion states. Match the native startup menu to this geometry so opening it before React causes no page jump.
