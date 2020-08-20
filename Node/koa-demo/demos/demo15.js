const Koa = require('koa')
const app = new Koa()

// 404错误
const main = ctx => {
    ctx.response.status = 404   //  status 状态为404，就会提示报错
    ctx.response.body = "Page Not Found"
}

app.use(main)
app.listen(3000)