const Koa = require('koa')
const app = new Koa()
const router = require('koa-route')

const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href = "/">About</a>'
}

const mine = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href = "/">你好</a>'
}

const main = ctx => {
    // if (ctx.request.url == '/about') {
    //     ctx.response.type = 'html'
    //     ctx.response.body = '<a href = "/">About</a>'
    // } else {
    //     ctx.response.body = "Hello World"
    // }
    ctx.response.body = "Hello World"
}

app.use(router.get('/about', about))   // 获取客户端请求的路径
app.use(router.get('/', main))
app.use(router.get('/mine', mine))


// app.use(main)
app.listen(3000, () => {

})