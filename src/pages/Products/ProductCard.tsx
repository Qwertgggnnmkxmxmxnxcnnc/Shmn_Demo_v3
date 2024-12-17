import React, { useState } from 'react';
import { Product } from './types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = product.images || [product.image];

  return (
    <button 
      onClick={onClick}
      className="group text-left w-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Индикаторы изображений */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-4 sm:mt-6">
        <h3 className="text-sm sm:text-base md:text-lg xs:text-[5px] font-bold text-white uppercase tracking-wider">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm md:text-base xs:text-[5px] text-gray-400 uppercase tracking-wider mt-1">
          {product.category}
        </p>
      </div>
    </button>
  );
};

export default ProductCard;