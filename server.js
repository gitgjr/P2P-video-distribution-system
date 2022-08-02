import {io} from "socket.io-client"
import {Server} from "socket.io";
import {User} from "./user.js";


function connectTracker(io,responses,stationType){
    const socket=io("ws://localhost 2000")
    socket.emit("addNode",{resources:responses,stationType:stationType})
    socket.emit("getNodeList")
}
export default {connectTracker}



