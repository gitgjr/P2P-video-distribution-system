import process from "child_process"
import utils from "../Utils/utils.js";

function mp4ToHLS(file,quality){
    switch (quality){
        case "high":{ //1080P
            process.exec("ffmpeg -i ./resource/"+file+" -b:v 8M -start_number 0 -hls_time 10 -hls_list_size 0 -f hls ./resource/"+utils.deleteExtension(file)+".m3u8"
            ,function (error, stdout, stderr){
                if (error){
                    console.log(error.message)
                }
                else {
                    console.log("m3u8 transform successfully")
                }
                })
            break
        }
        case "medium":{ //720P
            process.exec("ffmpeg -i ./resource/"+file+" -b:v 5M -start_number 0 -hls_time 10 -hls_list_size 0 -f hls ./resource/"+utils.deleteExtension(file)+".m3u8"
            ,function (error, stdout, stderr){
                if (error){
                    console.log(error.message)
                }
                else {
                    console.log("m3u8 transform successfully")
                }
            })
            break
        }
        case "low":{ //480P
            process.exec("ffmpeg -i ./resource/"+file+" -b:v 2.5M  -start_number 0 -hls_time 10 -hls_list_size 0 -f hls ./resource/"+utils.deleteExtension(file)+".m3u8"
                ,function (error, stdout, stderr){
                if (error){
                    console.log(error.message)
                }
                else {
                    console.log("m3u8 transform successfully")
                }
            })
            break
        }
        default:{
            console.log("Can not turn to m3u8")
        }
    }
}

export default {mp4ToHLS}