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
            return false
        }else{
            console.log("write successfully")
            return true
        }
    })
}
async function clientDownloadProcess(data){
    console.log("received buffer,writing "+data.filename)
    return new Promise(function (resolve, reject){
        fs.writeFile("data/"+data.filename,data.bufferdata,function (err){
            if(err){
                console.log(err.message)
                reject(err.message)
            }else{
                console.log("write successfully")
                resolve()
            }
        })
    })
}


export default {connectTracker,clientReceiveChunk,clientDownloadProcess}

