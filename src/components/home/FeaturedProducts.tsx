import React from 'react';
import ProductCard from '../products/ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Sacred Staff',
      category: 'Ceremonial Tools',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80',
      price: 299
    },
    // Add more products as needed
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;