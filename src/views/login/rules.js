export const validatePassword = () => {
  return (rule, value, callback) => {
    console.log('value.length', value)
    // 添加空值检查
    if (!value || value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
