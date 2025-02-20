'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowTrendUp,
  faArrowTrendDown,
  faCreditCard,
  faMoneyBillTransfer,
  faChartLine,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

interface TransactionStatsProps {
  period: string;
}

export default function TransactionStats({ period }: TransactionStatsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue Overview */}
      <div className="bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Revenue Overview
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Last {period}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">$24,563.00</span>
              <span className="text-sm text-green-500 flex items-center gap-1">
                <FontAwesomeIcon icon={faArrowTrendUp} className="w-3 h-3" />
                12.5%
              </span>
            </div>
          </div>
          
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Average Transaction</span>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">$245.50</span>
              <span className="text-sm text-red-500 flex items-center gap-1">
                <FontAwesomeIcon icon={faArrowTrendDown} className="w-3 h-3" />
                2.3%
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Card Payments</span>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCreditCard} className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">75%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Bank Transfers</span>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMoneyBillTransfer} className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">20%</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Other Methods</span>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faChartLine} className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">5%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Health */}
      <div className="bg-white dark:bg-[#1a1f37] rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Transaction Health
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Last {period}
          </span>
        </div>

        <div className="space-y-6">
          {/* Success Rate */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Success Rate</span>
              <span className="text-sm font-medium text-green-500">95.8%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '95.8%' }}></div>
            </div>
          </div>

          {/* Pending Rate */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Pending Rate</span>
              <span className="text-sm font-medium text-yellow-500">3.2%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 rounded-full" style={{ width: '3.2%' }}></div>
            </div>
          </div>

          {/* Failure Rate */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Failure Rate</span>
              <span className="text-sm font-medium text-red-500">1%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full" style={{ width: '1%' }}></div>
            </div>
          </div>

          {/* Issues Requiring Attention */}
          <div className="mt-6">
            <div className="flex items-center gap-2 text-yellow-500 mb-2">
              <FontAwesomeIcon icon={faExclamationTriangle} className="w-4 h-4" />
              <span className="text-sm font-medium">Issues Requiring Attention</span>
            </div>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500 dark:text-gray-400">
                • 3 failed transactions need review
              </li>
              <li className="text-sm text-gray-500 dark:text-gray-400">
                • 2 payments pending for over 48 hours
              </li>
              <li className="text-sm text-gray-500 dark:text-gray-400">
                • 1 refund request awaiting processing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
