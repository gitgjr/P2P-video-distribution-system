import { Server } from "socket.io";
import {User} from "./user.js";
import redis from "redis"
import fileUtils from "./Utils/fileUtils.js"
import utils from "./Utils/utils.js";

const port=2000
const io=new Server(port)
const nodeStoreServer=redis.createClient()//(port,ip)
await nodeStoreServer.connect()
// let nodeList=[]

io.on("connection",function (socket) {
    socket.on("addNode", function (data) {
        //add user to the list
        console.log(utils.getTime(),)
        let user = new User()
        let ip = 0
        if (socket.handshake.headers['x-forwarded-for'] != null) {
            ip = socket.handshake.headers['x-forwarded-for'];
        } else {
            ip = socket.handshake.address;
        }
        user.addr = ip
        user.socketID = socket.id
        user.type = data.stationType
        user.resource = data.resources
        console.log(utils.getTime(),user.addr,"connected")
        // nodeList.push(user)
        nodeStoreServer.hSet("userList",user.addr,JSON.stringify(user))//TODO make a random function to create userID
    })
    socket.on("requestNodeList",function (){ //send the node list to the station
        let nodeAddrList=nodeStoreServer.hGetAll("userList",function (err){
            if(err){
                console.log(err)
            }
        })
        io.emit("sendNodeList",{nodeList:nodeAddrList})
    })
})

