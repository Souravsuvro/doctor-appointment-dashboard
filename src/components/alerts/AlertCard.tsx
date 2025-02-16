import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export type AlertPriority = 'error' | 'warning' | 'info';

interface AlertCardProps {
  title: string;
  description: string;
  patientName: string;
  priority: AlertPriority;
  icon: IconDefinition;
  iconBgColor: string;
  iconTextColor: string;
  isLoading?: boolean;
  error?: Error;
}

const priorityClasses = {
  error: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300',
  warning: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300',
  info: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
};

export default function AlertCard({
  title,
  description,
  patientName,
  priority,
  icon,
  iconBgColor,
  iconTextColor,
  isLoading = false,
  error
}: AlertCardProps) {
  const [isLoadingLocal, setIsLoadingLocal] = useState(true);

  useEffect(() => {
    // Simulate loading state for demonstration
    const timer = setTimeout(() => setIsLoadingLocal(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (error) {
    throw error; // This will be caught by the ErrorBoundary
  }

  if (isLoading || isLoadingLocal) {
    return (
      <div className="animate-pulse bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          <div className="flex-1 space-y-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`
        relative rounded-lg p-4 transition-all duration-200
        hover:shadow-md focus-within:shadow-md
        ${priorityClasses[priority]}
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start space-x-4">
        <div 
          className={`
            flex-shrink-0 w-10 h-10 rounded-lg 
            ${iconBgColor} ${iconTextColor}
            flex items-center justify-center
          `}
        >
          <FontAwesomeIcon icon={icon} className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium truncate">
              {title}
            </p>
            <span className="text-xs opacity-70">
              {patientName}
            </span>
          </div>
          <p className="mt-1 text-sm opacity-90">
            {description}
          </p>
        </div>
      </div>

      <button
        className="absolute inset-0 w-full h-full rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        onClick={() => {
          // Handle click event
          console.log('Alert clicked:', title);
        }}
        aria-label={`View details for alert: ${title}`}
      />
    </div>
  );
}
