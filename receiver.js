import utils from "./utils.js"
import { io } from "socket.io-client"
import fs from "fs";

import {User} from "./user.js";
import {Server} from "socket.io";



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

socket.emit("requestStream",{filename:filename})
socket.on("sendBuffer",function (data){
    console.log("receivered buffer,writing "+data.filename)

    fs.writeFile("data/"+data.filename,data.bufferdata,function (err){
        if(err){
            console.log(err.message)
        }else{
            console.log("write successfully")
        }
    socket.on()

    })
})

socket.on("connect", function(){

})
// socket.on('connectionEstablished',function(){
//
// })



