// Storybook(react-native-web) 빌드 전용 babel 설정.
// 앱(consumer)은 각자의 babel/vite 설정으로 이 패키지의 소스를 직접 transpile한다.
module.exports = {
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
          '@shared': './src',
        },
      },
    ],
  ],
};
