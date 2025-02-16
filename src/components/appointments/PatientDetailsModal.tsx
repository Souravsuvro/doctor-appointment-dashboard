'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faUser,
  faPhone,
  faEnvelope,
  faCakeCandles,
  faVenusMars,
  faWeight,
  faRulerVertical,
  faHeartPulse,
  faNotesMedical,
  faClockRotateLeft,
  faPrescription,
  faAllergies
} from '@fortawesome/free-solid-svg-icons';

interface PatientDetailsModalProps {
  patient: {
    id: number;
    name: string;
    email: string;
    phone: string;
    dateOfBirth: string;
    gender: string;
    weight: string;
    height: string;
    bloodPressure: string;
    medicalHistory: string[];
    medications: string[];
    allergies: string[];
    recentVisits: {
      date: string;
      reason: string;
      diagnosis: string;
    }[];
  };
  onClose: () => void;
}

export default function PatientDetailsModal({ patient, onClose }: PatientDetailsModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Patient Details
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-4">
            <div className="grid grid-cols-12 gap-6">
              {/* Basic Information */}
              <div className="col-span-12 lg:col-span-4">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Basic Information
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-blue-500" />
                      <span>{patient.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-blue-500" />
                      <span>{patient.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-blue-500" />
                      <span>{patient.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faCakeCandles} className="w-5 h-5 text-blue-500" />
                      <span>{patient.dateOfBirth}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faVenusMars} className="w-5 h-5 text-blue-500" />
                      <span>{patient.gender}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vital Signs */}
              <div className="col-span-12 lg:col-span-4">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Vital Signs
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faWeight} className="w-5 h-5 text-blue-500" />
                      <span>Weight: {patient.weight}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faRulerVertical} className="w-5 h-5 text-blue-500" />
                      <span>Height: {patient.height}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <FontAwesomeIcon icon={faHeartPulse} className="w-5 h-5 text-blue-500" />
                      <span>Blood Pressure: {patient.bloodPressure}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Allergies
                  </h4>
                  
                  <div className="space-y-2">
                    {patient.allergies.map((allergy, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faAllergies} className="w-4 h-4 text-red-500" />
                        <span className="text-gray-600 dark:text-gray-300">{allergy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Medical History & Medications */}
              <div className="col-span-12 lg:col-span-4">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Medical History
                  </h4>
                  
                  <div className="space-y-2">
                    {patient.medicalHistory.map((condition, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faNotesMedical} className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-600 dark:text-gray-300">{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Current Medications
                  </h4>
                  
                  <div className="space-y-2">
                    {patient.medications.map((medication, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faPrescription} className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">{medication}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Visits */}
              <div className="col-span-12">
                <div className="mt-6 space-y-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="w-5 h-5 text-blue-500" />
                    Recent Visits
                  </h4>
                  
                  <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Reason
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Diagnosis
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {patient.recentVisits.map((visit, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                              {visit.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                              {visit.reason}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                              {visit.diagnosis}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
