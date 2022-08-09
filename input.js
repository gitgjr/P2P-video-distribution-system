import promptSync from "prompt-sync"
const prompt = promptSync({sigint: true})
function selectTestVideo(){
    console.log("Which size of video do you want to select")
    console.log("1 for normal, 2 for big, 3 for giant")
     return prompt("Input your selection ")
}

export default {selectTestVideo}