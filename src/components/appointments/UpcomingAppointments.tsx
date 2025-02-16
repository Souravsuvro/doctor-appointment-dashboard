'use client';

import { useState } from 'react';
import { 
  faClock,
  faVideo,
  faMessage,
  faEllipsisVertical,
  faPhoneVolume,
  faCalendarPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoCall from './VideoCall';

// Mock upcoming appointments data
const upcomingAppointments = [
  {
    id: 1,
    patientName: 'Sarah Johnson',
    time: '09:00 AM',
    type: 'video',
    status: 'confirmed',
    avatar: '🧑'
  },
  {
    id: 2,
    patientName: 'Michael Brown',
    time: '10:30 AM',
    type: 'call',
    status: 'pending',
    avatar: '👨'
  },
  {
    id: 3,
    patientName: 'Emma Wilson',
    time: '02:00 PM',
    type: 'video',
    status: 'confirmed',
    avatar: '👩'
  }
];

export default function UpcomingAppointments() {
  const [selectedAppointment, setSelectedAppointment] = useState<typeof upcomingAppointments[0] | null>(null);

  return (
    <>
      <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-[#1a1f37] dark:via-[#1a1f37] dark:to-[#1a1f37] rounded-xl shadow-sm p-6 h-full flex flex-col">
        <div className="space-y-6 flex-1">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Today&apos;s Appointments
            </h2>
            <button 
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#3461FF] rounded-lg hover:bg-[#3461FF]/90 transition-colors"
            >
              <FontAwesomeIcon icon={faCalendarPlus} className="w-4 h-4" />
              New Appointment
            </button>
          </div>

          {/* Appointments List */}
          <div className="space-y-4 flex-1">
            {upcomingAppointments.map((appointment) => (
              <div 
                key={appointment.id}
                className="p-4 bg-white/50 dark:bg-gray-800/40 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                      <FontAwesomeIcon 
                        icon={appointment.type === 'video' ? faVideo : faPhoneVolume}
                        className="w-5 h-5 text-blue-600 dark:text-blue-400" 
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        {appointment.patientName}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <FontAwesomeIcon 
                          icon={faClock} 
                          className="w-3 h-3 text-gray-400 dark:text-gray-500" 
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {appointment.time}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${appointment.status === 'confirmed'
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                        : 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                      }
                    `}>
                      {appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                    </span>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      {appointment.type === 'video' && appointment.status === 'confirmed' && (
                        <button 
                          onClick={() => setSelectedAppointment(appointment)}
                          className="p-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                          title="Join Video Call"
                        >
                          <FontAwesomeIcon icon={faVideo} className="w-4 h-4" />
                        </button>
                      )}
                      <button 
                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/30 rounded-lg transition-colors"
                        title="Send Message"
                      >
                        <FontAwesomeIcon icon={faMessage} className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/30 rounded-lg transition-colors"
                        title="More Options"
                      >
                        <FontAwesomeIcon icon={faEllipsisVertical} className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Call */}
      {selectedAppointment && (
        <VideoCall
          patientName={selectedAppointment.patientName}
          appointmentType="Video Consultation"
          onClose={() => setSelectedAppointment(null)}
        />
      )}
    </>
  );
}
