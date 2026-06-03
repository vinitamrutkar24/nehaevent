import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, DollarSign, ShieldAlert, Clock, Sparkles } from 'lucide-react';
import { UPCOMING_EXHIBITIONS } from '../data/eventData';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hrs', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 bg-black/60 p-3.5 rounded-xl border border-gold/15">
      {timerItems.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <span className="font-serif text-lg sm:text-xl font-bold text-gold text-glow">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="font-sans text-[8px] uppercase tracking-wider text-gray-400 mt-0.5 font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function UpcomingExhibitions() {
  const handleRegister = (eventName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const messageField = document.getElementById('message');
      const eventTypeSelect = document.getElementById('eventType');
      
      if (eventTypeSelect) {
        eventTypeSelect.value = 'Exhibition Stall Management';
      }

      if (messageField) {
        messageField.value = `I want to register for passes / inquire about booking a space at the upcoming event: ${eventName}. Please send invitation details.`;
      }
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-luxury-black/98 overflow-hidden border-t border-gold/10">
      <div className="glow-spot top-1/2 right-0 aurora-gold opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 border border-gold/30 px-3 py-1 rounded-full bg-gold/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">Upcoming Showcases</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming <span className="text-gold-gradient">Expos & Events</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light">
            Don't miss our premier seasonal exhibitions. Register for VIP entry passes or book stall spaces before deadlines.
          </p>
        </div>

        {/* Expo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {UPCOMING_EXHIBITIONS.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden glass-premium border border-gold/15 flex flex-col md:flex-row shadow-xl group hover:border-gold/30 transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden flex-shrink-0">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-luxury-black via-luxury-black/60 to-transparent" />
                
                {/* Event Category Tag */}
                <div className="absolute top-4 left-4 bg-gold text-black font-sans font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  {event.category}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-gold transition-colors duration-300">
                    {event.name}
                  </h3>
                  <p className="font-sans text-xs text-gold font-medium uppercase tracking-widest mb-4">
                    {event.tagline}
                  </p>
                  
                  {/* Info Points */}
                  <div className="space-y-2.5 mb-6 text-gray-300">
                    <div className="flex items-center text-xs">
                      <Calendar className="w-4 h-4 text-gold flex-shrink-0 mr-2" />
                      <span>{event.dateString}</span>
                    </div>
                    
                    <div className="flex items-center text-xs">
                      <MapPin className="w-4 h-4 text-gold flex-shrink-0 mr-2" />
                      <span className="line-clamp-1">{event.venue}</span>
                    </div>
                    
                    <div className="flex items-center text-xs">
                      <DollarSign className="w-4 h-4 text-gold flex-shrink-0 mr-2" />
                      <span>Stall Space: <strong className="text-white">{event.stallPricing}</strong></span>
                    </div>
                    
                    <div className="flex items-center text-xs">
                      <Clock className="w-4 h-4 text-gold flex-shrink-0 mr-2" />
                      <span className="line-clamp-1">{event.vipPass}</span>
                    </div>
                  </div>
                </div>

                {/* Countdown & Action */}
                <div className="space-y-4 pt-4 border-t border-gold/10">
                  <span className="font-sans text-[9px] uppercase tracking-widest text-gold font-bold flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" /> Registration Countdown
                  </span>
                  
                  <CountdownTimer targetDate={event.date} />

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <button
                      onClick={() => handleRegister(event.name)}
                      className="w-full py-2.5 rounded-xl bg-gold-gradient text-black font-extrabold uppercase tracking-widest text-[9px] shadow-md hover:scale-[1.02] transition-transform duration-300"
                    >
                      Register Now
                    </button>
                    
                    <button
                      onClick={() => handleRegister(`${event.name} (Sponsorship Inquiry)`)}
                      className="w-full py-2.5 rounded-xl border border-gold/30 hover:border-gold text-gold font-bold uppercase tracking-widest text-[9px] glass-premium transition-colors duration-300 hover:bg-gold/5"
                    >
                      Sponsor Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
