/** Web/RN 공유 컴포넌트 치수 — 단위 없는 숫자(px/dp) */

export type ControlSize = 'sm' | 'md' | 'lg';

export const AVATAR_SIZE: Record<
  ControlSize,
  { diameter: number; fontSize: number }
> = {
  sm: { diameter: 32, fontSize: 13 },
  md: { diameter: 44, fontSize: 16 },
  lg: { diameter: 64, fontSize: 24 },
};

export const BADGE = {
  height: 20,
  paddingHorizontal: 8,
  fontSize: 11,
  borderRadius: 999,
  dotSize: 8,
} as const;

export const CHIP = {
  height: 32,
  paddingHorizontal: 14,
  fontSize: 13,
  borderRadius: 999,
} as const;

export const SWITCH = {
  trackWidth: 48,
  trackHeight: 28,
  thumbSize: 24,
  padding: 2,
} as const;
