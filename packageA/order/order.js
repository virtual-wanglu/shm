const app = getApp()
// packageA/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        openid: "",
        orderList: [],
        noPayList: [],
        noSendList: [],
        sendList: [],
        confirmList: [],
        orderStatus: ["未支付", "未发货", "已发货", "已收货"]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(app.globalData.userlogin)
        if (app.globalData.userlogin) {
            this.setData({
                openid: app.globalData.useropenId
            })
            this.loadOrderList()
        } else {
            wx.showModal({
                title: '提示',
                content: '请登录后进入',
                success(res) {
                    if (res.confirm) {
                        wx.navigateBack({})
                    } else if (res.cancel) {
                        wx.navigateBack({})
                    }
                }
            })
        }
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

    changeTab(e) {
        console.log(e)
    },

    loadOrderList() {
        var that = this
        var msg = JSON.stringify({
            openid: this.data.openid
        })
        wx.request({
            url: app.globalData.serviceUrl+'/order/getOrder',
            method: 'POST',
            data: msg,
            success: function (res) {
                console.log(res)
                that.setData({
                    orderList: res.data
                })
                that.selectList()
            }
        })
    },
    selectList() {
        var noPayList = []
        var noSendList = []
        var sendList = []
        var confirmList = []
        var orderList = this.data.orderList
        var length = orderList.length
        for (var i = 0; i < length; i++) {
            console.log(orderList[i])
            if (orderList[i].status == 1) {
                noPayList.push(orderList[i])
            }
            if (orderList[i].status == 2) {
                noSendList.push(orderList[i])
            }
            if (orderList[i].status == 3) {
                sendList.push(orderList[i])
            }
            if (orderList[i].status == 4) {
                confirmList.push(orderList[i])
            }
        }
        this.setData({
            noPayList: noPayList,
            noSendList: noSendList,
            sendList: sendList,
            confirmList: confirmList
        })
        console.log(this.data.noPayList)
        console.log(this.data.noSendList)
        console.log(this.data.sendList)
        console.log(this.data.confirmList)
    },

    cancleOrder(e) {
        var that = this
        var index = e.currentTarget.dataset.index
        var noPayOrder = this.data.noPayList[index]
        var msg = JSON.stringify({
            orderId: noPayOrder.orderId
        })
        wx.request({
            url: app.globalData.serviceUrl+'/order/cancel',
            method: 'POST',
            data: msg,
            success: function (res) {
                console.log(res)
                that.loadOrderList()
            }
        })
    },

    payOrder(e) {
        var that = this
        var index = e.currentTarget.dataset.index
        var noPayOrder = this.data.noPayList[index]
        var msg = JSON.stringify({
            openid: this.data.openid,
            orderId: noPayOrder.orderId,
            payment: noPayOrder.price
        })
        wx.request({
            url: app.globalData.serviceUrl+'/order/pay',
            method: 'POST',
            data: msg,
            success: function (res) {
                console.log(res)
                if (res.data == "ok") {
                    wx.showToast({
                        title: '购买成功',
                        icon: 'success'
                    })
                    that.loadOrderList()
                } else {
                    wx.showToast({
                        title: '余额不足',
                        icon: 'error'
                    })
                }
            }
        })
    },

    urge(e) {
        wx.showModal({
            title: '提示',
            content: '已催商家发货，请用户耐心等待',
            complete: (res) => {
                if (res.cancel) {

                }

                if (res.confirm) {

                }
            }
        })
    },

    confirm(e) {
        var that = this
        var index = e.currentTarget.dataset.index
        var sendList = this.data.sendList[index]
        var msg = JSON.stringify({
            orderId: sendList.orderId
        })
        wx.request({
            url: app.globalData.serviceUrl+'/order/confirm',
            method: 'POST',
            data: msg,
            success: function (res) {
                console.log(res)
                that.loadOrderList()
            }
        })
    },

    orderService(){
        wx.navigateTo({
          url: '/packageB/shoppingservice/shoppingservice',
        })
    }

})