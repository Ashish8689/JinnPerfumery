import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
        './src/assets/**',
    ]),
    {
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                browser: true,
                es2020: true,
                node: true,
                jest: true,
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            '@typescript-eslint': typescriptPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            // ESLint rules
            // Require a whitespace at the beginning of a comment
            'spaced-comment': ['error', 'always'],

            // Maximum line length for comments except trailing comments
            'max-len': [
                'error',
                {
                    comments: 100,
                    code: 200, // Set to not conflict with Prettier
                    ignoreTrailingComments: true,
                    ignoreTemplateLiterals: true,
                },
            ],

            // Require braces around blocks
            curly: ['error', 'all'],

            // Require parentheses around arrow function arguments
            'arrow-parens': ['error', 'always'],

            // Require blank line before certain statements
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: '*', next: 'function' },
                { blankLine: 'always', prev: '*', next: 'class' },
                { blankLine: 'always', prev: '*', next: 'export' },
                // Ignore consecutive export statements
                { blankLine: 'any', prev: 'export', next: 'export' },
                { blankLine: 'always', prev: '*', next: 'return' },
                { blankLine: 'always', prev: '*', next: 'break' },
                { blankLine: 'always', prev: '*', next: 'continue' },
                { blankLine: 'always', prev: '*', next: 'throw' },
            ],

            // eslint-plugin-react rules
            // Require props to be sorted
            'react/jsx-sort-props': [
                'error',
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                },
            ],

            // Omit boolean prop value when set to true
            'react/jsx-boolean-value': ['error', 'never'],

            // Require self closing tags in JSX/HTML
            'react/self-closing-comp': [
                'error',
                {
                    component: true,
                    html: true,
                },
            ],

            // Require PascalCase for user-defined JSX components
            'react/jsx-pascal-case': ['error'],

            // Disallow unnecessary curly braces in JSX
            'react/jsx-curly-brace-presence': ['error', 'never'],

            // React in jsx scope
            'react/react-in-jsx-scope': 'off',

            // eslint-plugin-react-hooks rules
            // Enforce rules of hooks
            'react-hooks/rules-of-hooks': 'error',

            // @typescript-eslint rules
            // Require explicit return type on functions and class methods
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                },
            ],
        },
    },
])

export default eslintConfig
