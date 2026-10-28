import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDownIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'
import { profile } from '../data/portfolio'

export default function Hero() {
  const root = useRef(null)
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.hero-title-line', { y: 20, opacity: 0.65, duration: 0.6, stagger: 0.07, ease: 'power3.out', clearProps: 'all' })
      gsap.from('.hero-description, .hero-actions', { y: 16, opacity: 0.7, duration: 0.55, stagger: 0.08, ease: 'power3.out', clearProps: 'all' })
    }, root)
    return () => media.revert()
  }, [])
  return (
    <section id="home" className="container hero" ref={root}>
      <div className="hero-copy">
        <p className="hero-identity">{profile.name}<span>{profile.role}</span></p>
        <h1><span className="hero-title-line">Thoughtful software.</span><span className="hero-title-line">Built for <span className="muted">real-world</span></span><span className="hero-title-line muted">problems.</span></h1>
        <p className="hero-description">I build web applications that connect thoughtful interfaces with dependable backend systems.</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">View Projects <ArrowDownIcon aria-hidden="true" /></a>
          <a href="#contact" className="text-link">Contact Me <ArrowTopRightIcon aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-footnote"><span>Interfaces. Application logic. Data.</span><a href="#projects">Explore the work <ArrowDownIcon aria-hidden="true" /></a></div>
    </section>
  )
}
