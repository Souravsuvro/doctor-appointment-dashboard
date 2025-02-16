import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown, 
  faChevronRight, 
  faUserCheck, 
  faStar,
  faCalendarCheck,
  faClock,
  faHeartPulse,
  faUserNurse
} from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';

interface PerformanceData {
  patientsServed: number;
  patientSatisfaction: number;
  avgWaitTime: string;
  appointmentCompletion: number;
  positiveReviews: number;
  totalReviews: number;
  onTimeRate: number;
  treatmentSuccessRate: number;
  followUpCareRating: number;
  totalFollowUps: number;
  positiveFollowUps: number;
}

type TimeFilter = 'last_7_days' | 'last_30_days' | 'last_90_days' | 'this_year';

const performanceData: Record<TimeFilter, PerformanceData> = {
  last_7_days: {
    patientsServed: 127,
    patientSatisfaction: 94,
    avgWaitTime: '12 min',
    appointmentCompletion: 85,
    positiveReviews: 118,
    totalReviews: 125,
    onTimeRate: 92,
    treatmentSuccessRate: 95,
    followUpCareRating: 96,
    totalFollowUps: 82,
    positiveFollowUps: 79
  },
  last_30_days: {
    patientsServed: 483,
    patientSatisfaction: 92,
    avgWaitTime: '15 min',
    appointmentCompletion: 88,
    positiveReviews: 445,
    totalReviews: 472,
    onTimeRate: 90,
    treatmentSuccessRate: 93,
    followUpCareRating: 94,
    totalFollowUps: 312,
    positiveFollowUps: 293
  },
  last_90_days: {
    patientsServed: 1247,
    patientSatisfaction: 91,
    avgWaitTime: '14 min',
    appointmentCompletion: 86,
    positiveReviews: 1150,
    totalReviews: 1220,
    onTimeRate: 89,
    treatmentSuccessRate: 92,
    followUpCareRating: 93,
    totalFollowUps: 856,
    positiveFollowUps: 796
  },
  this_year: {
    patientsServed: 3842,
    patientSatisfaction: 93,
    avgWaitTime: '13 min',
    appointmentCompletion: 87,
    positiveReviews: 3580,
    totalReviews: 3800,
    onTimeRate: 91,
    treatmentSuccessRate: 94,
    followUpCareRating: 95,
    totalFollowUps: 2540,
    positiveFollowUps: 2413
  }
};

export default function PerformanceOverview() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<TimeFilter>('last_7_days');
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filterOptions: { value: TimeFilter; label: string }[] = [
    { value: 'last_7_days', label: 'Last 7 days' },
    { value: 'last_30_days', label: 'Last 30 days' },
    { value: 'last_90_days', label: 'Last 90 days' },
    { value: 'this_year', label: 'This Year' }
  ];

  const currentData = performanceData[selectedFilter];

  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-[#1a1f37] dark:via-[#1a1f37] dark:to-[#1a1f37] rounded-xl shadow-sm">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Performance Overview</h2>
          <div className="relative" ref={filterRef}>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 hover:bg-white dark:hover:bg-gray-700/60 rounded-lg transition-all relative pr-8"
            >
              {filterOptions.find(option => option.value === selectedFilter)?.label}
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`w-3 h-3 absolute right-3 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 py-1 z-10">
                {filterOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedFilter(option.value);
                      setIsFilterOpen(false);
                    }}
                    className={`
                      w-full px-4 py-2 text-sm text-left transition-colors flex items-center justify-between
                      ${selectedFilter === option.value 
                        ? 'bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-medium' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    {option.label}
                    {selectedFilter === option.value && (
                      <FontAwesomeIcon 
                        icon={faChevronRight} 
                        className="w-3 h-3 text-gray-500 dark:text-gray-400"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-white/60 dark:bg-gray-800/40 rounded-lg space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-100 dark:bg-blue-500/10 rounded-md">
                <FontAwesomeIcon icon={faUserCheck} className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {currentData.patientsServed}
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Patients Served</p>
          </div>

          <div className="p-3 bg-white/60 dark:bg-gray-800/40 rounded-lg space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-amber-100 dark:bg-amber-500/10 rounded-md">
                <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {currentData.patientSatisfaction}%
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  ({currentData.positiveReviews}/{currentData.totalReviews})
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Patient Satisfaction</p>
          </div>

          <div className="p-3 bg-white/60 dark:bg-gray-800/40 rounded-lg space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-green-100 dark:bg-green-500/10 rounded-md">
                <FontAwesomeIcon icon={faCalendarCheck} className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {currentData.onTimeRate}%
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">On-Time Rate</p>
          </div>

          <div className="p-3 bg-white/60 dark:bg-gray-800/40 rounded-lg space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-purple-100 dark:bg-purple-500/10 rounded-md">
                <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {currentData.avgWaitTime}
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Avg. Wait Time</p>
          </div>

          <div className="p-3 bg-white/60 dark:bg-gray-800/40 rounded-lg space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-rose-100 dark:bg-rose-500/10 rounded-md">
                <FontAwesomeIcon icon={faHeartPulse} className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              </div>
              <p className="text-2xl font-bold text-rose-600 dark:text-rose-400">
                {currentData.treatmentSuccessRate}%
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Treatment Success</p>
          </div>

          <div className="p-3 bg-white/60 dark:bg-gray-800/40 rounded-lg space-y-1">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-100 dark:bg-indigo-500/10 rounded-md">
                <FontAwesomeIcon icon={faUserNurse} className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  {currentData.followUpCareRating}%
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  ({currentData.positiveFollowUps}/{currentData.totalFollowUps})
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Follow-up Care</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-gray-700 dark:text-gray-200">Appointment Completion</span>
            <span className="text-gray-500 dark:text-gray-400">{currentData.appointmentCompletion}%</span>
          </div>
          <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500"
              style={{ width: `${currentData.appointmentCompletion}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
