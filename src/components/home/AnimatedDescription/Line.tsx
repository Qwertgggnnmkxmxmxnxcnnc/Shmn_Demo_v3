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
        willChange: 'transform'
      }}
    >
      <div
        className="transition-all duration-1000 ease-out"
        style={{
          transitionDelay: `${delay}ms`,
          transform: inView ? 'translateX(0)' : 'translateX(-100%)',
          opacity: inView ? 1 : 0
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Line;