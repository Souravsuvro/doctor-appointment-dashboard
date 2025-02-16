import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faExclamationCircle, faClock, faNotesmedical } from '@fortawesome/free-solid-svg-icons';
import AlertCard, { AlertPriority } from './AlertCard';

const PRIORITY_TYPES: Record<string, AlertPriority> = {
  HIGH: {
    label: 'High Priority',
    color: {
      bg: 'bg-red-100',
      text: 'text-red-600',
      border: 'border-red-100'
    }
  },
  MEDIUM: {
    label: 'Medium Priority',
    color: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-600',
      border: 'border-yellow-100'
    }
  },
  LOW: {
    label: 'Review Required',
    color: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-100'
    }
  }
};

export interface Alert {
  id: string;
  title: string;
  patientName: string;
  description: string;
  priority: keyof typeof PRIORITY_TYPES;
  icon: typeof faExclamationCircle;
  iconBgColor: string;
  iconTextColor: string;
}

interface AlertsSectionProps {
  alerts?: Alert[];
  onViewAll: () => void;
  isLoading?: boolean;
  error?: Error;
  onRetry?: () => void;
}

const PRIORITY_TYPES_LOCAL = {
  high: 'error',
  medium: 'warning',
  low: 'info'
} as const;

export default function AlertsSection({
  alerts = [],
  onViewAll,
  isLoading = false,
  error,
  onRetry
}: AlertsSectionProps) {
  const [isLoadingLocal, setIsLoadingLocal] = useState(true);
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    // Simulate loading state for demonstration
    const timer = setTimeout(() => setIsLoadingLocal(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (error) {
    throw error; // This will be caught by the ErrorBoundary
  }

  if (isLoading || isLoadingLocal) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm min-h-[400px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <FontAwesomeIcon 
            icon={faSpinner} 
            className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-spin" 
          />
          <p className="text-gray-600 dark:text-gray-400">Loading alerts...</p>
        </div>
      </div>
    );
  }

  const sortedAlerts = [...alerts].sort((a, b) => {
    // Sort by priority first
    const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    // Then by timestamp (not available in the original Alert interface, so this is commented out)
    // return b.timestamp.getTime() - a.timestamp.getTime();
  });

  const displayedAlerts = sortedAlerts.slice(0, displayCount);
  const hasMore = alerts.length > displayCount;

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
          {displayedAlerts.map((alert) => (
            <AlertCard
              key={alert.id}
              title={alert.title}
              patientName={alert.patientName}
              description={alert.description}
              priority={PRIORITY_TYPES[alert.priority]}
              icon={alert.icon}
              iconBgColor={alert.iconBgColor}
              iconTextColor={alert.iconTextColor}
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
}
