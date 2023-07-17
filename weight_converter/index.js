const inputEl = document.getElementById("input");
const outputEl = document.getElementById("result");
const errorEl = document.getElementById("error");

let errorTime;
let resultTime

function updateResult() {
    if(inputEl.value <= 0 || isNaN(inputEl.value)) {
        errorEl.innerText = "Enter valid number please!"
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            inputEl.innerText = "";
            errorEl.innerText = "";
        }, 1500)
    } else {
        outputEl.innerText = (inputEl.value * 0.45359237).toFixed(2);
        clearTimeout(resultTime);
        resultTime = setTimeout(() => {
            inputEl.innerText = "";
            errorEl.innerText = "";
        }, 8000)
    }
}

inputEl.addEventListener("input", updateResult);