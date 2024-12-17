import React from 'react';

interface BlobTransitionProps {
  isActive: boolean;
}

const BlobTransition = ({ isActive }: BlobTransitionProps) => {
  return (
    <div 
      className={`fixed inset-0 z-[100] pointer-events-none transition-transform duration-1000 ease-in-out ${
        isActive ? 'scale-[200]' : 'scale-0'
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16">
        <div className="w-full h-full bg-black rounded-full" />
      </div>
    </div>
  );
};

export default BlobTransition;