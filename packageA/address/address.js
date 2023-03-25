var app=getApp()
Page({
    data: {
        islogin:"true",
        icon_0:"/images/icon_0.png",
        icon_1:"/images/icon_1.png",
        addressList: [
            {
                id:1,
                name:"王璐",
                tel:"18338280489",
                province:"河南省",
                city:"郑州市",
                district:"高新区",
                detail:"郑州大学主校区",
                isDefault:true
            },
            {
                id:2,
                name:"王璐",
                tel:"18338280489",
                province:"河南省",
                city:"郑州市",
                district:"高新区",
                detail:"郑州大学主校区",
                isDefault:false
            }
        ]
    },

    onLoad: function (options) {
        // var login = app.globalData.userlogin
        // this.setData({
        //     islogin:login
        // })
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
            url: '/packageA/addaddress/addaddress'
        });
    },

    radioChange: function (e) {
        this.data.aa = e.detail.value;
    },

    /* 删除item */
    delAddress: function (e) {
        var id = e.currentTarget.dataset.id //数组下标
        this.data.addressList.splice(id, 1);
        if (this.data.addressList.length > 0) {
            this.setData({
                addressList: this.data.addressList
            })
            wx.setStorageSync('addressList', this.data.addressList);
        } else {
            this.setData({
                addressList: this.data.addressList
            })
            wx.setStorageSync('addressList', []);
        }
    }
})