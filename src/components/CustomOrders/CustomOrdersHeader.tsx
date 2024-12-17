import React from 'react';
import { Wand2 } from 'lucide-react';

const CustomOrdersHeader = () => {
  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <Wand2 className="h-6 w-6 text-amber-700" />
        <span className="text-sm uppercase tracking-wider text-gray-600">
          Индивидуальный заказ
        </span>
      </div>
      
      <h2 className="text-4xl font-serif text-gray-900 mb-6">
        Создайте свой уникальный артефакт
      </h2>
      
      <p className="text-lg text-gray-600 mb-6">
        Мы предлагаем услугу создания индивидуальных артефактов по вашему запросу. 
        Каждое изделие создается с учетом ваших личных потребностей, энергетических особенностей 
        и предпочтений в дизайне.
      </p>
    </>
  );
};

export default CustomOrdersHeader;