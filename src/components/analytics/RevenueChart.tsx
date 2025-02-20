'use client';

import dynamic from 'next/dynamic';
const Bar = dynamic(() => import('react-chartjs-2').then(mod => mod.Bar), { ssr: false });

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

if (typeof window !== 'undefined') {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
}

// Mock data
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [4500, 5200, 4800, 5800, 4900, 5500],
      backgroundColor: 'rgba(99, 102, 241, 0.8)',
      borderRadius: 6,
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
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
        callback: function(value: number) {
          return `$${value.toLocaleString()}`;
        }
      }
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      }
    }
  }
};

interface RevenueChartProps {
  dateRange: string;
}

export default function RevenueChart({ dateRange }: RevenueChartProps) {
  const totalRevenue = data.datasets[0].data.reduce((a, b) => a + b, 0);
  const averageRevenue = totalRevenue / data.datasets[0].data.length;

  return (
    <div className="bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/30 p-6">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Revenue Overview
          </h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[300px]">
          <Bar options={options} data={data} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700/30">
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Revenue
            </p>
            <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
              ${totalRevenue.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-green-600 dark:text-green-400">
              +12.5% vs prev. {dateRange}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Average Revenue
            </p>
            <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
              ${averageRevenue.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-green-600 dark:text-green-400">
              +5.2% vs prev. {dateRange}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
