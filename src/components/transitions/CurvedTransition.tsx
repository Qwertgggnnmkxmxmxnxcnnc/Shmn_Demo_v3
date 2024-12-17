import React from 'react';

interface CurvedTransitionProps {
  isActive: boolean;
}

const CurvedTransition = ({ isActive }: CurvedTransitionProps) => {
  return (
    <div 
      className={`fixed inset-0 z-[100] pointer-events-none transition-all duration-1000 ease-in-out ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        className={`absolute inset-0 bg-white transition-transform duration-1000 ease-[cubic-bezier(0.87,0,0.13,1)] ${
          isActive ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{
          clipPath: 'path("M 0 0 L 100 0 L 100 100 Q 50 85, 0 100 L 0 0")',
          WebkitClipPath: 'path("M 0 0 L 100 0 L 100 100 Q 50 85, 0 100 L 0 0")'
        }}
      />
    </div>
  );
};

export default CurvedTransition;