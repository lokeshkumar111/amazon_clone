import React, { useState, useEffect } from 'react';
import styles from './SlideShow.module.css';
import img1 from '../images/slider1.jpg';
import img2 from '../images/slider2.jpg';
import img3 from '../images/slider3.png';
import img4 from '../images/slider4.jpg';
import img5 from '../images/slider5.jpg';
import img6 from '../images/slider6.jpg';
import img7 from '../images/slider7.jpg';

const SlideShow = () => {
  let slideIndex = 0;
  const [currentSlide, setCurrentSlide] = useState(1);
  const plusSlides = (n) => {
    setCurrentSlide((prevSlide) => prevSlide + n);
  };

  const showSlide = (n) => {
    setCurrentSlide(n);
  };

  const autoAdvance = () => {
    const totalSlides = 7; 
    setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
  };
  useEffect(() => {
    const slideInterval = setInterval(autoAdvance, 2000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className={styles.slideshowContainer}>
      <div className={styles.mySlides}>
        <img src={img1} style={{ width: '100%' }} />
      </div>

      <div>
        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
    </div>
  );
};

export default SlideShow;
