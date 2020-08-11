// function test(){
//     var food = 'apple'

//     function a(){
//         console.log(food);
//         food = 'banana'
//     }

//     function b(){
//         console.log(food);
//     }
// }


// 想办法将两个函数返回出来
function fruit(){
    var food = 'apple'  // food 一直被缓存
    var obj = {
        eatFood:function(){
            if(food != ''){
                console.log('I am eating ' + food);
                food = ''
            }
            else {
                console.log('There is nothing!');
            }
        },
        pushFood:function(myfood){
            food = myfood
        }
    }
    return obj
}

var person = fruit()  // person 代表 obj 对象
person.eatFood()
person.eatFood()
person.pushFood('banana')
person.eatFood()
