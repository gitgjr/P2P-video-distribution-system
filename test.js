import T from "./utils.js";
import fs from "fs"
import fileUtils from "./fileUtils.js"


// let timestring=T.getTime()
// console.log(timestring)
console.log(T.getTime())
let filename="origin.mp4"
fs.readdir("./resource",function (err, files){
    if (err) {
        console.log(err);
        return;
    }
    console.log(files);
    for(let i in files){
        console.log(files[i])
        if(files[i]==filename){
            console.log("true")
            return;
        }
        console.log("false")
    }
})
let data=fileUtils.openFile(filename)
console.log(data)


