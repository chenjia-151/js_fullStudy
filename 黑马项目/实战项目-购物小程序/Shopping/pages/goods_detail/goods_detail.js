import { request } from "../../request/index.js"
// import regeneratorRuntime from '../../lib/runtime/runtime'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {}
  },

  // 商品对象
  GoodsInfo: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { goods_id } = options
    // console.log(goods_id);
    this.getGoodsDatial(goods_id)
  },

  // 获取商品的详情数据
  async getGoodsDatial(goods_id) {
    const goodsObj = await request({ url: "/goods/detail", data: { goods_id } })
    this.GoodsInfo = goodsObj;
    // console.log(res);
    this.setData({
      goodsObj: {
        goods_name: goodsObj.data.message.goods_name,
        goods_price: goodsObj.data.message.goods_price,
        // iphone部分手机 不识别 webp图片格式
        // 确保将图片修改 1.webp => 1.jpg 格式
        goods_introduce: goodsObj.data.message.goods_introduce.replace(/\.webp/g, '.jpg'),
        pics: goodsObj.data.message.pics,
      }
    })
  },

  // 点击轮播图放大预览
  handlePrevewImage(e) {
    // console.log("预览");
    const urls = this.GoodsInfo.data.message.pics.map(v => v.pics_mid)
    const current = e.currentTarget.dataset.url
    wx.previewImage({
      current,
      urls
    })
  },

  // 点击加入购物车
  handleCartAdd() {
    let cart = wx.getStorageSync('cart') || [];
    let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
    if(index===-1){
      // 不存在
      this.GoodsInfo.num = 1
      cart.push(this.GoodsInfo)
    }else{
      // 存在  执行 num++
      cart[index].num++
    }

    // 把购物车重新添加进缓存中
    wx.setStorageSync('cart', cart)
    // 弹窗提示
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask:true
    })
  }
})