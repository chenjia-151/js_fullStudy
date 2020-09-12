// Object.create  的实现原理

let a = { b: 1 }

let c = create(a)

console.log(c);

function create(obj) {
    // if(typeof obj !== 'object') { throw TypeError } 
    // function Ctor(){}
    // Ctor.prototype = obj
    // let o = new Ctor()
    // return o

    return {
        __proto__ : obj
    }
}