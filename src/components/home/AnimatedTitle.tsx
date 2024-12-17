import React, { useState, useEffect } from 'react';

const words = [
  { first: 'SHAMANIC', second: 'STAFF' },
  { first: 'ТРИЕДИНСТВО', second: 'ПОСОХ' }
];

const AnimatedTitle = () => {
  const [firstWordIndex, setFirstWordIndex] = useState(0);
  const [secondWordIndex, setSecondWordIndex] = useState(0);
  const [isFirstTransitioning, setIsFirstTransitioning] = useState(false);
  const [isSecondTransitioning, setIsSecondTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // First word transition
      setIsFirstTransitioning(true);
      setTimeout(() => {
        setFirstWordIndex((prev) => (prev + 1) % words.length);
        setIsFirstTransitioning(false);
        
        // Second word transition after delay
        setTimeout(() => {
          setIsSecondTransitioning(true);
          setTimeout(() => {
            setSecondWordIndex((prev) => (prev + 1) % words.length);
            setIsSecondTransitioning(false);
          }, 500);
        }, 1000); // Delay before second word starts changing
      }, 500);
    }, 5000); // Shorter overall interval

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-6xl md:text-8xl font-bold mb-8 text-[#b7985a]">
      <div className="space-y-2">
        <div className={`transition-opacity duration-500 ${isFirstTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <span className="block">{words[firstWordIndex].first}</span>
        </div>
        <div className={`transition-opacity duration-500 ${isSecondTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <span className="block">{words[secondWordIndex].second}</span>
        </div>
      </div>
    </h1>
  );
};

export default AnimatedTitle;