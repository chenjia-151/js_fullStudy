const Koa = require('koa')
const app = new Koa()

const logger = (ctx, next) => {
    console.log(`${ctx.request.url}-${ctx.request.method}-${Date.now()}`);
    next()
}

const main = (ctx, next) => {
    ctx.response.body = 'Hello World'
    next()
}

const mine = ctx => {
    ctx.response.body = '你好'
}

app.use(logger)
app.use(main)
app.use(mine)
app.listen(3000)