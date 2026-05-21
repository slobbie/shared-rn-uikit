import React from 'react';
import { View } from 'react-native';

interface WrapperProps {
  children: React.ReactNode;
}

interface ContentWidthProps extends WrapperProps {
  width?: number;
  padding?: number;
}

export const StorybookContentWidth = ({
  children,
  width = 320,
  padding = 0,
}: ContentWidthProps) => (
  <View style={{ width, padding }}>{children}</View>
);

interface SurfaceProps extends ContentWidthProps {
  gap?: number;
  radius?: number;
  backgroundColor?: string;
}

export const StorybookSurface = ({
  children,
  width = 320,
  padding = 16,
  gap = 16,
  radius = 12,
  backgroundColor = '#F8FAFC',
}: SurfaceProps) => (
  <View
    style={{
      width,
      padding,
      gap,
      borderRadius: radius,
      backgroundColor,
    }}
  >
    {children}
  </View>
);

interface OverlayCanvasProps extends WrapperProps {
  height?: number;
  padding?: number;
}

export const StorybookOverlayCanvas = ({
  children,
  height = 400,
  padding = 100,
}: OverlayCanvasProps) => (
  <View
    style={{
      flex: 1,
      height,
      justifyContent: 'center',
      alignItems: 'center',
      padding,
    }}
  >
    {children}
  </View>
);
