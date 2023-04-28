const innerAudioContext = wx.createInnerAudioContext({
    useWebAudioImplement: true
})

Page({
    audioCtx: null,
    /**
     * 页面的初始数据
     */
    data: {
        image: "http://121.196.227.203:8000/images/shm.jpg",
        bottomPlayer: {
            img: "",
            audioUrl_zh: "",
            audioUrl_en: "",
            title: "111",
            dec: "",
            play: false,
            language_zh: true
        },
        audiodata: [{
                id: '0',
                list: [{
                    name: '序厅',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/0-0.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/0-0.mp3'
                }]
            },
            {
                id: '1',
                list: [{
                    name: '第一展厅-1',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/1-1.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/1-1.mp3'
                }, {
                    name: '第一展厅-2',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/1-2.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/1-2.mp3'
                }, {
                    name: '第一展厅-3',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/1-3.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/1-3.mp3'
                }, {
                    name: '第一展厅-4',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/1-4.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/1-4.mp3'
                }]
            },
            {
                id: '2',
                list: [{
                    name: '第二展厅-1',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/2-1.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/2-1.mp3'
                }, {
                    name: '第二展厅-2',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/2-2.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/2-2.mp3'
                }, {
                    name: '第二展厅-3',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/2-3.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/2-3.mp3'
                }, {
                    name: '第二展厅-4',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/2-4.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/2-4.mp3'
                }]
            },
            {
                id: '3',
                list: [{
                    name: '第三展厅-1',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/3-1.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/3-1.mp3'
                }, {
                    name: '第三展厅-2',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/3-2.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/3-2.mp3'
                }, {
                    name: '第三展厅-3',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/3-3.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/3-3.mp3'
                }],
            },
            {
                id: '4',
                list: [{
                    name: '第四展厅-1',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-1.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-1.mp3'
                }, {
                    name: '第四展厅-2',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-2.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-2.mp3'
                }, {
                    name: '第四展厅-3',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-3.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-3.mp3'
                }, {
                    name: '第四展厅-4',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-4.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-4.mp3'
                }, {
                    name: '第四展厅-5',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-5.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-5.mp3'
                }, {
                    name: '第四展厅-6',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-6.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-6.mp3'
                }]
            },
            {
                id: '5',
                list: [{
                    name: '中厅',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/xsg.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/0-1.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/0-1.mp3'
                }]
            }
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {},

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function (e) {
        var obj = this.data.audiodata[0].list[0]
        console.log(obj)
        this.setData({
            'bottomPlayer.img': obj.photo,
            'bottomPlayer.audioUrl_zh': obj.src_zh,
            'bottomPlayer.audioUrl_en': obj.src_en,
            'bottomPlayer.title': obj.name,
            'bottomPlayer.dec': obj.dec,
            'bottomPlayer.lalanguage_zh':true
        })
        this.audioCtx = wx.createInnerAudioContext()
        console.log(this.data.bottomPlayer)
        this.audioCtx.src = this.data.bottomPlayer.audioUrl_zh
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
        this.audioCtx.stop()
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

    clickImg(e) {
        console.log(e);
        var imgUrl = this.data.image
        wx.previewImage({
            urls: [imgUrl],
        })
    },

    selectLanguage(){
        var language_zh=this.data.bottomPlayer.language_zh
        if(language_zh){
            this.audioCtx.src = this.data.bottomPlayer.audioUrl_zh
        }else{
            this.audioCtx.src = this.data.bottomPlayer.audioUrl_en
        }
    },

    chanageLanguageFun() {
        this.setData({
            'bottomPlayer.language_zh': !this.data.bottomPlayer.language_zh,
        })
        console.log(this.data.bottomPlayer.language_zh)
        this.selectLanguage()
        this.restartFun()
    },

    playFun() {
        this.setData({
            'bottomPlayer.play': true,
        }),
        this.selectLanguage()
        this.audioCtx.play()
    },

    pauseFun() {
        this.setData({
            'bottomPlayer.play': false,
        })
        this.audioCtx.pause()
    },

    restartFun() {
        this.setData({
            'bottomPlayer.play': true,
        })
        this.audioCtx.stop(),
        this.audioCtx.play()
    },

    selectaudio(e) {
        this.audioCtx.stop()
        console.log(e)
        var language_zh=this.data.bottomPlayer.language_zh
        var obj = e.currentTarget.dataset.obj
        this.setData({
            'bottomPlayer.img': obj.photo,
            'bottomPlayer.title': obj.name,
            'bottomPlayer.dec': obj.dec,
            'bottomPlayer.audioUrl_zh': obj.src_zh,
            'bottomPlayer.audioUrl_en': obj.src_en,
            'bottomPlayer.play': true
        })
        this.selectLanguage()
        console.log(this.data.bottomPlayer)
        this.audioCtx.play()
    }

    // audioPlay: function () {
    //     innerAudioContext.play()
    // },
    // audioPause: function () {
    //     innerAudioContext.pause()
    // },
    // audioStart: function () {
    //     InnerAudioContext.destroy(),
    //     innerAudioContext.seek(0)
    // }
})