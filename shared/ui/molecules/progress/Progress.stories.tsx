import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Text, View } from 'react-native';

import Progress from './index';

const meta = {
  title: 'Molecules/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '진행률',
    },
    height: {
      control: { type: 'number', min: 4, max: 20, step: 2 },
      description: '바 높이',
    },
    progressColor: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error'],
      description: '진행 색상',
    },
  },
  args: {
    progress: 68,
    height: 8,
    progressColor: 'primary',
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

const Column = ({ children }: { children: React.ReactNode }) => (
  <View style={{ width: 320, gap: 16 }}>{children}</View>
);

export const Default: Story = {
  render: (args) => (
    <View style={{ width: 320 }}>
      <Progress {...args} />
    </View>
  ),
};

export const Heights: Story = {
  render: () => (
    <Column>
      <Progress progress={35} height={6} />
      <Progress progress={52} height={8} />
      <Progress progress={74} height={12} />
      <Progress progress={88} height={16} />
    </Column>
  ),
};

export const ColorStates: Story = {
  render: () => (
    <Column>
      <Progress progress={72} progressColor='primary' />
      <Progress progress={64} progressColor='secondary' />
      <Progress progress={82} progressColor='success' />
      <Progress progress={46} progressColor='error' />
    </Column>
  ),
};

export const CircularStates: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
      <Progress.Circle progress={32} size={64} strokeWidth={8} />
      <Progress.Circle progress={56} size={72} strokeWidth={10} progressColor='secondary' />
      <Progress.Circle progress={78} size={80} strokeWidth={10} progressColor='success' />
    </View>
  ),
};

export const DashedProgress: Story = {
  render: () => (
    <Column>
      <Progress.Bar progress={65} height={10} dashOptions={{ count: 8, gapRatio: 0.5 }} />
      <Progress.Bar progress={40} height={8} progressColor='secondary' dashOptions={{ count: 10, gapRatio: 0.7 }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <Progress.Circle progress={72} size={72} strokeWidth={10} dashOptions={{ count: 12, gapRatio: 1 }} />
        <View style={{ gap: 4 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#111827' }}>업로드 진행률</Text>
          <Text style={{ fontSize: 13, color: '#6B7280' }}>대시형 progress도 같이 확인</Text>
        </View>
      </View>
    </Column>
  ),
};

export const DashboardPreview: Story = {
  render: () => (
    <View
      style={{
        width: 320,
        padding: 16,
        borderRadius: 12,
        backgroundColor: '#F8FAFC',
        gap: 14,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>Storybook 개선 진행률</Text>
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 13, color: '#374151' }}>Atom 정비</Text>
        <Progress progress={100} progressColor='success' />
      </View>
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 13, color: '#374151' }}>Molecule 확장</Text>
        <Progress progress={65} progressColor='primary' />
      </View>
      <View style={{ gap: 8 }}>
        <Text style={{ fontSize: 13, color: '#374151' }}>Docs / Playground</Text>
        <Progress progress={24} progressColor='secondary' />
      </View>
    </View>
  ),
};
