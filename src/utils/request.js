import axiso from 'axios'
import { ElMessage } from 'element-plus'

const service = axiso.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  config.headers.icode = 'helloqianduanxunlianying'
  return config // 必须返回配置
})

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      // 业务错误
      ElMessage.error(message) // 提示错误信息
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // TODO: 将来处理token超时问题
    ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)

export default service
