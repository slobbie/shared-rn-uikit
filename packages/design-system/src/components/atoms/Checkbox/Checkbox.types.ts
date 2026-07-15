export interface CheckboxProps {
  checked: boolean;
  onChange: (next: boolean) => void;
  label?: string;
  disabled?: boolean;
  /** 접근성 레이블 */
  accessibilityLabel?: string;
  testID?: string;
}
