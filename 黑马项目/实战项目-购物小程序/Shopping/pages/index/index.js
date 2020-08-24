// 引入 用来发送请求 的方法  一定要把路径补全
import { request } from "../../request/index.js"
Page({
  data: {
    // 轮播图数组
    swiperList: [],

    // 导航 数组
    catesList: [],

    // 楼层数据
    floorList: [],
  },
  // 页面开始加载 就会触发
  onLoad: function (options) {
    // // 发送异步请求，获取轮播图数据 
    // // 优化的手段可以通过es6的 promise 来解决 
    // var reqTask = wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // });

    this.getSwiperList();
    this.getCatesList();
    this.getFloorList();

  },

  // 获取轮播图数据
  getSwiperList() {
    request({ url: "/home/swiperdata" })
      .then(result => {
        this.setData({
          swiperList: result.data.message
        })
      })
  },

  // 获取轮播图数据
  getCatesList() {
    request({ url: "/home/catitems" })
      .then(result => {
        this.setData({
          catesList: result.data.message
        })
      })
  },

  // 获取楼层数据
  getFloorList() {
    request({ url: "/home/floordata" })
      .then(result => {
        this.setData({
          floorList: result.data.message
        })
      })
  }
});
