import {io} from "socket.io-client"
import {Server} from "socket.io";
import {User} from "./user.js";
import fs from "fs";


function connectTracker(io,responses,stationType){
    const socket=io("ws://localhost 2000")
    socket.emit("addNode",{resources:responses,stationType:stationType})
    socket.emit("getNodeList")
}


function clientReceiveChunk(data){
    console.log("receivered buffer,writing "+data.filename)

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

export default {connectTracker,clientReceiveChunk}

