/** 오버레이/피드백 컴포넌트 공유 치수 — 단위 없는 숫자(px/dp) */

export const SLIDER = {
  trackHeight: 4,
  thumbSize: 20,
  borderRadius: 999,
} as const;

export const MODAL = {
  borderRadius: 16,
  padding: 24,
  maxWidth: 400,
  backdropOpacity: 0.5,
} as const;

export const TOOLTIP = {
  paddingVertical: 6,
  paddingHorizontal: 10,
  fontSize: 12,
  borderRadius: 6,
  offset: 6,
} as const;

export const TOAST = {
  paddingVertical: 12,
  paddingHorizontal: 16,
  borderRadius: 10,
  fontSize: 14,
  offset: 24,
} as const;
