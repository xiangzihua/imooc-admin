import axiso from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from '@/utils/auth'

const service = axiso.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  config.headers.icode = 'helloqianduanxunlianying'

  // 在这个位置需要统一的去注入token
  if (store.getters.token) {
    if (isCheckTimeout()) {
      // 登出操作
      store.dispatch('user/logout')
      return Promise.reject(new Error('token 失效'))
    }

    // 如果token存在  注入token
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
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
    // TODO: 处理token超时问题
    if (
      error.response &&
      error.response.data &&
      error.response.data.code === 401
    ) {
      // token超时: 将来处理单用户登录 增加一个状态码判断
      store.dispatch('user/logout')
    }

    // TODO:
    ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)

export default service
