import { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onFinish }) => {
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [textExit, setTextExit] = useState(false);

  useEffect(() => {
  const textFadeTimer = setTimeout(() => {
    setTextExit(true); // start fading text & underline
  }, 1500); // fade text first

  const openCurtainsTimer = setTimeout(() => {
    setCurtainsOpen(true); // open curtains after text fades
  }, 2500);

  const finishTimer = setTimeout(() => {
    onFinish();
  }, 4000);

  return () => {
    clearTimeout(textFadeTimer);
    clearTimeout(openCurtainsTimer);
    clearTimeout(finishTimer);
  };
}, [onFinish]);


  return (
    <>
      <div className={`preloader-curtain left-curtain ${curtainsOpen ? 'open' : ''}`} />
      <div className={`preloader-curtain right-curtain ${curtainsOpen ? 'open' : ''}`} />

       <div className={`preloader-content ${textExit ? 'fade' : ''}`}>
           <div className={`preloader-title-mask ${textExit ? 'shrink-out' : ''}`}>
            <h1 className={`preloader-title ${textExit ? 'fade-out' : ''}`}>
                <span className="left-text">SM</span>
                <span className="right-text"> Marketing</span>
            </h1>
           </div>
      </div>

    </>
  );
};

export default Preloader;
