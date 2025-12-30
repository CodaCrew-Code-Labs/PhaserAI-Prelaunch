import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { scrollToSection } from '../utils/scrollUtils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slides = [
    {
      id: 1,
      image: '/assets/img/home1-img.png',
      title: 'The Lexicon "Keeper"',
      subtitle: 'Guardian of Words',
      mainTitle: 'CONJURE\nYOUR PERFECT\nLEXICON!',
      description: 'Meet PhaserAI, the hauntingly simple lexicon manager. No overwhelming tabs, no complex setups - just pure word creation magic that lets you focus on building your conlang.',
      badge: '#1 Simplest Conlang Tool'
    },
    {
      id: 2,
      image: '/assets/img/home2-img.png',
      title: 'Phonology & Rules',
      subtitle: 'Automatic validation magic',
      mainTitle: 'BANISH\nPHONOLOGY\nCHAOS',
      description: 'Set your phonology rules once and let PhaserAI automatically check if your new words fit. No more manual validation - the AI catches rule violations before they haunt your lexicon.',
      badge: '#2 Smart Rule Checking'
    },
    {
      id: 3,
      image: '/assets/img/home3-img.png',
      title: 'Collision Detection',
      subtitle: 'Duplicate meaning hunter',
      mainTitle: 'EXORCISE\nDUPLICATE\nMEANINGS',
      description: 'Never accidentally create words with duplicate meanings again. PhaserAI\'s spectral intelligence automatically detects semantic collisions and warns you instantly.',
      badge: '#3 Collision Prevention'
    }
  ];

  return (
    <section id="home" className="pt-20 pb-8" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          className="home-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[600px] py-8">
                {/* Image Section */}
                <motion.div 
                  className="relative order-1 lg:order-2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <div className="relative pt-8">
                    <motion.img 
                      src={slide.image} 
                      alt={slide.title}
                      className="h-64 lg:h-96 mx-auto object-contain"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Indicator */}
                    <motion.div 
                      className="absolute top-28 right-8 w-2 h-2 bg-title rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="absolute -top-12 right-1/2 w-px h-12 bg-title transform translate-x-1/2"></div>
                    </motion.div>
                    
                    {/* Details */}
                    <motion.div 
                      className="absolute right-2 bottom-0 text-right"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h4 className="text-small text-title font-medium">{slide.title}</h4>
                      <span className="text-smaller text-text">{slide.subtitle}</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  className="order-2 lg:order-1"
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                >
                  <motion.h3 
                    className="text-h3 text-title uppercase mb-4 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slide.badge}
                  </motion.h3>
                  
                  <motion.h1 
                    className="text-3xl lg:text-5xl font-black text-title leading-tight mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {slide.mainTitle.split('\n').map((line, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-text mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    {slide.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <motion.button 
                      className="bg-primary text-title px-7 py-3 rounded-lg font-medium hover:bg-primary-alt transition-all duration-300 inline-flex items-center gap-2"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection('newsletter')}
                    >
                      Join the Waitlist
                      <motion.i 
                        className='bx bx-right-arrow-alt text-lg'
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      ></motion.i>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Home;