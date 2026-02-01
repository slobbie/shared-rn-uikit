import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, Text } from 'react-native';

import Container from '@shared/ui/layout/container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    centered: { control: 'boolean' },
    padding: { control: 'number' },
    paddingHorizontal: { control: 'number' },
    paddingVertical: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

const ContentBox = ({ label }: { label: string }) => (
  <View style={{ backgroundColor: '#E5E7EB', padding: 20, borderRadius: 8 }}>
    <Text style={{ color: '#374151', textAlign: 'center' }}>{label}</Text>
  </View>
);

export const Default: Story = {
  args: {
    size: 'full',
    paddingHorizontal: 16,
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Full Width Container" />
    </Container>
  ),
};

export const Small: Story = {
  args: {
    size: 'sm',
    centered: true,
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Small Container (540px)" />
    </Container>
  ),
};

export const Medium: Story = {
  args: {
    size: 'md',
    centered: true,
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Medium Container (720px)" />
    </Container>
  ),
};

export const Large: Story = {
  args: {
    size: 'lg',
    centered: true,
  },
  render: (args) => (
    <Container {...args}>
      <ContentBox label="Large Container (960px)" />
    </Container>
  ),
};

export const WithPadding: Story = {
  args: {
    size: 'md',
    centered: true,
    padding: 24,
  },
  render: (args) => (
    <Container {...args} style={{ backgroundColor: '#F3F4F6' }}>
      <ContentBox label="Container with 24px padding" />
    </Container>
  ),
};
