module.exports = {
  env: {
    node: true,
    browser: false,
    es2021: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', 'always', { js: 'always' }],
    'import/no-unresolved': 'off',
    'no-console': 'warn',
    'max-len': ['error', { code: 120 }],
  },
};
