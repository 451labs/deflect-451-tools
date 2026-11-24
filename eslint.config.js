import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  {
    files: ['src/**/*.js', 'vite.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      semi: ['warn', 'always'],
      quotes: ['warn', 'single'],
      'space-before-function-paren': ['warn', 'always'],
      'no-console': 'off',
      'object-curly-spacing': ['warn', 'always'],
      'no-unused-vars': ['warn', { args: 'none' }],
      'no-debugger': 'off',
    },
  },
];
