---
name: Averil Primayuda Portfolio
description: Minimal, readable software portfolio with a source-based static WMS dashboard preview.
colors:
  surface: "#0B0D12"
  raised: "#151922"
  ink: "#F4F5F7"
  muted: "#A0A8B7"
  line: "#2A303B"
  accent: "#8BE9FD"
  on-accent: "#0B0D12"
  wms-surface: "#f3f6fa"
  wms-panel: "rgba(255,255,255,.82)"
  wms-primary: "#ff9c00"
  wms-service: "#4f46e5"
  wms-success: "#0f9f6e"
  wms-warning: "#c98407"
  wms-danger: "#d4483b"
  wms-ink: "#27303c"
  wms-muted: "#657082"
typography:
  wms-body:
    fontFamily: "WMS Jakarta, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  display:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.25vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    lineHeight: 1.75
rounded:
  editorial: "3px"
  control: "4px"
  preview: "4px"
spacing:
  inline: "8px"
  compact: "12px"
  inset: "24px"
  column: "40px"
  mobile-section: "56px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.editorial}"
    padding: "12px 20px"
  text-link:
    textColor: "{colors.ink}"
  resume-link:
    textColor: "{colors.ink}"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.editorial}"
    padding: "8px 14px"
  copy-button-hover:
    textColor: "{colors.ink}"
  project-metadata:
    textColor: "{colors.muted}"
  navigation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    height: "72px"
---

# Design System: Averil Primayuda Portfolio

## Overview

Minimal dark editorial software developer portfolio. Typography establishes hierarchy; project evidence and concise explanations carry the page. A short introduction leads directly into selected work. A static WMS dashboard and complete sidebar recreated from source provide the main project presentation. Fictional records and inactive controls are explicitly labeled. The AP sculpture and WMS screenshot presentation remain removed at the user's request.

## Colors

