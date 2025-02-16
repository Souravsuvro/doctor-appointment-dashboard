'use client';

import { faCircle, faEllipsisVertical, faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import VideoCall from './VideoCall';

type AppointmentStatus = 'upcoming' | 'completed' | 'cancelled';

interface Appointment {
  id: number;
  patientName: string;
  date: string;
  time: string;
  type: string;
  status: AppointmentStatus;
  avatar: string;
}

// Mock appointments data
const appointments: Appointment[] = [
  {
    id: 1,
    patientName: 'Sarah Johnson',
    date: '2025-02-15',
    time: '09:00 AM',
    type: 'Check-up',
    status: 'upcoming',
    avatar: '🧑'
  },
  {
    id: 2,
    patientName: 'Michael Brown',
    date: '2025-02-15',
    time: '10:30 AM',
    type: 'Follow-up',
    status: 'completed',
    avatar: '👨'
  },
  {
    id: 3,
    patientName: 'Emma Wilson',
    date: '2025-02-15',
    time: '02:00 PM',
    type: 'Consultation',
    status: 'cancelled',
    avatar: '👩'
  },
  {
    id: 4,
    patientName: 'James Davis',
    date: '2025-02-16',
    time: '11:00 AM',
    type: 'Check-up',
    status: 'cancelled',
    avatar: '🧔'
  }
];

interface AppointmentListProps {
  searchQuery: string;
  filterStatus: 'all' | AppointmentStatus;
}

export default function AppointmentList({ searchQuery = '', filterStatus = 'all' }: AppointmentListProps) {
  const [selectedAppointment, setSelectedAppointment] = useState<number | null>(null);
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);

  const filteredAppointments = appointments.filter(appointment => {
    const query = searchQuery.toLowerCase();
    const patientName = appointment.patientName?.toLowerCase() || '';
    const type = appointment.type?.toLowerCase() || '';
    const matchesSearch = patientName.includes(query) || type.includes(query);
    const matchesFilter = filterStatus === 'all' || appointment.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: AppointmentStatus) => {
    switch (status) {
      case 'upcoming':
        return 'text-green-500';
      case 'completed':
        return 'text-blue-500';
      case 'cancelled':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {filteredAppointments.length === 0 ? (
        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
          No appointments found matching your criteria
        </div>
      ) : (
        filteredAppointments.map((appointment) => (
          <div 
            key={appointment.id}
            className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{appointment.avatar}</span>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {appointment.patientName}
                  </h3>
                  <div className="flex items-center mt-1 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{appointment.date}</span>
                    <span>•</span>
                    <span>{appointment.time}</span>
                    <span>•</span>
                    <span>{appointment.type}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <FontAwesomeIcon 
                        icon={faCircle} 
                        className={`w-2 h-2 mr-1 ${getStatusColor(appointment.status)}`} 
                      />
                      <span className="capitalize">{appointment.status}</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {appointment.status === 'upcoming' && (
                  <button
                    onClick={() => {
                      setSelectedAppointment(appointment.id);
                      setIsVideoCallOpen(true);
                    }}
                    className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                    title="Start video call"
                  >
                    <FontAwesomeIcon icon={faVideo} />
                  </button>
                )}
                <button
                  className="p-2 text-gray-400 hover:text-gray-500 transition-colors"
                  title="More options"
                >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {isVideoCallOpen && selectedAppointment && (
        <VideoCall
          appointment={appointments.find(a => a.id === selectedAppointment)!}
          onClose={() => {
            setIsVideoCallOpen(false);
            setSelectedAppointment(null);
          }}
        />
      )}
    </div>
  );
}
