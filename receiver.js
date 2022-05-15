import utils from "./utils.js"
import { io } from "socket.io-client"
import S from "./server.js"



import fs from "fs";

const port =3000 //3000 for sender,3001 for relay
const socket=io("ws://localhost:"+port)
const stationType="receiver"


let filename='origin'

//this is a receiver(client)

socket.emit('stationType',{stationType:stationType})


socket.on('connect', function(){
    S.clientRequestStream(socket)
    // uploader.on('ready', function() {
    //     console.log('SocketIOFile ready to go!');
    // });
    // uploader.on('loadstart', function() {
    //     console.log('Loading file to browser before sending...');
    // });
    // uploader.on('progress', function(progress) {
    //     console.log('Loaded ' + progress.loaded + ' / ' + progress.total);
    // });
    // uploader.on('start', function(fileInfo) {
    //     console.log('Start uploading', fileInfo);
    // });
    // uploader.on('stream', function(fileInfo) {
    //     console.log('Streaming... sent ' + fileInfo.sent + ' bytes.');
    // });
    // uploader.on('complete', function(fileInfo) {
    //     console.log('Upload Complete', fileInfo);
    // });
    // uploader.on('error', function(err) {
    //     console.log('Error!', err);
    // });
    // uploader.on('abort', function(fileInfo) {
    //     console.log('Aborted: ', fileInfo);
    // });
})
// socket.on('connectionEstablished',function(){
//
// })


