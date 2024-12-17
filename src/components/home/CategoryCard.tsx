import React from 'react';

interface CategoryProps {
  category: {
    name: string;
    image: string;
  };
}

const CategoryCard = ({ category }: CategoryProps) => {
  return (
    <div className="flex-none w-[300px] snap-start">
      <div className="relative group cursor-pointer">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 flex items-end p-6 rounded-2xl">
          <h3 className="text-xl font-medium text-white text-shadow">
            {category.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;