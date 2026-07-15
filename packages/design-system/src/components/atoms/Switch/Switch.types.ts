export interface SwitchProps {
  value: boolean;
  onChange: (next: boolean) => void;
  disabled?: boolean;
  /** 접근성 레이블 */
  accessibilityLabel?: string;
  testID?: string;
}
