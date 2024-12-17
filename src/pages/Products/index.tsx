import { useState } from 'react';
import ProductGrid from './ProductGrid';
import AnimatedNavbar from '../../components/layout/Navbar/AnimatedNavbar';
import SlideMenu from '../../components/layout/SlideMenu/SlideMenu';
import AnimatedHeader from '../../components/products/AnimatedHeader';

const Products = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <AnimatedNavbar show={true} onMenuClick={() => setIsMenuOpen(true)} />
      <SlideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="mobile-container pt-32 pb-24">
        <AnimatedHeader />
        <ProductGrid />
      </div>
    </div>
  );
};

export default Products;