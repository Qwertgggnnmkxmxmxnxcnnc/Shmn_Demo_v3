import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import AnimatedDescription from './AnimatedDescription';

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-gray-400 mb-6 block">
            Артефакты для раскрытия ресурсного состояния
          </span>
          <AnimatedTitle />
        </div>
        
        <div className="max-w-4xl mx-auto h-[600px]">
          <img
            src="https://optim.tildacdn.com/tild6231-3065-4436-b632-636430613861/-/format/webp/7c2758305310fbeef0b8.jpg"
            alt="Shamanic artifacts"
            className="w-full h-full object-cover rounded-[2.5rem] transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <AnimatedDescription />
      </div>
    </div>
  );
};

export default Hero;