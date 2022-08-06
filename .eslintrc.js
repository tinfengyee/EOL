/*
 * @Author: tinfengyee
 * @Date: 2022-08-06 19:40:47
 * @LastEditTime: 2022-08-06 19:41:35
 * @Description: NO Desc
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
