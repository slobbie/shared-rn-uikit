// @package/design-system — React Native 진입점

// 크로스플랫폼 공개 API (Web과 동일 계약)
export { Button } from './components/atoms/Button/Button.native';
export type {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from './components/atoms/Button/Button.types';
export { Typo } from './components/atoms/Typo/Typo.native';
export type { TypoProps, TypoVariant, TypoColor } from './components/atoms/Typo/Typo.types';
export { Avatar } from './components/atoms/Avatar/Avatar.native';
export type { AvatarProps } from './components/atoms/Avatar/Avatar.types';
export { Badge } from './components/atoms/Badge/Badge.native';
export type { BadgeProps, BadgeVariant } from './components/atoms/Badge/Badge.types';
export { Chip } from './components/atoms/Chip/Chip.native';
export type { ChipProps } from './components/atoms/Chip/Chip.types';
export { Divider } from './components/atoms/Divider/Divider.native';
export type { DividerProps } from './components/atoms/Divider/Divider.types';
export { Switch } from './components/atoms/Switch/Switch.native';
export type { SwitchProps } from './components/atoms/Switch/Switch.types';
export { Checkbox } from './components/atoms/Checkbox/Checkbox.native';
export type { CheckboxProps } from './components/atoms/Checkbox/Checkbox.types';
export { Radio } from './components/atoms/Radio/Radio.native';
export type { RadioProps } from './components/atoms/Radio/Radio.types';
export { TextInput } from './components/molecules/TextInput/TextInput.native';
export type { TextInputProps } from './components/molecules/TextInput/TextInput.types';
export { TextArea } from './components/molecules/TextArea/TextArea.native';
export type { TextAreaProps } from './components/molecules/TextArea/TextArea.types';
export { Spacer } from './components/atoms/Spacer/Spacer.native';
export type { SpacerProps } from './components/atoms/Spacer/Spacer.types';
export { Skeleton } from './components/atoms/Skeleton/Skeleton.native';
export type { SkeletonProps } from './components/atoms/Skeleton/Skeleton.types';
export { ProgressBar } from './components/atoms/ProgressBar/ProgressBar.native';
export type {
  ProgressBarProps,
  ProgressBarVariant,
} from './components/atoms/ProgressBar/ProgressBar.types';
export { SegmentedControl } from './components/molecules/SegmentedControl/SegmentedControl.native';
export type { SegmentedControlProps } from './components/molecules/SegmentedControl/SegmentedControl.types';
export { Slider } from './components/atoms/Slider/Slider.native';
export type { SliderProps } from './components/atoms/Slider/Slider.types';
export { Modal } from './components/molecules/Modal/Modal.native';
export type { ModalProps } from './components/molecules/Modal/Modal.types';
export { Tooltip } from './components/molecules/Tooltip/Tooltip.native';
export type { TooltipProps } from './components/molecules/Tooltip/Tooltip.types';
export { Toast } from './components/molecules/Toast/Toast.native';
export type { ToastProps, ToastVariant } from './components/molecules/Toast/Toast.types';
export { SettingRow } from './components/organisms/SettingRow/SettingRow.native';
export type { SettingRowProps } from './components/organisms/SettingRow/SettingRow.types';
export { ProfileHeader } from './components/organisms/ProfileHeader/ProfileHeader.native';
export type { ProfileHeaderProps } from './components/organisms/ProfileHeader/ProfileHeader.types';

// 테마
export { ThemeProvider, useTheme } from './utils/lib/ThemeContext';
export { createTheme } from './utils/lib/createTheme';
