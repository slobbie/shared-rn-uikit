export interface SegmentedControlProps {
  /** 세그먼트 라벨 목록 */
  options: string[];
  /** 선택된 라벨 */
  value: string;
  onChange: (next: string) => void;
  disabled?: boolean;
  testID?: string;
}
