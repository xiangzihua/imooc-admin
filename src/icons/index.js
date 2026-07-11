import SvgIcon from '@/components/SvgIcon'

// https://webpack.docschina.org/guides/dependency-management/#requirecontext
// 通过 require.context() 函数来创建自己的context
const svgRequire = require.context('./svg', false, /\.svg$/)
// 此时返回一个require的函数，可以接受一个requst的参数，用于require的导入
// 该函数提供三个属性，可以通过require.keys()获取到所有的svg图标
// 遍历图标，把图标作为request传入到require导入函数中，完成本地svg图标的导入
svgRequire.keys().forEach((svgIcon) => svgRequire(svgIcon))

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
