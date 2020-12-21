import forecastWeath from "./render-forecast";
function renderWeather(weather) {
  const currWeath = document.querySelector('.current-weather');
  if (!currWeath) return;
  const icon =  weather.list[0].weather[0].icon;
  currWeath.innerHTML = `
  <p class='city'>${weather.city.name}, ${weather.city.country}.</p> 
  <img src='./img/${icon}.png'></img>
  <p>${new Date().toDateString()}</p>
  <h2>${Math.floor(weather.list[0].main.temp)} °C </h2>
  <p>Feels like ${Math.floor(weather.list[0].main.feels_like)} °C<p>
  <p> Wind now is ${Math.floor(weather.list[0].wind.speed)} m/s.</p>
  `;
    forecastWeath(weather);
};


export default renderWeather;
