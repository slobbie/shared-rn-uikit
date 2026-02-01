import { ViewProps } from 'react-native';

export type BadgeVariant = 'filled' | 'outlined' | 'dot';
export type BadgeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error';

export interface IBadgeProps extends ViewProps {
  content?: string | number;
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: 'small' | 'medium' | 'large';
  maxCount?: number;
  showZero?: boolean;
  children?: React.ReactNode;
}
