let obj = { a: 1}
let proxyObj = new Proxy(obj, {
    get(target, prop){
        return prop in target ? target[prop] : 0
    },
    set(target, prop, value){
        target[prop] = 888
    }
})

console.log(proxyObj.a);
console.log(obj.a);
console.log(proxyObj.b);

proxyObj.a = 666
console.log(proxyObj.a);

