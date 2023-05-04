const innerAudioContext = wx.createInnerAudioContext({
    useWebAudioImplement: true
})
const app = getApp()

Page({
    audioCtx: null,
    /**
     * 页面的初始数据
     */
    data: {
        image: "http://121.196.227.203:8000/images/map1.jpg",
        mapImage:"http://121.196.227.203:8000/images/map2.jpg",
        bottomPlayer: {
            img: "http://121.196.227.203:8000/images/audioImage/pre.png",
            audioUrl_zh: "http://121.196.227.203:8000/audios/Chinese/0-0.mp3",
            audioUrl_en: "http://121.196.227.203:8000/audios/English/0-0.mp3",
            title: "序厅",
            dec: "",
            play: false,
            language_zh: true
        },
        audiodata: [{
                id: '0',
                list: [{
                    name: '序厅',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/pre.png",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/0-0.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/0-0.mp3'
                }]
            },
            {
                id: '1',
                list: [{
                    name: '汇仁人志士 启医教之光',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/1-1.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/1-1.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/1-1.mp3'
                }, {
                    name: '独立建院 阔步前行',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/1-2.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/1-2.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/1-2.mp3'
                }, {
                    name: '迁址郑州 谱写新篇',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/1-3.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/1-3.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/1-3.mp3'
                }, {
                    name: '改革开放 蓬勃发展',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/1-4.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/1-4.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/1-4.mp3'
                }]
            },
            {
                id: '2',
                list: [{
                    name: '宏基肇造 扬帆启航',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/2-1.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/2-1.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/2-1.mp3'
                }, {
                    name: '忠诚事业 守土有责',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/2-2.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/2-2.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/2-2.mp3'
                }, {
                    name: '东方风来 姹紫嫣红',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/2-3.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/2-3.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/2-3.mp3'
                }, {
                    name: '高歌猛进 创新发展',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/2-4.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/2-4.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/2-4.mp3'
                }]
            },
            {
                id: '3',
                list: [{
                    name: '凤栖金水 学兴中州',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/3-1.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/3-1.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/3-1.mp3'
                }, {
                    name: '天道行健 奋发图强',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/3-2.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/3-2.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/3-2.mp3'
                }, {
                    name: '齐驱并进 锦绣纷披',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/3-3.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/3-3.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/3-3.mp3'
                }],
            },
            {
                id: '4',
                list: [{
                    name: '三强融铸',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/4-1.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-1.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-1.mp3'
                }, {
                    name: '科学规划',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/4-2.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-2.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-2.mp3'
                }, {
                    name: '重大突破',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/4-3.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-3.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-3.mp3'
                }, {
                    name: '硕果累累',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/4-4.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-4.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-4.mp3'
                }, {
                    name: '实景宣传片',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/4-5.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-5.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-5.mp3'
                }, {
                    name: '结束语',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/4-6.jpg",
                    src_zh: 'http://121.196.227.203:8000/audios/Chinese/4-6.mp3',
                    src_en: 'http://121.196.227.203:8000/audios/English/4-6.mp3'
                }]
            },
            {
                id: '5',
                list: [{
                    name: '中厅',
                    dec: "",
                    photo: "http://121.196.227.203:8000/images/audioImage/pre.png",
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
        this.pauseFun()
        console.log(e);
        var imgUrl = this.data.mapImage
        wx.previewImage({
            current:imgUrl,
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