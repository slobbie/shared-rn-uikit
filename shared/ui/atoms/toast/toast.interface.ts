import { ViewProps } from 'react-native';

export type ToastType = 'info' | 'success' | 'warning' | 'error';
export type ToastPosition = 'top' | 'bottom';

export interface IToastProps extends ViewProps {
  visible: boolean;
  message: string;
  type?: ToastType;
  position?: ToastPosition;
  duration?: number;
  onDismiss?: () => void;
  showIcon?: boolean;
}
