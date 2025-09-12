import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import FeaturedSpeakers from './components/FeaturedSpeakers';
import PastHighlights from './components/PastHighlights';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <UpcomingEvents />
      <FeaturedSpeakers />
      <PastHighlights />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;