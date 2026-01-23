import { FiSearch } from 'react-icons/fi';
import { useSearchStore } from '../app/store/searchStore';

export default function SearchBar() {
  const { setSearchQuery } = useSearchStore();
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    setSearchQuery(e.currentTarget.value)
  }
}
  return (
    <div className="relative w-full">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <FiSearch />
      </div>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Search Here"
        className="w-full pl-14 pr-4 py-3 placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
}