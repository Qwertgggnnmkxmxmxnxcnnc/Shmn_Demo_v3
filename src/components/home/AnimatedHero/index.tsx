import { useState, useEffect } from 'react';
import AnimatedTitle from './AnimatedTitle';
import AnimatedLogo from './AnimatedLogo';
import AnimatedNavbar from '../../layout/Navbar/AnimatedNavbar';
import TelegramButton from './TelegramButton';

interface AnimatedHeroProps {
  onMenuClick: () => void;
}

const AnimatedHero = ({ onMenuClick }: AnimatedHeroProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      setImageLoaded(true);
      setTimeout(() => setShowTitle(true), 600);
      setTimeout(() => setShowNavbar(true), 1200);
      setTimeout(() => setShowButton(true), 1000);
    };

    sequence();
  }, []);

  return (
    <>
      <AnimatedNavbar show={showNavbar} onMenuClick={onMenuClick} />
      
      <div className="min-h-screen text-gray-900 relative overflow-x-hidden">
        <div className="absolute inset-0 -z-10 w-full h-full bg-white"
          style={{ 
            backgroundImage: 'url(src/assets/images/ShmnGoldWhiteLong.svg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(4px)'
          }}>
        </div>
        <div className="mobile-container pt-32 relative">
          <div className="text-center mb-12">
            <AnimatedTitle show={showTitle} />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <AnimatedLogo isLoaded={imageLoaded} />
            <TelegramButton show={showButton} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedHero;