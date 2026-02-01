import { ViewProps } from 'react-native';

export interface IGridProps extends ViewProps {
  columns?: number;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  children: React.ReactNode;
}

export interface IGridItemProps extends ViewProps {
  span?: number;
  children: React.ReactNode;
}
