export type CubicBezier = readonly [number, number, number, number];

export const DURATION = {
  fast: 150,
  normal: 200,
  slow: 300,
} as const;

export const EASING = {
  enter: [0, 0, 0.2, 1],
  exit: [0.4, 0, 1, 1],
  standard: [0.2, 0, 0, 1],
} as const satisfies Record<string, CubicBezier>;

export const MOTION_DEFAULT = {
  slideDistance: 16,
  scaleFrom: 0.96,
} as const;

export const normalizeDuration = (duration: number): number =>
  Number.isFinite(duration) ? Math.max(0, duration) : 0;

export const normalizeDistance = (distance: number): number =>
  Number.isFinite(distance) ? Math.max(0, distance) : 0;

export const normalizeScale = (scale: number): number =>
  Number.isFinite(scale) && scale > 0 ? scale : MOTION_DEFAULT.scaleFrom;
