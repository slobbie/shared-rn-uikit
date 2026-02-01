import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import {
  IErrorBoundaryProps,
  IErrorBoundaryState,
  IErrorFallbackProps,
} from '@shared/ui/utils/errorBoundary/errorBoundary.interface';

/**
 * 에러 바운더리 컴포넌트
 */
class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.onError?.(error, errorInfo);
  }

  resetError = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorFallback
          error={this.state.error ?? undefined}
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}

/**
 * 기본 에러 폴백 컴포넌트
 */
const ErrorFallback: React.FC<IErrorFallbackProps> = ({
  error,
  resetError,
  title = '문제가 발생했습니다',
  message = '예기치 않은 오류가 발생했습니다. 다시 시도해 주세요.',
  showRetry = true,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <Text style={styles.icon}>⚠️</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {error && __DEV__ && (
        <Text style={styles.errorDetail}>{error.message}</Text>
      )}
      {showRetry && resetError && (
        <Pressable style={styles.retryButton} onPress={resetError}>
          <Text style={styles.retryText}>다시 시도</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  icon: {
    fontSize: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 16,
  },
  errorDetail: {
    fontSize: 12,
    color: '#EF4444',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'monospace',
  },
  retryButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export { ErrorBoundary, ErrorFallback };
export default ErrorBoundary;
