import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButtonProps } from '@/types/dashboard';

const VARIANT_STYLES = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400',
  ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
};

export default function IconButton({
  icon,
  onClick,
  label,
  badge,
  variant = 'secondary',
  className = ''
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative p-2 rounded-lg transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
        ${VARIANT_STYLES[variant]}
        ${className}
      `}
      aria-label={label}
      title={label}
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5" aria-hidden="true" />
      {badge !== undefined && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
}
