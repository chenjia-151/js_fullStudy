// 数组去重
let array = [1,1,1,1,2,2,2,2,1,1,1,'1','1']

function unique(array){
    //  1 将数组中的每一项拿出来做主角
    //  2 找到不是重复项，放入这个数组中
    let res =[]
    res[0] = array[0]
    for (let i=0;i<array.length;i++){
        for (let j = 0,resLen = res.length; j < resLen; j++) {
            if(array[i]===res[j]){
                break;
            }

            //  如果array[i]是唯一的，那么执行完循环，就让 j = resLen
            if(j===resLen-1){
                res.push(array[i])
            }
        }
    }
    return res
    // for (let i=0;i<array.length;i++){
    //     // array[i]
    //     for (let j=array.length-1;j>i;j--){
    //         // 当外面的for循环执行一次时，内层for循环会执行length-i次
    //         if(array[i] === array[j]){
    //             array.splice(j,1)
    //         }
    //     }
    // }
    // return array
}
console.log(unique(array))  //打印出[1,'1']