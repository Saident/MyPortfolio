# WMS static dashboard preview

Source repository: `/home/tsi02/wms-mcc`, inspected read-only. No application boot,
secret configuration, database access, dependency installation, or source mutation.

The current user request replaces the earlier interactive adaptation with an
unclickable, source-matched dashboard and the full sidebar using fictional data.

## Source mapping

- `WmsPreview.jsx`: `resources/views/layouts/app.blade.php`, dashboard/index and
  dashboard/partials/{business-analytics,top-selling-products,receivables-overview,inventory-summary}.blade.php.
- `sidebarData.js`: all menu groups/items from `resources/views/layout/sidebar.blade.php`.
  Includes feature-gated rack/promotion labels as presentation, not a claim of
  enabled functionality. The real application filters menu visibility by access.
- `WmsIcon.jsx`: original SVG geometry from `layout/sidebar-icon.blade.php`.
- `WmsDonut.jsx`: JavaScript port of the rounded arc geometry from
  `components/dashboard-donut.blade.php`, without animations/tooltips/tab stops.
- `wms-preview.css`: scoped translation of the source shell, panels, sidebar,
  topbar and Blade utility dimensions. WMS compact desktop uses an 11px root;
  equivalent local pixel dimensions leave the portfolio's root font unaffected.
- `demoData.js`: synthetic revenue, products, document references, customers,
  receivables and inventory. No actual application records.
- `src/assets/fonts/plus-jakarta-sans-variable.ttf`: source font family, self-hosted;
  Google Fonts upstream `ofl/plusjakartasans/PlusJakartaSans[wght].ttf`.
  SIL Open Font License stored alongside it.

## Intentional embedding differences

All groups stay expanded to expose every menu without clicking; the live app
normally collapses inactive groups. Source routes, forms, authentication, filter
handlers, tooltip behavior, chart animation and backend calls are omitted.
Controls are plain text/SVG elements, not disabled buttons or fake links.

A bounded shell keeps the sidebar and dashboard scrollable as in the source.
At narrow widths, a labeled, keyboard-focusable horizontal viewport retains the
desktop composition rather than shrinking the text. Scrollbar tracks and thumbs are hidden throughout the portfolio and preview
at the user's request. Native scrolling still works with touch, mouse wheel
and keyboard. The preview adds no event listeners, observers or animation frames.

The Sales Order control is static and placed at the dashboard's end instead of
floating over the portfolio. Its dark foreground and a few orange icon/label
foregrounds use the source's accessible dark-orange option for readable contrast.
Public captions identify dummy data and inactive controls; fictional identity,
dates and amounts replace dynamic records. No source images/screenshots are used.

Source templates/CSS were inspected; a live authenticated WMS was not rendered.
This is a close source-based recreation, not a verified pixel-diff match against
an authenticated WMS screenshot.

## Verification

Production build and lint passed. Chromium checks at 360, 768, 1024 and 1440px:
no page horizontal overflow; zero links/buttons/inputs/selects/summary controls
inside the preview; 8 menu sections and 27 submenu entries; font loads locally.
Menu and filter clicks leave the page unchanged. No preview animations or runtime
exceptions. Keyboard focus/Home scrolls the sidebar; actual touch events pan the
mobile viewport. Both the home page and case-study preview were exercised.
Screenshots are in `.impeccable/review/wms-static-*.png`.
