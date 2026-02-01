import { ViewProps } from 'react-native';

export type LoadingSize = 'small' | 'medium' | 'large';
export type LoadingVariant = 'spinner' | 'dots' | 'pulse';

export interface ILoadingProps extends ViewProps {
  size?: LoadingSize;
  variant?: LoadingVariant;
  color?: string;
  overlay?: boolean;
  text?: string;
}
