import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import CheckBox from './index';

const meta = {
  title: 'Molecules/Checkbox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
      description: '체크박스 라벨',
    },
    size: {
      control: { type: 'number', min: 20, max: 40, step: 2 },
      description: '체크박스 크기',
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
    label: '기본 체크박스',
    checked: true,
    size: 24,
    labelSize: 14,
    boxColor: 'primary',
    disabled: false,
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const Column = ({ children }: { children: React.ReactNode }) => (
  <View style={{ width: 320, gap: 12 }}>{children}</View>
);

export const Default: Story = {};

export const Shapes: Story = {
  render: (args) => (
    <Column>
      <CheckBox.Square {...args} label='Square' checked />
      <CheckBox.Rounded {...args} label='Rounded' checked />
      <CheckBox.Circle {...args} label='Circle' checked />
    </Column>
  ),
};

export const ColorStates: Story = {
  render: (args) => (
    <Column>
      <CheckBox {...args} label='Primary' checked boxColor='primary' />
      <CheckBox {...args} label='Secondary' checked boxColor='secondary' />
      <CheckBox {...args} label='Success' checked boxColor='success' />
      <CheckBox {...args} label='Error' checked boxColor='error' />
    </Column>
  ),
};

export const DisabledStates: Story = {
  render: (args) => (
    <Column>
      <CheckBox {...args} label='선택된 비활성 상태' checked disabled />
      <CheckBox {...args} label='비선택 비활성 상태' checked={false} disabled />
      <CheckBox {...args} label='선택 가능한 상태' checked={false} />
    </Column>
  ),
};

export const ChecklistPreview: Story = {
  render: (args) => {
    const [checkedMap, setCheckedMap] = useState({
      tokens: true,
      stories: true,
      docs: false,
    });

    const toggle = (key: keyof typeof checkedMap) => (checked: boolean) => {
      setCheckedMap((prev) => ({ ...prev, [key]: checked }));
    };

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
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#111827' }}>배포 전 체크리스트</Text>
        <CheckBox {...args} label='토큰 변경 반영' checked={checkedMap.tokens} onChange={toggle('tokens')} />
        <CheckBox {...args} label='주요 story 정비' checked={checkedMap.stories} onChange={toggle('stories')} />
        <CheckBox {...args} label='문서 확인' checked={checkedMap.docs} onChange={toggle('docs')} />
      </View>
    );
  },
};
