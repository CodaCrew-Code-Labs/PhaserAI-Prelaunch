import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scrollUtils';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-green-800/90 to-yellow-800/90 backdrop-blur-sm' : 'bg-body-gradient'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 h-14 flex justify-between items-center max-w-6xl">
        <motion.div 
          className="flex items-center gap-2 text-title font-medium text-lg cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img 
            src="/assets/img/phaserai.png" 
            alt="PhaserAI Logo"
            className="w-8 h-8 object-contain"
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          PhaserAI
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {['home', 'about', 'features'].map((section) => (
              <li key={section}>
                <motion.a
                  href={`#${section}`}
                  className={`text-title font-black uppercase text-sm transition-colors duration-300 relative ${
                    activeSection === section ? 'text-title' : 'hover:text-text'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(section);
                  }}
                  whileHover={{ y: -2 }}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      className="absolute -bottom-3 left-1/2 w-1 h-1 bg-title rounded-full"
                      layoutId="activeIndicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      style={{ x: '-50%' }}
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>
          
          <motion.button 
            className="border-2 border-title bg-transparent text-title px-6 py-2 rounded-full font-medium hover:bg-title hover:text-green-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('newsletter')}
          >
            Start Creating
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-title text-xl"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <i className='bx bx-grid-alt'></i>
        </motion.button>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed top-0 left-0 w-full bg-container-gradient md:hidden transition-all duration-400 z-40 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ borderRadius: '0 0 1.5rem 1.5rem' }}
          initial={false}
          animate={{ y: isMenuOpen ? 0 : '-100%' }}
          transition={{ duration: 0.4 }}
        >
          <div className="pt-14 pb-8">
            <motion.button
              className="absolute top-2 right-3 text-title text-2xl"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              <i className='bx bx-x'></i>
            </motion.button>
            
            <ul className="flex flex-col items-center gap-6">
              {['home', 'about', 'features'].map((section, index) => (
                <motion.li 
                  key={section}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${section}`}
                    className="text-title font-black uppercase text-sm hover:text-text transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(section);
                    }}
                  >
                    {section}
                  </a>
                </motion.li>
              ))}
              
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                transition={{ delay: 0.3 }}
              >
                <button 
                  className="border-2 border-title bg-transparent text-title px-6 py-2 rounded-full font-medium hover:bg-title hover:text-green-800 transition-all duration-300"
                  onClick={() => scrollToSection('newsletter')}
                >
                  Start Creating
                </button>
              </motion.li>
            </ul>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;