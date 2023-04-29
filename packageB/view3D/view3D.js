// packageB/view3D/view3D.js

const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        vrList:[
            "https://realsee.cn/jG66LPK5?product=realsee_vr&entry=share&refer_from=vrcapp_edit&source=link",
            "https://realsee.cn/Ml99oleg?product=realsee_vr&entry=share&refer_from=vrcapp_edit&source=link",
            "https://realsee.cn/WQYYvElm?product=realsee_vr&entry=share&refer_from=vrcapp_edit&source=link",
            "https://realsee.cn/EjwwZ0GX?refer_from=vrcapp_edit&vrAppVersion=3.14.2&product=realsee_vr&source=link#lianjia",
            "https://realsee.cn/REQQ4oME?product=realsee_vr&entry=share&refer_from=vrcapp_edit&source=link",
            "https://realsee.cn/2VMMaVmN?product=realsee_vr&entry=share&refer_from=vrcapp_edit&source=link"
        ],
        virtualUrl:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options)
        var index=options.roomId
        console.log(index)
        this.setData({
            virtualUrl:this.data.vrList[index]
        })
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