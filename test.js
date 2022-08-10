
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
    let innerFilename="giant"
    requestPromise(innerFilename,socket,0).then(requestPromise(innerFilename,socket,6)).then(requestPromise(innerFilename,socket,11)).then(requestPromise(innerFilename,socket,16))
}
function testPartGiant(socket){
    let innerFilename
    for (let i=0;i<=4;i++){
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
        resolve()
    })
}

export default {testBig,testGiant}