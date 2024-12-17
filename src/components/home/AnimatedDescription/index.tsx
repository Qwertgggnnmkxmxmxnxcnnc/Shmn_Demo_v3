import React, { useRef } from 'react';
import { useInView } from '../../../hooks/useInView';
import Line from './Line';

const description = [
  'Shamanic Staff - это уникальный магазин священных инструментов',
  'и артефактов для духовных практик. Мы тщательно отбираем',
  'каждый предмет, обеспечивая его подлинность и энергетическую',
  'чистоту.'
];

const AnimatedDescription = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { inView } = useInView(containerRef);

  return (
    <div 
      ref={containerRef}
      className="max-w-2xl mx-auto mt-20 text-center space-y-2 text-lg text-gray-300 leading-relaxed"
    >
      {description.map((line, index) => (
        <Line
          key={index}
          text={line}
          delay={index * 200} // Each line starts 200ms after the previous one
          inView={inView}
        />
      ))}
    </div>
  );
};

export default AnimatedDescription;