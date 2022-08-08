import utils from "./utils.js"
import { io } from "socket.io-client"


import {User} from "./user.js";
import {Server} from "socket.io";
import server from "./server.js";



const port =3000 //3000 for sender,3001 for relay //54.168.52.187 for server
const socket=io("ws://54.168.52.187:"+port)
const stationType="receiver"

let filename="origin.mp4"

//this is a receiver(client)
socket.emit("stationType",{stationType:stationType})

// let sender1=new User()
// sender1.addr=socket.handshake.address
// console.log("New socket connection from"+sender1.addr)

//ping
// console.log(utils.pingTest(socket))
let requestStreamPromise=new Promise(function(resolve,reject){
    console.log(utils.getTime(),"Request Chunk")
    socket.emit("requestStream",{filename:filename})
    resolve()
})

let chunkStartTime
requestStreamPromise.then(function(){
    chunkStartTime=Date.now()
}).then(function(){console.log(chunkStartTime)})


socket.on("sendBuffer",function (data){
    let receiveChunkPromise=new Promise(function(resolve,reject){
        if(server.clientReceiveChunk(data)){resolve()}
    })
    receiveChunkPromise.then(utils.printTimeInterval(chunkStartTime))
})

socket.on("connect", function(){
    
})
// socket.on('connectionEstablished',function(){
//
// })



