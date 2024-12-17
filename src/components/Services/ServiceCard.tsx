import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
}

const ServiceCard = ({ icon, title, description, backgroundImage }: ServiceCardProps) => {
  return (
    <div className="relative h-[500px] overflow-hidden rounded-lg group">
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
      </div>
      <div className="relative h-full p-8 flex flex-col justify-end">
        <div className="text-white">
          {icon}
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <p className="text-lg text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;