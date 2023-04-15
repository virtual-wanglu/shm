// pages/shopping/shopping.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        activeKey:0,
        goods:[
            {
                id:1,
                price:"25",
                tag:"热销",
                title:"笔记本",
                desc:"郑州大学联名笔记本，整体色调为蓝色，右上方印有郑州大学校徽的笔记本",
                image:[
                    {url:"http://121.196.227.203:8000/images/1-0.jpg"},
                    {url:"http://121.196.227.203:8000/images/1-1.jpg"},
                    {url:"http://121.196.227.203:8000/images/1-2.jpg"}
                ]
            },
            {
                id:2,
                price:"30",
                tag:"热销",
                title:"鼠标垫",
                desc:"郑州大学联名鼠标垫，主图案是ZZU英文字母缩写，每个字母被郑州大学地标性建筑填充，充分彰显学校特色",
                image:[
                    {url:"http://121.196.227.203:8000/images/2-0.jpg"},
                    {url:"http://121.196.227.203:8000/images/2-1.jpg"},
                    {url:"http://121.196.227.203:8000/images/2-2.jpg"}
                ]
            },
            {
                id:3,
                price:"19.9",
                tag:"热销",
                title:"创意手机支架",
                desc:"郑州大学创意懒人手机支架（功夫小子款），进口榉木制作，采用人体工程学设计，缓解颈椎和背部疲劳",
                image:[
                    {url:"http://121.196.227.203:8000/images/3-0.jpg"},
                    {url:"http://121.196.227.203:8000/images/3-1.jpg"},
                    {url:"http://121.196.227.203:8000/images/3-2.jpg"}
                ]
            },
            {
                id:4,
                price:"59",
                tag:"热销",
                title:"郑州大学平面图抱枕",
                desc:"郑州大学平面图抱枕，里面装满了棉花，外面由郑州大学平面图的棉布包裹着，用来调整睡眠质量，减轻关节压力",
                image:[
                    {url:"http://121.196.227.203:8000/images/4-0.jpg"},
                    {url:"http://121.196.227.203:8000/images/4-1.jpg"},
                    {url:"http://121.196.227.203:8000/images/4-2.jpg"}
                ]
            },
            {
                id:5,
                price:"119",
                tag:"热销",
                title:"车载空气消毒除味器",
                desc:"车载空气消毒除味器，以黑色为主题，外面印着郑州大学校徽，用来净化汽车内空气中的 PM2.5、有毒有害气体（ 甲醛 、苯系物等） 、异味、细菌病毒等",
                image:[
                    {url:"http://121.196.227.203:8000/images/5-0.jpg"},
                    {url:"http://121.196.227.203:8000/images/5-1.jpg"},
                    {url:"http://121.196.227.203:8000/images/5-2.jpg"}
                ]
            },
            {
                id:6,
                price:"119",
                tag:"热销",
                title:"竹香笔筒",
                desc:"竹香笔筒，外面由刻着郑大赋的小竹条和眉湖小屋的轮廓图构成，十分大气，放在办公桌上存放各种笔",
                image:[
                    {url:"http://121.196.227.203:8000/images/6-0.jpg"},
                    {url:"http://121.196.227.203:8000/images/6-1.jpg"},
                    {url:"http://121.196.227.203:8000/images/6-2.jpg"}
                ]
            },
            {
                id:7,
                price:"109",
                tag:"热销",
                title:"文创礼盒套装",
                desc:"郑州大学文创礼盒套装，内含：郑州大学纪念笔记本，郑州大学“求是担当”书签，郑州大学钢笔",
                image:[
                    {url:"http://121.196.227.203:8000/images/7-0.jpg"},
                    {url:"http://121.196.227.203:8000/images/7-1.jpg"},
                    {url:"http://121.196.227.203:8000/images/7-2.jpg"}
                ]
            },
            {
                id:8,
                price:"368",
                tag:"热销",
                title:"纪念盘",
                desc:"郑州大学创意纪念盘摆件：手工彩绘诠释出中式气韵的高雅深邃色泽，适合摆放在书房作装饰",
                image:[
                    {url:"http://121.196.227.203:8000/images/8-0.jpg"},
                    {url:"http://121.196.227.203:8000/images/8-1.jpg"},
                    {url:"http://121.196.227.203:8000/images/8-2.jpg"}
                ]
            },
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