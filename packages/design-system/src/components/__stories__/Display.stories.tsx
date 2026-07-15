import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Avatar } from '../atoms/Avatar/Avatar.web';
import { Badge } from '../atoms/Badge/Badge.web';
import { Button } from '../atoms/Button/Button.web';
import { Chip } from '../atoms/Chip/Chip.web';
import { Divider } from '../atoms/Divider/Divider.web';
import { ProgressBar } from '../atoms/ProgressBar/ProgressBar.web';
import { Skeleton } from '../atoms/Skeleton/Skeleton.web';
import { Spacer } from '../atoms/Spacer/Spacer.web';
import { Typo } from '../atoms/Typo/Typo.web';

const meta: Meta = { title: 'Components/Display' };
export default meta;

export const Typos: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Typo variant="h1">Heading 1</Typo>
      <Typo variant="h2">Heading 2</Typo>
      <Typo variant="h3">Heading 3</Typo>
      <Typo variant="subtitle">Subtitle</Typo>
      <Typo variant="body">Body — 본문 텍스트</Typo>
      <Typo variant="caption" color="secondary">
        Caption — 보조 설명
      </Typo>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { level: 1 })).toHaveTextContent('Heading 1');
    await expect(canvas.getByRole('heading', { level: 3 })).toHaveTextContent('Heading 3');
  },
};

export const Avatars: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar size="sm" name="김하늘" />
      <Avatar size="md" name="김하늘" />
      <Avatar size="lg" name="Haneul Kim" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // 한글 → 첫 글자, 라틴 두 단어 → 첫 글자 조합 대문자
    await expect(canvas.getAllByText('김')).toHaveLength(2);
    await expect(canvas.getByText('HK')).toBeInTheDocument();
  },
};

export const Badges: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge label="PRO" variant="primary" />
      <Badge label="NEW" variant="success" />
      <Badge label="에러" variant="error" />
      <Badge label="기본" variant="neutral" />
    </div>
  ),
};

const ChipExample = () => {
  const [selected, setSelected] = useState(['React']);
  const toggle = (label: string) =>
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label],
    );
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {['디자인 시스템', 'React', 'TypeScript'].map((label) => (
        <Chip
          key={label}
          label={label}
          selected={selected.includes(label)}
          onPress={() => toggle(label)}
        />
      ))}
    </div>
  );
};

export const Chips: StoryObj = {
  render: () => <ChipExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByRole('button', { name: 'TypeScript' });
    await expect(chip).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(chip);
    await expect(chip).toHaveAttribute('aria-pressed', 'true');
  },
};

export const Dividers: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <Typo variant="body">위 콘텐츠</Typo>
      <Divider spacing={16} />
      <Typo variant="body">아래 콘텐츠</Typo>
    </div>
  ),
};

export const Skeletons: StoryObj = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', maxWidth: 320 }}>
      <Skeleton circle height={44} />
      <div style={{ flex: 1 }}>
        <Skeleton width="60%" height={16} />
        <Spacer size={8} />
        <Skeleton height={16} />
      </div>
    </div>
  ),
};

const ProgressExample = () => {
  const [value, setValue] = useState(30);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      <ProgressBar value={value} accessibilityLabel="진행률" />
      <div>
        <Button size="sm" onPress={() => setValue((v) => (v >= 100 ? 0 : v + 10))}>
          +10%
        </Button>
      </div>
    </div>
  );
};

export const ProgressBars: StoryObj = {
  render: () => <ProgressExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const bar = canvas.getByRole('progressbar');
    await expect(bar).toHaveAttribute('aria-valuenow', '30');
    await userEvent.click(canvas.getByRole('button', { name: '+10%' }));
    await expect(bar).toHaveAttribute('aria-valuenow', '40');
  },
};
