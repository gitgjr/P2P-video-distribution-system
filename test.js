
//test big
import server from "./server.js";

function testBig(socket){
    let innerFilename
    for (let i=0;i<=11;i++){
        innerFilename="big"+i.toString()+".ts"
        socket.emit("requestStream",{filename:innerFilename})
    }
}

//test giant
function testGiant(socket){
    socket.emit("requestStream",{filename:"giant0.ts"})
    server.clientDownloadProcess()
}
function testPartGiant(socket){
    let innerFilename
    for (let i=20;i<=21;i++){
        innerFilename="giant"+i.toString()+".ts"
        socket.emit("requestStream",{filename:innerFilename})
    }
}
function requestPromise(innerFilename,socket,i){
    return new Promise(function (resolve, reject) {
        let end=i+5
        for (i;i<=end;i++){
            innerFilename="giant"+i.toString()+".ts"
            socket.emit("requestStream",{filename:innerFilename})
        }
    })
}

export default {testBig,testGiant,testPartGiant}