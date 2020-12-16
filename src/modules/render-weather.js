import forecastWeath from "./forecast-weather";
function renderWeather(weather) {
  const currWeath = document.querySelector('.current-weather');
  if (!currWeath) return;
  weather.weather.forEach(el =>
  currWeath.innerHTML = `
    <img src='../img/${el.icon}.png'></img>
    <p>${weather.name}, ${weather.sys.country}</p>
    <h4>${weather.main.temp} <sup>o</sup>C </h4>
    <p> Wind now is ${weather.wind.speed} m/s.</p>
    `);
    forecastWeath(weather);
};
export default renderWeather;
