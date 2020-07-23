// pages/demo12/demo12.js
Page({
  data: {
      gender:""
  },
  handleChange(e){
    // console.log(e);
    // 1 获取单选框中的值
    let gender = e.detail.value;
    // 2 把值赋值给data中的数据
    this.setData({
      gender
    })
  }
})