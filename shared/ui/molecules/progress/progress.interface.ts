import { DimensionValue, ViewStyle } from 'react-native';

export type ProgressColor = 'primary' | 'secondary' | 'success' | 'error';

export interface IDashOptions {
  count: number;
  gapRatio?: number;
}

export interface ICircularProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  progressColor?: ProgressColor;
  trackColor?: string;
  style?: ViewStyle;
  dashOptions?: IDashOptions;
}

export interface IBarProps {
  progress: number;
  width?: DimensionValue;
  height?: number;
  progressColor?: ProgressColor;
  trackColor?: string;
  style?: ViewStyle;
  dashOptions?: IDashOptions;
}
