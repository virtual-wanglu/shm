// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({env: 'cluod-mrxir-caz8a'})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection(event.coll_name).where({
        del: true,
    }).remove()
  } catch(e) {
    console.error(e)
  }
}