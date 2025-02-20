'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faCalendarCheck,
  faChartLine,
  faClock
} from '@fortawesome/free-solid-svg-icons';

interface PerformanceMetricsProps {
  dateRange: string;
}

const metrics = [
  {
    title: 'Total Patients',
    value: '2,847',
    change: '+12.5%',
    trend: 'up',
    icon: faUserPlus,
    color: 'blue'
  },
  {
    title: 'Appointments',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: faCalendarCheck,
    color: 'green'
  },
  {
    title: 'Revenue',
    value: '$48,295',
    change: '+15.3%',
    trend: 'up',
    icon: faChartLine,
    color: 'indigo'
  },
  {
    title: 'Avg. Wait Time',
    value: '18 mins',
    change: '-5.7%',
    trend: 'down',
    icon: faClock,
    color: 'purple'
  }
];

export default function PerformanceMetrics({ dateRange }: PerformanceMetricsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div
          key={metric.title}
          className="bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/30 p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {metric.title}
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-2">
                {metric.value}
              </h3>
            </div>
            <div className={`
              p-3 rounded-xl
              ${metric.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : ''}
              ${metric.color === 'green' ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' : ''}
              ${metric.color === 'indigo' ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' : ''}
              ${metric.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' : ''}
            `}>
              <FontAwesomeIcon icon={metric.icon} className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className={`
              text-sm font-medium
              ${metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}
            `}>
              {metric.change}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              vs previous {dateRange}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
