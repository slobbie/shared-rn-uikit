import { ViewStyle } from 'react-native';

import { TypoComponent } from '@shared/ui/atoms/typo/index.interface';

export interface IChipProps {
  /**
   * Chip에 표시할 텍스트
   */
  label: string;
  /**
   * 적용할 타이포그래피 스타일
   */
  typoType?: keyof TypoComponent;
  textColor?: string;
  chipStyle?: ViewStyle;
  bgColor?: string;
}

export type ChipComponent = React.FC<IChipProps> & {
  flat: React.FC<IChipProps>;
  outlined: React.FC<IChipProps>;
};
