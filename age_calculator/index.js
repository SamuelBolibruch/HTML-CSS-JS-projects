const birthdayEl = document.getElementById("birthday");
const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");

function setAgeOnWebsite() {
    const birthdayValue = birthdayEl.value;
    if (birthdayValue === "") {
        alert("Please enter your birthday");
    } else {
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"}`;
    }
}
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    const hasBirthdayPassed = currentDate.getMonth() > birthdayDate.getMonth() ||
        (currentDate.getMonth() === birthdayDate.getMonth() && currentDate.getDate() >= birthdayDate.getDate());

    if (!hasBirthdayPassed) {
        age--;
    }

    return age;
}


btnEl.addEventListener("click", setAgeOnWebsite);