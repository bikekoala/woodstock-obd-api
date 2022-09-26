import { config } from 'dotenv'
import fsname from './fsname.js'

/**
 * 加载配置
 */
function loadEnv() {
  const env = process.env.RUNTIME_ENV || 'prod'
  const ret = config({
    path: fsname.dir(import.meta.url, '../../') + '/.env.' + env
  })

  for (let key in ret.parsed) {
    process.env[key]= ret.parsed[key]
  }

  process.env.RUNTIME_ENV = env
}

loadEnv()

export default {}
