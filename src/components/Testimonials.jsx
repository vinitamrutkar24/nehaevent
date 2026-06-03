import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/eventData';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-luxury-black/95 overflow-hidden border-t border-gold/10">
      <div className="glow-spot top-1/2 right-0 aurora-gold opacity-20" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 border border-gold/30 px-3 py-1 rounded-full bg-gold/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">Client Testimonials</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Voices of <span className="text-gold-gradient">Satisfaction</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light">
            Read stories of how we've brought creative, cinematic celebrations and successful expos to life.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative p-8 md:p-12 rounded-3xl glass-premium border border-gold/15 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-8 min-h-[300px]">
          
          {/* Quote Icon Overlay */}
          <div className="absolute top-6 right-8 text-gold/10 hidden md:block">
            <Quote className="w-24 h-24 stroke-[1px]" />
          </div>

          {/* Client Portrait */}
          <div className="flex-shrink-0 relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold shadow-lg shadow-gold/20">
              <img
                src={TESTIMONIALS[activeIndex].image}
                alt={TESTIMONIALS[activeIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-gold text-black rounded-full p-1.5 shadow-md">
              <Quote className="w-3.5 h-3.5 fill-black" />
            </div>
          </div>

          {/* Quote Details */}
          <div className="flex-grow flex flex-col justify-between h-full space-y-6 text-center md:text-left">
            <div>
              {/* Star Rating */}
              <div className="flex justify-center md:justify-start space-x-1 mb-4">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              {/* Quote text with slide transition */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="font-sans text-sm sm:text-base md:text-lg text-gray-300 font-light italic leading-relaxed"
                >
                  "{TESTIMONIALS[activeIndex].quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Author Name */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <p className="font-sans text-xs text-gold uppercase tracking-widest font-semibold mt-0.5">
                    {TESTIMONIALS[activeIndex].role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Nav Controls */}
          <div className="absolute bottom-6 right-8 flex space-x-3">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-gold/25 hover:border-gold text-gold hover:text-white bg-black/40 hover:bg-gold/10 transition-colors duration-300 focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-gold/25 hover:border-gold text-gold hover:text-white bg-black/40 hover:bg-gold/10 transition-colors duration-300 focus:outline-none"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Indicators (Dots) */}
        <div className="flex justify-center space-x-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-gold w-6 shadow-[0_0_8px_rgba(212,175,55,0.4)]' : 'bg-gold/30 hover:bg-gold/60'
              }`}
              aria-label={`Slide to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
