export type ReducedMotionPreference = 'system' | 'always' | 'never';

export interface MotionPresenceOptions {
  visible: boolean;
  duration?: number;
  /** 최초 visible=true일 때 enter 애니메이션을 재생한다. */
  appear?: boolean;
  /** exit 완료 뒤 mounted=false로 전환한다. */
  unmountOnExit?: boolean;
  /** OS의 reduced-motion 설정을 따를지 결정한다. */
  reducedMotion?: ReducedMotionPreference;
}

export interface MotionResult<TBinding> {
  /** MotionBox가 플랫폼 엔진에 전달하는 전용 바인딩. */
  readonly binding: TBinding;
  readonly mounted: boolean;
  readonly visible: boolean;
  readonly appear: boolean;
  readonly unmountOnExit: boolean;
  /** 플랫폼 엔진이 exit를 끝냈을 때 호출한다. */
  readonly completeExit: () => void;
}

export type MotionSizing = 'inherit' | 'intrinsic' | 'fill';
