import eslintPluginAstro from 'eslint-plugin-astro';
import jsdoc from 'eslint-plugin-jsdoc';
import md from 'eslint-plugin-markdown';
import * as mdx from 'eslint-plugin-mdx';

export default [
  ...eslintPluginAstro.configs.recommended,
  ...md.configs.recommended,
  {
    plugins: {
      jsdoc,
    },
    files: [
      '**/*.js',
      '**/*.jsx',
      '**/*.mjs',
      '**/*.cjs',
      '**/*.ts',
      '**/*.tsx',
      '**/*.astro',
    ],
    rules: {
      semi: 'error',
      quotes: ['error', 'single'],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'no-constant-condition': 'error',
      'no-multiple-empty-lines': 'error',
      'no-extra-semi': 'error',
      'no-extra-parens': 'warn',
      'no-extra-boolean-cast': 'error',
      'no-extra-label': 'error',
      'no-extra-bind': 'error',
    },
  },
  {
    ...mdx.flat,
    // optional, if you want to lint code blocks at the same
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
      // optional, if you want to disable language mapper, set it to `false`
      // if you want to override the default language mapper inside, you can provide your own
      languageMapper: {},
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
      // if you want to override some rules for code blocks
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
];
