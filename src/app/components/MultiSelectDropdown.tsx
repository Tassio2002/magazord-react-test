import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface DropdownOption {
  id: string;
  label: string;
}

interface MultiSelectDropdownProps {
  buttonLabel: string;
  options: DropdownOption[];
  selectedValues: string[];
  onSelectionChange: (selected: string[]) => void;
  hasAllOption?: boolean;
}

export default function MultiSelectDropdown({
  buttonLabel,
  options,
  selectedValues,
  onSelectionChange,
  hasAllOption = true,
}: MultiSelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = (optionId: string) => {
    if (hasAllOption && optionId === 'all') {
      onSelectionChange(['all']);
    } else {
      const newSelected = selectedValues.includes(optionId)
        ? selectedValues.filter(id => id !== optionId)
        : [...selectedValues.filter(id => id !== 'all'), optionId];

      onSelectionChange(newSelected.length === 0 ? ['all'] : newSelected);
    }
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-6 py-2.5 text-white rounded-[42px] bg-linear-to-r from-[#0056A6] to-[#0587FF] cursor-pointer"
      >
        <IoIosArrowDown size={24} />
        {buttonLabel}
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
          {options.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedValues.includes(option.id)}
                onChange={() => handleToggle(option.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-sm text-gray-700 select-none">{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}