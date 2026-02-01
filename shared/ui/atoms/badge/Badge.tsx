import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { IBadgeProps, BadgeVariant, BadgeColor } from '@shared/ui/atoms/badge/badge.interface';

const COLORS: Record<BadgeColor, string> = {
  primary: '#007AFF',
  secondary: '#8E8E93',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
};

/**
 * iOS 스타일 뱃지 컴포넌트
 */
const Badge: React.FC<IBadgeProps> = ({
  content,
  variant = 'filled',
  color = 'error',
  size = 'medium',
  maxCount = 99,
  showZero = false,
  children,
  style,
  ...props
}) => {
  const getSizeConfig = () => {
    switch (size) {
      case 'small':
        return { minWidth: 16, height: 16, fontSize: 10, padding: 4, dotSize: 8 };
      case 'large':
        return { minWidth: 24, height: 24, fontSize: 14, padding: 6, dotSize: 12 };
      case 'medium':
      default:
        return { minWidth: 20, height: 20, fontSize: 12, padding: 5, dotSize: 10 };
    }
  };

  const config = getSizeConfig();
  const bgColor = COLORS[color];

  const getDisplayContent = () => {
    if (typeof content === 'number') {
      if (content === 0 && !showZero) return null;
      if (content > maxCount) return `${maxCount}+`;
      return content.toString();
    }
    return content;
  };

  const displayContent = getDisplayContent();

  const getVariantStyle = (v: BadgeVariant) => {
    switch (v) {
      case 'outlined':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderColor: bgColor,
        };
      case 'dot':
        return {
          width: config.dotSize,
          height: config.dotSize,
          minWidth: config.dotSize,
          backgroundColor: bgColor,
          borderRadius: config.dotSize / 2,
        };
      case 'filled':
      default:
        return {
          backgroundColor: bgColor,
        };
    }
  };

  const renderBadge = () => {
    if (variant === 'dot') {
      return (
        <View
          style={[
            styles.badge,
            {
              width: config.dotSize,
              height: config.dotSize,
              borderRadius: config.dotSize / 2,
            },
            getVariantStyle(variant),
            !children && style,
          ]}
          {...props}
        />
      );
    }

    if (displayContent === null) return null;

    return (
      <View
        style={[
          styles.badge,
          {
            minWidth: config.minWidth,
            height: config.height,
            borderRadius: config.height / 2,
            paddingHorizontal: config.padding,
          },
          getVariantStyle(variant),
          !children && style,
        ]}
        {...props}
      >
        <Text
          style={[
            styles.text,
            {
              fontSize: config.fontSize,
              color: variant === 'outlined' ? bgColor : '#FFFFFF',
            },
          ]}
        >
          {displayContent}
        </Text>
      </View>
    );
  };

  if (!children) {
    return renderBadge();
  }

  return (
    <View style={[styles.container, style]}>
      {children}
      <View style={styles.badgeWrapper}>{renderBadge()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  badgeWrapper: {
    position: 'absolute',
    top: -6,
    right: -6,
  },
  badge: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Badge;
