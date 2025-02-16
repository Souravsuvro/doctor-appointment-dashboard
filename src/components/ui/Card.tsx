import { CardProps } from '@/types/dashboard';

export default function Card({ 
  title, 
  children, 
  gradient = 'from-white to-white',
  onAction,
  actionLabel,
  className = ''
}: CardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold dark:text-white">{title}</h2>
        {onAction && actionLabel && (
          <button
            onClick={onAction}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
          >
            {actionLabel}
          </button>
        )}
      </div>
      {children}
    </div>
  );
}
