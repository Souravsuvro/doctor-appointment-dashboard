import { 
  _faCalendarCheck, 
  faVideo,
  _faHospital,
  _faClock,
  _faEllipsisVertical,
  _faCheck,
  _faTimes,
  _faEdit,
  _faUserDoctor,
  _faFilter,
  _faBell,
  _faCalendarPlus,
  _faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

import { Appointment, _VideoCallProps } from '@/types/dashboard';

import Calendar from '../Calendar';

import VideoCall from './VideoCall';

interface Notification {
  id: number;
  message: string;
  type: 'info' | 'warning' | 'success';
  timestamp: string;
}

const TodayAppointments: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      patientName: 'John Smith',
      time: '09:00',
      type: 'consultation',
      mode: 'video',
      status: 'scheduled' as const,
      duration: 30,
      notes: 'Follow-up checkup',
      age: 45,
      gender: 'Male',
      contactNumber: '+1 (555) 123-4567',
      email: 'john.smith@email.com',
      medicalHistory: 'Hypertension, Regular checkups'
    },
    {
      id: 2,
      patientName: 'Emma Johnson',
      time: '10:30',
      type: 'procedure',
      mode: 'in-person',
      status: 'scheduled' as const,
      duration: 45,
      notes: 'Annual physical',
      age: 32,
      gender: 'Female',
      contactNumber: '+1 (555) 987-6543',
      email: 'emma.j@email.com',
      medicalHistory: 'Asthma, Regular medication'
    },
    {
      id: 3,
      patientName: 'Michael Brown',
      time: '14:00',
      type: 'consultation',
      mode: 'video',
      status: 'scheduled' as const,
      duration: 30,
      notes: 'Prescription renewal',
      age: 28,
      gender: 'Male',
      contactNumber: '+1 (555) 456-7890',
      email: 'michael.b@email.com',
      medicalHistory: 'No significant conditions'
    },
    {
      id: 4,
      patientName: 'Michael Adam',
      time: '16:00',
      type: 'consultation',
      mode: 'video',
      status: 'scheduled' as const,
      duration: 30,
      notes: 'Prescription renewal',
      age: 69,
      gender: 'Male',
      contactNumber: '+1 (555) 456-7898',
      email: 'adam.b@email.com',
      medicalHistory: 'No significant conditions'
    }
  ]);

  const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>(appointments);
  const [activeCall, setActiveCall] = useState<Appointment | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [showMenu, setShowMenu] = useState<number | null>(null);
  const [showPatientDetails, setShowPatientDetails] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: 'all',
    mode: 'all',
    status: 'all'
  });
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [newAppointmentDate, setNewAppointmentDate] = useState<Date | null>(null);
  const [newAppointmentTime, setNewAppointmentTime] = useState<string>('');

  // Filter appointments based on selected filters
  useEffect(() => {
    let filtered = appointments;
    
    if (filters.type !== 'all') {
      filtered = filtered.filter(apt => apt.type === filters.type);
    }
    if (filters.mode !== 'all') {
      filtered = filtered.filter(apt => apt.mode === filters.mode);
    }
    if (filters.status !== 'all') {
      filtered = filtered.filter(apt => apt.status === filters.status);
    }
    
    setFilteredAppointments(filtered);
  }, [filters, appointments]);

  // Check for upcoming appointments and create notifications
  useEffect(() => {
    const checkUpcomingAppointments = () => {
      const currentTime = new Date();
      const upcomingNotifications: Notification[] = [];

      appointments.forEach(apt => {
        const [hours, minutes] = apt.time.split(':').map(Number);
        const appointmentTime = new Date();
        appointmentTime.setHours(hours, minutes);

        const timeDiff = appointmentTime.getTime() - currentTime.getTime();
        const minutesDiff = Math.floor(timeDiff / (1000 * 60));

        if (minutesDiff > 0 && minutesDiff <= 30 && apt.status === 'scheduled') {
          upcomingNotifications.push({
            id: Date.now(),
            message: `Upcoming appointment with ${apt.patientName} in ${minutesDiff} minutes`,
            type: 'warning',
            timestamp: new Date().toISOString()
          });
        }
      });

      if (upcomingNotifications.length > 0) {
        setNotifications(prev => [...upcomingNotifications, ...prev]);
      }
    };

    const interval = setInterval(checkUpcomingAppointments, 60000); // Check every minute
    checkUpcomingAppointments(); // Initial check

    return () => clearInterval(interval);
  }, [appointments]);

  const handleStartCall = (appointment: Appointment) => {
    setActiveCall(appointment);
    // Update appointment status
    setAppointments(prev => 
      prev.map(apt => 
        apt.id === appointment.id 
          ? { ...apt, status: 'in-progress' as const }
          : apt
      )
    );
  };

  const handleEndCall = () => {
    if (activeCall) {
      setAppointments(prev => 
        prev.map(apt => 
          apt.id === activeCall.id 
            ? { ...apt, status: 'completed' as const }
            : apt
        )
      );
    }
    setActiveCall(null);
  };

  const handleReschedule = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setShowCalendar(true);
  };

  const handleDateSelection = (date: Date) => {
    setNewAppointmentDate(date);
  };

  const handleTimeSelection = (time: string) => {
    setNewAppointmentTime(time);
  };

  const confirmReschedule = () => {
    if (selectedAppointment && newAppointmentDate && newAppointmentTime) {
      const updatedAppointments = appointments.map(apt => {
        if (apt.id === selectedAppointment.id) {
          return {
            ...apt,
            time: newAppointmentTime,
            status: 'scheduled' as const
          };
        }
        return apt;
      });

      setAppointments(updatedAppointments);
      setNotifications(prev => [{
        id: Date.now(),
        message: `Appointment with ${selectedAppointment.patientName} rescheduled to ${newAppointmentTime}`,
        type: 'success',
        timestamp: new Date().toISOString()
      }, ...prev]);

      setShowCalendar(false);
      setSelectedAppointment(null);
      setNewAppointmentDate(null);
      setNewAppointmentTime('');
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-[#1a1f37] rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 h-auto">
        <div className="p-6 flex flex-col h-full">
          {/* Header with Filters and Notifications */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <FontAwesomeIcon icon={faVideo} className="text-blue-500" />
              Today&apos;s Appointments
            </h2>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 relative"
              >
                <FontAwesomeIcon icon={_faFilter} className="w-5 h-5" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 relative"
                >
                  <FontAwesomeIcon icon={_faBell} className="w-5 h-5" />
                  {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications.length}
                    </span>
                  )}
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Notifications</h3>
                      <div className="space-y-3 max-h-80 overflow-y-auto">
                        {notifications.length > 0 ? (
                          notifications.map(notification => (
                            <div
                              key={notification.id}
                              className={`p-3 rounded-lg text-sm ${
                                notification.type === 'warning'
                                  ? 'bg-yellow-50 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200'
                                  : notification.type === 'success'
                                  ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                                  : 'bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
                              }`}
                            >
                              {notification.message}
                            </div>
                          ))
                        ) : (
                          <p className="text-gray-500 dark:text-gray-400 text-sm">No notifications</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg space-y-4 mb-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label 
                    htmlFor="appointment-type-filter" 
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Type
                  </label>
                  <select
                    id="appointment-type-filter"
                    value={filters.type}
                    onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                  >
                    <option value="all">All Types</option>
                    <option value="consultation">Consultation</option>
                    <option value="procedure">Procedure</option>
                  </select>
                </div>
                <div>
                  <label 
                    htmlFor="appointment-mode-filter"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Mode
                  </label>
                  <select
                    id="appointment-mode-filter"
                    value={filters.mode}
                    onChange={(e) => setFilters(prev => ({ ...prev, mode: e.target.value }))}
                    className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                  >
                    <option value="all">All Modes</option>
                    <option value="in-person">In-Person</option>
                    <option value="video">Video</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
                <div>
                  <label 
                    htmlFor="appointment-status-filter"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Status
                  </label>
                  <select
                    id="appointment-status-filter"
                    value={filters.status}
                    onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                  >
                    <option value="all">All Statuses</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Appointments List */}
          <div 
            className={`
              space-y-4 
              ${filteredAppointments.length > 4 ? 'overflow-y-auto max-h-[calc(100%-100px)] pr-2 custom-scrollbar' : 'overflow-visible'}
              flex-grow
            `}
            data-appointments-count={filteredAppointments.length}
          >
            {filteredAppointments.map((appointment) => (
              <div 
                key={appointment.id}
                className={`
                  flex items-center justify-between p-4 rounded-lg bg-blue-50 hover:bg-blue-100/80 dark:bg-purple-500/10 dark:hover:bg-blue-500/10
                  ${appointment.status === 'completed' 
                    ? 'bg-gray-50 dark:bg-gray-700/30' 
                    : appointment.status === 'in-progress'
                      ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500'
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon 
                    icon={appointment.mode === 'video' ? faVideo : _faHospital}
                    className={`
                      w-8 h-8 p-2 rounded-lg
                      ${appointment.mode === 'video' 
                        ? 'text-purple-500 bg-purple-50 dark:bg-purple-900/30' 
                        : 'text-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      }
                    `}
                  />
                  
                  <div>
                    <button
                      type="button"
                      className="text-base font-medium text-gray-900 dark:text-white cursor-pointer hover:text-blue-500 dark:hover:text-blue-400 bg-transparent border-none p-0 text-left"
                      onClick={() => {
                        setSelectedAppointment(appointment);
                        setShowPatientDetails(true);
                      }}
                    >
                      {appointment.patientName}
                    </button>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <FontAwesomeIcon icon={_faClock} className="w-3.5 h-3.5" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <FontAwesomeIcon icon={appointment.mode === 'video' ? faVideo : _faHospital} className="w-3.5 h-3.5" />
                        {appointment.mode === 'video' ? 'Video Call' : 'In-person'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {appointment.mode === 'video' && appointment.status === 'scheduled' && (
                    <button
                      onClick={() => handleStartCall(appointment)}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                      Start Call
                    </button>
                  )}

                  <div className="relative">
                    <button
                      onClick={() => setShowMenu(showMenu === appointment.id ? null : appointment.id)}
                      className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50"
                    >
                      <FontAwesomeIcon icon={_faEllipsisVertical} className="w-5 h-5" />
                    </button>

                    {showMenu === appointment.id && (
                      <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-10">
                        <button
                          onClick={() => handleReschedule(appointment)}
                          className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 flex items-center gap-2"
                        >
                          <FontAwesomeIcon icon={_faEdit} className="w-4 h-4" />
                          Reschedule
                        </button>
                        <button
                          className="w-full px-4 py-2 text-left text-sm text-green-600 dark:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 flex items-center gap-2"
                        >
                          <FontAwesomeIcon icon={_faCheck} className="w-4 h-4" />
                          Approve
                        </button>
                        <button
                          className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 flex items-center gap-2"
                        >
                          <FontAwesomeIcon icon={_faTimes} className="w-4 h-4" />
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Patient Details Modal */}
      {showPatientDetails && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full mx-4">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Patient Details
                </h2>
                <button
                  onClick={() => setShowPatientDetails(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <FontAwesomeIcon icon={_faTimes} className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="patient-name" 
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <p 
                      id="patient-name" 
                      className="mt-1 text-gray-900 dark:text-white"
                    >
                      {selectedAppointment.patientName}
                    </p>
                  </div>
                  <div>
                    <label 
                      htmlFor="patient-age"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Age
                    </label>
                    <p 
                      id="patient-age"
                      className="mt-1 text-gray-900 dark:text-white"
                    >
                      {selectedAppointment.age}
                    </p>
                  </div>
                  <div>
                    <label 
                      htmlFor="patient-gender"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Gender
                    </label>
                    <p 
                      id="patient-gender"
                      className="mt-1 text-gray-900 dark:text-white"
                    >
                      {selectedAppointment.gender}
                    </p>
                  </div>
                  <div>
                    <label 
                      htmlFor="patient-contact"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Contact Number
                    </label>
                    <p 
                      id="patient-contact"
                      className="mt-1 text-gray-900 dark:text-white"
                    >
                      {selectedAppointment.contactNumber}
                    </p>
                  </div>
                  <div>
                    <label 
                      htmlFor="patient-email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <p 
                      id="patient-email"
                      className="mt-1 text-gray-900 dark:text-white"
                    >
                      {selectedAppointment.email}
                    </p>
                  </div>
                  <div>
                    <label 
                      htmlFor="patient-appointment-type"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Appointment Type
                    </label>
                    <p 
                      id="patient-appointment-type"
                      className="mt-1 text-gray-900 dark:text-white capitalize"
                    >
                      {selectedAppointment.type}
                    </p>
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="patient-medical-history"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Medical History
                  </label>
                  <p 
                    id="patient-medical-history"
                    className="mt-1 text-gray-900 dark:text-white"
                  >
                    {selectedAppointment.medicalHistory}
                  </p>
                </div>

                <div>
                  <label 
                    htmlFor="patient-notes"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Notes
                  </label>
                  <p 
                    id="patient-notes"
                    className="mt-1 text-gray-900 dark:text-white"
                  >
                    {selectedAppointment.notes}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowPatientDetails(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Call Modal */}
      {activeCall && (
        <VideoCall 
          appointment={activeCall}
          onClose={handleEndCall}
        />
      )}

      {/* Rescheduling Modal */}
      {showCalendar && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full mx-4">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Reschedule Appointment
                </h2>
                <button
                  onClick={() => {
                    setShowCalendar(false);
                    setSelectedAppointment(null);
                    setNewAppointmentDate(null);
                    setNewAppointmentTime('');
                  }}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <FontAwesomeIcon icon={_faTimes} className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label 
                    htmlFor="new-appointment-date"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Select Date
                  </label>
                  <div id="new-appointment-date">
                    <Calendar 
                      onDateSelect={handleDateSelection} 
                      selectedDate={newAppointmentDate} 
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="new-appointment-time"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Select Time
                  </label>
                  <select
                    id="new-appointment-time"
                    value={newAppointmentTime}
                    onChange={(e) => handleTimeSelection(e.target.value)}
                    className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="09:30">09:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="14:30">02:30 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="15:30">03:30 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => {
                    setShowCalendar(false);
                    setSelectedAppointment(null);
                    setNewAppointmentDate(null);
                    setNewAppointmentTime('');
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmReschedule}
                  disabled={!newAppointmentDate || !newAppointmentTime}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Reschedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodayAppointments;
