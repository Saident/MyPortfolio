// One entrance vocabulary; CSS handles hover and focus feedback.
export const typographyMotion = Object.freeze({
  ease: 'power3.out',
  hero: { distance: 24, duration: 0.7, stagger: 0.1 },
  heading: { distance: 16, duration: 0.6 },
  mobile: { distance: 16, duration: 0.7, headingDistance: 10 },
})

export function settleWhenHidden(animation) {
  const cleanup = () => document.removeEventListener('visibilitychange', onVisibility)
  const onVisibility = () => {
    if (document.hidden) { animation.progress(1); cleanup() }
  }
  document.addEventListener('visibilitychange', onVisibility)
  animation.eventCallback('onComplete', cleanup)
  return cleanup
}
