import React from 'react';
import BlackLogo from '../../../assets/images/Shmn_black.svg';

interface HeroImageProps {
  isLoaded: boolean;
}

const HeroImage = ({ isLoaded }: HeroImageProps) => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-[2.5rem] transform transition-all duration-2000 ease-out">
      <div 
        className={`w-full h-full transform transition-all duration-2000 ease-out ${
          isLoaded ? 'scale-100' : 'scale-[0.2]'
        }`}
      >
        <img
          src={BlackLogo}
          alt="Shamanic Staff Logo"
          className="w-full h-full object-contain rounded-[2.5rem]"
        />
      </div>
    </div>
  );
};

export default HeroImage;