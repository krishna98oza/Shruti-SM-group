import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground'; // ✅
import Preloader from './components/Preloader'; // ✅
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ParticleBackground /> {/* ✅ Add this at the top-level, behind everything */}
      {!loading && (
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      )}
      <Preloader onFinish={() => setLoading(false)} /> {/* Overlay stays above */}
    </Router>
  );
}

export default App;
