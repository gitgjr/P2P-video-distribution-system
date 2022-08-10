
//test big
function testBig(socket){
    let innerFilename
    for (let i=0;i<=11;i++){
        innerFilename="big"+i.toString()+".ts"
        socket.emit("requestStream",{filename:innerFilename})
    }
}

//test giant
function testGiant(socket){
    let innerFilename
    for (let i=0;i<=21;i++){
        innerFilename="giant"+i.toString()+".ts"
        socket.emit("requestStream",{filename:innerFilename})
    }
}

export default {testBig,testGiant}