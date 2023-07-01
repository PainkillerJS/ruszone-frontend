import type { InputHTMLAttributes } from 'react';
import type { IconType } from 'react-icons';

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  Icon?: IconType;
  error?: string;
}
