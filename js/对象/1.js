// 对象
var mrWang = {
    name: '王五',
    age: 20,
    sex: 'male',
    health: 100,
    smoke: function(){
        console.log('I am smoking cool');
        this.health--
    },
    drink: function(){
        console.log('I am drinking');
        this.drink++
    }
}

// mrWang.smoke()
// console.log(mrWang.health);

// 增
// mrWang.boyfriend = 'zhangsan'

// 查
// console.log(mrWang);

// 改
// mrWang.sex = 'girl'

// 删  delete
// delete mrWang.name
// delete mrWang.sex
// console.log(mrWang.sex);
// console.log(aaa);





//  对象创建
// 1. var obj ={}   // 对象字面量  ||  对象直接量
// 2. 构造函数

// 1)
// let a = new Object()  //  var obj ={}   两者没有区别
// let b = new Object()    

// 2)
function Car(color) {   // 大驼峰式命名
    this.color = color
    this.name = 'BWM'  //  往函数中增加属性使用 this.函数名
    this.height = '1400'
    this.weight = '1000'
    this.health = 100
    this.lang = '4900'
    this.run = function(){
        this.health--  //  只能使用this
    }
}
var car1 = new Car('black')
var car2 = new Car('white')

car1.name = '红旗'
car2.name = '兰博基尼'

car1.run()
car2.run()

console.log(car1);
console.log(car2);


