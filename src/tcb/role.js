import getDB from "./index";


async function getCollection() {
    const db = await getDB();
    console.log(db)
    return db.collection('role');
  }
  
  // user集合获取
  async function getRoles() {
    try {
      const myCollection = await getCollection();
      console.log('myCollection:',myCollection)
      const dbData = await myCollection.get();
      console.log('dbData:',dbData)
      return dbData
    } catch (e) {
      //return getErrorData(e);
      console.log("role",e)
    }
  }

export default {
    getRoles
}