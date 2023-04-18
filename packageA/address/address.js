var app = getApp()
Page({
    data: {
        islogin: app.globalData.userlogin,
        openid:"",
        icon_0: "/images/icon_0.png",
        icon_1: "/images/icon_1.png",
        addressList: []
    },

    onLoad(options) {
        console.log(app.globalData.userlogin)
        console.log(app.globalData.useropenId)
        this.setData({
            islogin: app.globalData.userlogin,
            openid:app.globalData.useropenId,
        })
        this.requestUserAddress()
    },

    onPullDownRefresh: function () {
        this.onRefresh();
    },

    onRefresh: function () {
        wx.showNavigationBarLoading();
        setTimeout(function () {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }, 2000);
    },
    onShow: function () {
        this.onLoad();
    },

    onUnload: function () {
        var arr = this.data.addressList;
        wx.setStorageSync('addressList', arr);
    },

    change: function (e) {
        var items = this.data.addressList;
        for (var i = 0; i < items.length; i++) {
            if (items[i].mobile == this.data.aa) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].checked && j != i) {
                        items[j].checked = false;
                    }
                }
                items[i].checked = !(items[i].checked);
            }
        }
        this.setData({
            addressList: items
        });
    },

    adduserAddress: function () {
        wx.navigateTo({
            url: '/packageB/addaddress/addaddress?openid='+this.data.openid
        });
    },

    radioChange: function (e) {
        this.data.aa = e.detail.value;
    },

    requestUserAddress(){
        var that=this
        var openid=this.data.openid
        if(openid){
            wx.request({
              url: 'http://127.0.0.1:8080/address/user',
              method:'POST',
              data:openid,
              success: function (res){
                    console.log(res)
                    that.setData({
                        addressList:res.data
                    })
              }
            })
        }
    }

})