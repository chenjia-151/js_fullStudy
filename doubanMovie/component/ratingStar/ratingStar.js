// component/ratingStar/ratingStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score: {
      type: String,
      value: 0
    }
  },

  lifetimes: {
    attached: function() {
      this.setData({
        on: Math.floor(this.data.score),
        half: this.data.score - this.data.on,
        off: Math.floor(5 - this.data.score)
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    on: 0,
    half: 0,
    off: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
