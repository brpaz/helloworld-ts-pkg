/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  extends: ['eslint:recommended', 'prettier'],
  env: {
    browser: true,
    node: true,
    es2021: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  rules: {},
};

module.exports = config;
