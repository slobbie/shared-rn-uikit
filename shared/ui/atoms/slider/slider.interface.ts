import { ViewProps } from 'react-native';

export interface ISliderProps extends ViewProps {
  value?: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
  disabled?: boolean;
  trackColor?: string;
  activeTrackColor?: string;
  thumbColor?: string;
  thumbSize?: number;
  trackHeight?: number;
  onValueChange?: (value: number) => void;
  onSlidingStart?: () => void;
  onSlidingComplete?: (value: number) => void;
}
