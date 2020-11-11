// setTimeout  Promise  Async/await  的区别

// setTimeout  -- 宏任务队列 会等到执行栈被完全清空了之后才会执行
// Promise  会让回调函数去到微任务队列，等到宏任务里面的同步代码执行完再执行
// Async 表示函数可能有异步方法(await)，await 后面跟表达式，async执行时碰到await就会让它立即执行，await后面的代码会去到微任务队列


// async function test() {
//     console.log(123);
//     await test2()  //  碰到await时，会先把该函数中的所有的东西都先执行完，后面的东西会存放到微任务队列
//     console.log(234);  // 微任务队列
// }
// function test2() {
//     console.log(666);
// }
// test()

async function async1() {
    console.log(1);
    await async2()
    console.log(2);
}
async function async2() {
    console.log(3);
}
console.log(4);
async1()
console.log(5);
// ==> 4 1 3 5 2