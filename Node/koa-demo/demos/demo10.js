const fs = require('fs').promises
const Koa = require('koa')
const app = new Koa()

// 中间件
const main = async function (ctx) {   //在函数体中加上一个 async 将函数强行声明成一个异步函数
    ctx.response.type = 'html'
    ctx.response.body = await fs.readFile('./template.html','utf-8')
}

app.use(main)
app.listen(3000)