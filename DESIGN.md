---
name: Averil Primayuda Portfolio
description: White editorial portfolio with an inverted black hero, kinetic name typography, and an authentic-color static WMS preview.
colors:
  surface: "#FFFFFF"
  secondary: "#F5F5F5"
  raised: "#EFEFEF"
  ink: "#111111"
  muted: "#595959"
  quiet: "#707070"
  line: "#D6D6D6"
  accent: "#111111"
  on-accent: "#FFFFFF"
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
  identity:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 6rem)"
    fontWeight: 650
    lineHeight: 1.08
    letterSpacing: "-0.04em"
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
    fontWeight: 550
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
  body-mobile:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  lead:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  group-title:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.35
  example-number:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 500
    lineHeight: 1.1
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

White editorial software developer portfolio. Averil's name is the visual centerpiece, with a short masked entrance; project evidence and concise explanations carry the rest of the page. The existing section order, reading widths and substantial WMS case study remain. A static WMS dashboard and complete sidebar recreated from source provide the main project presentation. Fictional records and inactive controls are explicitly labeled. The AP sculpture and WMS screenshot presentation remain removed at the user's request.

## Colors

The portfolio uses white backgrounds, near-black text, and neutral-gray secondary text, rules and surfaces. The hero is a full-width inverted section: #111111 background, #F5F5F5 primary text, #B8B8B8 secondary text and #767676 rules. Its local accent and on-accent tokens invert the primary action, focus and text selection; the primary action hovers to #D6D6D6. Navigation and Selected Work remain white, making the hero-to-project transition explicit. `--accent` aliases the ink token for actions, focus and the scroll trail; it is not a chromatic accent. The user direction explicitly excludes the displayed project from monochrome styling.

The embedded WMS interface therefore preserves its light source palette, translucent white panels, orange transaction accent, indigo service accent, green stock/paid state, amber consignment state, and red outstanding state. Its neutral primitives are recorded in the frontmatter. The shell blends pale neutral gradients; sidebar selection includes a restrained orange wash. Dark orange (#9a5a00) supplies readable small accent foregrounds and inner focus outlines. Scope all dashboard styling under WMS classes; do not recolor or desaturate this source-based interface to match portfolio chrome.

## Typography

Self-hosted Manrope is the portfolio font, including metadata; no monospace companion is used. Body copy is 17px on desktop and 16px on mobile with 1.75 line height and a 66ch maximum measure. The name uses a dedicated 44–96px scale at weight 650, separate from 32–60px case titles, 28–36px section headings at weight 550, 24px project titles, 20px subgroup titles, and 14px metadata. Leads are 18px on desktop and 16px on mobile. The verified Software Developer role is the small introductory label requested by the user. Avoid ornamental all-caps labels elsewhere.

The embedded dashboard uses self-hosted Plus Jakarta Sans under the local alias `WMS Jakarta`, with its SIL Open Font License beside the asset. The compact source layout uses an 11px root; the preview translates those source dimensions to local pixels without changing the portfolio root. Its intentionally dense source-derived labels stay scoped to the artifact and are not scaled down further on mobile. These are the only two font families.

## Layout

1160px maximum portfolio container with 48px desktop, 32px tablet and 20px mobile minimum gutters. Shared section padding scales from 56 to 88px per side. The full-width hero contains the same aligned grid and uses 48–88px vertical padding (48px top / 56px bottom on phones). The desktop hero places the two-line name on the left and the existing statement, description and actions on the right. It stacks below 900px, with a compact side-by-side support row on tablets and a normal vertical flow on phones. Selected Work has 64px top padding, 48px on phones, and stays within the first desktop screen. About has a portrait and readable prose; verified skills use three plain groups without nested cards.

The project summary has one primary case-study action and one quiet metadata line. Its native dashboard disclosure starts expanded at 768px and above, collapsed on mobile; the case-study dashboard starts collapsed. Readers can expand or close either with keyboard or pointer. The complete WMS is always in the document. Its source desktop composition retains an 1100px minimum width, a 211.75px sidebar, and 11px outer padding/gap. The portfolio wrapper bounds its height to 560px on the homepage and 640px in the case study (560px on mobile). Sidebar and main dashboard scroll vertically; the labeled, focusable outer viewport scrolls horizontally. A hint appears at 1199px or below. Native scrollbars remain hidden on the portfolio and all embedded scroll regions.

## Elevation & Depth

Portfolio is flat. Whitespace separates sections; hairlines identify navigation, disclosures and the closing contact area. No portfolio glow, gradients or card shadows. WMS retains its source translucent, bordered gradient panels on a pale shell and source shadow `0 18px 50px rgba(126,145,170,.18)`. This scoped interface preserves the actual project's identity. No decorative 3D artwork remains.

## Shapes

Portfolio controls use 3–4px radii. The embedded WMS viewport uses 4px corners; source sidebar uses 19.25px and topbar uses 16.5px. Interior shapes retain compact source-derived fractional dimensions and rounded badges. Revenue bars are static DOM geometry; donut arcs port the source rounded-arc geometry to SVG without animation or tooltips.

## Components

The focal sequence introduces the role, then reveals the two name lines through masks: 24px movement, 700ms power3.out and 100ms stagger. Phones use 16px / 700ms. Supporting copy starts at 500ms on desktop and 400ms on mobile, fading gently from 0.85 opacity. Actions start at 650ms / 550ms with 4px movement and 80ms stagger, completing within one second. All content is visible by default and stays selectable and semantic. Hash arrivals, restored scroll positions, back/forward navigation, and an already-painted startup shell skip the hero entrance so visible text never jumps backward into an animation. No repeating or letter-by-letter animation.

Four thin contour curves sit behind the hero, concentrated near its right and bottom edges and fading toward the text. They use the hero's neutral rule color at 0.55 opacity, with no glow or shadow. The clipped SVG draws once over 1.2 seconds within the existing GSAP entrance, then clears its temporary dash styles. Phones show two static curves in the bottom 144px; reduced motion and hash arrivals show the static artwork immediately. The SVG is decorative and non-interactive, does not affect layout, and adds no independent frame loop. White reading sections and the original WMS preview remain free of background patterns.

Section headings use the same mask vocabulary at 16px / 600ms (10px on phones). Native IntersectionObserver starts each once, then disconnects; GSAP handles the tween. `typographyMotion.js` holds the shared settings. Temporary styles clear on completion; animations settle when the document is hidden, and observers/listeners are cleaned up. Reduced motion shows content immediately and removes clipping. Project titles are real case-study links with underline transitions; navigation uses thin transform-based underlines. Paragraphs, previews, skill lists and contact controls stay stationary. No ScrollTrigger import or second scroll system.

`index.html` supplies a matching startup shell using the same shared stylesheet and real content as React. Navigation, the black hero, Selected Work, and the lower reading sections retain their geometry while the desktop dashboard has a 560px placeholder; mobile starts collapsed. A small early script selects the static case-study template for direct project arrivals. The self-hosted Manrope font is preloaded without blocking text on font completion. Native menu/disclosure controls and contact links remain usable before the module arrives; React preserves their open states. The copy button stays disabled until its handler is available. With JavaScript entirely disabled, the homepage fallback still provides readable project, capability, résumé and contact information.

Keep the startup markup in sync when changing component copy or structure. The Vite HTML hook resolves fallback résumé anchors to the same bundled PDF used by navigation; no duplicate résumé asset is maintained. The startup shell is replaced normally by React, with no loading overlay or artificial wait. `src/startup.js` records whether the shell has already painted, its scroll position and open controls before replacement. The independently styled source-based WMS preview replaces only its reserved area.

Fine-pointer screens at least 768px wide and 400px high use one scroll decoration per page. On the homepage, a 1px charcoal SVG thread draws from below the hero to Contact, with gentle inward bends at section boundaries. Its control points remain at least 20px outside content and 12px inside the viewport; bends flatten when the gutter narrows. The underlying track uses 0.16 opacity, the drawn line 0.5, and its 5px leading point 0.75, with no glow. Section measurements update on resize and disclosure changes. Document progress drives the drawing through the existing exponential, substepped smoothing; anchor jumps, restored positions and layout changes synchronize without a long sweep. Geometry settings live in src/components/editorialThread.js.

Case studies retain the 320px maximum gutter rail with a near-black head and six followers. Trail spread is capped at 32px; only the head has a restrained 4px neutral shadow at 0.12 opacity. The head rests at 0.2 opacity and followers fade completely. Small/coarse-pointer layouts show a 1px progress line; reduced motion hides the decoration. One coordinated frame loop stops when settled or hidden. The clipped About portrait retains a maximum 4px follow-through. Shared motion settings live in src/components/scrollTrailMotion.js. WmsPreview itself remains static.

WmsPreview presents the dashboard, revenue chart, rankings, receivables, due-date monitoring, inventory summary, and the complete sidebar simultaneously. Its 8 sidebar sections contain 27 submenu entries; all groups remain expanded so every label can be seen by scrolling. Menus, date/filter displays, account presentation, and Sales Order presentation are plain text/SVG elements with no actions, not disabled buttons or fake links. The Sales Order presentation stays at the dashboard end instead of floating over portfolio content.

All values, dates, identities, documents, and customers are fictional and visibly labeled dummy data. No backend, authentication, source API, or production record is included. All menu labels are shown for presentation, including feature-gated entries; live visibility depends on permissions and enabled modules. Source correspondence and deliberate embedding differences are documented in `src/components/wms/README.md`. This is a source-based recreation, not a verified pixel-diff match against an authenticated live WMS.

Résumé download, real contact links, clipboard success/failure messages, skip link and keyboard focus remain intact. Portfolio focus is black; the WMS preview keeps its dark-orange inner-region focus, while its outer viewport inherits portfolio focus. Reduced motion leaves all content and controls available.

## Case-study reading pattern

The WMS case study tells one connected story: the document/balance/ledger model, a partial warehouse receipt, the dashboard, other workflows, then engineering details. A fictional 10-unit transfer with 6 received explains the paired stock changes without implying business results. The contribution remains exactly Full-stack development.

Use the same reading scale, measure and spacing as the homepage. The section index remains in normal flow on every viewport; only the main navigation is sticky. The receipt illustration sits beside the four workflow steps on desktop, then stacks on mobile. Capability explanations use flat columns. Three native engineering disclosures expose concise mechanism headings first and preserve the complete technical explanations beneath them. A final paragraph summarizes delivered capabilities without repeating a large promotional headline. The WMS preview stays static and scrollbar-free.

## Do's and Don'ts

- Preserve the real project structure and terminology; distinguish adapters from original source.
- Keep fixtures explicitly labeled, and never present demo revenue as real project outcomes.
- Preserve native scrolling, focusable preview scroll regions, and inactive dashboard controls.
- Keep WMS Jakarta scoped to the embedded dashboard; do not replace portfolio Manrope.
- Keep the portfolio white and monochrome with its inverted black hero; preserve the displayed project's original colors.
- Use one primary action per project, readable metadata, and progressive disclosure for dense source UI and engineering detail.
- Keep paragraphs stable; motion never hides or delays important information.
- Do not add WMS chart animation, filters, menu actions, or backend connections to this static preview.
- Do not restore the AP sculpture, substitute a screenshot, or copy private configuration/customer data.
