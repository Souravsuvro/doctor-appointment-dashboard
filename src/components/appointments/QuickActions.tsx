'use client';

import { 
  faBell, 
  faCalendarPlus, 
  faClock, 
  faMessage, 
  faNotesMedical, 
  faUserPen 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function QuickActions() {
  const actions = [
    {
      icon: faCalendarPlus,
      label: 'Schedule',
      description: 'New Appointment',
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
      onClick: () => {/* TODO: Implement */}
    },
    {
      icon: faClock,
      label: 'Reschedule',
      description: 'Change Time',
      color: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
      onClick: () => {/* TODO: Implement */}
    },
    {
      icon: faBell,
      label: 'Remind',
      description: 'Send Reminder',
      color: 'text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
      onClick: () => {/* TODO: Implement */}
    },
    {
      icon: faMessage,
      label: 'Message',
      description: 'Contact Patient',
      color: 'text-green-500 bg-green-50 dark:bg-green-900/20',
      onClick: () => {/* TODO: Implement */}
    },
    {
      icon: faNotesMedical,
      label: 'Notes',
      description: 'Medical Records',
      color: 'text-red-500 bg-red-50 dark:bg-red-900/20',
      onClick: () => {/* TODO: Implement */}
    },
    {
      icon: faUserPen,
      label: 'Update',
      description: 'Edit Details',
      color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20',
      onClick: () => {/* TODO: Implement */}
    }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={action.onClick}
            className="flex flex-col items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors group"
          >
            <div className={`p-2 rounded-lg mb-2 ${action.color}`}>
              <FontAwesomeIcon 
                icon={action.icon} 
                className="w-5 h-5 transition-transform group-hover:scale-110" 
              />
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {action.label}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {action.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
