import promptSync from "prompt-sync" //ask question
const prompt = promptSync({sigint: true})
function selectTestVideo(){
    console.log("Which size of video do you want to select")
    console.log("1 for normal, 2 for big, 3 for giant")
     return prompt("Input your selection") //prompt(ask, value, opts)
}

function trigger(){
    console.log("what do you want to do")
    console.log("1 for connect server, 2 for request resources,  3 for ping")
    return prompt("Input your selection",0)
}

export default {selectTestVideo,trigger}