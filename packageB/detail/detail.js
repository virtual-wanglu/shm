// packageB/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods:{
            id:"",
            price:"",
            tag:"",
            title:"",
            desc:"",
            image:[]
        },
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let obj = JSON.parse(options.obj); // 将字符串对象转化为真正的对象
        console.log(obj)
        console.log(obj.image)
        // this.setData({
        //     id:obj.id,
        //     price:obj.price,
        //     tag:obj.tag,
        //     title:obj.data.title,
        //     desc:obj.desc,
        //     image:obj.image
        // })
        this.setData({goods:obj});
        console.log(this.data.goods.title)
        console.log(this.data.goods.image)
        console.log(this.data.goods)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    onClickShoppingCart(){
        wx.navigateTo({
            url:'/packageB/shoppingcart/shoppingcart',
          })
    }
})