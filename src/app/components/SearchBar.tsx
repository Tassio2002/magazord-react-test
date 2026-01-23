import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  const [searchRepo, setSearchRepo] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      //criar função de pesquisa
    }
  };

  return (
    <div className="relative w-full">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <FiSearch />
      </div>
      <input
        type="text"
        value={searchRepo}
        onChange={(e) => setSearchRepo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search Here"
        className="w-full pl-14 pr-4 py-3 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
}