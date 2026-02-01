import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, Text } from 'react-native';

import { ErrorFallback } from '@shared/ui/utils/errorBoundary';

const meta: Meta<typeof ErrorFallback> = {
  title: 'Utils/ErrorFallback',
  component: ErrorFallback,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    showRetry: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorFallback>;

export const Default: Story = {
  args: {
    title: '문제가 발생했습니다',
    message: '예기치 않은 오류가 발생했습니다. 다시 시도해 주세요.',
    showRetry: true,
  },
  render: (args) => (
    <View style={{ height: 400 }}>
      <ErrorFallback {...args} resetError={() => alert('Retry clicked!')} />
    </View>
  ),
};

export const CustomMessage: Story = {
  args: {
    title: '네트워크 오류',
    message: '인터넷 연결을 확인하고 다시 시도해 주세요.',
    showRetry: true,
  },
  render: (args) => (
    <View style={{ height: 400 }}>
      <ErrorFallback {...args} resetError={() => alert('Retry clicked!')} />
    </View>
  ),
};

export const WithoutRetry: Story = {
  args: {
    title: '접근 권한 없음',
    message: '이 페이지에 접근할 권한이 없습니다.',
    showRetry: false,
  },
  render: (args) => (
    <View style={{ height: 400 }}>
      <ErrorFallback {...args} />
    </View>
  ),
};

export const WithError: Story = {
  args: {
    title: '오류 발생',
    message: '자세한 오류 정보가 아래에 표시됩니다.',
    showRetry: true,
    error: new Error('TypeError: Cannot read property "id" of undefined'),
  },
  render: (args) => (
    <View style={{ height: 400 }}>
      <ErrorFallback {...args} resetError={() => alert('Retry clicked!')} />
    </View>
  ),
};
