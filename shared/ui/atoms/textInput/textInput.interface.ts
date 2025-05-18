import { TextInputProps } from 'react-native';

export interface IBaseInputProps extends TextInputProps {
  variant?: 'default' | 'outlined' | 'underlined';
  placeholderColor?: string;
}

export type TextInputComponent = React.FC<IBaseInputProps> & {
  Default: React.FC<IBaseInputProps>;
  Outlined: React.FC<IBaseInputProps>;
  Underlined: React.FC<IBaseInputProps>;
};
