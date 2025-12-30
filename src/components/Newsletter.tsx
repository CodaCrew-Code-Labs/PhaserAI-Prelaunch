import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { subscribeToMailerLite } from '../utils/mailerlite';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Optional: Add your MailerLite group ID here
  const MAILERLITE_GROUP_ID = process.env.REACT_APP_MAILERLITE_GROUP_ID;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setMessage('');

    try {
      const result = await subscribeToMailerLite(email, MAILERLITE_GROUP_ID);
      
      if (result.success) {
        setIsSubmitted(true);
        setMessage(result.message);
        setTimeout(() => {
          setIsSubmitted(false);
          setEmail('');
          setMessage('');
        }, 5000);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-16" ref={ref}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl lg:text-3xl font-semibold text-title mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Summon Early Access
          </motion.h2>
          
          <motion.p 
            className="text-text text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Be the first to conjure words when PhaserAI awakens from the digital realm.
          </motion.p>

          <motion.form 
            onSubmit={handleSubmit}
            className="bg-container-gradient p-4 rounded-xl flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-title placeholder-text px-4 py-3 rounded-lg border border-transparent focus:border-primary outline-none transition-all duration-300"
              required
              whileFocus={{ scale: 1.02 }}
            />
            
            <motion.button
              type="submit"
              className="bg-primary text-title px-6 py-3 rounded-lg font-medium hover:bg-primary-alt transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
              disabled={isSubmitted || isLoading}
            >
              <motion.span
                className="relative z-10"
                animate={isSubmitted ? { opacity: 0 } : { opacity: 1 }}
              >
                {isLoading ? 'Summoning...' : isSubmitted ? 'Summoned!' : 'Join the Waitlist'}
              </motion.span>
              
              {isSubmitted && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.i 
                    className='bx bx-check text-2xl'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  ></motion.i>
                </motion.div>
              )}

              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-lg"
                initial={{ scale: 0, opacity: 0 }}
                whileTap={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.form>

          {/* Success/Error message */}
          <motion.div
            className="mt-4 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={message ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {message && (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className={`flex items-center justify-center gap-2 ${
                  isSubmitted ? 'text-primary' : 'text-red-400'
                }`}
              >
                <motion.i 
                  className={`${isSubmitted ? 'bx bx-check-circle' : 'bx bx-error-circle'}`}
                  animate={isSubmitted ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 0.5 }}
                ></motion.i>
                {message}
              </motion.div>
            )}
          </motion.div>

          {/* Decorative elements */}
          <div className="relative mt-12">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/40 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${Math.random() * 20}px`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Magical sparkles */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                <i className='bx bx-star text-primary text-sm'></i>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;