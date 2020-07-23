// pages/demo13/demo13.js
Page({
  data: {
      list:[
        {
          id:0,
          name:"张三",
          value:"张"
        },
        {
          id:1,
          name:"李四",
          value:"李"
        },
        {
          id:2,
          name:"王五",
          value:"王"
        }
      ],
      checkedList:[]
  },
  handleItemChange(e) {
    // console.log(e)
    // 1 获取被选中的复选框的值
    const checkedList = e.detail.value
    // 2 进行赋值
    this.setData({
      checkedList
    })
  }
})