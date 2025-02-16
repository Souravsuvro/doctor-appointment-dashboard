'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faChevronRight,
  faCircle,
  faClock,
  faUserInjured,
  faCalendarPlus,
  faEllipsisVertical,
  faVideo,
  faPhoneVolume,
  faUserDoctor,
  faHospital
} from '@fortawesome/free-solid-svg-icons';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Mock appointments data with more details
const appointments = {
  '2025-02-15': [
    { 
      id: 1, 
      time: '09:00', 
      patientName: 'John Smith',
      type: 'consultation',
      mode: 'in-person',
      status: 'confirmed',
      duration: 30,
      notes: 'Follow-up checkup'
    },
    { 
      id: 2, 
      time: '10:30', 
      patientName: 'Emma Johnson',
      type: 'procedure',
      mode: 'in-person',
      status: 'confirmed',
      duration: 45,
      notes: 'Annual physical'
    },
    { 
      id: 3, 
      time: '14:00', 
      patientName: 'Michael Brown',
      type: 'consultation',
      mode: 'video',
      status: 'confirmed',
      duration: 30,
      notes: 'Prescription renewal'
    }
  ],
  '2025-02-18': [
    { 
      id: 4, 
      time: '11:00', 
      patientName: 'Sarah Wilson',
      type: 'consultation',
      mode: 'phone',
      status: 'confirmed',
      duration: 30,
      notes: 'Test results review'
    },
    { 
      id: 5, 
      time: '15:30', 
      patientName: 'David Lee',
      type: 'procedure',
      mode: 'in-person',
      status: 'confirmed',
      duration: 60,
      notes: 'Minor surgery'
    }
  ],
  '2025-02-20': [
    { 
      id: 6, 
      time: '13:00', 
      patientName: 'Lisa Anderson',
      type: 'consultation',
      mode: 'video',
      status: 'confirmed',
      duration: 30,
      notes: 'Initial consultation'
    }
  ]
};

interface Appointment {
  id: number;
  time: string;
  patientName: string;
  type: 'consultation' | 'procedure';
  mode: 'in-person' | 'video' | 'phone';
  status: 'confirmed' | 'cancelled' | 'completed';
  duration: number;
  notes: string;
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showAppointmentMenu, setShowAppointmentMenu] = useState<number | null>(null);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    setSelectedDate(null);
  };

  const getModeIcon = (mode: Appointment['mode']) => {
    switch (mode) {
      case 'in-person':
        return faHospital;
      case 'video':
        return faVideo;
      case 'phone':
        return faPhoneVolume;
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-14"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dateString = date.toISOString().split('T')[0];
      const isToday = new Date().toDateString() === date.toDateString();
      const isSelected = dateString === selectedDate;
      const dayAppointments = appointments[dateString] || [];

      days.push(
        <div 
          key={day}
          onClick={() => setSelectedDate(dateString)}
          className={`
            relative h-14 p-1 rounded-lg cursor-pointer
            transition-all duration-200 group
            ${isSelected 
              ? 'bg-blue-500 shadow-lg scale-105' 
              : isToday
                ? 'bg-blue-100 dark:bg-blue-900/30'
                : 'hover:bg-gray-50 dark:hover:bg-white/5'
            }
          `}
        >
          <div className="flex flex-col h-full">
            <span className={`
              text-sm font-medium
              ${isSelected 
                ? 'text-white' 
                : isToday
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-200'
              }
            `}>
              {day}
            </span>
            {dayAppointments.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-0.5">
                {dayAppointments.map((apt, index) => (
                  <FontAwesomeIcon 
                    key={index}
                    icon={getModeIcon(apt.mode)}
                    className={`
                      w-3 h-3
                      ${isSelected 
                        ? 'text-white' 
                        : 'text-blue-500 dark:text-blue-400'
                      }
                    `}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  const selectedAppointments = selectedDate ? appointments[selectedDate] || [] : [];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 space-y-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <FontAwesomeIcon icon={faUserDoctor} className="text-blue-500" />
            Schedule
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevMonth}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </span>
            <button
              onClick={handleNextMonth}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="space-y-4">
          {/* Day Labels */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (
              <div 
                key={day}
                className="h-10 flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {renderCalendar()}
          </div>
        </div>

        {/* Selected Day Appointments */}
        {selectedDate && selectedAppointments.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">
              Appointments for {new Date(selectedDate).toLocaleDateString()}
            </h3>
            <div className="space-y-2">
              {selectedAppointments.map((apt) => (
                <div 
                  key={apt.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon 
                      icon={getModeIcon(apt.mode)}
                      className="w-4 h-4 text-blue-500"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {apt.patientName}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          ({apt.type})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                        {apt.time} ({apt.duration} min)
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <button
                      onClick={() => setShowAppointmentMenu(showAppointmentMenu === apt.id ? null : apt.id)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
                    >
                      <FontAwesomeIcon icon={faEllipsisVertical} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                    
                    {showAppointmentMenu === apt.id && (
                      <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50">
                          View Details
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50">
                          Edit Appointment
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700/50">
                          Cancel Appointment
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="flex items-center gap-4 text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHospital} className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-400">In-person</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faVideo} className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-400">Video</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhoneVolume} className="w-4 h-4 text-blue-500" />
            <span className="text-gray-600 dark:text-gray-400">Phone</span>
          </div>
        </div>
      </div>
    </div>
  );
}
