const Koa = require('koa')
const app = new Koa()

const handle = async (ctx, next) => {
    // 捕捉错误，如果出错，直接输出一个错误页面
    // 用 p 标签装内容  something error, you should concat adminster
    try {
        await next()
    } catch (error) {
        ctx.response.status = error.statusCode | error.status | 500;
        ctx.response.type = 'html'
        ctx.response.body = '<p href = "/">something error, you should concat adminster</p>'
        ctx.app.emit('error', error, ctx)
    }
}

const main = ctx => {
    ctx.throw(500)
}

app.on('error', function (err) {
    console.log(err);
    console.log('错误信息：', err.message);
})

app.use(handle)
app.use(main)
app.listen(3000)