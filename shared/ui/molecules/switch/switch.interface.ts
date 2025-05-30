export interface ISwitch {
  onPress?: () => void;
  isOn: boolean;
  isDisabled?: boolean;
  /**
   * 스위치의 전체 너비
   * @default 40
   */
  width?: number;
  /**
   * 스위치의 전체 높이
   * @default 24
   */
  height?: number;
  /**
   * 스위치가 켜져있을 때의 배경색
   * @default '#05AFF2'
   */
  onBackgroundColor?: string;
  /**
   * 스위치가 꺼져있을 때의 배경색
   * @default '#EBECEF'
   */
  offBackgroundColor?: string;
}
