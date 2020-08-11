// 在函数中包裹着一个新的函数，称为闭包
function test(){
    var arr =  []
    for(var i = 0; i < 10; i ++){

        // 自执行函数  for循环每执行一次，都会生成一个自执行函数，而且每一次的j的值都是以此类推，所以会打印出0-9
        // 自执行函数 (function(形参){函数体})(实参)
        (function(j){
            // j = 0
            arr[j] = function(){
                console.log(j);
            }
        })(i)

    }
    return arr
}
var myArr = test()
for(var j = 0; j < 10; j ++){
    myArr[j]()
}