import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faClock, faFlask, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface AlertItem {
  id: string;
  type: 'critical' | 'preventive' | 'lab';
  patient: string;
  description: string;
  priority: 'High Priority' | 'Medium Priority' | 'Review Required';
  time: string;
}

const alerts: AlertItem[] = [
  {
    id: '1',
    type: 'critical',
    patient: 'Robert Brown',
    description: 'Post-surgery check required within 24hrs',
    priority: 'High Priority',
    time: '2 hours ago'
  },
  {
    id: '2',
    type: 'preventive',
    patient: 'Mary Johnson',
    description: 'Annual check-up overdue by 2 weeks',
    priority: 'Medium Priority',
    time: '1 day ago'
  },
  {
    id: '3',
    type: 'lab',
    patient: 'James Wilson',
    description: 'Abnormal blood test results detected',
    priority: 'Review Required',
    time: '3 hours ago'
  }
];

const getPriorityStyles = (type: AlertItem['type']) => {
  switch (type) {
    case 'critical':
      return {
        bg: 'bg-red-50 hover:bg-red-100/80 dark:bg-red-500/5 dark:hover:bg-red-500/10',
        text: 'text-red-700 dark:text-red-300',
        badge: 'bg-red-100 dark:bg-red-500/10',
        badgeText: 'text-red-700 dark:text-red-300',
        border: 'border-red-200/50 dark:border-red-500/10',
        icon: faExclamationCircle,
        shadow: 'shadow-red-100/50 dark:shadow-red-500/10'
      };
    case 'preventive':
      return {
        bg: 'bg-amber-50 hover:bg-amber-100/80 dark:bg-amber-500/5 dark:hover:bg-amber-500/10',
        text: 'text-amber-700 dark:text-amber-300',
        badge: 'bg-amber-100 dark:bg-amber-500/10',
        badgeText: 'text-amber-700 dark:text-amber-300',
        border: 'border-amber-200/50 dark:border-amber-500/10',
        icon: faClock,
        shadow: 'shadow-amber-100/50 dark:shadow-amber-500/10'
      };
    case 'lab':
      return {
        bg: 'bg-blue-50 hover:bg-blue-100/80 dark:bg-blue-500/5 dark:hover:bg-blue-500/10',
        text: 'text-blue-700 dark:text-blue-300',
        badge: 'bg-blue-100 dark:bg-blue-500/10',
        badgeText: 'text-blue-700 dark:text-blue-300',
        border: 'border-blue-200/50 dark:border-blue-500/10',
        icon: faFlask,
        shadow: 'shadow-blue-100/50 dark:shadow-blue-500/10'
      };
  }
};

export default function UrgentFollowups() {
  return (
    <div className="relative w-full p-8 bg-gradient-to-br from-red-50 via-red-50/50 to-white dark:from-[#1a1f37] dark:via-[#1a1f37] dark:to-[#1a1f37] rounded-xl shadow-lg border border-red-100/20 dark:border-gray-800/60">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-red-100 dark:bg-red-500/10 rounded-lg p-2">
            <FontAwesomeIcon icon={faExclamationCircle} className="w-5 h-5 text-red-600 dark:text-red-300" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Urgent Follow-ups & Alerts</h2>
        </div>
        <Link 
          href="/alerts" 
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 dark:text-red-300 hover:text-red-700 dark:hover:text-red-200 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all"
        >
          View All Alerts
          <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {alerts.map((alert) => {
          const styles = getPriorityStyles(alert.type);
          return (
            <div
              key={alert.id}
              className={`
                ${styles.bg} p-5 rounded-xl border ${styles.border}
                transition-all duration-200 cursor-pointer
                hover:shadow-md ${styles.shadow}
                group
              `}
            >
              <div className="flex items-start gap-4">
                <div className={`${styles.badge} p-2.5 rounded-lg ${styles.text} transition-transform duration-200 group-hover:scale-110`}>
                  <FontAwesomeIcon icon={styles.icon} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                      {alert.type === 'critical' && 'Critical Follow-up'}
                      {alert.type === 'preventive' && 'Preventive Care Due'}
                      {alert.type === 'lab' && 'Lab Results Alert'}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                      {alert.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {alert.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      {alert.patient}
                    </span>
                    <span className={`text-xs ${styles.text} font-medium`}>
                      {alert.priority}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
