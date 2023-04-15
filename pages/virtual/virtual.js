var wxPano = requirePlugin("wxPano")
Page({
  data:{
  },
  onReady:function(){
    wxPano.onReady = function () { //wxPano初始化完成后会触发此事件

    }
    wxPano.config({
    panolist:[{
      name:"xindamen",
      src: "https://www.aiotforest.com/pano2048-1024.jpg",
      infospots:[ //信息标记
          {
              type: "modal",
              modal: {
                  title: "wxPano",
                  content: "欢迎使用wxPano"
              },
              position: { x: 0.092, y: 0.434 },
              size: 1,
              icon: "info",
              bindcamera:true,
              bindsize: 0.5,
              bindicon: "info",
              bindopacity:0.75,
              bindposition: { x: 0.5, y: 0.75 }
          },
          {
              type: "page",
              page: function(){
                  wx.navigateTo({url: "ar",
                      success(evt) {
                          console.log(evt);
                      }
                  })
              },
              position: { x: 0.437, y: 0.447 },
              size: 1,
              icon: "info"
          }
      ]
    }],
    request:wx.request,
    loader:"GLLoader",
    entryname:"xindamen"});
  },
  covertap:function(){
    var panoId=wxPano.addPano({
      name: "dongdamen",
      src: 'https://www.aiotforest.com/pano-1-2048-1024.jpg',
      infospots: [{
        type: "pano",
        entryname: "xindamen",
        position: { x: 0.695, y: 0.503 },
        size: 1,
        icon: "arrow"
      }, {
        type: "modal",
        modal: {
          title: "东大门",
          content: "对面有公交站和唐家湾轻轨站"
        },
        position: { x: 0.092, y: 0.434 },
        size: 1,
        icon: "info"
      }]
    });
    wxPano.navigateMethod({
      type: "pano",
      entryname: "dongdamen"
    });
  },
  setCameraLookAt:function(){
    wxPano.setCameraLookAt({
      x: 0.5, y: 0.5
    })
  },
  enableTouch:function(){
    wxPano.enableTouch();
  },
  disableTouch: function () {
    wxPano.disableTouch();
  },
  getPanoInfo: function () {
    console.log(wxPano.getPanoInfo());
  }
})