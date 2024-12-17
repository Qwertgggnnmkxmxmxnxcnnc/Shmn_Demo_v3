
import CoCreatorsHeader from './CoCreatorsHeader';
import Carousel from './Carousel';

const CoCreators = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <CoCreatorsHeader />
        <Carousel />
      </div>
    </section>
  );
};

export default CoCreators;