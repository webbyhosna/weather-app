const apiKey = "200cc0271b80e8068a17112a36d20d0a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherInfo = document.querySelector(".weather-info");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    weatherIcon.src = "./assets/undefined.png";
    weatherInfo.style.display = "none";

    document.querySelectorAll(".col").forEach((col) => {
      col.style.display = "none";
    });
  } else {
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Haze") {
      weatherIcon.src = "./assets/haze.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./assets/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./assets/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./assets/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./assets/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./assets/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./assets/snow.png";
    } else if (data.weather[0].main == "Ashes") {
      weatherIcon.src = "./assets/ashes.png";
    } else if (data.weather[0].main == "Dust") {
      weatherIcon.src = "./assets/dust.png";
    } else if (data.weather[0].main == "Fog") {
      weatherIcon.src = "./assets/fog.png";
    } else if (data.weather[0].main == "Smoke") {
      weatherIcon.src = "./assets/smoke.png";
    } else if (data.weather[0].main == "Thunder") {
      weatherIcon.src = "./assets/thunder.png";
    } else if (data.weather[0].main == "Thunderstorm") {
      weatherIcon.src = "./assets/thunderstorm.png";
    } else if (data.weather[0].main == "Tornado") {
      weatherIcon.src = "./assets/tornado.png";
    }

    document.querySelector(".error").style.display = "none";
    weatherInfo.style.display = "block";
    document.querySelectorAll(".col").forEach((col) => {
      col.style.display = "flex";
    });
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

checkWeather("Dhaka");
