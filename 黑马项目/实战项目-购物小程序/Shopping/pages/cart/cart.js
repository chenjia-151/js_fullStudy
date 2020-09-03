/**
  1 获取用户的收货地址
    1 绑定点击事件
    2 调用小程序内置 api 获取用户的收货地址 wx.chooseAddress
  
  2 获取 用户 对小程序 所授予 获取地址的 权限 状态 scope  (清缓存操作)
    1 假设 用户点击获取收货地址的提示框 确定 authSetting  scope.address
      scope 值 true 直接调用 获取收货地址
    2 假设 用户 从来没有调用过 收货地址的api
      scope 值 true 直接调用 获取收货地址
    3 假设 用户 点击获取收货地址的提示框 取消
      scope 值 false
      1 诱导用户 自己打开 授权设置页面(wx.openSetting) 当用户重新给与 获取地址权限的时候
      2 获取收货地址
    4 把获取到的收货地址 存入到 本地存储中
 */

import { getSetting, chooseAddress, openSetting, showModal, showToast } from "../../utils/asyncWx.js"
import regeneratorRuntime from '../../lib/runtime/runtime'

Page({

  // 页面的初始数据
  data: {
    address: {},
    cart: [],
    allChecked: false,
    totalPrice: 0,
    totalNum: 0
  },

  // 页面展示的函数
  onShow: function () {
    // 获取缓存中的收货地址信息
    const address = wx.getStorageSync("address");
    // 获取缓存中的购物车数据
    const cart = wx.getStorageSync("cart") || [];

    this.setData({ address })
    this.setCart(cart)
  },

  // 点击 收货地址
  async handleChooseAddress() {
    // // 获取 权限状态
    // wx.getSetting({
    //   success: (result) => {
    //     // 获取权限状态 
    //     const scopeAddress = result.authSetting["scope.address"]
    //     if (scopeAddress === true || scopeAddress === undefined) {
    //       wx.chooseAddress({
    //         success: (result1) => {
    //           console.log(result1);
    //         },
    //       })
    //     }
    //     else {
    //       // 用户 以前拒绝过授予权限 先诱导用户打开授权页面
    //       wx.openSetting({
    //         success: (result2) => {
    //           // 可以调用 收货地址代码
    //           console.log(result2);
    //         }
    //       });
    //     }
    //   },
    // })
    try {
      // 获取权限状态
      const res1 = await getSetting()
      const scopeAddress = res1.authSetting["scope.address"]
      // 判断 权限状态
      if (scopeAddress === false) {
        await openSetting()
      }
      // 调用获取 收货地址 api
      const address = await chooseAddress()
      address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo
      // console.log(res2);
      // 存入到缓存中
      wx.setStorageSync("address", address);

    } catch (error) {
      console.log(error);
    }
  },

  // 商品的选中
  handleItemChange(e) {

    // 获取被修改的 商品的 id
    const goods_id = e.currentTarget.dataset.id
    // console.log(goods_id);

    // 获取购物车数组
    let { cart } = this.data

    // 找到被修改的商品对象
    let index = cart.findIndex(v => v.data.message.goods_id === goods_id)

    // 选中状态取反
    cart[index].checked = !cart[index].checked
    this.setCart(cart)

  },

  // 设置购物车的状态 同时计算 底部工具栏的数据 全选 总价格 购买的数量
  setCart(cart) {
    // 把购物车数据重新设置回data中和缓存中
    // this.setData({
    //   cart
    // })
    let allChecked = true;
    // 总价格 总数量
    let totalPrice = 0
    let totalNum = 0
    cart.forEach(v => {
      if (v.checked) {
        totalPrice += v.num * v.data.message.goods_price
        totalNum += v.num
      } else {
        allChecked = false
      }
    })
    // 判断数组是否为空
    allChecked = cart.length != 0 ? allChecked : false
    this.setData({
      cart,
      totalPrice,
      totalNum,
      allChecked
    })
    wx.setStorageSync("cart", cart)
  },

  // 商品的全选功能
  handleItemAllChecke() {

    // 获取data中的数据
    let { cart, allChecked } = this.data

    // 修改值
    allChecked = !allChecked

    // 循环修改cart数组中 商品选中状态
    cart.forEach(v => v.checked = allChecked)

    // 把修改后的值都 填充回 缓存中
    this.setCart(cart)
  },

  // 商品数量的编辑功能
  async handleItemNumEdit(e) {

    // 获取传递过来的参数
    const { operation, id } = e.currentTarget.dataset
    // console.log(operation,id);

    // 获取购物车数组
    let { cart } = this.data

    // 找到需要修改的商品的索引
    const index = cart.findIndex(v => v.data.message.goods_id === id)

    // 判断是否要执行删除
    if (cart[index].num === 1 && operation === -1) {
      // 弹窗提示
      const res = await showModal({ content: "您是否要删除？" })
      if (res.confirm) {
        // console.log('确定');
        cart.splice(index, 1)
        this.setCart(cart)
      }
    } else {
      // 进行修改数量
      cart[index].num += operation

      // 设置回缓存和data中
      this.setCart(cart)
    }
  },

  // 点击 结算
  async handlePay(){

    // 判断收货地址
    const {address, totalNum} = this.data
    if(!address.userName){
      await showToast({title:"您还没有收货地址"})
      return
    }

    // 判断用户有没有选购商品
    if(totalNum===0){
      await showToast({title:"您还没有选购商品"})
      return
    }

    // 跳转到 支付页面
    wx.navigateTo({
      url: '/pages/pay/pay'
    });
  }
})