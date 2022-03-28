module.exports = {
  env: {
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-unused-vars': 0,
    'no-shadow': 0,
    'no-console': 1,
    'react/prop-types': 0,
    '@typescript-eslint/no-unused-vars': [1, {ignoreRestSiblings: true}],
    '@typescript-eslint/no-shadow': [2],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': [
      'error',
      {allow: ['arrowFunctions']},
    ],
  },
};
