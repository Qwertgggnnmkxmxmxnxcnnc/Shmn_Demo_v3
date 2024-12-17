import React, { useState, useEffect } from 'react';
import AnimatedCarousel from './AnimatedCarousel';
import { coCreatorsSlides } from './CoCreatorsData';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coCreatorsSlides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? coCreatorsSlides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedCarousel
      currentSlide={currentSlide}
      onPrevious={previousSlide}
      onNext={nextSlide}
    />
  );
};

export default Carousel;