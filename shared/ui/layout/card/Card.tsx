import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import {
  ICardProps,
  ICardHeaderProps,
  ICardContentProps,
  ICardFooterProps,
  CardVariant,
} from '@shared/ui/layout/card/card.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

/**
 * 카드형 컨테이너 컴포넌트
 */
const Card: React.FC<ICardProps> & {
  Header: React.FC<ICardHeaderProps>;
  Content: React.FC<ICardContentProps>;
  Footer: React.FC<ICardFooterProps>;
} = ({
  variant = 'elevated',
  padding = 16,
  borderRadius = 12,
  elevation = 4,
  onPress,
  disabled = false,
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const getVariantStyle = (v: CardVariant) => {
    switch (v) {
      case 'elevated':
        return {
          backgroundColor: theme.colors.background.background_white,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: elevation,
          elevation,
        };
      case 'outlined':
        return {
          backgroundColor: theme.colors.background.background_white,
          borderWidth: 1,
          borderColor: theme.colors.border.secondary,
        };
      case 'filled':
        return {
          backgroundColor: theme.colors.background.secondary,
        };
    }
  };

  const cardStyle = [
    styles.card,
    { padding, borderRadius },
    getVariantStyle(variant),
    disabled && { opacity: 0.5 },
    style,
  ];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [cardStyle, pressed && { opacity: 0.8 }]}
        {...props}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View style={cardStyle} {...props}>
      {children}
    </View>
  );
};

/**
 * 카드 헤더 컴포넌트
 */
const CardHeader: React.FC<ICardHeaderProps> = ({
  title,
  subtitle,
  avatar,
  action,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.header, style]} {...props}>
      {avatar && <View style={styles.avatar}>{avatar}</View>}
      <View style={styles.headerContent}>
        {title && (
          <Text style={[styles.title, { color: theme.colors.text.primary }]}>
            {title}
          </Text>
        )}
        {subtitle && (
          <Text style={[styles.subtitle, { color: theme.colors.text.secondary }]}>
            {subtitle}
          </Text>
        )}
      </View>
      {action && <View style={styles.action}>{action}</View>}
    </View>
  );
};

/**
 * 카드 콘텐츠 컴포넌트
 */
const CardContent: React.FC<ICardContentProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <View style={[styles.content, style]} {...props}>
      {children}
    </View>
  );
};

/**
 * 카드 푸터 컴포넌트
 */
const CardFooter: React.FC<ICardFooterProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <View style={[styles.footer, style]} {...props}>
      {children}
    </View>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    marginRight: 12,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  action: {
    marginLeft: 8,
  },
  content: {
    marginVertical: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
    gap: 8,
  },
});

export default Card;
