import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEllipsisVertical, 
  faExclamationTriangle,
  faUserClock,
  faFileCircleCheck
} from '@fortawesome/free-solid-svg-icons';

interface Update {
  id: string;
  title: string;
  description: string;
  time: string;
  type: 'alert' | 'followup' | 'report';
  priority: 'high' | 'medium' | 'low';
}

const updates: Update[] = [
  {
    id: '1',
    title: 'Critical Lab Results',
    description: 'Abnormal blood test results for patient #2847',
    time: '10 minutes ago',
    type: 'alert',
    priority: 'high'
  },
  {
    id: '2',
    title: 'Follow-up Required',
    description: 'Post-surgery check-up for Sarah Johnson',
    time: '1 hour ago',
    type: 'followup',
    priority: 'medium'
  },
  {
    id: '3',
    title: 'Test Results Available',
    description: 'MRI scan results ready for review',
    time: '2 hours ago',
    type: 'report',
    priority: 'low'
  }
];

function getTypeIcon(type: Update['type']): { icon: any; color: string } {
  switch (type) {
    case 'alert':
      return { icon: faExclamationTriangle, color: 'red' };
    case 'followup':
      return { icon: faUserClock, color: 'blue' };
    case 'report':
      return { icon: faFileCircleCheck, color: 'green' };
  }
}

function getPriorityStyle(priority: Update['priority']): string {
  switch (priority) {
    case 'high':
      return 'text-red-400 dark:text-red-300 bg-red-100/60 dark:bg-red-500/10';
    case 'medium':
      return 'text-yellow-500 dark:text-yellow-300 bg-yellow-100/60 dark:bg-yellow-500/10';
    case 'low':
      return 'text-green-500 dark:text-green-300 bg-green-100/60 dark:bg-green-500/10';
  }
}

export default function Updates() {
  return (
    <div className="bg-white/60 dark:bg-[#1a1f37] rounded-xl shadow-sm border border-gray-200/60 dark:border-gray-800/60">
      <div className="p-4 border-b border-gray-200/60 dark:border-gray-800/60">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Urgent Follow-ups & Alerts
          </h2>
          <button className="p-1 hover:bg-gray-100/60 dark:hover:bg-gray-700/40 rounded-lg transition-colors">
            <FontAwesomeIcon icon={faEllipsisVertical} className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-200/60 dark:divide-gray-800/60">
        {updates.map((update) => {
          const { icon, color } = getTypeIcon(update.type);
          const priorityClass = getPriorityStyle(update.priority);
          return (
            <div key={update.id} className="p-4 hover:bg-gray-50/60 dark:hover:bg-gray-800/40 transition-colors">
              <div className="flex gap-4">
                <div className={`flex-shrink-0 p-2 rounded-lg ${priorityClass}`}>
                  <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {update.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {update.description}
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        {update.time}
                      </p>
                    </div>
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
