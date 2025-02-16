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
    <div className="p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Settings
          </h1>
        </div>

        {/* Settings Layout */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-12 divide-x divide-gray-200 dark:divide-gray-700">
            {/* Navigation Sidebar */}
            <div className="col-span-12 md:col-span-3 p-4">
              <nav className="space-y-1">
                {settingsSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg
                      ${
                        activeSection === section.id
                          ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20'
                          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    <FontAwesomeIcon 
                      icon={section.icon} 
                      className={`w-4 h-4 ${
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
            <div className="col-span-12 md:col-span-9 p-4">
              {renderSettingsContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
