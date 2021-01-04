import renderToday from './render-today';
import renderForecast from './render-forecast';

function getWeather(weatherUrl) {
  fetch(weatherUrl)
    .then((response) => response.json())
    .then((weather) => renderToday(weather))
    .then((weather) => renderForecast(weather))
    .catch(() => console.log(new Error('Sorry for unconvenience. Something happened wrong')));
}

export default getWeather;
