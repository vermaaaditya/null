import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DirectorDesk from './components/DirectorDesk';
import Courses from './components/Courses';
import InfoCards from './components/InfoCards';
import NoticesStrip from './components/NoticesStrip';
import Footer from './components/Footer';

/**
 * Main App Component
 * Combines all sections to create the complete college website
 */
function App() {
  return (
    <div className="App">
      {/* Top Header with College Name and Logo */}
      <Header />
      
      {/* Sticky Navigation Bar */}
      <Navbar />
      
      {/* Hero Section with Banner Image */}
      <Hero />
      
      {/* Director's Message Section */}
      <DirectorDesk />
      
      {/* Courses Section - Current and Upcoming Programs */}
      <Courses />
      
      {/* Information Cards: News, Notifications, Placements */}
      <InfoCards />
      
      {/* Scrolling Notices Strip */}
      <NoticesStrip />
      
      {/* Footer with Links and Contact Info */}
      <Footer />
    </div>
  );
}

export default App;