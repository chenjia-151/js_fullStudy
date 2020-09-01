import { request } from "../../request/index.js"
// import regeneratorRuntime from '../../lib/runtime/runtime'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {}
  },

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
    // console.log(res);
    this.setData({
      goodsObj: {
        goods_name: goodsObj.data.message.goods_name,
        goods_price: goodsObj.data.message.goods_price,
        // iphone部分手机 不识别 webp图片格式
        // 确保将图片修改 1.webp => 1.jpg 格式
        goods_introduce: goodsObj.data.message.goods_introduce.replace(/\.webp/g,'.jpg'),
        pics: goodsObj.data.message.pics,
      }
    })
  }
})