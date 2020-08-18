// 引入依赖  commonJS  遵从的规矩不一样，不能使用 import 进行引入，只能使用require
const Koa = require('koa')

const app = new Koa()  // 定义一个新的 koa实例

//  调用监听方法  第一个参数是电脑的端口3000，第二个参数就是回调函数
app.listen(3000,() =>{
    console.log('项目启动ing');
})