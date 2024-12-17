import React, { useState } from 'react';
import AnimatedHero from '../../components/home/AnimatedHero';
import Categories from '../../components/home/Categories';
import CoCreators from '../../components/CoCreators';
import UniqueArtifact from '../../components/UniqueArtifact';
import Contact from '../../components/Contact';
import SlideMenu from '../../components/layout/SlideMenu/SlideMenu';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <AnimatedHero 
        onMenuClick={() => setIsMenuOpen(true)}
        // Add modelUrl prop here when you have a GLTF model
        // modelUrl="/path/to/your/model.gltf"
      />
      <Categories />
      <CoCreators />
      <UniqueArtifact />
      <Contact />
      <SlideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Home;