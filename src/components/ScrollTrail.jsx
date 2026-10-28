import { useEffect, useRef } from 'react'
import { advanceTrail, clamp, createTrail, curveX, scrollProgress, scrollTrailSettings as settings } from './scrollTrailMotion'

export default function ScrollTrail() {
  const root = useRef(null)
  useEffect(() => {
    if (typeof ResizeObserver === 'undefined' || typeof IntersectionObserver === 'undefined') return
    const element = root.current
    const rail = element.querySelector('.scroll-trail-rail')
    const dots = [...element.querySelectorAll('.scroll-trail-dot')]
    const progressBar = element.querySelector('.scroll-trail-progress')
    const portrait = document.querySelector('[data-scroll-follow]')
    portrait?.parentElement.style.setProperty('--follow-displacement', `${settings.maxVisualDisplacement}px`)
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    const desktop = matchMedia('(min-width: 768px) and (min-height: 400px) and (pointer: fine)')
    let frame = 0
    let lastTime = 0
    let lastScroll = window.scrollY
    let height = 0
    let railHeight = 1
    let geometryDirty = true
    let synchronize = true
    let portraitVisible = false
    let state = createTrail(0)
    const paint = () => {
      state.points.forEach((point, index) => {
        const y = clamp(point, 0, railHeight)
        dots[index].style.transform = `translate3d(${curveX(y / railHeight)}px, ${y}px, 0)`
        dots[index].style.opacity = String(index === 0 ? 0.35 + state.opacity * 0.65 : state.opacity * (1 - index / dots.length) * 0.65)
      })
      if (portrait) portrait.style.transform = portraitVisible ? `translate3d(0, ${state.visual}px, 0)` : ''
    }
    const tick = time => {
      frame = 0
      if (document.hidden || reduced.matches) return
      if (geometryDirty) {
        height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
        railHeight = Math.max(1, rail.clientHeight)
        geometryDirty = false
      }
      const scroll = window.scrollY
      const progress = scrollProgress(scroll, height, window.innerHeight)
      element.dataset.scrollable = String(height > window.innerHeight + 1)
      if (!desktop.matches) {
        progressBar.style.transform = `scaleX(${progress})`
        if (portrait) portrait.style.transform = ''
        lastScroll = scroll
        return
      }
      const target = progress * railHeight
      if (synchronize) { state = createTrail(target); lastScroll = scroll; synchronize = false }
      const moving = advanceTrail(state, target, lastTime ? (time - lastTime) / 1000 : 1 / 60, scroll - lastScroll, portraitVisible)
      lastTime = time
      lastScroll = scroll
      paint()
      if (moving) frame = requestAnimationFrame(tick)
    }
    const wake = () => {
      if (!frame && !document.hidden && !reduced.matches) { lastTime = 0; frame = requestAnimationFrame(tick) }
    }
    const resize = () => { geometryDirty = true; wake() }
    const reset = () => {
      cancelAnimationFrame(frame); frame = 0; lastTime = 0
      synchronize = true; geometryDirty = true
      if (portrait) portrait.style.transform = ''
      wake()
    }
    const visibility = () => {
      cancelAnimationFrame(frame); frame = 0; lastTime = 0
      // Resume from the current scroll position without replaying hidden movement.
      if (!document.hidden) reset()
    }
    const sizeObserver = new ResizeObserver(resize)
    sizeObserver.observe(document.body)
    sizeObserver.observe(document.documentElement)
    const intersection = new IntersectionObserver(entries => {
      portraitVisible = entries[0].isIntersecting
      if (!portraitVisible && portrait) portrait.style.transform = ''
    })
    if (portrait) intersection.observe(portrait.parentElement)
    window.addEventListener('scroll', wake, { passive: true })
    window.addEventListener('resize', resize)
    window.addEventListener('pageshow', reset)
    document.addEventListener('visibilitychange', visibility)
    reduced.addEventListener('change', reset)
    desktop.addEventListener('change', reset)
    wake()
    return () => {
      cancelAnimationFrame(frame)
      sizeObserver.disconnect(); intersection.disconnect()
      window.removeEventListener('scroll', wake)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pageshow', reset)
      document.removeEventListener('visibilitychange', visibility)
      reduced.removeEventListener('change', reset)
      desktop.removeEventListener('change', reset)
      if (portrait) { portrait.style.transform = ''; portrait.parentElement.style.removeProperty('--follow-displacement') }
    }
  }, [])
  return <div ref={root} className="scroll-trail" aria-hidden="true" style={{ '--trail-accent': settings.accentColor }}>
    <div className="scroll-trail-rail">
      <svg viewBox="0 0 14 1000" preserveAspectRatio="none"><path d="M7 0 C11 333.333 3 666.667 7 1000" /></svg>
      {Array.from({ length: settings.trailLength + 1 }, (_, index) => <span className="scroll-trail-dot" key={index} style={{ width: `${Math.max(2, 5 - index * 0.35)}px`, height: `${Math.max(2, 5 - index * 0.35)}px` }} />)}
    </div>
    <div className="scroll-trail-progress" />
  </div>
}
