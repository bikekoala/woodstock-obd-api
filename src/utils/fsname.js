import path from 'path'
import { fileURLToPath } from 'url'

function file(url) {
  return fileURLToPath(url)
}

function dir(url, resolve = '') {
  return path.resolve(path.dirname(file(url)) + '/' + resolve)
}

/**
 * module 模式下的路径名实现
 */
export default {
  file,
  dir
}
