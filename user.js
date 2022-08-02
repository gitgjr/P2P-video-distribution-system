class User{
    constructor(addr,socketID,type,resources){
        this.addr = addr;
        this.socketID = socketID;
        this.type=type
        this.resources=resources //(name,size)list
    }
}
class Resources{
    constructor(file,size,project){
        this.project=project; // project name,this file belongs which project
        this.size=size;
        this.file=file; //list of names of files
    }
}

class CacheChunk{ // this is an intermediate granularity
    constructor(chunk,size,project){
        this.project=project; // project name,this chunk belongs which project
        this.chunk=chunk; //list of chunks of number
    }
}

class Progress{}


export {User,Resources}