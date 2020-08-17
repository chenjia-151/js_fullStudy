// js 是单线程的

function a() {
    let name = '张三'
    console.log(name);
}

function b() {
    // setTimeout(()=>{})  定时器，多少秒之后才会执行的函数
    setTimeout(()=>{
    console.log('李四');
    },1000)
}

function c() {
    console.log('王五');
}

b()
a()
c()