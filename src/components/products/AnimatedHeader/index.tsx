import React, { useRef } from 'react';
import { useInView } from '../../../hooks/useInView';
import Line from './Line';

const AnimatedHeader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { inView } = useInView(containerRef);

  const lines = [
    { text: 'Все товары', className: 'text-4xl font-bold text-white mb-4' },
    { 
      text: 'Откройте для себя нашу коллекцию уникальных артефактов,',
      className: 'text-lg text-gray-400'
    },
    { 
      text: 'созданных с глубоким пониманием древних традиций',
      className: 'text-lg text-gray-400'
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="text-center mb-16"
    >
      <div className="space-y-2">
        {lines.map((line, index) => (
          <div key={index} className={line.className}>
            <Line
              text={line.text}
              delay={index * 300} // Reduced delay between lines for smoother sequence
              inView={inView}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedHeader;