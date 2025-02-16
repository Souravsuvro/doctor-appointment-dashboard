import { StatusBadgeProps } from '@/types/dashboard';

const STATUS_STYLES = {
  success: {
    bg: 'bg-green-100',
    text: 'text-green-700',
    border: 'border-green-200'
  },
  warning: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    border: 'border-yellow-200'
  },
  error: {
    bg: 'bg-red-100',
    text: 'text-red-700',
    border: 'border-red-200'
  },
  info: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    border: 'border-blue-200'
  }
};

export default function StatusBadge({ 
  status, 
  text,
  className = ''
}: StatusBadgeProps) {
  const styles = STATUS_STYLES[status];
  
  return (
    <span className={`
      px-3 py-1 rounded-full text-sm
      ${styles.bg} ${styles.text} ${styles.border}
      ${className}
    `}>
      {text}
    </span>
  );
}
