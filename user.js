class User{
    constructor(addr,socketID,type,resources){
        this.addr = addr;
        this.socketID = socketID;
        this.type=type
        this.resources=resources //(name,size)list
    }
}
class Resources{
    constructor(filename,size,project){
        this.project=project; // this file belongs which project
        this.size=size;
        this.filename=filename;
    }
}


export {User,Resources}