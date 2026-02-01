import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';

import Skeleton from '@shared/ui/atoms/skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
    },
    width: { control: 'number' },
    height: { control: 'number' },
    animated: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  args: {
    variant: 'text',
    width: 200,
    height: 16,
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 60,
    height: 60,
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 300,
    height: 120,
  },
};

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    width: 300,
    height: 80,
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <View style={{ width: 300, padding: 16, backgroundColor: '#fff', borderRadius: 12 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
        <Skeleton variant="circular" width={48} height={48} />
        <View style={{ marginLeft: 12, flex: 1 }}>
          <Skeleton variant="text" width="60%" height={16} style={{ marginBottom: 8 }} />
          <Skeleton variant="text" width="40%" height={12} />
        </View>
      </View>
      <Skeleton variant="rounded" width="100%" height={150} style={{ marginBottom: 12 }} />
      <Skeleton variant="text" width="100%" height={14} style={{ marginBottom: 6 }} />
      <Skeleton variant="text" width="80%" height={14} />
    </View>
  ),
};
