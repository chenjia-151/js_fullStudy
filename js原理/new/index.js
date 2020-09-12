// function Person(name){
//     this.name = name
// }
// let p = new Person('Tom')


// // 1. p.__proto__ = ? ==>  Person.prototype  
// // 2. Person.__proto__ = ?  ==>  Function.prototype

// // 3. 
// var foo = {}
// var F = function(){}

// Object.prototype.a = 'value a'
// Function.prototype.b = 'value.b'

// console.log(foo.a);
// console.log(foo.b);
// console.log(F.a);
// console.log(F.b);



function Person(name, age) {
    this.name = name
    this.age = age
}
// let p = new Person('Tom')

// p = { name: 'Tom' }



// new 的实现原理
// function myNew(fun) {
//     return function () {
//         let obj = {
//             __proto__: fun.prototype  //让隐式原型指向显示原型
//         }
//         fun.call(obj, ...arguments)
//         return obj
//     }
// }
// let obj = myNew(Person)('fu',20)
// console.log(obj);

function myNew() {
    // 创建一个实力对象
    let obj = {}
    // 取到外部传进来的构造器
    let Constructor = Array.prototype.shift.call(arguments)   //  切割数组头部的元素
    // 实现继承，要实例可以访问构造器的属性
    obj.__proto__ = Constructor.prototype   //  让构造函数身上的属性可以让obj继承
    // 调用构造器，改变其this指向到实例
    let ret = Constructor.apply(obj, arguments)
    return typeof ret === 'object' && ret !== null ? ret : obj
}

const Test = function (name) {
    this.name = name
    // return {}
}
let newObj = myNew(Test, 'zhangsan')

console.log(newObj);