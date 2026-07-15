export interface SliderProps {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  /** 접근성 레이블 */
  accessibilityLabel?: string;
  testID?: string;
}
