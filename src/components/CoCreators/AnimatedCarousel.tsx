import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import CarouselSlide from './CarouselSlide';
import CarouselControls from './CarouselControls';
import { coCreatorsSlides } from './CoCreatorsData';

interface AnimatedCarouselProps {
  currentSlide: number;
  onPrevious: () => void;
  onNext: () => void;
}

const AnimatedCarousel = ({ currentSlide, onPrevious, onNext }: AnimatedCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { inView } = useInView(containerRef);

  return (
    <div className="relative" ref={containerRef}>
      <div className="overflow-hidden">
        <div 
          className={`flex transition-all duration-1000 ease-out ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {coCreatorsSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-none w-full"
              style={{
                transitionDelay: `${index * 150}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.95)',
                transition: 'all 1s ease-out'
              }}
            >
              <CarouselSlide
                {...slide}
                isActive={currentSlide === index}
              />
            </div>
          ))}
        </div>
      </div>
      
      <CarouselControls
        currentSlide={currentSlide}
        totalSlides={coCreatorsSlides.length}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
  );
};

export default AnimatedCarousel;