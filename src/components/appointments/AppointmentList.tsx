import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEllipsisVertical, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Appointment, VideoCallProps } from '@/types/dashboard';
import VideoCall from './VideoCall';

type AppointmentStatus = Appointment['status'];

const appointments: Appointment[] = [
  {
    id: 1,
    patientName: 'John Doe',
    time: '09:00 AM',
    type: 'consultation',
    mode: 'video',
    status: 'scheduled',
    duration: 30,
    notes: 'Follow-up consultation'
  },
  // Add more appointments as needed
];

interface AppointmentListProps {
  searchQuery?: string;
  filterStatus?: string;
}

const AppointmentList: React.FC<AppointmentListProps> = ({ 
  searchQuery = '', 
  filterStatus = 'all' 
}) => {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);

  const filteredAppointments = appointments.filter(appointment => {
    const query = searchQuery.toLowerCase();
    const patientName = appointment.patientName?.toLowerCase() || '';
    const type = appointment.type?.toLowerCase() || '';
    const matchesSearch = patientName.includes(query) || type.includes(query);
    const matchesFilter = filterStatus === 'all' || appointment.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const handleVideoCall = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsVideoCallOpen(true);
  };

  const handleCloseVideoCall = () => {
    setIsVideoCallOpen(false);
    setSelectedAppointment(null);
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {filteredAppointments.length === 0 ? (
        <div className="text-center py-4 text-gray-500">
          No appointments found
        </div>
      ) : (
        filteredAppointments.map((appointment, index) => (
          <div 
            key={appointment.id} 
            className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FontAwesomeIcon 
                  icon={faCircle} 
                  className={`w-3 h-3 ${
                    appointment.status === 'scheduled' ? 'text-green-500' :
                    appointment.status === 'completed' ? 'text-blue-500' :
                    'text-red-500'
                  }`} 
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {appointment.patientName}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {appointment.type} - {appointment.time}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {appointment.mode === 'video' && (
                <button
                  onClick={() => handleVideoCall(appointment)}
                  className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                  title="Start video call"
                >
                  <FontAwesomeIcon icon={faVideo} className="w-4 h-4" />
                </button>
              )}
              <button 
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="More options"
              >
                <FontAwesomeIcon icon={faEllipsisVertical} className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))
      )}

      {isVideoCallOpen && selectedAppointment && (
        <VideoCall
          appointment={selectedAppointment}
          onClose={handleCloseVideoCall}
        />
      )}
    </div>
  );
};

export default AppointmentList;
