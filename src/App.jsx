import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Departments from './pages/Departments';
import Academics from './pages/Academics';
import Facilities from './pages/Facilities';
import Placements from './pages/Placements';
import Alumni from './pages/Alumni';
import LifeAtSIET from './pages/LifeAtSIET';

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
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/life-at-siet" element={<LifeAtSIET />} />
      </Routes>

      {/* Footer with Links and Contact Info */}
      <Footer />
    </div>
  );
}

export default App;