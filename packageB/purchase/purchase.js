const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        openid: "",
        goodsIds: [],
        goodsList: [],
        price: 0,
        userProperty: 0,
        userAddress: null,
        orderStatus: 1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options)
        let obj = JSON.parse(options.msg);
        this.setData({
            openid: app.globalData.useropenId,
            goodsIds: obj.goodsIds,
            price: obj.price
        })
        this.getUserAddress()
        this.getUserGoods()
        this.getUserAccount()
    },

    getUserAccount() {
        var that = this
        var msg = JSON.stringify({
            openid: this.data.openid
        })
        wx.request({
            url: app.globalData.serviceUrl + '/user/getProperty',
            method: 'POST',
            data: msg,
            success: res => {
                console.log(res)
                that.setData({
                    userProperty: res.data
                })
            }
        })
    },

    getUserAddress() {
        var that = this
        var openid = this.data.openid
        wx.request({
            url: app.globalData.serviceUrl + '/purchase/getAddress',
            method: 'POST',
            data: openid,
            success: res => {
                console.log(res)
                that.setData({
                    userAddress: res.data
                })
            }
        })
    },

    getUserGoods() {
        var that = this
        var msg = JSON.stringify({
            'open_id': this.data.openid,
            'goodsIds': this.data.goodsIds,
        })
        wx.request({
            url: app.globalData.serviceUrl + '/purchase/getUserGoods',
            method: 'POST',
            data: msg,
            success: res => {
                console.log(res)
                that.setData({
                    goodsList: res.data
                })
            }
        })
    },

    addUserAddres() {
        var openid = this.data.openid
        wx.navigateTo({
            url: "/packageB/addaddress/addaddress?openid=" + openid,
        })
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

    showList() {
        console.log(this.data.openid)
        console.log(this.data.goodsIds)
        console.log(this.data.price)
    },

    goToOrderSubmit() {
        var that=this
        if (this.data.userAddress == null) {
            wx.showModal({
                title: '提示',
                content: '请填写收货地址',
                complete: (res) => {
                    if (res.cancel) {

                    }

                    if (res.confirm) {
                        that.addUserAddres()
                    }
                }
            })
        } else {
            var userProperty = this.data.userProperty
            var price = this.data.price
            if (price > userProperty) {
                this.createOrder()
                wx.showModal({
                    title: '提示',
                    content: '余额不足，请充值',
                    complete: (res) => {
                        if (res.cancel) {

                        }

                        if (res.confirm) {

                        }
                    }
                })
            } else {
                this.payOrder()
                wx.showModal({
                    title: '提示',
                    content: '购买成功',
                    complete: (res) => {
                        if (res.cancel) {
                            wx.navigateBack()
                        }
                        if (res.confirm) {
                            wx.navigateBack()
                        }
                    }
                })
            }
        }
    },

    payOrder() {
        var that = this
        var msg = JSON.stringify({
            'openid': this.data.openid,
            'price': this.data.price,
        })
        wx.request({
            url: app.globalData.serviceUrl + '/purchase/submit',
            method: 'POST',
            data: msg,
            success: res => {
                that.setData({
                    orderStatus: 2
                })
                that.createOrder()
            }
        })
    },

    createOrder() {
        var that = this
        var list = this.data.goodsList
        var length = list.length
        var orders = []
        for (var i = 0; i < length; i++) {
            var money = list[i].number * parseFloat(list[i].price)
            var order = {
                open_id: this.data.openid,
                shoppingId: list[i].shoppingId,
                quantity: list[i].number,
                payment: money,
                addressId: this.data.userAddress.addressId,
                orderStatus: this.data.orderStatus,
                freight: list[i].freight,
                invoice: list[i].invoice,
                orderNote: list[i].orderNote
            }
            orders.push(order)
        }
        console.log(orders)
        var msg = JSON.stringify(orders)
        console.log(msg)
        wx.request({
            url: app.globalData.serviceUrl + '/order/addOrder',
            method: 'POST',
            data: msg,
            success: function (res) {
                console.log(res)
                that.clearShoppingCart()
            }
        })
    },

    clearShoppingCart() {
        var goodsIds = this.data.goodsIds
        var openid = this.data.openid
        var msg = JSON.stringify({
            openid: openid,
            goodsIds: goodsIds
        })
        wx.request({
            url: app.globalData.serviceUrl + '/shopping/clear',
            method: 'POST',
            data: msg,
            success: function (res) {
                console.log(res)
            }
        })
    }
})