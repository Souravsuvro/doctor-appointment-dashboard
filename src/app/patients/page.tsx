'use client';

import { useState } from 'react';
import PatientList from '@/components/patients/PatientList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import SearchInput from '@/components/SearchInput';

export default function PatientsPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Patients Management
          </h1>
          <div className="flex items-center gap-2">
            <div className="w-64">
              <SearchInput
                placeholder="Search patients..."
                onSearch={setSearchQuery}
                value={searchQuery}
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Filter patients"
            >
              <FontAwesomeIcon
                icon={faFilter}
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
              />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <PatientList searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
}
