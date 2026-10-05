import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import profileImage from "../assets/photo2-compressed.png";
import { profile } from '../data/portfolio';

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from(".hero-copy .eyebrow", { y: 12, opacity: 0, duration: 0.45 })
        .from(".hero-title-word", { yPercent: 105, duration: 0.75, stagger: 0.1 }, 0.1)
        .from(".hero-description", { y: 16, opacity: 0, duration: 0.6 }, 0.35)
        .from(".hero-actions > a", { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 }, 0.5)
        .from(".hero-portrait", { y: 20, opacity: 0, duration: 0.85 }, 0.2);
    }, heroRef);

    // Revert inline styles and timelines on unmount, StrictMode replay,
    // or when the visitor changes their reduced-motion preference.
    return () => media.revert();
  }, []);

  return (
    <section id="home" className="container hero" ref={heroRef}>
      <div className="hero-copy">
        <p className="eyebrow">Software developer</p>
        <h1 aria-label="Averil Primayuda">
          <span className="hero-title-line" aria-hidden="true"><span className="hero-title-word">Averil</span></span>
          <span className="hero-title-line" aria-hidden="true"><span className="hero-title-word">Primayuda<span className="accent">.</span></span></span>
        </h1>
        <p className="hero-description">Building web applications that connect thoughtful interfaces with dependable backend systems.</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">Explore my work <span aria-hidden="true">↗</span></a>
          <a href="#about" className="text-link">More about me <span aria-hidden="true">↘</span></a>
        </div>
      </div>
      <div className="hero-portrait">
        <img src={profileImage} alt="Averil Primayuda" width="1168" height="1563" fetchPriority="high" />
        <div className="portrait-caption"><span>{profile.role}</span><span>{profile.employer}</span></div>
      </div>
    </section>
  );
};

export default Hero;
