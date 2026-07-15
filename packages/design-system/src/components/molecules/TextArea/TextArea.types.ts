export interface TextAreaProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
  /** 표시 줄 수 (기본 4) */
  numberOfLines?: number;
  /** 접근성 레이블 */
  accessibilityLabel?: string;
  testID?: string;
}
