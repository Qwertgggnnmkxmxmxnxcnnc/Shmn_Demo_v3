import { useState, useEffect } from 'react';

interface AnimatedTitleProps {
  show: boolean;
}

const words = [
  { first: 'SHAMANIC', second: 'STAFF' },
  { first: 'ТРИЕДИНСТВО', second: 'ПОСОХ' }
];

const AnimatedTitle = ({ show }: AnimatedTitleProps) => {
  const [firstWordIndex, setFirstWordIndex] = useState(0);
  const [secondWordIndex, setSecondWordIndex] = useState(0);
  const [isFirstTransitioning, setIsFirstTransitioning] = useState(false);
  const [isSecondTransitioning, setIsSecondTransitioning] = useState(false);

  useEffect(() => {
    if (!show) return;

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
        }, 1000);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [show]);

  return (
    <div className={`text-center transition-all duration-1000 ${
      show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <span className="text-sm uppercase tracking-wider text-gray-900 mb-6 block">
        Артефакты для раскрытия ресурсного состояния
      </span>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-[#b7985a]">
        <div className="space-y-2">
          <div className={`transition-opacity duration-500 ${isFirstTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <span className="block">{words[firstWordIndex].first}</span>
          </div>
          <div className={`transition-opacity duration-500 ${isSecondTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <span className="block">{words[secondWordIndex].second}</span>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default AnimatedTitle;