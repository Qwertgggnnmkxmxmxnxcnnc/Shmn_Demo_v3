import React from 'react';
import { Star } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Star className="h-6 w-6" />
      <span className="text-sm uppercase tracking-wider">Future</span>
    </div>
  );
};

export default Logo;