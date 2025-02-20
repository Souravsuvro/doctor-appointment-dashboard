import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faCalendar, 
  faBell, 
  faExclamationTriangle,
  faRotateRight
} from '@fortawesome/free-solid-svg-icons';

interface ErrorFallbackProps {
  message?: string;
  onRetry?: () => void;
}

const BaseErrorFallback = ({ message, onRetry }: ErrorFallbackProps) => (
  <div className="rounded-lg bg-white dark:bg-gray-800 p-4 shadow-sm">
    <div className="flex items-center gap-3 text-red-600 dark:text-red-400">
      <FontAwesomeIcon icon={faExclamationTriangle} className="w-5 h-5" />
      <p className="font-medium">Error loading component</p>
    </div>
    {message && (
      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{message}</p>
    )}
    {onRetry && (
      <button
        onClick={onRetry}
        className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-800/30 transition-colors"
      >
        <FontAwesomeIcon icon={faRotateRight} className="w-4 h-4" />
        Retry
      </button>
    )}
  </div>
);

export const StatisticsErrorFallback = ({ onRetry }: ErrorFallbackProps) => (
  <div className="h-[300px] rounded-lg bg-white dark:bg-gray-800 p-6 flex flex-col items-center justify-center text-center">
    <FontAwesomeIcon icon={faChartLine} className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" />
    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
      Unable to load statistics
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      There was a problem loading the statistics data. Please try again.
    </p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors"
      >
        <FontAwesomeIcon icon={faRotateRight} className="w-4 h-4" />
        Retry
      </button>
    )}
  </div>
);

export const CalendarErrorFallback = ({ onRetry }: ErrorFallbackProps) => (
  <div className="h-[300px] rounded-lg bg-white dark:bg-gray-800 p-6 flex flex-col items-center justify-center text-center">
    <FontAwesomeIcon icon={faCalendar} className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" />
    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
      Calendar unavailable
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      We&apos;re having trouble loading the calendar. Please try again.
    </p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors"
      >
        <FontAwesomeIcon icon={faRotateRight} className="w-4 h-4" />
        Retry
      </button>
    )}
  </div>
);

export const AlertsErrorFallback = ({ onRetry }: ErrorFallbackProps) => (
  <div className="rounded-lg bg-white dark:bg-gray-800 p-6 flex flex-col items-center justify-center text-center">
    <FontAwesomeIcon icon={faBell} className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" />
    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
      Alerts unavailable
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-4">
      Unable to load alerts at this time. Please try again.
    </p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800/30 transition-colors"
      >
        <FontAwesomeIcon icon={faRotateRight} className="w-4 h-4" />
        Retry
      </button>
    )}
  </div>
);

export default BaseErrorFallback;
