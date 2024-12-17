import React from 'react';

interface HeroTitleProps {
  show: boolean;
}

const HeroTitle = ({ show }: HeroTitleProps) => {
  return (
    <div className={`text-center transition-all duration-1000 ${
      show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <span className="text-sm uppercase tracking-wider text-gray-400 mb-6 block">
        Артефакты для раскрытия ресурсного состояния
      </span>
      <h1 className="text-6xl md:text-8xl font-bold mb-8">
        SHAMANIC STAFF
      </h1>
    </div>
  );
};

export default HeroTitle;