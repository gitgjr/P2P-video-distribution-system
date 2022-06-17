import fs from "fs"

function searchFile(filaName,stationType){
    return new Promise(function (resolve,reject){
        let path="./relayData"
        // if (stationType=="sender"){
        //     path="./resource"
        // }else{
        //     path="./relayData"
        // }
        fs.readdir(path,function (err,files){
            if(err){console.log(err.message)}
            else
            {
                console.log("read Dir: "+path)
                for (let i in files){
                    resolve(files[i]==filaName)
                }
            }
        })
    })
}

function openFile(filename){
     fs.readFile("./resource/"+filename,function (err,data){
        if(err){
            console.log(err.message)
        }
        console.log("open file successfull")
        console.log(data)

    })
    return data
}

export default {searchFile,openFile}