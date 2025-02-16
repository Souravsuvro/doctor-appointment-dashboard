'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSpinner,
  faSun,
  faMoon,
  faDesktop,
  faFont,
  faLanguage,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

export default function AppearanceSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState('system');
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('en');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Appearance Settings
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Theme Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
            Theme
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: 'light', icon: faSun, label: 'Light' },
              { id: 'dark', icon: faMoon, label: 'Dark' },
              { id: 'system', icon: faDesktop, label: 'System' },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setTheme(option.id)}
                className={`
                  flex items-center gap-3 p-4 rounded-lg border-2 transition-all
                  ${theme === option.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-500/50'
                  }
                `}
              >
                <FontAwesomeIcon 
                  icon={option.icon}
                  className={`w-5 h-5 ${theme === option.id ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`}
                />
                <span className={`flex-1 text-left ${theme === option.id ? 'text-blue-700 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}`}>
                  {option.label}
                </span>
                {theme === option.id && (
                  <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-blue-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Font Size */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
            <FontAwesomeIcon icon={faFont} className="text-blue-500" />
            Font Size
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['small', 'medium', 'large', 'x-large'].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setFontSize(size)}
                className={`
                  p-3 rounded-lg border-2 transition-all
                  ${fontSize === size
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-500/50'
                  }
                `}
              >
                <span className={`
                  block text-center font-medium
                  ${fontSize === size ? 'text-blue-700 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}
                `}>
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Language Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
            <FontAwesomeIcon icon={faLanguage} className="text-blue-500" />
            Language
          </h3>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="it">Italiano</option>
            <option value="pt">Português</option>
          </select>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
