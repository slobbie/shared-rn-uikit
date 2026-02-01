import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View, Text } from 'react-native';

import Grid from '@shared/ui/layout/grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    columns: { control: { type: 'range', min: 1, max: 12, step: 1 } },
    gap: { control: 'number' },
    rowGap: { control: 'number' },
    columnGap: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const GridCell = ({ label, color = '#3B82F6' }: { label: string; color?: string }) => (
  <View style={{ backgroundColor: color, padding: 16, borderRadius: 8, alignItems: 'center' }}>
    <Text style={{ color: 'white', fontWeight: '600' }}>{label}</Text>
  </View>
);

export const Default: Story = {
  args: {
    columns: 12,
    gap: 8,
  },
  render: (args) => (
    <Grid {...args}>
      <Grid.Item span={4}><GridCell label="4" /></Grid.Item>
      <Grid.Item span={4}><GridCell label="4" /></Grid.Item>
      <Grid.Item span={4}><GridCell label="4" /></Grid.Item>
    </Grid>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <Grid columns={12} gap={12}>
      <Grid.Item span={6}><GridCell label="6" color="#10B981" /></Grid.Item>
      <Grid.Item span={6}><GridCell label="6" color="#10B981" /></Grid.Item>
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  render: () => (
    <Grid columns={12} gap={12}>
      <Grid.Item span={4}><GridCell label="4" color="#F59E0B" /></Grid.Item>
      <Grid.Item span={4}><GridCell label="4" color="#F59E0B" /></Grid.Item>
      <Grid.Item span={4}><GridCell label="4" color="#F59E0B" /></Grid.Item>
    </Grid>
  ),
};

export const MixedSpans: Story = {
  render: () => (
    <Grid columns={12} gap={12}>
      <Grid.Item span={8}><GridCell label="8" color="#8B5CF6" /></Grid.Item>
      <Grid.Item span={4}><GridCell label="4" color="#EC4899" /></Grid.Item>
      <Grid.Item span={3}><GridCell label="3" color="#06B6D4" /></Grid.Item>
      <Grid.Item span={6}><GridCell label="6" color="#84CC16" /></Grid.Item>
      <Grid.Item span={3}><GridCell label="3" color="#F97316" /></Grid.Item>
    </Grid>
  ),
};

export const ResponsiveGap: Story = {
  args: {
    columns: 4,
    rowGap: 16,
    columnGap: 8,
  },
  render: (args) => (
    <Grid {...args}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <Grid.Item key={i} span={1}>
          <GridCell label={`${i}`} color="#6366F1" />
        </Grid.Item>
      ))}
    </Grid>
  ),
};
