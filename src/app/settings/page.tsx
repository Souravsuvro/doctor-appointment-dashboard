'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser,
  faLock,
  faPalette,
  faBell as faBellRegular,
} from '@fortawesome/free-solid-svg-icons';
import ProfileSettings from '@/components/settings/ProfileSettings';
import SecuritySettings from '@/components/settings/SecuritySettings';
import NotificationSettings from '@/components/settings/NotificationSettings';
import AppearanceSettings from '@/components/settings/AppearanceSettings';

const settingsSections = [
  { id: 'profile', label: 'Profile', icon: faUser },
  { id: 'security', label: 'Security', icon: faLock },
  { id: 'notifications', label: 'Notifications', icon: faBellRegular },
  { id: 'appearance', label: 'Appearance', icon: faPalette },
];

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderSettingsContent = () => {
    switch (activeSection) {
      case 'profile':
        return <ProfileSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'appearance':
        return <AppearanceSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Account Settings
          </h1>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            aria-label="Toggle settings menu"
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Settings Layout */}
        <div className="flex flex-col md:flex-row bg-white dark:bg-[#1a1f37] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          {/* Navigation Sidebar */}
          <div className={`
            ${isMobileMenuOpen ? 'block' : 'hidden'} md:block 
            w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700
          `}>
            <nav className="p-4 space-y-1">
              {settingsSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors
                    ${
                      activeSection === section.id
                        ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <FontAwesomeIcon 
                    icon={section.icon} 
                    className={`w-5 h-5 ${
                      activeSection === section.id
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-400 dark:text-gray-500'
                    }`}
                  />
                  {section.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-grow p-6 md:p-8">
            {renderSettingsContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
