Function.prototype.mybind = function (context) {
    if (typeof this !== 'function') {
        // 调用call的不是函数时，抛出错误
        throw TypeError('Bind must be called on a function')
    }

    // 拿到参数，通过解构拿到用户可能会用到的参数，放入一个数组中
    const args = [...arguments].slice(1)   //截取除第一个参数外的所以参数
    // const args = Array.prototype.slice.call(arguments,1)  和上面的方法一样的效果

    // 保存this
    const self = this

    // 定义一个变量，用来保存原函数的原型
    const original = function () { }

    // 绑定的函数
    const bound = function () {
        // this  instanceof  original，判断是否用new来调用bound
        return self.apply(
            this instanceof original ? this : context,
            args.concat(Array.prototype.slice.call(arguments))
        )
    }

    if (this.prototype) {
        original.prototype = this.prototype
    }

    // 修改绑定函数的原型指向
    bound.prototype = new original()
    return bound
}


fn.mybind(obj)

// let name = 'wn'
// let obj = {
//     name: '蜗牛'
// }

// function a(){
//     console.log(this.name);
// }
// a.call(obj)