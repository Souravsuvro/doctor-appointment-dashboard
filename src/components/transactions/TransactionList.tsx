'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faClock, 
  faTimesCircle,
  faFileInvoiceDollar,
  faEllipsisVertical,
  faDownload
} from '@fortawesome/free-solid-svg-icons';

type Transaction = {
  id: string;
  patientName: string;
  date: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  type: 'consultation' | 'procedure' | 'medication' | 'lab_test';
  invoiceId: string;
};

interface TransactionListProps {
  period: string;
  status: string;
  searchQuery: string;
}

export default function TransactionList({ period, status, searchQuery }: TransactionListProps) {
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(null);

  // Mock data - replace with real data in production
  const transactions: Transaction[] = [
    {
      id: 'txn_1',
      patientName: 'John Smith',
      date: '2025-02-15',
      amount: 150.00,
      status: 'completed',
      type: 'consultation',
      invoiceId: 'INV-2025-001'
    },
    {
      id: 'txn_2',
      patientName: 'Emma Johnson',
      date: '2025-02-15',
      amount: 500.00,
      status: 'pending',
      type: 'procedure',
      invoiceId: 'INV-2025-002'
    },
    {
      id: 'txn_3',
      patientName: 'Michael Brown',
      date: '2025-02-14',
      amount: 75.00,
      status: 'failed',
      type: 'medication',
      invoiceId: 'INV-2025-003'
    },
    {
      id: 'txn_4',
      patientName: 'Sarah Wilson',
      date: '2025-02-14',
      amount: 250.00,
      status: 'completed',
      type: 'lab_test',
      invoiceId: 'INV-2025-004'
    }
  ];

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-50 dark:bg-green-500/10';
      case 'pending':
        return 'text-yellow-500 bg-yellow-50 dark:bg-yellow-500/10';
      case 'failed':
        return 'text-red-500 bg-red-50 dark:bg-red-500/10';
    }
  };

  const getStatusIcon = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return faCheckCircle;
      case 'pending':
        return faClock;
      case 'failed':
        return faTimesCircle;
    }
  };

  const getTypeLabel = (type: Transaction['type']) => {
    return type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
              Transaction ID
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
              Patient
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
              Date
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
              Type
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
              Amount
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
              Status
            </th>
            <th className="px-6 py-4 text-right text-sm font-medium text-gray-500 dark:text-gray-400">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {transactions.map((transaction) => (
            <tr 
              key={transaction.id}
              className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                {transaction.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                {transaction.patientName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {new Date(transaction.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {getTypeLabel(transaction.type)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                ${transaction.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                  <FontAwesomeIcon icon={getStatusIcon(transaction.status)} className="w-3 h-3" />
                  {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                <div className="relative inline-block">
                  <button
                    onClick={() => setSelectedTransaction(selectedTransaction === transaction.id ? null : transaction.id)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <FontAwesomeIcon icon={faEllipsisVertical} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                  
                  {selectedTransaction === transaction.id && (
                    <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                      <button
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 flex items-center gap-2"
                        onClick={() => {/* TODO: Implement download */}}
                      >
                        <FontAwesomeIcon icon={faDownload} className="w-4 h-4" />
                        Download Receipt
                      </button>
                      <button
                        className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 flex items-center gap-2"
                        onClick={() => {/* TODO: Implement view invoice */}}
                      >
                        <FontAwesomeIcon icon={faFileInvoiceDollar} className="w-4 h-4" />
                        View Invoice
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Showing 1-4 of 40 transactions
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors">
            1
          </button>
          <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
            2
          </button>
          <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
            3
          </button>
          <button className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
