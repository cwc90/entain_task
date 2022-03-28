module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          _screens: './src/screens',
          _api: './src/api',
          _types: './src/types',
          _components: './src/components',
          _styles: './src/styles',
          _constants: './src/constants',
          _utils: './src/utils',
          '~': './src',
        },
      },
    ],
  ],
};
