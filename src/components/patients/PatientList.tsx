import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  lastVisit: string;
  upcomingAppointment?: string;
  image: string;
  status: 'active' | 'inactive';
  condition: string;
}

const patients: Patient[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 123-4567',
    age: 32,
    gender: 'Female',
    lastVisit: '2024-02-10',
    upcomingAppointment: '2024-02-20',
    image: '/images/Patients/Sarah Johnson.jpg',
    status: 'active',
    condition: 'Hypertension'
  },
  {
    id: '2',
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    phone: '+1 (555) 234-5678',
    age: 45,
    gender: 'Male',
    lastVisit: '2024-02-05',
    image: '/images/Patients/Michael Brown.jpg',
    status: 'active',
    condition: 'Diabetes Type 2'
  },
  // Add more patient data here
];

interface PatientListProps {
  searchQuery: string;
}

export default function PatientList({ searchQuery }: PatientListProps) {
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.phone.includes(searchQuery)
  );

  return (
    <div className="bg-white dark:bg-[#1a1f37] rounded-xl shadow-sm border border-gray-200/60 dark:border-gray-700/30 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700/30">
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Patient
              </th>
              <th className="hidden sm:table-cell px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Contact
              </th>
              <th className="hidden lg:table-cell px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Age/Gender
              </th>
              <th className="hidden md:table-cell px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Last Visit
              </th>
              <th className="hidden xl:table-cell px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Condition
              </th>
              <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700/30">
            {filteredPatients.map((patient) => (
              <tr
                key={patient.id}
                className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 flex-shrink-0">
                      <Image
                        src={patient.image}
                        alt={patient.name}
                        fill
                        className="rounded-full object-cover"
                      />
                      <span
                        className={`absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 ${
                          patient.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
                        }`}
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {patient.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {patient.upcomingAppointment && (
                          <div className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faClock} className="w-3 h-3" />
                            <span>Next: {patient.upcomingAppointment}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-gray-900 dark:text-white">
                      <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3" />
                      <span>{patient.email}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <FontAwesomeIcon icon={faPhone} className="w-3 h-3" />
                      <span>{patient.phone}</span>
                    </div>
                  </div>
                </td>
                <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {patient.age} / {patient.gender}
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {patient.lastVisit}
                </td>
                <td className="hidden xl:table-cell px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400">
                    {patient.condition}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => setSelectedPatient(patient)}
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <FontAwesomeIcon icon={faEllipsisVertical} className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700/30">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing 1 to {filteredPatients.length} of {filteredPatients.length} results
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
