// 数组的解构

// 从数组中按照顺序提取值 匹配模式
// let [a,b,c] = [1,2,3]

// let [a, [[b], c]] = [1, [[2], 3]]
// console.log(b)

// let [, , third] = [1,2,3]
// console.log(third)

// let [x,y] = [1,2,3]
// console.log(x,y)

// let [head,...tail] = [1,2,3,4]
// console.log(...tail)

// let [a,b,...c] = ['hello']
// console.log(c)


// let [x,y = 'aaa'] = ['a', undefined] // undefined 结构赋值不成功的时候 取默认赋值
// let [x,y = 'aaa'] = ['a', null] // null 结构赋值成功 取赋值
// console.log(x,y)

// let [x=1,y=x] = [2,3] //x y 给的是默认值 当有赋值的时候 取赋值
// console.log(x,y)


// 对象的解构

// let {foo, bar} = {foo: 'aaa', bar: 'bbb'} 
// console.log(foo,bar)


// let obj = {
//     name : '张三',
//     age : 18
// }
// let {name, age} = abj

// let {foo:baz} = {foo:'aaa',bar:'bbb'}
//   foo 是匹配模式  baz 才是变量
// console.log(baz)

//  对象 数组 组合解构
// let obj = {
//     name : '张三',
//     desc:{
//         alone:false,
//         age:20,
//         sanwei:[50,100,120]
//     }
// }
// let {name, desc:{age, alone,sanwei:[x,y,z]}} = obj
// console.log(name,age,alone,x,y,z)

// let x
// ({x} = {x : 1})
// console.log(x)


//  字符串的解构

let [a,b,c,d,e] = 'hello'
// console.log(a,b,c,d,e)

// let {length:len} = 'hello'
// //  length 为匹配模式 不是变量
// console.log(len)

//  数值和布尔值的解构赋值

// let {toString : s} = 123
// console.log(s === Number.prototype.toString)
// let {toString : s} = true
// console.log(s === Boolean.prototype.toString)





