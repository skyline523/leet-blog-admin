module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  rules: {
    'vue/multi-word-component-names': 0 // 关闭单单词组件报错
  }
}
