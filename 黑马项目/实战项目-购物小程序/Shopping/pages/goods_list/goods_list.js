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

  // 总页数
  totalPages: 1,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.QueryParams.cid = options.cid
    this.getGoodsList()
  },

  // 获取商品列表数据
  async getGoodsList() {
    const res = await request({ url: "/goods/search", data: this.QueryParams })
    console.log(res);
    // 获取总条数
    const total = res.data.message.total
    // 计算总页数
    this.totalPages = Math.ceil(total / this.QueryParams.pagesize)
    console.log(this.totalPages);
    this.setData({
      // 拼接数组
      goodsList: [...this.data.goodsList, ...res.data.message.goods]
    })

    // 关闭下拉刷新的窗口 
    wx.stopPullDownRefresh()
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
  },

  // 页面上拉 滚动条触底事件
  onReachBottom() {
    // console.log('页面触底');
    if (this.QueryParams.pagenum >= this.totalPages) {
      // console.log("没有下一页数据");
      // 弹出显示框 提示
      wx.showToast({ title: '没有下一页数据了' });

    } else {
      // console.log("有下一页数据");
      this.QueryParams.pagenum++
      this.getGoodsList()
    }
  },

  // 下拉刷新事件
  onPullDownRefresh() {
    // console.log("刷新");
    // 重置数组
    this.setData({
      goodsList: []
    })

    // 重置页码
    this.QueryParams.pagenum = 1

    // 发送请求
    this.getGoodsList()
  }
})