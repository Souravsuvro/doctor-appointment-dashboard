import { 
  faUserGroup, 
  faCalendarCheck, 
  faArrowUp,
  faArrowDown,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface StatCard {
  title: string;
  value: number;
  change: number;
  icon: IconDefinition;
  color: string;
}

const stats: StatCard[] = [
  {
    title: 'Total Patients',
    value: 1478,
    change: 12.5,
    icon: faUserGroup,
    color: 'blue'
  },
  {
    title: 'Appointments',
    value: 478,
    change: -2.4,
    icon: faCalendarCheck,
    color: 'rose'
  }
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
      {stats.map((stat, index) => {
        return (
          <div
            key={index}
            className="p-4 bg-white/60 dark:bg-[#1a1f37] rounded-xl shadow-sm border border-gray-200/60 dark:border-gray-700/30 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/20`}>
                <FontAwesomeIcon 
                  icon={stat.icon} 
                  className={`w-5 h-5 text-${stat.color}-600 dark:text-${stat.color}-400`}
                />
              </div>
              <div className="flex items-center gap-1.5">
                <FontAwesomeIcon 
                  icon={stat.change >= 0 ? faArrowUp : faArrowDown} 
                  className={`w-3.5 h-3.5 ${
                    stat.change >= 0 
                      ? 'text-green-600 dark:text-green-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}
                />
                <span className={`text-sm font-medium ${
                  stat.change >= 0 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {Math.abs(stat.change)}%
                </span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">{stat.title}</p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {stat.value.toLocaleString()}
            </p>
          </div>
        );
      })}
    </div>
  );
}
