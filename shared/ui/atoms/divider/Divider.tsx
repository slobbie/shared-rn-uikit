import { View, ViewStyle } from 'react-native';

import { IDividerProps } from '@shared/ui/atoms/divider/divider.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

/**
 * 구분선 컴포넌트
 */
const Divider = ({ width, height, color }: IDividerProps) => {
  const { theme } = useTheme();

  const styles = {
    base: {
      width: width || '100%',
      borderBottomWidth: height || 0.4,
      borderBottomColor: color || theme.colors.border.secondary,
    } as ViewStyle,
  };

  return <View style={styles.base} />;
};

export default Divider;
