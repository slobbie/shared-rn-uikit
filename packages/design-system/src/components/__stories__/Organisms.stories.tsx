import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { ProfileHeader } from '../organisms/ProfileHeader/ProfileHeader.web';
import { SettingRow } from '../organisms/SettingRow/SettingRow.web';

const meta: Meta = { title: 'Components/Organisms' };
export default meta;

const SettingRowExample = () => {
  const [push, setPush] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
      <SettingRow
        title="푸시 알림"
        description="새 소식을 푸시로 받아요"
        value={push}
        onChange={setPush}
      />
      <SettingRow title="비활성 항목" value onChange={() => {}} disabled />
    </div>
  );
};

export const SettingRows: StoryObj = {
  render: () => <SettingRowExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const sw = canvas.getByRole('switch', { name: '푸시 알림' });
    await expect(sw).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(sw);
    await expect(sw).toHaveAttribute('aria-checked', 'true');
    await expect(canvas.getByRole('switch', { name: '비활성 항목' })).toBeDisabled();
  },
};

export const ProfileHeaders: StoryObj = {
  render: () => (
    <ProfileHeader name="김하늘" email="haneul.kim@example.com" badgeLabel="PRO" />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { level: 3 })).toHaveTextContent('김하늘');
    await expect(canvas.getByText('PRO')).toBeInTheDocument();
    await expect(canvas.getByText('김')).toBeInTheDocument(); // Avatar 이니셜
  },
};
