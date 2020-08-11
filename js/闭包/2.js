// 预编译
// GO : {
//     glob : undefined 100
//     demo : undefined
//     a : function a(){}
// }
function a(){
    function b(){
        var bbb = 234
        console.log(aaa);  // 看上去报错，实际上有值，闭包
    }
    var aaa = 123
    return b  // b 出生在 a 里面，但是被保存出去了
}
// 编译
// aAO : {
//     aaa : undefined  123
//     b : function b(){}
// }
// bAO : {
//     bbb : undefined  234
// }

var glob = 100
var demo = a()
demo()