import {io} from "socket.io-client"
import {Server} from "socket.io";
import {User} from "./user.js";

import SocketIOFile from "socket.io-file";
import SocketIOFileClient from "socket.io-file-client"

function clientRequestStream(socket){
    let uploader = new SocketIOFileClient(socket);
    uploader.on('start', function(fileInfo) {
        console.log('Start uploading', fileInfo);
    });
    uploader.on('stream', function(fileInfo) {
        console.log('Streaming... sent ' + fileInfo.sent + ' bytes.');
    });
    uploader.on('complete', function(fileInfo) {
        console.log('Upload Complete', fileInfo);
    });
    uploader.on('error', function(err) {
        console.log('Error!', err);
    });
    uploader.on('abort', function(fileInfo) {
        console.log('Aborted: ', fileInfo);
    });

    // form.onsubmit = function(ev) {
    //     ev.preventDefault();
    //
    //     var fileEl = document.getElementById('file');
    //     var uploadIds = uploader.upload(fileEl, {
    //         data: { /* Arbitrary data... */ }
    //     });
    //
    //     // setTimeout(function() {
    //     // uploader.abort(uploadIds[0]);
    //     // console.log(uploader.getUploadInfo());
    //     // }, 1000);
    // };
}

function serverSendStream(socket){
    const dir='../video/mp4_video/origin.mp4'
    let uploader = new SocketIOFile(socket, {
        // uploadDir: {			// multiple directories
        // 	music: 'data/music',
        // 	document: 'data/document'
        // },
        uploadDir: dir,							// simple directory
        accepts: ['mp4', 'video/mp4'],		// chrome and some of browsers checking mp3 as 'audio/mp3', not 'audio/mpeg'
        maxFileSize: 4194304, 						// 4 MB. default is undefined(no limit)
        chunkSize: 10240,							// default is 10240(1KB)
        transmissionDelay: 0,						// delay of each transmission, higher value saves more cpu resources, lower upload speed. default is 0(no delay)
        overwrite: true 							// overwrite file if exists, default is true.
    });
    uploader.on('start', (fileInfo) => {
        console.log('Start uploading');
        console.log(fileInfo);
    });
    uploader.on('stream', (fileInfo) => {
        console.log(`${fileInfo.wrote} / ${fileInfo.size} byte(s)`);
    });
    uploader.on('complete', (fileInfo) => {
        console.log('Upload Complete.');
        console.log(fileInfo);
    });
    uploader.on('error', (err) => {
        console.log('Error!', err);
    });
    uploader.on('abort', (fileInfo) => {
        console.log('Aborted: ', fileInfo);
    });
}

export default {serverSendStream,clientRequestStream}