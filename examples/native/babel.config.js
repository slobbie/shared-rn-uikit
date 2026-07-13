const path = require('path');

module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            // design-system 내부 소스가 사용하는 alias — 패키지 src로 매핑
            '@shared': path.resolve(
              __dirname,
              '../../packages/design-system/src',
            ),
          },
        },
      ],
    ],
  };
};
