import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-container-gradient p-3 rounded-lg text-title shadow-lg hover:shadow-xl z-50"
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ 
            opacity: 0.8, 
            scale: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20
            }
          }}
          exit={{ 
            opacity: 0, 
            scale: 0, 
            y: 100,
            transition: {
              duration: 0.3
            }
          }}
          whileHover={{ 
            opacity: 1, 
            scale: 1.1,
            y: -5,
            boxShadow: "0 10px 25px rgba(255, 107, 53, 0.3)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.i 
            className='bx bx-up-arrow-alt text-xl'
            animate={{ 
              y: [0, -3, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.i>

          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 bg-primary/20 rounded-lg"
            initial={{ scale: 0, opacity: 0 }}
            whileTap={{ scale: 1.5, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-primary/10 rounded-lg blur-md"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollUp;