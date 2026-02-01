import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';

import Loading from '@shared/ui/utils/loading';

const meta: Meta<typeof Loading> = {
  title: 'Utils/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['spinner', 'dots', 'pulse'],
    },
    text: { control: 'text' },
    overlay: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Spinner: Story = {
  args: {
    variant: 'spinner',
    size: 'medium',
  },
};

export const Dots: Story = {
  args: {
    variant: 'dots',
    size: 'medium',
  },
};

export const Pulse: Story = {
  args: {
    variant: 'pulse',
    size: 'medium',
  },
};

export const WithText: Story = {
  args: {
    variant: 'spinner',
    size: 'large',
    text: '로딩 중...',
  },
};

export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 32, alignItems: 'center' }}>
      <Loading size="small" variant="spinner" />
      <Loading size="medium" variant="spinner" />
      <Loading size="large" variant="spinner" />
    </View>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 48, alignItems: 'center' }}>
      <Loading variant="spinner" text="Spinner" />
      <Loading variant="dots" text="Dots" />
      <Loading variant="pulse" text="Pulse" />
    </View>
  ),
};

export const Overlay: Story = {
  render: () => (
    <View style={{ width: 300, height: 200, backgroundColor: '#F3F4F6', position: 'relative' }}>
      <Loading overlay variant="spinner" text="처리 중..." />
    </View>
  ),
};
