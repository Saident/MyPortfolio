# Portfolio handoff — current implementation

## Latest requested change

Removed AP / SOFTWARE CSS3D artwork, its interaction module and component styles. The hero is text-led. Replaced WMS screenshot presentation with a live frontend adaptation from `/home/tsi02/wms-mcc`. The source WMS repository was read only; no database, server, secrets or production records were accessed.

`src/components/wms/WmsPreview.jsx` ports actual dashboard Blade structures to React. `revenue-chart.js` is a byte-for-byte copy of the source chart module. The preview keeps WMS's light/orange palette and original Indonesian labels. Portfolio Manrope is reused to avoid adding another font download. See `src/components/wms/README.md` for exact source paths and checksum.

This is a focused dashboard demo, not the entire Laravel application. It includes revenue, stock and receivables summaries, dashboard/stock/receivables view buttons, a 7/14-day filter and an expandable revenue table. Fixture values are synthetic and clearly labeled. Stock and receivables snapshots are independent of the selected revenue period, matching the source templates. No unsupported CRUD controls or fake submission flows are exposed.

Original portrait, résumé, social links, contact methods, clipboard feedback, native scrolling and section IDs remain. Only WMS is published. No dependency or lockfile changes. AGENTS.md is unchanged. The WMS screenshot file remains in source assets but is neither imported nor included in the production output.

## Verification

- `npm run lint`, `npm run build`, `git diff --check`: passed.
- Local Chromium layout captures at 360, 768, 1024, 1440px: no horizontal overflow; portrait loaded. Current captures are in `.impeccable/review/`.
- WMS initial revenue total Rp34,400,000 changes to Rp58,200,000 for the 14-day fixture. Chart and expanded table both show 14 daily entries. View switching preserves selected period.
- Stock and receivables buttons select their corresponding panels. Native Tab focus is visible and Enter activates the focused button. Navigation touch targets are 44px tall. Mobile 14-day chart has no page overflow.
- Normal and reduced-motion renders checked. Chart wrapper cancels Web Animations on unmount or reduced-motion changes. No JavaScript exceptions recorded.
- `cmp` confirms chart module matches the original WMS source exactly. No AP sculpture or WMS image exists in rendered DOM.
- Impeccable detector produced advisory palette/type-ramp findings because embedded WMS styles differ from the portfolio palette. This is intentional source identity preservation; WMS colors and typography are documented separately.

## Performance and limits

Latest build: main JS 337.05 KB / 114.54 KB gzip; CSS 28.64 KB / 6.95 KB gzip. The prior 940.60 KB WMS PNG and optional sculpture chunk are no longer bundled. These are build sizes, not Lighthouse or runtime performance scores.

Local Chromium verification does not establish Safari/Firefox compatibility, screen-reader behavior or physical-device performance. No production deployment was performed. No external accounts were contacted. WMS has no supplied live/repository link or verified business outcomes; no links or metrics were invented.
