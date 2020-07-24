// var name
// var obj = {}

// console.log(name)

// // var name = "张三"
// name = "张三"



// for ( let  i=0;i<10;i++){
//     // console.log(i)
// }
// console.log(i)


// var a = []
 
// for ( let i=0;i<10;i++){
//     a[i]=function(){
//         console.log(i)
//     }
// }
// a[6]()


// for ( let i = 0; i < 3; i ++) {  //父作用域
//     let i = "abc"  //  子作用域
//     console.log(i)
// }



// 暂时性死区
// var tmp = 123;
// if (true) {
//     tmp = 'abc'
//     let tmp
// }



// ------------------------


// const 定义一个常量 是不允许修改的
// const num = 123
// num = 111
// console.log(num)


// if(true){
//     console.log(age)
//     const age = 12
// }

const message = 'hello world'
const message = 'hello'
console.log(message)