// ['1', '2', '3'].map(parseInt)

// ['10', '10', '10', '10'].map(parseInt)

// 站在radix进制的基础上来看第一个参数，把它转换成10进制
parseInt(100, 4)

// parseInt(100, undefined)  ---- 10进制

// '0x' '0X'   ----16进制


// 首先使用map()函数创建一个新的数组，
// 再通过parseInt()将新数组中的每一项都按照radix进制转化
// [1, 2, 3].map(parseInt)
// ['1', '2', '3'].map((item) = {
//     return parseInt(item, index)
// })