// packageA/test/test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        message: {
            openId: "12345678990",
            comment: "qwedjhejdjehhjd",
            tel: "18338280489"
        }
    },

    send() {
        var msg = JSON.stringify({
            /*将对象转换成json字符串形式*/
            'openId': this.data.message.openId,
            'comment': this.data.message.comment,
            'tel': this.data.message.tel
        })
        console.log(msg)
        wx.request({
            url: 'http://127.0.0.1:8080/feedback/upload',
            method: 'POST',
            data: msg,
            success(e) {
                console.log(e)
            }
        })
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

    }
})