import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Radio from '@shared/ui/atoms/radio';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    selected: false,
    label: '라디오 옵션',
    size: 'medium',
    disabled: false,
  },
};

export const Group: Story = {
  args: {
    value: 'option1',
    options: [
      { value: 'option1', label: '옵션 1' },
      { value: 'option2', label: '옵션 2' },
      { value: 'option3', label: '옵션 3' },
    ],
  } as any,
  render: (args: any) => <Radio.Group {...args} />,
};

export const HorizontalGroup: Story = {
  render: () => {
    const [value, setValue] = useState('a');
    return (
      <Radio.Group
        value={value}
        onValueChange={setValue}
        direction='horizontal'
        options={[
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' },
          { value: 'c', label: 'C' },
        ]}
      />
    );
  },
};

export const CustomColor: Story = {
  render: () => {
    const [value, setValue] = useState('red');
    return (
      <Radio.Group
        value={value}
        onValueChange={setValue}
        color='#FF3B30'
        options={[
          { value: 'red', label: 'Red' },
          { value: 'green', label: 'Green' },
          { value: 'blue', label: 'Blue' },
        ]}
      />
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <Radio.Group
        value={value}
        onValueChange={setValue}
        options={[
          { value: 'option1', label: '사용 가능' },
          { value: 'option2', label: '비활성화됨', disabled: true },
          { value: 'option3', label: '사용 가능' },
        ]}
      />
    );
  },
};
