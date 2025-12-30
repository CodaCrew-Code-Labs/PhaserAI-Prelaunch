import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { scrollToSection } from '../utils/scrollUtils';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-2xl lg:text-3xl font-semibold text-title mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Finally, A Conlang Tool <br /> Built for Language Creators
            </motion.h2>
            
            <motion.p 
              className="text-text leading-relaxed mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Spend minutes setting up your phonology rules, then let AI handle the heavy lifting. 
              PhaserAI transforms complex linguistic validation into intelligent assistance, 
              so you can focus on what matters - creating beautiful, consistent languages.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button 
                className="bg-primary text-title px-7 py-3 rounded-lg font-medium hover:bg-primary-alt transition-all duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('features')}
              >
                Learn More
                <motion.i 
                  className='bx bx-right-arrow-alt text-lg'
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                ></motion.i>
              </motion.button>
            </motion.div>

            {/* Feature highlights */}
            <motion.div 
              className="mt-12 grid grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { icon: 'bx-zap', text: 'Smart Setup', color: 'text-yellow-400' },
                { icon: 'bx-shield-check', text: 'Error Prevention', color: 'text-green-400' },
                { icon: 'bx-brain', text: 'AI-Powered', color: 'text-blue-400' },
                { icon: 'bx-heart', text: 'Made for Creators', color: 'text-red-400' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.i 
                    className={`${feature.icon} ${feature.color} text-xl`}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  ></motion.i>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img 
              src="/assets/img/about-img.png" 
              alt="About PhaserAI"
              className="w-64 lg:w-80 mx-auto object-contain"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-primary/30 rounded-full blur-sm"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/40 rounded-full blur-sm"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: 1,
              }}
            />

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;