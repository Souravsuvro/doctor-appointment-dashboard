'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { 
  faHome,
  faCalendarDays,
  faUserGroup,
  faChartLine,
  faCog,
  faRightFromBracket,
  faBars
} from '@fortawesome/free-solid-svg-icons';

interface SidebarLink {
  href: string;
  icon: IconDefinition;
  label: string;
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  links: SidebarLink[];
}

export default function Sidebar({ isOpen, onToggle, links }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700/30"
      >
        <FontAwesomeIcon icon={faBars} className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen
          transition-all duration-300 ease-in-out
          bg-white dark:bg-[#1a1f37]
          border-r border-gray-200 dark:border-gray-700/30
          ${isOpen ? 'w-64' : 'w-20'}
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        aria-label="Main navigation"
      >
        <nav className="h-full flex flex-col justify-between py-6" role="navigation">
          {/* Main Navigation */}
          <div className="px-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                  transition-colors duration-200
                  ${pathname === link.href
                    ? 'bg-[#3461FF]/10 dark:bg-[#3461FF]/20 text-[#3461FF] dark:text-white'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                  }
                `}
              >
                <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
                {isOpen && <span>{link.label}</span>}
              </Link>
            ))}
          </div>

          {/* Logout Button */}
          <div className="px-4">
            <button
              className="
                w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5
                transition-colors duration-200
              "
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="w-5 h-5" />
              {isOpen && <span>Logout</span>}
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}
