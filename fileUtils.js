import fs from "fs"

function searchFile(filaName,stationType){
    return new Promise(function (resolve,reject){
        // console.log(filaName)
        let path="./relayData"
        let judge=0
        if (stationType=="sender"){
            path="./resource"
        }else{
            path="./relayData"
        }
        fs.readdir(path,function (err,files){
            if(err){console.log(err)}
            else
            {
                // console.log("read Dir: "+path)
                for (let i in files){
                    // console.log(String(files[i]))
                    if(String(files[i])==filaName){
                        judge=1
                    }
                }
                // console.log(judge)
                if (judge==1){
                    console.log("find file "+filaName)
                    resolve()
                }else{
                    console.log("not find file "+filaName)
                    reject()
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

function readJson(){
    const jsonObject = JSON.parse(fs.readFileSync('./input.json', 'utf8'));
    const result = {};

    jsonObject.list.forEach((obj) => {
        result[obj.id] = obj;
    });
    return result
}

function writeJson(obj){
    fs.writeFileSync('./output.json', JSON.stringify(obj));
}

export default {searchFile,openFile,writeJson,readJson}