import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

import { MotionBox, useFade } from '@package/motion';
import { TOOLTIP } from '@shared/core/tokens/overlay';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { TooltipProps } from './Tooltip.types';

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  testID,
}) => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);
  const motion = useFade({ visible });

  return (
    <View testID={testID} style={{ alignSelf: 'flex-start' }}>
      <MotionBox
        motion={motion}
        sizing="intrinsic"
        layoutStyle={{
          position: 'absolute',
          bottom: '100%',
          alignSelf: 'center',
          marginBottom: TOOLTIP.offset,
          zIndex: 1000,
        }}
      >
        <View
          pointerEvents="none"
          style={{
            paddingVertical: TOOLTIP.paddingVertical,
            paddingHorizontal: TOOLTIP.paddingHorizontal,
            borderRadius: TOOLTIP.borderRadius,
            backgroundColor: theme.colors.text.black,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              color: theme.colors.text.white,
              fontSize: TOOLTIP.fontSize,
            }}
          >
            {content}
          </Text>
        </View>
      </MotionBox>
      {/* 탭 토글 */}
      <Pressable onPress={() => setVisible((prev) => !prev)}>
        {children}
      </Pressable>
    </View>
  );
};

export default Tooltip;
