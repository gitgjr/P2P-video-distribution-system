import {io} from "socket.io-client"
import {Server} from "socket.io";
import {User} from "./user.js";
import fs from "fs";


function connectTracker(io,responses,stationType){
    const socket=io("ws://localhost 2000")
    socket.emit("addNode",{resources:responses,stationType:stationType})
    socket.emit("getNodeList")
}


async function clientReceiveChunk(data){
    console.log("received buffer,writing "+data.filename)

    fs.writeFile("data/"+data.filename,data.bufferdata,function (err){
        if(err){
            console.log(err.message)
            Promise.reject(err.message)
        }else{
            console.log("write successfully")
            Promise.resolve()
        }
    })
}
async function clientDownloadProcess(data,socket){
    for(let i=1;i<=5;i++){
        await clientReceiveChunk(data)
        let innerFilename="giant"+i.toString()+".ts"
        socket.emit("requestStream",{filename:innerFilename})
    }
}


export default {connectTracker,clientReceiveChunk,clientDownloadProcess}

