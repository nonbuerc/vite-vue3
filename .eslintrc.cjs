/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // 'prettier/prettier': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-mutating-props': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    // 禁用 console
    'no-console': 'off',
    // 禁用 debugger
    'no-debugger': 'off',
    // 禁止出现未使用过的变量
    'no-unused-vars': [1, { vars: 'all', args: 'all' /**"after-used" */ }],
    // 强制使用一致的单引号
    quotes: ['error', 'single'],
    // 控制行尾部分号
    semi: ['error', 'never']
  }
}
