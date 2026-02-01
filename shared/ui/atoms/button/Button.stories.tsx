import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Typo from '../typo';
import { IBaseButtonProps } from './button.interface';
import Button from './index';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'disabled'],
      description: '버튼의 색상 테마를 결정합니다.',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태 여부',
    },
    radius: {
      control: { type: 'number', min: 0, max: 50 },
      description: '버튼의 모서리 둥글기',
    },
    debounceDelay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: '연속 클릭 방지 지연 시간 (ms)',
    },
    variant: {
      control: 'select',
      options: ['static', 'opacity', 'highlight'],
      description: '버튼의 클릭 애니메이션 타입',
    },
  },
  args: {
    color: 'primary',
    disabled: false,
    radius: 8,
    debounceDelay: 300,
    variant: 'opacity',
    children: React.createElement(Typo.Button, null, 'Button Text'),
  },
} satisfies Meta<IBaseButtonProps>;

export default meta;
type Story = StoryObj<IBaseButtonProps>;

export const Opacity: Story = {
  args: {
    variant: 'opacity',
  },
};

export const Highlight: Story = {
  args: {
    variant: 'highlight',
  },
};

export const Static: Story = {
  args: {
    variant: 'static',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
