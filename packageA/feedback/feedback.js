 const app = getApp()

 Page({
     /**
      * 页面的初始数据
      */
     data: {
         loading: false,
         message: {
             openId: "1233312356789",
             comment: "",
             tel: "",
         }
     },

     formSubmit: function (e) {
         console.log(e)
         let that = this;
         let content = e.detail.value.opinion;
         let contact = e.detail.value.contact;
         let regPhone = /^1[3578]\d{9}$/;
         let regEmail = /^[a-z\d_\-\.]+@[a-z\d_\-]+\.[a-z\d_\-]+$/i;
         if (content == "") {
             wx.showModal({
                 title: '提示',
                 content: '反馈内容不能为空!',
             })
             return false
         }
         if (contact == "") {
             wx.showModal({
                 title: '提示',
                 content: '手机号或者邮箱不能为空!',
             })
             return false
         }
         if (contact == "" && content == "") {
             wx.showModal({
                 title: '提示',
                 content: '反馈内容,手机号或者邮箱不能为空!',
             })
             return false
         }
         if ((!regPhone.test(contact) && !regEmail.test(contact)) || (regPhone.test(contact) && regEmail.test(contact))) { //验证手机号或者邮箱的其中一个对
             wx.showModal({
                 title: '提示',
                 content: '您输入的手机号或者邮箱有误!',
             })
             return false
         } else {
             this.setData({
                 loading: true
             })

             let status = false;
             var msg = JSON.stringify({
                 /*将对象转换成json字符串形式*/
                 'openId': this.data.message.openId,
                 'comment': content,
                 'tel': contact
             })
             wx.request({
                 url: app.globalData.serviceUrl+'/feedback/upload',
                 method: 'POST',
                 data: msg,
                 success: function (res) {
                     console.log(res)
                     wx.showToast({
                         title: '反馈成功',
                         icon: 'success',
                         duration: 1000,
                         success: function (res) {
                             //提示框消失后返回上一级页面
                             setTimeout(() => {
                                 wx.navigateBack({
                                     change: true,
                                 })
                             }, 1200)
                         }
                     })
                 },
                 fail: function () {
                     wx.showToast({
                         title: '请求失败~',
                         icon: 'error',
                         duration: 1500
                     })
                 }
             })
             return status;
         }
     },

     onLoad(options) {
         console.log(app.globalData.userlogin)
         if (!app.globalData.userlogin) {
             wx.showModal({
                 title: '提示',
                 content: '请登录后进入',
                 success(res) {
                     if (res.confirm) {
                         wx.navigateBack({})
                     } else if (res.cancel) {
                         wx.navigateBack({})
                     }
                 }
             })
         }
     },
 })