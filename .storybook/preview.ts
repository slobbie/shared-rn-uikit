import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../shared/utils/lib/ThemeContext';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Docs', 'Foundations', 'Atoms', 'Molecules', 'Layout', 'Utils'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) =>
      React.createElement(ThemeProvider, {
        children: React.createElement(Story),
      }),
  ],
};

export default preview;
