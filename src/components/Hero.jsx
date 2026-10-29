import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDownIcon } from '@radix-ui/react-icons'
import { profile } from '../data/portfolio'
import { settleWhenHidden, typographyMotion } from './typographyMotion'
import { startupState } from '../startup'

const contourPaths = [
  'M 460 530 C 620 402 910 510 1120 418 S 1308 254 1520 176',
  'M 530 548 C 720 388 960 476 1170 380 S 1358 211 1520 118',
  'M 610 566 C 800 374 1024 445 1220 340 S 1408 162 1520 60',
  'M 690 584 C 880 360 1088 412 1270 300 S 1460 112 1520 2',
]

export default function Hero() {
  const root = useRef(null)
  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      if (document.hidden || window.location.hash || window.scrollY > 0 || startupState.scrollY > 0 || startupState.navigationType === 'back_forward' || startupState.painted) return
      const element = root.current
      const compact = matchMedia('(max-width: 767px)').matches
      const motion = compact ? typographyMotion.mobile : typographyMotion.hero
      const sequence = gsap.timeline({ defaults: { ease: typographyMotion.ease, clearProps: 'transform,opacity' } })
      sequence
        .from(element.querySelector('.hero-identity'), { opacity: 0.85, duration: 0.28 }, 0)
        .from(element.querySelectorAll('.type-line'), { y: motion.distance, opacity: 0.9, duration: motion.duration, stagger: typographyMotion.hero.stagger }, 0.08)
        .from(element.querySelector('.hero-copy'), { opacity: 0.85, duration: 0.3 }, compact ? 0.4 : 0.5)
        .from(element.querySelectorAll('.hero-actions a'), { opacity: 0.8, y: 4, duration: 0.24, stagger: 0.08 }, compact ? 0.55 : 0.65)
      if (!compact) {
        sequence.fromTo(element.querySelectorAll('.hero-contours path'),
          { strokeDasharray: 1, strokeDashoffset: 1 },
          { strokeDashoffset: 0, autoRound: false, duration: 1.2, ease: 'power2.out', clearProps: 'strokeDasharray,strokeDashoffset' },
          0.08)
      }
      return settleWhenHidden(sequence)
    })
    return () => media.revert()
  }, [])
  return (
    <section id="home" className="hero" ref={root}>
      <svg className="hero-contours" viewBox="0 0 1440 480" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        {contourPaths.map(path => <path key={path} d={path} pathLength="1" />)}
      </svg>
      <div className="container hero-layout">
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
