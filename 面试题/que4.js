// Promise 构造函数  ==>  同步还是异步防范？.then()?


const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve()  // resovle() 
    console.log(2);
})

promise.then(() => {  // .then()异步方法，要等到同步的执行完成之后才会执行
    console.log(3);
})
console.log(4);