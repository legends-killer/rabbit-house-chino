module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/semi': [2, 'never'],
    '@typescript-eslint/no-empty-function': [1],
    '@typescript-eslint/no-unused-vars': [1, { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'no-bitwise': 0,
    'no-useless-concat': 0,
  },
}
