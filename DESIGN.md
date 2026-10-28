---
name: Averil Primayuda Portfolio
description: Dark editorial software portfolio with a source-based static WMS dashboard preview.
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
    fontSize: "clamp(2.1rem, 6vw, 5.4rem)"
    fontWeight: 500
    lineHeight: 1.13
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.3vw, 3.8rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "23px"
    fontWeight: 500
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Courier New, monospace"
    fontSize: "12px"
    lineHeight: 1.5
rounded:
  editorial: "3px"
  control: "4px"
  preview: "14px"
spacing:
  tag-gap: "8px"
  compact: "12px"
  inset: "24px"
  column: "40px"
  mobile-section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.editorial}"
    padding: "16px 21px"
  text-link:
    textColor: "{colors.ink}"
  resume-link:
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "10px 17px"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "11px 15px"
  copy-button-hover:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
  project-tag:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "6px 10px"
  experience-panel:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "25px"
  navigation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    height: "78px"
---

# Design System: Averil Primayuda Portfolio

## Overview

Dark editorial software developer portfolio. A text-led hero introduces Averil; a static WMS dashboard and complete sidebar recreated from source provide the main project presentation. Fictional records and inactive controls are explicitly labeled. The AP sculpture and WMS screenshot presentation have been removed at the user's request.

## Colors

Portfolio tokens remain unchanged. The embedded WMS interface preserves its light source palette, translucent white panels, orange transaction accent, indigo service accent, green stock/paid state, amber consignment state, and red outstanding state. Its neutral primitives are recorded in the frontmatter. The shell blends pale neutral gradients; sidebar selection includes a restrained orange wash. Dark orange (#9a5a00) supplies readable small accent foregrounds and inner focus outlines. Scope all dashboard styling under WMS classes; do not recolor this source-based interface to match portfolio chrome.

## Typography

Self-hosted Manrope remains the portfolio font. The embedded dashboard uses self-hosted Plus Jakarta Sans under the local alias `WMS Jakarta`, with its SIL Open Font License beside the asset. The compact source layout uses an 11px root; the preview translates those source dimensions to local pixels without changing the portfolio root. Hero typography remains clamp(2.1rem,6vw,5.4rem), with mobile clamp(2rem,6.4vw,3.9rem). WMS has intentionally dense source-derived labels, headings, and numeric summaries; it is not scaled down further on mobile.

## Layout

1280px maximum portfolio container; 20px mobile gutters. Hero has one text column. Project preview spans the container; three detail columns follow it. The WMS shell has an 1100px minimum width, 850px height, a 211.75px sidebar, and 11px outer padding/gap. Sidebar and main dashboard have bounded vertical scrolling. The outer viewport scrolls horizontally on narrow screens and remains keyboard-focusable with a descriptive accessible label. A horizontal-scroll hint appears at 1199px or below. Preserve this source desktop composition rather than substituting mobile tabs or collapsing the dashboard panels.

## Elevation & Depth

Portfolio is flat with section hairlines. WMS uses translucent, bordered gradient panels on a pale gradient shell, with its source shadow `0 18px 50px rgba(126,145,170,.18)`. Sidebar selection and the static Sales Order presentation retain their local source shadows. No decorative 3D artwork remains.

## Shapes

Portfolio controls use 3–4px radii. The WMS viewport uses 14px corners; sidebar uses 19.25px and topbar uses 16.5px. Interior shapes retain compact source-derived fractional dimensions and rounded badges. Revenue bars are static DOM geometry; donut arcs port the source rounded-arc geometry to SVG without animation or tooltips.

## Components

Hero and section entrances use existing GSAP with reduced-motion support. ScrollTrail replaces the old reading-progress component. Fine-pointer screens at least 768px wide and 400px high use a faint curved gutter rail with an accent head and eight followers. Trail spread is capped at 64px and follows actual document progress with exponential, substepped smoothing. Small/coarse-pointer layouts show only a 2px top progress line; reduced motion hides both. One coordinated frame loop stops when settled or hidden. The clipped About portrait has a maximum 12px transient follow-through; WMS controls and all text stay stationary. Settings live in src/components/scrollTrailMotion.js. The WMS preview has no animation, event listeners, observers, or animation-frame loop; the earlier interactive revenue-chart module has been removed.

WmsPreview presents the dashboard, revenue chart, rankings, receivables, due-date monitoring, inventory summary, and the complete sidebar simultaneously. Its 8 sidebar sections contain 27 submenu entries; all groups remain expanded so every label can be seen by scrolling. Menus, date/filter displays, account presentation, and Sales Order presentation are plain text/SVG elements with no actions, not disabled buttons or fake links. The Sales Order presentation stays at the dashboard end instead of floating over portfolio content.

All values, dates, identities, documents, and customers are fictional and visibly labeled dummy data. No backend, authentication, source API, or production record is included. All menu labels are shown for presentation, including feature-gated entries; live visibility depends on permissions and enabled modules. Source correspondence and deliberate embedding differences are documented in `src/components/wms/README.md`. This is a source-based recreation, not a verified pixel-diff match against an authenticated live WMS.

Résumé download, real contact links, clipboard success/failure messages, skip link and keyboard focus remain intact. Portfolio focus is cyan; the light preview uses a dark-orange outline for its inner scroll regions, while its outer viewport inherits portfolio focus. Reduced motion leaves all content and controls available.

## Case-study reading pattern

The WMS case study tells one connected story: the document/balance/ledger model, a partial warehouse receipt, the dashboard, other workflows, then engineering details. A fictional 10-unit transfer with 6 received explains the paired stock changes without implying business results. The contribution remains exactly Full-stack development.

Use the existing Manrope, cyan, graphite and hairline tokens. The desktop section index stays beneath the main navigation; anchor offsets account for both. The receipt illustration can stay alongside the four workflow steps on wide, tall viewports. At 767px and below, the diagram, workflow, capabilities and engineering rows stack in reading order; the index remains in normal flow. Reuse ScrollReveal only for section headings, with no new motion engine. The WMS preview stays static and scrollbar-free.

## Do's and Don'ts

- Preserve the real project structure and terminology; distinguish adapters from original source.
- Keep fixtures explicitly labeled, and never present demo revenue as real project outcomes.
- Preserve native scrolling, focusable preview scroll regions, and inactive dashboard controls.
- Keep WMS Jakarta scoped to the embedded dashboard; do not replace portfolio Manrope.
- Do not add WMS chart animation, filters, menu actions, or backend connections to this static preview.
- Do not restore the AP sculpture, substitute a screenshot, or copy private configuration/customer data.
