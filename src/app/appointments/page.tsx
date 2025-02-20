'use client';

import { 
  faFilter, 
  faMagnifyingGlass, 
  faPlus,
  faUserClock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import AppointmentList from '@/components/appointments/AppointmentList';
import TodaysSummary from '@/components/appointments/TodaysSummary';

type FilterStatus = 'all' | 'upcoming' | 'completed' | 'cancelled';

export default function AppointmentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Top Bar */}
      <div className="bg-white dark:bg-[#1a1f37] border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4 sm:mb-0">
              <FontAwesomeIcon icon={faUserClock} className="text-blue-500 mr-2" />
              Appointments
            </h1>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* New Appointment Button */}
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition-colors text-sm font-medium flex items-center gap-2"
                onClick={() => {/* TODO: Implement new appointment modal */}}
              >
                <FontAwesomeIcon icon={faPlus} />
                New Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow container  mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Today's Summary */}
          <div className="lg:col-span-full">
            <div className="bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <TodaysSummary />
            </div>
          </div>

          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <div className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <FontAwesomeIcon 
                    icon={faMagnifyingGlass} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Search appointments..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                {/* Status Filters */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Status
                  </h3>
                  <div className="space-y-2">
                    {(['all', 'upcoming', 'completed', 'cancelled'] as FilterStatus[]).map((status) => (
                      <button
                        key={status}
                        onClick={() => setFilterStatus(status)}
                        className={`w-full px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors text-left ${
                          filterStatus === status
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main List Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <AppointmentList 
                searchQuery={searchQuery} 
                filterStatus={filterStatus}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
