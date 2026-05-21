import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';

import Spacer from './index';

const meta = {
  title: 'Atoms/Spacer',
  component: Spacer,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    top: {
      control: { type: 'number', min: 0, max: 48, step: 4 },
      description: '위쪽 여백',
    },
    bottom: {
      control: { type: 'number', min: 0, max: 48, step: 4 },
      description: '아래쪽 여백',
    },
    left: {
      control: { type: 'number', min: 0, max: 48, step: 4 },
      description: '왼쪽 여백',
    },
    right: {
      control: { type: 'number', min: 0, max: 48, step: 4 },
      description: '오른쪽 여백',
    },
  },
  args: {
    top: 16,
    bottom: 0,
    left: 0,
    right: 0,
  },
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ label, color }: { label: string; color: string }) => (
  <View style={{ backgroundColor: color, borderRadius: 8, padding: 12 }}>
    <Text style={{ color: '#111827' }}>{label}</Text>
  </View>
);

export const Default: Story = {
  render: (args) => (
    <View style={{ width: 320 }}>
      <Box label='위 박스' color='#DBEAFE' />
      <Spacer {...args} />
      <Box label='아래 박스' color='#D1FAE5' />
    </View>
  ),
};

export const VerticalSpacing: Story = {
  render: () => (
    <View style={{ width: 320 }}>
      <Box label='Top 8' color='#FCE7F3' />
      <Spacer top={8} />
      <Box label='Top 16' color='#E0E7FF' />
      <Spacer top={16} />
      <Box label='Top 24' color='#DCFCE7' />
      <Spacer top={24} />
      <Box label='Top 32' color='#FEF3C7' />
    </View>
  ),
};

export const HorizontalSpacing: Story = {
  render: () => (
    <View style={{ width: 320, flexDirection: 'row', alignItems: 'center' }}>
      <Box label='A' color='#DBEAFE' />
      <Spacer right={12} />
      <Box label='B' color='#FDE68A' />
      <Spacer right={24} />
      <Box label='C' color='#D1FAE5' />
    </View>
  ),
};

export const CombinedSpacing: Story = {
  render: () => (
    <View style={{ width: 320, backgroundColor: '#F3F4F6', padding: 16, borderRadius: 12 }}>
      <Box label='기준 박스' color='#E9D5FF' />
      <Spacer top={20} bottom={12} />
      <Box label='복합 여백 적용' color='#BFDBFE' />
    </View>
  ),
};
