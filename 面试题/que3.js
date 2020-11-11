let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

// 拍平、去重

// function fn(arr) {
//     let arr1 = []
//     arr.forEach((val) => {
//         if (val instanceof Array) {
//             arr1 = arr1.concat(fn(val))
//         } else {
//             arr1.push(val)
//         }
//     })
//     return arr1
// }
// fn([[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10])



function flatten(arr) {
    return arr.reduce(function (acc, val) {
        return acc.concat(Array.isArray(val) ? flatten(val) : val)
    }, [])
}
flatten(arr)