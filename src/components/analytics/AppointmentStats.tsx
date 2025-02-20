'use client';

import 'chart.js/auto';
import { Chart as ChartJS, ChartOptions } from 'chart.js';
import dynamic from 'next/dynamic';

const Line = dynamic(() => import('react-chartjs-2').then(mod => mod.Line), { ssr: false });

import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface AppointmentStatsProps {
  _dateRange: string;
}

// Mock data
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Completed',
      data: [25, 30, 28, 32, 27, 15, 10],
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      fill: true,
      tension: 0.4
    },
    {
      label: 'Scheduled',
      data: [30, 35, 32, 37, 30, 20, 15],
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.4
    }
  ]
};

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        usePointStyle: true,
        padding: 20,
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true,
        drawBorder: false,
      },
      ticks: {
        stepSize: 10
      }
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      }
    }
  },
  elements: {
    point: {
      radius: 3,
      hoverRadius: 6,
    }
  }
};

export default function AppointmentStats({ _dateRange }: AppointmentStatsProps) {
  return (
    <div className="bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/30 p-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Appointment Statistics
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Scheduled</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[300px]">
          <Line options={options} data={data} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700/30">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Appointments
            </p>
            <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
              167
            </p>
            <p className="mt-1 text-sm text-green-600 dark:text-green-400">
              +8.5% vs prev. {_dateRange}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Completion Rate
            </p>
            <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
              89%
            </p>
            <p className="mt-1 text-sm text-green-600 dark:text-green-400">
              +2.3% vs prev. {_dateRange}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
