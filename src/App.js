import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';
import Preloader from './components/Preloader';

import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ParticleBackground />
      {!loading && (
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Home /> {/* ✅ Show everything in single page */}
        </div>
      )}
      <Preloader onFinish={() => setLoading(false)} />
    </Router>
  );
}

export default App;
