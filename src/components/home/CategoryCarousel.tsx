import { useRef, useEffect } from 'react';
import CategoryCard from './CategoryCard';

const CategoryCarousel = () => {
  const categories = [
    {
      id: 1,
      name: 'Мала для медитаций',
      image: 'https://optim.tildacdn.com/tild6530-3763-4735-b237-393834376238/-/format/webp/0ca9ecb7219effd11c57.jpg'
    },
    {
      id: 2,
      name: 'Золотая кайма',
      image: 'https://optim.tildacdn.com/stor6630-6164-4434-b130-333266313436/-/format/webp/82936280.jpg'
    },
    {
      id: 3,
      name: 'Посохи',
      image: 'https://optim.tildacdn.com/stor6539-3637-4334-b835-346362383331/-/format/webp/87308016.jpg'
    },
    {
      id: 4,
      name: 'Курипи',
      image: 'https://optim.tildacdn.com/tild6636-3836-4361-a239-653765366435/-/format/webp/c10614acb8215d64a2d3.jpg'
    },
    {
      id: 5,
      name: 'Баночка для Рапэ',
      image: 'https://optim.tildacdn.com/tild6231-3065-4436-b632-636430613861/-/format/webp/7c2758305310fbeef0b8.jpg'
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      
      if (container.scrollLeft >= scrollWidth - clientWidth) {
        // Reset to start when reaching the end
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll one item width
        container.scrollBy({ left: 300, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scroll, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="flex overflow-x-auto scrollbar-hide gap-6 pb-4 snap-x snap-mandatory"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryCarousel;