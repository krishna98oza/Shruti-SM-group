import { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onFinish }) => {
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [textExit, setTextExit] = useState(false);

  useEffect(() => {
    // Trigger fade-out of text
    const textFadeTimer = setTimeout(() => {
      setTextExit(true);
    }, 1500);

    // Trigger curtain open AFTER a small delay so browser registers initial state
    const openCurtainsTimer = setTimeout(() => {
      requestAnimationFrame(() => setCurtainsOpen(true));
    }, 2500);

    // Finish preloader
    const finishTimer = setTimeout(() => {
      if (typeof onFinish === 'function') onFinish();
    }, 4500);

    return () => {
      clearTimeout(textFadeTimer);
      clearTimeout(openCurtainsTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <>
      <div className={`preloader-curtain ${curtainsOpen ? 'open' : ''}`} />
      <div className={`preloader-content ${textExit ? 'fade' : ''}`}>
        <div className={`preloader-title-mask ${textExit ? 'shrink-out' : ''}`}>
          <h1 className={`preloader-title ${textExit ? 'fade-out' : ''}`}>
            <span className="left-text">UK-</span>
            <span className="right-text">Digitals</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Preloader;
