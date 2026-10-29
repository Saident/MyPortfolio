// One entrance vocabulary; CSS handles hover and focus feedback.
export const typographyMotion = Object.freeze({
  ease: 'power3.out',
  hero: { distance: 32, duration: 0.78, stagger: 0.12 },
  heading: { distance: 16, duration: 0.6 },
  mobile: { distance: 24, duration: 0.65, headingDistance: 10 },
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
