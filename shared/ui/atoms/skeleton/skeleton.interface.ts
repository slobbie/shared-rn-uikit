import { DimensionValue, ViewProps } from 'react-native';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

export interface ISkeletonProps extends ViewProps {
  variant?: SkeletonVariant;
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  animated?: boolean;
  baseColor?: string;
  highlightColor?: string;
}
