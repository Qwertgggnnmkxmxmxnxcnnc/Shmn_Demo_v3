import React from 'react';

interface LineProps {
  text: string;
  delay: number;
  inView: boolean;
}

const Line = ({ text, delay, inView }: LineProps) => {
  return (
    <div 
      className="overflow-hidden"
      style={{ 
        transform: 'translateZ(0)',
        willChange: 'opacity, transform'
      }}
    >
      <div
        className="transform transition-all duration-[1200ms] ease-out"
        style={{
          transitionDelay: `${delay}ms`,
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Line;