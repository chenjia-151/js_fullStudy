const Koa = require('koa')
const app = new Koa()
const route = require('koa-route')

const main = ctx => {
    ctx.response.body = 'Hello World'
}

const redirect = ctx => {
    ctx.response.redirect('/')
    ctx.response.body = '<a href="/">Index Page</a>'
}

app.use(route.get('./', main))
app.use(route.get('/redirect', redirect))
app.use(main)
app.listen(3000)