const API = require('../../utils/api')
const {
    user,
    token
} = require('../../utils/auth')
const app = getApp()

// pages/mine/mine.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        loading: true,
        loginStatus: false,
        userPhoto: "/images/Uphoto.png",
        userName: "啦啦啦",
        user: "",
        encryptedData: "",
        iv: "",
        tmplIds: []
    },

    loginFun() {
        var that = this
        wx.getUserProfile({
            desc: '必须授权才能使用',
            success: res => {
                let user = res.userInfo
                console.log(user)
                wx.setStorageSync('user', user)
                that.setData({
                    loginStatus: true,
                    user: user,
                    encryptedData: res.encryptedData,
                    iv: res.iv
                })
                wx.login({
                    success: (res) => {
                        if (res.code) {
                            wx.request({
                                url: 'http://121.196.227.203:8080/wx/login',
                                method: 'POST',
                                header: {
                                    'content-type': 'application/x-www-form-urlencoded',
                                },
                                data: {
                                    code: res.code,
                                    // encryptedData: encryptedData,
                                    // iv: iv,
                                },
                                success(res) {
                                    console.log(res)
                                    if (res.data.status == '200') {
                                        that.setData({
                                            loginStatus: true,
                                        })
                                    }
                                    wx.setStorageSync('token', res.data.data)
                                }
                            })
                        }
                    }
                })
            },
            fall: res => {
                console.log('失败', res)
            }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let user = wx.getStorageSync('user')
        this.setData({
            userInfo: user
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        // this.setData({
        //   loading: false,
        // });
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

    }
})