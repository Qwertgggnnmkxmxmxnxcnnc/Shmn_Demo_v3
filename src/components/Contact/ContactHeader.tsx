import React from 'react';
import AnimatedText from '../common/AnimatedText';

interface ContactHeaderProps {
  title: string;
  description: string;
  light?: boolean;
}

const ContactHeader = ({ title, description, light = false }: ContactHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <AnimatedText>
        <h2 className={`text-4xl font-serif mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
      </AnimatedText>
      
      <AnimatedText delay={200}>
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
      </AnimatedText>
    </div>
  );
};

export default ContactHeader;