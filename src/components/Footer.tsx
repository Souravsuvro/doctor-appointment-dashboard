import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <div className="w-full py-4 bg-white dark:bg-[#1a1f37] border-t border-gray-200/60 dark:border-gray-700/30">
      <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors group">
        <span className="text-sm font-medium">Made with</span>
        <FontAwesomeIcon 
          icon={faHeart} 
          className="w-4 h-4 text-red-500 dark:text-red-400 group-hover:scale-110 transition-transform" 
        />
        <span className="text-sm font-medium">by</span>
        <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Sourav
        </span>
      </div>
    </div>
  );
}
