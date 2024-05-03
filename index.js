const apiKey = "67dd9232c5ede9ffad70a3a5c966effe";
const apiEndPoint =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

async function fetchData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  if(response.status===404){
    document.querySelector(".error").classList.remove("erase");
    document.querySelector(".weather").classList.add("erase");
  }else{
    const weatherData = await response.json();
    console.log(weatherData);
    document
      .querySelector(".weather-image")
      .setAttribute("src", `./images/${weatherData.weather[0].main}.png`);
    document.querySelector(".temp").textContent = `${weatherData.main.temp} °C`;
    document.querySelector(".city").textContent = weatherData.name;
    document.querySelector(
      ".humidity"
    ).textContent = `${weatherData.main.humidity} %`;
    document.querySelector(
      ".wind-speed"
    ).textContent = `${weatherData.wind.speed} Km/hr`;
    document.querySelector(".weather").classList.remove("erase");
    document.querySelector(".error").classList.add("erase");
  }
 
}

document.querySelector(".search-icon").addEventListener("click", function (e) {
  e.preventDefault();
  const city = document.querySelector(".search-city").value;
  fetchData(city);
});
