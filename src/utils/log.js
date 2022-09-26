import ls from 'log-symbols'
import moment from 'moment'

function time() {
  const str = moment().format('HH:mm:ss')
  return '[' + str + ']'
}

/**
 * 日志格式化
 */
export default {
  info(...args) {
    console.log(ls.info, time(), ...args)
  },

  success(...args) {
    console.log(ls.success, time(), ...args)
  },

  warning(...args) {
    console.warn(ls.warning, time(), ...args)
  },

  error(...args) {
    console.error(ls.error, time(), ...args)
  }
}
