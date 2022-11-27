import utils from "./utils.js";
import process from "child_process";
import A from"./adaptvieStream.js"
import {User} from "./user.js"
import redis from "redis";


// async function emitSomething(){
//     console.log("test aysnc")
//     // await writeSomething()
//     setTimeout(function (){
//         console.log("emit some thing")
//         Promise.resolve("1000 ms time out")
//     },1000)
// }
// async function writeSomething(){
//     //socket.on
//     //write
//     console.log("write done")
//     Promise.resolve()
// }

// writeSomething().then(emitSomething())

// console.log(utils.deleteExtension("file.mp4"))
// A.mp4ToHLS("big.mp4","low")
// process.exec("cd resource")

const nodeStoreServer=redis.createClient(6379)//(port,ip)
let user=new User(123,456,"relay","video")
await nodeStoreServer.connect()
await nodeStoreServer.set("key1","value1",function (err){
    if(err){
        console.log(err)
    }else{
        console.log("redis write in successfully")
    }
})
await nodeStoreServer.hSet("key2","field2","v2",function (){
    if(err){
        console.log(err)
    }
})
await nodeStoreServer.hSet("key2","field3","v3",function (){
    if(err){
        console.log(err)
    }
})
let list =await nodeStoreServer.keys("*")
console.log(list)//list is object
let list2 =await nodeStoreServer.hGetAll("key2")
console.log(list2,list2.field2)
// nodeStoreServer.hSet(user.addr, "id",user.socketID).then(function (){
//     console.log("redis store successfully")
// })

// nodeStoreServer.keys("*")