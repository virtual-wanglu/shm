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
        userInfo:null,
    },

    loginFun() {
        console.log(app.globalData.userlogin)
        var that = this
        wx.getUserProfile({
            desc: '必须授权才能使用',
            success: res => {
                that.setData({
                    userInfo: res.userInfo,
                })
                console.log(res.userInfo)
                wx.login({
                    success: (res) => {
                        if (res.code) {
                            var msg = JSON.stringify({
                                /*将对象转换成json字符串形式*/
                                'code': res.code,
                                'nick_name':this.data.userInfo.nickName,
                                'avatar_url':this.data.userInfo.avatarUrl
                            })
                            console.log(msg),
                            wx.request({
                                url: 'http://127.0.0.1:8080/wx/login',
                                method: 'POST',
                                data:msg,
                                success(res) {
                                    console.log(res)
                                    if (res.statusCode == '200') {
                                        that.setData({
                                            loginStatus: true,
                                        }),
                                        app.globalData.userlogin=true
                                        app.globalData.useropenId=res.data
                                    }
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