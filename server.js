import '@babel/register'
import './src/utils/loadEnv.js'
import Koa from 'koa'
import logger from 'koa-logger'
import router from './src/routes/default.js'
import log from './src/utils/log.js'

const app = new Koa()
app.on('error', e => log.error('[koa]', e))
app.use(logger())
app.use(router.routes(), router.allowedMethods())

app.proxy = true
app.listen(process.env.APP_PORT, '0.0.0.0')
log.success('Listening: ' + process.env.APP_PORT)
