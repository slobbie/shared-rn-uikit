export { DURATION, EASING, MOTION_DEFAULT } from './core/tokens';
export type {
  MotionPresenceOptions,
  MotionResult,
  MotionSizing,
  ReducedMotionPreference,
} from './core/motion.types';

export { useFade } from './hooks/useFade/useFade.web';
export type { UseFadeOptions } from './hooks/useFade/useFade.types';
export { useSlide } from './hooks/useSlide/useSlide.web';
export type {
  SlideDirection,
  UseSlideOptions,
} from './hooks/useSlide/useSlide.types';
export { useScale } from './hooks/useScale/useScale.web';
export type { UseScaleOptions } from './hooks/useScale/useScale.types';

export { MotionBox } from './components/MotionBox/MotionBox.web';
export type { MotionBoxProps } from './components/MotionBox/MotionBox.web';
export { Fade } from './components/Fade/Fade.web';
export type { FadeProps } from './components/Fade/Fade.types';
export { Slide } from './components/Slide/Slide.web';
export type { SlideProps } from './components/Slide/Slide.types';
export { Scale } from './components/Scale/Scale.web';
export type { ScaleProps } from './components/Scale/Scale.types';
