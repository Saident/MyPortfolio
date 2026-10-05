import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";
import { profile } from '../data/portfolio';

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const timer = useRef(null);
  const feedbackRef = useRef(null);
  const footerRef = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(footerRef.current.children, {
        opacity: 0, y: 8, duration: 0.4, stagger: 0.05, ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: footerRef.current, start: 'top bottom', once: true },
      });
    });
    return () => media.revert();
  }, []);

  useLayoutEffect(() => {
    if (!feedback) return;
    const media = gsap.matchMedia();
    media.add({ normal: '(prefers-reduced-motion: no-preference)', reduced: '(prefers-reduced-motion: reduce)' }, (context) => {
      gsap.fromTo(feedbackRef.current, { opacity: 0, y: context.conditions.reduced ? 0 : 4 }, {
        opacity: 1, y: 0, duration: 0.18, ease: 'power2.out', clearProps: 'transform,opacity',
      });
    });
    return () => media.revert();
  }, [feedback]);

  const handleCopy = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setFeedback("Email copied.");
    } catch {
      setFeedback("Couldn't copy. Please select the email or use the email link.");
    }
    timer.current = setTimeout(() => setFeedback(""), 4000);
  };

  return (
    <>
      <section id="contact" className="container section contact-section">
        <ScrollReveal width="100%">
          <h2>Let's connect<span className="accent">.</span></h2>
          <p className="section-intro">Have a question about my work or a project to discuss? Send me a message.</p>
          <div className="email-row">
            <a href={`mailto:${profile.email}`} className="email-link">{profile.email}<span aria-hidden="true">↗</span></a>
            <button type="button" className="copy-button" onClick={handleCopy}>Copy email</button>
          </div>
          <p className="copy-feedback" role="status" ref={feedbackRef}>{feedback}</p>
          <div className="contact-links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={`tel:${profile.phoneLink}`}>{profile.phone}</a>
          </div>
        </ScrollReveal>
      </section>
      <footer className="container site-footer" ref={footerRef}><span>© {new Date().getFullYear()} {profile.name}</span><a href="#home">Back to top ↑</a></footer>
    </>
  );
};

export default Contact;
