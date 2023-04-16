const cloud = require('wx-server-sdk')

cloud.init({env: 'cluod-mrxir-caz8a'})
const db = cloud.database()
const xlsx = require('node-xlsx')

// 云函数入口函数
exports.main = async(event, context) => {
  try {
    let {userdata} = event
    userdata=userdata.result
    
    //1,定义excel表格名
    let dataCVS = 'data.xlsx'
    //2，定义存储数据的
    let alldata = [];
    let row = ['时间', '温度']; //表属性
    alldata.push(row);

    console.log("userdata",userdata)

    for (let key in userdata) {
      let arr = [];
      arr.push(userdata[key].time);
      arr.push(userdata[key].temp);
      alldata.push(arr)
    }
    console.log("alldata",alldata)
    //3，把数据保存到excel里
    var buffer = await xlsx.build([{
      name: "data",
      data: alldata
    }]);
    //4，把excel文件保存到云存储里
    return await cloud.uploadFile({
      cloudPath: dataCVS,
      fileContent: buffer, //excel二进制文件
    })

  } catch (e) {
    console.error(e)
    return e
  }
}