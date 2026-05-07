import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwind from 'eslint-plugin-tailwindcss';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...tailwind.configs['flat/recommended'],
  prettier,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      tailwindcss: {
        callees: ['cn'],
        whitelist: ['animate-blink', 'animate-typein'],
      },
    },
    rules: {
      quotes: [1, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'no-console': 'warn',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/self-closing-comp': 'warn',
      'prefer-const': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\u0000'],
            ['^node:'],
            ['^react', '^next', '^@?\\w'],
            ['^@/'],
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
      ],
      'tailwindcss/no-contradicting-classname': 'error',
      'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    },
  },
]);

export default eslintConfig;
