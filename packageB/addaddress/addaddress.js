// miniprogram/pages/new-address/index.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        openid: "",
        id: 0,
        userName: '',
        telNumber: '',
        region: ['河南省', '郑州市', '二七区'],
        detailInfo: '',
        isDefault: 0
    },


    onLoad(options) {
        console.log(options.openid)
        this.setData({
            openid: options.openid
        })
    },
    /**
     * 保存地址
     */

    save() {
        let openid = this.data.openid
        let userName = this.data.userName
        let telNumber = this.data.telNumber
        let detailInfo = this.data.detailInfo
        let region = this.data.region

        if (!userName || !telNumber || !detailInfo) {
            wx.showModal({
                title: '数据项不能为空',
            })
            return
        }
        if (!/[\d-]{11,18}/.test(telNumber)) {
            wx.showModal({
                title: '电话格式错误',
            })
            return
        }
        var addressInfo = JSON.stringify({
            /*将对象转换成json字符串形式*/
            'open_id': openid,
            'userName': userName,
            'telNumber': telNumber,
            'province': region[0],
            'city': region[1],
            'county': region[2],
            'detailInfo': detailInfo,
            'isDefault': this.data.isDefault,

        })
        wx.request({
            url: app.globalData.serviceUrl+'/address/add',
            method: 'POST',
            data: addressInfo,
            success: function (res) {
                console.log(res)
                if(res.statusCode=="200"){
                    wx.navigateBack()
                }
            }
        })
    },
    //    save(e){
    //       // let data = this.data 
    //       let userName = this.data.userName
    //       let telNumber = this.data.telNumber
    //       let detailInfo = this.data.detailInfo
    //       let region = this.data.region
    //       let id = this.data.id 

    //       if (!userName || !telNumber || !detailInfo){
    //         wx.showModal({
    //           title: '数据项不能为空',
    //         })
    //         return 
    //       }
    //       if (!/[\d-]{11,18}/.test(telNumber)){
    //         wx.showModal({
    //           title: '电话格式对吗？',
    //         })
    //         return 
    //       }
    //       let data = {
    //         userName,
    //         telNumber,
    //         detailInfo,
    //         region,
    //         id
    //       }
    //       let method = id ? 'put' : 'post'
    //       let res = await wx.wxp.request4({
    //         url:'http://localhost:3000/user/my/address',
    //         method,
    //         data
    //       })
    //       if (res.data.msg == 'ok'){
    //         let opener = this.getOpenerEventChannel()
    //         let address = this.data 
    //         if (!id) address.id = res.data.data.id 
    //         opener.emit("savedNewAddress", address)
    //         wx.navigateBack({
    //           delta: 1,
    //         })
    //       }else{
    //         wx.showToast({
    //           title: '添加失败，是否电话重复了？',
    //         })
    //       }
    //     },
    /**
     * 省市区选择改变
     */
    bindRegionChange: function (e) {
        this.setData({
            region: e.detail.value
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let opener = this.getOpenerEventChannel()
        opener.on("editAddress", address => {
            this.setData({
                userName: address.userName,
                telNumber: address.telNumber,
                detailInfo: address.detailInfo,
                region: address.region,
                id: address.id
            })
        })
    },
})