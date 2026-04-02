import { motion } from "framer-motion";

const ScrollReveal = ({ children, direction = "up", delay = 0, width = "fit-content", className = "" }) => {
  const hiddenState = {
    opacity: 0,
    x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
  };

  return (
    <motion.div
      initial={hiddenState}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: delay }}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;