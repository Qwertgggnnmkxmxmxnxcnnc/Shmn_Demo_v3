import React from 'react';
import { Send } from 'lucide-react';

const MenuFooter = () => {
  return (
    <div className="mt-auto border-t border-white/10 p-6">
      <div className="space-y-4">
        <a 
          href="https://t.me/shamanicstaff" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-3 text-gray-400 hover:text-white transition-colors group"
        >
          <Send className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
          <span>Telegram</span>
        </a>
        
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Shamanic Staff. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default MenuFooter;