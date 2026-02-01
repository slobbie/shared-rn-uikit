import { ViewProps } from 'react-native';

export interface ISwitchProps extends ViewProps {
  value: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
  trackColorOn?: string;
  trackColorOff?: string;
  thumbColor?: string;
  size?: 'small' | 'medium' | 'large';
}
