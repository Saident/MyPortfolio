import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children, delay = 0, width = "fit-content", className = "" }) => {
  const revealRef = useRef(null);
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const element = revealRef.current;
      const project = element.querySelector('.project');
      const skill = element.querySelector('.skill-group');
      const contact = element.closest('#contact');
      const targets = project ? project.children : skill ? skill.children : contact ? element.children : [element];
      gsap.from(targets, {
        opacity: 0, y: project ? 24 : 14, duration: 0.65,
        delay: Math.min(delay, 0.12), stagger: project || skill || contact ? 0.055 : 0,
        ease: "power3.out", clearProps: "transform,opacity",
        scrollTrigger: { trigger: element, start: "top 92%", once: true },
      });
      const image = element.querySelector('.project-image');
      if (image) gsap.from(image, {
        clipPath: 'inset(0 0 12% 0)', duration: 0.8, ease: 'power3.out', clearProps: 'clipPath',
        scrollTrigger: { trigger: image, start: 'top 92%', once: true },
      });
    });
    return () => media.revert();
  }, [delay]);
  return <div ref={revealRef} style={{ width }} className={className}>{children}</div>;
};

export default ScrollReveal;
