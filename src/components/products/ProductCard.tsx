import React, { useState } from 'react';

interface ProductProps {
  product: {
    name: string;
    category: string;
    image: string;
    images: string[];
    price: number;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = product.images || [product.image];

  return (
    <div className="flex flex-col h-full min-h-[400px]">
      <div className="relative overflow-hidden rounded-2xl flex-grow aspect-w-4 aspect-h-5">
        <img
          src={images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Индикаторы изображений */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white uppercase tracking-wider overflow-hidden text-ellipsis whitespace-normal">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mt-1">
            {product.category}
          </p>
        </div>
        <p className="mt-2 text-sm sm:text-base md:text-lg">{product.price} ₽</p>
      </div>
    </div>
  );
};

export default ProductCard;