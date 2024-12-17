import React from 'react';
import { Menu, X, Feather } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Feather className="h-8 w-8 text-amber-700" />
            <span className="ml-2 text-xl font-serif">Shamanic Staff</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">Shop</a>
              <a href="#" className="text-gray-700 hover:text-amber-700 transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-700">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-700">About</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-700">Services</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-700">Shop</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-amber-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;