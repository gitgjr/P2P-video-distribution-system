import T from "./utils.js";
import fs from "fs"
import fileUtils from "./fileUtils.js"
import U from "./user.js"


// let timestring=T.getTime()
// console.log(timestring)
console.log(T.getTime())

// let filename="origin.mp4"
// fs.readdir("./resource",function (err, files){
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(files);
//     for(let i in files){
//         console.log(files[i])
//         if(files[i]==filename){
//             console.log("true")
//             return;
//         }
//         console.log("false")
//     }
// })
// let data=fileUtils.openFile(filename)
// console.log(data)

for(let i=0;i<10;i++){
    T.sleep(1000)
    console.log(T.getTime())
    // setTimeout(function (){
    //     console.log(T.getTime())
    // },1000)
}
let judge=0
function promiseTest(judge){
    return new Promise(function (resolve,reject){
        if(judge==1){
            resolve()
        }else {
            reject()
        }
    })
}
promiseTest(judge).then(function () {
    console.log("yep")
},function (){
    console.log("nope")
})

//test json
let user= new U.User(
    addr
)




