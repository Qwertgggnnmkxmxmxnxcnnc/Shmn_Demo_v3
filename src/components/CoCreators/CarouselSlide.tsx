import React from 'react';

interface CarouselSlideProps {
  title: string;
  description: string;
  image: string;
  isActive: boolean;
}

const CarouselSlide = ({ title, description, image, isActive }: CarouselSlideProps) => {
  return (
    <div 
      className={`relative h-[600px] rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
      }`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-lg text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default CarouselSlide;