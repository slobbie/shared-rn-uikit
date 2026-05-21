import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';

import Avatar from './index';

const SAMPLE_IMAGE = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80';

const meta = {
  title: 'Molecules/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 24, max: 96, step: 4 },
      description: 'avatar 크기',
    },
    label: {
      control: 'text',
      description: '텍스트 avatar 라벨',
    },
    imageUrl: {
      control: 'text',
      description: '이미지 URL',
    },
  },
  args: {
    size: 44,
    label: 'HS',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Row = ({ children }: { children: React.ReactNode }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, width: 320 }}>
    {children}
  </View>
);

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Row>
      <Avatar.text size={32} label='A' />
      <Avatar.text size={44} label='HS' />
      <Avatar.text size={56} label='UI' />
      <Avatar.text size={72} label='RN' />
    </Row>
  ),
};

export const ImageAndText: Story = {
  render: () => (
    <Row>
      <Avatar.text size={44} label='HS' />
      <Avatar.image size={44} imageUrl={SAMPLE_IMAGE} />
      <Avatar.text size={56} label='AB' />
      <Avatar.image size={56} imageUrl={SAMPLE_IMAGE} />
    </Row>
  ),
};

export const TeamPreview: Story = {
  render: () => (
    <View style={{ width: 320, gap: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Avatar.image size={44} imageUrl={SAMPLE_IMAGE} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>해석 정</Text>
          <Text style={{ fontSize: 13, color: '#6B7280' }}>Frontend Engineer</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Avatar.text size={44} label='UI' />
        <View>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>UI Kit Bot</Text>
          <Text style={{ fontSize: 13, color: '#6B7280' }}>Storybook Preview</Text>
        </View>
      </View>
    </View>
  ),
};
