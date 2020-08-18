// 包装类

// var num = 123
// num.abc = 'aaa'
// console.log(num);


// var num = new Number(123)  //  创建 Number对象
// num.abc = 'aaa'
// console.log(num);  // Number {123, abc: 'aaa'}
// console.log(num*2);  //  246   
// 当num参与运算的时候，最后输出的值又变回了数字；当不参与运算时，它能够当做对象来使用
// 能有属性和方法，同理字符串和布尔也一样
// 但是 null 和 undefined 不行


/**
为什么原始值上也可以有属性？？？
var str = 'abcd'
console.log(str.length);

var num = 4 
num.len = 3
console.log(num.len);
*/


/** 
// 包装类
var num = 4
num.len = 4
// 隐式过程
// new Number(4).len = 3
// delete len
// new Number(4).len
console.log(num.len);
*/


/** 
// 考点
var arr = [1,2,3,4,5]
arr.length = 2   //  截取数组的长度，并且输出该数组该长度的值
console.log(arr);  //  [1,2]


var str = 'abcde'
// new String('abcd')
str.length = 2
// new String('abcd').length = 2    delete length
// new String('abcd').length
// String对象 中本身就具备 length属性
console.log(str);  // 'abcd'
console.log(str.length);  // 4
*/




// 面试题
var str = 'abc'
str += 1
var test = typeof(str)
if(test.length == 6){
    test.sign = 'typeOf的返回结果可能是String'
}
console.log(test.sign);