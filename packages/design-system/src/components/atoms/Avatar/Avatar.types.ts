import type { ControlSize } from '@shared/core/tokens/sizes';

export interface AvatarProps {
  size?: ControlSize;
  /** 이미지 URL — 없으면 name 이니셜 표시 */
  imageUrl?: string;
  /** 이니셜 소스 겸 접근성 레이블 */
  name: string;
  testID?: string;
}
