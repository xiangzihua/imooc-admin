/**
 * 判断是否为外部资源
 */

export function isExternal(path) {
  // 逐个给我解释下这个正则
  return /^(https?:|mailto:|tel:)/.test(path)
}
