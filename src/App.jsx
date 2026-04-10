import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LifeAtSIET from './pages/LifeAtSIET';
import SubmenuRouteHandler from './pages/submenu/SubmenuRouteHandler';
import ChatbotWidget from './components/ChatbotWidget';
import AllNotices from './pages/AllNotices';
import Admission from './pages/Admission';
import TopLevelSections from './pages/TopLevelSections';
import Events from './pages/Events';
import StudentHelpline from './pages/StudentHelpline';
import ContentDifferences from './pages/ContentDifferences';
import Staff from './pages/Staff';
import Search from './pages/Search';

/**
 * Main App Component
 * Combines all sections to create the complete college website with routing
 */
function App() {
  return (
    <div className="App">
      {/* Top Header with College Name and Logo */}
      <Header />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:subSection" element={<SubmenuRouteHandler />} />
        <Route path="/departments/:subSection" element={<SubmenuRouteHandler />} />
        <Route path="/academics/:subSection" element={<SubmenuRouteHandler />} />
        <Route path="/facilities/:subSection" element={<SubmenuRouteHandler />} />
        <Route path="/placements" element={<Navigate to="/placements/placement-brochure" replace />} />
        <Route path="/placements/:subSection" element={<SubmenuRouteHandler />} />
        <Route path="/alumni/:subSection" element={<SubmenuRouteHandler />} />
        <Route path="/life-at-siet" element={<LifeAtSIET />} />
        <Route path="/life-at-siet/:subSection" element={<SubmenuRouteHandler />} />
        <Route path="/all-notices" element={<AllNotices />} />
        <Route path="/admission-form" element={<Admission />} />
        <Route path="/top-level-sections" element={<TopLevelSections />} />
        <Route path="/events" element={<Events />} />
        <Route path="/student-helpline" element={<StudentHelpline />} />
        <Route path="/content-differences" element={<ContentDifferences />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/search" element={<Search />} />
      </Routes>

      <ChatbotWidget />

      {/* Footer with Links and Contact Info */}
      <Footer />
    </div>
  );
}

export default App;
