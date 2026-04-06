import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, input, [role="button"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const ringVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 1,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 0,
      scale: 0,
    }
  };

  return (
    <>
      {/* Hide on mobile devices, only show on screens that use a pointer */}
      <div className="hidden md:block pointer-events-none z-[9999] fixed top-0 left-0">
        
        {/* Outer Ring - Follows with a slight "spring" delay */}
        {/* <motion.div
          className="absolute w-8 h-8 rounded-full border-2 border-gray-400 mix-blend-difference"
          variants={ringVariants}
          animate={isHovering ? "hover" : "default"}
          transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.2 }}
        /> */}
        
        {/* Inner Dot - Tracks the mouse instantly */}
        <motion.div
          className="absolute w-2 h-2 bg-black rounded-full"
          variants={dotVariants}
          animate={isHovering ? "hover" : "default"}
          transition={{ type: "spring", stiffness: 800, damping: 25, mass: 0.05 }}
        />

      </div>
    </>
  );
};

export default CustomCursor;