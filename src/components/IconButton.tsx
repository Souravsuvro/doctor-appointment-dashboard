import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IconButtonProps {
  icon: IconDefinition;
  label: string;
  onClick?: () => void;
  badge?: number;
  variant?: 'default' | 'ghost';
  className?: string;
}

export default function IconButton({
  icon,
  label,
  onClick,
  badge,
  variant = 'default',
  className = ''
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative ${className}`}
      aria-label={label}
    >
      <FontAwesomeIcon
        icon={icon}
        className="h-5 w-5 text-gray-600 dark:text-gray-300"
      />
      {badge && (
        <span className="absolute -top-1 -right-1 h-4 w-4 text-xs flex items-center justify-center text-white bg-blue-500 rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}
