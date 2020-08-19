

// Person.prototype.lastName = ' Zhang'
// function Person(name) {
//     this.name = name
// }

// var person = new Person('zhangsan')

// console.log(person.lastName);

// 修改
// Person.prototype.lastName = 'Li'
// console.log(person.lastName);
// console.log(Person.prototype.lastName);

// 删除
// delete person.lastName
// console.log(person.lastName);









function Bus() {

}
Car.prototype = {
    constructor: Bus
}
// Car.prototype.name = 'abc'
function Car() {

}
var car = new Car()
// console.log(car.constructor);  //  constructor 构造器 ==> 构造函数Car(){}
// console.log(Car.prototype);
// constructor 为了让Car()构造出的所有的对象都能找到它自己的构造器

console.log(car.constructor);