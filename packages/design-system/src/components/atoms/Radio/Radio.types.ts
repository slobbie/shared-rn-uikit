export interface RadioProps {
  selected: boolean;
  onPress: () => void;
  label?: string;
  disabled?: boolean;
  /** 접근성 레이블 */
  accessibilityLabel?: string;
  testID?: string;
}
