'use client';

import { useState } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { 
  faChartLine, 
  faGauge, 
  faHospitalUser, 
  faCalendarCheck,
  faMoneyBillTransfer,
  faGear,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

const sidebarLinks = [
  { href: '/', icon: faGauge, label: 'Dashboard' },
  { href: '/appointments', icon: faCalendarCheck, label: 'Appointments' },
  { href: '/patients', icon: faHospitalUser, label: 'Patients' },
  { href: '/analytics', icon: faChartLine, label: 'Analytics' },
  { href: '/transactions', icon: faMoneyBillTransfer, label: 'Transactions' },
  { href: '/settings', icon: faGear, label: 'Settings' },
];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
          links={sidebarLinks}
        />
        <Header isSidebarOpen={isSidebarOpen} />
        <main 
          className={`
            min-h-screen pt-16
            transition-all duration-300
            ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}
          `}
        >
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
