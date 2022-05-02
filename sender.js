import Utils from "./utils.js";
import {User} from "./user.js";
import { Server } from "socket.io";
import dl from "delivery";
import stream from "./stream.js";

// this is a sender(server)
const port= 3000
const io =new Server(port)
const stationType="sender"
let receiver1=new User()

io.on("connection",(socket) => { //Create a new socket
    receiver1.addr=socket.handshake.address
    console.log("New socket connection from"+receiver1.addr)

    socket.on('stationType',function (data){
        receiver1.type=data.stationType
        console.log("the type is "+receiver1.type)
    })
    let delivery = dl.listen(socket);
    delivery.on('delivery.connect',function(delivery){

        delivery.send({
            name: 'origin.mp4',
            path : '../video/mp4_video/origin.mp4',
            params: {foo: 'bar'}
        });

        delivery.on('send.success',function(file){
            console.log('File successfully sent to client!');
        });

    });
    // stream.serverSendStream(socket)

    // socket.emit('authCheck',file)
    // socket.emit('connectionEstablished')
})

