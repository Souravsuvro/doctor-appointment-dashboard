'use client';

import dynamic from 'next/dynamic';
const Doughnut = dynamic(() => import('react-chartjs-2').then(mod => mod.Doughnut), { ssr: false });

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

if (typeof window !== 'undefined') {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
  );
}

interface PatientDemographicsProps {
  dateRange: string;
}

// Mock data
const ageData = {
  labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
  datasets: [
    {
      data: [15, 25, 30, 20, 10],
      backgroundColor: [
        'rgba(236, 72, 153, 0.8)',  // pink
        'rgba(99, 102, 241, 0.8)',  // indigo
        'rgba(34, 197, 94, 0.8)',   // green
        'rgba(249, 115, 22, 0.8)',  // orange
        'rgba(168, 85, 247, 0.8)',  // purple
      ],
      borderWidth: 0,
    }
  ]
};

const genderData = {
  labels: ['Male', 'Female', 'Other'],
  datasets: [
    {
      data: [45, 52, 3],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',  // blue
        'rgba(236, 72, 153, 0.8)',  // pink
        'rgba(168, 85, 247, 0.8)',  // purple
      ],
      borderWidth: 0,
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        usePointStyle: true,
        padding: 20,
      }
    }
  },
  cutout: '60%'
};

export default function PatientDemographics({ dateRange }: PatientDemographicsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/30 p-6">
      <div className="flex flex-col space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Patient Demographics
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Age Distribution */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 text-center">
              Age Distribution
            </h4>
            <div className="h-[200px] relative">
              <Doughnut data={ageData} options={options} />
            </div>
          </div>

          {/* Gender Distribution */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4 text-center">
              Gender Distribution
            </h4>
            <div className="h-[200px] relative">
              <Doughnut data={genderData} options={options} />
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700/30">
          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
            Key Insights
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Majority of patients are between 35-44 years old (30%)
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              Female patients slightly higher at 52%
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              25% increase in 25-34 age group vs prev. {dateRange}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
