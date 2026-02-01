module.exports = function (api) {
  api.cache(true);

  const isStorybook = process.env.STORYBOOK === 'true';

  if (isStorybook) {
    return {
      presets: [
        ['@babel/preset-env', { targets: { browsers: ['last 2 versions'] } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
      ],
      plugins: [
        'babel-plugin-react-native-web',
        [
          'module-resolver',
          {
            root: ['.'],
            alias: {
              '@shared': './shared',
            },
          },
        ],
      ],
    };
  }

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@shared': './shared',
          },
        },
      ],
    ],
  };
};
