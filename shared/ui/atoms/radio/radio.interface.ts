import { ViewProps } from 'react-native';

export interface IRadioProps extends ViewProps {
  selected: boolean;
  onSelect?: () => void;
  disabled?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export interface IRadioGroupProps extends ViewProps {
  value: string;
  onValueChange?: (value: string) => void;
  options: { value: string; label: string; disabled?: boolean }[];
  direction?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
  color?: string;
}
