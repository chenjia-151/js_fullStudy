


Person.prototype = {
    // name: 'Zhangsan',
    // sayName: function(){
    //     console.log(this.name);
    // }
    height: 100
}

function Person(){
    // this.name = 'Lisa'
    this.eat = function(){
        this.height++
    }
}

var person = new Person()

// console.log(person.sayName());  // Zhangsan
// console.log(person.sayName());  // Lisa

person.eat()
console.log(person.height);
console.log(Person.prototype.height);
