import { request } from "../../request/index.js"
// import regeneratorRuntime from '../../lib/runtime/runtime'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: "综合",
        isActive: true
      },
      {
        id: 1,
        value: "销量",
        isActive: false
      },
      {
        id: 2,
        value: "价格",
        isActive: false
      }
    ],
    goodsList: []
  },

  // 接口要的参数
  QueryParams: {
    query: "",
    cid: "",
    pagenum: 1,
    pagesize: 10
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.QueryParams.cid = options.cid
    this.getGoodsLIst()
  },

  // 获取商品列表数据
  async getGoodsLIst() {
    const res = await request({ url: "/goods/search", data: this.QueryParams })
    // console.log(res);
    this.setData({
      goodsList: res.goods
    })
  },

  // 标题的点击事件 从子组件传递过来的
  handleTabsItemChange(e) {
    // console.log(e);
    // 1 获取被点击的标题的索引
    const { index } = e.detail;
    // 2 修改源数组
    let { tabs } = this.data;
    tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false)
    // 3 赋值到data中
    this.setData({
      tabs
    })
  }
})