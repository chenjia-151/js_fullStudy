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

// app.use((ctx) => {
//     //   console.log(ctx.req.url);
//     //   console.log(ctx.request.req.url);
//     //   console.log(ctx.response.req.url);
//     //   console.log(ctx.request.url);
//     //   console.log(ctx.request.path);
//     //   console.log(ctx.url);
//     //   console.log(ctx.path);

//     ctx.body = 'hello world'
//     console.log(ctx.body);
// })

app.use((ctx, next) => {
    console.log(1);
    next()
    console.log(2);
})
app.use((ctx, next) => {
    console.log(3);
    next()
    console.log(4);
})
app.use((ctx, next) => {
    console.log(5);
    next()
    console.log(6);
})

app.listen(3001)