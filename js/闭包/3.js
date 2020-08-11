//  实现一个函数，函数执行的结果都是累加的
// 不属于一个模块函数
// var count = 0
// function test(){
//     count ++
//     console.log(count);
// }
// test()
// test()
// test()
// test()

// 不依赖外部的变量，实现如上效果
// 效果实现很难，因为函数中没有一个始终固定不变的变量，每一次重新执行函数都会初始化函数中的所有东西

function add(){
    var num = 0
    function a(){
        console.log(++num);
    }
    return a
}
var result = add()
result()
result()
result()
result = null // 需要自己手动设置销毁，当读取到 result = null 时销毁
