// pages/shopping/shopping.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeKey:0,
        goods:[
          {
            id:0,
            price:"101",
            tag:"热销",
            title:"商品1",
            desc:"郑州大学文创学生用标签,郑州大学文创学生用标签,郑州大学文创学生用标签",
            image:"/goods/1-0.jpg"
          },
          {
            id:"1",
            price:"102",
            tag:"新品",
            title:"商品2",
            desc:"郑州大学文创学生用标签",
            image:"/goods/1-0.jpg"
          },
          {
            id:"2",
            price:"103",
            tag:"新品",
            title:"商品3",
            desc:"郑州大学文创学生用标签",
            image:"/goods/1-0.jpg"
          },
          {
            id:"3",
            price:"104",
            tag:"新品",
            title:"商品4",
            desc:"郑州大学文创学生用标签",
            image:"/goods/1-0.jpg"
          },
          {
            id:"4",
            price:"105",
            tag:"新品",
            title:"商品5",
            desc:"郑州大学文创学生用标签",
            image:"/goods/1-0.jpg"
          },
          {
            id:"5",
            price:"106",
            tag:"新品",
            title:"商品6",
            desc:"郑州大学文创学生用标签",
            image:"/goods/1-0.jpg"
          },
          {
            id:"6",
            price:"107",
            tag:"新品",
            title:"商品7",
            desc:"郑州大学文创学生用标签",
            image:"/goods/1-0.jpg"
          },
          {
            id:"7",
            price:"108",
            tag:"新品",
            title:"商品8",
            desc:"郑州大学文创学生用标签",
            image:"/goods/1-0.jpg"
          },
          {
            id:"8",
            price:"109",
            tag:"新品",
            title:"商品9",
            desc:"郑州大学文创学生用标签",
            image:"/goods/1-0.jpg"
          },
          {
            id:"9",
            price:"110",
            tag:"新品",
            title:"商品10",
            desc:"郑州大学文创学生用标签",
            image:"/goods/1-0.jpg"
          }
        ]
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

    toDetail:function(e){
        var dataset=e.currentTarget.dataset
        var obj=dataset.obj
        console.log(obj)
        wx.navigateTo({
            url:`/packageB/detail/detail?obj=${JSON.stringify(obj)}`,
            events: {
              // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
              acceptDataFromOpenedPage: function(data) {
                console.log(data)
              },
              someEvent: function(data) {
                console.log(data)
              }
            },
            success: function(res) {
              // 通过eventChannel向被打开页面传送数据
              res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
            }
          })
    }
})