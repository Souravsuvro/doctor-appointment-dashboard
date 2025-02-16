'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faFileSignature, 
  faEllipsisVertical,
  faHome,
  faPills
} from '@fortawesome/free-solid-svg-icons';
import NewPrescriptionModal from './prescriptions/NewPrescriptionModal';

interface Prescription {
  id: string;
  patient: string;
  medication: string;
  status: 'pending' | 'sent';
}

interface Pharmacy {
  id: string;
  name: string;
  distance: string;
  icon: 'home' | 'pills';
}

const prescriptions: Prescription[] = [
  {
    id: '1',
    patient: 'John Smith',
    medication: 'Amoxicillin 500mg',
    status: 'sent'
  },
  {
    id: '2',
    patient: 'Emma Wilson',
    medication: 'Lisinopril 10mg',
    status: 'pending'
  },
  {
    id: '3',
    patient: 'Robert Brown',
    medication: 'Metformin 850mg',
    status: 'sent'
  }
];

const pharmacies: Pharmacy[] = [
  {
    id: '1',
    name: 'HealthCare Pharmacy',
    distance: '0.8 miles away',
    icon: 'home'
  },
  {
    id: '2',
    name: 'MediCare Drugstore',
    distance: '1.2 miles away',
    icon: 'pills'
  }
];

export default function EPrescription() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-br from-blue-100 via-blue-50 to-white dark:from-[#1a1f37] dark:via-[#1a1f37] dark:to-[#1a1f37] rounded-xl shadow-sm p-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              E-Prescription & Pharmacy Management
            </h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#3461FF] rounded-lg hover:bg-[#3461FF]/90 transition-colors"
            >
              <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
              New Prescription
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Prescriptions */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Recent Prescriptions
              </h3>
              <div className="space-y-3">
                {prescriptions.map((prescription) => (
                  <div
                    key={prescription.id}
                    className="p-4 bg-white/50 dark:bg-gray-800/40 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                          <FontAwesomeIcon 
                            icon={faFileSignature} 
                            className="w-5 h-5 text-blue-600 dark:text-blue-400" 
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                            {prescription.patient}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {prescription.medication}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`
                          inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${prescription.status === 'sent' 
                            ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                            : 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                          }
                        `}>
                          {prescription.status === 'sent' ? 'Sent' : 'Pending'}
                        </span>
                        <button className="p-1 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300">
                          <FontAwesomeIcon icon={faEllipsisVertical} className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Pharmacies */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Partner Pharmacies
              </h3>
              <div className="space-y-3">
                {pharmacies.map((pharmacy) => (
                  <div
                    key={pharmacy.id}
                    className="p-4 bg-white/50 dark:bg-gray-800/40 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                        <FontAwesomeIcon 
                          icon={pharmacy.icon === 'home' ? faHome : faPills} 
                          className="w-5 h-5 text-blue-600 dark:text-blue-400" 
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                          {pharmacy.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {pharmacy.distance}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewPrescriptionModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
