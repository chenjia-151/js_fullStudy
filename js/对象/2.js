//  构造函数  隐式的创建一个this对象,再往this对象中添加属性，最后将this对象返回出来
// function Student(name,age,sex) {
//     // var this = {
//     //     name: '',
//     //     age: ''
//     // }
//     this.name = name
//     this.age = age
//     this.sex = sex
//     this.grade = 2017
//     // return this
// }

// var student = new Student('张三',22,'boy')
// console.log(student);

// function Person() {
//     var name ='李四'
// }
// // var person = new Person()  // 只有这个函数被 new了之后，就会在函数体中创建this对象
// var person = Person()  //undefined  Person()函数体中没有返回值
// console.log(person);


// 自己创建一个构造函数
// function Person(name,age){
//     var that = {}
//     that.name = name 
//     that.age = age
//     return 123
//     // return that
// }
// var person = Person('wn',18)
// console.log(person);




function Student(name,age,sex) {
    // var this = {
    //     name: '',
    //     age: ''
    // }
    this.name = name
    this.age = age
    this.sex = sex
    this.grade = 2017
    return []
    // return this
}

var student = new Student('张三',22,'boy')
console.log(student);