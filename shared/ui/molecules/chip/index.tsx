import { ViewStyle } from 'react-native';

import ChipBase from '@shared/ui/molecules/chip/Chip';
import {
  ChipComponent,
  IChipProps,
} from '@shared/ui/molecules/chip/chip.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

const ChipFlat: React.FC<IChipProps> = ({
  label,
  typoType,
  textColor,
  chipStyle,
  bgColor,
}) => (
  <ChipBase
    label={label}
    typoType={typoType}
    textColor={textColor}
    chipStyle={chipStyle}
    bgColor={bgColor}
  />
);

const ChipOutlined: React.FC<IChipProps> = ({
  label,
  typoType,
  chipStyle,
  bgColor,
  textColor,
}) => {
  const { theme } = useTheme();

  const styles = {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: theme.colors.border.primary,
    ...chipStyle,
  } as ViewStyle;

  return (
    <ChipBase
      label={label}
      typoType={typoType}
      chipStyle={styles}
      textColor={theme.colors.text.black || textColor}
      bgColor={bgColor}
    />
  );
};

const Chip = ChipFlat as ChipComponent;

Chip.flat = ChipFlat;

Chip.outlined = ChipOutlined;

export default Chip;
