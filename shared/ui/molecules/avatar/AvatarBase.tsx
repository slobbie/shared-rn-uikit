import { Image, View, ViewStyle } from 'react-native';

import { Typo } from '@shared/ui/atoms';
import { IAvatarBaseProps } from '@shared/ui/molecules/avatar/avatar.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

/**
 *
 */
const AvatarBase: React.FC<IAvatarBaseProps> = ({
  size = 44,
  label,
  imageUrl,
}) => {
  const theme = useTheme();

  const styles = {
    base: {
      backgroundColor: theme.theme.baseTokens.grey4,
      borderRadius: 100,
      minWidth: size,
      minHeight: size,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    } as ViewStyle,
  };

  return (
    <View style={styles.base}>
      {label?.length && (
        <Typo.Caption color={theme.theme.colors.text.white}>
          {label}
        </Typo.Caption>
      )}
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          resizeMode='cover'
          style={{ width: size, aspectRatio: 1 }}
        />
      )}
    </View>
  );
};

export default AvatarBase;
