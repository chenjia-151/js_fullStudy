const Koa = require('koa')
const app = new Koa()

// 500错误
const main = ctx =>{
    throw(500)
}

app.use(main)
app.listen(3000)