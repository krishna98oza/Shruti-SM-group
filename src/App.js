import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ParticleBackground from './components/ParticleBackground';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import ExploreServices from './pages/ExploreServices';

function App() {
  const [loading, setLoading] = useState(true);
  const [showExplore, setShowExplore] = useState(false);

  return (
    <Router>
      <ParticleBackground />
      {!loading && (
        <div style={{ position: 'relative', zIndex: 1 }}>
          {showExplore ? (
            <ExploreServices setShowExplore={setShowExplore} />
          ) : (
            <Home setShowExplore={setShowExplore} />
          )}
        </div>
      )}
      <Preloader onFinish={() => setLoading(false)} />
    </Router>
  );
}

export default App;
