import Utils from "./utils.js";
import fileUtils from "./fileUtils.js"
import {User} from "./user.js";
import { Server } from "socket.io";
import fs from "fs";
// import express from "express"

// this is a sender(server)
const port= 3000
const io =new Server(port)
const stationType="sender"
let receiver1=new User()

io.on("connection",(socket) => { //Create a new socket
    receiver1.addr=socket.handshake.address
    console.log("New socket connection from"+receiver1.addr)

    socket.on('stationType',function (data){
        receiver1.type=data.stationType
        console.log("the type is "+receiver1.type)
    })
    socket.on("requestStream",function(data){
        fileUtils.searchFile(data.filename).then(function (result) {
            if(result===true){
                fs.readFile("./resource/"+data.filename,function (err,bufferdata){
                    if(err){
                        console.log(err.message)
                    }
                    console.log("open file successfull")
                    // console.log(bufferdata)
                    console.log("sending buffer")
                    socket.emit("sendBuffer",{bufferdata:bufferdata,filename:data.filename})
                })


            }else{
                console.log("no such resource")
            }
        })
        // console.log(fileUtils.searchFile(data.filename))
    })
    // stream.serverSendStream(socket)

    // socket.emit('authCheck',file)
    // socket.emit('connectionEstablished')
})

