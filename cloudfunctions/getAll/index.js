// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({env: 'cluod-mrxir-caz8a'})
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  let count =await getCount(event.coll_name);
  count = count.total;
  let list = []
  for (let i = 0; i < count; i += 100) {//自己设置每次获取数据的量
    list = list.concat(await getList(event.coll_name,i));
  }
  console.log(list)
  return list;
}
async function getCount(coll_name) {//获取数据的总数，这里记得设置集合的权限
  let count = await db.collection(coll_name).where({
    del: true,
  }).count();
  return count;
}
async function getList(coll_name,skip) {//分段获取数据
  let list = await db.collection(coll_name).where({
    del: true,
  }).skip(skip).get()
  return list.data;
}