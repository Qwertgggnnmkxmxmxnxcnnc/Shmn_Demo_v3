
import AnimatedText from '../common/AnimatedText';

const CoCreatorsHeader = () => {
  return (
    <div className="text-center mb-12">
      <AnimatedText>
        <h2 className="text-4xl font-serif text-gray-900 mb-4">
          Мы со-творцы своих изделий
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={200}>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Каждый артефакт создается в сотрудничестве с мастерами, вкладывающими душу в свою работу
        </p>
      </AnimatedText>
    </div>
  );
};

export default CoCreatorsHeader;