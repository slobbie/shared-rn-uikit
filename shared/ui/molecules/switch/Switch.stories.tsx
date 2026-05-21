import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Switch from './Switch';

const meta = {
  title: 'Molecules/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOn: {
      control: 'boolean',
      description: '현재 On 상태',
    },
    width: {
      control: { type: 'number', min: 36, max: 72, step: 2 },
      description: '스위치 너비',
    },
    height: {
      control: { type: 'number', min: 20, max: 40, step: 2 },
      description: '스위치 높이',
    },
    onBackgroundColor: {
      control: 'color',
      description: '활성 배경색',
    },
    offBackgroundColor: {
      control: 'color',
      description: '비활성 배경색',
    },
    isDisabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
  },
  args: {
    isOn: true,
    width: 40,
    height: 24,
    onBackgroundColor: '#05AFF2',
    offBackgroundColor: '#EBECEF',
    isDisabled: false,
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const Row = ({ children }: { children: React.ReactNode }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16, width: 320 }}>
    {children}
  </View>
);

export const Default: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <Row>
      <Switch {...args} width={36} height={20} />
      <Switch {...args} width={40} height={24} />
      <Switch {...args} width={52} height={30} />
      <Switch {...args} width={64} height={36} />
    </Row>
  ),
};

export const ColorStates: Story = {
  render: () => (
    <Row>
      <Switch isOn onBackgroundColor='#05AFF2' offBackgroundColor='#DCEFFE' />
      <Switch isOn onBackgroundColor='#10B981' offBackgroundColor='#D1FAE5' />
      <Switch isOn onBackgroundColor='#F59E0B' offBackgroundColor='#FEF3C7' />
      <Switch isOn onBackgroundColor='#EF4444' offBackgroundColor='#FEE2E2' />
    </Row>
  ),
};

export const DisabledStates: Story = {
  render: () => (
    <Row>
      <Switch isOn={false} isDisabled />
      <Switch isOn isDisabled />
      <Switch isOn={false} />
    </Row>
  ),
};

export const SettingsPreview: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      marketing: true,
      push: false,
      digest: true,
    });

    const toggle = (key: keyof typeof settings) => () => {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
      <View
        style={{
          width: 320,
          padding: 16,
          borderRadius: 12,
          backgroundColor: '#F8FAFC',
          gap: 14,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>알림 설정</Text>
        <Row>
          <Text style={{ flex: 1, color: '#374151' }}>마케팅 수신</Text>
          <Switch isOn={settings.marketing} onPress={toggle('marketing')} />
        </Row>
        <Row>
          <Text style={{ flex: 1, color: '#374151' }}>푸시 알림</Text>
          <Switch isOn={settings.push} onPress={toggle('push')} />
        </Row>
        <Row>
          <Text style={{ flex: 1, color: '#374151' }}>주간 요약</Text>
          <Switch isOn={settings.digest} onPress={toggle('digest')} />
        </Row>
      </View>
    );
  },
};
