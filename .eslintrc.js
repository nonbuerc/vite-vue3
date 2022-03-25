module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
        'plugin:prettier/recommended' // 添加 prettier 插件
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        'vue/no-multiple-template-root': 'off', // 关闭多根节点的校验
        'no-console': ['none']
    }
}
