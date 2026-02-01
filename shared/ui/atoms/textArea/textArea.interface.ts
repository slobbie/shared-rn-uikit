import { TextInputProps } from 'react-native';

export interface ITextAreaProps extends TextInputProps {
  variant?: 'default' | 'outlined';
  minHeight?: number;
  maxHeight?: number;
  disabled?: boolean;
  placeholderColor?: string;
  autoGrow?: boolean;
}
