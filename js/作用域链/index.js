// function test(){

// }

// // 函数也是对象，也能拥有属性
// // test.name  test.prototype
// // test.[[scope]]  相当于一个key值，函数的作用域
// // test.[[scope]]  对象不具备作用域，只有函数才有的  // 隐式属性，不可能拿出来用

// test() ---> AO:{}   // 回收  js中的AO：{}对象 产生的作用域会被回收掉
// test() ---> AO:{}  



// 预编译(全局)
// GO:{
//     glob: undefined 100,
//     a: function a(){...}
// }
function a(){
    function b(){
        var b = 222
        // console.log(b);
    }
    var a = 111
    b()
    console.log(a);
}
var glob = 100
// 编译
// aAO:{
//     a:undefined 111,
//     b:function b(){...}
// }
// bAO:{
//      b:undefined 222
// }
a()

// 1. a 被定义 a.[[scope]]  ---> 0:GO:{}
// 2. a 被执行 a.[[scope]]  ---> 0:aAO:{}  1:GO:{}  //  变量提升
// 3. b 被定义 a.[[scope]]  ---> 0:aAO:{}  1:GO:{}
// 4. b 被执行 a.[[scope]]  ---> 0:bAO:{}  1:aAO:{}  2:GO:{}  //  作用域链

// b 执行完之后，b的AO就要被销毁
// 当a执行完之后，a的AO也要被销毁  因为a的AO包含了b函数，当a的AO销毁时，b函数也会失效


function a(){
    function b(){
        function c(){
            
        }
        c()
    }
    b()
}
a()