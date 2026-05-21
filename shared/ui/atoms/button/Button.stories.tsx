import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';

import Typo from '../typo';
import BaseButton from './BaseButton';

const meta = {
  title: 'Atoms/Button',
  component: BaseButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'disabled'],
      description: '버튼 색상 테마',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    radius: {
      control: { type: 'number', min: 0, max: 24, step: 2 },
      description: '버튼 모서리 반경',
    },
    debounceDelay: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: '연속 클릭 방지 지연 시간(ms)',
    },
    variant: {
      control: 'select',
      options: ['static', 'opacity', 'highlight'],
      description: '클릭 피드백 타입',
    },
  },
  args: {
    color: 'primary',
    disabled: false,
    radius: 8,
    debounceDelay: 300,
    variant: 'opacity',
    children: <Typo.Button>Button Text</Typo.Button>,
  },
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <View style={{ gap: 12, width: 220 }}>
      <BaseButton {...args} variant='static'>
        <Typo.Button>Static</Typo.Button>
      </BaseButton>
      <BaseButton {...args} variant='opacity'>
        <Typo.Button>Opacity</Typo.Button>
      </BaseButton>
      <BaseButton {...args} variant='highlight'>
        <Typo.Button>Highlight</Typo.Button>
      </BaseButton>
    </View>
  ),
};

export const ColorStates: Story = {
  render: (args) => (
    <View style={{ gap: 12, width: 220 }}>
      <BaseButton {...args} color='primary'>
        <Typo.Button>Primary</Typo.Button>
      </BaseButton>
      <BaseButton {...args} color='secondary'>
        <Typo.Button>Secondary</Typo.Button>
      </BaseButton>
      <BaseButton {...args} color='success'>
        <Typo.Button>Success</Typo.Button>
      </BaseButton>
      <BaseButton {...args} color='error'>
        <Typo.Button>Error</Typo.Button>
      </BaseButton>
    </View>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Typo.Button>Disabled Button</Typo.Button>,
  },
};

export const RadiusComparison: Story = {
  render: (args) => (
    <View style={{ gap: 12, width: 220 }}>
      <BaseButton {...args} radius={0}>
        <Typo.Button>Radius 0</Typo.Button>
      </BaseButton>
      <BaseButton {...args} radius={8}>
        <Typo.Button>Radius 8</Typo.Button>
      </BaseButton>
      <BaseButton {...args} radius={20}>
        <Typo.Button>Radius 20</Typo.Button>
      </BaseButton>
    </View>
  ),
};
