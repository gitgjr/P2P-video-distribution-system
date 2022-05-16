import {io} from "socket.io-client"
import {Server} from "socket.io";
import {User} from "./user.js";
import SocketIOFile from "socket.io-file"
import SocketIOFileClient from "socket.io-file-client"
import utils from "./utils.js"


function clientRequestStream(socket){
    let uploader = new SocketIOFileClient(socket);
    // let form =document.getElementById('form')
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

    let data=utils.selectFile()
    let uplaodIds=uploader.upload(data)
    // let uploadIds=uploader.upload(data,{
    //     data: { /* Arbitrary data... */ }
    // })
    // form.onsubmit = function(ev) {
    //     ev.preventDefault();
    //
    //     var fileEl = document.getElementById('file');
    //     var uploadIds = uploader.upload(fileEl, {
    //         data: { /* Arbitrary data... */ }
    //     });

        // setTimeout(function() {
        // uploader.abort(uploadIds[0]);
        // console.log(uploader.getUploadInfo());
        // }, 1000);
    // };
}

function serverSendStream(socket){
    let count = 0;
    let uploader = new SocketIOFile(socket, {
        // uploadDir: {			// multiple directories
        // 	music: 'data/music',
        // 	document: 'data/document'
        // },
        uploadDir: 'data',							// simple directory
        // accepts: ['audio/mpeg', 'audio/mp3'],		// chrome and some of browsers checking mp3 as 'audio/mp3', not 'audio/mpeg'
        // maxFileSize: 4194304, 						// 4 MB. default is undefined(no limit)
        chunkSize: 10240,							// default is 10240(1KB)
        transmissionDelay: 0,						// delay of each transmission, higher value saves more cpu resources, lower upload speed. default is 0(no delay)
        overwrite: false, 							// overwrite file if exists, default is true.
        // rename: function(filename) {
        // 	var split = filename.split('.');	// split filename by .(extension)
        // 	var fname = split[0];	// filename without extension
        // 	var ext = split[1];

        // 	return `${fname}_${count++}.${ext}`;
        // }
        // rename: 'MyMusic.mp3'
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
