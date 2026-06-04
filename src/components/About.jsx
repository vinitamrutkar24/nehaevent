import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, CheckCircle, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND_STATS } from '../data/eventData';

function Counter({ value, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 25);

      const timer = setInterval(() => {
        start += Math.ceil(end / 40); // speed up counting
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-gold text-glow">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function About() {
  const expertise = [
    "Birthday Events Planning",
    "Naming Ceremony Setup",
    "Baby Shower Decoration",
    "Wedding Functions",
    "Corporate Seminars & AV",
    "Exhibition Management",
    "Premium Stall Management",
    "Celebrity Brand Exhibitions",
    "LED Screen & Stage Setup"
  ];

  return (
    <section id="about" className="relative py-24 bg-luxury-black overflow-hidden border-t border-gold/10">
      {/* Decorative Glow Spot */}
      <div className="glow-spot top-1/2 left-0 aurora-gold opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-gold/25 shadow-2xl group">
              <img
                src="images/img_0eb2023ed84dea81758f383e403b092a.jpg"
                alt="Luxury Event Setup"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 glass-premium rounded-2xl p-5 border border-gold/40 shadow-2xl flex items-center space-x-3 max-w-[220px]">
              <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-black">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm">Professional</h4>
                <p className="font-sans text-[11px] text-gold font-semibold uppercase tracking-wider">Event Specialists</p>
              </div>
            </div>
          </div>

          {/* Narrative Content Side */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-semibold">About Neha Events</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
              Positioning Elegance with <br />
              <span className="text-gold-gradient">Premium Execution</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-6">
              NEHA EVENTS stands at the pinnacle of luxury event management and professional exhibition organizing in India. 
              We curate spectacular celebration environments, state-of-the-art corporate structures, and grand public expositions that leave an everlasting mark.
            </p>

            <p className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-8">
              Whether organizing high-security celebrity brand launches, boutique fashion pavilions, 
              or celebrating family milestones with majestic ring decors and flower cradle setups, 
              our team brings precision and artistry to every square foot.
            </p>

            {/* Expertise Grid */}
            <h4 className="font-sans text-xs uppercase tracking-widest text-gold font-bold mb-4">Areas of Expertise</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {expertise.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-gray-300 hover:text-white hover:translate-x-1.5 transition-all duration-300 cursor-default">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="font-sans text-xs sm:text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Counter Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-20 pt-10 border-t border-gold/10">
          {BRAND_STATS.map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-xl glass-premium border border-gold/10 flex flex-col justify-center items-center hover:border-gold/35 hover:bg-gold/5 hover:scale-105 transition-all duration-300 shadow-md group">
              <Counter value={stat.number} suffix={stat.suffix} />
              <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 mt-2 text-center font-semibold group-hover:text-gold transition-colors duration-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
