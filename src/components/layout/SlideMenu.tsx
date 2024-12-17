import React from 'react';
import { X } from 'lucide-react';

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  'Шаманские бубны',
  'Посохи',
  'Кристаллы',
  'Благовония',
  'Ритуальные наборы',
  'Украшения',
  'Книги',
  'Карты Таро'
];

const SlideMenu = ({ isOpen, onClose }: SlideMenuProps) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div 
        className={`fixed top-0 left-0 w-full max-w-sm h-full bg-black z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
            <h2 className="text-xl font-medium">Категории</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:opacity-70 transition-opacity"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Categories List */}
          <div className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-1">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block px-6 py-3 text-lg hover:bg-white/5 transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="border-t border-white/10 p-6">
            <div className="space-y-3">
              <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                О нас
              </a>
              <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Доставка
              </a>
              <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideMenu;