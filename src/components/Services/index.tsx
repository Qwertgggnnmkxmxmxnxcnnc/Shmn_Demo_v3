import React from 'react';
import ServiceCarousel from './ServiceCarousel';
import AnimatedText from '../common/AnimatedText';
import { services } from './serviceData';

const Services = () => {
  return (
    <section className="py-20 bg-stone-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedText>
            <h2 className="text-4xl font-serif text-white mb-4">
              Мы со-творцы своих изделий
            </h2>
          </AnimatedText>
          
          <AnimatedText delay={200}>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Каждый артефакт создается в сотрудничестве с мастерами, вкладывающими душу в свою работу
            </p>
          </AnimatedText>
        </div>
        
        <ServiceCarousel services={services} />
      </div>
    </section>
  );
};

export default Services;