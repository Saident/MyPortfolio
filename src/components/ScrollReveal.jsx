import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { settleWhenHidden, typographyMotion } from "./typographyMotion";

const ScrollReveal = ({ children, delay = 0, width = "fit-content", className = "" }) => {
  const revealRef = useRef(null);
  const contentRef = useRef(null);
  useLayoutEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const element = revealRef.current;
      let animation;
      let stopVisibility;
      const observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        observer.disconnect();
        if (document.hidden) return;
        animation = gsap.from(contentRef.current, {
          opacity: 0.9,
          y: matchMedia('(max-width: 767px)').matches ? typographyMotion.mobile.headingDistance : typographyMotion.heading.distance,
          duration: typographyMotion.heading.duration,
          delay: Math.min(delay, 0.06), ease: typographyMotion.ease, clearProps: "transform,opacity",
        });
        stopVisibility = settleWhenHidden(animation);
      }, { rootMargin: `0px 0px -${window.innerHeight * 0.15}px 0px` });
      observer.observe(element);
      return () => {
        observer.disconnect();
        stopVisibility?.();
        animation?.revert();
      };
    });
    return () => media.revert();
  }, [delay]);
  return <div ref={revealRef} style={{ width }} className={className}><div className="type-mask"><div className="type-line" ref={contentRef}>{children}</div></div></div>;
};

export default ScrollReveal;
