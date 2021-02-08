var translateButton = document.querySelector("#translate-button");
translateButton.addEventListener("click", clickHandler)

var translateInput = document.querySelector("#translate-input");

var translateOutput = document.querySelector("#translate-output");

var url = "https://api.funtranslations.com/translate/minion.json"

function clickHandler(event) {

    var input = translateInput.value;

    var finalURL = constructURL(input);
    
    fetch(finalURL)
        .then(response => response.json())
        .then(json => {
            translateOutput.innerText = json.contents.translated;
        })
        .catch(() => alert("error occured"))
    
}

function constructURL(inputText) {
    var encodedURI = encodeURI(inputText);
    return `${url}?text=${encodedURI}`;
}