import React from 'react';
import AnimatedText from '../common/AnimatedText';

const ServicesHeader = () => {
  return (
    <div className="text-center mb-12">
      <AnimatedText>
        <h2 className="text-4xl font-serif text-white mb-4">
          Мы со-творцы своих изделий
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={200}>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Каждый артефакт создается в сотрудничестве с мастерами
        </p>
      </AnimatedText>
    </div>
  );
};

export default ServicesHeader;