import { useRef } from 'react';
import './ImageSlider.css';
import bannerImage1 from '../Asset/bannerImg1.jpg';
import bannerImage2 from '../Asset/bannerImg2.jpg';
import bannerImage3 from '../Asset/bannerImg3.jpg';
import bannerImage4 from '../Asset/bannerImg4.jpg';
import bannerImage5 from '../Asset/bannerImg5.jpg';
import bannerImage6 from '../Asset/bannerImg6.jpg';

const images = [bannerImage1, bannerImage2, bannerImage3,bannerImage4,bannerImage5,bannerImage6]; // You can add more images

const ImageSlider = () => {
  const sliderRef = useRef();

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="slider-container">
      <button className="nav-arrow left" onClick={() => scroll('left')}>&#10094;</button>

      <div className="slider-wrapper" ref={sliderRef}>
        {images.map((img, index) => (
          <div key={index} className="slider-image-box">
            <img src={img} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </div>

      <button className="nav-arrow right" onClick={() => scroll('right')}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;
