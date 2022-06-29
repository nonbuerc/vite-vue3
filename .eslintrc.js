module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["prettier"],

  extends: [
    "plugin:vue/vue3-recommended",
    "airbnb-base",
    "plugin:prettier/recommended", // 添加 prettier 插件
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "vue/no-multiple-template-root": "off", // 关闭多根节点的校验
    "no-console": ["none"],
  },
};
