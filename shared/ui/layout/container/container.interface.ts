import { ViewProps, DimensionValue } from 'react-native';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface IContainerProps extends ViewProps {
  size?: ContainerSize;
  centered?: boolean;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  maxWidth?: DimensionValue;
  children: React.ReactNode;
}
