import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

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

  return (
    <View testID={testID} style={{ alignSelf: 'flex-start' }}>
      {visible ? (
        // 말풍선 — 트리거 위에 표시
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            bottom: '100%',
            alignSelf: 'center',
            marginBottom: TOOLTIP.offset,
            paddingVertical: TOOLTIP.paddingVertical,
            paddingHorizontal: TOOLTIP.paddingHorizontal,
            borderRadius: TOOLTIP.borderRadius,
            backgroundColor: theme.colors.text.black,
            zIndex: 1000,
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
      ) : null}
      {/* 탭 토글 */}
      <Pressable onPress={() => setVisible((prev) => !prev)}>
        {children}
      </Pressable>
    </View>
  );
};

export default Tooltip;
