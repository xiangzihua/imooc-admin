import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.js'
import * as icons from '@element-plus/icons-vue'

export default (app) => {
  app.use(ElementPlus, { locale: zhCn })

  // 全局注册所有图标
  Object.keys(icons).forEach((key) => {
    app.component(key, icons[key])
  })
}
