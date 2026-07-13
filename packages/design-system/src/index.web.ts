// @package/design-system — Web 진입점
// 주의: react-native를 import하는 모듈을 여기서 export하지 않는다.

export { Button } from './components/atoms/Button/Button.web';
export type {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from './components/atoms/Button/Button.types';
export { Typo } from './components/atoms/Typo/Typo.web';
export type { TypoProps, TypoVariant, TypoColor } from './components/atoms/Typo/Typo.types';
export { Avatar } from './components/atoms/Avatar/Avatar.web';
export type { AvatarProps } from './components/atoms/Avatar/Avatar.types';
export { Badge } from './components/atoms/Badge/Badge.web';
export type { BadgeProps, BadgeVariant } from './components/atoms/Badge/Badge.types';
export { Chip } from './components/atoms/Chip/Chip.web';
export type { ChipProps } from './components/atoms/Chip/Chip.types';
export { Divider } from './components/atoms/Divider/Divider.web';
export type { DividerProps } from './components/atoms/Divider/Divider.types';
export { Switch } from './components/atoms/Switch/Switch.web';
export type { SwitchProps } from './components/atoms/Switch/Switch.types';
export { Checkbox } from './components/atoms/Checkbox/Checkbox.web';
export type { CheckboxProps } from './components/atoms/Checkbox/Checkbox.types';
export { Radio } from './components/atoms/Radio/Radio.web';
export type { RadioProps } from './components/atoms/Radio/Radio.types';
export { TextInput } from './components/molecules/TextInput/TextInput.web';
export type { TextInputProps } from './components/molecules/TextInput/TextInput.types';
export { TextArea } from './components/molecules/TextArea/TextArea.web';
export type { TextAreaProps } from './components/molecules/TextArea/TextArea.types';
export { Spacer } from './components/atoms/Spacer/Spacer.web';
export type { SpacerProps } from './components/atoms/Spacer/Spacer.types';
export { Skeleton } from './components/atoms/Skeleton/Skeleton.web';
export type { SkeletonProps } from './components/atoms/Skeleton/Skeleton.types';
export { ProgressBar } from './components/atoms/ProgressBar/ProgressBar.web';
export type {
  ProgressBarProps,
  ProgressBarVariant,
} from './components/atoms/ProgressBar/ProgressBar.types';
export { SegmentedControl } from './components/molecules/SegmentedControl/SegmentedControl.web';
export type { SegmentedControlProps } from './components/molecules/SegmentedControl/SegmentedControl.types';
export { Slider } from './components/atoms/Slider/Slider.web';
export type { SliderProps } from './components/atoms/Slider/Slider.types';
export { Modal } from './components/molecules/Modal/Modal.web';
export type { ModalProps } from './components/molecules/Modal/Modal.types';
export { Tooltip } from './components/molecules/Tooltip/Tooltip.web';
export type { TooltipProps } from './components/molecules/Tooltip/Tooltip.types';
export { Toast } from './components/molecules/Toast/Toast.web';
export type { ToastProps, ToastVariant } from './components/molecules/Toast/Toast.types';
export { SettingRow } from './components/organisms/SettingRow/SettingRow.web';
export type { SettingRowProps } from './components/organisms/SettingRow/SettingRow.types';
export { ProfileHeader } from './components/organisms/ProfileHeader/ProfileHeader.web';
export type { ProfileHeaderProps } from './components/organisms/ProfileHeader/ProfileHeader.types';

// 테마 (플랫폼 중립)
export { ThemeProvider, useTheme } from './utils/lib/ThemeContext';
export { createTheme } from './utils/lib/createTheme';
