'use client';

import { useState, useCallback, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserCircle,
  faBell
} from '@fortawesome/free-solid-svg-icons';
import NotificationsDropdown from './notifications/NotificationsDropdown';
import SearchInput from './SearchInput';
import ThemeToggle from './ThemeToggle';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  isSidebarOpen: boolean;
}

export default function Header({ isSidebarOpen }: HeaderProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const headerStyle = useMemo(() => ({
    left: isSidebarOpen ? '256px' : '80px',
    width: `calc(100% - ${isSidebarOpen ? '256px' : '80px'})`
  }), [isSidebarOpen]);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  }, [router]);

  return (
    <header 
      role="banner"
      aria-label="Page header"
      className={`
        fixed top-0 right-0 z-40 
        flex items-center justify-between 
        h-16 sm:h-[70px]
        px-3 sm:px-4 lg:px-6 
        bg-white dark:bg-[#1a1f37] 
        border-b dark:border-gray-700/30 
        shadow-sm transition-all duration-300 ease-in-out
      `}
      style={headerStyle}
    >
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <div>
          <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 dark:text-white leading-tight">
            Welcome Dr. Smith!
          </h1>
          <p 
            className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 hidden sm:block mt-0.5"
            aria-label="Welcome message"
          >
            Have a great day at work
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div 
        className="flex items-center space-x-4"
        role="navigation"
        aria-label="Header actions"
      >
        {/* Search Section */}
        <div className="hidden md:block relative">
          <SearchInput 
            placeholder="Search patients, appointments..." 
            onSearch={handleSearch}
            className="w-72 transition-all duration-200 focus-within:w-96"
            value={searchQuery}
            aria-label="Search"
          />
        </div>

        {/* Actions Section */}
        <div 
          className="flex items-center space-x-3"
          role="group"
          aria-label="User actions"
        >
          {/* All buttons should have consistent styling */}
          <div className="flex items-center space-x-2">
            <button 
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              aria-label="Notifications"
            >
              <FontAwesomeIcon
                icon={faBell}
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
                aria-hidden="true"
              />
            </button>
            <ThemeToggle />
            <button 
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              aria-label="User profile"
              onClick={() => router.push('/profile')}
            >
              <FontAwesomeIcon
                icon={faUserCircle}
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
