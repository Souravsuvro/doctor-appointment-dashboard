import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export default function SearchInput({
  onSearch,
  placeholder = 'Search...',
  label = 'Search',
  className = ''
}: SearchInputProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      // Escape to clear and blur
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        setQuery('');
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClear = () => {
    setQuery('');
    onSearch('');
    inputRef.current?.focus();
  };

  return (
    <div 
      className={`relative ${className}`}
      role="search"
    >
      <label htmlFor="search" className="sr-only">{label}</label>
      <div className="relative">
        <div className={`
          absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none
          ${isFocused ? 'text-blue-500 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}
        `}>
          <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
        </div>
        <input
          ref={inputRef}
          type="search"
          id="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onSearch(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full py-2 pl-10 pr-8 text-sm
            bg-gray-50 dark:bg-gray-800/50
            border border-gray-300 dark:border-gray-700/30
            rounded-lg
            text-gray-900 dark:text-gray-100
            placeholder-gray-500 dark:placeholder-gray-400
            focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-400/50
            focus:border-blue-500 dark:focus:border-blue-400
            focus:outline-none
            transition-colors duration-200
          `}
          placeholder={placeholder}
        />
        {query && (
          <button
            type="button"
            className={`
              absolute inset-y-0 right-0 flex items-center pr-3
              text-gray-500 dark:text-gray-400
              hover:text-gray-700 dark:hover:text-gray-200
              transition-colors
            `}
            onClick={handleClear}
          >
            <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
