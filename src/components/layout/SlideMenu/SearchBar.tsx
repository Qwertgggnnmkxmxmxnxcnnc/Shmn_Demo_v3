import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="px-6 py-4 border-b border-white/10">
      <div className="flex items-center gap-3">
        <Search className="h-5 w-5 text-gray-400" />
        <span className="text-gray-400 text-sm uppercase tracking-wider">Поиск</span>
      </div>
    </div>
  );
};

export default SearchBar;