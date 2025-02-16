'use client';

import { useState } from 'react';

import TodayAppointments from '@/components/appointments/TodayAppointments';
import EPrescription from '@/components/EPrescription';
import Footer from '@/components/Footer';
import LatestNews from '@/components/LatestNews';
import RecentConversations from '@/components/RecentConversations';
import RecentTasks from '@/components/RecentTasks';
import UrgentFollowups from '@/components/UrgentFollowups';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="p-4 lg:p-6">
      <div className="max-w-8xl mx-auto space-y-6">
        {/* Main Content */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 space-y-6">
            {/* Tasks and Followups */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              <RecentTasks />
              <UrgentFollowups />
            </div>

            {/* Calendar and Communications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TodayAppointments />
              <RecentConversations />
            </div>

            {/* E-Prescription and News */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
              <EPrescription />
              <LatestNews />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
