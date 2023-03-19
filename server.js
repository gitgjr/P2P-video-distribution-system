import {io} from "socket.io-client"
import {Server} from "socket.io";
import {User} from "./user.js";
import fs from "fs";
import fileUtils from "./Utils/fileUtils.js";


function connectTracker(io,stationType){ //the resources client have
    const tracker=io("ws://localhost:2000")
    tracker.emit("addNode",{resources:fileUtils.scanResources(stationType),stationType:stationType})
    tracker.emit("getNodeList")
    tracker.on("sendNodeList",function(data){
        return data
    })
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
async function clientDownloadProcess(data,socket){ //muti file download
    for(let i=1;i<=5;i++){
        await clientReceiveChunk(data)
        let innerFilename="giant"+i.toString()+".ts"
        socket.emit("requestStream",{filename:innerFilename})
    }
}


export default {connectTracker,clientReceiveChunk,clientDownloadProcess}

