import { TextStyle, ViewStyle } from 'react-native';

export type ICheckboxColor = 'primary' | 'secondary' | 'success' | 'error';

export interface ICheckboxProps {
  /**
   * 체크박스의 선택 상태를 제어합니다.
   * 이 값을 제공하지 않으면 내부 상태로 관리됩니다.
   */
  checked?: boolean;

  /**
   * 체크 상태가 변경될 때 호출되는 콜백 함수
   * @param checked - 새로운 체크 상태
   */
  onChange?: (checked: boolean) => void;

  /**
   * 체크박스 옆에 표시될 라벨 텍스트
   */
  label?: string;

  /**
   * 체크박스를 비활성화할지 여부
   * @default false
   */
  disabled?: boolean;

  /**
   * 체크박스의 크기
   * @default 24
   */
  size?: number;

  /**
   * 체크박스의 라벨 텍스트 크기
   * @default 16
   */
  labelSize?: number;

  /**
   * 체크박스의 색상
   * @default 'primary'
   */
  boxColor?: ICheckboxColor;

  /**
   * 컨테이너에 적용할 스타일
   */
  containerStyle?: ViewStyle;

  /**
   * 라벨 텍스트에 적용할 스타일
   */
  labelStyle?: TextStyle;

  /**
   * 체크박스의 테두리 모양
   * @default
   */
  borderRadius?: number;

  /**
   * 체크박스의 테두리 모양
   * @default
   */
  borderWidth?: number;
}
