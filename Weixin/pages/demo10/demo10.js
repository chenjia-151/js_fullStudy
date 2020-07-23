Page({
  data: {
    html:[{
      // div 标签 name属性来指定
      name:"div",
      // 标签上有哪些属性
      attrs:{
        // 标签上的属性
        class:"my_div",
        style:"color:red;"
      },
      // 子节点 children 要接收的数据类型和 nodes第二种渲染方式的数据类型一致
      children:[
        {
          name:"P",
          attrs:{},
          // 放文本
          children:[
            {
              type:"text",
              text:"hello world"
            }
          ]
        }
      ]
    }]
  }
})