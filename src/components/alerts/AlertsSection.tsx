import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { Alert, AlertPriority, ALERT_PRIORITY_LEVELS } from '@/types/dashboard';
import AlertCard from './AlertCard';

interface AlertsSectionProps {
  onViewAll: () => void;
  isLoading?: boolean;
  error?: Error;
}

const AlertsSection: React.FC<AlertsSectionProps> = ({
  onViewAll,
  isLoading = false,
  error,
}) => {
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: 1,
      title: 'Urgent Follow-up',
      description: 'Patient requires immediate attention',
      priority: 'HIGH',
      timestamp: new Date()
    },
    // Add more alerts as needed
  ]);

  const [displayCount, setDisplayCount] = useState(3);

  const sortedAlerts = useMemo(() => {
    return [...alerts].sort((a, b) => {
      const priorityA = ALERT_PRIORITY_LEVELS[a.priority];
      const priorityB = ALERT_PRIORITY_LEVELS[b.priority];
      return priorityB - priorityA;
    });
  }, [alerts]);

  const displayedAlerts = sortedAlerts.slice(0, displayCount);
  const hasMore = alerts.length > displayCount;

  const priorityData: Record<Alert['priority'], AlertPriority> = {
    HIGH: {
      label: 'High Priority',
      color: {
        bg: 'bg-red-100',
        text: 'text-red-800',
        border: 'border-red-500'
      }
    },
    MEDIUM: {
      label: 'Medium Priority',
      color: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        border: 'border-yellow-500'
      }
    },
    LOW: {
      label: 'Low Priority',
      color: {
        bg: 'bg-green-100',
        text: 'text-green-800',
        border: 'border-green-500'
      }
    }
  };

  if (error) {
    throw error; // This will be caught by the ErrorBoundary
  }

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm min-h-[400px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <FontAwesomeIcon 
            icon={faNotesMedical} 
            className="w-8 h-8 text-blue-600 dark:text-blue-400" 
          />
          <p className="text-gray-600 dark:text-gray-400">Loading alerts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold dark:text-white">Recent Alerts</h2>
          <button
            onClick={onViewAll}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            aria-label="View all alerts"
          >
            View All
          </button>
        </div>

        <div className="space-y-4">
          {displayedAlerts.map((alert, index) => (
            <AlertCard
              key={alert.id}
              title={alert.title}
              description={alert.description}
              priority={priorityData[alert.priority]}
            />
          ))}
        </div>

        {hasMore && (
          <button
            onClick={() => setDisplayCount(prev => prev + 3)}
            className="mt-4 w-full py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          >
            Show More
          </button>
        )}

        {alerts.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">No alerts to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertsSection;
