import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageTransition from '../transitions/PageTransition';

interface TransitionLayoutProps {
  children: React.ReactNode;
}

const TransitionLayout = ({ children }: TransitionLayoutProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeOut');

  useEffect(() => {
    if (location !== displayLocation) {
      setIsTransitioning(true);
      setTransitionStage('fadeIn');
      
      // Wait for the transition to complete before updating the displayed page
      setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeOut');
        
        // Reset transition state after the animation completes
        setTimeout(() => {
          setIsTransitioning(false);
        }, 1000);
      }, 1000);
    }
  }, [location, displayLocation]);

  return (
    <div className="relative">
      <PageTransition isActive={transitionStage === 'fadeIn'} />
      {children}
    </div>
  );
};

export default TransitionLayout;