import utils from "./utils.js"
import { io } from "socket.io-client"

import fs from "fs";

const port =3001
const socket=io("ws://localhost:"+port)
const stationType="receiver"

let filename='origin'

//this is a receiver(client)

socket.emit('stationType',{stationType:stationType})


socket.on('connect',function (){
    // socket.emit('requestSteam',{filename:filename},function (response){
    //
    // })
})
// socket.on('connectionEstablished',function(){
//
// })


