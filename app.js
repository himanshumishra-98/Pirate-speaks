let speakButton = document.querySelector("#speak-button");

let speakInput = document.querySelector("#speak-input");

let speakOutput = document.querySelector("#speak-output");

let url = "	https://api.funtranslations.com/translate/pirate.json";

function getURL(text){
    return url + "?" + "text=" + text;
}

function errHandle(error) {
    console.log("Err :",error);
    console.log("Some server problem");
}

function translatePirates(){
    let text = speakInput.value;
    fetch(getURL(text))
    .then(response => response.json())
    .then(json => speakOutput.innerText = json.contents.translated)
    .catch(errHandle(error))
}

speakButton.addEventListener("click",translatePirates);