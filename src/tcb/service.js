import $getDB from "./index";

async function getCollection() {
  const db = await getDB();
  return db.collection('user');
}

// user集合获取
async function getUsers() {
  try {
    const myCollection = await getCollection();
    const dbData = await myCollection.get();
    console.log(dbData)
    return dbData
  } catch (e) {
    return getErrorData(e);
  }
}


// user集合role数组中有admin的项获取,管理员获取
// async function getRoles() {
//   db.collection("user").get().where({
//     "role":"admin"
//   }).then(res=>{
//       return res.data
//   },err=>{
//     console.log(err)
//   })
// }





