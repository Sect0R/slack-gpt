module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        es6: true,
        node: true,
        mocha: true
    },
    globals: {
        ApiError: true,
        ApiSNS: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:node/recommended"
    ],
    parserOptions: {
        // Only ESLint 6.2.0 and later support ES2020.
        "ecmaVersion": 2020
    },
    rules: {
        "node/file-extension-in-import": ["error", "always"],
        "node/prefer-global/buffer": ["error", "always"],
        "node/prefer-global/console": ["error", "always"],
        "node/prefer-global/process": ["error", "always"],
        "node/prefer-global/url-search-params": ["error", "always"],
        "node/prefer-global/url": ["error", "always"],
        "node/prefer-promises/dns": "error",
        "node/prefer-promises/fs": "error",
        "node/no-unpublished-require": ["error", {
            "allowModules": ["supertest"]
        }],
        "node/no-process-exit": "error",

        "max-len": ["error", {"code": 150}],
        "no-shadow": ["off", {"builtinGlobals": false, "hoist": "never", "allow": []}],

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        'arrow-body-style': 0,
        "node/no-extraneous-require": 0,

        'no-confusing-arrow': [
            'error',
            {'allowParens': true}
        ],

        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 0,

        'object-curly-spacing': 0,
        'no-prototype-builtins': 0,

        'comma-dangle': 0,
        'radix': 0,
        'object-shorthand': 0,

        'no-trailing-spaces': 0,
        'spaced-comment': 0,
        'no-nested-ternary': 0,

        'no-async-promise-executor': 0,

        'func-names': 0,

        'semi': [
            'error',
            'always',
            {
                'omitLastInOneLineBlock': true
            }
        ],

        'no-bitwise': 0,
        'no-plusplus': 0,

        //  !!!! - disable in prod
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': ["error", { "varsIgnorePattern": "this\.password" }],
        'linebreak-style': 1,
        'curly': ['error'],
        'keyword-spacing': ['error'],
        'padding-line-between-statements': [
            'error',
            {blankLine: 'never', prev: ['function'], next: ['return']},
            {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
            {blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var']},
        ],
        'lines-between-class-members': ['error', 'always'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
        'padded-blocks': ['error', 'never'],
        'comma-spacing': ['error', {'before': false, 'after': true}],
        'space-before-blocks': ['error'],
        'space-before-function-paren': [
            'error', {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always',
            },
        ],
    }
};
