import redis from "redis"


function scanAll(res,redisClient){
    let cursor = 0
    redisClient.scan(cursor,"MATCH","user_info:username:*",'COUNT',"10000",(err,key)=>{
        if(err){
            throw err
        }
        cursor = key[0]
        if(cursor === '0'){
            keyarr.push(...key[1])
        }else{
            if(key[1].length !== 0){
                keyarr.push(...key[1])
            }
            return scan(res)
        }
    })
}
