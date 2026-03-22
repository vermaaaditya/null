import React from 'react';
import Hero from '../components/Hero';
import DirectorDesk from '../components/DirectorDesk';
import Courses from '../components/Courses';
import InfoCards from '../components/InfoCards';
import NoticesStrip from '../components/NoticesStrip';
import TopAnnouncements from '../components/TopAnnouncements';
import SocialMediaPanel from '../components/SocialMediaPanel';

/**
 * Home Page Component
 * Main landing page with hero, director's desk, and other sections
 */
function Home() {
  return (
    <div>
      <TopAnnouncements />

      {/* Hero Section with Banner Image */}
      <Hero />

      {/* Director's Message Section */}
      <DirectorDesk />

      {/* Courses Section - Current and Upcoming Programs */}
      <Courses />

      {/* Information Cards: News, Notifications, Placements */}
      <InfoCards />

      <SocialMediaPanel />

      {/* Scrolling Notices Strip */}
      <NoticesStrip />
    </div>
  );
}

export default Home;
