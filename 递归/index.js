// 5!  5 的阶乘
// 5 * 4 * 3 * 2 * 1

// function mul(n){
//     //  n 的阶乘
//     var num = 1
//     for(var i = 1;i<=n;i++){
//         num = num * i
//     }
//     return num
// }
// console.log(mul(5));

// function mul(n){  // 阶乘  函数体内部调用本身
//     // n 的阶乘
//     // n! = n * (n-1)!
//     if(n==1){   //  2.找出口
//         return 1
//     }
//     return n * mul(n-1)   // 1.找规律
// }
// console.log(mul(5));


//  斐波那契数列
// fb(n)=fb(n-1)+fb(n-2)

function fb(n){ 
    if(n==1||n==2){
        return 1
    }
    return fb(n-1)+fb(n-2)
}
console.log(fb(10));


// fb(5) ==> fb(4)+fb(3)
// fb(4) ==> fb(3)+fb(2)
// fb(3) ==> fb(2)+fb(1)
// fb(2) ==> fb(1)+fb(3)



