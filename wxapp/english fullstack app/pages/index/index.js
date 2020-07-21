//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // articleLise : [],
    // isHidden: false,
    markers: [{
      iconPath: "/resources/car.png",
      id: 0,
      rotate:0,
      latitude: 28.735526,
      longitude: 115.823157,
      width: 20,
      height: 20
    },
    // polyline: [{
    //   points: [{
    //     longitude: 115.823157,
    //     latitude: 28.735526
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   color:"#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }],
    // {
    //   iconPath: "/resources/car.png",
    //   id: 1,
    //   latitude: 28.733526,
    //   longitude: 115.823157,
    //   width: 50,
    //   height: 50
    // },
    // {
    //   iconPath: "/resources/car.png",
    //   id: 2,
    //   latitude: 28.737526,
    //   longitude: 115.823157,
    //   width: 50,
    //   height: 50
    // }
  ],
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     setTimeout(() => {
//       this.setData({
//         articleList: [{
//           date: '6月27日',
//           articles:[{
//             id: 0,
//             title: 'aaa',
//             pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg',
  
//           }, {
//             id: 1,
//             title: 'bbb',
//             pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg',
//           }]
//         }, {
//           date: '6月26日',
//           articles:[{
//             id: 3,
//             title: 'ccc',
//             pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg',
  
//           }, {
//             id: 4,
//             title: 'ddd',
//             pic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2834999481,1380824893&fm=26&gp=0.jpg',
//           }]
//         }],
//         isHidden: true
//       })
//     }, 2000)
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   } 
})