Function.prototype.myapply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    const args = arguments[1]  // arguments[1] == [1, 2, 3]
    const fn = Symbol('fn')
    context[fn] = this

    const result = context[fn](...args)

    delete context[fn]
    return result
}

fn.apply(obj, [1, 2, 3])