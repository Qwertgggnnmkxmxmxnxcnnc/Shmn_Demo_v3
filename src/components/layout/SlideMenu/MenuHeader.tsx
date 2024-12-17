import React from 'react';
import { X } from 'lucide-react';

interface MenuHeaderProps {
  onClose: () => void;
}

const MenuHeader = ({ onClose }: MenuHeaderProps) => {
  return (
    <div className="h-20 flex items-center justify-between px-6">
      <h2 className="text-2xl font-serif text-white">Shamanic Staff</h2>
      <button 
        onClick={onClose}
        className="p-2 hover:opacity-70 transition-opacity"
      >
        <X className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

export default MenuHeader;