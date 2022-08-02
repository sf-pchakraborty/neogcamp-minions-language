const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const txtOutput = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something went wrong! Try again after sometime");
}

function clickHandler() {
  let inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      txtOutput.innerText = translatedText; // output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
