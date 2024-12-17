import React from 'react';

const orderSteps = [
  'Выбор материалов и элементов дизайна',
  'Создание эскиза и согласование деталей',
  'Изготовление артефакта с учетом всех пожеланий'
];

const CustomOrdersList = () => {
  return (
    <ul className="space-y-4 mb-8">
      {orderSteps.map((step, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="w-6 h-6 rounded-full bg-amber-700/10 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="w-2 h-2 rounded-full bg-amber-700" />
          </span>
          <span className="text-gray-600">{step}</span>
        </li>
      ))}
    </ul>
  );
};

export default CustomOrdersList;