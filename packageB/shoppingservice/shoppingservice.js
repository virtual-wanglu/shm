// packageB/shoppingservice/shoppingservice.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        serviceImgUrl:"http://121.196.227.203:8000/images/shoppingservice.jpg"
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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

    previewImg: function (e) {
        console.log(e)
        var imgUrl = [this.data.serviceImgUrl]
        wx.previewImage({
            urls: imgUrl,
            success: function (res) {},
            fail: function (res) {},
            complete: function (res) {},
        })
    },
})