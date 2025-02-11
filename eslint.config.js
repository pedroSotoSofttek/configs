import js from '@eslint/js';
import lwc from '@lwc/eslint-plugin-lwc';
import babelParser from '@babel/eslint-parser';
import html from 'eslint-plugin-html';

export default [
        //...js.configs.recommended,
    {
        files: ['**/aura/**/*.js', '**/aura/**/*.html', '**/lwc/**/*.js', '**/lwc/**/*.html'],
        ignores: ['node_modules/**'],
        plugins: {
            html,
            lwc
        },
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                requireConfigFile: false,
                babelOptions: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        ['@babel/plugin-proposal-decorators', { legacy: true }]
                    ]
                },
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            "eqeqeq": ["error","always"],
            "semi": ["error","never"],
            'indent': ['error', 4],
            'lwc/no-deprecated': 'error',
            "lwc/no-async-await": "off",
            "lwc/no-rest-parameter": "off",
            'lwc/valid-api': 'error',
            'lwc/no-document-query': 'error'
        },
    },
];
