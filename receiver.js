import utils from "./utils.js"
import { io } from "socket.io-client"
import dl from"delivery"

import fs from "fs";

const port =3000 //3000 for sender,3001 for relay
const socket=io("ws://localhost:"+port)
const stationType="receiver"


let filename='origin'

//this is a receiver(client)

socket.emit('stationType',{stationType:stationType})


socket.on('connect', function(){
    let delivery = new Delivery(socket);

    delivery.on('receive.start',function(fileUID){
        console.log('receiving a file!');
    })
    delivery.on('receive.success',function(file){
        fs.writeFile(file.name, file.buffer, function(err) {
            if (err) {
                console.log('File could not be saved: ' + err);
            } else {
                console.log('File ' + file.name + " saved");
            }
        })
    })
})
// socket.on('connectionEstablished',function(){
//
// })


