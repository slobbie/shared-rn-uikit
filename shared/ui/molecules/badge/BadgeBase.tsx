import React from 'react';
import { View, ViewStyle } from 'react-native';

import { Typo } from '@shared/ui/atoms';
import { IBadgeBaseProps } from '@shared/ui/molecules/badge/badge.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

const BadgeBase: React.FC<IBadgeBaseProps> = ({ label, size = 20 }) => {
  const theme = useTheme();

  const styles = {
    base: {
      backgroundColor: theme.theme.colors.button.error,
      borderRadius: 100,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
    } as ViewStyle,
  };

  return (
    <View style={styles.base}>
      {label?.length && (
        <Typo.Caption color={theme.theme.colors.text.white}>
          {label}
        </Typo.Caption>
      )}
    </View>
  );
};

export default BadgeBase;
