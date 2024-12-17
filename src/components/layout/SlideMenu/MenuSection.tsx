import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface MenuSectionProps {
  title: string;
  items: string[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left text-white hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-medium uppercase tracking-wider">{title}</span>
        <ChevronRight className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="py-2">
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-6 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuSection;