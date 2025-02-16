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
