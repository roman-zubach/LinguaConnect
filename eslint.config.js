import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactNative from 'eslint-plugin-react-native';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettier,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        ignores: ['node_modules/**', 'dist/**', 'build/**'],
        plugins: {
            react,
            'react-hooks': reactHooks,
            import: importPlugin,
            'react-native': reactNative,
            prettier: prettierPlugin,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 2023,
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        settings: {
            react: { version: 'detect' },
            'import/resolver': {
                alias: {
                    map: [
                        ['@', './'],
                        ['~', './app'],
                    ],
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
                },
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
                },
            },
        },
        rules: {
            'no-console': 'error',
            'no-unreachable': 'error',
            'spaced-comment': 'error',
            'no-undef': 'warn',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['warn'],
            'no-use-before-define': 'off',

            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            'import/no-unresolved': 'error',
            'import/named': 'error',
            'import/default': 'off',
            'import/namespace': 'off',
            'import/no-duplicates': 'error',
            'import/no-cycle': 'warn',
            'import/no-self-import': 'error',
            'import/no-relative-packages': 'warn',
            'import/first': 'error',
            'import/newline-after-import': ['error', { count: 1 }],
            'import/no-named-as-default': 'off',
            'import/no-named-as-default-member': 'off',
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        ['parent', 'sibling', 'index'],
                        'object',
                        'type',
                        'unknown',
                    ],
                    pathGroups: [
                        { pattern: 'react', group: 'external', position: 'before' },
                        { pattern: 'react-native', group: 'external', position: 'before' },
                        { pattern: '@/**', group: 'internal', position: 'before' },
                        { pattern: '~/**', group: 'internal', position: 'before' },
                        {
                            pattern: '{./,**}/+(components|hooks|screens|utils|services){*,/**}',
                            group: 'internal',
                            position: 'before',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['react'],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                    warnOnUnassignedImports: true,
                },
            ],

            'react-native/no-inline-styles': 'off',
            'react-native/no-unused-styles': 'error',
            'react-native/split-platform-components': 'warn',

            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    trailingComma: 'all',
                    semi: true,
                    tabWidth: 4,
                    printWidth: 100,
                    bracketSpacing: true,
                    arrowParens: 'avoid',
                    endOfLine: 'auto',
                },
            ],

            'arrow-body-style': 'error',
            'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        },
    },
];
