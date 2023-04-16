const cloud = require('wx-server-sdk')

cloud.init({env: 'cluod-mrxir-caz8a'})

// 云函数入口函数
exports.main = async (event, context) => {
  const res = await cloud.downloadFile({
    fileID: event.fileID,
  })
  const buffer = res.fileContent
  return buffer.toString('utf8')
}