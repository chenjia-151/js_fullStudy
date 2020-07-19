// pages/demo03/demo03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
  //输入框的input事件的执行逻辑
  handeInput(e){
    // console.log(e.detail.value);
    this.setData({
      num: e.detail.value
  })
  }
})