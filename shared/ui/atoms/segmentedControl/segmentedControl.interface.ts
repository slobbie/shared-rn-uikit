import { ViewProps } from 'react-native';

export interface ISegmentedControlProps extends ViewProps {
  segments: string[];
  selectedIndex: number;
  onIndexChange?: (index: number) => void;
  disabled?: boolean;
  backgroundColor?: string;
  activeBackgroundColor?: string;
  textColor?: string;
  activeTextColor?: string;
  height?: number;
  borderRadius?: number;
}
