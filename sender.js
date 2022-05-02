import Utils from "./utils.js";
import {User} from "./user.js";
import { Server } from "socket.io";
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
    stream.serverSendStream(socket)
    // socket.emit('authCheck',file)
    // socket.emit('connectionEstablished')
})

