import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { 
  RENTAL_EQUIPMENT, 
  RENTAL_UTILITIES, 
  RENTAL_SERVICES, 
  RENTAL_PACKAGES, 
  RENTAL_WHY 
} from '../data/eventData';
import confetti from 'canvas-confetti';

export default function Rentals() {
  const [activeTab, setActiveTab] = useState('equipment'); // 'equipment', 'utilities', 'services', 'packages'
  
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#D4AF37', '#FAF5EF', '#121212']
    });
  };

  const handleInquiry = (itemName, price) => {
    triggerConfetti();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const messageField = document.getElementById('message');
      const eventTypeSelect = document.getElementById('eventType');
      
      if (eventTypeSelect) {
        eventTypeSelect.value = 'Exhibition Stall Management';
      }

      if (messageField) {
        messageField.value = `I am interested in renting / booking: "${itemName}"${price ? ` (Rate: ₹${price})` : ''}. Please confirm availability and shipping details.`;
      }
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppLink = (itemName, priceText) => {
    const text = encodeURIComponent(
      `Hello Neha Events, I would like to inquire about renting: "${itemName}"${priceText ? ` (Rate: ${priceText})` : ''}. Please share availability.`
    );
    return `https://wa.me/919850791794?text=${text}`;
  };

  const getPackageWhatsAppLink = (pkgName, waText) => {
    return `https://wa.me/919850791794?text=${encodeURIComponent(waText)}`;
  };

  return (
    <section id="rentals" className="relative py-24 bg-luxury-black/95 overflow-hidden border-t border-gold/10">
      {/* Background Lighting */}
      <div className="glow-spot top-1/4 left-10 aurora-gold opacity-20" />
      <div className="glow-spot bottom-10 right-10 aurora-champagne opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 border border-gold/30 px-3 py-1 rounded-full bg-gold/5 mb-4">
            <Icons.Wrench className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">Infrastructure & Rentals</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Exhibition Infrastructure & <span className="text-gold-gradient">Event Rentals</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light">
            Everything you need for a successful exhibition, trade fair, corporate event, or promotional campaign under one roof.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {[
            { label: 'Stall & Digital Equipment', value: 'equipment', icon: 'LayoutGrid' },
            { label: 'Infrastructure Utilities', value: 'utilities', icon: 'Settings' },
            { label: 'Event & Venue Services', value: 'services', icon: 'Compass' },
            { label: 'Packaged Stall Bundles', value: 'packages', icon: 'Package' }
          ].map((tab) => {
            const TabIcon = Icons[tab.icon];
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.value
                    ? 'bg-gold-gradient text-black shadow-md'
                    : 'border border-gold/20 text-gold-champagne hover:border-gold/50 bg-black/40 hover:bg-gold/5'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* TABS 1: Display & Digital Equipment */}
            {activeTab === 'equipment' && (
              <motion.div
                key="equipment"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-12"
              >
                {Object.entries(RENTAL_EQUIPMENT).map(([key, group]) => (
                  <div key={key} className="space-y-6">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white border-l-2 border-gold pl-3">
                      {group.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {group.items.map((item, idx) => {
                        const Icon = Icons[item.icon] || Icons.Wrench;
                        const isQuote = item.price.toLowerCase().includes('quote');
                        
                        return (
                          <div 
                            key={idx}
                            className="p-5 rounded-2xl glass-premium border border-gold/15 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300 flex flex-col justify-between group h-52 relative overflow-hidden"
                          >
                            <div>
                              <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-4 group-hover:bg-gold-gradient group-hover:text-black transition-all duration-500">
                                <Icon className="w-5 h-5" />
                              </div>
                              <h4 className="font-sans text-sm font-bold text-white group-hover:text-gold transition-colors duration-300">
                                {item.name}
                              </h4>
                            </div>

                            <div className="mt-4">
                              <div className="flex items-baseline mb-4">
                                <span className="font-serif text-xl font-bold text-white">
                                  {isQuote ? item.price : `₹${item.price}`}
                                </span>
                                {!isQuote && (
                                  <span className="font-sans text-[10px] text-gray-500 ml-1">
                                    / {item.unit}
                                  </span>
                                )}
                              </div>

                              <div className="grid grid-cols-2 gap-2">
                                <button
                                  onClick={() => handleInquiry(item.name, isQuote ? null : item.price)}
                                  className="py-1.5 rounded-lg border border-gold/20 hover:border-gold text-gold font-sans font-bold text-[9px] uppercase tracking-wider text-center transition-colors"
                                >
                                  Get Quote
                                </button>
                                <a
                                  href={getWhatsAppLink(item.name, isQuote ? "Custom Quote" : `₹${item.price} / ${item.unit}`)}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="py-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/35 text-[#25D366] font-sans font-bold text-[9px] uppercase tracking-wider flex items-center justify-center space-x-1"
                                >
                                  <Icons.MessageCircle className="w-3 h-3" />
                                  <span>WhatsApp</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 2: Infrastructure Utilities */}
            {activeTab === 'utilities' && (
              <motion.div
                key="utilities"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {RENTAL_UTILITIES.map((item, idx) => (
                  <div 
                    key={idx}
                    className="relative rounded-2xl overflow-hidden border border-gold/15 glass-premium group h-64 flex flex-col justify-end p-6 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-300"
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-105 transition-transform duration-700" 
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/70 to-transparent" />
                    
                    <div className="relative z-10">
                      <h4 className="font-serif text-lg font-bold text-white group-hover:text-gold transition-colors duration-300 mb-1.5">{item.name}</h4>
                      <p className="font-sans text-[11px] text-gray-400 font-light leading-relaxed mb-4">{item.desc}</p>
                      
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleInquiry(`Utility Service: ${item.name}`, null)}
                          className="px-4 py-2 rounded-lg bg-gold text-black font-sans font-bold text-[9px] uppercase tracking-widest hover:bg-gold-dark transition-colors"
                        >
                          Get Quote
                        </button>
                        <a
                          href={getWhatsAppLink(`Utility Service: ${item.name}`, "Custom Quote")}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-lg border border-gold/25 text-gold font-sans font-bold text-[9px] uppercase tracking-widest hover:bg-gold/10 transition-colors flex items-center space-x-1"
                        >
                          <Icons.MessageCircle className="w-3.5 h-3.5" />
                          <span>Inquire</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 3: Event & Venue Services */}
            {activeTab === 'services' && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {Object.entries(RENTAL_SERVICES).map(([key, group]) => (
                  <div key={key} className="p-6 rounded-2xl glass-premium border border-gold/15 space-y-6">
                    <h3 className="font-serif text-lg font-bold text-white border-b border-gold/25 pb-3 flex items-center">
                      <Icons.Sparkles className="w-4 h-4 text-gold mr-2" />
                      {group.title}
                    </h3>
                    
                    <div className="space-y-4">
                      {group.items.map((item, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-black/40 border border-gold/10 hover:border-gold/25 transition-colors">
                          <h4 className="font-sans text-xs uppercase tracking-wider text-gold font-bold mb-1.5">{item.name}</h4>
                          <p className="font-sans text-[11px] text-gray-400 font-light leading-relaxed">{item.desc}</p>
                          
                          <div className="flex gap-3 mt-3.5">
                            <button
                              onClick={() => handleInquiry(`${group.title}: ${item.name}`, null)}
                              className="text-[9px] uppercase font-bold tracking-widest text-white hover:text-gold transition-colors"
                            >
                              Request Quote
                            </button>
                            <span className="text-gray-700">|</span>
                            <a
                              href={getWhatsAppLink(`${group.title}: ${item.name}`, "Custom Quotation")}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[9px] uppercase font-bold tracking-widest text-[#25D366] hover:text-white transition-colors flex items-center"
                            >
                              WhatsApp
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB 4: Complete Exhibition Setup Packages */}
            {activeTab === 'packages' && (
              <motion.div
                key="packages"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {RENTAL_PACKAGES.map((pkg, idx) => (
                  <div 
                    key={idx}
                    className={`p-8 rounded-2xl flex flex-col justify-between h-full relative transition-all duration-300 ${
                      idx === 2 
                        ? 'border-2 border-gold bg-black shadow-[0_0_25px_rgba(212,175,55,0.15)]' 
                        : 'border border-gold/15 glass-premium hover:border-gold/30'
                    }`}
                  >
                    {idx === 2 && (
                      <span className="absolute top-0 right-0 bg-gold text-black font-sans font-extrabold text-[8px] uppercase tracking-widest px-3 py-1 rounded-bl-xl shadow-md">
                        Premium Tier
                      </span>
                    )}

                    <div>
                      <h4 className="font-serif text-xl font-bold text-white mb-1.5">{pkg.name}</h4>
                      <p className="font-sans text-xs text-gray-400 font-light mb-6">{pkg.subtitle}</p>

                      <ul className="space-y-3.5 mb-8">
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2 text-xs">
                            <Icons.Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            <span className="font-sans text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-gold/10">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleInquiry(`Package Booking: ${pkg.name}`, null)}
                          className="w-full py-2.5 rounded-lg border border-gold/30 hover:border-gold text-gold font-sans font-bold text-[9px] uppercase tracking-wider transition-colors"
                        >
                          Book Stall
                        </button>
                        
                        <button
                          onClick={() => handleInquiry(`Package Custom Quote: ${pkg.name}`, null)}
                          className="w-full py-2.5 rounded-lg bg-transparent hover:bg-gold/10 border border-gold/20 text-white font-sans font-bold text-[9px] uppercase tracking-wider transition-colors"
                        >
                          Get Custom Quote
                        </button>
                      </div>

                      <a
                        href={getPackageWhatsAppLink(pkg.name, pkg.whatsappText)}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 rounded-lg bg-[#25D366] text-black font-sans font-extrabold text-[9px] uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all hover:scale-[1.02]"
                      >
                        <Icons.MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp Inquiry</span>
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Why Choose Us Stats Section */}
        <div className="mt-24 pt-16 border-t border-gold/10">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl font-bold text-white">Why Rent From Us?</h3>
            <p className="font-sans text-xs text-gray-400 font-light mt-1">Our customer service commitments for every booking contract.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RENTAL_WHY.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-black/30 border border-gold/10 hover:border-gold/25 transition-colors flex items-center space-x-3.5"
              >
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 border border-gold/20">
                  <Icons.CheckCircle className="w-5 h-5" />
                </div>
                <span className="font-serif text-sm font-semibold text-white tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic CTA Banner Block */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-gold/10 via-black to-gold/5 border border-gold/20 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="glow-spot top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aurora-gold opacity-15" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Planning an Exhibition, Corporate Event, or Family Function?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-300 font-light max-w-lg mx-auto">
              Get in touch with Neha Events for customized logistics, rental setups, and multi-channel promotional services.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <button
                onClick={() => handleInquiry("Complete Infrastructure Booking Inquiry", null)}
                className="px-6 py-3 rounded-full bg-gold text-black font-sans font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-gold/25 hover:scale-[1.02] transition-transform duration-300"
              >
                Book Equipment
              </button>
              
              <button
                onClick={() => handleInquiry("Custom Infrastructure Quotation Request", null)}
                className="px-6 py-3 rounded-full border border-gold/30 hover:border-gold text-gold font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-gold/5 transition-colors"
              >
                Request Custom Quote
              </button>
              
              <a
                href="https://wa.me/919850791794?text=Hi%20Neha%20Events%2C%20I%20am%20planning%20an%20exhibition%2Fevent%20and%20want%20to%20discuss%20infrastructure%20rentals."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] text-black font-sans font-bold text-[10px] uppercase tracking-widest flex items-center space-x-1.5 hover:scale-[1.02] transition-transform duration-300"
              >
                <Icons.MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
