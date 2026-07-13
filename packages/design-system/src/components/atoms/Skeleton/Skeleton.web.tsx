import React from 'react';

import { SKELETON } from '@shared/core/tokens/display';
import { useTheme } from '@shared/utils/lib/ThemeContext';

import type { SkeletonProps } from './Skeleton.types';

const KEYFRAMES_ID = 'ds-skeleton-pulse';
let keyframesInjected = false;

/** 펄스 keyframes를 문서에 1회만 주입 */
const injectKeyframes = () => {
  if (keyframesInjected || typeof document === 'undefined') return;
  if (!document.getElementById(KEYFRAMES_ID)) {
    const style = document.createElement('style');
    style.id = KEYFRAMES_ID;
    style.textContent = `@keyframes ${KEYFRAMES_ID} { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`;
    document.head.appendChild(style);
  }
  keyframesInjected = true;
};

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 16,
  circle = false,
  testID,
}) => {
  const { theme } = useTheme();
  injectKeyframes();

  return (
    <div
      aria-hidden
      data-testid={testID}
      style={{
        width: circle ? height : width,
        height,
        borderRadius: circle ? 999 : SKELETON.borderRadius,
        backgroundColor: theme.colors.text.grey5,
        flexShrink: 0,
        animation: `${KEYFRAMES_ID} 1.2s ease-in-out infinite`,
      }}
    />
  );
};

export default Skeleton;
