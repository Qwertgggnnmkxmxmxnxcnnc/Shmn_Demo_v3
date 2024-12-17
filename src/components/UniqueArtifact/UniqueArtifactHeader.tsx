import React from 'react';
import { Sparkles } from 'lucide-react';
import AnimatedText from '../common/AnimatedText';

const UniqueArtifactHeader = () => {
  return (
    <div className="text-center mb-12">
      <AnimatedText>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles 
            className="h-5 w-5" 
            color="#b7985a"
            strokeWidth={2}
          />
          <span className="text-sm uppercase tracking-wider text-gray-600">
            Уникальные изделия
          </span>
        </div>
      </AnimatedText>
      
      <AnimatedText delay={200}>
        <h2 className="text-4xl font-serif text-gray-900 mb-4">
          Создайте свой уникальный артефакт
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={400}>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Каждое изделие создается с учетом ваших индивидуальных потребностей и энергетических особенностей
        </p>
      </AnimatedText>
    </div>
  );
};

export default UniqueArtifactHeader;