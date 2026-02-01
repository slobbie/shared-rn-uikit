import { ViewProps } from 'react-native';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface ITooltipProps extends ViewProps {
  content: string;
  visible?: boolean;
  position?: TooltipPosition;
  backgroundColor?: string;
  textColor?: string;
  arrowSize?: number;
  children: React.ReactNode;
  onShow?: () => void;
  onHide?: () => void;
}
