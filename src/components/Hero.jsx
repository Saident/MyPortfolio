import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDownIcon } from '@radix-ui/react-icons'
import { profile } from '../data/portfolio'
import { settleWhenHidden, typographyMotion } from './typographyMotion'

export default function Hero() {
  const root = useRef(null)
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      if (document.hidden || window.location.hash) return
      const element = root.current
      const compact = matchMedia('(max-width: 767px)').matches
      const motion = compact ? typographyMotion.mobile : typographyMotion.hero
      const sequence = gsap.timeline({ defaults: { ease: typographyMotion.ease, clearProps: 'transform,opacity' } })
      sequence
        .from(element.querySelector('.hero-identity'), { opacity: 0.85, duration: 0.28 }, 0)
        .from(element.querySelectorAll('.type-line'), { y: motion.distance, opacity: 0.9, duration: motion.duration, stagger: typographyMotion.hero.stagger }, 0.08)
        .from(element.querySelector('.hero-copy'), { opacity: 0.85, duration: 0.3 }, compact ? 0.7 : 0.88)
        .from(element.querySelectorAll('.hero-actions a'), { opacity: 0.8, y: 4, duration: 0.24, stagger: 0.08 }, compact ? 0.84 : 1.02)
      return settleWhenHidden(sequence)
    })
    return () => media.revert()
  }, [])
  return (
    <section id="home" className="container hero" ref={root}>
      <div className="hero-layout">
        <div className="hero-heading">
          <p className="hero-identity">{profile.role}</p>
          <h1 className="hero-name">{profile.name.split(' ').map((word, index) => <span className="type-mask" key={word}><span className="type-line">{index > 0 && ' '}{word}</span></span>)}</h1>
        </div>
        <div className="hero-support">
          <div className="hero-copy">
            <p className="hero-statement">Thoughtful software.<br />Built for real-world problems.</p>
            <p className="hero-description">I build web applications, from the interfaces people use to the logic and data behind them.</p>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary">View Projects <ArrowDownIcon aria-hidden="true" /></a>
            <a href="#contact" className="text-link">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}
