import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';

import Badge from './index';

const meta = {
  title: 'Molecules/Badge',
  component: Badge.withText,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'badge 안에 표시할 텍스트',
    },
    size: {
      control: { type: 'number', min: 10, max: 40, step: 2 },
      description: 'badge 크기',
    },
  },
  args: {
    label: '3',
    size: 20,
  },
} satisfies Meta<typeof Badge.withText>;

export default meta;
type Story = StoryObj<typeof meta>;

const Surface = ({ children }: { children: React.ReactNode }) => (
  <View
    style={{
      width: 320,
      padding: 16,
      borderRadius: 12,
      backgroundColor: '#F3F4F6',
      gap: 16,
    }}
  >
    {children}
  </View>
);

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      <Badge.withText label='1' size={16} />
      <Badge.withText label='12' size={20} />
      <Badge.withText label='99' size={24} />
      <Badge.withText label='9+' size={28} />
    </View>
  ),
};

export const DotStates: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      <Badge.dot size={8} />
      <Badge.dot size={10} />
      <Badge.dot size={14} />
      <Badge.dot size={18} />
    </View>
  ),
};

export const NotificationPreview: Story = {
  render: () => (
    <Surface>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>알림</Text>
        <Badge.withText label='12' size={22} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 14, color: '#374151' }}>읽지 않은 메시지</Text>
        <Badge.dot size={10} />
      </View>
    </Surface>
  ),
};
