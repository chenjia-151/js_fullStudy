export function debounce(func, delay) {
    let timer


    return function (...args) {

        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            func.apply(this, args)   //  ===>   let that = this   作用是： 让func的this不被修改
        }, delay);
    }

}