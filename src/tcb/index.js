import { post } from "@/api/http";
import cloudbase from "@cloudbase/js-sdk";
import { reject, result } from "lodash";
const axios = require("axios")
import $config from "../../cloudbaserc";

const app = cloudbase.init({
  env: "cloud1-5gukdsmgf9c78413",
});
const auth = app.auth({
    persistence:"local"
})


let db = null;
let ticket = null

async function getTicket() {
  return new Promise((resolve,reject) => {
    axios({
      method: "post",
      url: "http://cloud1-5gukdsmgf9c78413.service.tcloudbase.com/fastApptFunction",
      data: {
        type: "login"
      }
    }).then(res=> {
      const { result } = res
      //console.log("restic:",res.data)
      resolve(res.data.ticket || "")
    }).catch(err => {
      console.log("getTicErr:",err)
    })
  })
}

async function login(){
  let loginState = await auth.getLoginState();
  //loginState = await auth.getLoginState();
  if(1){
    ticket = await getTicket()
    console.log(ticket)
    await auth.customAuthProvider().signIn(ticket);
    // new Promise(async (resolve,reject)=>{
    //   ticket =await getTicket()
    //   resolve(ticket)
    // }).then(res=>{
    //   console.log(res, '......')
    //   auth.customAuthProvider().signIn(res);
    // })
    //loginState = auth.getLoginState();
  }
  return app.database()
}

function getDB() {
  if (!db) {
    db = login();

  }
  return db;
}


export default getDB;



