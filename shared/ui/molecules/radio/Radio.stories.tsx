import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import Radio from './index';

const options = [
  { value: 'basic', label: '기본 옵션' },
  { value: 'compact', label: '간단 옵션' },
  { value: 'detailed', label: '설명이 있는 옵션' },
] as const;

const meta = {
  title: 'Molecules/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: '라디오 라벨',
    },
    size: {
      control: { type: 'number', min: 20, max: 40, step: 2 },
      description: '라디오 크기',
    },
    labelSize: {
      control: { type: 'number', min: 12, max: 24, step: 1 },
      description: '라벨 텍스트 크기',
    },
    boxColor: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error'],
      description: '선택 색상',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
  },
  args: {
    value: 'basic',
    selectedValue: 'basic',
    label: '기본 옵션',
    size: 24,
    labelSize: 14,
    boxColor: 'primary',
    disabled: false,
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

const Column = ({ children }: { children: React.ReactNode }) => (
  <View style={{ width: 320, gap: 12 }}>{children}</View>
);

export const Default: Story = {};

export const ColorStates: Story = {
  render: (args) => (
    <Column>
      <Radio {...args} label='Primary' boxColor='primary' selectedValue='primary' value='primary' />
      <Radio {...args} label='Secondary' boxColor='secondary' selectedValue='secondary' value='secondary' />
      <Radio {...args} label='Success' boxColor='success' selectedValue='success' value='success' />
      <Radio {...args} label='Error' boxColor='error' selectedValue='error' value='error' />
    </Column>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Column>
      <Radio {...args} size={20} labelSize={12} label='Small option' selectedValue='s' value='s' />
      <Radio {...args} size={24} labelSize={14} label='Medium option' selectedValue='m' value='m' />
      <Radio {...args} size={32} labelSize={16} label='Large option' selectedValue='l' value='l' />
    </Column>
  ),
};

export const DisabledStates: Story = {
  render: (args) => (
    <Column>
      <Radio {...args} label='선택된 비활성 옵션' selectedValue='selected' value='selected' disabled />
      <Radio {...args} label='비선택 비활성 옵션' selectedValue='selected' value='idle' disabled />
      <Radio {...args} label='사용 가능한 옵션' selectedValue='selected' value='idle' />
    </Column>
  ),
};

export const InteractiveGroup: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<(typeof options)[number]['value']>('basic');

    return (
      <View
        style={{
          width: 320,
          padding: 16,
          borderRadius: 12,
          backgroundColor: '#F8FAFC',
          gap: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>알림 수신 범위</Text>
        {options.map((option) => (
          <Radio
            {...args}
            key={option.value}
            value={option.value}
            label={option.label}
            selectedValue={selectedValue}
            onSelect={(value) => setSelectedValue(value as (typeof options)[number]['value'])}
          />
        ))}
      </View>
    );
  },
};
