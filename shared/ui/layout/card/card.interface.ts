import { ViewProps } from 'react-native';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface ICardProps extends ViewProps {
  variant?: CardVariant;
  padding?: number;
  borderRadius?: number;
  elevation?: number;
  onPress?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export interface ICardHeaderProps extends ViewProps {
  title?: string;
  subtitle?: string;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
}

export interface ICardContentProps extends ViewProps {
  children: React.ReactNode;
}

export interface ICardFooterProps extends ViewProps {
  children: React.ReactNode;
}
