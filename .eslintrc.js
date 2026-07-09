// eslint 配置文件遵循CommonJS的导出规则， 所导出的对象就是Eslint的配置对象
module.exports = {
  // 表示当前目录为根目录，eslint规则将被限制到该目录下
  root: true,
  // env 表示启用Eslint检测
  env: {
    // 在 node 环境下启动ESLint检测
    node: true
  },
  // Eslint 中基础配置需要继承的配置
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  // 解析器选项
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // 需要修改的启用规则及其各自的错误级别
  /*
    错误级别分为三种：
      "off" 或 0：表示关闭规则
      "warn" 或 1：表示开启规则，使用警告级别的错误：warn(不会导致程序退出)
      "error" 或 2：表示开启规则，使用错误级别的错误：error(当被触发的时候，会导致程序退出)
  
  */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //'quotes': 'off',  // 'warn' // 修改为警告  'off'  // 关闭规则
    'space-before-function-paren': 'off'
  }
}
