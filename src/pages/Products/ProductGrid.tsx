import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from '../../components/products/ProductModal';
import { products } from './productsData';

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 gap-y-16 sm:gap-x-8 md:gap-x-12 lg:gap-x-16">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product.id)}
          />
        ))}
      </div>

      {selectedProduct !== null && (
        <ProductModal
          isOpen={true}
          onClose={() => setSelectedProduct(null)}
          product={products.find(p => p.id === selectedProduct)!}
        />
      )}
    </>
  );
};

export default ProductGrid;