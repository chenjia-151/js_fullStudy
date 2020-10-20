// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('hello world')
// })

// server.listen(3000)




// const Koa = require('koa')
// const app = new Koa()

// // ctx 相当于 req 和 res 结合
// app.use((ctx, next) => {

//     ctx.body = 'hello'
// })

// app.listen(3000)




let Koa = require('./lib/application')
let app = new Koa()

app.use((req, res) => {
    res.end('hello world')
})

app.listen(3000)