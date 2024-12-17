import React from 'react';
import { Feather, Hammer, Palette, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8 mb-4 text-amber-700" />,
      title: "Со-творчество",
      description: "Мы работаем напрямую с мастерами и авторами, создавая уникальные артефакты силы."
    },
    {
      icon: <Hammer className="h-8 w-8 mb-4 text-amber-700" />,
      title: "Ручная работа",
      description: "Каждое изделие создается вручную с особым вниманием к деталям и энергетике."
    },
    {
      icon: <Palette className="h-8 w-8 mb-4 text-amber-700" />,
      title: "Индивидуальный подход",
      description: "Возможность создания артефактов по индивидуальному заказу с учетом ваших потребностей."
    },
    {
      icon: <Feather className="h-8 w-8 mb-4 text-amber-700" />,
      title: "Экологичность",
      description: "Используем только натуральные материалы, заботясь о природе и качестве изделий."
    }
  ];

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Мы со-творцы своих изделий</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Каждый артефакт создается в сотрудничестве с мастерами, вкладывающими душу в свою работу
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;