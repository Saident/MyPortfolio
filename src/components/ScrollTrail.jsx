import { useEffect, useRef } from 'react'
import { advanceTrail, clamp, createTrail, curveX, scrollProgress, scrollTrailSettings as settings } from './scrollTrailMotion'
import { editorialThreadPath } from './editorialThread'

export default function ScrollTrail({ variant = 'rail' }) {
  const root = useRef(null)
  useEffect(() => {
    if (typeof ResizeObserver === 'undefined' || typeof IntersectionObserver === 'undefined') return
    const element = root.current
    const rail = element.querySelector('.scroll-trail-rail')
    const dots = [...element.querySelectorAll('.scroll-trail-dot')]
    const progressBar = element.querySelector('.scroll-trail-progress')
    const thread = element.querySelector('.editorial-thread')
    const threadGroup = element.querySelector('.editorial-thread-group')
    const threadTrack = element.querySelector('.editorial-thread-track')
    const threadInk = element.querySelector('.editorial-thread-ink')
    const threadHead = element.querySelector('.editorial-thread-head')
    const sections = [...document.querySelectorAll('main > section')]
    const header = document.querySelector('.site-header')
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
    const measure = () => {
      height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
      if (thread && desktop.matches) {
        const bounds = sections.map(section => {
          const rect = section.getBoundingClientRect()
          return { top: rect.top + window.scrollY, bottom: rect.bottom + window.scrollY, right: rect.right, height: rect.height }
        })
        const hero = bounds[0]
        const contact = bounds.at(-1)
        const path = hero && contact ? editorialThreadPath({
          width: document.documentElement.clientWidth,
          // The thread follows the reading grid below the full-width hero.
          contentRight: Math.max(...bounds.slice(1).map(rect => rect.right)),
          start: hero.bottom + 8,
          end: contact.top + contact.height * 0.6,
          boundaries: bounds.slice(1).map(rect => rect.top),
        }) : ''
        threadTrack.setAttribute('d', path)
        threadInk.setAttribute('d', path)
        railHeight = path ? threadTrack.getTotalLength() : 0
        thread.dataset.ready = String(railHeight > 0)
        thread.style.setProperty('--thread-header-height', `${header?.offsetHeight ?? 0}px`)
        // Layout changes should not sweep the head through an obsolete path.
        synchronize = true
      } else if (rail) railHeight = Math.max(1, rail.clientHeight)
      geometryDirty = false
    }
    const paint = scroll => {
      if (thread && railHeight > 0) {
        const distance = clamp(state.points[0], 0, railHeight)
        const point = threadTrack.getPointAtLength(distance)
        threadGroup.setAttribute('transform', `translate(0 ${-scroll})`)
        threadInk.style.strokeDasharray = String(railHeight)
        threadInk.style.strokeDashoffset = String(railHeight - distance)
        threadHead.setAttribute('cx', point.x)
        threadHead.setAttribute('cy', point.y)
      } else if (rail) {
        state.points.forEach((point, index) => {
          const y = clamp(point, 0, railHeight)
          dots[index].style.transform = `translate3d(${curveX(y / railHeight)}px, ${y}px, 0)`
          dots[index].style.opacity = String(index === 0 ? 0.2 + state.opacity * 0.35 : state.opacity * (1 - index / dots.length) * 0.35)
        })
      }
      if (portrait) portrait.style.transform = portraitVisible ? `translate3d(0, ${state.visual}px, 0)` : ''
    }
    const tick = time => {
      frame = 0
      if (document.hidden || reduced.matches) return
      if (geometryDirty) measure()
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
      // An anchor jump is navigation, not a long animated sweep down the page.
      if (thread && Math.abs(scroll - lastScroll) > window.innerHeight * 0.75) synchronize = true
      if (synchronize) { state = createTrail(target); lastScroll = scroll; synchronize = false }
      const moving = advanceTrail(state, target, lastTime ? (time - lastTime) / 1000 : 1 / 60, scroll - lastScroll, portraitVisible)
      lastTime = time
      lastScroll = scroll
      paint(scroll)
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
    // Disclosures and font reflow can move section joins independently.
    if (thread) {
      sections.forEach(section => sizeObserver.observe(section))
      if (header) sizeObserver.observe(header)
    }
    const intersection = new IntersectionObserver(entries => {
      portraitVisible = entries[0].isIntersecting
      if (!portraitVisible && portrait) portrait.style.transform = ''
    })
    if (portrait) intersection.observe(portrait.parentElement)
    window.addEventListener('scroll', wake, { passive: true })
    window.addEventListener('resize', resize)
    window.addEventListener('pageshow', reset)
    if (thread) window.addEventListener('hashchange', reset)
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
      window.removeEventListener('hashchange', reset)
      document.removeEventListener('visibilitychange', visibility)
      reduced.removeEventListener('change', reset)
      desktop.removeEventListener('change', reset)
      if (portrait) { portrait.style.transform = ''; portrait.parentElement.style.removeProperty('--follow-displacement') }
    }
  }, [variant])
  return <div ref={root} className="scroll-trail" aria-hidden="true" style={{ '--trail-accent': settings.accentColor }}>
    {variant === 'thread' ? <svg className="editorial-thread" focusable="false">
      <g className="editorial-thread-group">
        <path className="editorial-thread-track" />
        <path className="editorial-thread-ink" />
        <circle className="editorial-thread-head" r="2.5" />
      </g>
    </svg> : <div className="scroll-trail-rail">
      <svg viewBox="0 0 14 1000" preserveAspectRatio="none"><path d="M7 0 C11 333.333 3 666.667 7 1000" /></svg>
      {Array.from({ length: settings.trailLength + 1 }, (_, index) => <span className="scroll-trail-dot" key={index} style={{ width: `${Math.max(1.5, 3.5 - index * 0.3)}px`, height: `${Math.max(1.5, 3.5 - index * 0.3)}px` }} />)}
    </div>}
    <div className="scroll-trail-progress" />
  </div>
}
