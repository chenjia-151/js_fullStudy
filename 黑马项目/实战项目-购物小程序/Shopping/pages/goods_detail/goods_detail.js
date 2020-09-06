import { request } from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {},
    // 商品是否被收藏
    isCollect: false
  },
 
  // 商品对象
  GoodsInfo: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function () {
    let pages = getCurrentPages();
    let currentPage = pages[pages.length - 1]
    let options = currentPage.options
    const { goods_id } = options
    this.getGoodsDatial(goods_id)

  },

  // 获取商品的详情数据
  async getGoodsDatial(goods_id) {
    const goodsObj = await request({ url: "/goods/detail", data: { goods_id } })
    this.GoodsInfo = goodsObj;
    // 获取缓存中的商品收藏的数组
    let collect = wx.getStorageSync("collect") || [];
    // 判断当前商品是否被收藏
    let isCollect = collect.some(v => v.goods_id === this.GoodsInfo.goods_id)
    this.setData({
      goodsObj: {
        goods_name: goodsObj.data.message.goods_name,
        goods_price: goodsObj.data.message.goods_price,
        // iphone部分手机 不识别 webp图片格式
        // 确保将图片修改 1.webp => 1.jpg 格式
        goods_introduce: goodsObj.data.message.goods_introduce.replace(/\.webp/g, '.jpg'),
        pics: goodsObj.data.message.pics,
      },
      isCollect
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
    if (index === -1) {
      // 不存在
      this.GoodsInfo.num = 1
      this.GoodsInfo.checked = true
      cart.push(this.GoodsInfo)
    } else {
      // 存在  执行 num++
      cart[index].num++
    }

    // 把购物车重新添加进缓存中
    wx.setStorageSync('cart', cart)
    // 弹窗提示
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      mask: true
    })
  },

  // 点击商品收藏图标
  handleCollect() {
    let isCollect = false
    let collect=wx.getStorageSync('collect')||[];
  
    let index = collect.findIndex(v=>v.goods_id===this.data.goodsObj.goods_id);
    
    if(index!==-1){
      collect.splice(index,1);
      isCollect=false;
      wx.showToast({
      title:'取消成功',
      mask:true,
      });
    }else{
      collect.push(this.data.goodsObj);
      isCollect=true;
      wx.showToast({
      title:'收藏成功',
      mask:true,
    });
    }
    wx.setStorageSync("collect",collect);
    this.setData({
      isCollect,
    })
  }
})