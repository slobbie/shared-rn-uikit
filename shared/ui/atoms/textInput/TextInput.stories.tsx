import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';

import TextInput from './index';

const meta = {
  title: 'Atoms/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'underlined'],
      description: '입력창 시각 변형',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    value: {
      control: 'text',
      description: '입력 값 미리보기',
    },
  },
  args: {
    variant: 'default',
    placeholder: '이름을 입력해 주세요',
    disabled: false,
    value: '',
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const InputCanvas = ({ children }: { children: React.ReactNode }) => (
  <View style={{ width: 320 }}>{children}</View>
);

export const Default: Story = {
  render: (args) => (
    <InputCanvas>
      <TextInput {...args} />
    </InputCanvas>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <View style={{ gap: 12, width: 320 }}>
      <TextInput.Default {...args} placeholder='Default input' />
      <TextInput.Outlined {...args} placeholder='Outlined input' />
      <TextInput.Underlined {...args} placeholder='Underlined input' />
    </View>
  ),
};

export const WithValue: Story = {
  args: {
    value: 'Preview input value',
  },
  render: (args) => (
    <InputCanvas>
      <TextInput {...args} />
    </InputCanvas>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
    value: '수정할 수 없음',
  },
  render: (args) => (
    <InputCanvas>
      <TextInput {...args} />
    </InputCanvas>
  ),
};

export const CompactFormPreview: Story = {
  render: (args) => (
    <View style={{ gap: 12, width: 320 }}>
      <TextInput {...args} placeholder='이메일' keyboardType='email-address' />
      <TextInput.Outlined {...args} placeholder='비밀번호' secureTextEntry />
    </View>
  ),
};
