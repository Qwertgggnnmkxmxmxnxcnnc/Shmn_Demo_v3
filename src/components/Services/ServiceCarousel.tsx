import React, { useRef, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import { useInView } from '../../hooks/useInView';

interface ServiceCarouselProps {
  services: {
    icon: React.ComponentType;
    title: string;
    description: string;
    backgroundImage: string;
  }[];
}

const ServiceCarousel = ({ services }: ServiceCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { inView } = useInView(containerRef);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      if (container.scrollLeft >= scrollWidth - clientWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scroll, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`flex overflow-x-auto scrollbar-hide snap-x snap-mandatory transition-all duration-1000 transform ${
        inView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div 
            key={index} 
            className="flex-none w-full snap-start px-4"
            style={{
              transitionDelay: `${index * 200}ms`
            }}
          >
            <ServiceCard
              icon={<Icon className="h-10 w-10 mb-4 text-amber-700" />}
              title={service.title}
              description={service.description}
              backgroundImage={service.backgroundImage}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCarousel;