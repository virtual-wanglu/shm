// app.js
//秘钥：5bb01c11a1d82f2d9cea97c6e5180128
App({
    onLaunch() {
        // wx.cloud.init({
        //     env: "wanglu-shm-0g83lfjt5b356a5f"
        // })
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

       
    },
    globalData: {
        //serviceUrl:"http://121.196.227.203:8080",
        serviceUrl:"http://127.0.0.1:8080",
        userlogin: false,
        userInfo: null,
        useropenId:""
    }
})