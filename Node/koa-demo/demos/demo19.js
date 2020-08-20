const Koa = require('koa')
const app = new Koa()

// 当页面停留在某个页面超过多长时间的时候，页面会失效
const main = ctx => {
    const n = Number(ctx.cookies.get('view') || 0) + 1
    ctx.cookies.set('view', n)
    ctx.response.body = n + 'view' 
}

app.use(main)
app.listen(3000)