import fs from "fs"

function searchFile(filaName){
    return new Promise(function (resolve,reject){
        fs.readdir("./resource",function (err,files){
            if(err){console.log(err.message)}
            else
            {
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
        callback(data)
    })
    return data
}

export default {searchFile,openFile}