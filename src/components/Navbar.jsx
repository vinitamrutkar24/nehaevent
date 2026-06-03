import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (name) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    {
      name: 'Company',
      dropdown: [
        { name: 'About Us', href: '#about' },
        { name: 'Why Choose Us', href: '#why-us' },
        { name: 'Client Reviews', href: '#testimonials' }
      ]
    },
    {
      name: 'Services',
      dropdown: [
        { name: 'Our Services', href: '#services' },
        { name: 'Pricing Packages', href: '#packages' }
      ]
    },
    {
      name: 'Expos & Rentals',
      dropdown: [
        { name: 'Exhibition Hub', href: '#exhibitions' },
        { name: 'Infrastructure Rentals', href: '#rentals' }
      ]
    },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-luxury-black/90 backdrop-blur-md border-b border-gold/15 py-3 shadow-lg shadow-black/40'
        : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Brand Logo */}
          <a href="#home" className="flex items-center space-x-2 group shrink-0 select-none">
            <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center font-serif text-black font-extrabold text-lg shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300">
              NE
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-widest text-white group-hover:text-gold transition-colors duration-300 whitespace-nowrap">
                NEHA <span className="text-gold font-normal">EVENTS</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-gold/70 -mt-1 font-sans font-medium whitespace-nowrap">
                Luxury & Exhibitions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 font-sans text-xs uppercase tracking-widest text-gray-300 hover:text-gold transition-colors duration-300 focus:outline-none">
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-gold/80 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-52 rounded-xl glass-premium border border-gold/20 shadow-2xl py-2 z-50 bg-luxury-black/70 backdrop-blur-md"
                        >
                          {link.dropdown.map((subLink) => (
                            <a
                              key={subLink.name}
                              href={subLink.href}
                              className="block px-4 py-2.5 font-sans text-[10px] uppercase tracking-widest text-gray-300 hover:text-gold hover:bg-gold/5 transition-all duration-300 border-b border-gray-900/50 last:border-b-0"
                            >
                              {subLink.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs uppercase tracking-widest text-gray-300 hover:text-gold hover:text-glow transition-all duration-300 py-2"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA & Socials */}
          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <a
              href="https://instagram.com/nehaevents22"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gold transition-colors duration-300"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="tel:+919850791794"
              className="flex items-center space-x-2 border border-gold/30 hover:border-gold px-4 py-2 rounded-full glass-premium transition-all duration-300 group hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-gold group-hover:animate-bounce" />
              <span className="font-sans text-xs uppercase tracking-widest text-gold font-semibold whitespace-nowrap">
                +91 98507 91794
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-gold focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-40 w-80 bg-luxury-black/98 border-l border-gold/15 shadow-2xl p-6 transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center font-serif text-black font-extrabold text-base">
              NE
            </div>
            <span className="font-serif text-lg font-bold tracking-widest text-white">
              NEHA <span className="text-gold font-normal">EVENTS</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gold focus:outline-none"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-5 overflow-y-auto max-h-[calc(100vh-180px)] pr-2">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.name} className="flex flex-col">
                  <button
                    onClick={() => toggleMobileDropdown(link.name)}
                    className="w-full flex items-center justify-between font-sans text-sm uppercase tracking-widest text-gray-300 hover:text-gold border-b border-gray-800/40 pb-2 text-left focus:outline-none"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-4 h-4 text-gold/80 transition-transform duration-300 ${mobileDropdowns[link.name] ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileDropdowns[link.name] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden pl-4 mt-2 space-y-3"
                      >
                        {link.dropdown.map((subLink) => (
                          <a
                            key={subLink.name}
                            href={subLink.href}
                            onClick={() => setIsOpen(false)}
                            className="block font-sans text-xs uppercase tracking-widest text-gray-400 hover:text-gold py-1"
                          >
                            {subLink.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors duration-300 border-b border-gray-800/40 pb-2"
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-6 flex flex-col space-y-4">
            <a
              href="tel:+919850791794"
              className="flex items-center justify-center space-x-2 border border-gold/40 px-4 py-3 rounded-full bg-gold/5 text-gold font-semibold uppercase tracking-widest text-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 98507 91794</span>
            </a>

            <a
              href="https://instagram.com/nehaevents22"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center space-x-2 text-gray-400 hover:text-gold border border-gray-800 px-4 py-3 rounded-full text-xs uppercase tracking-widest"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @nehaevents22</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
