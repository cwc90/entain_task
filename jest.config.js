process.env.TZ = 'Australia/Brisbane';

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(js)$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '\\.(ts|tsx)$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    _pages: '<rootDir>/src/pages',
    _api: '<rootDir>/src/api',
    _types: '<rootDir>/src/types',
    _components: '<rootDir>/src/components',
    _styles: '<rootDir>/src/styles',
    _constants: '<rootDir>/src/constants',
    _utils: '<rootDir>/src/utils',
    '~': '<rootDir>/src',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
};
