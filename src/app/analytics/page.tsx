'use client';

import { 
  faFilter,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import AppointmentStats from '@/components/analytics/AppointmentStats';
import PatientDemographics from '@/components/analytics/PatientDemographics';
import PerformanceMetrics from '@/components/analytics/PerformanceMetrics';
import RevenueChart from '@/components/analytics/RevenueChart';
import TreatmentInsights from '@/components/analytics/TreatmentInsights';
import PerformanceOverview from '@/components/PerformanceOverview';

// Date range options
const dateRanges = [
  { label: 'Last 7 Days', value: '7d' },
  { label: 'Last 30 Days', value: '30d' },
  { label: 'Last 3 Months', value: '3m' },
  { label: 'Last 12 Months', value: '12m' },
  { label: 'Year to Date', value: 'ytd' },
];

export default function AnalyticsPage() {
  const [selectedDateRange, setSelectedDateRange] = useState('30d');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Analytics Dashboard
          </h1>
          <div className="flex items-center gap-2">
            <select
              value={selectedDateRange}
              onChange={(e) => setSelectedDateRange(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500"
            >
              {dateRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Filter analytics"
            >
              <FontAwesomeIcon
                icon={faFilter}
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
              />
            </button>
            <button
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Download report"
            >
              <FontAwesomeIcon
                icon={faDownload}
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
              />
            </button>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="space-y-6">
          {/* Performance Overview Section */}
          <div className="bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <PerformanceOverview />
          </div>

          {/* Performance Metrics */}
          <div className="lg:col-span-2">
            <PerformanceMetrics dateRange={selectedDateRange} />
          </div>

          {/* Appointment Stats */}
          <div>
            <AppointmentStats _dateRange={selectedDateRange} />
          </div>

          {/* Revenue Chart */}
          <div>
            <RevenueChart dateRange={selectedDateRange} />
          </div>

          {/* Patient Demographics */}
          <div>
            <PatientDemographics dateRange={selectedDateRange} />
          </div>

          {/* Treatment Insights */}
          <div>
            <TreatmentInsights dateRange={selectedDateRange} />
          </div>
        </div>
      </div>
    </div>
  );
}
