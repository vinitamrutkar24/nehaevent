import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import Exhibitions from './components/Exhibitions';
import UpcomingExhibitions from './components/UpcomingExhibitions';
import Rentals from './components/Rentals';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-luxury-black text-gray-200">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Fullscreen Hero Cover */}
      <Hero />

      {/* Main Page Flow Sections */}
      <main>
        {/* About & Counter Statistics */}
        <About />

        {/* Dynamic Services Grid */}
        <Services />

        {/* Normal & Ultra Event Packages Grid */}
        <Packages />

        {/* Exhibition Domain Showcases */}
        <Exhibitions />

        {/* Upcoming Expos & Live Countdown Timers */}
        <UpcomingExhibitions />

        {/* Exhibition Infrastructure & Event Rental Services */}
        <Rentals />

        {/* Masonry Filterable Gallery & Lightbox */}
        <Gallery />

        {/* Why Choose Us & Premium Key Benefits */}
        <WhyChooseUs />

        {/* testimonials Client reviews slider */}
        <Testimonials />

        {/* Booking Form, Maps, Contact Options */}
        <Booking />
      </main>

      {/* Premium Footer with Instagram Grid */}
      <Footer />
    </div>
  );
}
