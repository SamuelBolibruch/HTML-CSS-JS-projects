const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
    const heightEl = document.getElementById("height");
    const weightEl = document.getElementById("weight");

    let bmiValue = weightEl.value / (heightEl.value/100 * heightEl.value/100);

    resultEl.value = bmiValue;

    if (bmiValue < 18.5) {
        weightConditionEl.innerText = "Under weight";
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionEl.innerText = "Normal weight";
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionEl.innerText = "Overweight";
      } else if (bmiValue >= 30) {
        weightConditionEl.innerText = "Obesity";
      }
}

btnEl.addEventListener("click", calculateBMI);