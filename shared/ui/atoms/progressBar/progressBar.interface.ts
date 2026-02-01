import { ViewProps } from 'react-native';

export interface IProgressBarProps extends ViewProps {
  value: number;
  maxValue?: number;
  height?: number;
  borderRadius?: number;
  trackColor?: string;
  progressColor?: string;
  animated?: boolean;
  showLabel?: boolean;
  labelPosition?: 'inside' | 'outside';
}
