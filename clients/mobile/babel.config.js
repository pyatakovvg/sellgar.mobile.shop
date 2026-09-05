const typescriptPlugins = (isTSX) => [
  'babel-plugin-transform-typescript-metadata',
  ['@babel/plugin-transform-typescript', { allowDeclareFields: true, isTSX }],
  ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
];

module.exports = {
  presets: ['module:@react-native/babel-preset'],
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
  plugins: ['react-native-reanimated/plugin'],
};
