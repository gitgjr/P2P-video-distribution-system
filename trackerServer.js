import { Server } from "socket.io";
import {User} from "./user.js";

const port=2000
const io=new Server(port)

io.on("connection",function (socket){
    socket.on("addNode",function (data){
        //add user to the list
        let user=new User.User()
        let ip=0
        if(socket.handshake.headers['x-forwarded-for'] != null){
            ip = socket.handshake.headers['x-forwarded-for'];
        }else{
            ip = socket.handshake.address;
        }
        user.addr=ip
        user.socketID=socket.id
        user.type=data.stationType
        user.resource=data.resources //function of scanning the resources mada

    })
)
    socket.on("getNodeList",function (){
        //send the node list to the station

    })
})
