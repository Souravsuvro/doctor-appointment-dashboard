'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSpinner,
  faBell,
  faEnvelope,
  faMobile,
  faToggleOn,
  faToggleOff
} from '@fortawesome/free-solid-svg-icons';

interface NotificationSetting {
  id: string;
  title: string;
  description: string;
  email: boolean;
  push: boolean;
  sms: boolean;
}

export default function NotificationSettings() {
  const [isLoading, setIsLoading] = useState(false);
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: 'appointments',
      title: 'Appointment Reminders',
      description: 'Get notified about upcoming appointments',
      email: true,
      push: true,
      sms: true,
    },
    {
      id: 'messages',
      title: 'New Messages',
      description: 'Receive notifications for new patient messages',
      email: true,
      push: true,
      sms: false,
    },
    {
      id: 'updates',
      title: 'System Updates',
      description: 'Stay informed about system updates and maintenance',
      email: true,
      push: false,
      sms: false,
    },
    {
      id: 'reports',
      title: 'Medical Reports',
      description: 'Get notified when new medical reports are available',
      email: true,
      push: true,
      sms: false,
    },
  ]);

  const handleToggle = (id: string, type: 'email' | 'push' | 'sms') => {
    setSettings(settings.map(setting => 
      setting.id === id 
        ? { ...setting, [type]: !setting[type] }
        : setting
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Notification Settings
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          {settings.map((setting) => (
            <div
              key={setting.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-4"
            >
              <div className="flex flex-col space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {setting.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {setting.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Email Notifications */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon 
                      icon={faEnvelope} 
                      className="text-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleToggle(setting.id, 'email')}
                    className={`text-2xl ${setting.email ? 'text-blue-500' : 'text-gray-400'}`}
                  >
                    <FontAwesomeIcon icon={setting.email ? faToggleOn : faToggleOff} />
                  </button>
                </div>

                {/* Push Notifications */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon 
                      icon={faBell} 
                      className="text-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Push
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleToggle(setting.id, 'push')}
                    className={`text-2xl ${setting.push ? 'text-blue-500' : 'text-gray-400'}`}
                  >
                    <FontAwesomeIcon icon={setting.push ? faToggleOn : faToggleOff} />
                  </button>
                </div>

                {/* SMS Notifications */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon 
                      icon={faMobile} 
                      className="text-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      SMS
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleToggle(setting.id, 'sms')}
                    className={`text-2xl ${setting.sms ? 'text-blue-500' : 'text-gray-400'}`}
                  >
                    <FontAwesomeIcon icon={setting.sms ? faToggleOn : faToggleOff} />
                  </button>
                </div>
              </div>
            </div>
          ))}
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
