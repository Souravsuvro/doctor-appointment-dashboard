'use client';

import { useState } from 'react';
import { 
  faChevronLeft, 
  faChevronRight,
  faCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

type AppointmentData = {
  [key: string]: number;
};

const appointments: AppointmentData = {
  '2025-02-15': 2,
  '2025-02-18': 1,
  '2025-02-20': 3,
};

export default function AppointmentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const calendarDays = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="h-8"></div>);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const dateString = date.toISOString().split('T')[0];
      const isToday = new Date().toDateString() === date.toDateString();
      const hasAppointments = appointments[dateString];

      calendarDays.push(
        <div 
          key={day}
          className={`
            relative h-8 flex items-center justify-center
            text-xs font-medium rounded-lg
            ${isToday 
              ? 'bg-[#3461FF] text-white' 
              : 'hover:bg-gray-50 dark:hover:bg-white/5'
            }
            ${hasAppointments ? 'font-semibold' : ''}
          `}
        >
          <span className={`
            ${isToday 
              ? 'text-white' 
              : 'text-gray-700 dark:text-gray-300'
            }
          `}>
            {day}
          </span>
          {hasAppointments && (
            <div className="absolute -bottom-1 flex gap-0.5">
              {[...Array(Math.min(hasAppointments, 3))].map((_, i) => (
                <FontAwesomeIcon 
                  key={i}
                  icon={faCircle} 
                  className="w-1 h-1 text-[#3461FF] dark:text-blue-400" 
                />
              ))}
            </div>
          )}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-[#1a1f37] dark:via-[#1a1f37] dark:to-[#1a1f37] rounded-xl shadow-sm p-6 h-full flex flex-col">
      <div className="gap-1 space-y-12 flex-1">
        {/* Calendar Header */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevMonth}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/30"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
            </button>
            <button
              onClick={handleNextMonth}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/30"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="space-y-4 flex-1 flex flex-col">
          {/* Day Labels */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (
              <div 
                key={day}
                className="h-8 flex items-center justify-center text-xs font-medium text-gray-500 dark:text-gray-400"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1 flex-1">
            {renderCalendar()}
          </div>
        </div>
      </div>
    </div>
  );
}
