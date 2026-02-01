import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';

import TextArea from '@shared/ui/atoms/textArea';

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    autoGrow: { control: 'boolean' },
    minHeight: { control: 'number' },
    maxHeight: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: '내용을 입력하세요...',
    variant: 'default',
  },
  render: (args) => (
    <View style={{ width: 300 }}>
      <TextArea {...args} />
    </View>
  ),
};

export const Outlined: Story = {
  args: {
    placeholder: '내용을 입력하세요...',
    variant: 'outlined',
  },
  render: (args) => (
    <View style={{ width: 300 }}>
      <TextArea {...args} />
    </View>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: '비활성화된 입력',
    disabled: true,
    value: '수정할 수 없는 텍스트입니다.',
  },
  render: (args) => (
    <View style={{ width: 300 }}>
      <TextArea {...args} />
    </View>
  ),
};

export const FixedHeight: Story = {
  args: {
    placeholder: '고정 높이 텍스트 영역',
    autoGrow: false,
    minHeight: 150,
  },
  render: (args) => (
    <View style={{ width: 300 }}>
      <TextArea {...args} />
    </View>
  ),
};
