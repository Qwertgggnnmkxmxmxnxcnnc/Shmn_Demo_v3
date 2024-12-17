import React from 'react';
import UniqueArtifactHeader from './UniqueArtifactHeader';
import ArtifactCarousel from './ArtifactCarousel';

const UniqueArtifact = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4">
        <UniqueArtifactHeader />
        <ArtifactCarousel />
        <div className="mt-12 text-center">
          <button className="bg-gold text-white px-12 py-4 rounded-full text-lg hover:bg-[#a68850] transition-colors">
            Сделать заказ
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniqueArtifact;