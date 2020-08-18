// 引入依赖  commonJS  遵从的规矩不一样，不能使用 import 进行引入，只能使用require
const Koa = require('koa')

const app = new Koa()  // 定义一个新的 koa实例

// ctx.request.accepts 检查http请求的accept的内容的
// Accept属于请求头，代表客户端希望接受的数据类型，跟Content-Type类似
const main = ctx =>{
    if(ctx.request.accepts('xml')) {
        ctx.response.type = 'xml'
        ctx.response.body = '<data>Hello World</data>'
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<p>Hello World</p>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json'
        ctx.response.body = '{data: Hello World}'
    }else {
        ctx.response.type = 'text'
        ctx.response.body = 'Hello World'
    }
}
app.use(main)

//  调用监听方法  第一个参数是电脑的端口3000，第二个参数就是回调函数
app.listen(3000,() =>{
    console.log('项目启动ing');
})