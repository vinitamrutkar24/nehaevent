import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, ShieldCheck, Zap, Coins, Users, Star, Palette, Layers, Calendar } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/eventData';

export default function WhyChooseUs() {
  const getIcon = (title) => {
    switch (title) {
      case "Professional Event Planning":
        return <Calendar className="w-5 h-5" />;
      case "Luxury Decoration Concepts":
        return <Sparkles className="w-5 h-5" />;
      case "Affordable Packages":
        return <Coins className="w-5 h-5" />;
      case "Premium Exhibition Management":
        return <Layers className="w-5 h-5" />;
      case "Celebrity Brand Vision":
        return <Star className="w-5 h-5" />;
      case "Experienced Team":
        return <Users className="w-5 h-5" />;
      case "Creative Custom Designs":
        return <Palette className="w-5 h-5" />;
      case "Complete Event Solutions":
        return <Zap className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 bg-luxury-black overflow-hidden border-t border-gold/10">
      <div className="glow-spot top-1/2 left-0 aurora-gold opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 border border-gold/30 px-3 py-1 rounded-full bg-gold/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">Why Choose Neha Events</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Uncompromising <span className="text-gold-gradient">Standards</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light">
            We merge luxury aesthetic designs with seamless field execution, making every celebration and business exhibition stress-free and spectacular.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative p-6 rounded-2xl glass-premium border border-gold/10 hover:border-gold/25 hover:bg-gold/5 transition-all duration-300 group shadow-md"
            >
              <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-5 group-hover:bg-gold-gradient group-hover:text-black transition-all duration-500">
                {getIcon(item.title)}
              </div>
              
              <h3 className="font-serif text-lg font-bold text-white mb-2.5 group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                {item.desc}
              </p>

              {/* Hover bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
