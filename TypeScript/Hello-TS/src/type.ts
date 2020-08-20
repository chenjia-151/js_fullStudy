// 其他常见的类型

// any  
// 定义了any类型之后，就可以将变量定义为任何类型
// let notSure: any = 4
// notSure = 's'


// any
// let value: any;
// value = true
// value.foo.bar
// value()
// new value()
// value[0]

// unknown   
// 可以重新赋值成其他类型，但是也是在知道具体是什么类型之后才能够进行这种操作的
// let value2: unknown
// value2 = true
/**
value2.foo.bar   
value2()
new value2()
value2[0]
*/



// never  
// 强行限制某个变量是什么东西，没有返回值
// const empty: never[] = []
// // empty.push(1)
// function error(message: string): never {
//     throw new Error(message)
// }


// 数组
const list: number[] = [1,2,3]
const list1: Array<number> = [1,2,3]  // 泛型

// 元祖
const list2 = [1,2,3,'4',false]

// 对象  
// 数组和元祖都是对象类型
let obj: object
obj = [1]
obj = [1,'2']
obj = {}
