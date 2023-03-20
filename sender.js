import Utils from "./Utils/utils.js";
import fileUtils from "./Utils/fileUtils.js"
import {User} from "./user.js";
import { Server } from "socket.io";
import { createServer } from "https";
import fs from "fs";
import utils from "./Utils/utils.js";
// import express from "express"

// this is a sender(server)
const port= 3000

const io =new Server(port,{maxHttpBufferSize: 1e9}) //1000MB
const stationType="sender"
let receiver1=new User()



io.on("connection",(socket) => { //Create a new socket
    console.log(utils.pingTest(socket))
    receiver1.addr=socket.handshake.address
    console.log("New socket connection from"+receiver1.addr)

    socket.on('stationType',function (data){
        receiver1.type=data.stationType
        console.log("the type is "+receiver1.type)
    })

    socket.on('ping',function (){
    })

    socket.on("requestStream",function(data){
        // if(result===true){
        fileUtils.searchFile(data.filename,stationType).then(function(){
            fs.readFile("./resource/"+data.filename,function (err,bufferdata) {
                if (err) {
                    console.log(err.message)
                }
                console.log("open file successfully")
                // console.log(bufferdata)
                
                let sendBufferPromise =new Promise(function(resolve,reject){
                    console.log(utils.getTime(),"sending buffer")
                    socket.emit("sendBuffer", {bufferdata: bufferdata, filename: data.filename})
                })
                sendBufferPromise.then(console.log(utils.getTime(),"send successfully")).then(socket.emit("sendFinish"))
                
            })
        },function (){
            console.log("no such resource")
        })
        

        // fs.readFile("./resource/"+data.filename,function (err,bufferdata){
        //     if(err){
        //         console.log(err.message)
        //     }
        //     console.log("open file successfull")
        //     // console.log(bufferdata)
        //     console.log("sending buffer")
        //     socket.emit("sendBuffer",{bufferdata:bufferdata,filename:data.filename})



        // }else{
        //     console.log("no such resource")
        // }

        // console.log(fileUtils.searchFile(data.filename))
    })
    // stream.serverSendStream(socket)

    // socket.emit('authCheck',file)
    // socket.emit('connectionEstablished')
})



