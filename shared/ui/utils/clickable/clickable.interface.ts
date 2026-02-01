import { PressableProps } from 'react-native';

export type ClickableFeedback = 'none' | 'opacity' | 'highlight' | 'scale';

export interface IClickableProps extends PressableProps {
  feedback?: ClickableFeedback;
  activeOpacity?: number;
  scaleValue?: number;
  highlightColor?: string;
  debounceDelay?: number;
  children: React.ReactNode;
}
