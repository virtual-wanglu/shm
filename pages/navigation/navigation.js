
Page({

    /**
     * 页面的初始数据
     */
    data: {
        markers:[{
            id:1,
            longitude:113.535677 ,
            latitude:34.812268 ,
            title:"校史馆",
            iconPath:"/images/location.png",
            width:30,   //宽
            height:30,   //高
        }],
        zzu:{
            image:"http://121.196.227.203:8000/images/xsg.png",
            title:"郑州大学校史馆",
            label:"2017年8月校史馆正式建成.校史馆坐落在主校区综合管理中心后配楼一层，总建筑面积约2400平方米，分为序厅、河南医科大学展厅（1928-2000）、郑州工业大学展厅（1963-2000）、郑州大学展厅（1956-2000）、前进中的郑州大学展厅等五个部分，展示历史照片1100余张，实物500多件，集中反映了学校各个办学时期的突出成就。"
        }
    },

    inroomnavigation(){
        wx.navigateTo({
            url: '/packageB/roomnavigation/roomnavigation'
        });
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