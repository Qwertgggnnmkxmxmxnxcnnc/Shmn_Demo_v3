import React from 'react';
import { X } from 'lucide-react';
import { categories, materials, priceRanges } from './filterData';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar = ({ isOpen, onClose }: FilterSidebarProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity z-40 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 p-6 overflow-y-auto transition-transform z-50 lg:relative lg:translate-x-0 lg:w-64 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <h2 className="text-xl font-medium text-white">Фильтры</h2>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-white mb-4">Категории</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                <input type="checkbox" className="rounded border-gray-600 text-amber-700 focus:ring-amber-700" />
                <span>{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-white mb-4">Материалы</h3>
          <div className="space-y-2">
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                <input type="checkbox" className="rounded border-gray-600 text-amber-700 focus:ring-amber-700" />
                <span>{material}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-lg font-medium text-white mb-4">Цена</h3>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.label} className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                <input type="radio" name="price" className="border-gray-600 text-amber-700 focus:ring-amber-700" />
                <span>{range.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;