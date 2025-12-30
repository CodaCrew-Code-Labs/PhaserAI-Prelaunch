import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      id: 1,
      image: '/assets/img/trick-treat1-img.png',
      title: 'Quick Configuration',
      subtitle: 'Smart Setup Assistant',
      price: 'Minutes',
      description: 'Guided setup walks you through phonology rules in minutes, then AI handles validation automatically.',
      icon: 'bx-zap'
    },
    {
      id: 2,
      image: '/assets/img/trick-treat2-img.png',
      title: 'AI Rule Validation',
      subtitle: 'Automatic Phonology Check',
      price: 'Error-Free',
      description: 'Set your phonology rules once and let AI catch violations instantly - no more manual checking.',
      icon: 'bx-shield-check'
    },
    {
      id: 3,
      image: '/assets/img/trick-treat3-img.png',
      title: 'Semantic Collision Detection',
      subtitle: 'Prevent Duplicate Meanings',
      price: 'AI-Powered',
      description: 'Never accidentally create words with the same meaning again - our AI spots conflicts before you do.',
      icon: 'bx-brain'
    },
    {
      id: 4,
      image: '/assets/img/trick-treat4-img.png',
      title: 'Focus Mode',
      subtitle: 'Distraction-Free Interface',
      price: 'Pure Focus',
      description: 'Clean, minimal interface that keeps you in the creative flow without tabs, menus, or clutter.',
      icon: 'bx-target-lock'
    },
    {
      id: 5,
      image: '/assets/img/trick-treat5-img.png',
      title: 'Etymology Tracking',
      subtitle: 'Root Word Relationships',
      price: 'Connected',
      description: 'Automatically track which words derive from others, building a rich etymology web for your language.',
      icon: 'bx-git-branch'
    },
    {
      id: 6,
      image: '/assets/img/trick-treat6-img.png',
      title: 'Instant Export',
      subtitle: 'Your Data, Your Way',
      price: 'Portable',
      description: 'Export your lexicon in multiple formats instantly - never worry about vendor lock-in or data loss.',
      icon: 'bx-export'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="py-16" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2 
          className="text-2xl lg:text-3xl font-semibold text-title text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Why Conlangers Love PhaserAI
        </motion.h2>
        
        <motion.p 
          className="text-text text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Quick setup, powerful AI assistance, and intelligent validation - everything you need to build consistent, beautiful languages.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="relative bg-container-gradient rounded-2xl p-6 text-center overflow-hidden group cursor-pointer"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ borderRadius: '1rem' }}
              />

              <motion.div 
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                />
                
                <h3 className="text-title font-semibold text-lg mb-2">{feature.title}</h3>
                <span className="text-primary text-sm font-medium block mb-2">{feature.subtitle}</span>
                <span className="text-title font-bold text-lg block mb-3">{feature.price}</span>
                
                {/* Description */}
                <p className="text-text text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                  {feature.description}
                </p>
              </motion.div>

              {/* Animated button */}
              <motion.button 
                className="absolute bottom-0 -right-12 group-hover:right-0 bg-primary text-title p-3 transition-all duration-300"
                style={{ 
                  borderRadius: '0.25rem 0.25rem 0.75rem 0.25rem',
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.i 
                  className={`${feature.icon} text-xl`}
                  animate={{ rotate: [0, 360] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                ></motion.i>
              </motion.button>

              {/* Value proposition badge */}
              <motion.div
                className="absolute top-4 left-4 bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              >
                Time Saver
              </motion.div>

              {/* Particle effects */}
              <motion.div
                className="absolute top-2 right-2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
              
              <motion.div
                className="absolute bottom-4 left-4 w-1 h-1 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Value Proposition Summary */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="bg-container-gradient rounded-2xl p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-xl lg:text-2xl font-semibold text-title mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              The Result? More Time Creating, Less Time Debugging
            </motion.h3>
            
            <motion.p 
              className="text-text text-lg leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              Quick initial setup unlocks powerful AI assistance that catches errors, prevents conflicts, 
              and keeps your language consistent - so you can focus on the creative work you love.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              {[
                { stat: "5min", label: "Average Setup Time", icon: "bx-time" },
                { stat: "Zero", label: "Rule Violations", icon: "bx-shield-check" },
                { stat: "100%", label: "Focus on Creating", icon: "bx-brain" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.i 
                    className={`${item.icon} text-3xl text-primary mb-2 block`}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  ></motion.i>
                  <div className="text-2xl font-bold text-title mb-1">{item.stat}</div>
                  <div className="text-text text-sm">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, -15, 0],
                opacity: [0.2, 0.6, 0.2],
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
      </div>
    </section>
  );
};

export default Features;