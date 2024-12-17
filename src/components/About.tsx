import React from 'react';

const About = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80"
              alt="Shamanic ceremony"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif text-gray-900 mb-6">Ancient Wisdom for Modern Healing</h2>
            <p className="text-lg text-gray-600 mb-6">
              We bridge the ancient shamanic traditions with contemporary healing practices, offering a unique path to wellness and spiritual growth. Our approach honors the sacred wisdom of indigenous cultures while making these powerful practices accessible to modern seekers.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Through ceremony, ritual, and healing work, we help you connect with your authentic self and the deeper mysteries of life. Our practice is rooted in respect for traditional ways while embracing the evolving needs of our time.
            </p>
            <button className="bg-amber-700 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;