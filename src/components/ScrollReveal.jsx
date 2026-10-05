import { m as Motion, useReducedMotion } from "framer-motion";

const ScrollReveal = ({ children, delay = 0, width = "fit-content", className = "" }) => {
  const reduceMotion = useReducedMotion();
  return (
    <Motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ width }}
      className={className}
    >
      {children}
    </Motion.div>
  );
};

export default ScrollReveal;