Portfolio tokens remain unchanged. The embedded WMS interface preserves its light source palette, translucent white panels, orange transaction accent, indigo service accent, green stock/paid state, amber consignment state, and red outstanding state. Its neutral primitives are recorded in the frontmatter. The shell blends pale neutral gradients; sidebar selection includes a restrained orange wash. Dark orange (#9a5a00) supplies readable small accent foregrounds and inner focus outlines. Scope all dashboard styling under WMS classes; do not recolor this source-based interface to match portfolio chrome.

## Typography

Self-hosted Manrope is the portfolio font, including metadata; no monospace companion is used. Body copy is 17px on desktop and 16px on mobile with 1.75 line height and a 66ch maximum measure. Heading roles use the shared scale above: 32–60px display, 28–36px sections, 24px project titles, 20px subgroup titles, and 14px metadata. Leads are 18px on desktop and 16px on mobile. Avoid ornamental all-caps labels and forced section-heading line breaks.

The embedded dashboard uses self-hosted Plus Jakarta Sans under the local alias `WMS Jakarta`, with its SIL Open Font License beside the asset. The compact source layout uses an 11px root; the preview translates those source dimensions to local pixels without changing the portfolio root. Its intentionally dense source-derived labels stay scoped to the artifact and are not scaled down further on mobile. These are the only two font families.

## Layout

1160px maximum portfolio container with 48px desktop, 32px tablet and 20px mobile minimum gutters. Shared section padding scales from 56 to 88px per side. Hero and project spacing are tighter so selected work starts within the first desktop screen. About has a portrait and readable prose; verified skills use three plain groups without nested cards.

The project summary has one primary case-study action and one quiet metadata line. Its native dashboard disclosure starts expanded at 768px and above, collapsed on mobile; the case-study dashboard starts collapsed. Readers can expand or close either with keyboard or pointer. The complete WMS is always in the document. Its source desktop composition retains an 1100px minimum width, a 211.75px sidebar, and 11px outer padding/gap. The portfolio wrapper bounds its height to 560px on the homepage and 640px in the case study (560px on mobile). Sidebar and main dashboard scroll vertically; the labeled, focusable outer viewport scrolls horizontally. A hint appears at 1199px or below. Native scrollbars remain hidden on the portfolio and all embedded scroll regions.

## Elevation & Depth

Portfolio is flat. Whitespace separates sections; hairlines identify navigation, disclosures and the closing contact area. No portfolio glow, gradients or card shadows. WMS retains its source translucent, bordered gradient panels on a pale shell and source shadow `0 18px 50px rgba(126,145,170,.18)`. This scoped interface preserves the actual project's identity. No decorative 3D artwork remains.

## Shapes

Portfolio controls use 3–4px radii. The embedded WMS viewport uses 4px corners; source sidebar uses 19.25px and topbar uses 16.5px. Interior shapes retain compact source-derived fractional dimensions and rounded badges. Revenue bars are static DOM geometry; donut arcs port the source rounded-arc geometry to SVG without animation or tooltips.

## Components

Only the hero heading and section headings enter: 8px movement, opacity 0.9 to 1, 450ms power2.out, with no ordinary staggering. Native IntersectionObserver starts each section reveal once and disconnects; GSAP handles the tween. No ScrollTrigger import or persistent ScrollTrigger frame loop remains. Paragraphs, project controls, skills and contact controls stay stationary. Reduced motion shows all content immediately.

Fine-pointer screens at least 768px wide and 400px high use a faint, 320px maximum gutter rail with an accent head and six followers. Trail spread is capped at 32px with no glow; it follows actual document progress using exponential, substepped smoothing. The head rests at 0.2 opacity and followers fade completely. Small/coarse-pointer layouts show a 1px top progress line; reduced motion hides both. One coordinated trail frame loop stops when settled or hidden. The clipped About portrait has a maximum 4px transient follow-through. Settings live in src/components/scrollTrailMotion.js. WmsPreview itself has no animation or event listeners; its external native disclosure has one responsive media-query listener on the homepage.

WmsPreview presents the dashboard, revenue chart, rankings, receivables, due-date monitoring, inventory summary, and the complete sidebar simultaneously. Its 8 sidebar sections contain 27 submenu entries; all groups remain expanded so every label can be seen by scrolling. Menus, date/filter displays, account presentation, and Sales Order presentation are plain text/SVG elements with no actions, not disabled buttons or fake links. The Sales Order presentation stays at the dashboard end instead of floating over portfolio content.

All values, dates, identities, documents, and customers are fictional and visibly labeled dummy data. No backend, authentication, source API, or production record is included. All menu labels are shown for presentation, including feature-gated entries; live visibility depends on permissions and enabled modules. Source correspondence and deliberate embedding differences are documented in `src/components/wms/README.md`. This is a source-based recreation, not a verified pixel-diff match against an authenticated live WMS.

Résumé download, real contact links, clipboard success/failure messages, skip link and keyboard focus remain intact. Portfolio focus is cyan; the light preview uses a dark-orange outline for its inner scroll regions, while its outer viewport inherits portfolio focus. Reduced motion leaves all content and controls available.

## Case-study reading pattern

The WMS case study tells one connected story: the document/balance/ledger model, a partial warehouse receipt, the dashboard, other workflows, then engineering details. A fictional 10-unit transfer with 6 received explains the paired stock changes without implying business results. The contribution remains exactly Full-stack development.

Use the same reading scale, measure and spacing as the homepage. The section index remains in normal flow on every viewport; only the main navigation is sticky. The receipt illustration sits beside the four workflow steps on desktop, then stacks on mobile. Capability explanations use flat columns. Three native engineering disclosures expose concise mechanism headings first and preserve the complete technical explanations beneath them. A final paragraph summarizes delivered capabilities without repeating a large promotional headline. The WMS preview stays static and scrollbar-free.

## Do's and Don'ts

- Preserve the real project structure and terminology; distinguish adapters from original source.
- Keep fixtures explicitly labeled, and never present demo revenue as real project outcomes.
- Preserve native scrolling, focusable preview scroll regions, and inactive dashboard controls.
- Keep WMS Jakarta scoped to the embedded dashboard; do not replace portfolio Manrope.
- Use one primary action per project, readable metadata, and progressive disclosure for dense source UI and engineering detail.
- Keep paragraphs stable; motion never hides or delays important information.
- Do not add WMS chart animation, filters, menu actions, or backend connections to this static preview.
- Do not restore the AP sculpture, substitute a screenshot, or copy private configuration/customer data.
