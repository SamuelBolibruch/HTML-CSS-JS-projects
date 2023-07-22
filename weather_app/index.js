const formEl = document.querySelector("form");
const cityInputEl = document.getElementById("city-input");
const weatherDataEl = document.querySelector(".weather-data");

const myApiKey = "99218141a7b9d4012bad37dbc618e28b";

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
})

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${myApiKey}&units=metric`
          );

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const data = await response.json();
        console.log(data);

        const icon = data.weather[0].icon;
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}`,
            `Wind speed: ${data.wind.speed} m/s`
        ]

        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;

        weatherDataEl.querySelector(
            ".temperature"
          ).textContent = `${temperature}°C`;

        weatherDataEl.querySelector(".description").textContent = description;
        
        weatherDataEl.querySelector(".details").innerHTML = details
        .map((detail) => `<div>${detail}</div>`).join("");

    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = "";
        weatherDataEl.querySelector(".temperature").textContent = "";
        weatherDataEl.querySelector(".description").textContent =
        "An error happened, please try again later";

        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}