/** 
function greeter(person: string) {
    return "hello" + person
}

greeter('1')
const user = "wn"



// 类型
// let isLoading: boolean = false
// isLoading = 123

// let num = 8
// num = 3

// let book:string = 'typeScript'

// void 空值  当某些函数不需要返回值的时候，就可以使用void空值类型
function warnUser(): void {

}

const a: void = undefined

let aaa = undefined

// Symbol类型 值是唯一的，就算定义两个完全相同的变量，但是它们所对应的值还是不同的
let syml: symbol = Symbol('key1')
let sym2 = Symbol('key1')
*/

// BigInt
const max = BigInt(Number.MAX_SAFE_INTEGER)
// max1 === max2 => true
const max1 = max + 1n
const max2 = max + 2n
console.log(max1, max2);
