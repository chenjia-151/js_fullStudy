// function XiangQin(){
//     setTimeout(() => {
//         console.log('相亲');
//         marry()
//     }, 2000);
// }

// function marry() {
//     setTimeout(() => {
//         console.log('结婚');
//         baby1()
//         baby2()
//     }, 1000);
// }

// function baby1() {
//     setTimeout(() => {
//         console.log('第一个孩子出生');
//     }, 1500);
// }

// function baby2() {
//     setTimeout(() => {
//         console.log('第二个孩子出生');
//     }, 1800);
// }

// XiangQin()


// new Promise  中自带一个 .then
let XiangQin = new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log('相亲');
        resolve('相亲成功')
    }, 2000);
})

XiangQin.then((res)=>{
    // console.log(res);
    if( res == '相亲成功') {
        marry()
    }
})

function marry() {
    setTimeout(() => {
        console.log('结婚');
    }, 1000);
}

function baby1() {
    setTimeout(() => {
        console.log('第一个孩子出生');
    }, 1500);
}

// XiangQin()
// marry()
// baby1()

