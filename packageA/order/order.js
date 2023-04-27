const app = getApp()
// packageA/order/order.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        openid: "",
        orderList: [{
                freight: "送运费险",
                imgUrl1: "http://121.196.227.203:8000/images/5-0.jpg",
                invoice: "电子发票-个人",
                number: 2,
                orderNote: "无备注",
                price: 238,
                shoppingId: 5,
                title: "车载空气消毒除味器",
                orderStatus: 1
            },
            {
                freight: "送运费险",
                imgUrl1: "http://121.196.227.203:8000/images/4-0.jpg",
                invoice: "电子发票-个人",
                number: 2,
                orderNote: "无备注",
                price: 118,
                shoppingId: 4,
                title: "郑州大学平面图抱枕",
                orderStatus: 2
            },
            {
                freight: "送运费险",
                imgUrl1: "http://121.196.227.203:8000/images/1-0.jpg",
                invoice: "电子发票-个人",
                number: 4,
                orderNote: "无备注",
                price: 100,
                shoppingId: 1,
                title: "笔记本",
                orderStatus: 3
            },
            {
                freight: "送运费险",
                imgUrl1: "http://121.196.227.203:8000/images/2-0.jpg",
                invoice: "电子发票-个人",
                number: 4,
                orderNote: "无备注",
                price: 60,
                shoppingId: 2,
                title: "鼠标垫",
                orderStatus: 4
            }
        ],
        noPayList: [],
        noSendList: [],
        sendList: [],
        confirmList: [],

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.selectList()
        // console.log(app.globalData.userlogin)
        // if (app.globalData.userlogin) {
        //     this.setData({
        //         openid: app.globalData.useropenId
        //     })
        //     this.loadOrderList()
        // } else {
        //     wx.showModal({
        //         title: '提示',
        //         content: '请登录后进入',
        //         success(res) {
        //             if (res.confirm) {
        //                 wx.navigateBack({})
        //             } else if (res.cancel) {
        //                 wx.navigateBack({})
        //             }
        //         }
        //     })
        // }
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
            url: 'http://127.0.0.1:8080/order/getOrder',
            method: 'POST',
            data: msg,
            success: function (res) {
                console.log(res)
                that.setData({
                    orderList: res.data
                })
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
            if (orderList[i].orderStatus == 1) {
                noPayList.push(orderList[i])
            }
            if (orderList[i].orderStatus == 2) {
                noSendList.push(orderList[i])
            }
            if (orderList[i].orderStatus == 3) {
                sendList.push(orderList[i])
            }
            if (orderList[i].orderStatus == 4) {
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
    }
})