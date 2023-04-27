// packageA/account/account.js
var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        islogin: true,
        openid: "",
        userAccount: 0,
        noticeText: "充值后请输入转账单号，充值金额一天内到账",
        rechargeOrder: {
            bill: "",
            account: ""
        },
        rechargeList: [{
                text: "10元",
                img: "http://121.196.227.203:8000/images/recharge/p10.jpg"
            },
            {
                text: "20元",
                img: "http://121.196.227.203:8000/images/recharge/p20.jpg"
            },
            {
                text: "50元",
                img: "http://121.196.227.203:8000/images/recharge/p50.jpg"
            },
            {
                text: "100元",
                img: "http://121.196.227.203:8000/images/recharge/p100.jpg"
            },
            {
                text: "200元",
                img: "http://121.196.227.203:8000/images/recharge/p200.jpg"
            },
            {
                text: "其他",
                img: "http://121.196.227.203:8000/images/recharge/pany.jpg"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            islogin: app.globalData.userlogin,
            openid: app.globalData.useropenId,
        })
        this.getUserAccount()
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

    getUserAccount() {
        var that = this
        var msg=JSON.stringify({
            openid:this.data.openid
        })
        wx.request({
            url: 'http://127.0.0.1:8080/user/getProperty',
            method: 'POST',
            data: msg,
            success: function (res) {
                console.log(res)
                that.setData({
                    userAccount:res.data
                })
            }
        })
    },

    previewImg: function (e) {
        console.log(e)
        var index = e.currentTarget.dataset.index
        var imgUrl = [this.data.rechargeList[index].img]
        wx.previewImage({
            urls: imgUrl,
            success: function (res) {},
            fail: function (res) {},
            complete: function (res) {},
        })
    },

    loseBill(e) {
        this.setData({
            ['rechargeOrder.bill']: e.detail.value
        })
    },

    loseAccount(e) {
        this.setData({
            ['rechargeOrder.account']: e.detail.value
        })
    },

    save() {
        var that = this
        var rechargeOrder = this.data.rechargeOrder
        console.log(rechargeOrder)
        if (rechargeOrder.bill != "" && rechargeOrder.account != "") {
            var msg = JSON.stringify({
                open_id: this.data.openid,
                account: rechargeOrder.account,
                billNum: rechargeOrder.bill,
                handle: 0
            })
            wx.request({
                url: 'http://127.0.0.1:8080/recharge/commit',
                method: 'POST',
                data: msg,
                success: function (res) {
                    console.log(res)
                    if (res.data == 'ok') {
                        wx.showToast({
                            icon: 'success',
                            title: '提交成功',
                        })
                    } else {
                        wx.showToast({
                            icon: 'error',
                            title: '重复提交',
                        })
                    }
                    that.setData({
                        ['rechargeOrder.bill']: "",
                        ['rechargeOrder.account']: ""
                    })
                }
            })
        } else {
            wx.showToast({
                icon: 'error',
                title: '输入内容不能为空',
            })
        }
    }
})