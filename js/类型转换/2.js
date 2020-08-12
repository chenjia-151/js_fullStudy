// 一元操作符 + 
// console.log('1'+1);  // 任何数据类型和字符串相加，结果都是字符串
// 1 ==> '1'
// '1' + '1' ==> '11'

// console.log(+'1');  // 数字 1
// +   调用一个ToNumber方法  Number('1')

// console.log(+[]);  //  [] == 0

// console.log(+['1']);  // 数字 1
//  +['1'] == +"1"  ==>  1
/**
 Toprimitive(input,[preferredType])
            输入的值，期望转换的类型
*/

// input 表示要处理的值  
// preferredType  非必填，表示希望转换成的类型，有两个值可以选择  Number 和 String
// 只有当input是日期类型时，且 preferredType 没有定义的话，就相当于传入了一个 String类型，其他的都相当于传入了Number


// Toprimitive(obj,Number)
//  1. 如果obj是基本类型，直接返回
//  2. 否则，先调用valueOf，如果返回一个原始值，则js将其返回
//  3. 否则，调用 toString，如果返回一个原始值，则js将其返回
//  4. 否则，js 抛出一个类型错误异常


// Toprimitive(obj,String)
//  1. 如果obj是基本类型，直接返回
//  2. 否则，先调用 toString，如果返回一个原始值，则js将其返回
//  3. 否则，调用 valueOf，如果返回一个原始值，则js将其返回
//  4. 否则，js 抛出一个类型错误异常


// console.log(+['1','2','3']);
//  +['1','2','3'] == +"1,2,3"   ==>  NaN

// 对象转换的时候报错
// console.log(+{});  // NaN


// 二元操作符 + 
// val1 + val2   =>  ToPrimitive(val1) + ToPrimitive(val2)
console.log(null + 1);
console.log([]+[]);
console.log([]+{});  // 空对象在隐式转换中转换不了
console.log({}+{});
