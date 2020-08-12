//  String  Boolean  Number  Undefined  Null  Object

// var a = 1
// var b = new number(1)  // 其他的类型也可以这样定义

// 原始值转布尔
// console.log(Boolean());
// console.log(Boolean(false));
// console.log(Boolean(true));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(+0));
// console.log(Boolean(-0));
// console.log(Boolean(1));
// console.log(Boolean(""));
// console.log(Boolean("1"));
// console.log(Boolean(NaN));
// console.log(Boolean(Object));


// 原始值转数字
// new Number()
// console.log(Number());
// console.log(Number(undefined));
// console.log(Number(null));  // 0
// console.log(Number(false));  // 0
// console.log(Number(true));  // 1
// console.log(Number('123'));  // 123
// console.log(Number('-123'));  // -123
// console.log(Number('-000123'));  // -123
// console.log(Number('0x11'));  // 十六进制 17
// console.log(Number(''));  // 0
// console.log(Number('123 123'));  // NaN
// console.log(Number('wn'));  // NaN  Number()不能转换非数字的字符串,数字也字母结合的也不可以


// parseInt()方法  转换 取整  只解析整数
// console.log(parseInt('3 abc'));
// console.log(parseInt('3.14 abc'));
// console.log(parseInt('-12.12 abc'));

// parseFloat()方法  可以解析整数和浮点数
// console.log(parseFloat('1'));
// console.log(parseFloat('3.14 abc'));


// 原始值转字符串   所以的原始值都能够转化成字符串
// var a = 'aaa'
// var b = new String('bbb')
// console.log(String());
// console.log(String(undefined));
// console.log(String(false));
// console.log(String(true));
// console.log(String(null));
// console.log(String(0));
// console.log(String(-0));
// console.log(String(NaN));


// 原始值转对象
// 原始值通过调用  String()  Number()  或者  Boolean()  构造函数转换为他们各自的包装对象
// var a = 'aaa'
// console.log(typeof a);
// var b = new String(a)
// console.log(b);
// console.log(typeof b);


// 对象转布尔值
// console.log(new Boolean(false));
// console.log(Boolean(new Boolean(false)));


// 对象转字符串和数字
// toString   valueOf  
//  判断数据类型  Object.prototype.toString.call()
var a = {
    b:1
}
console.log(a.toString());
// a.toString === Object.prototype.toString.call(a)
// console.log(Object.prototype.toString.call(a));










