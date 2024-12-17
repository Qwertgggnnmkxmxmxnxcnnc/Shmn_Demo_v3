import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80"
          alt="Sacred items"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Discover Your Sacred Path</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience ancient wisdom and healing through authentic shamanic practices
          </p>
          <button className="bg-amber-700 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-800 transition-colors">
            Begin Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;