// pages/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        value: "体验问题",
        isActive: true
      },
      {
        id: 1,
        value: "商品、商家投诉",
        isActive: false
      }
    ],
    chooseImages: [],
    textVal: ""
  },
 
  UploadImgs: [],

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

  handleChoose() {
    wx.chooseImage({
      success: (res) => {

        this.setData({
          chooseImages: [...this.data.chooseImages, ...res.tempFilePaths]
        })
      },
    })
  },

  handleRemoveImg(e) {

    const { index } = e.currentTarget.dataset;

    let { chooseImages } = this.data;

    chooseImages.splice(index, 1)
    this.setData({
      chooseImages
    })
  },

  handleTextInpute(e) {
    this.setData({
      textVal: e.detail.value,
    })
  },

  handleFormSubmit() {
    const { textVal, chooseImages } = this.data;
    if (!textVal.trim()) {
      wx.showToast({
        title: '输入不合法',
        icon: 'none',
        mask: true,
        duration: 1000,
      });
      return;
    }
    wx.showLoading({
      title: '正在上传中',
      mask: true
    })
    if (chooseImages.length != 0) {
      chooseImages.forEach((v, i) => {
        console.log(v);

        wx.uploadFile({
          filePath: 'v',
          name: 'image',
          url: 'https://img.coolcr.cn/api/upload',
          formData: {},
          success: (res) => {
            console.log(res);
            let url = JSON.parse(res.data).url;
            this.UploadImgs.push(url);

            if (i === chooseImages.length - 1) {
              wx.hideLoading();
              console.log("111");
              this.setData({
                textVal: "",
                chooseImages: []
              })
              wx.navigateBack({
                delta: 1
              })
            }
          }
        })
      });
    } else {
      wx.hideLoading();
      console.log("只是提交了文本");
      wx.navigateBack({
        delta: 1
      })
    }

  },

})