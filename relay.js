import {io} from "socket.io-client"
import {Server} from "socket.io";
import {User} from "./user.js";
import fileUtils from "./Utils/fileUtils.js";
import fs from "fs";

const selfPort=3001
const server=new Server(selfPort)
const senderPort=3000
const socket=io("ws://localhost:"+senderPort)

const stationType="relay"
let filename="origin.mp4"

let receiver1= new User
let sender1=new User

//sender part

server.on("connection",(socket) => { //Create a new socket
    receiver1.addr=socket.handshake.address
    console.log("New socket connection from"+receiver1.addr)

    socket.on('stationType',function (data){
        receiver1.type=data.stationType
        console.log("the type is "+receiver1.type)
    })
    //TODO: Setup relayData index
    socket.on("requestStream",function(data){
        fs.readFile("./relayData/"+data.filename,function (err,bufferdata){
            if(err){
                console.log(err.message)
            }else {
                console.log("open file successfully")
                // console.log(bufferdata)
                console.log("sending buffer")
                socket.emit("sendBuffer", {bufferdata: bufferdata, filename: data.filename})
            }
        })

    })
    // socket.emit('authCheck',file)
    // socket.emit('connectionEstablished')
})

// receiver part
socket.emit('stationType',{stationType:stationType})
socket.emit("requestStream",{filename:filename})
socket.on("sendBuffer",function (data){
    console.log("receivered buffer,writing"+data.filename)
    fs.writeFile("relayData/"+data.filename,data.bufferdata,function (err){
        if(err){
            console.log(err.message)
        }else{
            console.log("write successfully")
        }
    })
})
socket.on('connect',function (){

})