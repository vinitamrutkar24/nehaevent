import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data/eventData';

export default function Services() {
  
  const handleInquiry = (serviceTitle) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Find event type dropdown and select the matching one or set input
      const eventTypeSelect = document.getElementById('eventType');
      if (eventTypeSelect) {
        eventTypeSelect.value = serviceTitle;
      }
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 bg-luxury-black/95 overflow-hidden">
      {/* Decorative Glow */}
      <div className="glow-spot bottom-10 right-10 aurora-gold opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 border border-gold/30 px-3 py-1 rounded-full bg-gold/5 mb-4">
            <Icons.Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">What We Deliver</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Bespoke Event <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light">
            From intimate ceremonies to grand commercial exhibitions, we design and coordinate every detail to create seamless, luxurious experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = Icons[service.icon] || Icons.HelpCircle;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative h-[320px] rounded-2xl overflow-hidden glass-premium flex flex-col justify-end p-6 border border-gold/15 hover:border-gold/40 shadow-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] cursor-pointer"
              >
                {/* Background Image (Reveal on Hover) */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out scale-100 group-hover:scale-110 opacity-20 group-hover:opacity-35"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/70 to-transparent z-0" />

                {/* Floating Light Flare on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none transition-opacity duration-500" />

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4 group-hover:bg-gold-gradient group-hover:text-black group-hover:scale-110 transition-all duration-500 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-gray-400 font-light leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {service.description}
                  </p>

                  <button
                    onClick={() => handleInquiry(service.title)}
                    className="inline-flex items-center text-[10px] uppercase font-bold tracking-widest text-gold hover:text-white transition-colors duration-300"
                  >
                    Inquire Now <Icons.ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
