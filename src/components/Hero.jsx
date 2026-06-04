import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Tag, ChevronDown, Sparkles } from 'lucide-react';

const HERO_IMAGES = [
  'images/img_0afeaeb52834530210d2551e77069a56.jpg', // Wedding
  'images/img_3e3a782881d6e004d12c9cdd87cc9434.jpg', // Exhibition Stage
  'images/img_04ed5250ab47ddce71660d90be59929b.jpg', // Luxury Brand Stall
  'images/img_3201b74e46150d1924ac23f04e8055e6.jpg'  // Luxury Stage Setup
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image Carousel (Ken Burns Effect) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 0.55 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGES[currentIdx]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-black/80" />
      </div>

      {/* Decorative Warm Spot Glows */}
      <div className="glow-spot top-1/4 left-1/4 aurora-gold" />
      <div className="glow-spot bottom-1/4 right-1/4 aurora-champagne" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 border border-gold/40 px-4 py-1.5 rounded-full bg-gold/10 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-champagne font-semibold">
            Pune's Premier Event & Exhibition Organizer
          </span>
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-wide leading-tight mb-6"
        >
          Creating <span className="text-gold-gradient text-glow">Extraordinary</span> Celebrations, <br className="hidden sm:inline" />
          Premium Exhibitions & Experiences
        </motion.h1>

        {/* Cinematic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-2xl mx-auto font-sans text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed mb-10"
        >
          Professional Event Management, Luxury Decorations, Public Exhibitions, Celebrity Brand Expos & Corporate Event Solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gold text-black font-semibold uppercase tracking-widest text-xs overflow-hidden shimmer-btn transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.45)]"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Book Your Event
          </a>

          <a
            href="#packages"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gold/40 hover:border-gold hover:border-gold-glow text-white font-semibold uppercase tracking-widest text-xs glass-premium transition-all duration-300 hover:bg-gold/5"
          >
            View Packages
          </a>

          <a
            href="#exhibitions"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 hover:border-gold/40 text-gold-champagne font-semibold uppercase tracking-widest text-xs backdrop-blur-md transition-all duration-300"
          >
            <Tag className="w-4 h-4 mr-2 text-gold" />
            Book Stall
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest text-gold/60 mb-2 font-sans font-medium">Scroll Down</span>
        <ChevronDown className="w-5 h-5 text-gold" />
      </motion.div>
    </section>
  );
}
