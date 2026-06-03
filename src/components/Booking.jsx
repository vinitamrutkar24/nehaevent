import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, Instagram, QrCode, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date());

  const eventTypes = [
    "Birthday Event Planning",
    "Naming Ceremony Setup",
    "Baby Shower Decoration",
    "Balloon Decoration",
    "LED Screen Setup",
    "Sound & DJ Setup",
    "Photography & Videography",
    "Stage Decoration",
    "Wedding Decoration",
    "Corporate Events",
    "Exhibition Stall Management",
    "Celebrity Brand Events"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#D4AF37', '#FAF5EF', '#AA7C11', '#121212']
    });
  };

  const formatDateString = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePrevMonth = () => {
    setCurrentCalendarDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentCalendarDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleDateSelect = (date) => {
    const localDateStr = date.getFullYear() + '-' + 
      String(date.getMonth() + 1).padStart(2, '0') + '-' + 
      String(date.getDate()).padStart(2, '0');
    setFormData((prev) => ({ ...prev, eventDate: localDateStr }));
    setShowDatePicker(false);
  };

  // Generate calendar days grid
  const daysInMonth = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), 1).getDay();
  const prevMonthDays = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), 0).getDate();
  
  const calendarCells = [];
  
  // Padding from previous month
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    calendarCells.push({
      day: prevMonthDays - i,
      isCurrentMonth: false,
      date: new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() - 1, prevMonthDays - i)
    });
  }
  
  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarCells.push({
      day: i,
      isCurrentMonth: true,
      date: new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), i)
    });
  }
  
  // Grid completion padding (42 cells total)
  const remainingCells = 42 - calendarCells.length;
  for (let i = 1; i <= remainingCells; i++) {
    calendarCells.push({
      day: i,
      isCurrentMonth: false,
      date: new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + 1, i)
    });
  }

  const getEmailSubmitLink = () => {
    const subject = encodeURIComponent(`Neha Events Booking Inquiry - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Neha Events,\n\nI would like to request a quote with the following details:\n\n` +
      `- Client Name: ${formData.name}\n` +
      `- Mobile Number: ${formData.phone}\n` +
      `- Email Address: ${formData.email}\n` +
      `- Event Category: ${formData.eventType}\n` +
      `- Event Date: ${formData.eventDate}\n` +
      `- Estimate Budget: INR ${formData.budget}\n` +
      `- Theme / Specific Requirements:\n${formData.message}\n\n` +
      `Thank you!`
    );
    return `mailto:neha@nehaevent.in?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    triggerConfetti();
    window.location.href = getEmailSubmitLink();
    setSubmitted(true);
  };

  const getWhatsAppSubmitLink = () => {
    const text = encodeURIComponent(
      `Hello Neha Events,\n\nNew Booking Inquiry:\n- Name: ${formData.name}\n- Mobile: ${formData.phone}\n- Email: ${formData.email}\n- Event Type: ${formData.eventType}\n- Date: ${formData.eventDate}\n- Budget: ₹${formData.budget}\n- Message: ${formData.message}`
    );
    return `https://wa.me/919850791794?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-luxury-black/98 overflow-hidden border-t border-gold/10">
      <div className="glow-spot bottom-10 left-10 aurora-gold opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 border border-gold/30 px-3 py-1 rounded-full bg-gold/5 mb-4">
            <Mail className="w-3.5 h-3.5 text-gold" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold">Reservations & Inquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Begin Your <span className="text-gold-gradient">Celebration Plan</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400 font-light">
            Fill in your event specs below for a luxury quote. Alternatively, connect directly via phone or WhatsApp.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Cards, Map, QR Code */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+919850791794"
                className="p-4 sm:p-5 rounded-2xl glass-premium border border-gold/15 hover:border-gold/30 transition-all duration-300 flex items-center space-x-3 sm:space-x-4 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold group-hover:bg-gold-gradient group-hover:text-black transition-all duration-500 shrink-0">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-sans text-xs uppercase tracking-wider text-gray-400 font-bold">Call Us</h4>
                  <p className="font-sans text-sm text-white font-semibold mt-0.5 whitespace-nowrap">+91 98507 91794</p>
                </div>
              </a>

              <a
                href="mailto:neha@nehaevent.in"
                className="p-4 sm:p-5 rounded-2xl glass-premium border border-gold/15 hover:border-gold/30 transition-all duration-300 flex items-center space-x-3 sm:space-x-4 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] group"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center text-gold group-hover:bg-gold-gradient group-hover:text-black transition-all duration-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-sans text-xs uppercase tracking-wider text-gray-400 font-bold">Email Us</h4>
                  <p className="font-sans text-sm text-white font-semibold mt-0.5 whitespace-nowrap">neha@nehaevent.in</p>
                </div>
              </a>
            </div>

            {/* Google Map Placeholder (Styled) */}
            <div className="rounded-2xl border border-gold/15 overflow-hidden h-56 relative shadow-md bg-black/40">
              <iframe
                title="Neha Events Pune Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.03447396979!2d73.79292695574365!3d18.52461642874135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14cd54f27b1%3A0xf182887b8f9e0f6e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale invert opacity-75 contrast-125"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-luxury-black/90 px-3.5 py-1.5 rounded-lg border border-gold/20 flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span className="font-sans text-[10px] uppercase tracking-widest text-white font-semibold">HQ: Pune, Maharashtra</span>
              </div>
            </div>

            {/* QR Code Section (Pure CSS/SVG Mockup for QR Code Scanning) */}
            <div className="rounded-2xl glass-premium border border-gold/15 p-6 flex items-center gap-6 shadow-md">
              <div className="w-24 h-24 bg-white p-2 rounded-xl border border-gold/30 shrink-0 flex items-center justify-center relative">
                {/* Simulated luxury vector QR Code */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                  <path fill="currentColor" d="M0 0h30v30H0zm40 0h20v10H40zm30 0h30v30H70zm-70 40h10v20H0zm20 0h20v10H20zm30 0h10v10H50zm20 0h10v30H70zm10 0h20v10H80zm-40 20h20v10H40zm-40 20h30v30H0zm40 0h10v10H40zm10 10h10v20H50zm20 0h30v10H70zm20 10h10v10H90z" />
                  <path fill="currentColor" d="M10 10h10v10H10zm70 0h10v10H80zm-70 70h10v10H10z" />
                  <circle cx="50" cy="50" r="10" fill="#D4AF37" />
                </svg>
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-base flex items-center">
                  Scan to WhatsApp <QrCode className="w-4 h-4 text-gold ml-1.5" />
                </h4>
                <p className="font-sans text-xs text-gray-400 font-light mt-1.5 leading-relaxed">
                  Point your smartphone camera at this code to quickly message our planners with your ideas.
                </p>
                <a
                  href="https://wa.me/919850791794"
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-[10px] uppercase font-bold tracking-widest text-gold hover:text-white flex items-center mt-3"
                >
                  Click here instead <MessageSquare className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-premium border border-gold/15 p-8 md:p-10 shadow-2xl relative">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col text-left">
                        <label htmlFor="name" className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ex: Neha Sharma"
                          className="w-full bg-black/40 border border-gold/15 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans"
                        />
                      </div>
                      
                      <div className="flex flex-col text-left">
                        <label htmlFor="phone" className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Mobile Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Ex: +91 98507 91794"
                          className="w-full bg-black/40 border border-gold/15 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col text-left">
                        <label htmlFor="email" className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Ex: neha@nehaevent.in"
                          className="w-full bg-black/40 border border-gold/15 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans"
                        />
                      </div>

                      <div className="flex flex-col text-left">
                        <label htmlFor="eventType" className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Event Category *</label>
                        <select
                          id="eventType"
                          name="eventType"
                          required
                          value={formData.eventType}
                          onChange={handleInputChange}
                          className="w-full bg-black/40 border border-gold/15 focus:border-gold rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none transition-colors duration-300 font-sans cursor-pointer"
                        >
                          <option value="" disabled className="bg-luxury-black">Select an Event...</option>
                          {eventTypes.map((item, idx) => (
                            <option key={idx} value={item} className="bg-luxury-black text-white">{item}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col text-left relative">
                        <label htmlFor="eventDate" className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Event Date *</label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowDatePicker(!showDatePicker)}
                            className="w-full bg-black/40 border border-gold/15 focus:border-gold hover:border-gold/30 rounded-xl px-4 py-3 text-sm text-left focus:outline-none transition-colors duration-300 font-sans cursor-pointer flex items-center justify-between"
                          >
                            <span className={formData.eventDate ? "text-white" : "text-gray-400"}>
                              {formData.eventDate ? formatDateString(formData.eventDate) : "Select Event Date"}
                            </span>
                            <Calendar className="w-4 h-4 text-gold/80" />
                          </button>

                          {/* Hidden input to satisfy form required attribute validation */}
                          <input
                            type="hidden"
                            name="eventDate"
                            required
                            value={formData.eventDate}
                          />

                          <AnimatePresence>
                            {showDatePicker && (
                              <>
                                {/* Click outside overlay */}
                                <div className="fixed inset-0 z-40" onClick={() => setShowDatePicker(false)} />
                                
                                <motion.div
                                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute bottom-full left-0 mb-2 w-72 rounded-2xl glass-premium border border-gold/20 shadow-2xl p-4 z-50 bg-luxury-black/95 backdrop-blur-md"
                                >
                                  {/* Calendar Month Header */}
                                  <div className="flex items-center justify-between mb-4">
                                    <button
                                      type="button"
                                      onClick={handlePrevMonth}
                                      className="p-1 rounded-lg border border-gold/10 hover:border-gold/30 text-gold hover:bg-gold/10 transition-colors"
                                    >
                                      <ChevronLeft className="w-3.5 h-3.5" />
                                    </button>
                                    <span className="font-serif text-[11px] uppercase tracking-widest font-bold text-white">
                                      {currentCalendarDate.toLocaleString('default', { month: 'long' })} {currentCalendarDate.getFullYear()}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={handleNextMonth}
                                      className="p-1 rounded-lg border border-gold/10 hover:border-gold/30 text-gold hover:bg-gold/10 transition-colors"
                                    >
                                      <ChevronRight className="w-3.5 h-3.5" />
                                    </button>
                                  </div>

                                  {/* Days Header */}
                                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                                      <span key={day} className="font-sans text-[9px] uppercase font-bold text-gold/60">
                                        {day}
                                      </span>
                                    ))}
                                  </div>

                                  {/* Days Grid */}
                                  <div className="grid grid-cols-7 gap-1">
                                    {calendarCells.map((cell, idx) => {
                                      const isSelected = formData.eventDate === cell.date.toISOString().split('T')[0];
                                      const isToday = new Date().toDateString() === cell.date.toDateString();
                                      const isPastDate = cell.date < new Date(new Date().setHours(0,0,0,0));

                                      return (
                                        <button
                                          key={idx}
                                          type="button"
                                          disabled={isPastDate}
                                          onClick={() => handleDateSelect(cell.date)}
                                          className={`
                                            h-8 w-8 rounded-lg text-[10px] font-sans transition-all duration-200 flex items-center justify-center
                                            ${!cell.isCurrentMonth ? 'text-gray-600' : isPastDate ? 'text-gray-500/20 cursor-not-allowed' : 'text-gray-300'}
                                            ${isPastDate ? '' : 'hover:bg-gold/15 hover:text-white'}
                                            ${isSelected ? 'bg-gold-gradient text-black font-extrabold shadow-md shadow-gold/25' : ''}
                                            ${isToday && !isSelected ? 'border border-gold/40 text-gold font-bold' : ''}
                                          `}
                                        >
                                          {cell.day}
                                        </button>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              </>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="flex flex-col text-left">
                        <label htmlFor="budget" className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Estimate Budget (INR) *</label>
                        <input
                          type="number"
                          id="budget"
                          name="budget"
                          required
                          value={formData.budget}
                          onChange={handleInputChange}
                          placeholder="Ex: 20000"
                          className="w-full bg-black/40 border border-gold/15 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col text-left">
                      <label htmlFor="message" className="font-sans text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Specific Requirements / Theme Ideas *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Ex: Balloon garlands, red carpet path, traditional jhula setup, Marathi content, soft copy photo addon..."
                        className="w-full bg-black/40 border border-gold/15 focus:border-gold rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors duration-300 font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gold-gradient text-black font-extrabold uppercase tracking-widest text-xs shadow-lg shadow-gold/20 hover:scale-[1.01] transition-transform duration-300 flex items-center justify-center space-x-2 relative overflow-hidden shimmer-btn"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 flex flex-col items-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-gold/15 border-2 border-gold flex items-center justify-center text-gold shadow-lg shadow-gold/20">
                      <CheckCircle className="w-10 h-10 animate-bounce" />
                    </div>
                    
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white">Inquiry Lodged Successfully!</h3>
                      <p className="font-sans text-xs text-gray-400 mt-2 max-w-sm mx-auto leading-relaxed">
                        Thank you for booking with Neha Events. We will review your event budget and date specifications and contact you shortly.
                      </p>
                    </div>

                    <div className="pt-6 flex flex-col sm:flex-row gap-4 w-full justify-center">
                      <a
                        href={getEmailSubmitLink()}
                        className="px-6 py-3 rounded-full bg-gold-gradient text-black font-bold uppercase tracking-widest text-[10px] flex items-center justify-center space-x-1.5 transition-transform duration-300 hover:scale-105"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send via Email</span>
                      </a>

                      <a
                        href={getWhatsAppSubmitLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-full bg-[#25D366] text-black font-bold uppercase tracking-widest text-[10px] flex items-center justify-center space-x-1.5 transition-transform duration-300 hover:scale-105"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </a>
                      
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3 rounded-full border border-gold/30 hover:border-gold text-gold font-bold uppercase tracking-widest text-[10px] glass-premium transition-colors duration-300 hover:bg-gold/5"
                      >
                        New Inquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Call & WhatsApp Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <a
          href="https://wa.me/919850791794"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-black shadow-lg shadow-black/40 hover:scale-110 hover:shadow-[#25D366]/30 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-black" />
        </a>
      </div>
    </section>
  );
}
