import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

const CarouselControls = ({ 
  currentSlide, 
  totalSlides, 
  onPrevious, 
  onNext 
}: CarouselControlsProps) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <button
        onClick={onPrevious}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-gray-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      <button
        onClick={onNext}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
};

export default CarouselControls;