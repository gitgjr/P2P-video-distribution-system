import utils from "./utils.js";
import process from "child_process";
import A from"./adaptvieStream.js"



// async function emitSomething(){
//     console.log("test aysnc")
//     // await writeSomething()
//     setTimeout(function (){
//         console.log("emit some thing")
//         Promise.resolve("1000 ms time out")
//     },1000)
// }
// async function writeSomething(){
//     //socket.on
//     //write
//     console.log("write done")
//     Promise.resolve()
// }

// writeSomething().then(emitSomething())

console.log(utils.deleteExtension("file.mp4"))
A.mp4ToHLS("big.mp4","low")
// process.exec("cd resource")

