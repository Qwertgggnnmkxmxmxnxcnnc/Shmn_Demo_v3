import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuSection from './MenuSection';
import { menuData } from './menuData';

interface MenuContentProps {
  onClose: () => void;
}

const MenuContent = ({ onClose }: MenuContentProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div className="flex-1">
      <div className="border-b border-white/10">
        <div className="py-2">
          {menuData.assortment.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.path)}
              className="w-full text-left px-6 py-3 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      
      <MenuSection title="Категории" items={menuData.categories} />
      <MenuSection title="Информация" items={menuData.explore} />
    </div>
  );
};

export default MenuContent;