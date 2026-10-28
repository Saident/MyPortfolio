# Warehouse Management System case study

Update: the subsequent user request replaced the interactive preview with a static source-matched dashboard and complete expanded sidebar. Current preview behavior and verification: `src/components/wms/README.md`. Earlier interaction checks below describe the previous revision, not the current static controls.

Route: `/projects/warehouse-management-system` (native links, no router dependency).

## Implemented presentation

- Expanded the existing project record in `src/data/portfolio.js`; only the published WMS remains visible.
- Featured project includes a purpose-led summary, three capabilities, verified technology tags and View Case Study action.
- `src/pages/ProjectCaseStudy.jsx` covers overview, operational context, the confirmed contribution **Full-stack development**, four supporting capabilities, a four-step warehouse transfer walkthrough, three engineering details, a static source-matched dashboard preview, and closing navigation.
- Reuses charcoal/cyan tokens, Manrope, ScrollReveal, one ScrollTrail and the existing source-adapted WmsPreview. No AP sculpture, new canvas, screenshot substitution or added dependency.
- The preview uses fictional demonstration data and says so. It now includes the original font, full sidebar, revenue, achievements, receivables due watch and inventory summary; all controls are inactive. It is an interface adaptation, not a live WMS or an original screenshot gallery.
- App selects the case-study route; Navbar links return to the home sections. `vercel.json` supplies exact rewrites for the route with/without a trailing slash.

## Verified source facts used

Receiving against outstanding quantities; internal warehouse transfers with stock changes on receipt; stock counting and approval; inventory movement reporting; warehouse-scoped access. Engineering copy describes database transactions and record locks, separate current balances and movement ledger entries, and centralized warehouse access checks.

Public technology tags: Laravel, PHP, MySQL, Blade and Tailwind CSS. MySQL is documented for development; production database is unknown. The earlier PostgreSQL project tag was unsupported and corrected. Evidence paths and caveats are kept in `docs/internal/wms-case-study-evidence.md`, outside public assets and the application imports.

WMS was inspected read-only. No WMS files, dependencies, data or services were changed; no secret files or business records were used. Source tests were read as evidence, not executed.

## Files for this addition

- `src/data/portfolio.js`
- `src/pages/ProjectCaseStudy.jsx` (new)
- `src/components/Projects.jsx`
- `src/components/Navbar.jsx`
- `src/App.jsx`
- `src/index.css`
- `vercel.json` (new)
- Internal evidence, this handoff and review artifacts.

Other dirty files belong to the earlier portfolio, source-preview and scroll-trail work in this session. No commit or deployment was performed.

## Validation performed

- `npm run lint`, `npm run build`, `git diff --check`: passed.
- `node --test tests/scrollTrail.test.mjs`: passed (existing motion checks).
- Chromium against the production build through Vite preview: 360, 768, 1024 and 1440px; no horizontal overflow at normal text size, one h1 and one ScrollTrail per case-study page. Desktop and mobile screenshots reviewed.
- Home project action, direct route, trailing slash, refresh, section anchors, mobile menu back to selected work and closing contact link: passed locally.
- Keyboard Tab reaches visible skip-link focus; résumé fetch returns HTTP 200/application/pdf. Preview view switching and 14-day table update work.
- Reduced-motion content remains visible; ordinary workflow heading reveal is visible. No runtime exceptions in the successful browser run.
- Actual touchstart/move/end gesture scrolls the case study. Synthetic high-level scrolling initially produced no movement, so it was not counted as proof.
- Enlarged text revealed a heading overflow; headings now wrap long words. Final confirmation at 200% root font size: viewport and document scroll width both 360px; no runtime exceptions.
- Public rendered text and built files scanned for internal repository/user paths and the internal evidence filename; none found.

Vercel rewrite configuration is included, but deployed-host direct navigation/refresh was not tested. No Lighthouse/performance scores or WMS runtime test results are claimed. Browser checks used emulation, not physical devices.

## Missing facts and assets

No approved public live demo/source URL, delivery dates, team size, module-specific personal ownership, adoption or measured outcomes were established. These are omitted. Contribution remains exactly Full-stack development.

If an actual screenshot gallery is later wanted, provide approved sanitized receiving, transfer receipt, stock-count approval and inventory movement-report captures using fictional records. The current source-adapted preview remains intentional and usable without them.

## Reading-flow refinement

The current case study leads with the stock/document/ledger relationship, then a clearly fictional partial receipt (10 expected, 6 received, 4 outstanding). The dashboard appears before the supporting capabilities and engineering details. Copy is shorter and more conversational; facts and the confirmed contribution are unchanged. Section IDs are preserved. The desktop index stays below the main navigation, and its links account for both headers.

Changed implementation files: `src/pages/ProjectCaseStudy.jsx`, `src/data/portfolio.js` (caseStudy only), and the case-study rules in `src/index.css`. No WMS preview or source application changes, dependencies, or new animation loop.

Validation for this revision: lint, production build and whitespace checks passed. Chromium at 360/768/1024/1440px showed no page overflow, one h1, four workflow steps, the fictional-example caption, no active WMS controls, and hidden native scrollbars. All five section links land clear of the navigation. Direct route refresh, contact return, visible keyboard skip-link focus, reduced-motion content, normal heading reveal, 200% text sizing and actual touch scrolling passed. No runtime exceptions were recorded. Captures: `.impeccable/review/wms-story-*.png`. Physical-device, deployed-host and performance measurements were not taken.
