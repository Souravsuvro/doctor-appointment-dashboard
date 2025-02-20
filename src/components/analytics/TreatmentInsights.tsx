'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

interface TreatmentInsightsProps {
  dateRange: string;
}

// Mock data
const treatments = [
  {
    name: 'General Consultation',
    count: 456,
    change: 12.5,
    trend: 'up',
    revenue: 22800
  },
  {
    name: 'Dental Cleaning',
    count: 289,
    change: 8.2,
    trend: 'up',
    revenue: 14450
  },
  {
    name: 'Blood Tests',
    count: 234,
    change: -3.7,
    trend: 'down',
    revenue: 11700
  },
  {
    name: 'X-Ray Imaging',
    count: 178,
    change: 15.3,
    trend: 'up',
    revenue: 8900
  },
  {
    name: 'Vaccinations',
    count: 145,
    change: 5.8,
    trend: 'up',
    revenue: 7250
  }
];

export default function TreatmentInsights({ dateRange }: TreatmentInsightsProps) {
  const totalRevenue = treatments.reduce((sum, treatment) => sum + treatment.revenue, 0);
  
  return (
    <div className="bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/30 p-6">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Treatment Insights
          </h3>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Top 5 Treatments
          </span>
        </div>

        {/* Treatments List */}
        <div className="space-y-4">
          {treatments.map((treatment) => (
            <div
              key={treatment.name}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {treatment.name}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  ${treatment.revenue.toLocaleString()}
                </span>
              </div>
              
              {/* Progress bar */}
              <div className="relative pt-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {treatment.count} patients
                  </div>
                  <div className={`
                    flex items-center gap-1 text-xs font-medium
                    ${treatment.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}
                  `}>
                    <FontAwesomeIcon 
                      icon={treatment.trend === 'up' ? faArrowUp : faArrowDown}
                      className="w-3 h-3"
                    />
                    {Math.abs(treatment.change)}%
                  </div>
                </div>
                <div className="flex h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                  <div
                    className="bg-blue-500 dark:bg-blue-600 transition-all duration-500"
                    style={{ width: `${(treatment.revenue / totalRevenue) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700/30">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Treatments
              </p>
              <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                {treatments.reduce((sum, t) => sum + t.count, 0)}
              </p>
              <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                +7.5% vs prev. {dateRange}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Avg. Treatment Value
              </p>
              <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                ${Math.round(totalRevenue / treatments.reduce((sum, t) => sum + t.count, 0))}
              </p>
              <p className="mt-1 text-sm text-green-600 dark:text-green-400">
                +3.2% vs prev. {dateRange}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
