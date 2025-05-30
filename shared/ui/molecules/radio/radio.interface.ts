import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type RadioColor = 'primary' | 'secondary' | 'success' | 'error';

export interface IRadioProps {
  /**
   * 라디오 버튼의 고유 값
   */
  value: any;
  /**
   * 라디오 그룹에서 선택된 값
   */
  selectedValue?: any;
  /**
   * 선택 시 호출될 함수
   */
  onSelect?: (value: any) => void;
  /**
   * 라디오 버튼 옆에 표시될 라벨
   */
  label?: string;
  /**
   * 비활성화 여부
   */
  disabled?: boolean;
  /**
   * 라디오 버튼의 크기 (지름)
   * @default 24
   */
  size?: number;
  /**
   * 라벨 텍스트의 크기
   * @default 16
   */
  labelSize?: number;
  /**
   * 라디오 버튼의 색상
   * @default 'primary'
   */
  boxColor?: RadioColor;
  /**
   * 컨테이너에 적용할 스타일
   */
  containerStyle?: ViewStyle;
  /**
   * 라벨 텍스트에 적용할 스타일
   */
  labelStyle?: TextStyle;
}

export interface IRadioGroupProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactElement<IRadioProps> | React.ReactElement<IRadioProps>[];
  defaultValue?: any;
  onValueChange?: (value: any) => void;
}
