import { ViewProps } from 'react-native';

export interface ICheckboxProps extends ViewProps {
  checked: boolean;
  onValueChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}
