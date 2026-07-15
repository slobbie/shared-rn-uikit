import type { ButtonSize, ButtonVariant } from '@shared/components/atoms/Button/Button.types';

/**
 * 플랫폼 중립 버튼 상태 계산.
 * Web/RN 구현이 동일한 상호작용 규칙을 공유하기 위한 단일 소스.
 */
export interface ButtonStateInput {
  disabled?: boolean;
  loading?: boolean;
}

export interface ButtonState {
  /** 클릭/press 가능 여부 */
  isInteractive: boolean;
  /** 접근성 상태 (RN accessibilityState / Web aria-*) */
  isDisabled: boolean;
  isBusy: boolean;
}

export const getButtonState = ({
  disabled = false,
  loading = false,
}: ButtonStateInput): ButtonState => ({
  isInteractive: !disabled && !loading,
  isDisabled: disabled || loading,
  isBusy: loading,
});

/** 사이즈별 치수 — 단위 없는 숫자(px/dp)로 양 플랫폼 공유 */
export const BUTTON_SIZE: Record<
  ButtonSize,
  { height: number; paddingHorizontal: number; fontSize: number; borderRadius: number }
> = {
  sm: { height: 32, paddingHorizontal: 12, fontSize: 13, borderRadius: 8 },
  md: { height: 44, paddingHorizontal: 16, fontSize: 15, borderRadius: 10 },
  lg: { height: 52, paddingHorizontal: 20, fontSize: 17, borderRadius: 12 },
};

export interface ButtonColorSet {
  background: string;
  text: string;
  border: string;
}

/**
 * semantic theme의 button 팔레트를 variant별 색상 세트로 변환.
 * theme 형태는 createSemanticTheme 반환값을 따른다.
 */
export const getButtonColors = (
  buttonPalette: {
    primary: string;
    secondary: string;
    disabled: string;
  },
  variant: ButtonVariant,
  isDisabled: boolean,
): ButtonColorSet => {
  if (isDisabled) {
    return {
      background: buttonPalette.disabled,
      text: '#FFFFFF',
      border: buttonPalette.disabled,
    };
  }
  switch (variant) {
    case 'primary':
      return {
        background: buttonPalette.primary,
        text: '#FFFFFF',
        border: buttonPalette.primary,
      };
    case 'secondary':
      return {
        background: buttonPalette.secondary,
        text: '#FFFFFF',
        border: buttonPalette.secondary,
      };
    case 'ghost':
      return {
        background: 'transparent',
        text: buttonPalette.primary,
        border: buttonPalette.primary,
      };
  }
};
