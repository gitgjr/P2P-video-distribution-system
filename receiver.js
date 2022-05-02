import utils from "./utils.js"
import { io } from "socket.io-client"
import stream from "./stream.js"

import fs from "fs";

const port =3000 //3000 for sender,3001 for relay
const socket=io("ws://localhost:"+port)
const stationType="receiver"

let filename='origin'

//this is a receiver(client)

socket.emit('stationType',{stationType:stationType})
stream.clientRequestStream(socket)


socket.on('connect',function (){
    // socket.emit('requestSteam',{filename:filename},function (response){
    //
    // })
})
// socket.on('connectionEstablished',function(){
//
// })


