import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../cart/CartContext';
import { Product } from '../../pages/Products/types';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description?: string;
    images: string[];
  };
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const images = product.images.length > 0 ? product.images : [product.image];
  const { dispatch: cartDispatch } = useCart();

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300); // Wait for the animation to complete
  };

  const handleAddToCart = () => {
    cartDispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        quantity: 1
      } as Product & { quantity: number }
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Modal */}
      <div 
        className={`relative w-full max-w-6xl h-[90vh] mx-4 bg-black flex flex-col md:flex-row overflow-hidden rounded-t-[2rem] transition-all duration-500 ease-out transform ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 p-2 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Section */}
        <div className="relative w-full md:w-2/3 h-[50vh] md:h-full">
          <div className="relative h-full">
            <img
              src={images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/3 p-8 overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-2">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wider">
              {product.category}
            </p>
          </div>

          <div className="mb-8">
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              {product.description || 'Описание товара будет добавлено позже.'}
            </p>
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {product.price} ₽
              </span>
            </div>

            <button 
              onClick={handleAddToCart}
              className="w-full bg-white text-black py-4 text-base sm:text-lg md:text-xl font-medium hover:bg-white/90 transition-colors rounded-lg"
            >
              В корзину
            </button>
          </div>
        </div>

        {/* Pull indicator for mobile */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 md:hidden">
          <div className="w-12 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;