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
      gsap.from(element, {
        opacity: 0.7, y: 20, duration: 0.55,
        delay: Math.min(delay, 0.12), ease: "power3.out", clearProps: "transform,opacity",
        scrollTrigger: { trigger: element, start: "top 83%", once: true },
      });
    });
    return () => media.revert();
  }, [delay]);
  return <div ref={revealRef} style={{ width }} className={className}>{children}</div>;
};

export default ScrollReveal;
