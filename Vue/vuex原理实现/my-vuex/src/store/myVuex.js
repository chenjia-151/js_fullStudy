//  Vuex本质上是对象
//  Vuex对象有两个属性，一个是install方法，一个是Store这个类
//  install方法的作用是：将store这个实例挂载到所有的组件上
//  Store这个类，拥有commit，dispatch这些方法，
//  Store类里面将传入的state包装成data，作为new Vue的参数

class Store {

}

let install = function(){

}

let Vuex = {
    Store,
    install
}

export default Vuex