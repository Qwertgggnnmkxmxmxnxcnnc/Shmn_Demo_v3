import React, { ReactNode } from 'react';

interface NavSectionProps {
  children: ReactNode;
}

const NavSection = ({ children }: NavSectionProps) => {
  return (
    <div className="flex items-center justify-center border-x border-white/20 px-4">
      {children}
    </div>
  );
};

export default NavSection;