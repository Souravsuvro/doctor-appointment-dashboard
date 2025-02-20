import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface BaseComponentProps {
  className?: string;
}

export interface CardProps extends BaseComponentProps {
  title: string;
  children: React.ReactNode;
  gradient?: string;
  onAction?: () => void;
  actionLabel?: string;
}

export interface StatusBadgeProps extends BaseComponentProps {
  status: 'success' | 'warning' | 'error' | 'info';
  text: string;
}

export interface IconButtonProps extends BaseComponentProps {
  icon: IconDefinition;
  onClick?: () => void;
  label: string;
  badge?: number;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export interface AppointmentStatus {
  id: string;
  label: string;
  color: {
    bg: string;
    text: string;
    border: string;
  };
}

export interface Patient {
  id: string;
  name: string;
  avatar?: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  lastVisit?: Date;
  nextAppointment?: Date;
  medicalHistory?: {
    conditions: string[];
    medications: string[];
    allergies: string[];
  };
}

export interface Appointment {
  id: number;
  patientName: string;
  time: string;
  type: 'consultation' | 'procedure';
  mode: 'in-person' | 'video' | 'phone';
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  duration: number;
  notes?: string;
  age?: number;
  gender?: string;
  contactNumber?: string;
  email?: string;
  medicalHistory?: string;
}

export interface AlertPriority {
  label: 'High Priority' | 'Medium Priority' | 'Low Priority';
  color: {
    bg: string;
    text: string;
    border: string;
  };
}

export const ALERT_PRIORITY_LEVELS = {
  HIGH: 3,
  MEDIUM: 2,
  LOW: 1
};

export interface Alert {
  id: number;
  title: string;
  description: string;
  priority: keyof typeof ALERT_PRIORITY_LEVELS;
  timestamp: Date;
}

export interface VideoCallProps {
  appointment: Appointment;
  onClose: () => void;
}
