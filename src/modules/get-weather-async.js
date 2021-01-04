import renderToday from './render-today';
import renderForecast from './render-forecast';

async function getWeather(weatherUrl) {
  try {
    const response = await fetch(weatherUrl);
    const weather = await response.json();
    renderToday(weather);
    renderForecast(weather);
  } catch (err) {
    console.log(new Error('Sorry for unconvenience. Something happened wrong'));
  }
}

export default getWeather;
