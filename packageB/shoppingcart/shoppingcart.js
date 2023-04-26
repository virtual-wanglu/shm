const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        openid: "",
        allSelected: false,
        totalPrice: 0.00,
        shoppingCartList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this
        this.setData({
            openid: app.globalData.useropenId,
        })
        console.log(options)

        var openid = this.data.openid
        console.log(openid)
        wx.request({
            url: 'http://127.0.0.1:8080/shopping/shoppingcart',
            method: 'POST',
            data: openid,
            success: function (res) {
                console.log(res)
                that.setData({
                    shoppingCartList: res.data
                })
            }
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

    },

    showList() {
        console.log(this.data.shoppingCartList)
    },

    cancleSelect(e) {
        var index = e.currentTarget.dataset.index
        console.log(index)
        var price = this.data.shoppingCartList[index].price
        console.log(price)
        var num = this.data.shoppingCartList[index].number
        console.log(num)
        var sum = this.data.totalPrice - parseFloat(price) * num
        this.setData({
            ['shoppingCartList[' + index + '].select']: false,
            totalPrice: sum,
            allSelected: false
        })
    },

    confirmSelect(e) {
        var index = e.currentTarget.dataset.index
        console.log(index)
        var price = this.data.shoppingCartList[index].price
        var num = this.data.shoppingCartList[index].number
        var sum = this.data.totalPrice + parseFloat(price) * num
        this.setData({
            ['shoppingCartList[' + index + '].select']: true,
            totalPrice: sum
        })
    },

    cancleSelectAll() {
        var list = this.data.shoppingCartList
        var length = list.length
        for (var i = 0; i < length; i++) {
            this.setData({
                ['shoppingCartList[' + i + '].select']: false
            })
        }
        this.setData({
            allSelected: false,
            totalPrice: 0.00,
        })
    },

    selectAll() {
        var sum = 0.00
        var list = this.data.shoppingCartList
        var length = list.length
        for (var i = 0; i < length; i++) {
            this.setData({
                ['shoppingCartList[' + i + '].select']: true
            })
            var goods = list[i]
            if (goods.select) {
                var num = goods.number
                var price = parseFloat(goods.price)
                sum += price * num
            }
        }
        console.log(sum)
        this.setData({
            allSelected: true,
            totalPrice: sum,
        })
    },

    goToOrderSubmit() {
        if (!this.data.totalPrice) {
            wx.showToast({
                title: '请选择物品购买',
                icon: 'error',
                duration: 1500
            })
        } else {
            var list = this.data.shoppingCartList
            var length = list.length
            let goodsIds=[]
            let j=0;
            for (var i = 0; i < length; i++) {
                var goods = list[i]
                if (goods.select) {
                    goodsIds[j]=goods.shoppingId,
                    j=j+1
                }
            }
            var msg = JSON.stringify({
                /*将对象转换成json字符串形式*/
                'goodsIds': goodsIds,
                'price': this.data.totalPrice
            })
            wx.navigateTo({
                url: '/packageB/purchase/purchase?msg='+msg,
            })
        }
    }
})