import React, { useState } from 'react';

import { Slide } from '@package/motion';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { Button } from '../atoms/Button/Button.web';

const meta: Meta = { title: 'Motion/Presence' };
export default meta;

const SlidePresenceExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onPress={() => setVisible((current) => !current)}>
        전환
      </Button>
      <div style={{ minHeight: 72, paddingTop: 12 }}>
        <Slide
          visible={visible}
          from="bottom"
          duration={120}
          testID="slide-presence"
          sizing="intrinsic"
        >
          <div style={{ padding: 12, background: '#eef3ff', borderRadius: 8 }}>
            모션 콘텐츠
          </div>
        </Slide>
      </div>
    </div>
  );
};

export const ExitAndReverse: StoryObj = {
  render: () => <SlidePresenceExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('button', { name: '전환' });

    await userEvent.click(toggle);
    await canvas.findByTestId('slide-presence');
    await new Promise((resolve) => setTimeout(resolve, 150));
    await userEvent.click(toggle);
    await expect(canvas.getByTestId('slide-presence')).toBeInTheDocument();
    await waitFor(
      () => expect(canvas.queryByTestId('slide-presence')).not.toBeInTheDocument(),
      { timeout: 1000 },
    );

    await userEvent.click(toggle);
    await canvas.findByTestId('slide-presence');
    await new Promise((resolve) => setTimeout(resolve, 150));
    await userEvent.click(toggle);
    await new Promise((resolve) => setTimeout(resolve, 30));
    await userEvent.click(toggle);
    await new Promise((resolve) => setTimeout(resolve, 180));
    await expect(canvas.getByTestId('slide-presence')).toBeInTheDocument();
  },
};
