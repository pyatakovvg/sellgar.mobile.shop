const path = require('path');

const typescriptPlugins = (isTSX) => [
  'babel-plugin-transform-typescript-metadata',
  ['@babel/plugin-transform-typescript', { allowDeclareFields: true, isTSX }],
  ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
];

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        allowUndefined: true,
        moduleName: '@config/env',
        path: path.resolve(__dirname, '.env'),
        safe: false,
      },
    ],
    'react-native-reanimated/plugin',
  ],
  overrides: [
    {
      test: /\.ts$/,
      plugins: typescriptPlugins(false),
    },
    {
      test: /\.tsx$/,
      plugins: typescriptPlugins(true),
    },
  ],
};
