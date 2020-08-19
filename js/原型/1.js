
// Person.prototype  -- 原型
// Person.prototype = {}  函数被定义出来就天生具备的

Person.prototype.name = 'zhangsan'
Person.prototype.say = function () {
    console.log('giao');
}
function Person() {
    // this.name = 'wn'
}

// 构造出来的新的对象，可以拥有原型上的属性
var person = new Person()
console.log(person.name);  //  从原型上继承来的

var person1 = new Person()
console.log(person1.name);

person.say()
