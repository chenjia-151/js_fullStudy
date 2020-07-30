// components/Tabs/Tabs.js
Component({
  /**
   * 里面存放的是要从父组件接收的数据
   */
  properties: {
    // 要接受的数据的名称
    // aaa:{
    //   // type 要接受的数据的类型
    //   type:String,
    //   // value 默认值
    //   value:""
    // }
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  // 页面.js 文件中 存放事件回调函数的时候 存放在data同层级下
  // 组件.js 文件中 存放事件回调函数的时候 必须要存放在 methods 中
  methods: {
    handleItemTap(e){
      // 绑定点击事件  需要在methods 中绑定
      // 获取被点击的索引
      // 获取原数组
      // 对数组循环
      //    给每一个循环项 选中属性 改为 false 
      //    给当前的索引项 添加激活选中效果就行
      // 点击事件触发的时候 触发父组件中的自定义事件 同时传递数据给 父组件
      // this.triggerEvent("父组件自定义事件的名称",要传递的参数)



      // 获取索引
      const {index} = e.currentTarget.dataset;
      // 触发父组件中的自定义事件  同时传递数据给
      this.triggerEvent("itemChange",{index});
      // 获取data中的原数组
      // 解构 对复杂类型进行解构的时候 复制了一份 变量的引用
      // 最严谨的做法 重新拷贝一份数组 再对这个数组的备份进行处理 不要直接修改this.data.数据
      let {tabs} = this.data;
      // 也可以写成  let tabs = this.data.tabs
      // 循环数组
      // [].forEach  遍历数组 遍历数组的时候 修改了 v (每一个循环项) 也会导致原数组被修改
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData({
        tabs
      })
    }
  }
})
