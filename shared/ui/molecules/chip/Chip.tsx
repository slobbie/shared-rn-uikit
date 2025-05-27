import { Typo } from '@shared/ui/atoms';
import { IBaseTextProps } from '@shared/ui/atoms/typo/index.interface';
import { IChipProps } from '@shared/ui/molecules/chip/chip.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';
import { View, ViewStyle } from 'react-native';

/**
 * Chip 컴포넌트
 */
const ChipBase: React.FC<IChipProps> = ({
  label,
  typoType,
  textColor = '#fff',
  chipStyle,
  bgColor,
}) => {
  const theme = useTheme();

  const styles = {
    base: {
      backgroundColor: bgColor ? bgColor : theme.theme.colors.button.primary,
      paddingVertical: 4,
      paddingHorizontal: 8,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
      borderRadius: 12,
    } as ViewStyle,
  };

  const Typography: React.FC<IBaseTextProps> =
    (Typo[typoType ?? 'Caption'] as React.FC<IBaseTextProps>) || Typo.Caption;

  return (
    <View style={[styles.base, chipStyle]}>
      <Typography color={textColor}>{label}</Typography>
    </View>
  );
};

export default ChipBase;
