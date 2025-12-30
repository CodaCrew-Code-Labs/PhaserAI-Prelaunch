import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="relative py-16 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.div 
            className="inline-flex items-center gap-2 text-title font-medium text-xl mb-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src="/assets/img/phaserai.png" 
              alt="PhaserAI Logo"
              className="w-8 h-8 object-contain"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            PhaserAI
          </motion.div>

          <motion.p 
            className="text-text mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Simple lexicon management <br /> for creative minds.
          </motion.p>

          {/* Copyright */}
          <motion.span 
            className="text-text-light text-sm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © PhaserAI. Built for conlangers, by conlangers.
          </motion.span>
        </motion.div>
      </div>

      {/* Decorative Images */}
      <motion.img 
        src="/assets/img/footer1-img.png" 
        alt=""
        className="absolute top-24 right-0 w-24 lg:w-32 opacity-80"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 0.8, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ 
          y: -10,
          rotate: 5,
          transition: { duration: 0.3 }
        }}
      />
      
      <motion.img 
        src="/assets/img/footer2-img.png" 
        alt=""
        className="absolute bottom-0 left-1/4 w-32 lg:w-40 opacity-80"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 0.8, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
        whileHover={{ 
          y: -10,
          rotate: -5,
          transition: { duration: 0.3 }
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Magical glow effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        style={{ transform: 'translate(-50%, -50%)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </footer>
  );
};

export default Footer;