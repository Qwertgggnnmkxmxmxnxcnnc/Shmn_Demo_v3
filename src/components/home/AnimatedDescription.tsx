import React, { useEffect, useRef } from 'react';

const AnimatedDescription = () => {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is entering the viewport
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          } else {
            // Element is leaving the viewport
            entry.target.classList.remove('opacity-100', 'translate-y-0');
            entry.target.classList.add('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '50px', // Add margin to trigger animation earlier
      }
    );

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={descriptionRef}
      className="max-w-2xl mx-auto mt-20 text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <p className="text-lg text-gray-300 leading-relaxed">
        Shamanic Staff - это уникальный магазин священных инструментов и артефактов для духовных практик. 
        Мы тщательно отбираем каждый предмет, обеспечивая его подлинность и энергетическую чистоту.
      </p>
    </div>
  );
};

export default AnimatedDescription;