# WMS case study design review

Reviewed scope: `/projects/warehouse-management-system`, its portfolio project entry, and navigation back to home sections.

Verdict: the case-study chrome remains an ordinary extension of the portfolio system. The latest user-directed preview replacement is static and uses the source WMS font, compact dimensions, and full expanded sidebar. DESIGN.md, PRODUCT.md, and the design sidecar now document that scoped preview update; portfolio tokens and shared motion remain unchanged.

## System continuity

- `src/pages/ProjectCaseStudy.jsx` inherits the existing container, Manrope typography, primary button, text link, focus treatment, section anchor offset, and `ScrollReveal` implementation.
- The case rules in `src/index.css` use existing ink, muted, accent, raised, and line variables. The receipt explanation uses the established flat graphite surface and 4px control radius. Case-specific heading sizes and grids express the longer reading format without creating a replacement visual identity.
- `src/App.jsx` mounts one shared `ScrollTrail` outside its mutually exclusive home/case-study content. The case page introduces no separate scroll engine or pinned sequence.
- Native links open the case route, navigate its section index, and return to `/#projects` or `/#contact`. `Navbar` receives `/` as its home prefix on the case route; résumé download remains the existing asset link.
- Both surfaces reuse `WmsPreview`. The preview visibly labels dummy data and inactive controls. It renders all 8 sidebar sections and 27 submenu entries as static text/SVG. Feature-gated menu labels describe source presentation, not enabled production capabilities.

## Responsive and accessibility boundary

Engineering uses heading/body rows; capabilities use a two-column reading grid. At 767px and below, overview, capabilities, workflow and engineering become single-column; metadata uses two columns with technology spanning both. Case section padding reduces from 88px to 56px, while the existing 20px mobile container gutters remain.

Case headings use `overflow-wrap: anywhere`, including the final adjustment for enlarged text. The case index has wrapping links and 44px minimum link height. Existing reduced-motion behavior comes from the shared reveal and trail components.

The preview now preserves an 1100px minimum desktop shell with native horizontal scrolling on narrow screens and bounded vertical scrolling for the sidebar/dashboard. Labeled scroll regions are keyboard-focusable. Its source font, Plus Jakarta Sans, is self-hosted as WMS Jakarta and scoped to the embedded shell; portfolio text remains Manrope. No preview control performs an action, and no WMS animation remains.

The implementation handoff in `src/components/wms/README.md` records build/lint and browser checks at 360, 768, 1024, and 1440px, including inactive controls, local font loading, menu counts, keyboard scrolling, and touch panning. Current evidence is in `.impeccable/review/wms-static-*.png`. This documentation pass inspected source and correspondence notes; it did not run a new browser session. An authenticated live WMS was not rendered, so no pixel-perfect or pixel-diff claim is made.

## Content boundary

The public contribution remains exactly **Full-stack development**. Project content is consistent with the internal evidence brief: stock moves on receipt, partial quantities remain outstanding, count approval applies adjustments, and warehouse scope is checked on the server. The selected stack uses MySQL as documented development context; no production database claim is introduced.

No new outcome metrics, adoption figures, dates, module-ownership claims, client identity, deployment links, repository links, or sanitized operational screenshots are added. Preview fixtures are not outcomes. Detailed factual tracing remains in `docs/internal/wms-case-study-evidence.md`.

## Reading refinement review

The page now explains the record model, follows a fictional partial receipt, shows the dashboard earlier, and then presents supporting workflows and implementation details. The illustrative quantity strip is static, has a textual equivalent and a fictional-data caption. Personal contribution remains Full-stack development. No case-study claim relies on the example quantities being actual business data.

New case-study screenshots and browser checks at 360, 768, 1024 and 1440px are recorded in `.impeccable/review/wms-story-*.png`. The sticky desktop index clears all section targets; mobile uses normal document flow. At 200% root font size the 360px page remains within its viewport. Reduced-motion content, visible focus, route refresh and touch scrolling were checked. The home project description and the unclickable WMS preview remain unchanged.
