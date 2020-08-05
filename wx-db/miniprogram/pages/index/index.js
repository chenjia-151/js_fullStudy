const app = getApp()
const db = wx.cloud.database();
const productsCollection = db.collection('products');

Page({
  data: {
    products: []
  },
  gotoDetail(event) {
    productsCollection.doc(event.currentTarget.dataset.id)
    // console.log(event);
    .get()
    .then(res => {
      console.log(res);
      this.setData({
        products: res.data
      })
    })
  },
  onLoad() {
    productsCollection
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          products: res.data
        })
      })
  }
})
