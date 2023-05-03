const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'


const app = getApp()

Page({
    data: {
        avatarUrl: defaultAvatarUrl,
        nickName: ""
    },

    onLoad(option) {
    },

    onChooseavatar(e) {
        console.log(e)
        this.setData({
            avatarUrl: e.detail.avatarUrl
        })
    },
    bindblur(e) {
        console.log(e)
        this.setData({
            nickName: e.detail.value // 获取微信昵称
        })
    },
    bindinput(e) {
        console.log(e)
        this.setData({
            nickName: e.detail.value //这里要注意如果只用blur方法的话用户在输入玩昵称后直接点击保存按钮，会出现修改不成功的情况。
        })
    },

    onSubmit() {
        var that = this
        var userInfo = {
            nickName: this.data.nickName,
            avatarUrl: this.data.avatarUrl
        }
        app.globalData.userInfo = userInfo
        var msg = JSON.stringify({
            openid: app.globalData.useropenId,
            nickName: this.data.nickName,
            avatarUrl: this.data.avatarUrl
        })
        wx.request({
            url: app.globalData.serviceUrl + '/user/changeInfo',
            method: 'POST',
            data: msg,
            success: function (res) {
                app.globalData.userInfo=res.data
                wx.showModal({
                    title: '保存成功',
                    content: '',
                    complete: (res) => {
                        if (res.cancel) {

                        }
                        if (res.confirm) {
                            wx.navigateBack()
                        }
                    }
                })
            }
        })
    }
})