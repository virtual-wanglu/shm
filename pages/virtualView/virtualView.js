// pages/virtualView/virtualView.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imageList:[
            "http://121.196.227.203:8000/images/roomImage/door.jpg",
            "http://121.196.227.203:8000/images/roomImage/pre.jpg",
            "http://121.196.227.203:8000/images/roomImage/first.jpg",
            "http://121.196.227.203:8000/images/roomImage/second.jpg",
            "http://121.196.227.203:8000/images/roomImage/third.jpg",
            "http://121.196.227.203:8000/images/roomImage/mid.jpg",
            "http://121.196.227.203:8000/images/roomImage/four.jpg"
        ],
        gridInfoList: [{
                icon : "http://121.196.227.203:8000/images/roomImage/pre.jpg",
                text : "序厅"
            },
            {
                icon : "http://121.196.227.203:8000/images/roomImage/first.jpg",
                text : "第一展厅"
            },
            {
                icon : "http://121.196.227.203:8000/images/roomImage/second.jpg",
                text : "第二展厅"
            },
            {
                icon : "http://121.196.227.203:8000/images/roomImage/third.jpg",
                text : "第三展厅"
            },
            {
                icon : "http://121.196.227.203:8000/images/roomImage/mid.jpg",
                text : "中厅"
            },
            {
                icon : "http://121.196.227.203:8000/images/roomImage/four.jpg",
                text : "第四展厅"
            },
        ],
        videoSrcList:[
            "http://121.196.227.203:8000/videos/pre.mp4",
            "http://121.196.227.203:8000/videos/first.mp4",
            "http://121.196.227.203:8000/videos/second.mp4",
            "http://121.196.227.203:8000/videos/third.mp4",
            "http://121.196.227.203:8000/videos/mid.mp4",
            "http://121.196.227.203:8000/videos/four.mp4",
        ],
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

    },

    gotToDetail(e) {
        console.log(e)
        var index=e.currentTarget.dataset.index
        var msg=JSON.stringify({
            roomId:index,
            videoUrl:this.data.videoSrcList[index],
        })
        wx.navigateTo({
            url: '/packageB/virtualdetail/virtualdetail?msg='+msg,
        })
    }
})