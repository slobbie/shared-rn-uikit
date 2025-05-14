import { PressableProps as RNPressableProps } from 'react-native';

export type ButtonVariant =
  | 'static' // 1. 반응 없는 버튼
  | 'opacity' // 2. 오파시티 변경 (기본)
  | 'highlight'; // 3. 색상 어둡게

export type Percentage =
  | 0
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9
  | 1;

export type ButtonColor = {
  primary: string;
  secondary: string;
  disabled: string;
  error: string;
  success: string;
};

export interface IBaseButtonProps extends RNPressableProps {
  variant?: ButtonVariant;
  color?: keyof ButtonColor;
  highlight?: Percentage;
  opacity?: Percentage;
  radius?: number;
}
