const Koa = require('koa')
const app = new Koa()
const path = require('path')
// const serve = require('koa-static')

const main = ctx =>{
    ctx.response.body = path.join(__dirname)   //  __dirname  文件的绝对路径
}

// const main = serve(path.join(__dirname))

app.use(main)
app.listen(3000)