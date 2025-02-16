'use client';

import { 
  faCalendarDays, 
  faFilter, 
  faList, 
  faMagnifyingGlass, 
  faPlus,
  faNotesMedical,
  faUserClock
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import AppointmentCalendar from '@/components/appointments/AppointmentCalendar';
import AppointmentList from '@/components/appointments/AppointmentList';
import QuickActions from '@/components/appointments/QuickActions';
import TodaysSummary from '@/components/appointments/TodaysSummary';

type FilterStatus = 'all' | 'upcoming' | 'completed' | 'cancelled';
type ViewMode = 'calendar' | 'list';

export default function AppointmentsPage() {
  const [view, setView] = useState<ViewMode>('calendar');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Bar */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-[2000px] mx-auto p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <FontAwesomeIcon icon={faUserClock} className="text-blue-500" />
              Appointments
            </h1>
            <div className="flex items-center gap-2">
              {/* View Toggle */}
              <div className="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-1 shadow-sm">
                <button
                  onClick={() => setView('calendar')}
                  className={`px-3 py-1.5 rounded-md font-medium text-sm transition-colors ${
                    view === 'calendar'
                      ? 'bg-white dark:bg-gray-800 text-blue-500 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <FontAwesomeIcon icon={faCalendarDays} className="mr-2" />
                  Calendar
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`px-3 py-1.5 rounded-md font-medium text-sm transition-colors ${
                    view === 'list'
                      ? 'bg-white dark:bg-gray-800 text-blue-500 shadow-sm'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <FontAwesomeIcon icon={faList} className="mr-2" />
                  List
                </button>
              </div>

              {/* New Appointment Button */}
              <button 
                className="px-3 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 transition-colors text-sm font-medium flex items-center gap-2"
                onClick={() => {/* TODO: Implement new appointment modal */}}
              >
                <FontAwesomeIcon icon={faPlus} />
                New Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {view === 'calendar' ? (
        // Calendar View Layout
        <div className="max-w-[2000px] mx-auto p-4">
          <div className="grid grid-cols-12 gap-6">
            {/* Main Calendar Area */}
            <div className="col-span-12 lg:col-span-9 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                <AppointmentCalendar />
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-3 space-y-6">
              {/* Today's Summary */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                <TodaysSummary />
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
                <QuickActions />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // List View Layout
        <div className="max-w-[2000px] mx-auto p-4">
          <div className="grid grid-cols-12 gap-6">
            {/* Filters Sidebar */}
            <div className="col-span-12 lg:col-span-3 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
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

                  {/* Today's Summary in Sidebar */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <TodaysSummary compact />
                  </div>
                </div>
              </div>
            </div>

            {/* Main List Area */}
            <div className="col-span-12 lg:col-span-9">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <AppointmentList 
                  searchQuery={searchQuery} 
                  filterStatus={filterStatus}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
