import React, { useState, useRef, createContext, useContext } from 'react';
import { View, Text, StyleSheet, Pressable, Animated, LayoutAnimation, Platform, UIManager } from 'react-native';

import {
  IAccordionProps,
  IAccordionHeaderProps,
  IAccordionContentProps,
} from '@shared/ui/layout/accordion/accordion.interface';
import { useTheme } from '@shared/utils/lib/ThemeContext';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionContextValue {
  isExpanded: boolean;
  toggleExpanded: () => void;
  disabled: boolean;
}

const AccordionContext = createContext<AccordionContextValue>({
  isExpanded: false,
  toggleExpanded: () => {},
  disabled: false,
});

/**
 * 아코디언 메뉴 컴포넌트
 */
const Accordion: React.FC<IAccordionProps> & {
  Header: React.FC<IAccordionHeaderProps>;
  Content: React.FC<IAccordionContentProps>;
} = ({
  defaultExpanded = false,
  expanded: controlledExpanded,
  onToggle,
  disabled = false,
  children,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);

  const isExpanded = controlledExpanded ?? internalExpanded;

  const toggleExpanded = () => {
    if (disabled) return;

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (controlledExpanded === undefined) {
      setInternalExpanded(!isExpanded);
    }
    onToggle?.(!isExpanded);
  };

  return (
    <AccordionContext.Provider value={{ isExpanded, toggleExpanded, disabled }}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.background.background_white,
            borderColor: theme.colors.border.secondary,
          },
          disabled && { opacity: 0.5 },
          style,
        ]}
        {...props}
      >
        {children}
      </View>
    </AccordionContext.Provider>
  );
};

/**
 * 아코디언 헤더 컴포넌트
 */
const AccordionHeader: React.FC<IAccordionHeaderProps> = ({
  title,
  subtitle,
  icon,
  expandIcon,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const { isExpanded, toggleExpanded, disabled } = useContext(AccordionContext);
  const rotateAnim = useRef(new Animated.Value(isExpanded ? 1 : 0)).current;

  React.useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isExpanded ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isExpanded, rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Pressable
      onPress={toggleExpanded}
      disabled={disabled}
      style={[styles.header, style]}
      {...props}
    >
      {icon && <View style={styles.icon}>{icon}</View>}
      <View style={styles.headerContent}>
        <Text style={[styles.title, { color: theme.colors.text.primary }]}>
          {title}
        </Text>
        {subtitle && (
          <Text style={[styles.subtitle, { color: theme.colors.text.secondary }]}>
            {subtitle}
          </Text>
        )}
      </View>
      <Animated.View style={{ transform: [{ rotate }] }}>
        {expandIcon || (
          <Text style={[styles.expandIcon, { color: theme.colors.text.secondary }]}>
            ▼
          </Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

/**
 * 아코디언 콘텐츠 컴포넌트
 */
const AccordionContent: React.FC<IAccordionContentProps> = ({
  children,
  style,
  ...props
}) => {
  const { isExpanded } = useContext(AccordionContext);

  if (!isExpanded) return null;

  return (
    <View style={[styles.content, style]} {...props}>
      {children}
    </View>
  );
};

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    marginRight: 12,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 2,
  },
  expandIcon: {
    fontSize: 12,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default Accordion;
