import utils from "./utils.js"
import { io } from "socket.io-client"




import fs from "fs";

const port =3001 //3000 for sender,3001 for relay
const socket=io("ws://localhost:"+port)
const stationType="receiver"


let filename="origin.mp4"

//this is a receiver(client)

socket.emit("stationType",{stationType:stationType})
socket.emit("requestStream",{filename:filename})
socket.on("sendBuffer",function (data){
    console.log("receivered buffer,writing"+data.filename)
    fs.writeFile("data/"+data.filename,data.bufferdata,function (err){
        if(err){
            console.log(err.message)
        }else{
            console.log("write successfully")
        }

    })
})

socket.on("connect", function(){

})
// socket.on('connectionEstablished',function(){
//
// })


