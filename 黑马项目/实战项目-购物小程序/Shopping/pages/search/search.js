import { request } from "../../request/index";

/**
 * 防抖 一般用于 输入框中 防止重复输入 重复发送请求
 * 节流 一般用在页面下拉和上拉
 */

Page({
  data: {
    goods: [],
    isFocus: false,
    inpValue: ""
  },
  // 防抖操作
  TimeId: -1,
  // 输入框的值改变 就会触发的事件
  handleInput(e) {
    // 获取输入框的值
    const { value } = e.detail;
    if (!value.trim()) {
      clearTimeout(this.TimeId);
      // 准备发送请求获取数据
      this.TimeId = setTimeout(() => {
        this.setData({
          goods: [],
          isFocus: false,
        })
      }, 500);
      return;
    }
    this.setData({
      isFocus: true,
    })
    clearTimeout(this.TimeId);
    this.TimeId = setTimeout(() => {
      this.qsearch(value);
    }, 1000);

  },

  async qsearch(query) {
    const res = await request({ url: "/goods/search", data: { query } })
    this.setData({
      goods: res.data.message.goods,
    })
  },

  handlecancle() {
    this.setData({
      inpValue: "",
      isFocus: false,
      goods: []
    })
  }
})