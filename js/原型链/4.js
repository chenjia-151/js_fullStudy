


// 方法重写   修改别人已经存在的方法
Object.prototype.toString = function(){
    return 'abcdefg'
}

function Person(){

}
var person = new Person()
console.log(person.toString());