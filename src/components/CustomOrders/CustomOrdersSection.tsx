import React from 'react';
import CustomOrdersHeader from './CustomOrdersHeader';
import CustomOrdersList from './CustomOrdersList';

const CustomOrdersSection = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img
              src="https://optim.tildacdn.com/tild6230-3764-4564-b766-623535653135/-/format/webp/60fac01a4866bf6b1257.jpg"
              alt="Custom shamanic staff"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <div>
            <CustomOrdersHeader />
            <CustomOrdersList />
            
            <button className="bg-amber-700 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-800 transition-colors">
              Заказать работу
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrdersSection;