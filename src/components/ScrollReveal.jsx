import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollReveal = ({ children, delay = 0, width = "fit-content", className = "" }) => {
  const revealRef = useRef(null);
  useLayoutEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const element = revealRef.current;
      let animation;
      const observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        observer.disconnect();
        animation = gsap.from(element, {
          opacity: 0.9, y: 8, duration: 0.45,
          delay: Math.min(delay, 0.06), ease: "power2.out", clearProps: "transform,opacity",
        });
      }, { rootMargin: `0px 0px -${window.innerHeight * 0.15}px 0px` });
      observer.observe(element);
      return () => {
        observer.disconnect();
        animation?.revert();
      };
    });
    return () => media.revert();
  }, [delay]);
  return <div ref={revealRef} style={{ width }} className={className}>{children}</div>;
};

export default ScrollReveal;
