import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Category: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      id: 1,
      image: '/assets/img/category1-img.png',
      title: 'Smart Organization',
      description: 'Automatically categorize words by type - nouns, verbs, adjectives - without manual tagging.'
    },
    {
      id: 2,
      image: '/assets/img/category2-img.png',
      title: 'Etymology Mapping',
      description: 'Visualize word relationships and track derivations with zero effort on your part.'
    },
    {
      id: 3,
      image: '/assets/img/category3-img.png',
      title: 'Instant Search',
      description: 'Find any word in milliseconds with AI-powered semantic search that understands context.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2 
          className="text-2xl lg:text-3xl font-semibold text-title text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Everything You Need, <br /> Nothing You Don't
        </motion.h2>
        
        <motion.p 
          className="text-text text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Three core features that actually matter for conlang creation - no bloat, no confusion.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="text-center group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="mb-6 relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={category.image} 
                  alt={category.title}
                  className="w-32 h-32 mx-auto object-contain"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transform: 'scale(0.8)' }}
                />
              </motion.div>
              
              <motion.h3 
                className="text-h3 font-semibold text-title mb-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {category.title}
              </motion.h3>
              
              <motion.p 
                className="text-text text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {category.description}
              </motion.p>

              {/* Animated underline */}
              <motion.div
                className="w-0 h-0.5 bg-primary mx-auto mt-4 group-hover:w-12 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;