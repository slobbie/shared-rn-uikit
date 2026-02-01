import { ViewProps } from 'react-native';

export type ModalSize = 'small' | 'medium' | 'large' | 'fullscreen';

export interface IModalProps extends ViewProps {
  visible: boolean;
  onClose?: () => void;
  size?: ModalSize;
  title?: string;
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  animationType?: 'none' | 'fade' | 'slide';
  children: React.ReactNode;
}
