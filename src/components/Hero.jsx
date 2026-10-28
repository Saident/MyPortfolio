import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDownIcon } from '@radix-ui/react-icons'
import { profile } from '../data/portfolio'

export default function Hero() {
  const root = useRef(null)
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(root.current.querySelector('h1'), {
        y: 8, opacity: 0.9, duration: 0.45, ease: 'power2.out', clearProps: 'transform,opacity',
      })
    })
    return () => media.revert()
  }, [])
  return (
    <section id="home" className="container hero" ref={root}>
      <p className="hero-identity">{profile.name}<span>{profile.role}</span></p>
      <h1>Thoughtful software.<br /><span className="muted">Built for real-world problems.</span></h1>
      <p className="hero-description">I build web applications, from the interfaces people use to the logic and data behind them.</p>
      <div className="hero-actions">
        <a href="#projects" className="button button-primary">View Projects <ArrowDownIcon aria-hidden="true" /></a>
        <a href="#contact" className="text-link">Contact Me</a>
      </div>
    </section>
  )
}
