import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Grid, Award, Eye, Users, FileText, CheckCircle, MessageSquare } from 'lucide-react';
import { EXHIBITIONS } from '../data/eventData';

export default function Exhibitions() {
  const [activeCategory, setActiveCategory] = useState('premium'); // 'public', 'premium'
  const [selectedStall, setSelectedStall] = useState(null);

  // Layout preview model
  const stalls = [
    { id: 'VIP-01', name: 'VIP Lounge', type: 'vip', status: 'Reserved' },
    { id: 'A01', name: 'Zari Couture', type: 'premium', status: 'Booked' },
    { id: 'A02', name: 'Luxury Diamond Stalls', type: 'premium', status: 'Booked' },
    { id: 'A03', name: 'Stall A03', type: 'premium', status: 'Available' },
    { id: 'B01', name: 'Fashion Boutique', type: 'public', status: 'Booked' },
    { id: 'B02', name: 'Stall B02', type: 'public', status: 'Available' },
    { id: 'B03', name: 'Handmade Crafts', type: 'public', status: 'Booked' },
    { id: 'B04', name: 'Stall B04', type: 'public', status: 'Available' },
    { id: 'F01', name: 'Main Food Stall', type: 'food', status: 'Booked' },
    { id: 'F02', name: 'Stall F02', type: 'food', status: 'Available' },
    { id: 'STAGE', name: 'Exhibition Stage', type: 'stage', status: 'Reserved' },
    { id: 'RECEPT', name: 'Welcome Desk', type: 'stage', status: 'Reserved' },
  ];

  const handleStallClick = (stall) => {
    setSelectedStall(stall);
  };

  const handleAction = (actionType) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const messageField = document.getElementById('message');
      const eventTypeSelect = document.getElementById('eventType');
      
      if (eventTypeSelect) {
        eventTypeSelect.value = 'Exhibition Stall Management';
      }

      if (messageField) {
        if (actionType === 'stall') {
          messageField.value = `I am interested in Booking a Stall${selectedStall ? ` (Specifically: ${selectedStall.id} - ${selectedStall.name})` : ''} at your upcoming exhibition. Please send stall layouts and pricing details.`;
        } else if (actionType === 'sponsor') {
          messageField.value = `I would like to inquire about Sponsorship Packages for Neha Events Exhibitions. Please share details.`;
        } else {
          messageField.value = `I would like to register for a VIP Pass for Neha Events Celebrity Luxury Exhibition. Please send registration codes.`;
        }
      }
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const data = EXHIBITIONS[activeCategory];

  return (
    <section id="exhibitions" className="relative py-24 bg-luxury-black overflow-hidden border-t border-gold/10">
      <div className="glow-spot top-10 left-10 aurora-gold opacity-30" />
      <div className="glow-spot bottom-10 right-10 aurora-champagne opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 border border-gold/30 px-3 py-1 rounded-full bg-gold/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">Exhibition Organizer</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Grand Scale <span className="text-gold-gradient">Exhibitions</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light">
            We build and manage massive public shopping bazaars and host exclusive high-end celebrity styling events.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-full bg-black/60 border border-gold/20 backdrop-blur-md">
            <button
              onClick={() => {
                setActiveCategory('public');
                setSelectedStall(null);
              }}
              className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === 'public'
                  ? 'bg-gold-gradient text-black shadow-lg'
                  : 'text-gray-400 hover:text-gold'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Public Shopping Expos</span>
            </button>
            
            <button
              onClick={() => {
                setActiveCategory('premium');
                setSelectedStall(null);
              }}
              className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === 'premium'
                  ? 'bg-gold-gradient text-black shadow-lg'
                  : 'text-gray-400 hover:text-gold'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Celebrity & Luxury Expos</span>
            </button>
          </div>
        </div>

        {/* Exhibition Section Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Details Panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-gold/15 h-64 shadow-xl">
              <img
                src={data.bgImage}
                alt={data.title}
                className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-1">{data.title}</h3>
                <p className="font-sans text-xs text-gold font-medium uppercase tracking-widest">{data.subtitle}</p>
              </div>
            </div>

            {/* List of Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.features.map((feature, idx) => (
                <div key={idx} className="p-4 rounded-xl glass-premium border border-gold/10 hover:border-gold/25 transition-colors duration-300">
                  <div className="flex items-center space-x-2 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    <h4 className="font-sans text-xs sm:text-sm font-bold text-white uppercase tracking-wider">{feature.name}</h4>
                  </div>
                  <p className="font-sans text-[11px] text-gray-400 font-light leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => handleAction('stall')}
                className="px-6 py-3 rounded-full bg-gold text-black font-bold uppercase tracking-widest text-[10px] shimmer-btn relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              >
                Book Your Stall
              </button>
              
              <button
                onClick={() => handleAction('sponsor')}
                className="px-6 py-3 rounded-full border border-gold/30 hover:border-gold text-gold font-bold uppercase tracking-widest text-[10px] glass-premium transition-all duration-300 hover:bg-gold/5"
              >
                Become Sponsor
              </button>
              
              {activeCategory === 'premium' && (
                <button
                  onClick={() => handleAction('vip')}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-gold/40 text-gold-champagne font-bold uppercase tracking-widest text-[10px] transition-all duration-300 hover:bg-white/10"
                >
                  VIP Registration
                </button>
              )}
            </div>
          </div>

          {/* Right Layout Preview Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl glass-premium border border-gold/15">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Grid className="w-4 h-4 text-gold" />
                  <h4 className="font-serif font-bold text-white text-base">Interactive Floor Preview</h4>
                </div>
                <span className="font-sans text-[9px] uppercase tracking-widest text-gold/80 font-bold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                  Concept Layout
                </span>
              </div>
              <p className="font-sans text-xs text-gray-400 font-light mb-6">
                Hover or click on any stall box below to check availability details. Booked stalls display their corresponding brands.
              </p>

              {/* Grid Layout */}
              <div className="grid grid-cols-4 gap-3 bg-black/40 p-4 rounded-xl border border-gray-800">
                {stalls.map((stall) => (
                  <button
                    key={stall.id}
                    onClick={() => handleStallClick(stall)}
                    className={`relative aspect-square rounded-lg flex flex-col items-center justify-center p-2 border transition-all duration-300 ${
                      stall.status === 'Booked' 
                        ? 'border-red-900/30 bg-red-950/15 text-red-400/80 hover:bg-red-950/30' 
                        : stall.status === 'Reserved'
                        ? 'border-gold/30 bg-gold/5 text-gold hover:bg-gold/15'
                        : 'border-green-900/40 bg-green-950/10 text-green-400 hover:bg-green-950/25 hover:border-green-400'
                    }`}
                  >
                    <span className="font-sans text-[9px] font-bold tracking-wider">{stall.id}</span>
                    <span className="font-sans text-[8px] uppercase tracking-tighter text-center mt-1 truncate w-full">
                      {stall.status === 'Booked' ? 'Booked' : stall.status === 'Reserved' ? 'Reserved' : 'Open'}
                    </span>
                  </button>
                ))}
              </div>

              {/* Floor Plan Legend */}
              <div className="flex justify-center space-x-6 mt-6">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-green-950 border border-green-500" />
                  <span className="font-sans text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Available</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-red-950 border border-red-900" />
                  <span className="font-sans text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Booked</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded bg-gold/10 border border-gold" />
                  <span className="font-sans text-[10px] text-gray-400 font-semibold uppercase tracking-wider">VIP / Stage</span>
                </div>
              </div>

              {/* Selection Info Drawer */}
              {selectedStall && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded-xl border border-gold/20 bg-gold/5 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <div className="text-left w-full">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-bold">{selectedStall.type} Stall</span>
                    <h5 className="font-serif text-base font-bold text-white">{selectedStall.name} ({selectedStall.id})</h5>
                    <p className="font-sans text-xs text-gray-400 mt-1">Status: <span className={selectedStall.status === 'Available' ? 'text-green-400 font-medium' : 'text-gold font-medium'}>{selectedStall.status}</span></p>
                  </div>
                  {selectedStall.status === 'Available' && (
                    <button
                      onClick={() => handleAction('stall')}
                      className="px-4 py-2 rounded-lg bg-gold text-black font-bold uppercase tracking-widest text-[9px] shrink-0 w-full sm:w-auto"
                    >
                      Book Stall Now
                    </button>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
