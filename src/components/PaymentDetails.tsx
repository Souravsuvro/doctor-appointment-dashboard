import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEllipsisVertical,
  faCreditCard,
  faMoneyBillTransfer,
  faWallet,
  faChevronDown,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

interface Payment {
  id: string;
  patientName: string;
  date: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  method: 'card' | 'transfer' | 'wallet';
}

const payments: Payment[] = [
  {
    id: '1',
    patientName: 'Sarah Johnson',
    date: '15 Feb, 2025',
    amount: 150.00,
    status: 'completed',
    method: 'card'
  },
  {
    id: '2',
    patientName: 'Michael Brown',
    date: '15 Feb, 2025',
    amount: 75.50,
    status: 'pending',
    method: 'transfer'
  },
  {
    id: '3',
    patientName: 'Emma Wilson',
    date: '14 Feb, 2025',
    amount: 200.00,
    status: 'completed',
    method: 'wallet'
  },
  {
    id: '4',
    patientName: 'James Miller',
    date: '14 Feb, 2025',
    amount: 95.00,
    status: 'failed',
    method: 'card'
  }
];

const getMethodIcon = (method: Payment['method']) => {
  switch (method) {
    case 'card':
      return { icon: faCreditCard, bgClass: 'bg-blue-100 dark:bg-blue-500/10', textClass: 'text-blue-600 dark:text-blue-400' };
    case 'transfer':
      return { icon: faMoneyBillTransfer, bgClass: 'bg-green-100 dark:bg-green-500/10', textClass: 'text-green-600 dark:text-green-400' };
    case 'wallet':
      return { icon: faWallet, bgClass: 'bg-purple-100 dark:bg-purple-500/10', textClass: 'text-purple-600 dark:text-purple-400' };
  }
};

const getStatusStyle = (status: Payment['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
    case 'pending':
      return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
    case 'failed':
      return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
  }
};

const filterOptions = [
  { value: 'today', label: 'Today' },
  { value: 'yesterday', label: 'Yesterday' },
  { value: 'this_week', label: 'This Week' },
  { value: 'this_month', label: 'This Month' }
];

export default function PaymentDetails() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('today');
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

  const filterPayments = (payments: Payment[], filter: string): Payment[] => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfYesterday = new Date(startOfDay);
    startOfYesterday.setDate(startOfYesterday.getDate() - 1);
    const startOfWeek = new Date(startOfDay);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    return payments.filter(payment => {
      const paymentDate = new Date(payment.date);
      switch (filter) {
        case 'today':
          return paymentDate >= startOfDay;
        case 'yesterday':
          return paymentDate >= startOfYesterday && paymentDate < startOfDay;
        case 'this_week':
          return paymentDate >= startOfWeek;
        case 'this_month':
          return paymentDate >= startOfMonth;
        default:
          return true;
      }
    });
  };

  const filteredPayments = filterPayments(payments, selectedFilter);
  const totalEarnings = filteredPayments.reduce((sum, payment) => sum + payment.amount, 0);

  return (
    <div className="bg-white/60 dark:bg-[#1a1f37] rounded-xl shadow-sm border border-gray-200/60 dark:border-gray-700/30">
      <div className="p-4 border-b border-gray-200/60 dark:border-gray-700/30">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Details</h2>
          <div className="relative" ref={filterRef}>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 bg-gray-100/60 dark:bg-gray-700/40 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-600/40 transition-colors relative pr-8"
            >
              {filterOptions.find(option => option.value === selectedFilter)?.label}
              <FontAwesomeIcon 
                icon={faChevronDown} 
                className={`w-3 h-3 absolute right-3 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedFilter(option.value);
                      setIsFilterOpen(false);
                    }}
                    className={`
                      w-full px-4 py-2 text-sm text-left transition-colors
                      ${selectedFilter === option.value
                        ? 'bg-gray-100 dark:bg-gray-700/60 text-gray-900 dark:text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/40'
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200/60 dark:divide-gray-700/30">
        {filteredPayments.map((payment) => {
          const { icon, bgClass, textClass } = getMethodIcon(payment.method);
          return (
            <div key={payment.id} className="p-4 hover:bg-gray-50/60 dark:hover:bg-gray-700/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`flex-shrink-0 p-2 rounded-lg ${bgClass}`}>
                  <FontAwesomeIcon icon={icon} className={`w-5 h-5 ${textClass}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {payment.patientName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {payment.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        ${payment.amount.toFixed(2)}
                      </p>
                      <span className={`
                        inline-block px-2 py-0.5 text-xs font-medium rounded-full
                        ${getStatusStyle(payment.status)}
                      `}>
                        {payment.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-4 border-t border-gray-200/60 dark:border-gray-700/30">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600 dark:text-gray-400">Total Earnings</span>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            ${totalEarnings.toFixed(2)}
          </span>
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-50/60 dark:bg-gray-700/40 hover:bg-gray-100/60 dark:hover:bg-gray-600/40 rounded-lg transition-all">
          View All Payments
          <FontAwesomeIcon 
            icon={faChevronRight} 
            className="w-3 h-3 transition-transform group-hover:translate-x-1" 
          />
        </button>
      </div>
    </div>
  );
}
