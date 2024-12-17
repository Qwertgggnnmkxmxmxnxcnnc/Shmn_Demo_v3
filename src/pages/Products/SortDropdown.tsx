import React, { useState } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const sortOptions = [
  { value: 'popular', label: 'По популярности' },
  { value: 'newest', label: 'Сначала новые' },
  { value: 'priceAsc', label: 'Сначала дешевые' },
  { value: 'priceDesc', label: 'Сначала дорогие' }
];

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors"
      >
        <SlidersHorizontal className="h-5 w-5" />
        <span>Сортировка</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl z-10">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              className="w-full px-4 py-2 text-left text-gray-400 hover:text-white hover:bg-gray-800 first:rounded-t-lg last:rounded-b-lg"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;