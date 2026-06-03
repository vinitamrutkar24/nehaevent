import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Sparkles, Send, Check } from 'lucide-react';

const INSTA_FEED = [
  '/images/img_41608204fc76aefc774d998364301060.jpg',
  '/images/img_fb8651f52961ae3aac220147820c62a5.jpg',
  '/images/img_3c776983cfa8d682b3027658bf69be37.jpg',
  '/images/img_3d11d4638991fa0a4b0561da2e352f53.jpg',
  '/images/img_883d5077ebb6382400e67a7c5baabd43.jpg',
  '/images/img_a41a740ffac3b4f6c40330b456ebe649.jpg'
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#050505] text-gray-400 border-t border-gold/10 overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="glow-spot bottom-0 left-0 aurora-gold opacity-15" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Logo & About (Column 1: 4/12 width) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center font-serif text-black font-extrabold text-lg shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                NE
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-widest text-white">
                  NEHA <span className="text-gold font-normal">EVENTS</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-gold/70 -mt-1 font-sans font-medium">
                  Luxury & Exhibitions
                </span>
              </div>
            </a>
            
            <p className="font-sans text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Pune's leading luxury event planners and exhibition organizers. We curate extraordinary weddings, birthdays, baby showers, and grand celebrity brand expositions.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/nehaevents22"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-luxury-black border border-gold/20 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors duration-300"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Column 2: 2/12 width) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-xs font-medium uppercase tracking-wider">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#packages" className="hover:text-gold transition-colors">Packages</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact details (Column 3: 3/12 width) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wider">Contact Us</h4>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-sans text-white font-medium">+91 98507 91794</span>
              </li>
              
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-sans text-white font-medium">neha@nehaevent.in</span>
              </li>
              
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-sans text-white leading-relaxed">Pune, Maharashtra, India</span>
              </li>
            </ul>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <h5 className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold mb-2.5">Join Private Newsletter</h5>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex border border-gold/20 rounded-lg overflow-hidden bg-black/40">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email..."
                    className="w-full bg-transparent px-3 py-2 text-xs text-white focus:outline-none font-sans"
                  />
                  <button type="submit" className="bg-gold text-black p-2 hover:bg-gold-dark transition-colors shrink-0">
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center space-x-2 text-xs text-green-400 font-semibold bg-green-950/20 border border-green-900/30 p-2 rounded-lg">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed successfully!</span>
                </div>
              )}
            </div>
          </div>

          {/* Instagram Feed Grid (Column 4: 3/12 width) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wider flex items-center">
              Instagram Feed <Instagram className="w-4 h-4 text-gold ml-1.5" />
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {INSTA_FEED.map((imgSrc, idx) => (
                <a
                  key={idx}
                  href="https://instagram.com/nehaevents22"
                  target="_blank"
                  rel="noreferrer"
                  className="relative aspect-square rounded-lg overflow-hidden border border-gold/10 group shadow-md"
                >
                  <img
                    src={imgSrc}
                    alt={`Neha Events Insta Setup ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gold/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
            <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest text-right">
              @nehaevents22
            </p>
          </div>
        </div>

        {/* Bottom Copyright Block */}
        <div className="border-t border-gold/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-sans text-xs text-gray-500 font-medium uppercase tracking-wider">
            &copy; {new Date().getFullYear()} NEHA EVENTS. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-1.5 text-xs text-gray-500">
            <span>Website designed with</span>
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>for elite event experiences.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
