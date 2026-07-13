export type TypoVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle'
  | 'body'
  | 'caption';

export type TypoWeight = 'regular' | 'medium' | 'semibold' | 'bold';

/** 단위 없는 숫자(px/dp) — Web/RN 공유 타이포 스케일 */
export const TYPO_SCALE: Record<
  TypoVariant,
  { fontSize: number; lineHeight: number; weight: TypoWeight }
> = {
  h1: { fontSize: 28, lineHeight: 36, weight: 'bold' },
  h2: { fontSize: 24, lineHeight: 32, weight: 'bold' },
  h3: { fontSize: 20, lineHeight: 28, weight: 'semibold' },
  subtitle: { fontSize: 17, lineHeight: 24, weight: 'semibold' },
  body: { fontSize: 15, lineHeight: 22, weight: 'regular' },
  caption: { fontSize: 13, lineHeight: 18, weight: 'regular' },
};

export const FONT_WEIGHT_VALUE: Record<TypoWeight, '400' | '500' | '600' | '700'> = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};
