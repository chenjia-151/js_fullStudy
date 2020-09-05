import { request } from "../../request/index.js"
// import regeneratorRuntime from '../../lib/runtime/runtime'
import { login } from "../../utils/asyncWx.js"

Page({

  // 获取用户信息
  async handleGetUserInfo(e) {
    try {
      // console.log(e);
      // 获取用户信息
      const { encryptedData, rawData, iv, signature } = e.detail

      // 获取小程序登录成功后的code值
      const { code } = await login()
      const loginPrarms = { encryptedData, rawData, iv, signature, code }
      // console.log(code);

      // 发送请求 获取用户的token
      // const token = 'ShouQuan'
      const res = await request({ url: "/users/wxlogin", data: loginPrarms, method: "post" })
      // console.log(res);  //没有企业账号，拿不到数据
      const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo"
      wx.setStorageSync('token', token)
      wx.navigateBack({
        delta: 1
      });
    } catch (error) {
      console.log(error);
    }
  },

  
})