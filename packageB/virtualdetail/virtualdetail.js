function getRandomColor() {
    let rgb = []
    for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16)
        color = color.length == 1 ? '0' + color : color
        rgb.push(color)
    }
    return '#' + rgb.join('')
}


Page({
    videoCtx: null,
    /**
     * 页面的初始数据
     */

    data: {
        roomId: 0,
        videoSrc: "",
        placeholder: "说点什么吧",
        inputValue: "",
        currentTime: 0,
        danmuList: [],
        danmu: {
            text: "",
            color: "",
            time: "",
        },
        imageList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options)
        let obj = JSON.parse(options.msg);
        this.setData({
            roomId: obj.roomId,
            videoSrc:obj.videoUrl
        })
        this.loadImages()
        this.danmuList()
        console.log(this.data.danmuList)
    },

    loadImages() {
        var that = this
        var msg = JSON.stringify({
            roomId: this.data.roomId
        })
        wx.request({
            url: 'http://127.0.0.1:8080/images/getImages',
            method: 'POST',
            data: msg,
            success: function (res) {
                console.log(res)
                that.setData({
                    imageList: res.data
                })
            }
        })
    },

    danmuList() {
        var that = this
        var room_id = JSON.stringify(this.data.roomId)
        wx.request({
            url: 'http://127.0.0.1:8080/danmu/getDanMu',
            method: 'POST',
            data: room_id,
            success: function (res) {
                console.log(res)
                that.setData({
                    danmuList: res.data
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.videoCtx = wx.createVideoContext('video')
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
    onUnload() {},

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


    gotoVR() {
        var roomId=this.data.roomId
        console.log(roomId)
        wx.navigateTo({
            url: '/packageB/view3D/view3D?roomId='+roomId,
        })
    },

    bindInputBlur: function (e) {
        this.data.inputValue = e.detail.value
    },

    timeupdate(e) {
        console.log(e)
        var time = e.detail.currentTime
        this.setData({
            currentTime: time
        })
    },

    bindSendDanmu: function (e) {
        var that = this
        this.videoCtx.sendDanmu({
            text: this.data.inputValue,
            color: getRandomColor()
        })
        this.setData({
            ['danmu.text']: this.data.inputValue,
            ['danmu.color']: getRandomColor(),
            ['danmu.time']: this.data.currentTime
        })
        var msg = JSON.stringify({
            roomId: that.data.roomId,
            danmuText: that.data.danmu.text,
            danmuColor: that.data.danmu.color,
            danmuTime: that.data.danmu.time
        })
        wx.request({
            url: 'http://127.0.0.1:8080/danmu/inputDanMu',
            method: 'POST',
            data: msg,
            success: function (res) {
                console.log(res)
                that.setData({
                    inputValue: ""
                })
            }
        })
    },
    showDanmu() {
        console.log(this.data.danmu)
        console.log(this.data.danmuList)
    },

    previewImg: function (e) {
        var current = this.data.imageList[0]
        console.log(e)
        var imgUrls = this.data.imageList
        wx.previewImage({
            current: current,
            urls: imgUrls,
            success: function (res) {},
            fail: function (res) {},
            complete: function (res) {},
        })
    },
})