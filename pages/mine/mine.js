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
        userInfo: null,
    },

    loginFun() {
        console.log(app.globalData.userlogin)
        var that = this
        wx.getUserProfile({
            desc: '必须授权才能使用',
            success: res => {
                // that.setData({
                //     userInfo: res.userInfo,
                // })
                //app.globalData.userInfo = res.userInfo
                var userInfo = res.userInfo
                console.log(res.userInfo)
                wx.login({
                    success: (res) => {
                        if (res.code) {
                            var msg = JSON.stringify({
                                /*将对象转换成json字符串形式*/
                                'code': res.code,
                                'nick_name': userInfo.nickName,
                                'avatar_url': userInfo.avatarUrl
                            })
                            console.log(msg),
                                wx.request({
                                    url: app.globalData.serviceUrl + '/user/login',
                                    method: 'POST',
                                    data: msg,
                                    success(res) {
                                        console.log(res)
                                        if (res.statusCode == '200') {
                                            that.setData({
                                                    loginStatus: true,
                                                    userInfo: res.data,
                                                }),
                                            app.globalData.userlogin = true
                                            app.globalData.useropenId = res.data.open_id
                                            app.globalData.userInfo = res.data
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
    },

    getUserInfo(){
        var that=this
        var msg = JSON.stringify({
            'openid': app.globalData.useropenId,
        })
        wx.request({
            url: app.globalData.serviceUrl + '/user/getInfo',
            method: 'POST',
            data: msg,
            success(res) {
                console.log(res)
                that.setData({
                    userInfo:res.data
                })
                app.globalData.userInfo=res.data
            }
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
        if (app.globalData.userlogin) {
            // this.getUserInfo()
            this.setData({
                userInfo:app.globalData.userInfo
            })
        }
        console.log(this.data.userInfo)
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