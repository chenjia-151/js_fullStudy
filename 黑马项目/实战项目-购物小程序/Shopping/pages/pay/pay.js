
import { getSetting, chooseAddress, openSetting, showModal, showToast } from "../../utils/asyncWx.js"
import regeneratorRuntime from '../../lib/runtime/runtime'

Page({

  // 页面的初始数据
  data: {
    address: {},
    cart: [],
    totalPrice: 0,
    totalNum: 0
  },

  // 页面展示的函数
  onShow: function () {

    // 获取缓存中的收货地址信息
    const address = wx.getStorageSync("address");

    // 获取缓存中的购物车数据
    let cart = wx.getStorageSync("cart") || [];

    // 过滤后的购物车数组
    cart = cart.filter(v=>v.checked)
    this.setData({ address })

    // 总价格 总数量
    let totalPrice = 0
    let totalNum = 0
    cart.forEach(v => {
      totalPrice += v.num * v.data.message.goods_price
      totalNum += v.num
    })
    this.setData({
      cart,
      totalPrice,
      totalNum,
      address
    })
  },

  // 点击支付界面
  handleOrderPay(){

    // 判断缓存中有没有 token
    const token = wx.getStorageSync('token')

    // 判断
    if(!token){
      wx.navigateTo({
        url: '/pages/auth/auth',
      });
        return;
    }
    console.log("已经存在");
  }
})