import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Sparkles, Phone, MessageCircle, ChevronDown, ChevronUp, Camera } from 'lucide-react';
import { PACKAGES } from '../data/eventData';
import confetti from 'canvas-confetti';

export default function Packages() {
  const [activeTab, setActiveTab] = useState('birthday'); // 'birthday', 'naming', 'babyShower'
  const [expandedPackage, setExpandedPackage] = useState({ normal: false, ultra: false });

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#FAF5EF', '#AA7C11', '#121212']
    });
  };

  const getWhatsAppLink = (packageName, price) => {
    const text = encodeURIComponent(`Hi Neha Events, I am interested in booking the "${packageName}" priced at ₹${price}. Please provide more details.`);
    return `https://wa.me/919850791794?text=${text}`;
  };

  const handleBookNow = (packageName) => {
    triggerConfetti();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const messageField = document.getElementById('message');
      const eventTypeSelect = document.getElementById('eventType');
      
      if (eventTypeSelect) {
        if (packageName.toLowerCase().includes('birthday')) eventTypeSelect.value = 'Birthday Event Planning';
        else if (packageName.toLowerCase().includes('naming')) eventTypeSelect.value = 'Naming Ceremony Setup';
        else if (packageName.toLowerCase().includes('baby')) eventTypeSelect.value = 'Baby Shower Decoration';
      }

      if (messageField) {
        messageField.value = `I would like to book the: ${packageName}. Please confirm availability.`;
      }
      
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleExpand = (type) => {
    setExpandedPackage(prev => ({ ...prev, [type]: !prev[type] }));
  };

  const currentCategory = PACKAGES[activeTab];

  return (
    <section id="packages" className="relative py-24 bg-luxury-black overflow-hidden border-t border-gold/10">
      <div className="glow-spot top-1/3 right-1/4 aurora-champagne opacity-40" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 border border-gold/30 px-3 py-1 rounded-full bg-gold/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">Pricing Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Curated Celebration <span className="text-gold-gradient">Packages</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light">
            Transparent pricing packages redesigned from our catalog boards. Choose between our beautifully curated Normal plans or our signature cinematic Ultra plans.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center space-x-4 mb-16">
          {Object.entries(PACKAGES).map(([key, category]) => (
            <button
              key={key}
              onClick={() => {
                setActiveTab(key);
                setExpandedPackage({ normal: false, ultra: false });
              }}
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gold-gradient text-black shadow-lg shadow-gold/25'
                  : 'border border-gold/20 text-gold-champagne hover:border-gold/60 bg-black/35 hover:bg-gold/5'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Normal Package */}
          <div className="relative rounded-2xl glass-premium border border-gold/15 p-8 transition-all duration-500 hover:border-gold/30 shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{currentCategory.normal.name}</h3>
                <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">{currentCategory.normal.description}</p>
              </div>
            </div>
            
            <div className="mb-6 flex items-baseline">
              <span className="font-serif text-4xl font-extrabold text-white">₹12,000</span>
              <span className="font-sans text-xs text-gray-400 ml-2">/ event package</span>
            </div>

            {/* Included Features */}
            <div className="space-y-4 mb-8">
              <h4 className="font-sans text-xs uppercase tracking-widest text-gold font-bold mb-2">Features & Highlights</h4>
              
              {/* Show only top 5, expand for more */}
              {currentCategory.normal.features
                .slice(0, expandedPackage.normal ? currentCategory.normal.features.length : 5)
                .map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`font-sans text-xs ${feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              
              <button
                onClick={() => toggleExpand('normal')}
                className="flex items-center text-[10px] uppercase font-bold tracking-widest text-gold hover:text-white mt-4"
              >
                {expandedPackage.normal ? (
                  <>Show Less <ChevronUp className="w-3.5 h-3.5 ml-1" /></>
                ) : (
                  <>Expand Full List <ChevronDown className="w-3.5 h-3.5 ml-1" /></>
                )}
              </button>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <button
                onClick={() => handleBookNow(currentCategory.normal.name)}
                className="w-full py-3 rounded-full bg-transparent hover:bg-gold/10 border border-gold/30 hover:border-gold text-gold font-bold uppercase tracking-widest text-[10px] transition-all duration-300"
              >
                Book This Package
              </button>
              
              <a
                href={getWhatsAppLink(currentCategory.normal.name, "12,000")}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/35 hover:border-[#25D366] text-[#25D366] font-bold uppercase tracking-widest text-[10px] flex items-center justify-center space-x-1.5 transition-all duration-300"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Ultra Package */}
          <div className="relative rounded-2xl bg-black border-2 border-gold p-8 transition-all duration-500 shadow-[0_0_35px_rgba(212,175,55,0.15)] overflow-hidden">
            {/* Most Popular Tag */}
            <div className="absolute top-0 right-0 bg-gold text-black font-sans font-extrabold text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-md">
              Most Popular Plan
            </div>

            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2 flex items-center">
                  {currentCategory.ultra.name}
                  <Sparkles className="w-4 h-4 text-gold ml-2 animate-pulse" />
                </h3>
                <p className="font-sans text-xs text-gray-400 font-light leading-relaxed">{currentCategory.ultra.description}</p>
              </div>
            </div>
            
            <div className="mb-6 flex items-baseline">
              <span className="font-serif text-4xl font-extrabold text-gold text-glow">₹20,000</span>
              <span className="font-sans text-xs text-gray-400 ml-2">/ event package</span>
            </div>

            {/* Included Features */}
            <div className="space-y-4 mb-8">
              <h4 className="font-sans text-xs uppercase tracking-widest text-gold font-bold mb-2">Features & Highlights</h4>
              
              {/* Show only top 5, expand for more */}
              {currentCategory.ultra.features
                .slice(0, expandedPackage.ultra ? currentCategory.ultra.features.length : 5)
                .map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`font-sans text-xs ${feature.included ? 'text-white font-medium' : 'text-gray-600 line-through'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              
              <button
                onClick={() => toggleExpand('ultra')}
                className="flex items-center text-[10px] uppercase font-bold tracking-widest text-gold hover:text-white mt-4"
              >
                {expandedPackage.ultra ? (
                  <>Show Less <ChevronUp className="w-3.5 h-3.5 ml-1" /></>
                ) : (
                  <>Expand Full List <ChevronDown className="w-3.5 h-3.5 ml-1" /></>
                )}
              </button>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <button
                onClick={() => handleBookNow(currentCategory.ultra.name)}
                className="w-full py-3.5 rounded-full bg-gold-gradient text-black font-extrabold uppercase tracking-widest text-[10px] shadow-lg shadow-gold/20 hover:scale-[1.02] transition-transform duration-300"
              >
                Book Ultra Package
              </button>
              
              <a
                href={getWhatsAppLink(currentCategory.ultra.name, "20,000")}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-full bg-[#25D366] text-black font-extrabold uppercase tracking-widest text-[10px] flex items-center justify-center space-x-1.5 transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Extra Addon Section */}
        <div className="mt-16 rounded-2xl glass-premium border border-gold/20 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4 text-left">
            <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-white text-lg">Cinematic Photography Add-on</h4>
              <p className="font-sans text-xs text-gray-400 font-light">Get a professional shoot, full event coverage, and premium soft copies.</p>
            </div>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="font-sans text-xs text-gray-400 uppercase tracking-wider font-semibold">Extra Add-on:</span>
            <span className="font-serif text-2xl font-bold text-gold">₹1,500</span>
            <span className="font-sans text-[10px] text-gray-500">(Soft Copy Album)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
