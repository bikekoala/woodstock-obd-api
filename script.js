import '@babel/register'
import './src/utils/loadEnv.js'
import log from './src/utils/log.js'
import fsname from './src/utils/fsname.js'

/***
 * 手动脚本的入口
 *
 * 例如: node script.js task/execute.js
 * */
async function main() {
  const argv = process.argv.slice(3)
  log.info(`script:${process.argv[2]} argv:${argv} env:${process.env.RUNTIME_ENV}`)

  log.info('开始')
  const file = fsname.dir(import.meta.url, 'src/scripts') + '/' + process.argv[2]
  const script = await import(file)
  await script.default(...argv)
  log.info('结束')
}

main()
  .catch(e => log.error(e))
  .finally(() => process.exit())
