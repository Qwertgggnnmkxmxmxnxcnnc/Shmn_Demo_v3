
import CategoryCarousel from './CategoryCarousel';
import AnimatedText from '../common/AnimatedText';
import AnimatedDescription from './AnimatedDescription';

const Categories = () => {
  return (
    <section className="bg-black text-white py-20 overflow-x-hidden">
      <div className="mobile-container">
        <AnimatedText>
          <h2 className="text-4xl font-serif mb-12 text-center">Наши категории</h2>
        </AnimatedText>
        
        <CategoryCarousel />
        
        <AnimatedDescription />
      </div>
    </section>
  );
};

export default Categories;