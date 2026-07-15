module.exports = {
  extends: 'expo',
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^@shared/'],
      },
    ],
  },
};
