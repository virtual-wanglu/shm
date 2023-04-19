const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        openid: "",
        loginStatus: false,
        goods: {
            id: "",
            price: "",
            tag: "",
            title: "",
            desc: "",
            image: []
        },
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(app.globalData.userlogin)
        let obj = JSON.parse(options.obj); // 将字符串对象转化为真正的对象
        this.setData({
            goods: obj,
            openid: app.globalData.useropenId,
            loginStatus: app.globalData.userlogin
        });
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

    onClickShoppingCart() {
        if (!this.data.loginStatus) {
            wx.showToast({
                title: '请用户先登录',
                icon: 'error',
                duration: 2000
            })
        } else {
            wx.navigateTo({
                url: '/packageB/shoppingcart/shoppingcart?openid=' + this.data.openid,
            })
        }
    },
    onClickService() {
        wx.navigateTo({
            url: '/packageB/shoppingservice/shoppingservice',
        })
    },
    onClickAddCart() {
        if (!this.data.loginStatus) {
            wx.showToast({
                title: '请用户先登录',
                icon: 'error',
                duration: 2000
            })
        } else {
            var msg = JSON.stringify({
                /*将对象转换成json字符串形式*/
                'open_id': this.data.openid,
                'shoppingId': this.data.goods.id,
            })
            console.log(msg)
            wx.request({
                url: 'http://127.0.0.1:8080/shopping/addshoppingcart',
                method: "POST",
                data: msg,
                success: function (res) {
                    console.log(res)
                }
            })
        }

    },
    onClickPurchase() {
        if (!this.data.loginStatus) {
            wx.showToast({
                title: '请用户先登录',
                icon: 'error',
                duration: 2000
            })
        } else {
            wx.navigateTo({
                url: '/packageB/purchase/purchase',
            })
        }
    }
})