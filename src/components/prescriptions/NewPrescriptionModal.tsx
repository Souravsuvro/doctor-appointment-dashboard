'use client';

import {
  faXmark,
  faPlus,
  faMinus,
  faTrash
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface NewPrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MedicationItem {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
}

export default function NewPrescriptionModal({ isOpen, onClose }: NewPrescriptionModalProps) {
  const [patient, setPatient] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [medications, setMedications] = useState<MedicationItem[]>([
    {
      id: '1',
      name: '',
      dosage: '',
      frequency: '',
      duration: '',
      instructions: ''
    }
  ]);

  const addMedication = () => {
    setMedications([
      ...medications,
      {
        id: Math.random().toString(),
        name: '',
        dosage: '',
        frequency: '',
        duration: '',
        instructions: ''
      }
    ]);
  };

  const removeMedication = (id: string) => {
    if (medications.length > 1) {
      setMedications(medications.filter(med => med.id !== id));
    }
  };

  const updateMedication = (id: string, field: keyof MedicationItem, value: string) => {
    setMedications(medications.map(med => 
      med.id === id ? { ...med, [field]: value } : med
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Removed console.log statement
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-[#1a1f37] rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700/30">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            New Prescription
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="space-y-6">
            {/* Patient Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Patient Name
              </label>
              <input
                type="text"
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-700/30 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white"
                placeholder="Search patient..."
                required
              />
            </div>

            {/* Diagnosis */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Diagnosis
              </label>
              <textarea
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-700/30 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white"
                placeholder="Enter diagnosis..."
                rows={3}
                required
              />
            </div>

            {/* Medications */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Medications
                </h3>
                <button
                  type="button"
                  onClick={addMedication}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#3461FF] rounded-lg hover:bg-[#3461FF]/90 transition-colors"
                >
                  <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
                  Add Medication
                </button>
              </div>

              {medications.map((medication, index) => (
                <div 
                  key={medication.id}
                  className="p-4 rounded-lg border dark:border-gray-700/30 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      Medication {index + 1}
                    </h4>
                    {medications.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeMedication(medication.id)}
                        className="p-1 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Medication Name
                      </label>
                      <input
                        type="text"
                        value={medication.name}
                        onChange={(e) => updateMedication(medication.id, 'name', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border dark:border-gray-700/30 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white"
                        placeholder="Enter medication name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Dosage
                      </label>
                      <input
                        type="text"
                        value={medication.dosage}
                        onChange={(e) => updateMedication(medication.id, 'dosage', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border dark:border-gray-700/30 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white"
                        placeholder="e.g., 500mg"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Frequency
                      </label>
                      <input
                        type="text"
                        value={medication.frequency}
                        onChange={(e) => updateMedication(medication.id, 'frequency', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border dark:border-gray-700/30 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white"
                        placeholder="e.g., Twice daily"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={medication.duration}
                        onChange={(e) => updateMedication(medication.id, 'duration', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border dark:border-gray-700/30 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white"
                        placeholder="e.g., 7 days"
                        required
                      />
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                        Special Instructions
                      </label>
                      <textarea
                        value={medication.instructions}
                        onChange={(e) => updateMedication(medication.id, 'instructions', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border dark:border-gray-700/30 bg-white dark:bg-gray-800/50 text-gray-900 dark:text-white"
                        placeholder="Enter any special instructions..."
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-sm font-medium text-white bg-[#3461FF] rounded-lg hover:bg-[#3461FF]/90 transition-colors"
            >
              Create Prescription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
