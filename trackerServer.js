import { Server } from "socket.io";

const port=2000
const io=new Server(port)

io.on("connection",function (socket){
    socket.on("addTracker")
    socket.on("addNode",function ())
})