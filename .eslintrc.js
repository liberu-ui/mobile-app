smodule.exports = {
    root: true,
    extends: [
        'airbnb-base',
        'plugin:vue/vue3-recommended',
    ],
    plugins: [
        'vue',
    ],
    globals: {
        axios: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 2017,
        allowImportExportEverywhere: true,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'arrow-parens': ['error', 'as-needed'],
        'vue/html-indent': 0,
        'vue/attributes-order': 0,
        'no-plusplus': 0,
        'no-param-reassign': 0,
        'no-mixed-operators': 0,
        'no-underscore-dangle': 0,
        'func-names': 0,
        'no-shadow': 0,
        'vue/multi-word-component-names': 0,
        'vue/max-attributes-per-line': 0,
        'vue/first-attribute-linebreak': 0,
        'no-return-assign': ['error', 'except-parens'],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never',
        }],
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'never',
        }],
    },
};
