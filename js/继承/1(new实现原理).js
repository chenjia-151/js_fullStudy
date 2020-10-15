function newFunc(Fn) {
    let o = {}
    o.__proto__ = Fn.prototype  // o 的隐式原型 === Fn 的显示原型
    Fn.call(o, arguments)
    return o
}


function Fn(name, age) {
    this.name = name
    this.age = age
}
let fn = new Fn()
fn = {
    name: '',
    age: ''
}

// newFunc(Fn)