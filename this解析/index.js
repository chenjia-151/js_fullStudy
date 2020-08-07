// function identify(context){
//     return context.toUpperCase()  //小写转大写
// }

// function speak(context){
//     let greeting = "Hello, I am" + identify(context)
//     console.log(greeting);
// }

// speak('me')


// function identify(){
//     return this.name.toUpperCase()  //小写转大写
// }

// function speak(){
//     let greeting = "Hello, I am" + identify.call(this)
//     console.log(greeting);
// }

// let me = {
//     name:'wn'
// }
// let you = {
//     name: 'abc'
// }

// speak.call(you)


//  this 所处的词法作用域在哪里生效了，this作用域 就指向哪里
// function foo(){
//     let person = {
//         name:'wn',
//         age: '18'
//     }
//     console.log(this);  // window
// }

// function bar(){
//     let person = {
//         name:'蜗牛',
//         age: '20'
//     }
//     foo()
// }
// bar()

// function foo(){
//     // 'use strict'
//     console.log(this.a);  // this 的作用域在全局
// }
// var a = 2;
// (function(){
//     "use strict"
//     foo()  // 严格模式下的foo调用与位置无关
// })()
// foo()  // foo() 在全局生效



// function foo(){
//     console.log(this.a);  // obj.a
// }

// var obj2 = {
//     a: 3,
//     foo: foo
// }
// var obj1 = {
//     a: 2,
//     obj2: obj2  // 函数引用
// }

// obj1.obj2.foo()  // foo此刻被obj所拥有、包含


// function foo(){
//     console.log(this.a);
// }
// // function doFoo(fn){  // 参数传递其实又称之为隐式赋值
// //     fn()
// // }
// var obj = {
//     a:2,
//     foo:foo
// }
// var bar = obj.foo;
// var a = 'hello'
// // doFoo(obj.foo)
// bar()


function foo(){
    console.log(this.a);
}
var obj = {
    a:2,
    foo: foo
}
var bar = obj.foo()
console.log(bar);
