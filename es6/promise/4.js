function a() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('aaa');
            resolve('yes')
        }, 1000);
    })
}

function b() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('bbb');
            resolve('yes')
        }, 2000);
    })
}

function c() {
    setTimeout(() => {
        console.log('ccc');
    }, 500);
}

function d() {
    setTimeout(() => {
        console.log('ddd');
    }, 3000);
}

function e(){
    console.log('eee');
}

// Promise pending(进行中)  resolved(已成功)  reject(已失败)

// finally 不管promise最后是什么状态，都能够走进finally里面

// a().then(b).catch(c).finally(d)


// all  必须执行完成前面两个函数后，才会执行最后一个函数
// Promise.all([a(),b()]).then(e)


// race  只要前面第一个函数执行之后，就会执行最后一个函数的执行，最后才会去执行第二个函数
Promise.race([a(),b()]).then(e)
