
/** 
 
Person.prototype.name = 'wn'
function Person() {
    // var this = {
    //     __proto__: Person.prototype
    // }
}
var person = new Person()
// console.log(person.name);

var obj = {
    name: '蜗牛'
}

console.log(person.__proto__);
person.__proto__ = obj
console.log(person.__proto__);

*/



Person.prototype.name = 'wn'
function Person() {
    // this = {
    //     __proto__: Person.prototype
    // }

}

var person = new Person()
Person.prototype = {
    name: 'zhangsan'  //  把原型重新赋值成了一个新的对象
}

console.log(person.name);