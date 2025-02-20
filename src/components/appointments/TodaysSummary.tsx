'use client';

import { faCalendarCheck, faCalendarXmark, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TodaysSummaryProps {
  compact?: boolean;
}

export default function TodaysSummary({ compact = false }: TodaysSummaryProps) {
  // Mock data - replace with real data
  const summary = {
    total: 12,
    completed: 5,
    upcoming: 4,
    cancelled: 3
  };

  if (compact) {
    return (
      <div>
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
          Today&apos;s Overview
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-300">Total</span>
            <span className="font-medium text-gray-900 dark:text-white">{summary.total}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-300">Completed</span>
            <span className="font-medium text-green-500">{summary.completed}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-300">Upcoming</span>
            <span className="font-medium text-blue-500">{summary.upcoming}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faUserClock} className="text-blue-500" />
        Today&apos;s Overview
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500 rounded-lg text-white">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400">Upcoming</p>
              <p className="text-2xl font-semibold text-blue-700 dark:text-blue-300">
                {summary.upcoming}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500 rounded-lg text-white">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </div>
            <div>
              <p className="text-sm text-green-600 dark:text-green-400">Completed</p>
              <p className="text-2xl font-semibold text-green-700 dark:text-green-300">
                {summary.completed}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500 rounded-lg text-white">
              <FontAwesomeIcon icon={faCalendarXmark} />
            </div>
            <div>
              <p className="text-sm text-red-600 dark:text-red-400">Cancelled</p>
              <p className="text-2xl font-semibold text-red-700 dark:text-red-300">
                {summary.cancelled}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
