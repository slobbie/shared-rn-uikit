import { ViewProps } from 'react-native';

export interface IErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

export interface IErrorFallbackProps extends ViewProps {
  error?: Error;
  resetError?: () => void;
  title?: string;
  message?: string;
  showRetry?: boolean;
}

export interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
