const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const log = require('./utils/log4js')
const cors = require('koa2-cors')

// error handler
onerror(app)

app.use(cors());

// middlewares
app.use(bodyParser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public/dist'))
// app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

const chart = require('./routes/chart')
const user = require('./routes/user')
const login = require('./routes/login')
const message = require('./routes/message')
const api = require('./routes/api')

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  log.info(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(chart.routes(), chart.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(login.routes(), login.allowedMethods())
app.use(message.routes(), message.allowedMethods())
app.use(api.routes(), api.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app