import utils from "./utils.js"
import { io } from "socket.io-client"
import input from "./input.js"
import server from "./server.js";
import test from "./test.js"



const port =3000
//3000 for sender,3001 for relay
//54.168.52.187 for Tokyo server
//18.117.72.236 for USA server
const socket=io("ws://18.117.72.236:"+port)
const stationType="receiver"



//this is a receiver(client)
socket.emit("stationType",{stationType:stationType})

let filename
// switch (input.selectTestVideo()){
//     case "1":
//         filename="origin.mp4";
//         break;
//     case "2":
//         filename="big.mp4";
//         break;
//     case "3":
//         filename="giant0.ts";
//         break;
// }
// console.log(filename)

// let sender1=new User()
// sender1.addr=socket.handshake.address
// console.log("New socket connection from"+sender1.addr)

//ping
// console.log(utils.pingTest(socket))
let requestStreamPromise=new Promise(function(resolve,reject){
    // console.log(utils.getTime(),"Request Chunk")
    // test.testBig(socket)
    test.testGiant(socket)
    // socket.emit("requestStream",{filename:filename})
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
socket.on("sendFinish",function (){
    console.log("Download task finished")
    utils.printTimeInterval(chunkStartTime)
})
socket.on("connect", function(){
    
})
// socket.on('connectionEstablished',function(){
//
// })



