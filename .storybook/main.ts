import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../shared/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    {
      name: '@storybook/addon-react-native-web',
      options: {
        modulesToTranspile: [
          'react-native-reanimated',
          'react-native-gesture-handler',
          'react-native-vector-icons',
        ],
        babelPlugins: ['react-native-reanimated/plugin'],
      },
    },
  ],
  framework: '@storybook/react-webpack5',
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@shared': path.resolve(__dirname, '../shared'),
      };
      config.resolve.extensions = [
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.json',
        ...(config.resolve.extensions || []),
      ];
    }

    // Babel Loader 설정 최적화
    if (config.module?.rules) {
      // 기존 babel-loader 규칙 제거 (addon-react-native-web과 충돌 방지)
      config.module.rules = config.module.rules.filter((rule) => {
        if (
          typeof rule === 'object' &&
          rule?.loader &&
          typeof rule.loader === 'string'
        ) {
          return !rule.loader.includes('babel-loader');
        }
        return true;
      });

      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        exclude:
          /node_modules\/(?!(react-native-reanimated|react-native-gesture-handler)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                { targets: { browsers: ['last 2 versions'] } },
              ],
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
            plugins: [
              'babel-plugin-react-native-web',
              'react-native-reanimated/plugin',
            ],
          },
        },
      });
    }

    return config;
  },
};
export default config;
