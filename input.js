import promptSync from "prompt-sync" //ask question
const prompt = promptSync({sigint: true})
function selectTestVideo(){
    console.log("Which size of video do you want to select")
    console.log("1 for normal, 2 for big, 3 for giant")
     return prompt("Input your selection") //prompt(ask, value, opts)
}

export default {selectTestVideo}