// pages/user/user.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    collectNums:0
  },

  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    const collect=wx.getStorageSync("collect")||[];
    this.setData({userinfo,collectNums:collect.length});
  },

  handleGetuserInfo(e){
    // console.log(e);
    
    const{userInfo}=e.detail;
    wx.setStorageSync("userinfo", userInfo);
    wx.reLaunch({
      url: '/pages/user/user',
    })
  }
})