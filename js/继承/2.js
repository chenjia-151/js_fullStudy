function Person() { }  // prototype   ==> new Function() 

var p1 = new Person()

// console.log(p1.constructor);  // [Function: Person]/
Person.prototype = {
    name: '小花',
    constructor: Person
}

// 数据劫持
Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
})

var p2 = new Person()
console.log(p2.constructor);  // [Function: Object]