// set 类似于数组，但是不一样的地方是set 这种数据结构内部的成员是唯一值
// const 定义常量，值不能被改变
// const s = new Set()  // 对象-类数组 set {}
// const arr = new Array()
// console.log(s)

// for each  唯一一个可以让数组进行循环
// [2,3,4,1,3,5]
// let arr = [2,3,4,1,3,5]
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// 遍历数组  for  of 
// for (let item of arr){
//     console.log(item)
// }

// forEach数组独有的一种遍历方法
// 箭头函数 => 类似 function(){}
// arr.forEach((x) =>{
//     // console.log(x)
//     s.add(x)  //去除数组中的重复项
// })
// console.log(s)

// 对象 {} 的存储数据的结构为键值对

// const set = new Set([1,2,3,4,4])
// console.log(set.size)  

// 数组去重
let arr = [2,3,4,1,3,5]
// console.log(arr.pop())  //移除数组尾部元素
// console.log(arr.shift())  //删除数组头部元素
// console.log(arr.splice(3,1))  //从下标第几个开始，然后删几个
// console.log(arr.slice(2,5))  //从数组中取出元素 左闭右开结构 选出下标左边为2到下标为5之前的元素

// 字符串去重
// console.log([...new Set('abcdab')])

// set 中不会发生类型转换
// const set = new Set()
// set.add(5)
// set.add('5')

// let a = NaN
// let b = NaN
// set.add(a)
// set.add(b)

// set.add({})
// set.add({})
// set.add({name:'zhang'})
// set.add({name:'zhang'})
// console.log(set)


// const set = new Set()
// set.add(1).add(2).add(3)
// // set.delete(2)
// // 清空整个数组
// set.clear()
// console.log(set)

// 判断元素是否存在数组中 indexOf  includes
// let arr = [2,3,4,1,3,5]
// console.log(arr.includes(3))


// const set = new Set([1,2,3,4])
// const array = Array.from(set)
// array.forEach(e =>{
//     console.log(e)
// })

// 数组去重
// function dedupe(array){
//     return Array.from(new Set(array))
// }
// console.log(dedupe([1,2,3,4,3,2,1]))

// set 遍历
let set = new Set(['red','green','blue'])
// keys() 是 set 结构中返回键名的遍历器
// values()是set结构中返回值的遍历器
// entries()是set结构中返回键值对的遍历器
for (let item of set.keys()){
    // console.log(item)
}
for (let item of set.values()){
    // console.log(item)
}
for (let item of set.entries()){
    // console.log(item)
}
