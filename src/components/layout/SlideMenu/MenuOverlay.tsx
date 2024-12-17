import React from 'react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay = ({ isOpen, onClose }: MenuOverlayProps) => {
  return (
    <div 
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 z-50 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    />
  );
};

export default MenuOverlay;