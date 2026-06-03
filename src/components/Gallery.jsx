import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Play, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY } from '../data/eventData';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { label: 'All Work', value: 'all' },
    { label: 'Birthdays', value: 'birthday' },
    { label: 'Baby Shower', value: 'baby-shower' },
    { label: 'Naming Ceremony', value: 'naming-ceremony' },
    { label: 'Balloon Decor', value: 'balloon' },
    { label: 'LED & Stage', value: 'stage' },
    { label: 'Exhibitions', value: 'exhibitions' },
    { label: 'Weddings', value: 'wedding' }
  ];

  const getFilteredItems = () => {
    if (activeFilter === 'all') return GALLERY;
    
    // Group subcategories if necessary
    return GALLERY.filter(item => {
      if (activeFilter === 'stage') {
        return item.cat === 'stage' || item.cat === 'led-stage';
      }
      if (activeFilter === 'naming-ceremony') {
        return item.cat === 'naming-ceremony' || item.cat === 'baby-shower' || item.cat === 'naming'; // Naming items match baby-shower or traditional cradles
      }
      return item.cat === activeFilter;
    });
  };

  const filteredItems = getFilteredItems();

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="relative py-24 bg-luxury-black/95 overflow-hidden border-t border-gold/10">
      <div className="glow-spot bottom-10 left-10 aurora-champagne opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 border border-gold/30 px-3 py-1 rounded-full bg-gold/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">Event Highlights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio <span className="text-gold-gradient">Gallery</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light">
            A curated visual showcase of our premium decorations, luxury brand exhibitions, naming ceremonies, and baby showers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${
                activeFilter === cat.value
                  ? 'bg-gold-gradient text-black shadow-[0_0_15px_rgba(212,175,55,0.45)] scale-105'
                  : 'border border-gold/15 text-gold-champagne hover:border-gold/50 bg-black/45 hover:bg-gold/5 hover:scale-[1.02]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.src}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxIndex(idx)}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-gold/15 hover:border-gold hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-500 cursor-pointer group"
            >
              {/* Light Sweep Glare Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-20 pointer-events-none" />

              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <div className="flex items-end justify-between overflow-hidden">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block font-sans text-[8px] uppercase tracking-widest text-gold font-bold bg-gold/10 px-2 py-0.5 rounded border border-gold/20 mb-1.5">
                      {item.cat}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[10px] text-gray-300 font-light mt-1">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gold-gradient flex items-center justify-center text-black shadow-lg scale-75 group-hover:scale-100 rotate-[-45deg] group-hover:rotate-0 transition-all duration-500 shrink-0 ml-4">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-gold focus:outline-none p-2 bg-luxury-black/60 rounded-full border border-gold/20"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 text-white/70 hover:text-gold focus:outline-none p-3 bg-luxury-black/60 rounded-full border border-gold/20 cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 text-white/70 hover:text-gold focus:outline-none p-3 bg-luxury-black/60 rounded-full border border-gold/20 cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Display */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            >
              <img
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] rounded-xl border border-gold/30 shadow-2xl object-contain"
              />
              
              <div className="text-center mt-6 max-w-2xl px-4">
                <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-bold bg-gold/10 px-2.5 py-1 rounded border border-gold/20">
                  {filteredItems[lightboxIndex].cat}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-3">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-400 font-light mt-1">
                  {filteredItems[lightboxIndex].desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
