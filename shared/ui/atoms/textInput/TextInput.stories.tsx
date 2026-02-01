import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TextInput from './index';
import { IBaseInputProps } from './textInput.interface';

const meta = {
  title: 'Atoms/TextInput',
  component: TextInput,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'underlined'],
      description: '입력창 스타일 변형',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
  },
  args: {
    variant: 'default',
    placeholder: 'Enter text...',
    disabled: false,
  },
} satisfies Meta<IBaseInputProps>;

export default meta;
type Story = StoryObj<IBaseInputProps>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Underlined: Story = {
  args: {
    variant: 'underlined',
  },
};
