// Capture the usable HTML shell before React replaces it. A slow connection
// should not make already-painted text jump back to its entrance position.
export const startupState = Object.freeze({
  painted: performance.getEntriesByName('first-contentful-paint').length > 0,
  scrollY: window.scrollY,
  navigationType: performance.getEntriesByType('navigation')[0]?.type,
  previewOpen: document.querySelector('#root .startup-disclosure')?.open,
  menuOpen: document.querySelector('#root .startup-menu')?.open ?? false,
  focusHref: document.activeElement?.closest('a[href]')?.getAttribute('href'),
  focusControl: document.activeElement?.matches('.startup-menu > summary') ? '.menu-toggle'
    : document.activeElement?.matches('.startup-disclosure > summary') ? '.preview-disclosure > summary' : null,
})
