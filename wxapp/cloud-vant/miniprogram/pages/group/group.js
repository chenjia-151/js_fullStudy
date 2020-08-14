// miniprogram/pages/group/group.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   * 每一次执行的时候都会显示一次
   */
  onShow: function () {
    const self = this
    // 调用云函数
    wx.cloud.callFunction({
      name:'getGroup',
      data:{},
      success(res){
        console.log(res);
        self.setData({
          groupList: res.result
        })
      },
      fail(res){
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})