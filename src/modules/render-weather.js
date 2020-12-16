import forecastWeath from "./forecast-weather";
function renderWeather(weather) {
  const currWeath = document.querySelector('.current-weather');
  if (!currWeath) return;
  const icon =  weather.list[0].weather[0].icon;
  currWeath.innerHTML = `
  <img src='../img/${icon}.png'></img>
  <p>${weather.city.name}, ${weather.city.country}</p>
  <h4>${weather.list[0].main.temp} °C </h4>
  <p>Feels like ${weather.list[0].main.feels_like} °C<p>
  <p> Wind now is ${Math.floor(weather.list[0].wind.speed)} m/s.</p>
  `;
    forecastWeath(weather);
};


export default renderWeather;
